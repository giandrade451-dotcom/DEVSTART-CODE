/* Lesson viewer + quiz + notas + comentários + XP hooks */
(function () {
  const MIN_READ_MS = 3 * 60 * 1000;   // 3 min mínimos de leitura antes de validar
  const MAX_ATTEMPTS = 3;              // tentativas por pergunta antes de travar

  function localDayStr(d = new Date()) {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  }

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
      // Missões diárias: contar visita em aulas distintas (1 vez por aula por dia).
      // Usa data local (não UTC) para casar com o resto do app.
      try {
        const today = localDayStr();
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

    // ---- Tempo de leitura persistido ----
    const timeKey = user
      ? `devstart.lessonTime.${user.username}.${course.id}.${lesson.id}`
      : null;
    function loadElapsed() {
      if (!timeKey) return 0;
      const n = parseInt(localStorage.getItem(timeKey) || "0", 10);
      return Number.isFinite(n) && n >= 0 ? Math.min(n, MIN_READ_MS * 10) : 0;
    }
    function saveElapsed(ms) {
      if (!timeKey) return;
      try { localStorage.setItem(timeKey, String(Math.floor(ms))); } catch (e) {}
    }
    let elapsedMs = loadElapsed();
    let lastTick = 0;
    let timerHandle = null;

    // ---- Estado do quiz (tentativas por pergunta) ----
    let attempts = new Array(lesson.quiz.length).fill(0);
    let correctLocked = new Set();
    let failedLocked = new Set();

    render();
    setupTimer();

    // =========================================================
    function setupTimer() {
      // Aula já concluída → não precisa de timer.
      const p = user ? progress.getCourseProgress(user, course) : { completedLessons: [] };
      if (p.completedLessons.includes(lesson.id)) return;

      lastTick = performance.now();
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("beforeunload", onUnload);
      startTick();
      updateTimeGateUI();
    }
    function startTick() {
      if (timerHandle) return;
      timerHandle = setInterval(() => {
        if (document.visibilityState !== "visible") { lastTick = performance.now(); return; }
        const now = performance.now();
        const delta = now - lastTick;
        lastTick = now;
        if (delta > 0 && delta < 60_000) {
          elapsedMs = Math.min(MIN_READ_MS + 60_000, elapsedMs + delta);
          saveElapsed(elapsedMs);
          updateTimeGateUI();
          if (elapsedMs >= MIN_READ_MS) { stopTick(); }
        }
      }, 1000);
    }
    function stopTick() {
      if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
    }
    function onVisibility() {
      if (document.visibilityState === "visible") { lastTick = performance.now(); startTick(); }
      else { saveElapsed(elapsedMs); }
    }
    function onUnload() { saveElapsed(elapsedMs); }

    function timeGateMet() { return elapsedMs >= MIN_READ_MS; }
    function remainingMs() { return Math.max(0, MIN_READ_MS - elapsedMs); }
    function fmtMs(ms) {
      const s = Math.ceil(ms / 1000);
      const m = Math.floor(s / 60);
      const r = s % 60;
      return `${m}:${String(r).padStart(2, "0")}`;
    }
    function updateTimeGateUI() {
      const el = document.getElementById("time-gate");
      if (!el) return;
      if (timeGateMet()) {
        el.className = "time-gate met";
        el.innerHTML = `<span>✓ Tempo mínimo de leitura cumprido — o quiz agora vale pontos.</span>`;
        return;
      }
      const pct = Math.min(100, Math.round((elapsedMs / MIN_READ_MS) * 100));
      el.className = "time-gate";
      el.innerHTML = `
        <div class="row" style="justify-content:space-between;align-items:center;">
          <span>⏱️ Leia com calma — o quiz só conta após <strong>3 min</strong>.</span>
          <strong>${fmtMs(remainingMs())}</strong>
        </div>
        <div class="progress sm mt-1"><span style="width:${pct}%"></span></div>
      `;
    }

    // =========================================================
    function render() {
      const p = user ? progress.getCourseProgress(user, course) : { completedLessons: [], quizzes: {} };
      const savedQuiz = p.quizzes[lesson.id];
      const isDone = p.completedLessons.includes(lesson.id);
      const notesKey = `devstart.notes.${user?.username || "_guest"}.${course.id}.${lesson.id}`;
      const savedNotes = localStorage.getItem(notesKey) || "";
      const prefs = getPrefs();
      const speed = prefs.speed || "1";

      // Se a aula já está concluída, mostramos o quiz só como revisão (sem restrições).
      const reviewMode = isDone;

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
                ${isDone ? `<span class="badge done">✓ Concluída</span>` : ""}
                <button class="btn sm ghost" id="copy-link" title="Copiar link da aula">Compartilhar</button>
              </div>
            </div>

            <div class="lesson-warning" role="note" aria-label="Dica de tradução">
              <span class="emoji" aria-hidden="true">🌐</span>
              <div class="flex1">
                <strong>Caso você não saiba ler inglês, use o tradutor do Chrome.</strong>
                <div class="small text-muted">
                  Clique com o botão direito na página e escolha
                  <em>"Traduzir para o português"</em>, ou use o ícone 🌐 na barra de endereço.
                </div>
              </div>
            </div>

            <div id="lesson-body" style="font-size:${Math.round(1 * parseFloat(speed) * 100)}%;">${lesson.content}</div>

            <section class="quiz" id="quiz">
              <h2>Teste seu conhecimento</h2>
              <p class="text-muted" style="margin-bottom:12px;">
                ${reviewMode
                  ? "Quiz liberado para revisão — você já concluiu esta aula."
                  : `Para concluir a aula você precisa <strong>acertar todas as ${lesson.quiz.length} questões</strong>. Cada pergunta tem até <strong>${MAX_ATTEMPTS} tentativas</strong>.`}
              </p>
              ${reviewMode ? "" : `<div id="time-gate" class="time-gate"></div>`}
              <div id="quiz-banner" class="quiz-banner hidden"></div>
              <form id="quiz-form">
                ${lesson.quiz.map((q, qi) => `
                  <div class="q-block" data-qi="${qi}">
                    <div class="q-title">
                      ${qi + 1}. ${escapeHtml(q.prompt)}
                      ${reviewMode ? "" : `<span class="attempt-pill" data-attempt-pill="${qi}">Tentativas: 0/${MAX_ATTEMPTS}</span>`}
                    </div>
                    <div class="opts">
                      ${q.options.map((o, oi) => `
                        <label class="opt">
                          <input type="radio" name="q${qi}" value="${oi}" />
                          <span>${escapeHtml(o)}</span>
                        </label>`).join("")}
                    </div>
                    <div class="q-feedback hidden"></div>
                  </div>
                `).join("")}
                ${reviewMode && savedQuiz ? `
                  <div class="quiz-result">
                    <h3>Sua nota registrada: <span class="gradient-text">${savedQuiz.percent}%</span></h3>
                    <p class="text-muted">${savedQuiz.score} de ${savedQuiz.total} corretas.</p>
                  </div>` : ""}
                <div class="row" style="gap:8px;margin-top:14px;">
                  <button class="btn primary" type="submit" id="quiz-submit">${reviewMode ? "Checar respostas" : "Enviar respostas"}</button>
                  <button class="btn ghost" type="button" id="quiz-reset">Reiniciar quiz</button>
                </div>
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

      bindQuiz(reviewMode);
      bindExtras(notesKey);
      renderComments();
      updateTimeGateUI();
      window.DevstartApp.initReveal();
    }

    // =========================================================
    function bindExtras(notesKey) {
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

      document.getElementById("copy-link")?.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          toast({ title: "Link copiado!", message: "Compartilhe com seus colegas.", type: "success" });
        } catch { toast({ title: "Não foi possível copiar", type: "error" }); }
      });

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
      if (p.completed === course.lessons.length) {
        const cat = window.DevstartConfig?.getCategory(course.id) || "outros";
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

    // =========================================================
    function attemptPill(qi) {
      const el = document.querySelector(`[data-attempt-pill="${qi}"]`);
      if (!el) return;
      if (correctLocked.has(qi)) { el.textContent = "Correta ✓"; el.className = "attempt-pill ok"; return; }
      if (failedLocked.has(qi)) { el.textContent = "Tentativas esgotadas"; el.className = "attempt-pill fail"; return; }
      el.textContent = `Tentativas: ${attempts[qi]}/${MAX_ATTEMPTS}`;
      el.className = "attempt-pill";
    }

    function setBlockState(qi, state, msg) {
      const block = document.querySelector(`.q-block[data-qi="${qi}"]`);
      if (!block) return;
      const feedback = block.querySelector(".q-feedback");
      const radios = block.querySelectorAll("input[type=radio]");
      if (state === "correct") {
        block.classList.add("locked-correct");
        radios.forEach(r => { r.disabled = true; });
        feedback.textContent = msg; feedback.classList.remove("hidden");
      } else if (state === "failed") {
        block.classList.add("locked-failed");
        radios.forEach(r => { r.disabled = true; });
        feedback.textContent = msg; feedback.classList.remove("hidden");
      } else if (state === "retry") {
        feedback.textContent = msg; feedback.classList.remove("hidden");
      }
      attemptPill(qi);
    }

    function bindQuiz(reviewMode) {
      const form = document.getElementById("quiz-form");
      if (!form) return;
      lesson.quiz.forEach((_, qi) => attemptPill(qi));

      document.getElementById("quiz-reset")?.addEventListener("click", () => {
        if (!confirm("Reiniciar quiz? As tentativas desta sessão serão zeradas.")) return;
        attempts = new Array(lesson.quiz.length).fill(0);
        correctLocked.clear();
        failedLocked.clear();
        // Limpa resultado persistido se não estiver em modo revisão.
        if (!reviewMode && user) {
          App.users.updateUser(user.username, (u) => {
            if (u.progress?.[course.id]?.quizzes?.[lesson.id]) {
              delete u.progress[course.id].quizzes[lesson.id];
            }
            return u;
          });
        }
        render();
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!user && !reviewMode) {
          toast({ title: "É preciso entrar", message: "Crie uma conta gratuita para salvar seu progresso.", type: "info" });
          return;
        }

        // Questões abertas = nem travadas corretas nem travadas com falha.
        const openQi = lesson.quiz.map((_, qi) => qi)
          .filter(qi => !correctLocked.has(qi) && !failedLocked.has(qi));

        // Todas as abertas precisam ter resposta marcada.
        const unanswered = openQi.filter(qi => !form.querySelector(`input[name="q${qi}"]:checked`));
        if (unanswered.length) {
          unanswered.forEach(qi => setBlockState(qi, "retry", "Escolha uma resposta."));
          toast({ title: "Responda todas as questões abertas", type: "error" });
          return;
        }

        // Modo revisão: só mostra resultado, nada grava / trava.
        if (reviewMode) {
          let score = 0;
          lesson.quiz.forEach((q, qi) => {
            const picked = parseInt(form.querySelector(`input[name="q${qi}"]:checked`).value, 10);
            const block = document.querySelector(`.q-block[data-qi="${qi}"]`);
            const opts = block.querySelectorAll(".opt");
            opts.forEach(o => o.classList.remove("correct", "wrong"));
            opts[q.correct].classList.add("correct");
            if (picked === q.correct) { score++; }
            else { opts[picked].classList.add("wrong"); }
          });
          toast({ title: `Revisão: ${score}/${lesson.quiz.length}`, type: "info" });
          return;
        }

        // Avalia cada questão aberta.
        openQi.forEach(qi => {
          const q = lesson.quiz[qi];
          const picked = parseInt(form.querySelector(`input[name="q${qi}"]:checked`).value, 10);
          const block = document.querySelector(`.q-block[data-qi="${qi}"]`);
          const opts = block.querySelectorAll(".opt");
          opts.forEach(o => o.classList.remove("correct", "wrong"));

          if (picked === q.correct) {
            opts[q.correct].classList.add("correct");
            correctLocked.add(qi);
            setBlockState(qi, "correct", q.explain ? `✓ ${q.explain}` : "✓ Correto!");
          } else {
            opts[picked].classList.add("wrong");
            opts[q.correct].classList.add("correct");
            attempts[qi] += 1;
            if (attempts[qi] >= MAX_ATTEMPTS) {
              failedLocked.add(qi);
              setBlockState(qi, "failed",
                `✗ Tentativas esgotadas. ${q.explain ? `Resposta correta: ${q.explain}` : "Revise a aula e reinicie o quiz."}`);
            } else {
              const left = MAX_ATTEMPTS - attempts[qi];
              setBlockState(qi, "retry",
                `✗ Resposta incorreta. Você tem ${left} tentativa${left > 1 ? "s" : ""} restante${left > 1 ? "s" : ""}.`);
            }
          }
        });

        const allCorrect = correctLocked.size === lesson.quiz.length;
        const anyFailed = failedLocked.size > 0;

        if (allCorrect) {
          if (!timeGateMet()) {
            showBanner(
              `Você acertou tudo! 🎉 Mas ainda faltam <strong>${fmtMs(remainingMs())}</strong> de leitura para validar a conclusão.`,
              "info"
            );
            toast({ title: "Leia por mais alguns instantes", message: `Faltam ${fmtMs(remainingMs())} para creditar.`, type: "info" });
            return;
          }
          onQuizPassed();
        } else if (anyFailed) {
          showBanner(
            `Você esgotou as tentativas em ${failedLocked.size} pergunta(s). Revise a aula e clique em <strong>Reiniciar quiz</strong>.`,
            "error"
          );
          toast({ title: "Quiz reprovado — revise a aula", type: "error" });
        } else {
          // Ainda há perguntas abertas — deixa o aluno tentar de novo.
          showBanner(
            `Quase lá — ${correctLocked.size}/${lesson.quiz.length} corretas. Tente novamente as restantes.`,
            "info"
          );
        }
      });
    }

    function showBanner(html, kind) {
      const b = document.getElementById("quiz-banner");
      if (!b) return;
      b.innerHTML = html;
      b.className = "quiz-banner " + (kind || "info");
    }

    function onQuizPassed() {
      const total = lesson.quiz.length;
      const result = { score: total, total, percent: 100 };

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
        try { window.DevstartMissions?.track(user.username, "perfect"); } catch (e) {}
        try { localStorage.setItem(quizAwardedKey, String(Date.now())); } catch (e) {}
      }

      maybeCompleteCourse();
      toast({ title: "Aula concluída! 🎉", message: `${total}/${total} corretas.`, type: "success" });
      stopTick();
      setTimeout(render, 1500);
    }

    function errorCard(title, msg) {
      return `<div class="card center"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(msg)}</p><a class="btn" href="courses.html">Voltar aos cursos</a></div>`;
    }
  });
})();
