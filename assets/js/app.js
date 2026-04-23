/* =============================================================
   Devstart UP — Shared runtime (auth, storage, sidebar, toasts)
   ============================================================= */
(function () {
  const STORAGE_KEYS = {
    users: "devstart.users",
    session: "devstart.session",
    admin: "devstart.adminSession",
    theme: "devstart.theme",
    courseLocks: "devstart.courseLocks",
  };

  const ADMIN = { username: "admin", password: "devstart2025" };
  const DISCORD_URL = "https://discord.gg/AKMMJaqAtB";

  // --------- Storage helpers ---------
  const storage = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
    },
    remove(key) { try { localStorage.removeItem(key); } catch (e) {} },
  };

  // --------- Users ---------
  function getUsers() { return storage.get(STORAGE_KEYS.users, []); }
  function saveUsers(list) { storage.set(STORAGE_KEYS.users, list); }
  function findUser(username) {
    if (!username) return null;
    const u = username.trim().toLowerCase();
    return getUsers().find(x => x.username.toLowerCase() === u) || null;
  }
  function createUser({ username, password }) {
    username = (username || "").trim();
    if (!username || !password) throw new Error("Preencha todos os campos.");
    if (username.length < 3) throw new Error("O usuário precisa ter ao menos 3 caracteres.");
    if (password.length < 4) throw new Error("A senha precisa ter ao menos 4 caracteres.");
    if (findUser(username)) throw new Error("Este nome de usuário já está em uso.");
    const user = {
      username,
      password, // client-side demo only
      vip: false,
      createdAt: Date.now(),
      progress: {}, // { [courseId]: { completedLessons: [lessonId], quizzes: { [lessonId]: {score, total, percent, at} } } }
    };
    const list = getUsers();
    list.push(user);
    saveUsers(list);
    return user;
  }
  function login(username, password) {
    const user = findUser(username);
    if (!user) throw new Error("Usuário não encontrado.");
    if (user.password !== password) throw new Error("Senha incorreta.");
    storage.set(STORAGE_KEYS.session, { username: user.username, at: Date.now() });
    return user;
  }
  function logout() { storage.remove(STORAGE_KEYS.session); }
  function currentUser() {
    const s = storage.get(STORAGE_KEYS.session, null);
    if (!s) return null;
    return findUser(s.username);
  }
  function updateUser(username, updater) {
    const list = getUsers();
    const idx = list.findIndex(x => x.username.toLowerCase() === username.toLowerCase());
    if (idx === -1) return null;
    list[idx] = typeof updater === "function" ? updater({ ...list[idx] }) : { ...list[idx], ...updater };
    saveUsers(list);
    return list[idx];
  }

  // --------- Admin ---------
  function adminLogin(username, password) {
    if (username === ADMIN.username && password === ADMIN.password) {
      storage.set(STORAGE_KEYS.admin, { at: Date.now() });
      return true;
    }
    throw new Error("Credenciais de admin inválidas.");
  }
  function adminLogout() { storage.remove(STORAGE_KEYS.admin); }
  function isAdminSession() { return !!storage.get(STORAGE_KEYS.admin, null); }

  // --------- Course Locks (admin) ---------
  function getCourseLocks() { return storage.get(STORAGE_KEYS.courseLocks, {}); }
  function setCourseLocks(map) { storage.set(STORAGE_KEYS.courseLocks, map); }
  function isCourseLockedForAll(courseId) {
    const map = getCourseLocks();
    return !!map[courseId];
  }
  function toggleCourseLockForAll(courseId) {
    const map = getCourseLocks();
    map[courseId] = !map[courseId];
    setCourseLocks(map);
    return map[courseId];
  }

  // --------- Progress ---------
  function markLessonComplete(courseId, lessonId) {
    const user = currentUser();
    if (!user) return null;
    const next = { ...user };
    next.progress = next.progress || {};
    next.progress[courseId] = next.progress[courseId] || { completedLessons: [], quizzes: {} };
    const set = new Set(next.progress[courseId].completedLessons);
    set.add(lessonId);
    next.progress[courseId].completedLessons = Array.from(set);
    return updateUser(user.username, next);
  }
  function saveQuizResult(courseId, lessonId, result) {
    const user = currentUser();
    if (!user) return null;
    const next = { ...user };
    next.progress = next.progress || {};
    next.progress[courseId] = next.progress[courseId] || { completedLessons: [], quizzes: {} };
    next.progress[courseId].quizzes[lessonId] = { ...result, at: Date.now() };
    return updateUser(user.username, next);
  }
  function getCourseProgress(user, course) {
    const total = course ? course.lessons.length : 0;
    if (!user || !course) {
      return { completed: 0, total, percent: 0, completedLessons: [], quizzes: {} };
    }
    const entry = (user.progress && user.progress[course.id]) || { completedLessons: [], quizzes: {} };
    const completedLessons = entry.completedLessons || [];
    const completed = completedLessons.filter(id => course.lessons.some(l => l.id === id)).length;
    const percent = total ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percent, completedLessons, quizzes: entry.quizzes || {} };
  }

  // --------- Toasts ---------
  function ensureToastStack() {
    let stack = document.querySelector(".toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      document.body.appendChild(stack);
    }
    return stack;
  }
  function toast({ title, message, type = "info", timeout = 3600 }) {
    const stack = ensureToastStack();
    const el = document.createElement("div");
    el.className = `toast ${type}`;
    const icon = type === "success" ? "✓" : type === "error" ? "!" : "i";
    el.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-body">
        <div class="toast-title">${escapeHtml(title || "")}</div>
        ${message ? `<div class="toast-msg">${escapeHtml(message)}</div>` : ""}
      </div>
    `;
    stack.appendChild(el);
    setTimeout(() => {
      el.classList.add("leaving");
      setTimeout(() => el.remove(), 320);
    }, timeout);
  }
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[s]));
  }

  // --------- Reveal on scroll ---------
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(e => obs.observe(e));
  }

  // --------- Announcement banner ---------
  function renderAnnouncement() {
    try {
      const list = storage.get("devstart.announcements", []);
      const active = list.find(a => a.active);
      if (!active) return;
      const dismissed = storage.get("devstart.annDismissed", []);
      if (dismissed.includes(active.id)) return;
      if (document.querySelector(".announcement-banner")) return;
      const div = document.createElement("div");
      div.className = `announcement-banner type-${active.type || "info"}`;
      div.innerHTML = `<span><strong>${escapeHtml(active.title)}</strong>${escapeHtml(active.body)}</span> <button class="ann-close" aria-label="Dispensar">×</button>`;
      document.body.insertBefore(div, document.body.firstChild);
      div.querySelector(".ann-close").addEventListener("click", () => {
        dismissed.push(active.id);
        storage.set("devstart.annDismissed", dismissed.slice(-50));
        div.remove();
      });
    } catch (e) {}
  }

  // --------- Sidebar ---------
  function initSidebar() {
    // Render header + sidebar scaffolding if placeholder present
    const headerMount = document.querySelector("[data-site-header]");
    const sidebarMount = document.querySelector("[data-site-sidebar]");
    const user = currentUser();

    renderAnnouncement();

    if (headerMount && !headerMount.dataset.rendered) {
      headerMount.dataset.rendered = "1";
      headerMount.outerHTML = renderHeaderHTML(user);
    }

    if (sidebarMount && !sidebarMount.dataset.rendered) {
      sidebarMount.dataset.rendered = "1";
      sidebarMount.outerHTML = renderSidebarHTML(user);
    }

    const menuBtn = document.querySelector("[data-menu-toggle]");
    const sidebar = document.querySelector(".sidebar");
    const backdrop = document.querySelector(".sidebar-backdrop");
    const close = () => {
      sidebar?.classList.remove("open");
      backdrop?.classList.remove("open");
      document.body.style.overflow = "";
    };
    const open = () => {
      sidebar?.classList.add("open");
      backdrop?.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    menuBtn?.addEventListener("click", () => {
      sidebar?.classList.contains("open") ? close() : open();
    });
    backdrop?.addEventListener("click", close);
    document.querySelector("[data-sidebar-close]")?.addEventListener("click", close);
    document.querySelectorAll(".sidebar-nav a").forEach(a => a.addEventListener("click", close));

    // Logout handlers
    document.querySelectorAll("[data-logout]").forEach(b => {
      b.addEventListener("click", (e) => {
        e.preventDefault();
        logout();
        toast({ title: "Sessão encerrada", message: "Até logo!", type: "info" });
        setTimeout(() => { window.location.href = resolvePath("index.html"); }, 400);
      });
    });

    // Mark active link based on current page
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".sidebar-nav a, .header .nav a").forEach(a => {
      const href = a.getAttribute("href") || "";
      if (href.endsWith(path) || (path === "index.html" && href.endsWith("/"))) {
        a.classList.add("active");
      }
    });

    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn?.addEventListener("click", () => window.DevstartTheme?.toggle());

    // Header search
    const hs = document.getElementById("header-search");
    if (hs) {
      hs.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const q = hs.value.trim();
          if (!q) return;
          window.location.href = resolvePath("pages/search.html?q=" + encodeURIComponent(q));
        }
      });
    }

    // Notifications panel
    const notifBtn = document.getElementById("notif-btn");
    if (notifBtn && user) {
      const refreshDot = () => {
        const count = window.DevstartNotify?.unreadCount(user.username) || 0;
        const dot = document.getElementById("notif-dot");
        if (dot) dot.style.display = count > 0 ? "inline-block" : "none";
      };
      refreshDot();
      window.addEventListener("devstart:notify", refreshDot);
      notifBtn.addEventListener("click", () => {
        openNotificationsPanel(user.username, refreshDot);
      });
    }

    // Daily check-in grants small XP + streak once per day
    if (user && window.DevstartGame) {
      try { window.DevstartGame.dailyCheckIn(user.username); } catch (e) {}
    }
    if (user && window.DevstartNotify) {
      try { window.DevstartNotify.seedIfEmpty(user.username); } catch (e) {}
    }
  }

  function openNotificationsPanel(username, onChange) {
    document.querySelector(".notif-panel")?.remove();
    const panel = document.createElement("div");
    panel.className = "notif-panel";
    const list = (window.DevstartNotify?.all(username) || []);
    panel.innerHTML = `
      <div class="notif-head">
        <strong>Notificações</strong>
        <div class="row" style="gap:8px;">
          <button class="btn ghost sm" id="np-mark">Marcar como lidas</button>
          <button class="btn ghost sm" id="np-clear">Limpar</button>
        </div>
      </div>
      <div class="notif-list">
        ${list.length === 0
          ? `<div class="empty">Sem notificações por enquanto.</div>`
          : list.map(n => `
              <a class="notif-item ${n.read ? "" : "unread"}" ${n.href ? `href="${resolvePath(n.href)}"` : ""} data-id="${n.id}">
                <span class="emoji">${n.emoji || "🔔"}</span>
                <div class="flex1">
                  <div class="title">${escapeHtml(n.title)}</div>
                  <div class="body small text-muted">${escapeHtml(n.body || "")}</div>
                </div>
              </a>`).join("")}
      </div>
    `;
    document.body.appendChild(panel);
    panel.querySelector("#np-mark").addEventListener("click", () => {
      window.DevstartNotify.markAllRead(username);
      onChange?.();
      panel.remove();
    });
    panel.querySelector("#np-clear").addEventListener("click", () => {
      window.DevstartNotify.clear(username);
      onChange?.();
      panel.remove();
    });
    const close = (e) => {
      if (!panel.contains(e.target) && e.target.id !== "notif-btn" && !document.getElementById("notif-btn")?.contains(e.target)) {
        panel.remove();
        document.removeEventListener("click", close);
      }
    };
    setTimeout(() => document.addEventListener("click", close), 10);
  }

  function renderHeaderHTML(user) {
    const prefix = pathPrefix();
    return `
      <header class="header">
        <div class="container">
          <button class="menu-btn" data-menu-toggle aria-label="Open menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>
            </svg>
          </button>
          <a href="${prefix}index.html" class="brand">
            <span class="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </span>
            <span>Devstart <span class="gradient-text">UP</span></span>
          </a>
          <nav class="nav">
            <a href="${prefix}index.html">Início</a>
            <a href="${prefix}pages/courses.html">Cursos</a>
            <a href="${prefix}pages/paths.html">Trilhas</a>
            <a href="${prefix}pages/projects.html">Projetos</a>
            <a href="${prefix}pages/forum.html">Fórum</a>
            <a href="${prefix}pages/ranking.html">Ranking</a>
            <a href="${prefix}pages/vip.html">VIP</a>
          </nav>
          <div class="header-search">
            <input class="input sm" id="header-search" placeholder="Buscar cursos, aulas, fórum…" autocomplete="off" />
          </div>
          <div class="header-actions">
            <button class="icon-btn" id="theme-toggle" title="Alternar tema (claro/escuro)" aria-label="Alternar tema">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            </button>
            ${user
              ? `<button class="icon-btn notif-btn" id="notif-btn" title="Notificações" aria-label="Notificações">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>
                  <span class="notif-dot" id="notif-dot" style="display:none;"></span>
                </button>
                 <a class="btn sm ghost" href="${prefix}pages/dashboard.html">Olá, ${escapeHtml(user.username)}</a>
                 <a class="btn sm vip" href="${prefix}pages/vip.html">${user.vip ? "VIP ativo" : "Obter VIP"}</a>`
              : `<a class="btn sm ghost" href="${prefix}pages/login.html">Entrar</a>
                 <a class="btn sm primary" href="${prefix}pages/register.html">Começar grátis</a>`
            }
          </div>
        </div>
      </header>
    `;
  }

  function renderSidebarHTML(user) {
    const prefix = pathPrefix();
    const initial = (user?.username || "?").charAt(0).toUpperCase();
    const lvl = user && window.DevstartGame ? window.DevstartGame.levelFor(window.DevstartGame.get(user.username).xp) : null;
    const xpState = user && window.DevstartGame ? window.DevstartGame.get(user.username) : null;
    const avatarImg = user && user.avatar
      ? `<img src="${user.avatar}" alt="avatar" />`
      : escapeHtml(initial);
    return `
      <div class="sidebar-backdrop"></div>
      <aside class="sidebar" aria-label="Side menu">
        <div class="sidebar-head">
          <div class="brand">
            <span class="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </span>
            <span>Devstart <span class="gradient-text">UP</span></span>
          </div>
          <button class="icon-btn" data-sidebar-close aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
          </button>
        </div>
        ${user ? `
          <div class="sidebar-user">
            <div class="avatar ${user.avatar ? "img" : ""}">${avatarImg}</div>
            <div class="meta">
              <div class="name">${escapeHtml(user.username)}</div>
              <div class="role">${user.vip ? "Membro VIP 👑" : "Plano gratuito"}</div>
              ${lvl ? `<div class="small text-muted" style="margin-top:4px;">Lv ${lvl.id} · ${escapeHtml(lvl.name)} · ${xpState.xp} XP · 🔥 ${xpState.streak}d</div>` : ""}
            </div>
          </div>` : `
          <div class="sidebar-user">
            <div class="avatar">?</div>
            <div class="meta">
              <div class="name">Visitante</div>
              <div class="role">Entre para salvar seu progresso</div>
            </div>
          </div>`
        }
        <nav class="sidebar-nav">
          <a href="${prefix}index.html">${icon("home")} Início</a>
          <a href="${prefix}pages/courses.html">${icon("book")} Cursos</a>
          <a href="${prefix}pages/paths.html">${icon("path")} Trilhas</a>
          <a href="${prefix}pages/projects.html">${icon("rocket")} Projetos</a>
          <a href="${prefix}pages/forum.html">${icon("chat")} Fórum</a>
          <a href="${prefix}pages/progress.html">${icon("chart")} Meu Progresso</a>
          <a href="${prefix}pages/dashboard.html">${icon("grid")} Painel</a>
          <a href="${prefix}pages/ranking.html">${icon("trophy")} Ranking</a>
          <a href="${prefix}pages/certificates.html">${icon("medal")} Certificados</a>
          <a href="${prefix}pages/profile.html">${icon("user")} Perfil</a>
          <a href="${prefix}pages/vip.html">${icon("crown")} VIP</a>
          <a href="${DISCORD_URL}" target="_blank" rel="noopener">${icon("discord")} Discord</a>
          ${user
            ? `<a href="#" data-logout>${icon("logout")} Sair</a>`
            : `<a href="${prefix}pages/login.html">${icon("login")} Entrar</a>`
          }
        </nav>
        <div class="sidebar-foot">© 2025 Devstart UP — feito com ❤️ para devs</div>
      </aside>
    `;
  }

  function icon(name) {
    const paths = {
      home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
      book: '<path d="M4 4h11a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M4 4v12a4 4 0 0 0 4 4"/>',
      chart: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-8"/><path d="M22 20H2"/>',
      grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
      user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
      crown: '<path d="M3 18h18"/><path d="M3 8l4 6 5-8 5 8 4-6v10H3z"/>',
      discord: '<path d="M19.5 5.5A17 17 0 0 0 15.7 4l-.2.4a12.6 12.6 0 0 1 3.4 1.8 11.9 11.9 0 0 0-13.8 0A12.6 12.6 0 0 1 8.5 4.4L8.3 4A17 17 0 0 0 4.5 5.5C2 9.8 1.5 14 1.8 18.1A16.9 16.9 0 0 0 6.7 20l.9-1.3a10.9 10.9 0 0 1-1.8-.9c.2-.2.3-.3.5-.5a11.7 11.7 0 0 0 11.4 0c.2.2.3.3.5.5a10.9 10.9 0 0 1-1.8.9l.9 1.3a16.9 16.9 0 0 0 4.9-1.9c.4-4.7-.6-8.8-2.7-12.6zM8.7 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/>',
      logout: '<path d="M15 12H3"/><polyline points="10 7 3 12 10 17"/><path d="M21 4v16"/>',
      login: '<path d="M3 12h12"/><polyline points="10 7 15 12 10 17"/><path d="M21 4v16"/>',
      rocket: '<path d="M5 15c-1 3-1 5-1 5s2 0 5-1"/><path d="M9 19l-4-4"/><path d="M14 4c4 0 6 2 6 6 0 4-6 10-6 10S8 14 8 10c0-4 2-6 6-6z"/><circle cx="14" cy="10" r="1.6"/>',
      chat: '<path d="M21 12a8 8 0 0 1-12 6.9L3 21l2.1-6A8 8 0 1 1 21 12z"/>',
      path: '<path d="M6 4v4a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v4"/><circle cx="6" cy="4" r="2"/><circle cx="18" cy="20" r="2"/>',
      trophy: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 6h3a3 3 0 0 1-3 5"/><path d="M7 6H4a3 3 0 0 0 3 5"/>',
      medal: '<circle cx="12" cy="15" r="5"/><path d="M8 10l-3-7h4l3 5"/><path d="M16 10l3-7h-4l-3 5"/>',
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ""}</svg>`;
  }

  function pathPrefix() {
    // If we're inside /pages/, prefix with ../; else empty
    const p = window.location.pathname;
    return p.includes("/pages/") ? "../" : "";
  }

  function resolvePath(rel) {
    return pathPrefix() + rel;
  }

  // --------- Auth guard ---------
  function requireAuth(redirect = "login.html") {
    if (!currentUser()) {
      window.location.href = redirect;
      return false;
    }
    return true;
  }
  function requireAdmin() {
    if (!isAdminSession()) return false;
    return true;
  }

  // Expose
  window.DevstartApp = {
    storage,
    STORAGE_KEYS,
    DISCORD_URL,
    users: { getUsers, findUser, createUser, login, logout, currentUser, updateUser },
    admin: { ADMIN, login: adminLogin, logout: adminLogout, isAdminSession },
    locks: { getCourseLocks, setCourseLocks, isCourseLockedForAll, toggleCourseLockForAll },
    progress: { markLessonComplete, saveQuizResult, getCourseProgress },
    toast,
    escapeHtml,
    initReveal,
    initSidebar,
    requireAuth,
    requireAdmin,
    resolvePath,
    pathPrefix,
  };

  // Auto boot
  document.addEventListener("DOMContentLoaded", () => {
    initSidebar();
    initReveal();
    document.body.classList.add("page-enter");
  });
})();
