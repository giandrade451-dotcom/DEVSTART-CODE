/* =============================================================
   Devstart UP — Painel Admin (expandido)
   Abas: Visão geral · Usuários · Cursos · Projetos · Chat ·
         Anúncios · Dados & Sistema
   ============================================================= */
(function () {
  const KEY_PROJECTS = "devstart.projects";
  const KEY_CHAT = "devstart.chat";
  const KEY_ANNOUNCEMENTS = "devstart.announcements";
  const KEY_FEATURED = "devstart.featuredCourses";
  const KEY_ADMIN_LOGS = "devstart.adminLogs";

  document.addEventListener("DOMContentLoaded", () => {
    const { admin, users, progress, locks, escapeHtml, toast, storage, STORAGE_KEYS } = window.DevstartApp;
    const root = document.getElementById("admin-root");

    if (!admin.isAdminSession()) return renderLogin();
    renderPanel("overview");

    // ======================================================
    // Util
    // ======================================================
    function log(action, detail) {
      const list = storage.get(KEY_ADMIN_LOGS, []);
      list.unshift({ at: Date.now(), action, detail: detail || "" });
      storage.set(KEY_ADMIN_LOGS, list.slice(0, 200));
    }
    function fmtDate(ts) { return new Date(ts).toLocaleString("pt-BR"); }
    function fmtNum(n) { return n.toLocaleString("pt-BR"); }

    function renderLogin() {
      root.innerHTML = `
        <div class="auth-wrap" style="min-height:auto; padding-top:60px;">
          <div class="auth-card reveal">
            <h1>Acesso admin 🛠️</h1>
            <p class="sub">Área restrita. Informe as credenciais de admin para continuar.</p>
            <form class="form" id="admin-login">
              <label for="u">Usuário admin</label>
              <input class="input" id="u" type="text" autocomplete="username" required />
              <label for="p">Senha admin</label>
              <input class="input" id="p" type="password" autocomplete="current-password" required />
              <button class="btn primary block lg" type="submit">Entrar</button>
            </form>
            <div class="auth-alt small">Padrão: <code>admin</code> / <code>devstart2025</code></div>
          </div>
        </div>
      `;
      window.DevstartApp.initReveal();
      document.getElementById("admin-login").addEventListener("submit", (e) => {
        e.preventDefault();
        try {
          admin.login(document.getElementById("u").value.trim(), document.getElementById("p").value);
          toast({ title: "Admin autenticado", type: "success" });
          log("login", "Admin autenticado");
          renderPanel("overview");
        } catch (err) {
          toast({ title: "Acesso negado", message: err.message, type: "error" });
        }
      });
    }

    function renderPanel(tab) {
      root.innerHTML = `
        <header class="dash-head reveal">
          <div>
            <h1>Painel Admin 🛠️</h1>
            <div class="sub">Central completa de gestão da plataforma Devstart UP.</div>
          </div>
          <div class="row" style="gap:8px;flex-wrap:wrap;">
            <button class="btn sm" id="admin-export">⬇️ Exportar dados</button>
            <button class="btn sm" id="admin-import">⬆️ Importar dados</button>
            <button class="btn danger" id="admin-logout">Sair</button>
          </div>
        </header>

        <div class="tabs reveal" id="admin-tabs" role="tablist" style="margin-bottom:18px;">
          ${[
            ["overview", "📊 Visão geral"],
            ["users", "👥 Usuários"],
            ["courses", "📚 Cursos"],
            ["projects", "🚀 Projetos"],
            ["chat", "💬 Chat"],
            ["announcements", "📣 Anúncios"],
            ["data", "🗄️ Dados & Sistema"],
          ].map(([id, label]) =>
            `<button class="tab ${tab===id?"active":""}" data-tab="${id}" role="tab">${label}</button>`
          ).join("")}
        </div>

        <section class="reveal" id="admin-tabpanel"></section>
      `;

      document.getElementById("admin-logout").addEventListener("click", () => {
        admin.logout();
        log("logout", "Admin desconectado");
        toast({ title: "Admin desconectado", type: "info" });
        renderLogin();
      });
      document.getElementById("admin-export").addEventListener("click", exportAll);
      document.getElementById("admin-import").addEventListener("click", importAll);
      root.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => renderPanel(b.dataset.tab)));

      const panel = document.getElementById("admin-tabpanel");
      if (tab === "overview") renderOverview(panel);
      else if (tab === "users") renderUsersTab(panel);
      else if (tab === "courses") renderCoursesTab(panel);
      else if (tab === "projects") renderProjectsTab(panel);
      else if (tab === "chat") renderChatTab(panel);
      else if (tab === "announcements") renderAnnouncementsTab(panel);
      else if (tab === "data") renderDataTab(panel);

      window.DevstartApp.initReveal();
    }

    // ======================================================
    // Visão geral
    // ======================================================
    function renderOverview(panel) {
      const allUsers = users.getUsers();
      const courses = window.DevstartCourses || [];
      const projects = storage.get(KEY_PROJECTS, []);
      const chat = storage.get(KEY_CHAT, []);
      const courseLocks = locks.getCourseLocks();
      const vipCount = allUsers.filter(u => u.vip).length;
      const totalLessons = allUsers.reduce((sum, u) => sum + countUserLessons(u, courses), 0);
      const totalQuizzes = allUsers.reduce((sum, u) => sum + countUserQuizzes(u), 0);
      const lockedCount = Object.values(courseLocks).filter(Boolean).length;
      const last7 = allUsers.filter(u => u.createdAt > Date.now() - 7*24*3600*1000).length;
      const freeCount = courses.filter(c => !c.vip).length;
      const vipCourseCount = courses.filter(c => c.vip).length;
      const totalLessonsPlat = courses.reduce((s,c) => s + c.lessons.length, 0);
      const totalQuizzesPlat = courses.reduce((s,c) => s + c.lessons.reduce((a,l)=>a+(l.quiz?.length||0),0), 0);

      // Course ranking
      const courseCompletions = courses.map(c => {
        const count = allUsers.reduce((s,u) => s + ((u.progress?.[c.id]?.completedLessons?.length)||0), 0);
        return { id: c.id, title: c.title, vip: c.vip, completions: count };
      }).sort((a,b) => b.completions - a.completions);
      const top = courseCompletions.slice(0, 8);
      const maxC = Math.max(1, ...top.map(t => t.completions));

      const logs = storage.get(KEY_ADMIN_LOGS, []).slice(0, 8);

      panel.innerHTML = `
        <section class="dash-stats reveal" id="admin-stats" style="margin-bottom:18px;">
          ${[
            { lab: "Total de usuários", num: fmtNum(allUsers.length), sub: `+${last7} nos últimos 7 dias` },
            { lab: "Usuários VIP", num: fmtNum(vipCount), sub: `${allUsers.length ? Math.round((vipCount/allUsers.length)*100) : 0}% do total` },
            { lab: "Aulas concluídas", num: fmtNum(totalLessons), sub: "soma de todos usuários" },
            { lab: "Quizzes respondidos", num: fmtNum(totalQuizzes), sub: "por toda a base" },
            { lab: "Cursos ativos", num: `${courses.length - lockedCount}/${courses.length}`, sub: `${lockedCount} bloqueado(s)` },
            { lab: "Projetos publicados", num: fmtNum(projects.length), sub: "na vitrine" },
            { lab: "Mensagens no chat", num: fmtNum(chat.length), sub: "total em todos canais" },
            { lab: "Catálogo", num: `${freeCount}+${vipCourseCount}`, sub: `${totalLessonsPlat} aulas · ${totalQuizzesPlat} quizzes` },
          ].map(s => `<div class="dash-stat"><div class="lab">${s.lab}</div><div class="num gradient-text">${s.num}</div><div class="sub2">${escapeHtml(s.sub)}</div></div>`).join("")}
        </section>

        <div class="grid-2">
          <section class="card reveal">
            <h2 style="margin-top:0;">🏆 Cursos mais concluídos</h2>
            ${top.length ? top.map(t => `
              <div class="row between" style="margin:8px 0;">
                <span>${escapeHtml(t.title)} ${t.vip?'<span class="badge vip">VIP</span>':''}</span>
                <span class="small text-muted">${t.completions} aulas</span>
              </div>
              <div class="progress-bar"><div class="progress" style="width:${(t.completions/maxC)*100}%"></div></div>
            `).join("") : '<p class="text-muted">Sem dados ainda.</p>'}
          </section>

          <section class="card reveal">
            <h2 style="margin-top:0;">🧾 Ações recentes do admin</h2>
            ${logs.length ? `<ul style="list-style:none;padding:0;margin:0;">${logs.map(l => `
              <li style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);">
                <div><strong>${escapeHtml(l.action)}</strong> <span class="small text-muted">${fmtDate(l.at)}</span></div>
                <div class="small text-muted">${escapeHtml(l.detail)}</div>
              </li>`).join("")}</ul>` : '<p class="text-muted">Ainda não há ações registradas.</p>'}
          </section>
        </div>
      `;
    }

    // ======================================================
    // Usuários (com filtros + ações em lote)
    // ======================================================
    function renderUsersTab(panel) {
      panel.innerHTML = `
        <section class="card reveal">
          <div class="row between mb-2" style="flex-wrap:wrap;gap:10px;">
            <h2 style="margin:0;">Usuários</h2>
            <div class="row" style="gap:8px;flex-wrap:wrap;">
              <input class="input" id="user-search" placeholder="Buscar por usuário…" style="min-width:240px;" />
              <select class="input" id="user-filter" style="min-width:160px;">
                <option value="all">Todos</option>
                <option value="vip">Somente VIP</option>
                <option value="free">Somente grátis</option>
                <option value="active">Com progresso</option>
                <option value="inactive">Sem progresso</option>
              </select>
              <select class="input" id="user-sort" style="min-width:160px;">
                <option value="new">Mais recentes</option>
                <option value="old">Mais antigos</option>
                <option value="lessons">Mais aulas</option>
                <option value="name">A→Z</option>
              </select>
            </div>
          </div>
          <div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:8px;">
            <button class="btn sm" id="bulk-vip-on">👑 Liberar VIP (visíveis)</button>
            <button class="btn sm" id="bulk-vip-off">Remover VIP (visíveis)</button>
            <button class="btn sm" id="bulk-reset">🧹 Resetar progresso (visíveis)</button>
            <span class="small text-muted" id="user-count"></span>
          </div>
          <div class="table-wrap">
            <table class="table">
              <thead>
                <tr><th>Usuário</th><th>Plano</th><th>Criado</th><th>Último acesso</th><th>Aulas</th><th>Quizzes</th><th>Ações</th></tr>
              </thead>
              <tbody id="user-tbody"></tbody>
            </table>
          </div>
        </section>
      `;
      const s = document.getElementById("user-search");
      const f = document.getElementById("user-filter");
      const o = document.getElementById("user-sort");
      [s, f, o].forEach(el => el.addEventListener("input", () => renderUsersList()));
      document.getElementById("bulk-vip-on").addEventListener("click", () => bulkVip(true));
      document.getElementById("bulk-vip-off").addEventListener("click", () => bulkVip(false));
      document.getElementById("bulk-reset").addEventListener("click", bulkReset);
      renderUsersList();
    }
    function currentFilteredUsers() {
      const courses = window.DevstartCourses || [];
      const q = (document.getElementById("user-search").value || "").trim().toLowerCase();
      const filter = document.getElementById("user-filter").value;
      const sort = document.getElementById("user-sort").value;
      let list = users.getUsers();
      if (q) list = list.filter(u => u.username.toLowerCase().includes(q));
      if (filter === "vip") list = list.filter(u => u.vip);
      if (filter === "free") list = list.filter(u => !u.vip);
      if (filter === "active") list = list.filter(u => countUserLessons(u, courses) > 0);
      if (filter === "inactive") list = list.filter(u => countUserLessons(u, courses) === 0);
      list.sort((a,b) => {
        if (sort === "new") return b.createdAt - a.createdAt;
        if (sort === "old") return a.createdAt - b.createdAt;
        if (sort === "lessons") return countUserLessons(b, courses) - countUserLessons(a, courses);
        if (sort === "name") return a.username.localeCompare(b.username);
        return 0;
      });
      return list;
    }
    function renderUsersList() {
      const courses = window.DevstartCourses || [];
      const list = currentFilteredUsers();
      const tbody = document.getElementById("user-tbody");
      document.getElementById("user-count").textContent = `${list.length} resultado(s)`;
      if (!list.length) {
        tbody.innerHTML = `<tr><td colspan="7" class="center text-muted" style="padding:28px;">Nenhum usuário encontrado.</td></tr>`;
        return;
      }
      tbody.innerHTML = list.map(u => {
        const lessons = countUserLessons(u, courses);
        const quizzes = countUserQuizzes(u);
        const last = u.lastSeenAt ? new Date(u.lastSeenAt).toLocaleDateString("pt-BR") : "—";
        return `<tr>
          <td><strong>${escapeHtml(u.username)}</strong></td>
          <td>${u.vip ? `<span class="badge vip">VIP</span>` : `<span class="badge">Grátis</span>`}</td>
          <td>${new Date(u.createdAt).toLocaleDateString("pt-BR")}</td>
          <td>${last}</td>
          <td>${lessons}</td>
          <td>${quizzes}</td>
          <td>
            <div class="row" style="gap:6px;flex-wrap:wrap;">
              <button class="btn sm ${u.vip ? "danger" : "vip"}" data-toggle-vip="${escapeHtml(u.username)}">${u.vip ? "Remover VIP" : "Liberar VIP"}</button>
              <button class="btn sm" data-view="${escapeHtml(u.username)}">Detalhes</button>
              <button class="btn sm" data-reset="${escapeHtml(u.username)}">Resetar</button>
              <button class="btn sm" data-password="${escapeHtml(u.username)}">🔑 Senha</button>
              <button class="btn sm danger" data-delete="${escapeHtml(u.username)}">Excluir</button>
            </div>
          </td>
        </tr>`;
      }).join("");

      tbody.querySelectorAll("[data-toggle-vip]").forEach(btn => btn.addEventListener("click", () => {
        const name = btn.dataset.toggleVip;
        const u = users.findUser(name);
        users.updateUser(name, { vip: !u.vip });
        log(u.vip ? "vip.remove" : "vip.add", `@${name}`);
        toast({ title: u.vip ? "VIP removido" : "VIP liberado", message: `@${name}`, type: u.vip ? "info" : "success" });
        renderUsersList();
      }));
      tbody.querySelectorAll("[data-view]").forEach(btn => btn.addEventListener("click", () => showUserDetails(btn.dataset.view)));
      tbody.querySelectorAll("[data-reset]").forEach(btn => btn.addEventListener("click", () => {
        const name = btn.dataset.reset;
        if (!confirm(`Resetar todo o progresso de @${name}?`)) return;
        users.updateUser(name, { progress: {} });
        log("progress.reset", `@${name}`);
        toast({ title: "Progresso resetado", message: `@${name}`, type: "info" });
        renderUsersList();
      }));
      tbody.querySelectorAll("[data-password]").forEach(btn => btn.addEventListener("click", () => {
        const name = btn.dataset.password;
        const newPass = prompt(`Nova senha para @${name}:`);
        if (!newPass || newPass.length < 4) return toast({ title: "Senha inválida", message: "Mínimo 4 caracteres", type: "error" });
        users.updateUser(name, { password: newPass });
        log("password.reset", `@${name}`);
        toast({ title: "Senha alterada", message: `@${name}`, type: "success" });
      }));
      tbody.querySelectorAll("[data-delete]").forEach(btn => btn.addEventListener("click", () => {
        const name = btn.dataset.delete;
        if (!confirm(`Excluir permanentemente @${name}?`)) return;
        const list = users.getUsers().filter(u => u.username !== name);
        storage.set(STORAGE_KEYS.users, list);
        log("user.delete", `@${name}`);
        toast({ title: "Usuário excluído", message: `@${name}`, type: "error" });
        renderUsersList();
      }));
    }
    function bulkVip(vip) {
      const list = currentFilteredUsers();
      if (!list.length) return;
      if (!confirm(`${vip ? "Liberar" : "Remover"} VIP para ${list.length} usuário(s) visível(eis)?`)) return;
      list.forEach(u => users.updateUser(u.username, { vip }));
      log("vip.bulk", `${vip ? "add" : "remove"} em ${list.length}`);
      toast({ title: `VIP em lote: ${list.length}`, type: vip ? "success" : "info" });
      renderUsersList();
    }
    function bulkReset() {
      const list = currentFilteredUsers();
      if (!list.length) return;
      if (!confirm(`Resetar progresso de ${list.length} usuário(s)?`)) return;
      list.forEach(u => users.updateUser(u.username, { progress: {} }));
      log("progress.bulk.reset", `${list.length} usuários`);
      toast({ title: `Progresso resetado: ${list.length}`, type: "info" });
      renderUsersList();
    }

    // ======================================================
    // Cursos (bloqueio + destaque)
    // ======================================================
    function getFeaturedSet() { return new Set(storage.get(KEY_FEATURED, [])); }
    function setFeaturedSet(s) { storage.set(KEY_FEATURED, Array.from(s)); }

    function renderCoursesTab(panel) {
      const courses = window.DevstartCourses || [];
      const courseLocks = locks.getCourseLocks();
      const featured = getFeaturedSet();
      const freeCount = courses.filter(c => !c.vip).length;
      const vipCount = courses.filter(c => c.vip).length;
      const totalLessons = courses.reduce((s,c) => s + c.lessons.length, 0);

      panel.innerHTML = `
        <section class="dash-stats reveal" style="margin-bottom:18px;">
          ${[
            { lab: "Cursos grátis", num: freeCount },
            { lab: "Cursos VIP", num: vipCount },
            { lab: "Total de aulas", num: totalLessons },
            { lab: "Bloqueados", num: Object.values(courseLocks).filter(Boolean).length },
          ].map(s => `<div class="dash-stat"><div class="lab">${s.lab}</div><div class="num gradient-text">${s.num}</div></div>`).join("")}
        </section>

        <section class="card reveal">
          <h2 style="margin-top:0;">Catálogo</h2>
          <p class="text-muted">Bloqueie cursos para manutenção ou marque como destaque para aparecer em evidência.</p>
          <div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:10px;">
            <input class="input" id="course-search" placeholder="Filtrar curso…" style="min-width:240px;" />
            <select class="input" id="course-filter" style="min-width:160px;">
              <option value="all">Todos</option>
              <option value="free">Grátis</option>
              <option value="vip">VIP</option>
              <option value="locked">Bloqueados</option>
              <option value="featured">Destaque</option>
            </select>
          </div>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Curso</th><th>Tipo</th><th>Nível</th><th>Aulas</th><th>Quizzes</th><th>Status</th><th>Ações</th></tr></thead>
              <tbody id="course-tbody"></tbody>
            </table>
          </div>
        </section>
      `;
      const s = document.getElementById("course-search");
      const f = document.getElementById("course-filter");
      [s, f].forEach(el => el.addEventListener("input", drawCourses));
      drawCourses();

      function drawCourses() {
        const q = (s.value || "").trim().toLowerCase();
        const filter = f.value;
        const tbody = document.getElementById("course-tbody");
        let list = courses.slice();
        if (q) list = list.filter(c => c.title.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q));
        if (filter === "free") list = list.filter(c => !c.vip);
        if (filter === "vip") list = list.filter(c => c.vip);
        if (filter === "locked") list = list.filter(c => courseLocks[c.id]);
        if (filter === "featured") list = list.filter(c => featured.has(c.id));

        tbody.innerHTML = list.map(c => {
          const locked = !!courseLocks[c.id];
          const isFeat = featured.has(c.id);
          const quizzes = c.lessons.reduce((a,l)=>a+(l.quiz?.length||0),0);
          return `<tr>
            <td><strong>${escapeHtml(c.title)}</strong>${isFeat?' <span class="badge done">★ destaque</span>':''}<div class="small text-muted">${escapeHtml(c.tagline||"")}</div></td>
            <td>${c.vip ? `<span class="badge vip">VIP</span>` : `<span class="badge">Grátis</span>`}</td>
            <td>${escapeHtml(c.level||"—")}</td>
            <td>${c.lessons.length}</td>
            <td>${quizzes}</td>
            <td>${locked ? `<span class="badge">🔒 Bloqueado</span>` : `<span class="badge done">Disponível</span>`}</td>
            <td>
              <div class="row" style="gap:6px;flex-wrap:wrap;">
                <button class="btn sm ${locked ? "success" : "danger"}" data-lock="${escapeHtml(c.id)}">${locked ? "Desbloquear" : "Bloquear"}</button>
                <button class="btn sm" data-feat="${escapeHtml(c.id)}">${isFeat ? "Remover destaque" : "★ Destaque"}</button>
                <button class="btn sm" data-lessons="${escapeHtml(c.id)}">Ver aulas</button>
              </div>
            </td>
          </tr>`;
        }).join("") || `<tr><td colspan="7" class="center text-muted" style="padding:28px;">Nenhum curso encontrado.</td></tr>`;

        tbody.querySelectorAll("[data-lock]").forEach(btn => btn.addEventListener("click", () => {
          const id = btn.dataset.lock;
          const state = locks.toggleCourseLockForAll(id);
          const c = courses.find(x => x.id === id);
          log(state ? "course.lock" : "course.unlock", c?.title);
          toast({ title: state ? "Curso bloqueado" : "Curso desbloqueado", message: c?.title, type: state ? "info" : "success" });
          renderCoursesTab(panel);
        }));
        tbody.querySelectorAll("[data-feat]").forEach(btn => btn.addEventListener("click", () => {
          const id = btn.dataset.feat;
          const cur = getFeaturedSet();
          if (cur.has(id)) cur.delete(id); else cur.add(id);
          setFeaturedSet(cur);
          log("course.feature", id);
          renderCoursesTab(panel);
        }));
        tbody.querySelectorAll("[data-lessons]").forEach(btn => btn.addEventListener("click", () => showLessonsModal(btn.dataset.lessons)));
      }
    }

    function showLessonsModal(courseId) {
      const c = (window.DevstartCourses || []).find(x => x.id === courseId);
      if (!c) return;
      const rows = c.lessons.map((l, i) => `
        <tr>
          <td>${i+1}</td>
          <td>${escapeHtml(l.title)}</td>
          <td>${escapeHtml(l.summary || "")}</td>
          <td>${l.quiz?.length || 0}</td>
        </tr>
      `).join("");
      openModal(`
        <div class="row between">
          <div><h2 style="margin:0;">${escapeHtml(c.title)}</h2><div class="small text-muted">${c.lessons.length} aulas · ${c.vip?"VIP":"Grátis"} · ${escapeHtml(c.level||"")}</div></div>
          <button class="icon-btn" data-close aria-label="Fechar">×</button>
        </div>
        <div class="table-wrap mt-2">
          <table class="table">
            <thead><tr><th>#</th><th>Título</th><th>Resumo</th><th>Quiz</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `);
    }

    // ======================================================
    // Projetos (moderação)
    // ======================================================
    function renderProjectsTab(panel) {
      const list = storage.get(KEY_PROJECTS, []);
      panel.innerHTML = `
        <section class="card reveal">
          <div class="row between mb-2" style="flex-wrap:wrap;gap:10px;">
            <h2 style="margin:0;">Projetos publicados</h2>
            <input class="input" id="proj-search" placeholder="Buscar por título ou autor…" style="min-width:260px;" />
          </div>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Projeto</th><th>Autor</th><th>Tech</th><th>Likes</th><th>Coment.</th><th>Publicado</th><th>Ações</th></tr></thead>
              <tbody id="proj-tbody"></tbody>
            </table>
          </div>
        </section>
      `;
      const s = document.getElementById("proj-search");
      s.addEventListener("input", draw);
      draw();
      function draw() {
        const q = (s.value || "").trim().toLowerCase();
        const items = list.filter(p => !q || (p.title||"").toLowerCase().includes(q) || (p.author||"").toLowerCase().includes(q));
        const tbody = document.getElementById("proj-tbody");
        if (!items.length) { tbody.innerHTML = `<tr><td colspan="7" class="center text-muted" style="padding:28px;">Nenhum projeto.</td></tr>`; return; }
        tbody.innerHTML = items.map(p => `
          <tr>
            <td><strong>${escapeHtml(p.title||"")}</strong><div class="small text-muted">${escapeHtml((p.description||"").slice(0,80))}${(p.description||"").length>80?"…":""}</div></td>
            <td>@${escapeHtml(p.author||"")}</td>
            <td>${(p.tech||[]).slice(0,3).map(t => `<span class="badge">${escapeHtml(t)}</span>`).join(" ")}</td>
            <td>${p.likes||0}</td>
            <td>${(p.comments||[]).length}</td>
            <td>${p.createdAt ? new Date(p.createdAt).toLocaleDateString("pt-BR") : "—"}</td>
            <td>
              <div class="row" style="gap:6px;flex-wrap:wrap;">
                <button class="btn sm" data-feat-proj="${escapeHtml(p.id)}">${p.featured?"Remover destaque":"★ Destacar"}</button>
                <button class="btn sm" data-clear-comments="${escapeHtml(p.id)}">🧹 Limpar comentários</button>
                <button class="btn sm danger" data-del-proj="${escapeHtml(p.id)}">Excluir</button>
              </div>
            </td>
          </tr>
        `).join("");

        tbody.querySelectorAll("[data-feat-proj]").forEach(btn => btn.addEventListener("click", () => {
          const id = btn.dataset.featProj;
          const arr = storage.get(KEY_PROJECTS, []);
          const p = arr.find(x => x.id === id); if (!p) return;
          p.featured = !p.featured;
          storage.set(KEY_PROJECTS, arr);
          log("project.feature", p.title);
          toast({ title: p.featured ? "Projeto destacado" : "Destaque removido", type: "success" });
          renderProjectsTab(panel);
        }));
        tbody.querySelectorAll("[data-clear-comments]").forEach(btn => btn.addEventListener("click", () => {
          if (!confirm("Limpar todos os comentários deste projeto?")) return;
          const id = btn.dataset.clearComments;
          const arr = storage.get(KEY_PROJECTS, []);
          const p = arr.find(x => x.id === id); if (!p) return;
          p.comments = [];
          storage.set(KEY_PROJECTS, arr);
          log("project.comments.clear", p.title);
          toast({ title: "Comentários removidos", type: "info" });
          renderProjectsTab(panel);
        }));
        tbody.querySelectorAll("[data-del-proj]").forEach(btn => btn.addEventListener("click", () => {
          if (!confirm("Excluir este projeto permanentemente?")) return;
          const id = btn.dataset.delProj;
          const arr = storage.get(KEY_PROJECTS, []).filter(x => x.id !== id);
          storage.set(KEY_PROJECTS, arr);
          log("project.delete", id);
          toast({ title: "Projeto excluído", type: "error" });
          renderProjectsTab(panel);
        }));
      }
    }

    // ======================================================
    // Chat (moderação)
    // ======================================================
    function renderChatTab(panel) {
      const chat = storage.get(KEY_CHAT, []);
      const channels = Array.from(new Set(chat.map(m => m.channel))).sort();
      panel.innerHTML = `
        <section class="card reveal">
          <div class="row between mb-2" style="flex-wrap:wrap;gap:10px;">
            <h2 style="margin:0;">Mensagens da comunidade</h2>
            <div class="row" style="gap:8px;flex-wrap:wrap;">
              <select class="input" id="chat-ch" style="min-width:200px;">
                <option value="all">Todos canais</option>
                ${channels.map(c => `<option value="${escapeHtml(c)}">#${escapeHtml(c)}</option>`).join("")}
              </select>
              <input class="input" id="chat-search" placeholder="Buscar texto/usuário…" style="min-width:220px;" />
              <button class="btn sm danger" id="chat-clear-channel">🧹 Limpar canal</button>
              <button class="btn sm danger" id="chat-clear-all">Zerar chat</button>
            </div>
          </div>
          <div class="table-wrap" style="max-height:540px;overflow:auto;">
            <table class="table">
              <thead><tr><th>Canal</th><th>Usuário</th><th>Mensagem</th><th>Quando</th><th>Ações</th></tr></thead>
              <tbody id="chat-tbody"></tbody>
            </table>
          </div>
        </section>
      `;
      const ch = document.getElementById("chat-ch");
      const q = document.getElementById("chat-search");
      ch.addEventListener("change", draw);
      q.addEventListener("input", draw);
      document.getElementById("chat-clear-channel").addEventListener("click", () => {
        const sel = ch.value;
        if (sel === "all") return toast({ title: "Selecione um canal", type: "info" });
        if (!confirm(`Apagar todas as mensagens de #${sel}?`)) return;
        const all = storage.get(KEY_CHAT, []).filter(m => m.channel !== sel);
        storage.set(KEY_CHAT, all);
        log("chat.channel.clear", sel);
        toast({ title: `#${sel} limpo`, type: "info" });
        renderChatTab(panel);
      });
      document.getElementById("chat-clear-all").addEventListener("click", () => {
        if (!confirm("Apagar TODAS as mensagens de todos os canais?")) return;
        storage.set(KEY_CHAT, []);
        log("chat.all.clear", "");
        toast({ title: "Chat zerado", type: "error" });
        renderChatTab(panel);
      });
      draw();
      function draw() {
        const sel = ch.value;
        const term = (q.value || "").trim().toLowerCase();
        let list = storage.get(KEY_CHAT, []);
        if (sel !== "all") list = list.filter(m => m.channel === sel);
        if (term) list = list.filter(m => (m.text||"").toLowerCase().includes(term) || (m.author||"").toLowerCase().includes(term));
        list = list.slice().sort((a,b) => b.at - a.at).slice(0, 400);
        const tbody = document.getElementById("chat-tbody");
        if (!list.length) return tbody.innerHTML = `<tr><td colspan="5" class="center text-muted" style="padding:28px;">Sem mensagens.</td></tr>`;
        tbody.innerHTML = list.map(m => `
          <tr>
            <td>#${escapeHtml(m.channel)}</td>
            <td>@${escapeHtml(m.author||"")}</td>
            <td>${escapeHtml(m.text||"")}</td>
            <td>${m.at ? new Date(m.at).toLocaleString("pt-BR") : "—"}</td>
            <td><button class="btn sm danger" data-del-msg="${escapeHtml(m.id)}">Excluir</button></td>
          </tr>
        `).join("");
        tbody.querySelectorAll("[data-del-msg]").forEach(btn => btn.addEventListener("click", () => {
          const id = btn.dataset.delMsg;
          const all = storage.get(KEY_CHAT, []).filter(m => m.id !== id);
          storage.set(KEY_CHAT, all);
          log("chat.msg.delete", id);
          toast({ title: "Mensagem excluída", type: "info" });
          draw();
        }));
      }
    }

    // ======================================================
    // Anúncios (banner global)
    // ======================================================
    function renderAnnouncementsTab(panel) {
      const list = storage.get(KEY_ANNOUNCEMENTS, []);
      panel.innerHTML = `
        <section class="card reveal">
          <h2 style="margin-top:0;">Novo anúncio</h2>
          <p class="text-muted">Publique uma faixa visível em todas as páginas. Ative apenas um por vez — usuários podem dispensar.</p>
          <form class="form" id="ann-form">
            <label for="ann-title">Título</label>
            <input class="input" id="ann-title" required placeholder="Ex.: Novos cursos liberados!" />
            <label for="ann-body">Mensagem</label>
            <textarea class="input" id="ann-body" rows="3" required placeholder="Detalhe rápido…"></textarea>
            <label for="ann-type">Tipo</label>
            <select class="input" id="ann-type">
              <option value="info">Informativo</option>
              <option value="success">Sucesso</option>
              <option value="warning">Aviso</option>
              <option value="vip">VIP</option>
            </select>
            <button class="btn primary" type="submit">Publicar</button>
          </form>
        </section>

        <section class="card reveal mt-2">
          <h2 style="margin-top:0;">Histórico</h2>
          ${list.length ? `<div class="table-wrap"><table class="table">
            <thead><tr><th>Título</th><th>Mensagem</th><th>Tipo</th><th>Publicado</th><th>Status</th><th>Ações</th></tr></thead>
            <tbody>${list.map(a => `
              <tr>
                <td><strong>${escapeHtml(a.title)}</strong></td>
                <td>${escapeHtml(a.body)}</td>
                <td><span class="badge ${a.type==="vip"?"vip":""}">${escapeHtml(a.type)}</span></td>
                <td>${fmtDate(a.at)}</td>
                <td>${a.active ? '<span class="badge done">Ativo</span>' : '<span class="badge">Inativo</span>'}</td>
                <td>
                  <div class="row" style="gap:6px;flex-wrap:wrap;">
                    <button class="btn sm" data-ann-toggle="${escapeHtml(a.id)}">${a.active?"Desativar":"Ativar"}</button>
                    <button class="btn sm danger" data-ann-del="${escapeHtml(a.id)}">Excluir</button>
                  </div>
                </td>
              </tr>`).join("")}</tbody>
          </table></div>` : '<p class="text-muted">Sem anúncios.</p>'}
        </section>
      `;
      document.getElementById("ann-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("ann-title").value.trim();
        const body = document.getElementById("ann-body").value.trim();
        const type = document.getElementById("ann-type").value;
        if (!title || !body) return;
        const arr = storage.get(KEY_ANNOUNCEMENTS, []);
        // Only one active at a time
        arr.forEach(a => a.active = false);
        arr.unshift({ id: "ann-" + Date.now().toString(36), title, body, type, at: Date.now(), active: true });
        storage.set(KEY_ANNOUNCEMENTS, arr);
        log("announcement.create", title);
        toast({ title: "Anúncio publicado", type: "success" });
        renderAnnouncementsTab(panel);
      });
      panel.querySelectorAll("[data-ann-toggle]").forEach(b => b.addEventListener("click", () => {
        const id = b.dataset.annToggle;
        const arr = storage.get(KEY_ANNOUNCEMENTS, []);
        const target = arr.find(x => x.id === id); if (!target) return;
        const next = !target.active;
        arr.forEach(a => a.active = false);
        target.active = next;
        storage.set(KEY_ANNOUNCEMENTS, arr);
        log("announcement.toggle", target.title);
        renderAnnouncementsTab(panel);
      }));
      panel.querySelectorAll("[data-ann-del]").forEach(b => b.addEventListener("click", () => {
        if (!confirm("Excluir anúncio?")) return;
        const id = b.dataset.annDel;
        const arr = storage.get(KEY_ANNOUNCEMENTS, []).filter(x => x.id !== id);
        storage.set(KEY_ANNOUNCEMENTS, arr);
        log("announcement.delete", id);
        renderAnnouncementsTab(panel);
      }));
    }

    // ======================================================
    // Dados & sistema
    // ======================================================
    function renderDataTab(panel) {
      const kRaw = [
        STORAGE_KEYS.users, STORAGE_KEYS.session, STORAGE_KEYS.admin,
        STORAGE_KEYS.courseLocks, KEY_PROJECTS, KEY_CHAT, KEY_PROJECT_LIKES(),
        KEY_ANNOUNCEMENTS, KEY_FEATURED, KEY_ADMIN_LOGS,
      ].map(k => {
        const raw = localStorage.getItem(k);
        return { key: k, size: raw ? raw.length : 0 };
      });
      const total = kRaw.reduce((s,k) => s + k.size, 0);

      panel.innerHTML = `
        <section class="dash-stats reveal" style="margin-bottom:18px;">
          ${[
            { lab: "Chaves usadas", num: kRaw.filter(k => k.size).length },
            { lab: "Bytes (aprox.)", num: fmtNum(total) },
            { lab: "Usuários", num: users.getUsers().length },
            { lab: "Projetos", num: (storage.get(KEY_PROJECTS, []) || []).length },
          ].map(s => `<div class="dash-stat"><div class="lab">${s.lab}</div><div class="num gradient-text">${s.num}</div></div>`).join("")}
        </section>

        <section class="card reveal mb-2">
          <h2 style="margin-top:0;">Chaves no armazenamento</h2>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Chave</th><th>Tamanho</th><th>Ações</th></tr></thead>
              <tbody>
                ${kRaw.map(k => `<tr>
                  <td><code>${escapeHtml(k.key)}</code></td>
                  <td>${fmtNum(k.size)} chars</td>
                  <td><button class="btn sm danger" data-purge="${escapeHtml(k.key)}">Zerar</button></td>
                </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </section>

        <section class="card reveal mb-2">
          <h2 style="margin-top:0;">Operações perigosas</h2>
          <div class="row" style="gap:8px;flex-wrap:wrap;">
            <button class="btn sm danger" id="reset-progress-all">🧹 Resetar progresso de TODOS</button>
            <button class="btn sm danger" id="remove-vip-all">Remover VIP de TODOS</button>
            <button class="btn sm danger" id="delete-users-all">💣 Excluir todos os usuários</button>
          </div>
        </section>

        <section class="card reveal">
          <h2 style="margin-top:0;">Log de ações do admin</h2>
          ${renderLogsTable()}
        </section>
      `;
      panel.querySelectorAll("[data-purge]").forEach(b => b.addEventListener("click", () => {
        const k = b.dataset.purge;
        if (!confirm(`Zerar a chave ${k}?`)) return;
        localStorage.removeItem(k);
        log("storage.purge", k);
        toast({ title: "Chave apagada", message: k, type: "info" });
        renderDataTab(panel);
      }));
      document.getElementById("reset-progress-all").addEventListener("click", () => {
        if (!confirm("Resetar progresso de TODOS os usuários?")) return;
        const list = users.getUsers();
        list.forEach(u => u.progress = {});
        storage.set(STORAGE_KEYS.users, list);
        log("progress.ALL.reset", `${list.length} users`);
        toast({ title: "Progresso resetado de todos", type: "info" });
      });
      document.getElementById("remove-vip-all").addEventListener("click", () => {
        if (!confirm("Remover VIP de TODOS os usuários?")) return;
        const list = users.getUsers();
        list.forEach(u => u.vip = false);
        storage.set(STORAGE_KEYS.users, list);
        log("vip.ALL.remove", `${list.length} users`);
        toast({ title: "VIP removido de todos", type: "info" });
      });
      document.getElementById("delete-users-all").addEventListener("click", () => {
        if (!confirm("EXCLUIR todos os usuários? Ação irreversível.")) return;
        storage.set(STORAGE_KEYS.users, []);
        log("user.ALL.delete", "");
        toast({ title: "Todos os usuários removidos", type: "error" });
      });
    }
    function KEY_PROJECT_LIKES() { return "devstart.projectLikes"; }
    function renderLogsTable() {
      const logs = storage.get(KEY_ADMIN_LOGS, []);
      if (!logs.length) return '<p class="text-muted">Sem registros.</p>';
      return `<div class="table-wrap" style="max-height:300px;overflow:auto;"><table class="table">
        <thead><tr><th>Quando</th><th>Ação</th><th>Detalhe</th></tr></thead>
        <tbody>${logs.map(l => `<tr><td>${fmtDate(l.at)}</td><td><code>${escapeHtml(l.action)}</code></td><td>${escapeHtml(l.detail)}</td></tr>`).join("")}</tbody>
      </table></div>`;
    }

    // ======================================================
    // Modal helpers
    // ======================================================
    function openModal(html) {
      const back = document.createElement("div");
      back.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(6px);z-index:150;display:grid;place-items:center;padding:20px;";
      back.innerHTML = `<div class="card" style="max-width:860px;width:100%;max-height:85vh;overflow:auto;">${html}</div>`;
      document.body.appendChild(back);
      const close = () => back.remove();
      back.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", close));
      back.addEventListener("click", (e) => { if (e.target === back) close(); });
    }

    function showUserDetails(username) {
      const courses = window.DevstartCourses || [];
      const user = users.findUser(username);
      if (!user) return;
      const rows = courses.map(c => {
        const p = progress.getCourseProgress(user, c);
        return `<tr>
          <td>${escapeHtml(c.title)} ${c.vip ? `<span class="badge vip">VIP</span>` : ""}</td>
          <td>${p.completed}/${p.total}</td>
          <td>${p.percent}%</td>
          <td>${Object.keys(p.quizzes || {}).length}</td>
        </tr>`;
      }).join("");
      openModal(`
        <div class="row between">
          <div>
            <h2 style="margin:0;">@${escapeHtml(user.username)}</h2>
            <div class="small text-muted">${user.vip ? "👑 Membro VIP" : "Plano gratuito"} · Entrou em ${new Date(user.createdAt).toLocaleDateString("pt-BR")}</div>
          </div>
          <button class="icon-btn" data-close aria-label="Fechar">×</button>
        </div>
        <div class="table-wrap mt-2">
          <table class="table">
            <thead><tr><th>Curso</th><th>Aulas</th><th>Progresso</th><th>Quizzes</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `);
    }

    // ======================================================
    // Exportar / importar
    // ======================================================
    function exportAll() {
      const data = {};
      Object.keys(localStorage).filter(k => k.startsWith("devstart.")).forEach(k => data[k] = localStorage.getItem(k));
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `devstart-backup-${new Date().toISOString().slice(0,10)}.json`;
      a.click(); URL.revokeObjectURL(url);
      log("backup.export", `${Object.keys(data).length} chaves`);
      toast({ title: "Backup exportado", type: "success" });
    }
    function importAll() {
      const inp = document.createElement("input");
      inp.type = "file"; inp.accept = "application/json";
      inp.onchange = () => {
        const file = inp.files?.[0]; if (!file) return;
        const r = new FileReader();
        r.onload = () => {
          try {
            const obj = JSON.parse(r.result);
            if (typeof obj !== "object") throw new Error("formato inválido");
            if (!confirm(`Restaurar ${Object.keys(obj).length} chaves? Isto sobrescreve dados atuais.`)) return;
            Object.entries(obj).forEach(([k, v]) => localStorage.setItem(k, v));
            log("backup.import", `${Object.keys(obj).length} chaves`);
            toast({ title: "Backup restaurado", type: "success" });
            renderPanel("overview");
          } catch (e) {
            toast({ title: "Arquivo inválido", message: String(e.message), type: "error" });
          }
        };
        r.readAsText(file);
      };
      inp.click();
    }

    // ======================================================
    // Helpers
    // ======================================================
    function countUserLessons(u, courses) {
      if (!u.progress) return 0;
      let n = 0;
      for (const c of courses) {
        const e = u.progress[c.id];
        if (e?.completedLessons) n += e.completedLessons.length;
      }
      return n;
    }
    function countUserQuizzes(u) {
      if (!u.progress) return 0;
      let n = 0;
      for (const cid in u.progress) n += Object.keys(u.progress[cid].quizzes || {}).length;
      return n;
    }
  });
})();
