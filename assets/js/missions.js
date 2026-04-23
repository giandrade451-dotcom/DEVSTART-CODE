/* =============================================================
   Devstart UP — Missões diárias
   Gera 3 missões por dia por usuário; recompensa XP + moedas.
   Persiste em localStorage sob "devstart.missions.<username>.<YYYY-MM-DD>"
   ============================================================= */
(function () {
  const KEY = (username, day) => `devstart.missions.${username}.${day}`;
  const LAST_DAY_KEY = (username) => `devstart.missions.lastDay.${username}`;

  // Catálogo de missões — test(progress, state) e pool para sorteio diário.
  const CATALOG = [
    { id: "m-lesson-1", emoji: "📚", title: "Conclua 1 aula hoje",     goal: 1, type: "lesson",    xp: 30, coins: 2 },
    { id: "m-lesson-3", emoji: "🚀", title: "Conclua 3 aulas hoje",    goal: 3, type: "lesson",    xp: 80, coins: 5 },
    { id: "m-quiz-1",   emoji: "🧠", title: "Faça 1 quiz",             goal: 1, type: "quiz",      xp: 25, coins: 2 },
    { id: "m-quiz-3",   emoji: "🎯", title: "Faça 3 quizzes",          goal: 3, type: "quiz",      xp: 70, coins: 4 },
    { id: "m-perfect",  emoji: "💯", title: "Tire 100% em 1 quiz",     goal: 1, type: "perfect",   xp: 50, coins: 3 },
    { id: "m-comment",  emoji: "💬", title: "Comente em 1 aula",       goal: 1, type: "comment",   xp: 20, coins: 1 },
    { id: "m-forum",    emoji: "🧵", title: "Publique ou responda no fórum", goal: 1, type: "forum", xp: 30, coins: 2 },
    { id: "m-visit",    emoji: "📖", title: "Abra 2 aulas diferentes", goal: 2, type: "visit",     xp: 15, coins: 1 },
    { id: "m-project",  emoji: "🧑‍💻", title: "Publique 1 projeto no portfólio", goal: 1, type: "project", xp: 40, coins: 3 },
    { id: "m-streak",   emoji: "🔥", title: "Mantenha a ofensiva hoje", goal: 1, type: "checkin",   xp: 10, coins: 1 },
  ];

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  }

  // Sorteio determinístico por usuário + dia — mesma seed = mesmas missões no dia.
  function pickForDay(username, day) {
    const seed = hash(`${username}|${day}`);
    const pool = [...CATALOG];
    const picked = [];
    let s = seed;
    while (picked.length < 3 && pool.length) {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      const idx = s % pool.length;
      picked.push(pool.splice(idx, 1)[0]);
    }
    return picked.map(m => ({ ...m, progress: 0, done: false, claimed: false }));
  }

  function hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  function getDaily(username) {
    if (!username) return [];
    const day = todayStr();
    const lastDay = localStorage.getItem(LAST_DAY_KEY(username));
    if (lastDay && lastDay !== day) {
      // limpa dias antigos (mantém só o atual)
      // não é crítico — o localStorage não vai crescer muito, mas ajuda.
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith(`devstart.missions.${username}.`) && !k.endsWith(day)) {
            // não remove aqui para evitar reindex durante o loop
          }
        }
      } catch (e) {}
    }
    localStorage.setItem(LAST_DAY_KEY(username), day);
    const raw = localStorage.getItem(KEY(username, day));
    if (raw) {
      try { return JSON.parse(raw); } catch (e) {}
    }
    const fresh = pickForDay(username, day);
    localStorage.setItem(KEY(username, day), JSON.stringify(fresh));
    return fresh;
  }

  function save(username, missions) {
    localStorage.setItem(KEY(username, todayStr()), JSON.stringify(missions));
  }

  function track(username, type, amount = 1, meta) {
    if (!username || !type) return;
    const missions = getDaily(username);
    let changed = false;
    missions.forEach(m => {
      if (m.done) return;
      if (m.type === type || (type === "perfect" && m.type === "quiz")) {
        m.progress = Math.min(m.goal, (m.progress || 0) + amount);
        if (m.progress >= m.goal) {
          m.done = true;
          changed = true;
        }
      }
    });
    if (changed) {
      save(username, missions);
      // toast não-bloqueante
      if (window.DevstartApp?.toast) {
        const justDone = missions.filter(m => m.done && !m.claimed && m._notified !== true);
        justDone.forEach(m => {
          m._notified = true;
          window.DevstartApp.toast({
            title: `Missão concluída ${m.emoji}`,
            message: `${m.title} — reivindique +${m.xp} XP no painel.`,
            type: "success",
            timeout: 4500,
          });
        });
        save(username, missions);
      }
    } else {
      save(username, missions);
    }
  }

  function claim(username, missionId) {
    if (!username) return null;
    const missions = getDaily(username);
    const m = missions.find(x => x.id === missionId);
    if (!m || !m.done || m.claimed) return null;
    m.claimed = true;
    save(username, missions);
    // Grant XP usando o sistema de gamificação — moedas já contabilizadas no grantXP.
    try {
      window.DevstartGame?.grantXP?.(username, m.xp, `Missão: ${m.title}`);
    } catch (e) {}
    return m;
  }

  function claimAll(username) {
    const missions = getDaily(username);
    const claimed = [];
    missions.forEach(m => {
      if (m.done && !m.claimed) {
        m.claimed = true;
        claimed.push(m);
      }
    });
    if (claimed.length) {
      save(username, missions);
      const totalXp = claimed.reduce((s, m) => s + m.xp, 0);
      try {
        window.DevstartGame?.grantXP?.(username, totalXp, `Missões: ${claimed.length} conquistada(s)`);
      } catch (e) {}
    }
    return claimed;
  }

  function summary(username) {
    const missions = getDaily(username);
    const done = missions.filter(m => m.done).length;
    const claimable = missions.filter(m => m.done && !m.claimed).length;
    const total = missions.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { missions, done, total, pct, claimable };
  }

  window.DevstartMissions = {
    CATALOG,
    getDaily,
    track,
    claim,
    claimAll,
    summary,
  };
})();
