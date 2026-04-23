/* Lesson viewer + quiz */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const { users, progress, escapeHtml, locks, toast } = window.DevstartApp;
    const user = users.currentUser();
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("course");
    const lessonId = params.get("lesson");
    const courses = window.DevstartCourses || [];
    const course = courses.find(c => c.id === courseId);
    const root = document.getElementById("lesson-root");

    if (!course) {
      root.innerHTML = errorCard("Curso não encontrado", "O curso que você está tentando abrir não existe.");
      return;
    }

    const lockedByAdmin = locks.isCourseLockedForAll(course.id);
    const lockedByVIP = course.vip && (!user || !user.vip);
    if (lockedByAdmin) {
      root.innerHTML = errorCard(course.title, "Este curso está bloqueado pelo administrador no momento.");
      return;
    }
    if (lockedByVIP) {
      root.innerHTML = `<div class="card center"><h2>Acesso VIP necessário</h2><p>${escapeHtml(course.title)} faz parte da trilha VIP.</p><a class="btn vip" href="vip.html">Desbloquear VIP →</a></div>`;
      return;
    }

    const idx = course.lessons.findIndex(l => l.id === lessonId);
    if (idx < 0) {
      // default to first lesson
      window.location.replace(`lesson.html?course=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(course.lessons[0].id)}`);
      return;
    }
    const lesson = course.lessons[idx];
    const prev = course.lessons[idx - 1];
    const next = course.lessons[idx + 1];

    render();

    function render() {
      const p = user ? progress.getCourseProgress(user, course) : { completedLessons: [], quizzes: {} };
      const savedQuiz = p.quizzes[lesson.id];

      root.innerHTML = `
        <div class="lesson-layout">
          <aside class="lesson-side reveal">
            <h4>${escapeHtml(course.title)}</h4>
            <div class="lesson-list">
              ${course.lessons.map((l, i) => {
                const done = p.completedLessons.includes(l.id);
                const active = l.id === lesson.id;
                return `<a href="lesson.html?course=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(l.id)}" class="${done ? "done" : ""} ${active ? "active" : ""}">
                  <span class="num">${done ? "✓" : i + 1}</span>
                  <span class="flex1">${escapeHtml(l.title)}</span>
                </a>`;
              }).join("")}
            </div>
            <div class="mt-2">
              <div class="progress-label"><span>${p.completedLessons.length}/${course.lessons.length} concluídas</span><span>${Math.round((p.completedLessons.length/course.lessons.length)*100)}%</span></div>
              <div class="progress"><span style="width:${Math.round((p.completedLessons.length/course.lessons.length)*100)}%"></span></div>
            </div>
          </aside>

          <article class="lesson-content reveal delay-1">
            <div class="row" style="gap:8px;">
              <span class="badge">${escapeHtml(course.title)}</span>
              <span class="badge">Aula ${idx + 1} de ${course.lessons.length}</span>
              ${p.completedLessons.includes(lesson.id) ? '<span class="badge done">Concluída</span>' : ""}
            </div>
            <h1>${escapeHtml(lesson.title)}</h1>
            <p class="text-muted" style="font-size:1.05rem;">${escapeHtml(lesson.summary)}</p>
            <div>${lesson.content}</div>

            <section class="quiz" id="quiz">
              <h2>Teste seu conhecimento</h2>
              <p class="text-muted" style="margin-bottom:12px;">Responda as ${lesson.quiz.length} questões para concluir a aula.</p>
              <form id="quiz-form">
                ${lesson.quiz.map((q, qi) => `
                  <div class="q-block" data-qi="${qi}">
                    <div class="q-title">${qi + 1}. ${escapeHtml(q.prompt)}</div>
                    <div class="opts">
                      ${q.options.map((o, oi) => `
                        <label class="opt">
                          <input type="radio" name="q${qi}" value="${oi}" ${savedQuiz ? "disabled" : ""} />
                          <span>${escapeHtml(o)}</span>
                        </label>`).join("")}
                    </div>
                    <div class="q-feedback hidden"></div>
                  </div>
                `).join("")}
                ${savedQuiz ? `
                  <div class="quiz-result">
                    <h3>Você acertou <span class="gradient-text">${savedQuiz.percent}%</span></h3>
                    <p class="text-muted">${savedQuiz.score} de ${savedQuiz.total} corretas. Refaça abaixo para tentar de novo.</p>
                    <button type="button" class="btn mt-2" id="retake">Refazer quiz</button>
                  </div>` : `
                  <button class="btn primary mt-3" type="submit">Enviar respostas</button>
                `}
              </form>
            </section>

            <nav class="lesson-nav">
              ${prev
                ? `<a class="btn" href="lesson.html?course=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(prev.id)}">← ${escapeHtml(prev.title)}</a>`
                : `<a class="btn" href="course.html?id=${encodeURIComponent(course.id)}">← Voltar ao curso</a>`}
              ${next
                ? `<a class="btn primary" href="lesson.html?course=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(next.id)}">${escapeHtml(next.title)} →</a>`
                : `<a class="btn success" href="course.html?id=${encodeURIComponent(course.id)}">Finalizar curso 🎉</a>`
              }
            </nav>
          </article>
        </div>
      `;

      bindQuiz();
      window.DevstartApp.initReveal();
    }

    function bindQuiz() {
      const form = document.getElementById("quiz-form");
      if (!form) return;

      const retake = document.getElementById("retake");
      if (retake) {
        retake.addEventListener("click", () => {
          if (!user) return;
          // wipe saved quiz
          const updated = window.DevstartApp.users.updateUser(user.username, (u) => {
            if (u.progress?.[course.id]?.quizzes?.[lesson.id]) {
              delete u.progress[course.id].quizzes[lesson.id];
            }
            return u;
          });
          render();
        });
      }

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!user) {
          toast({ title: "É preciso entrar", message: "Crie uma conta gratuita para salvar seu progresso.", type: "info" });
          return;
        }
        const total = lesson.quiz.length;
        let score = 0;
        const blocks = form.querySelectorAll(".q-block");
        let allAnswered = true;

        blocks.forEach((block, qi) => {
          const q = lesson.quiz[qi];
          const chosen = form.querySelector(`input[name="q${qi}"]:checked`);
          const feedback = block.querySelector(".q-feedback");
          const opts = block.querySelectorAll(".opt");
          // reset states
          opts.forEach(o => o.classList.remove("correct", "wrong"));
          if (!chosen) {
            allAnswered = false;
            feedback.textContent = "Escolha uma resposta.";
            feedback.classList.remove("hidden");
            return;
          }
          const picked = parseInt(chosen.value, 10);
          opts[q.correct].classList.add("correct");
          if (picked === q.correct) {
            score++;
            feedback.textContent = q.explain ? `✓ ${q.explain}` : "✓ Correto!";
          } else {
            opts[picked].classList.add("wrong");
            feedback.textContent = q.explain ? `✗ ${q.explain}` : "✗ Quase lá.";
          }
          feedback.classList.remove("hidden");
        });

        if (!allAnswered) {
          toast({ title: "Responda todas as questões", message: "Ainda tem questões em branco.", type: "error" });
          return;
        }

        const percent = Math.round((score / total) * 100);
        progress.saveQuizResult(course.id, lesson.id, { score, total, percent });
        const updated = progress.markLessonComplete(course.id, lesson.id);

        toast({
          title: score === total ? "Nota máxima! 🎉" : "Quiz enviado",
          message: `${score}/${total} corretas (${percent}%)`,
          type: score === total ? "success" : (percent >= 60 ? "success" : "info"),
        });

        // Re-render after short delay to show updated state
        setTimeout(render, 1500);
      });
    }

    function errorCard(title, msg) {
      return `<div class="card center"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(msg)}</p><a class="btn" href="courses.html">Voltar aos cursos</a></div>`;
    }
  });
})();
