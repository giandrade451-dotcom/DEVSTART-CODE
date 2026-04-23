/* Admin panel */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const { admin, users, progress, locks, escapeHtml, toast } = window.DevstartApp;
    const root = document.getElementById("admin-root");

    if (!admin.isAdminSession()) return renderLogin();
    renderPanel();

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
          renderPanel();
        } catch (err) {
          toast({ title: "Acesso negado", message: err.message, type: "error" });
        }
      });
    }

    function renderPanel() {
      const allUsers = users.getUsers();
      const courses = window.DevstartCourses || [];
      const courseLocks = locks.getCourseLocks();
      const query = "";

      root.innerHTML = `
        <header class="dash-head reveal">
          <div>
            <h1>Painel Admin 🛠️</h1>
            <div class="sub">Gerencie usuários, acesso VIP e disponibilidade dos cursos.</div>
          </div>
          <button class="btn danger" id="admin-logout">Sair</button>
        </header>

        <section class="dash-stats reveal" id="admin-stats"></section>

        <section class="card reveal mb-3">
          <div class="row between mb-2" style="flex-wrap:wrap;gap:12px;">
            <h2 style="margin:0;">Usuários</h2>
            <input class="input" id="user-search" placeholder="Buscar por usuário…" style="min-width:260px;" />
          </div>
          <div class="table-wrap">
            <table class="table">
              <thead>
                <tr><th>Usuário</th><th>Plano</th><th>Entrou em</th><th>Aulas concluídas</th><th>Quizzes</th><th>Ações</th></tr>
              </thead>
              <tbody id="user-tbody"></tbody>
            </table>
          </div>
        </section>

        <section class="card reveal">
          <h2 style="margin-top:0;">Disponibilidade dos cursos</h2>
          <p class="text-muted">Bloqueie um curso para escondê-lo de todos os usuários (inclusive VIPs). Útil para manutenção ou edição temporária.</p>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Curso</th><th>Tipo</th><th>Aulas</th><th>Status</th><th>Ações</th></tr></thead>
              <tbody id="course-tbody"></tbody>
            </table>
          </div>
        </section>
      `;

      document.getElementById("admin-logout").addEventListener("click", () => {
        admin.logout();
        toast({ title: "Admin desconectado", type: "info" });
        renderLogin();
      });

      const search = document.getElementById("user-search");
      search.addEventListener("input", () => renderUsers(search.value));
      renderUsers("");
      renderCourses();
      renderStats();
      window.DevstartApp.initReveal();
    }

    function renderStats() {
      const all = users.getUsers();
      const courses = window.DevstartCourses || [];
      const vipCount = all.filter(u => u.vip).length;
      const totalLessons = all.reduce((sum, u) => sum + countUserLessons(u, courses), 0);
      const totalQuizzes = all.reduce((sum, u) => sum + countUserQuizzes(u), 0);
      const lockedCount = Object.values(locks.getCourseLocks()).filter(Boolean).length;

      document.getElementById("admin-stats").innerHTML = [
        { lab: "Total de usuários", num: all.length, sub: "Todas as contas registradas" },
        { lab: "Usuários VIP", num: vipCount, sub: `${all.length ? Math.round((vipCount/all.length)*100) : 0}% do total` },
        { lab: "Aulas concluídas", num: totalLessons, sub: "Somando todos os usuários" },
        { lab: "Cursos bloqueados", num: lockedCount, sub: `de ${courses.length} no total` },
      ].map(s => `<div class="dash-stat"><div class="lab">${s.lab}</div><div class="num gradient-text">${s.num}</div><div class="sub2">${escapeHtml(s.sub)}</div></div>`).join("");
    }

    function renderUsers(query) {
      const courses = window.DevstartCourses || [];
      const all = users.getUsers();
      const q = (query || "").trim().toLowerCase();
      const list = q ? all.filter(u => u.username.toLowerCase().includes(q)) : all;
      const tbody = document.getElementById("user-tbody");
      if (!list.length) {
        tbody.innerHTML = `<tr><td colspan="6" class="center text-muted" style="padding:30px;">Nenhum usuário encontrado.</td></tr>`;
        return;
      }
      tbody.innerHTML = list.map(u => {
        const lessons = countUserLessons(u, courses);
        const quizzes = countUserQuizzes(u);
        return `<tr>
          <td><strong>${escapeHtml(u.username)}</strong></td>
          <td>${u.vip ? `<span class="badge vip">VIP</span>` : `<span class="badge">Grátis</span>`}</td>
          <td>${new Date(u.createdAt).toLocaleDateString()}</td>
          <td>${lessons}</td>
          <td>${quizzes}</td>
          <td>
            <div class="row" style="gap:6px;flex-wrap:wrap;">
              <button class="btn sm ${u.vip ? "danger" : "vip"}" data-toggle-vip="${escapeHtml(u.username)}">${u.vip ? "Remover VIP" : "Liberar VIP"}</button>
              <button class="btn sm" data-view="${escapeHtml(u.username)}">Detalhes</button>
              <button class="btn sm" data-reset="${escapeHtml(u.username)}">Resetar progresso</button>
              <button class="btn sm danger" data-delete="${escapeHtml(u.username)}">Excluir</button>
            </div>
          </td>
        </tr>`;
      }).join("");

      tbody.querySelectorAll("[data-toggle-vip]").forEach(btn => btn.addEventListener("click", () => {
        const name = btn.dataset.toggleVip;
        const u = users.findUser(name);
        users.updateUser(name, { vip: !u.vip });
        toast({ title: u.vip ? "VIP removido" : "VIP liberado", message: `@${name}`, type: u.vip ? "info" : "success" });
        renderUsers(document.getElementById("user-search").value);
        renderStats();
      }));
      tbody.querySelectorAll("[data-view]").forEach(btn => btn.addEventListener("click", () => {
        showUserDetails(btn.dataset.view);
      }));
      tbody.querySelectorAll("[data-reset]").forEach(btn => btn.addEventListener("click", () => {
        const name = btn.dataset.reset;
        if (!confirm(`Resetar todo o progresso de @${name}?`)) return;
        users.updateUser(name, { progress: {} });
        toast({ title: "Progresso resetado", message: `@${name}`, type: "info" });
        renderUsers(document.getElementById("user-search").value);
        renderStats();
      }));
      tbody.querySelectorAll("[data-delete]").forEach(btn => btn.addEventListener("click", () => {
        const name = btn.dataset.delete;
        if (!confirm(`Excluir permanentemente @${name}?`)) return;
        const list = users.getUsers().filter(u => u.username !== name);
        window.DevstartApp.storage.set(window.DevstartApp.STORAGE_KEYS.users, list);
        toast({ title: "Usuário excluído", message: `@${name}`, type: "error" });
        renderUsers(document.getElementById("user-search").value);
        renderStats();
      }));
    }

    function renderCourses() {
      const courses = window.DevstartCourses || [];
      const courseLocks = locks.getCourseLocks();
      const tbody = document.getElementById("course-tbody");
      tbody.innerHTML = courses.map(c => {
        const lockedByAdmin = !!courseLocks[c.id];
        return `<tr>
          <td><strong>${escapeHtml(c.title)}</strong><div class="small text-muted">${escapeHtml(c.tagline)}</div></td>
          <td>${c.vip ? `<span class="badge vip">VIP</span>` : `<span class="badge">Grátis</span>`}</td>
          <td>${c.lessons.length}</td>
          <td>${lockedByAdmin ? `<span class="badge">🔒 Bloqueado</span>` : `<span class="badge done">Disponível</span>`}</td>
          <td>
            <button class="btn sm ${lockedByAdmin ? "success" : "danger"}" data-lock="${escapeHtml(c.id)}">${lockedByAdmin ? "Desbloquear" : "Bloquear"}</button>
          </td>
        </tr>`;
      }).join("");
      tbody.querySelectorAll("[data-lock]").forEach(btn => btn.addEventListener("click", () => {
        const id = btn.dataset.lock;
        const newState = locks.toggleCourseLockForAll(id);
        const title = (window.DevstartCourses.find(c => c.id === id) || {}).title;
        toast({ title: newState ? "Curso bloqueado" : "Curso desbloqueado", message: title, type: newState ? "info" : "success" });
        renderCourses();
        renderStats();
      }));
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

      const backdrop = document.createElement("div");
      backdrop.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(6px);z-index:150;display:grid;place-items:center;padding:20px;";
      backdrop.innerHTML = `
        <div class="card" style="max-width:820px; width:100%; max-height:85vh; overflow:auto;">
          <div class="row between">
            <div>
              <h2 style="margin:0;">@${escapeHtml(user.username)}</h2>
              <div class="small text-muted">${user.vip ? "👑 Membro VIP" : "Plano gratuito"} · Entrou em ${new Date(user.createdAt).toLocaleDateString("pt-BR")}</div>
            </div>
            <button class="icon-btn" id="close-modal" aria-label="Fechar">×</button>
          </div>
          <div class="table-wrap mt-2">
            <table class="table">
              <thead><tr><th>Curso</th><th>Aulas</th><th>Progresso</th><th>Quizzes</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      `;
      document.body.appendChild(backdrop);
      const close = () => backdrop.remove();
      backdrop.querySelector("#close-modal").addEventListener("click", close);
      backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
    }

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
