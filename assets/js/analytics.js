/* =============================================================
   Devstart UP — Analytics (admin)
   Agrega dados de localStorage: usuários, progresso, XP, cursos.
   ============================================================= */
(function () {
  function sevenDayMs() { return 7 * 24 * 60 * 60 * 1000; }

  function compute() {
    const users = window.DevstartApp?.users?.getUsers?.() || [];
    const courses = window.DevstartCourses || [];
    const totalUsers = users.length;
    const totalVip = users.filter(u => u.vip).length;
    const conversionPct = totalUsers ? Math.round((totalVip / totalUsers) * 100) : 0;
    const now = Date.now();

    // Usuários ativos na última semana (baseado em gamification.history)
    let activeWeek = 0;
    let totalXp = 0;
    let lessonsDone = 0;
    let quizzesDone = 0;
    let perfects = 0;
    let coursesFinished = 0;

    const userRows = users.map(u => {
      const s = window.DevstartGame?.get?.(u.username) || { xp: 0, history: [], lessonsDone: 0, quizzesDone: 0, perfectQuizzes: 0, coursesFinished: 0, streak: 0 };
      const recent = (s.history || []).some(h => now - h.at < sevenDayMs());
      if (recent) activeWeek++;
      totalXp += s.xp || 0;
      lessonsDone += s.lessonsDone || 0;
      quizzesDone += s.quizzesDone || 0;
      perfects += s.perfectQuizzes || 0;
      coursesFinished += s.coursesFinished || 0;
      return { user: u, state: s };
    });

    // Completion rate por curso: % dos usuários que terminaram o curso
    const getProg = window.DevstartApp?.progress?.getCourseProgress;
    const courseStats = courses.map(c => {
      let starts = 0;
      let completions = 0;
      let totalPct = 0;
      let countWithProgress = 0;
      users.forEach(u => {
        const p = getProg?.(u, c);
        if (!p) return;
        if (p.completed > 0) {
          starts++;
          totalPct += p.percent;
          countWithProgress++;
        }
        if (p.percent === 100) completions++;
      });
      const avgPct = countWithProgress ? Math.round(totalPct / countWithProgress) : 0;
      const completionRate = starts ? Math.round((completions / starts) * 100) : 0;
      return { course: c, starts, completions, avgPct, completionRate };
    }).sort((a, b) => b.starts - a.starts);

    // Top cursos populares (por starts)
    const topCourses = courseStats.slice(0, 8);
    // Cursos com melhor completion rate (entre os que têm ao menos 1 start)
    const bestCompletion = [...courseStats].filter(x => x.starts > 0).sort((a, b) => b.completionRate - a.completionRate).slice(0, 5);

    // Ativos hoje (check-in)
    const today = (function(){ const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; })();
    const activeToday = userRows.filter(r => r.state.lastActiveDay === today).length;

    // Ranking curto
    const leaderboard = userRows
      .map(r => ({ username: r.user.username, xp: r.state.xp || 0, streak: r.state.streak || 0, vip: !!r.user.vip }))
      .sort((a, b) => b.xp - a.xp)
      .slice(0, 10);

    return {
      totalUsers,
      totalVip,
      conversionPct,
      activeWeek,
      activeToday,
      totalXp,
      lessonsDone,
      quizzesDone,
      perfects,
      coursesFinished,
      topCourses,
      bestCompletion,
      leaderboard,
      courseStats,
    };
  }

  window.DevstartAnalytics = { compute };
})();
