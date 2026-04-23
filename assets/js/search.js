/* =============================================================
   Devstart UP — Busca global (cursos, aulas, fórum, projetos)
   ============================================================= */
(function () {
  function stripTags(html) {
    return String(html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  }
  function fuzzyIncludes(haystack, needle) {
    if (!needle) return true;
    return String(haystack || "").toLowerCase().includes(needle.toLowerCase());
  }

  function search(query, opts = {}) {
    const q = String(query || "").trim();
    const limitEach = opts.limit || 20;
    const results = { courses: [], lessons: [], posts: [], projects: [] };
    if (!q) return results;

    const courses = window.DevstartCourses || [];
    // cursos
    for (const c of courses) {
      if (
        fuzzyIncludes(c.title, q) ||
        fuzzyIncludes(c.description, q) ||
        fuzzyIncludes(c.tagline, q) ||
        fuzzyIncludes(c.instructor, q)
      ) {
        results.courses.push({
          id: c.id,
          title: c.title,
          description: c.description || c.tagline,
          vip: !!c.vip,
          href: `course.html?id=${encodeURIComponent(c.id)}`,
        });
      }
      // aulas
      for (const l of (c.lessons || [])) {
        const hay = [l.title, l.summary, stripTags(l.content)].join(" ");
        if (fuzzyIncludes(hay, q)) {
          results.lessons.push({
            courseId: c.id,
            courseTitle: c.title,
            lessonId: l.id,
            title: l.title,
            summary: l.summary,
            href: `lesson.html?course=${encodeURIComponent(c.id)}&lesson=${encodeURIComponent(l.id)}`,
          });
          if (results.lessons.length >= limitEach * 2) break;
        }
      }
    }
    results.courses = results.courses.slice(0, limitEach);
    results.lessons = results.lessons.slice(0, limitEach);

    // fórum
    try {
      const posts = JSON.parse(localStorage.getItem("devstart.forum") || "[]");
      results.posts = posts
        .filter(p => fuzzyIncludes(p.title, q) || fuzzyIncludes(p.body, q) || fuzzyIncludes(p.author, q))
        .slice(0, limitEach)
        .map(p => ({ id: p.id, title: p.title, author: p.author, href: `forum.html?post=${encodeURIComponent(p.id)}`, createdAt: p.createdAt }));
    } catch (e) {}

    // projetos
    try {
      const projects = JSON.parse(localStorage.getItem("devstart.projects") || "[]");
      results.projects = projects
        .filter(p => fuzzyIncludes(p.title, q) || fuzzyIncludes(p.description, q) || (p.techs || []).some(t => fuzzyIncludes(t, q)) || fuzzyIncludes(p.author, q))
        .slice(0, limitEach)
        .map(p => ({ id: p.id, title: p.title, author: p.author, techs: p.techs, href: `projects.html?project=${encodeURIComponent(p.id)}` }));
    } catch (e) {}

    return results;
  }

  window.DevstartSearch = { search };
})();
