/* Dashboard page — Fase 4: XP bar, streak, missões diárias, quick actions, recomendações. */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const { users, progress, escapeHtml, locks } = window.DevstartApp;
    const user = users.currentUser();
    if (!user) {
      window.location.href = "login.html";
      return;
    }
    const courses = window.DevstartCourses || [];

    document.getElementById("greeting").innerHTML =
      `Bem-vindo de volta, <span class="gradient-text">${escapeHtml(user.username)}</span> 👋`;

    const all = courses.map(c => ({ course: c, p: progress.getCourseProgress(user, c) }));
    const active = all.filter(x => x.p.completed > 0 && x.p.percent < 100);
    const completed = all.filter(x => x.p.percent === 100);
    const totalLessonsDone = all.reduce((s, x) => s + x.p.completed, 0);
    const totalQuizzes = all.reduce((s, x) => s + Object.keys(x.p.quizzes).length, 0);

    renderHero(user);
    renderQuickActions(user);
    renderMissions(user);

    // Stats
    const stats = [
      { lab: "Aulas concluídas", num: totalLessonsDone, sub: `de ${courses.reduce((s,c) => s + c.lessons.length, 0)} no total` },
      { lab: "Cursos em andamento", num: active.length, sub: active.length ? "Mantenha o ritmo" : "Comece um curso abaixo" },
      { lab: "Cursos concluídos", num: completed.length, sub: completed.length ? "🎉 Incrível" : "O primeiro está perto" },
      { lab: "Quizzes feitos", num: totalQuizzes, sub: user.vip ? "Membro VIP 👑" : "Plano gratuito" },
    ];
    document.getElementById("dash-stats").innerHTML = stats.map(s => `
      <div class="dash-stat">
        <div class="lab">${escapeHtml(s.lab)}</div>
        <div class="num gradient-text">${s.num}</div>
        <div class="sub2">${escapeHtml(s.sub)}</div>
      </div>
    `).join("");

    // Active courses
    const activeGrid = document.getElementById("active-grid");
    const emptyActive = document.getElementById("empty-active");
    if (active.length === 0) {
      activeGrid.classList.add("hidden");
      emptyActive.classList.remove("hidden");
    } else {
      activeGrid.innerHTML = active.map(({ course, p }) => courseCard(course, p, user)).join("");
    }

    renderRecommendations(user);

    // Free and VIP
    document.getElementById("free-grid").innerHTML =
      courses.filter(c => !c.vip).map(c => courseCard(c, progress.getCourseProgress(user, c), user)).join("");
    document.getElementById("vip-grid").innerHTML =
      courses.filter(c => c.vip).map(c => courseCard(c, progress.getCourseProgress(user, c), user, true)).join("");

    window.DevstartApp.initReveal();

    // Re-render missions ao ganhar XP (ex.: quando outra aba reivindica)
    window.addEventListener("devstart:xp", () => renderMissions(user));
  });

  function renderHero(user) {
    const Game = window.DevstartGame;
    if (!Game) return;
    const state = Game.get(user.username);
    const level = Game.levelFor(state.xp || 0);
    const hero = document.getElementById("dash-hero");
    if (!hero) return;
    hero.innerHTML = `
      <div class="hero-card reveal">
        <div class="hero-top">
          <div class="hero-avatar">${user.username.charAt(0).toUpperCase()}</div>
          <div class="hero-meta">
            <div class="hero-name">Lv ${level.id} · ${escapeHtmlLocal(level.name)}</div>
            <div class="hero-sub">${state.xp} XP · 🔥 ${state.streak || 0} dia${state.streak === 1 ? "" : "s"} · 🪙 ${state.coins || 0}</div>
          </div>
          <a class="btn ghost sm" href="ranking.html">Ver ranking →</a>
        </div>
        <div class="xp-bar">
          <div class="xp-track"><span style="width:${level.progressPct}%"></span></div>
          <div class="xp-label">
            ${level.next
              ? `${level.xpToNext} XP para ${escapeHtmlLocal(level.next.name)}`
              : "Nível máximo alcançado — lenda viva."}
          </div>
        </div>
      </div>
    `;
  }

  function renderQuickActions(user) {
    const root = document.getElementById("quick-actions");
    if (!root) return;
    const best = window.DevstartRecs?.nextBestStep(user);
    const actions = [];
    if (best) {
      const nextLesson = window.DevstartRecs?.nextLessonOf(user, best.course);
      const href = nextLesson
        ? `lesson.html?course=${encodeURIComponent(best.course.id)}&lesson=${encodeURIComponent(nextLesson.id)}`
        : `course.html?id=${encodeURIComponent(best.course.id)}`;
      actions.push({
        emoji: "▶️",
        title: best.progress?.percent > 0 ? "Continuar aprendendo" : "Começar próxima etapa",
        sub: `${best.course.title} — ${best.reason}`,
        href,
        cta: best.progress?.percent > 0 ? "Continuar" : "Começar",
      });
    }
    actions.push({
      emoji: "🧪",
      title: "Praticar no Playground",
      sub: "Escreva HTML/CSS/JS direto no navegador.",
      href: "playground.html",
      cta: "Abrir",
    });
    actions.push({
      emoji: "🧑‍💻",
      title: "Publicar projeto",
      sub: "Mostre sua evolução na vitrine da comunidade.",
      href: "projects.html",
      cta: "Publicar",
    });
    if (!user.vip) {
      actions.push({
        emoji: "👑",
        title: "Desbloquear VIP",
        sub: "Trilhas avançadas, projetos premium e mentoria.",
        href: "vip.html",
        cta: "Ver planos",
      });
    } else {
      actions.push({
        emoji: "🏅",
        title: "Ver certificados",
        sub: "Baixe e compartilhe os seus certificados.",
        href: "certificates.html",
        cta: "Abrir",
      });
    }
    root.innerHTML = actions.map(a => `
      <a class="quick-card reveal" href="${a.href}">
        <div class="emoji">${a.emoji}</div>
        <div class="flex1">
          <div class="title">${escapeHtmlLocal(a.title)}</div>
          <div class="sub">${escapeHtmlLocal(a.sub)}</div>
        </div>
        <span class="btn sm primary">${escapeHtmlLocal(a.cta)} →</span>
      </a>
    `).join("");
  }

  function renderMissions(user) {
    const root = document.getElementById("missions-widget");
    if (!root) return;
    const Missions = window.DevstartMissions;
    if (!Missions) { root.innerHTML = ""; return; }
    const { missions, done, total, pct, claimable } = Missions.summary(user.username);

    root.innerHTML = `
      <div class="missions-card reveal">
        <div class="missions-head">
          <div>
            <h3 style="margin:0;">Missões diárias</h3>
            <div class="small text-muted">Recompensas fresquinhas todo dia — ${done}/${total} concluídas hoje.</div>
          </div>
          ${claimable > 0 ? `<button class="btn primary sm" id="claim-all">Reivindicar tudo (${claimable})</button>` : ""}
        </div>
        <div class="progress" style="margin:10px 0 14px;"><span style="width:${pct}%"></span></div>
        <div class="missions-list">
          ${missions.map(m => `
            <div class="mission-row ${m.done ? "done" : ""} ${m.claimed ? "claimed" : ""}">
              <div class="m-emoji">${m.emoji}</div>
              <div class="flex1">
                <div class="m-title">${escapeHtmlLocal(m.title)}</div>
                <div class="m-meta">${m.progress}/${m.goal} · +${m.xp} XP · +${m.coins} 🪙</div>
                <div class="progress sm"><span style="width:${Math.min(100, Math.round((m.progress/m.goal)*100))}%"></span></div>
              </div>
              <div>
                ${m.claimed
                  ? `<span class="badge done">Reivindicada</span>`
                  : m.done
                    ? `<button class="btn primary sm" data-claim="${m.id}">Reivindicar</button>`
                    : `<span class="badge">Em progresso</span>`}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
    root.querySelectorAll("[data-claim]").forEach(b => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-claim");
        const claimed = Missions.claim(user.username, id);
        if (claimed) renderMissions(user);
      });
    });
    const claimAllBtn = root.querySelector("#claim-all");
    if (claimAllBtn) {
      claimAllBtn.addEventListener("click", () => {
        Missions.claimAll(user.username);
        renderMissions(user);
      });
    }
  }

  function renderRecommendations(user) {
    const root = document.getElementById("recommendations");
    if (!root) return;
    const recs = window.DevstartRecs?.recommend(user, { limit: 3 }) || [];
    if (!recs.length) { root.innerHTML = ""; return; }
    root.innerHTML = `
      <h2 style="margin:24px 0 12px;">Para você · próximos passos</h2>
      <div class="grid cols-3">
        ${recs.map(r => {
          const nextLesson = window.DevstartRecs?.nextLessonOf(user, r.course);
          const href = nextLesson
            ? `lesson.html?course=${encodeURIComponent(r.course.id)}&lesson=${encodeURIComponent(nextLesson.id)}`
            : `course.html?id=${encodeURIComponent(r.course.id)}`;
          return `
            <a class="rec-card reveal" href="${href}">
              <div class="course-cover ${r.course.theme || ""}"><span>${escapeHtmlLocal(r.course.cover || r.course.emoji || "📘")}</span></div>
              <div class="rec-body">
                <div class="small text-muted">${escapeHtmlLocal(r.reason)}</div>
                <h3 style="margin:6px 0;">${escapeHtmlLocal(r.course.title)}</h3>
                <div class="progress-label"><span>${r.progress?.completed || 0}/${r.progress?.total || r.course.lessons.length}</span><span>${r.progress?.percent || 0}%</span></div>
                <div class="progress"><span style="width:${r.progress?.percent || 0}%"></span></div>
                <span class="btn primary sm" style="margin-top:10px;">Retomar →</span>
              </div>
            </a>`;
        }).join("")}
      </div>
    `;
  }

  function courseCard(course, p, user, isVipGrid = false) {
    const { escapeHtml, locks } = window.DevstartApp;
    const lockedByAdmin = locks.isCourseLockedForAll(course.id);
    const lockedByVIP = course.vip && !user.vip;
    const locked = lockedByAdmin || lockedByVIP;
    const label = locked
      ? (lockedByVIP ? "Desbloquear VIP" : "Bloqueado")
      : (p.completed === 0 ? "Iniciar curso" : (p.percent === 100 ? "Revisar" : "Continuar"));
    const href = locked
      ? (lockedByVIP ? "vip.html" : "#")
      : `course.html?id=${encodeURIComponent(course.id)}`;
    return `
      <a class="card course-card ${locked ? "locked" : ""}" href="${href}">
        <div class="course-cover ${course.theme || ""}"><span>${escapeHtml(course.cover || course.emoji || "📘")}</span></div>
        <div class="course-head">
          <span class="badge ${course.vip ? "vip" : "free"}">${course.vip ? "VIP" : "Grátis"}</span>
          <span class="course-meta">${course.lessons.length} aulas</span>
        </div>
        <h3>${escapeHtml(course.title)}</h3>
        <p>${escapeHtml(course.tagline)}</p>
        <div>
          <div class="progress-label"><span>${p.completed}/${p.total}</span><span>${p.percent}%</span></div>
          <div class="progress"><span style="width:${p.percent}%"></span></div>
        </div>
        <div class="course-foot">
          <span class="course-meta">⏱ ${escapeHtml(course.duration)}</span>
          <span class="btn sm primary">${label} →</span>
        </div>
      </a>
    `;
  }

  function escapeHtmlLocal(s) {
    return (s || "").toString().replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }
})();
