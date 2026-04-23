/* Dashboard page */
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

    // Free and VIP
    document.getElementById("free-grid").innerHTML =
      courses.filter(c => !c.vip).map(c => courseCard(c, progress.getCourseProgress(user, c), user)).join("");
    document.getElementById("vip-grid").innerHTML =
      courses.filter(c => c.vip).map(c => courseCard(c, progress.getCourseProgress(user, c), user, true)).join("");

    window.DevstartApp.initReveal();
  });

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
        <div class="course-cover ${course.theme}"><span>${escapeHtml(course.cover)}</span></div>
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
})();
