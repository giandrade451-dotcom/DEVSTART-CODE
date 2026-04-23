/* =============================================================
   Devstart UP — Projects / Community page
   - LocalStorage-backed projects showcase (GitHub-like)
   - Multi-channel help chat
   - Likes, comments, filters, trending
   ============================================================= */
(function () {
  const KEY_PROJECTS = "devstart.projects";
  const KEY_CHAT = "devstart.chat";
  const KEY_PROJECT_LIKES = "devstart.projectLikes"; // per-user like map

  const SEED_PROJECTS = [
    {
      id: "seed-1",
      author: "camilar",
      title: "Landing page para cafeteria",
      description: "Minha primeira landing real, feita para a cafeteria da minha tia. HTML, CSS e um toque de JS para o menu mobile.",
      tech: ["HTML", "CSS", "JavaScript"],
      cover: "☕",
      repo: "https://github.com/example/cafeteria-landing",
      demo: "",
      tags: ["iniciante", "landing", "frontend"],
      likes: 12,
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
      comments: [
        { id: "c1", author: "matheusl", text: "Muito bonito! O hero ficou lindo.", at: Date.now() - 1000 * 60 * 60 * 24 * 5 },
        { id: "c2", author: "julia", text: "Dica: o contraste do botão pode subir um pouco para acessibilidade.", at: Date.now() - 1000 * 60 * 60 * 24 * 4 },
      ],
    },
    {
      id: "seed-2",
      author: "matheusl",
      title: "Bot de Discord em Node.js",
      description: "Bot que busca cotação de cripto, manda lembretes e tem comandos de /dev-jokes. Feito com discord.js.",
      tech: ["Node.js", "Discord.js", "APIs"],
      cover: "🤖",
      repo: "https://github.com/example/discord-bot",
      demo: "",
      tags: ["bot", "api"],
      likes: 22,
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
      comments: [
        { id: "c3", author: "camilar", text: "Monta tutorial dos comandos, pfv!", at: Date.now() - 1000 * 60 * 60 * 24 * 2 },
      ],
    },
    {
      id: "seed-3",
      author: "julia",
      title: "Dashboard de finanças pessoais",
      description: "SPA em React com gráficos e categorização automática de gastos. Backend em Node + Express + SQLite.",
      tech: ["React", "Node.js", "SQLite", "Chart.js"],
      cover: "📊",
      repo: "https://github.com/example/fin-dashboard",
      demo: "https://fin-dashboard.example.com",
      tags: ["fullstack", "react"],
      likes: 41,
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
      comments: [],
    },
    {
      id: "seed-4",
      author: "pedrocode",
      title: "Quiz de HTML para iniciantes",
      description: "Aplicativo simples em HTML/CSS/JS com 20 questões aleatórias, tela de resultado e compartilhar. Inspirado pelas aulas do Devstart!",
      tech: ["HTML", "CSS", "JavaScript"],
      cover: "🎯",
      repo: "https://github.com/example/html-quiz",
      demo: "",
      tags: ["iniciante", "estudos"],
      likes: 8,
      createdAt: Date.now() - 1000 * 60 * 60 * 8,
      comments: [],
    },
  ];

  const CHANNELS = [
    { id: "geral", name: "#geral", desc: "Converse com a comunidade sobre qualquer assunto.", emoji: "💬" },
    { id: "ajuda-html-css", name: "#ajuda-html-css", desc: "Dúvidas de HTML, CSS, layout e responsividade.", emoji: "🎨" },
    { id: "ajuda-javascript", name: "#ajuda-javascript", desc: "JavaScript, DOM, APIs, bugs esquisitos.", emoji: "⚡" },
    { id: "ajuda-python", name: "#ajuda-python", desc: "Python básico ao avançado, erros e lógica.", emoji: "🐍" },
    { id: "ajuda-backend", name: "#ajuda-backend", desc: "Node, APIs REST, banco de dados, deploy.", emoji: "🖥️" },
    { id: "ajuda-react", name: "#ajuda-react", desc: "Hooks, componentes, roteamento, estado.", emoji: "⚛️" },
    { id: "carreira", name: "#carreira", desc: "Primeiro emprego, CV, entrevistas, freelas.", emoji: "💼" },
    { id: "feedback", name: "#feedback-projetos", desc: "Peça feedback no seu projeto e revise dos outros.", emoji: "🔍" },
  ];

  const SEED_CHAT = [
    { channel: "geral", author: "camilar", text: "Bom dia, devs! Quem está codando hoje? ☕", at: Date.now() - 1000 * 60 * 120 },
    { channel: "geral", author: "matheusl", text: "Finalizei o módulo de JS fundamental 🎉", at: Date.now() - 1000 * 60 * 100 },
    { channel: "ajuda-html-css", author: "pedrocode", text: "Alguém sabe por que meu flexbox não centraliza verticalmente? align-items: center não resolve.", at: Date.now() - 1000 * 60 * 60 },
    { channel: "ajuda-html-css", author: "julia", text: "Confere se o container tem altura definida (height ou min-height). Sem altura, center não tem eixo pra alinhar.", at: Date.now() - 1000 * 60 * 58 },
    { channel: "ajuda-javascript", author: "matheusl", text: "Diferença entre let, var e const em 3 palavras?", at: Date.now() - 1000 * 60 * 40 },
    { channel: "ajuda-javascript", author: "julia", text: "Escopo, escopo, mutabilidade 😅", at: Date.now() - 1000 * 60 * 39 },
    { channel: "carreira", author: "julia", text: "Consegui minha primeira vaga júnior! Muito obrigada Devstart ❤️", at: Date.now() - 1000 * 60 * 20 },
  ];

  // ---------- state ----------
  const storage = window.DevstartApp.storage;
  const toast = window.DevstartApp.toast;
  const escapeHtml = window.DevstartApp.escapeHtml;

  function getProjects() {
    let list = storage.get(KEY_PROJECTS, null);
    if (!list) { list = [...SEED_PROJECTS]; storage.set(KEY_PROJECTS, list); }
    return list;
  }
  function saveProjects(list) { storage.set(KEY_PROJECTS, list); }

  function getChat() {
    let list = storage.get(KEY_CHAT, null);
    if (!list) { list = [...SEED_CHAT]; storage.set(KEY_CHAT, list); }
    return list;
  }
  function saveChat(list) { storage.set(KEY_CHAT, list); }

  function getLikesMap() { return storage.get(KEY_PROJECT_LIKES, {}); }
  function setLikesMap(m) { storage.set(KEY_PROJECT_LIKES, m); }

  // ---------- boot ----------
  document.addEventListener("DOMContentLoaded", () => {
    const user = window.DevstartApp.users.currentUser();

    // tabs
    const tabs = document.querySelectorAll("#proj-tabs .tab");
    const panels = document.querySelectorAll(".panel[data-panel]");
    tabs.forEach(t => t.addEventListener("click", () => {
      tabs.forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      const key = t.dataset.tab;
      panels.forEach(p => p.classList.toggle("hidden", p.dataset.panel !== key));
      if (key === "showcase") renderShowcase();
      if (key === "mine") renderMine();
      if (key === "chat") renderChatUI();
      if (key === "trending") renderTrending();
    }));

    // new project button
    document.getElementById("btn-new-project").addEventListener("click", openNewProjectModal);

    // showcase events
    document.getElementById("proj-search").addEventListener("input", renderShowcase);
    document.getElementById("proj-filter-tech").addEventListener("change", renderShowcase);
    document.getElementById("proj-filter-sort").addEventListener("change", renderShowcase);

    // modal handlers
    document.getElementById("proj-modal-close").addEventListener("click", closeNewProjectModal);
    document.getElementById("proj-cancel").addEventListener("click", closeNewProjectModal);
    document.getElementById("proj-form").addEventListener("submit", submitProject);

    document.getElementById("detail-close").addEventListener("click", () => {
      document.getElementById("detail-modal").classList.add("hidden");
    });

    document.body.addEventListener("click", (e) => {
      const t = e.target.closest("[data-open-new]");
      if (t) openNewProjectModal();
    });

    populateTechFilter();
    renderShowcase();
    window.DevstartApp.initReveal();
  });

  // ---------- showcase ----------
  function populateTechFilter() {
    const sel = document.getElementById("proj-filter-tech");
    const techs = new Set();
    getProjects().forEach(p => (p.tech || []).forEach(t => techs.add(t.trim())));
    const sorted = Array.from(techs).sort();
    sel.innerHTML = `<option value="">Todas as techs</option>` + sorted.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("");
  }

  function renderShowcase() {
    const q = (document.getElementById("proj-search").value || "").trim().toLowerCase();
    const techFilter = document.getElementById("proj-filter-tech").value;
    const sort = document.getElementById("proj-filter-sort").value;
    let list = getProjects().slice();

    if (q) list = list.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.author || "").toLowerCase().includes(q) ||
      (p.tech || []).some(t => t.toLowerCase().includes(q)) ||
      (p.tags || []).some(t => t.toLowerCase().includes(q))
    );
    if (techFilter) list = list.filter(p => (p.tech || []).includes(techFilter));

    if (sort === "recent") list.sort((a, b) => b.createdAt - a.createdAt);
    if (sort === "likes") list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    if (sort === "comments") list.sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));

    document.getElementById("proj-count").textContent = list.length;
    const grid = document.getElementById("projects-grid");
    grid.innerHTML = list.length
      ? list.map(renderProjectCard).join("")
      : `<div class="card center" style="grid-column:1/-1;"><p>Nenhum projeto encontrado. Tente outro termo ou publique o seu!</p></div>`;
    attachCardHandlers(grid);
  }

  function renderMine() {
    const user = window.DevstartApp.users.currentUser();
    const mine = user ? getProjects().filter(p => p.author === user.username) : [];
    document.getElementById("mine-empty-hint").style.display = mine.length ? "none" : "block";
    const grid = document.getElementById("mine-grid");
    grid.innerHTML = mine.map(p => renderProjectCard(p, { showDelete: true })).join("");
    attachCardHandlers(grid);
  }

  function renderTrending() {
    const now = Date.now();
    const week = 1000 * 60 * 60 * 24 * 7;
    const recent = getProjects().filter(p => now - p.createdAt < week);
    recent.sort((a, b) => ((b.likes || 0) + (b.comments?.length || 0) * 2) - ((a.likes || 0) + (a.comments?.length || 0) * 2));
    const grid = document.getElementById("trending-grid");
    grid.innerHTML = recent.length
      ? recent.slice(0, 12).map(renderProjectCard).join("")
      : `<div class="card center" style="grid-column:1/-1;"><p>Ainda não há projetos recentes. Publique o seu e vire destaque!</p></div>`;
    attachCardHandlers(grid);
  }

  function renderProjectCard(p, opts = {}) {
    const user = window.DevstartApp.users.currentUser();
    const likedMap = getLikesMap();
    const liked = user && likedMap[`${user.username}:${p.id}`];
    const commentsN = (p.comments || []).length;
    const deleteBtn = opts.showDelete ? `<button class="btn sm danger" data-delete="${escapeHtml(p.id)}" title="Excluir">Excluir</button>` : "";
    const timeAgo = formatAgo(p.createdAt);
    return `
      <article class="card project-card reveal" data-id="${escapeHtml(p.id)}">
        <div class="proj-cover">${escapeHtml(p.cover || "🧩")}</div>
        <div class="row" style="gap:6px;flex-wrap:wrap;">
          ${(p.tech || []).slice(0, 4).map(t => `<span class="pill">${escapeHtml(t)}</span>`).join("")}
          ${(p.tech || []).length > 4 ? `<span class="pill">+${p.tech.length - 4}</span>` : ""}
        </div>
        <h3 style="margin:12px 0 6px;">${escapeHtml(p.title)}</h3>
        <p class="text-muted" style="margin:0 0 10px;">${escapeHtml(truncate(p.description, 140))}</p>
        <div class="row between" style="align-items:center;">
          <div class="small text-muted">@${escapeHtml(p.author || "anônimo")} · ${timeAgo}</div>
          <div class="row" style="gap:8px;">
            <button class="btn sm ${liked ? "primary" : "ghost"}" data-like="${escapeHtml(p.id)}">❤ ${p.likes || 0}</button>
            <button class="btn sm" data-open="${escapeHtml(p.id)}">💬 ${commentsN}</button>
            ${deleteBtn}
          </div>
        </div>
      </article>
    `;
  }

  function attachCardHandlers(root) {
    root.querySelectorAll("[data-like]").forEach(btn => btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.like;
      toggleLike(id);
    }));
    root.querySelectorAll("[data-open]").forEach(btn => btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openDetail(btn.dataset.open);
    }));
    root.querySelectorAll("[data-delete]").forEach(btn => btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.delete;
      if (!confirm("Excluir este projeto? Esta ação não pode ser desfeita.")) return;
      const list = getProjects().filter(p => p.id !== id);
      saveProjects(list);
      toast({ title: "Projeto excluído", type: "info" });
      renderShowcase(); renderMine();
    }));
    // click outside buttons on card opens detail
    root.querySelectorAll(".project-card").forEach(card => card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      openDetail(card.dataset.id);
    }));
  }

  function toggleLike(id) {
    const user = window.DevstartApp.users.currentUser();
    if (!user) { toast({ title: "Entre para curtir", message: "Faça login para interagir com a comunidade.", type: "info" }); return; }
    const list = getProjects();
    const p = list.find(x => x.id === id); if (!p) return;
    const key = `${user.username}:${id}`;
    const map = getLikesMap();
    if (map[key]) { map[key] = false; p.likes = Math.max(0, (p.likes || 0) - 1); }
    else { map[key] = true; p.likes = (p.likes || 0) + 1; }
    setLikesMap(map); saveProjects(list);
    renderShowcase(); renderMine(); renderTrending();
  }

  // ---------- detail modal ----------
  function openDetail(id) {
    const p = getProjects().find(x => x.id === id); if (!p) return;
    const user = window.DevstartApp.users.currentUser();
    const modal = document.getElementById("detail-modal");
    document.getElementById("detail-title").textContent = p.title;
    const body = document.getElementById("detail-body");

    body.innerHTML = `
      <div class="row" style="gap:14px;align-items:flex-start;flex-wrap:wrap;">
        <div class="proj-cover lg">${escapeHtml(p.cover || "🧩")}</div>
        <div style="flex:1;min-width:240px;">
          <div class="row" style="gap:6px;flex-wrap:wrap;">
            ${(p.tech || []).map(t => `<span class="pill">${escapeHtml(t)}</span>`).join("")}
          </div>
          <p style="margin-top:10px;color:var(--text);">${escapeHtml(p.description)}</p>
          <div class="small text-muted">Publicado por @${escapeHtml(p.author || "anônimo")} · ${formatAgo(p.createdAt)}</div>
          <div class="row mt-2" style="gap:8px;flex-wrap:wrap;">
            ${p.repo ? `<a class="btn sm" href="${escapeHtml(p.repo)}" target="_blank" rel="noopener">📂 Repositório</a>` : ""}
            ${p.demo ? `<a class="btn sm primary" href="${escapeHtml(p.demo)}" target="_blank" rel="noopener">🌐 Abrir demo</a>` : ""}
            <button class="btn sm" id="dt-like">❤ ${p.likes || 0}</button>
          </div>
        </div>
      </div>

      <hr style="border:none;border-top:1px solid var(--border);margin:18px 0;" />

      <h3 style="margin-top:0;">💬 Comentários (${(p.comments || []).length})</h3>
      <div class="comments" id="dt-comments">
        ${(p.comments || []).length
          ? p.comments.map(c => `
              <div class="comment">
                <div class="row between">
                  <strong>@${escapeHtml(c.author)}</strong>
                  <span class="small text-muted">${formatAgo(c.at)}</span>
                </div>
                <p style="margin:4px 0 0;">${escapeHtml(c.text)}</p>
              </div>`).join("")
          : `<p class="text-muted">Seja a primeira pessoa a comentar neste projeto.</p>`
        }
      </div>

      <form id="dt-comment-form" class="row mt-2" style="gap:8px;">
        <input class="input" id="dt-comment-input" placeholder="${user ? "Escreva um comentário ou uma dúvida…" : "Entre para comentar."}" ${user ? "" : "disabled"} required />
        <button class="btn primary" type="submit" ${user ? "" : "disabled"}>Enviar</button>
      </form>
    `;

    modal.classList.remove("hidden");

    document.getElementById("dt-like").addEventListener("click", () => { toggleLike(id); openDetail(id); });
    const form = document.getElementById("dt-comment-form");
    if (form) form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("dt-comment-input");
      const text = input.value.trim(); if (!text) return;
      const list = getProjects();
      const proj = list.find(x => x.id === id); if (!proj) return;
      proj.comments = proj.comments || [];
      proj.comments.push({ id: "c_" + Date.now(), author: user.username, text, at: Date.now() });
      saveProjects(list);
      toast({ title: "Comentário publicado", type: "success" });
      openDetail(id); renderShowcase();
    });
  }

  // ---------- new project modal ----------
  function openNewProjectModal() {
    const user = window.DevstartApp.users.currentUser();
    if (!user) { toast({ title: "Entre para publicar", message: "Faça login ou crie uma conta para enviar projetos.", type: "info" }); setTimeout(() => window.location.href = "login.html", 800); return; }
    document.getElementById("proj-modal").classList.remove("hidden");
    document.getElementById("p-title").focus();
  }
  function closeNewProjectModal() {
    document.getElementById("proj-modal").classList.add("hidden");
    document.getElementById("proj-form").reset();
    document.getElementById("p-cover").value = "🚀";
  }
  function submitProject(e) {
    e.preventDefault();
    const user = window.DevstartApp.users.currentUser();
    if (!user) return;
    const data = {
      id: "p_" + Date.now(),
      author: user.username,
      title: document.getElementById("p-title").value.trim(),
      description: document.getElementById("p-desc").value.trim(),
      tech: document.getElementById("p-tech").value.split(",").map(t => t.trim()).filter(Boolean),
      cover: (document.getElementById("p-cover").value || "🚀").slice(0, 4),
      repo: document.getElementById("p-repo").value.trim(),
      demo: document.getElementById("p-demo").value.trim(),
      tags: document.getElementById("p-tags").value.split(",").map(t => t.trim()).filter(Boolean),
      likes: 0,
      createdAt: Date.now(),
      comments: [],
    };
    const list = getProjects();
    list.unshift(data);
    saveProjects(list);
    toast({ title: "Projeto publicado! 🎉", message: "Aguarde feedback da comunidade.", type: "success" });
    closeNewProjectModal();
    populateTechFilter();
    renderShowcase();
    renderMine();
  }

  // ---------- chat ----------
  let currentChannel = "geral";
  function renderChatUI() {
    const channelsEl = document.getElementById("chat-channels");
    channelsEl.innerHTML = CHANNELS.map(c => {
      const count = getChat().filter(m => m.channel === c.id).length;
      return `<button class="chat-channel ${c.id === currentChannel ? "active" : ""}" data-ch="${c.id}">
        <span>${c.emoji} ${escapeHtml(c.name)}</span>
        <span class="pill">${count}</span>
      </button>`;
    }).join("");
    channelsEl.querySelectorAll("[data-ch]").forEach(b => b.addEventListener("click", () => {
      currentChannel = b.dataset.ch;
      renderChatUI();
    }));
    const ch = CHANNELS.find(c => c.id === currentChannel) || CHANNELS[0];
    document.getElementById("chat-title").textContent = ch.name;
    document.getElementById("chat-desc").textContent = ch.desc;
    renderChatMessages();
    const form = document.getElementById("chat-form");
    form.onsubmit = (e) => {
      e.preventDefault();
      const user = window.DevstartApp.users.currentUser();
      if (!user) { toast({ title: "Entre para conversar", type: "info" }); return; }
      const input = document.getElementById("chat-input");
      const text = input.value.trim(); if (!text) return;
      const list = getChat();
      list.push({ channel: currentChannel, author: user.username, text, at: Date.now() });
      saveChat(list);
      input.value = "";
      renderChatUI();
    };
    document.getElementById("chat-clear-mine").onclick = () => {
      const user = window.DevstartApp.users.currentUser();
      if (!user) return;
      if (!confirm("Remover todas as SUAS mensagens deste canal?")) return;
      const list = getChat().filter(m => !(m.channel === currentChannel && m.author === user.username));
      saveChat(list);
      toast({ title: "Mensagens removidas", type: "info" });
      renderChatUI();
    };
  }

  function renderChatMessages() {
    const user = window.DevstartApp.users.currentUser();
    const log = document.getElementById("chat-log");
    const msgs = getChat().filter(m => m.channel === currentChannel);
    if (!msgs.length) {
      log.innerHTML = `<div class="text-muted center" style="padding:40px 0;">Nenhuma mensagem ainda. Seja a primeira pessoa a escrever!</div>`;
      return;
    }
    log.innerHTML = msgs.map(m => {
      const mine = user && m.author === user.username;
      const initial = (m.author || "?").charAt(0).toUpperCase();
      return `<div class="chat-msg ${mine ? "mine" : ""}">
        <div class="chat-avatar">${escapeHtml(initial)}</div>
        <div class="chat-bubble">
          <div class="row between">
            <strong>@${escapeHtml(m.author)}${mine ? " (você)" : ""}</strong>
            <span class="small text-muted">${formatAgo(m.at)}</span>
          </div>
          <p style="margin:4px 0 0;white-space:pre-wrap;">${escapeHtml(m.text)}</p>
        </div>
      </div>`;
    }).join("");
    log.scrollTop = log.scrollHeight;
  }

  // ---------- utils ----------
  function truncate(s, n) { if (!s) return ""; return s.length > n ? s.slice(0, n - 1) + "…" : s; }
  function formatAgo(ts) {
    const diff = Date.now() - ts;
    const m = 60000, h = 3600000, d = 86400000;
    if (diff < m) return "agora";
    if (diff < h) return Math.floor(diff / m) + " min atrás";
    if (diff < d) return Math.floor(diff / h) + " h atrás";
    if (diff < d * 7) return Math.floor(diff / d) + " d atrás";
    return new Date(ts).toLocaleDateString("pt-BR");
  }
})();
