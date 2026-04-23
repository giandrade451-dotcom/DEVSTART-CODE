/* =============================================================
   Devstart UP — Gamificação (XP, níveis, streak, badges, moedas)
   Persiste em localStorage sob "devstart.gamification.<username>"
   ============================================================= */
(function () {
  const KEY = (username) => `devstart.gamification.${username}`;

  // Níveis — nomes e limites acumulados de XP
  const LEVELS = [
    { id: 1, name: "Iniciante",   min: 0 },
    { id: 2, name: "Aprendiz",    min: 200 },
    { id: 3, name: "Júnior",      min: 600 },
    { id: 4, name: "Pleno",       min: 1400 },
    { id: 5, name: "Avançado",    min: 2800 },
    { id: 6, name: "Sênior",      min: 5000 },
    { id: 7, name: "Especialista",min: 8500 },
    { id: 8, name: "Mestre Dev",  min: 14000 },
  ];

  // Conquistas — ordem importa para exibição.
  // `test(state, user)` retorna true quando desbloqueada.
  const BADGES = [
    { id: "b-first", emoji: "🌱", title: "Primeira aula", description: "Conclua sua primeira aula.", test: (s) => s.lessonsDone >= 1 },
    { id: "b-streak3", emoji: "🔥", title: "Ofensiva de 3", description: "Estude 3 dias seguidos.", test: (s) => s.streak >= 3 },
    { id: "b-streak7", emoji: "🏆", title: "Ofensiva de 7", description: "Estude 7 dias seguidos.", test: (s) => s.streak >= 7 },
    { id: "b-streak30", emoji: "💎", title: "Ofensiva de 30", description: "Estude 30 dias seguidos.", test: (s) => s.streak >= 30 },
    { id: "b-quiz10", emoji: "🧠", title: "Quiz afiado", description: "Complete 10 quizzes.", test: (s) => s.quizzesDone >= 10 },
    { id: "b-perfect5", emoji: "🎯", title: "Atirador certeiro", description: "5 quizzes com nota máxima.", test: (s) => s.perfectQuizzes >= 5 },
    { id: "b-courseFinished", emoji: "📘", title: "Curso finalizado", description: "Conclua todas as aulas de um curso.", test: (s) => s.coursesFinished >= 1 },
    { id: "b-js-pro", emoji: "🟨", title: "JavaScript Pro", description: "Conclua 3 cursos da categoria JavaScript.", test: (s) => (s.categoriesDone.javascript || 0) >= 3 },
    { id: "b-front-pro", emoji: "🎨", title: "Frontend Pro", description: "Conclua 3 cursos de Frontend.", test: (s) => (s.categoriesDone.frontend || 0) >= 3 },
    { id: "b-back-pro", emoji: "🛠️", title: "Backend Pro", description: "Conclua 3 cursos de Backend.", test: (s) => (s.categoriesDone.backend || 0) >= 3 },
    { id: "b-fullstack", emoji: "⚡", title: "Fullstack Dev", description: "Conclua 1 curso de cada: Frontend e Backend.", test: (s) => (s.categoriesDone.frontend || 0) >= 1 && (s.categoriesDone.backend || 0) >= 1 },
    { id: "b-py-pro", emoji: "🐍", title: "Python Pro", description: "Conclua 2 cursos de Python.", test: (s) => (s.categoriesDone.python || 0) >= 2 },
    { id: "b-vip", emoji: "👑", title: "Membro VIP", description: "Tenha acesso VIP liberado.", test: (_s, u) => !!(u && u.vip) },
    { id: "b-community", emoji: "👥", title: "Comunidade ativa", description: "Publique no fórum ou na vitrine.", test: (s) => (s.communityPosts || 0) >= 1 },
    { id: "b-xp1000", emoji: "⭐", title: "1.000 XP", description: "Alcance 1.000 pontos de XP.", test: (s) => s.xp >= 1000 },
    { id: "b-xp5000", emoji: "🌟", title: "5.000 XP", description: "Alcance 5.000 pontos de XP.", test: (s) => s.xp >= 5000 },
  ];

  const DEFAULT_STATE = () => ({
    xp: 0,
    coins: 0,
    streak: 0,
    longestStreak: 0,
    lastActiveDay: null,
    badges: [],         // ids desbloqueados
    lessonsDone: 0,
    quizzesDone: 0,
    perfectQuizzes: 0,
    coursesFinished: 0,
    communityPosts: 0,
    categoriesDone: {},
    history: [],        // {at, type, xp, note}
  });

  function get(username) {
    if (!username) return DEFAULT_STATE();
    try {
      const raw = localStorage.getItem(KEY(username));
      return raw ? Object.assign(DEFAULT_STATE(), JSON.parse(raw)) : DEFAULT_STATE();
    } catch (e) {
      return DEFAULT_STATE();
    }
  }
  function set(username, state) {
    try { localStorage.setItem(KEY(username), JSON.stringify(state)); } catch (e) {}
  }

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  }
  function daysBetween(a, b) {
    const da = new Date(a + "T00:00:00");
    const db = new Date(b + "T00:00:00");
    return Math.round((db - da) / 86400000);
  }

  function levelFor(xp) {
    let curr = LEVELS[0];
    for (const lv of LEVELS) if (xp >= lv.min) curr = lv;
    const idx = LEVELS.indexOf(curr);
    const next = LEVELS[idx + 1] || null;
    const progressPct = next
      ? Math.min(100, Math.round(((xp - curr.min) / (next.min - curr.min)) * 100))
      : 100;
    return { ...curr, next, progressPct, xpToNext: next ? next.min - xp : 0 };
  }

  function evaluateBadges(state, user) {
    let changed = false;
    const unlocked = [];
    for (const b of BADGES) {
      if (state.badges.includes(b.id)) continue;
      try {
        if (b.test(state, user)) {
          state.badges.push(b.id);
          unlocked.push(b);
          changed = true;
        }
      } catch (e) {}
    }
    return { changed, unlocked };
  }

  function touchStreak(state) {
    const today = todayStr();
    if (state.lastActiveDay === today) return;
    if (!state.lastActiveDay) {
      state.streak = 1;
    } else {
      const diff = daysBetween(state.lastActiveDay, today);
      if (diff === 1) state.streak += 1;
      else if (diff > 1) state.streak = 1;
    }
    state.lastActiveDay = today;
    state.longestStreak = Math.max(state.longestStreak, state.streak);
  }

  function grantXP(username, amount, note) {
    if (!username || !amount) return null;
    const user = window.DevstartApp?.users.currentUser();
    const s = get(username);
    s.xp += amount;
    s.coins += Math.round(amount / 10);
    s.history.unshift({ at: Date.now(), xp: amount, note: note || "" });
    s.history = s.history.slice(0, 80);
    touchStreak(s);
    const before = s.xp - amount;
    const lvBefore = levelFor(before).id;
    const lvAfter = levelFor(s.xp).id;
    const { unlocked } = evaluateBadges(s, user);
    set(username, s);
    if (window.DevstartApp?.toast) {
      window.DevstartApp.toast({ title: `+${amount} XP`, message: note || "", type: "success" });
      if (lvAfter > lvBefore) {
        window.DevstartApp.toast({ title: "Subiu de nível! 🎉", message: `Agora você é ${levelFor(s.xp).name}.`, type: "success", timeout: 5000 });
      }
      unlocked.forEach(b => {
        window.DevstartApp.toast({ title: `Conquista desbloqueada ${b.emoji}`, message: b.title, type: "success", timeout: 4500 });
      });
    }
    window.dispatchEvent(new CustomEvent("devstart:xp", { detail: { username, state: s } }));
    return s;
  }

  function onLessonComplete(username) {
    const s = get(username);
    s.lessonsDone = (s.lessonsDone || 0) + 1;
    set(username, s);
    return grantXP(username, 60, "Aula concluída");
  }
  function onQuizComplete(username, result) {
    const s = get(username);
    s.quizzesDone = (s.quizzesDone || 0) + 1;
    if (result && result.percent === 100) s.perfectQuizzes = (s.perfectQuizzes || 0) + 1;
    set(username, s);
    const xp = result && result.percent === 100 ? 50 : result && result.percent >= 60 ? 30 : 10;
    return grantXP(username, xp, `Quiz ${result ? result.percent + "%" : ""}`.trim());
  }
  function onCourseComplete(username, courseCategory) {
    const s = get(username);
    s.coursesFinished = (s.coursesFinished || 0) + 1;
    if (courseCategory) {
      s.categoriesDone[courseCategory] = (s.categoriesDone[courseCategory] || 0) + 1;
    }
    set(username, s);
    return grantXP(username, 250, "Curso finalizado! 🎓");
  }
  function onCommunityPost(username, kind) {
    const s = get(username);
    s.communityPosts = (s.communityPosts || 0) + 1;
    set(username, s);
    return grantXP(username, kind === "project" ? 40 : 20, "Contribuição na comunidade");
  }
  function dailyCheckIn(username) {
    if (!username) return null;
    const s = get(username);
    const today = todayStr();
    if (s.lastActiveDay === today) return s;
    touchStreak(s);
    s.xp += 15;
    s.coins += 1;
    s.history.unshift({ at: Date.now(), xp: 15, note: "Check-in diário" });
    s.history = s.history.slice(0, 80);
    const user = window.DevstartApp?.users.currentUser();
    const { unlocked } = evaluateBadges(s, user);
    set(username, s);
    if (window.DevstartApp?.toast) {
      unlocked.forEach(b => {
        window.DevstartApp.toast({ title: `Conquista desbloqueada ${b.emoji}`, message: b.title, type: "success", timeout: 4500 });
      });
    }
    return s;
  }

  function leaderboard(limit = 20) {
    const users = window.DevstartApp?.users.getUsers() || [];
    const rows = users.map(u => {
      const s = get(u.username);
      return {
        username: u.username,
        vip: !!u.vip,
        xp: s.xp,
        level: levelFor(s.xp),
        streak: s.streak,
        lessonsDone: s.lessonsDone,
        badges: s.badges.length,
      };
    });
    rows.sort((a, b) => b.xp - a.xp);
    return rows.slice(0, limit);
  }

  window.DevstartGame = {
    LEVELS,
    BADGES,
    get,
    set,
    levelFor,
    grantXP,
    onLessonComplete,
    onQuizComplete,
    onCourseComplete,
    onCommunityPost,
    dailyCheckIn,
    leaderboard,
    badgeById(id) { return BADGES.find(b => b.id === id); },
    evaluateBadges(username) {
      const s = get(username);
      const user = window.DevstartApp?.users.currentUser();
      const r = evaluateBadges(s, user);
      if (r.changed) set(username, s);
      return r;
    },
  };
})();
