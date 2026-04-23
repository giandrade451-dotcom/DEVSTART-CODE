/* =============================================================
   Devstart UP — Recomendações inteligentes
   Sugere "próximo melhor passo" com base em progresso + categorias.
   ============================================================= */
(function () {
  function recommend(user, { limit = 3 } = {}) {
    const courses = window.DevstartCourses || [];
    if (!user) {
      // Sem login: cursos gratuitos mais populares da seed
      return courses.filter(c => !c.vip).slice(0, limit).map(c => ({
        course: c, reason: "Curso inicial recomendado para começar", priority: 1,
      }));
    }
    const getProg = window.DevstartApp?.progress?.getCourseProgress;
    if (!getProg) return [];

    const progressByCourse = courses.map(c => ({ course: c, p: getProg(user, c) }));
    const inProgress = progressByCourse.filter(x => x.p.completed > 0 && x.p.percent < 100);
    const finished = progressByCourse.filter(x => x.p.percent === 100);
    const finishedCats = new Set(
      finished.map(x => window.DevstartConfig?.getCategory?.(x.course.id)).filter(Boolean)
    );

    const recs = [];

    // 1) Cursos em andamento — retomar primeiro
    inProgress
      .sort((a, b) => b.p.percent - a.p.percent)
      .slice(0, limit)
      .forEach(x => recs.push({
        course: x.course,
        reason: `Retome este curso — ${x.p.percent}% concluído`,
        priority: 3,
        progress: x.p,
      }));

    // 2) Categorias iniciadas/terminadas → sugerir avanço
    if (recs.length < limit) {
      const related = progressByCourse.filter(x => {
        if (x.p.percent === 100 || x.p.completed > 0) return false;
        const cat = window.DevstartConfig?.getCategory?.(x.course.id);
        if (!cat) return false;
        if (finishedCats.has(cat)) return true;
        return false;
      });
      related.slice(0, limit - recs.length).forEach(x => recs.push({
        course: x.course,
        reason: "Relacionado a cursos que você já concluiu",
        priority: 2,
        progress: x.p,
      }));
    }

    // 3) Trilhas — próxima etapa da trilha mais avançada
    if (recs.length < limit) {
      const paths = window.DevstartConfig?.PATHS || [];
      paths.forEach(path => {
        if (recs.length >= limit) return;
        const pathCourses = path.courses.map(cid => courses.find(c => c.id === cid)).filter(Boolean);
        for (const c of pathCourses) {
          const p = getProg(user, c);
          if (p.percent < 100) {
            if (!recs.some(r => r.course.id === c.id) && (!c.vip || user.vip)) {
              recs.push({
                course: c,
                reason: `Próxima etapa da trilha ${path.name}`,
                priority: 1,
                progress: p,
                pathName: path.name,
              });
            }
            break;
          }
        }
      });
    }

    // 4) Preencher com gratuitos populares
    if (recs.length < limit) {
      progressByCourse
        .filter(x => !x.course.vip && x.p.completed === 0 && !recs.some(r => r.course.id === x.course.id))
        .slice(0, limit - recs.length)
        .forEach(x => recs.push({
          course: x.course,
          reason: "Sugestão para começar",
          priority: 0,
          progress: x.p,
        }));
    }

    return recs.slice(0, limit).sort((a, b) => b.priority - a.priority);
  }

  function nextBestStep(user) {
    const recs = recommend(user, { limit: 1 });
    return recs[0] || null;
  }

  function nextLessonOf(user, course) {
    if (!user || !course) return null;
    const getProg = window.DevstartApp?.progress?.getCourseProgress;
    if (!getProg) return null;
    const p = getProg(user, course);
    const doneIds = new Set(p.completedLessons || []);
    return course.lessons.find(l => !doneIds.has(l.id)) || null;
  }

  window.DevstartRecs = { recommend, nextBestStep, nextLessonOf };
})();
