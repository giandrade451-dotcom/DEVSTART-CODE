/* Landing page renderer */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const free = document.getElementById("free-courses-grid");
    const vip = document.getElementById("vip-courses-grid");
    if (!free || !vip || !window.DevstartCourses) return;

    const user = window.DevstartApp.users.currentUser();
    const { getCourseProgress } = window.DevstartApp.progress;
    const { escapeHtml } = window.DevstartApp;

    const freeCourses = window.DevstartCourses.filter(c => !c.vip);
    const vipCourses = window.DevstartCourses.filter(c => c.vip);

    free.innerHTML = freeCourses.map((c, i) => renderCard(c, i, user, getCourseProgress, escapeHtml)).join("");
    vip.innerHTML = vipCourses.map((c, i) => renderCard(c, i, user, getCourseProgress, escapeHtml, true)).join("");

    // re-run reveal observer on newly added nodes
    window.DevstartApp.initReveal();
  });

  function renderCard(course, idx, user, getCourseProgress, escapeHtml, lockedPreview = false) {
    const progress = getCourseProgress(user, course);
    const hasProgress = user && progress.completed > 0;
    const delayClass = ["", "delay-1", "delay-2", "delay-3"][idx % 4];
    const locked = lockedPreview && (!user || !user.vip);
    return `
      <a class="card course-card reveal ${delayClass} ${locked ? "locked" : ""}" href="pages/course.html?id=${encodeURIComponent(course.id)}">
        <div class="course-cover ${course.theme}"><span>${escapeHtml(course.cover)}</span></div>
        <div class="course-head">
          <span class="badge ${course.vip ? "vip" : "free"}">${course.vip ? "VIP" : "Free"}</span>
          <span class="course-meta">${course.lessons.length} lessons · ${escapeHtml(course.level)}</span>
        </div>
        <h3>${escapeHtml(course.title)}</h3>
        <p>${escapeHtml(course.description.length > 130 ? course.description.slice(0, 127) + "…" : course.description)}</p>
        ${hasProgress ? `
          <div>
            <div class="progress-label"><span>${progress.completed}/${progress.total} lessons</span><span>${progress.percent}%</span></div>
            <div class="progress"><span style="width:${progress.percent}%"></span></div>
          </div>
        ` : ""}
        <div class="course-foot">
          <span class="course-meta">⏱ ${escapeHtml(course.duration)}</span>
          <span class="btn sm primary">${locked ? "Unlock VIP" : (hasProgress ? "Continue" : "Start course")} →</span>
        </div>
      </a>
    `;
  }
})();
