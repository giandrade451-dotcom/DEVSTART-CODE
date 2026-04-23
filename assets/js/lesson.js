/* Lesson viewer + quiz + notas + comentários + XP hooks */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const App = window.DevstartApp;
    const { users, progress, escapeHtml, locks, toast } = App;
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
      window.location.replace(`lesson.html?course=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(course.lessons[0].id)}`);
      return;
    }
    const lesson = course.lessons[idx];
    const prev = course.lessons[idx - 1];
    const next = course.lessons[idx + 1];

    // Salvar último acesso para "continuar de onde parou"
    if (user) {
      App.users.updateUser(user.username, (u) => {
        u.lastSeenLesson = { courseId: course.id, lessonId: lesson.id, at: Date.now() };
        return u;
      });
      // Missões diárias: contar visita em aulas distintas (1 vez por aula por dia)
      try {
        const today = new Date().toISOString().slice(0, 10);
        const visitKey = `devstart.visit.${user.username}.${today}.${course.id}.${lesson.id}`;
        if (!localStorage.getItem(visitKey)) {
          localStorage.setItem(visitKey, "1");
          window.DevstartMissions?.track(user.username, "visit");
        }
      } catch (e) {}
    }

    // Speed / font-size preferences (aplica CSS ao conteúdo da aula)
    const PREF_KEY = "devstart.lessonPrefs";
    function getPrefs() {
      try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; } catch { return {}; }
    }
    function setPrefs(p) { localStorage.setItem(PREF_KEY, JSON.stringify(p)); }

    render();

    function render() {
      const p = user ? progress.getCourseProgress(user, course) : { completedLessons: [], quizzes: {} };
      const savedQuiz = p.quizzes[lesson.id];
      const isDone = p.completedLessons.includes(lesson.id);
      const notesKey = `devstart.notes.${user?.username || "_guest"}.${course.id}.${lesson.id}`;
      const savedNotes = localStorage.getItem(notesKey) || "";
      const prefs = getPrefs();
      const speed = prefs.speed || "1";

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
              ${isDone ? '<span class="badge done">Concluída</span>' : ""}
            </div>
            <h1>${escapeHtml(lesson.title)}</h1>
            <p class="text-muted" style="font-size:1.05rem;">${escapeHtml(lesson.summary)}</p>

            <div class="lesson-toolbar">
              <div class="row">
                <span class="small text-muted">Ritmo de leitura:</span>
                <div class="speed-ctrl" id="speed-ctrl">
                  ${["0.9","1","1.15","1.3"].map(v =>
                    `<button class="btn sm ${speed===v?"active":""}" data-speed="${v}">${v==="1"?"Normal":v+"x"}</button>`).join("")}
                </div>
              </div>
              <div class="row">
                ${isDone
                  ? `<span class="badge done">✓ Concluída</span>`
                  : `<button class="btn sm" id="mark-done">Marcar como concluída</button>`}
                <button class="btn sm ghost" id="copy-link" title="Copiar link da aula">Compartilhar</button>
              </div>
            </div>

            <div id="lesson-body" style="font-size:${Math.round(1 * parseFloat(speed) * 100)}%;">${lesson.content}</div>

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

            <section class="lesson-notes card mt-3">
              <h3>📝 Minhas anotações</h3>
              <p class="small text-muted">Suas anotações ficam salvas neste dispositivo, só para você.</p>
              <textarea id="notes-area" placeholder="Escreva aqui o que você aprendeu, dúvidas e insights…">${escapeHtml(savedNotes)}</textarea>
              <div class="row" style="justify-content:flex-end;gap:8px;margin-top:8px;">
                <button class="btn sm ghost" id="notes-clear">Limpar</button>
                <button class="btn sm primary" id="notes-save">Salvar anotação</button>
              </div>
            </section>

            <section class="lesson-comments card mt-3" id="comments-section">
              <h3>💬 Comentários da comunidade</h3>
              <p class="small text-muted">Tire dúvidas com outros alunos sobre esta aula.</p>
              <div id="comments-list" class="mt-2"></div>
              <form class="comment-form mt-2" id="comment-form">
                <textarea id="comment-text" placeholder="${user ? "Deixe um comentário ou pergunta…" : "Entre para comentar nesta aula."}" ${user ? "" : "disabled"}></textarea>
                <div class="row" style="justify-content:flex-end;gap:8px;margin-top:8px;">
                  <button class="btn sm primary" type="submit" ${user ? "" : "disabled"}>Publicar comentário</button>
                </div>
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
      bindExtras(notesKey);
      renderComments();
      window.DevstartApp.initReveal();
    }

    function bindExtras(notesKey) {
      // Speed
      document.getElementById("speed-ctrl").querySelectorAll("button").forEach(b => {
        b.addEventListener("click", () => {
          const speed = b.dataset.speed;
          const prefs = getPrefs(); prefs.speed = speed; setPrefs(prefs);
          document.querySelectorAll("#speed-ctrl .btn").forEach(x => x.classList.remove("active"));
          b.classList.add("active");
          const body = document.getElementById("lesson-body");
          if (body) body.style.fontSize = Math.round(parseFloat(speed) * 100) + "%";
        });
      });

      // Mark done
      document.getElementById("mark-done")?.addEventListener("click", () => {
        if (!user) { toast({ title: "Entre para salvar o progresso", type: "info" }); return; }
        const beforeProg = progress.getCourseProgress(users.currentUser(), course);
        const wasAlreadyDone = beforeProg.completedLessons.includes(lesson.id);
        progress.markLessonComplete(course.id, lesson.id);
        if (!wasAlreadyDone) {
          try { window.DevstartGame?.onLessonComplete(user.username); } catch (e) {}
          try { window.DevstartMissions?.track(user.username, "lesson"); } catch (e) {}
        }
        maybeCompleteCourse();
        toast({ title: "Aula marcada como concluída", type: "success" });
        setTimeout(render, 400);
      });

      // Share
      document.getElementById("copy-link")?.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          toast({ title: "Link copiado!", message: "Compartilhe com seus colegas.", type: "success" });
        } catch { toast({ title: "Não foi possível copiar", type: "error" }); }
      });

      // Notes
      document.getElementById("notes-save")?.addEventListener("click", () => {
        const val = document.getElementById("notes-area").value;
        localStorage.setItem(notesKey, val);
        toast({ title: "Anotação salva!", type: "success" });
      });
      document.getElementById("notes-clear")?.addEventListener("click", () => {
        if (!confirm("Apagar sua anotação desta aula?")) return;
        document.getElementById("notes-area").value = "";
        localStorage.removeItem(notesKey);
      });

      // Comments form
      document.getElementById("comment-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!user) return;
        const txt = document.getElementById("comment-text").value.trim();
        if (!txt) return;
        const key = `devstart.lessonComments.${course.id}.${lesson.id}`;
        const list = JSON.parse(localStorage.getItem(key) || "[]");
        list.unshift({ id: "c-" + Date.now(), author: user.username, text: txt, at: Date.now() });
        localStorage.setItem(key, JSON.stringify(list));
        document.getElementById("comment-text").value = "";
        renderComments();
        try { window.DevstartMissions?.track(user.username, "comment"); } catch (e) {}
        toast({ title: "Comentário publicado", type: "success" });
      });
    }

    function renderComments() {
      const box = document.getElementById("comments-list");
      if (!box) return;
      const key = `devstart.lessonComments.${course.id}.${lesson.id}`;
      const list = JSON.parse(localStorage.getItem(key) || "[]");
      if (!list.length) {
        box.innerHTML = `<div class="text-muted small">Seja o primeiro a comentar nesta aula.</div>`;
        return;
      }
      box.innerHTML = list.map(c => `
        <div class="comment">
          <div class="meta"><strong>${escapeHtml(c.author)}</strong> · ${new Date(c.at).toLocaleString("pt-BR")}
            ${user && user.username === c.author ? `<a href="#" data-del="${c.id}" style="margin-left:8px;">remover</a>` : ""}
          </div>
          <div>${escapeHtml(c.text)}</div>
        </div>
      `).join("");
      box.querySelectorAll("a[data-del]").forEach(a => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const list2 = list.filter(x => x.id !== a.dataset.del);
          localStorage.setItem(key, JSON.stringify(list2));
          renderComments();
        });
      });
    }

    function maybeCompleteCourse() {
      if (!user) return;
      const fresh = users.currentUser();
      const p = progress.getCourseProgress(fresh, course);
      if (p.completedLessons.length === course.lessons.length) {
        const cat = window.DevstartConfig?.getCategory(course.id) || "outros";
        // Emit course complete once per user per course
        const key = `devstart.courseCompleted.${user.username}.${course.id}`;
        if (!localStorage.getItem(key)) {
          localStorage.setItem(key, String(Date.now()));
          try { window.DevstartGame?.onCourseComplete(user.username, cat); } catch (e) {}
          try {
            window.DevstartNotify?.push(user.username, {
              emoji: "🎓",
              title: `Curso concluído: ${course.title}`,
              body: "Parabéns! Seu certificado já está disponível.",
              href: `pages/certificate.html?course=${encodeURIComponent(course.id)}`
            });
          } catch (e) {}
          toast({ title: "Curso concluído! 🎓", message: "Certificado gerado — veja em Certificados.", type: "success", timeout: 5000 });
        }
      }
    }

    function bindQuiz() {
      const form = document.getElementById("quiz-form");
      if (!form) return;

      const retake = document.getElementById("retake");
      if (retake) {
        retake.addEventListener("click", () => {
          if (!user) return;
          window.DevstartApp.users.updateUser(user.username, (u) => {
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
        const result = { score, total, percent };

        // Check prior state BEFORE saving so gamification hooks only fire on first completion.
        const beforeProg = progress.getCourseProgress(users.currentUser(), course);
        const lessonWasDone = beforeProg.completedLessons.includes(lesson.id);
        const quizAwardedKey = `devstart.quizAwarded.${user.username}.${course.id}.${lesson.id}`;
        const quizAlreadyAwarded = !!localStorage.getItem(quizAwardedKey);

        progress.saveQuizResult(course.id, lesson.id, result);
        progress.markLessonComplete(course.id, lesson.id);

        if (!lessonWasDone) {
          try { window.DevstartGame?.onLessonComplete(user.username); } catch (e) {}
          try { window.DevstartMissions?.track(user.username, "lesson"); } catch (e) {}
        }
        if (!quizAlreadyAwarded) {
          try { window.DevstartGame?.onQuizComplete(user.username, result); } catch (e) {}
          try { window.DevstartMissions?.track(user.username, "quiz"); } catch (e) {}
          if (result.percent === 100) {
            try { window.DevstartMissions?.track(user.username, "perfect"); } catch (e) {}
          }
          try { localStorage.setItem(quizAwardedKey, String(Date.now())); } catch (e) {}
        }

        toast({
          title: score === total ? "Nota máxima! 🎉" : "Quiz enviado",
          message: `${score}/${total} corretas (${percent}%)`,
          type: score === total ? "success" : (percent >= 60 ? "success" : "info"),
        });

        maybeCompleteCourse();
        setTimeout(render, 1500);
      });
    }

    function errorCard(title, msg) {
      return `<div class="card center"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(msg)}</p><a class="btn" href="courses.html">Voltar aos cursos</a></div>`;
    }
  });
})();
