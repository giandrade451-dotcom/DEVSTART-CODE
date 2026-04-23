/* =============================================================
   Devstart UP — Notificações persistentes por usuário
   Guarda em localStorage e alimenta o sininho do header.
   ============================================================= */
(function () {
  const KEY = (u) => `devstart.notifications.${u || "_guest"}`;

  function all(username) {
    try {
      const raw = localStorage.getItem(KEY(username));
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function save(username, list) {
    try { localStorage.setItem(KEY(username), JSON.stringify(list.slice(0, 80))); } catch (e) {}
  }

  function push(username, { title, body, type = "info", href = null, emoji = "🔔" }) {
    if (!username) return null;
    const list = all(username);
    const n = { id: "n-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6), title, body, type, href, emoji, read: false, at: Date.now() };
    list.unshift(n);
    save(username, list);
    window.dispatchEvent(new CustomEvent("devstart:notify", { detail: { username, n } }));
    return n;
  }
  function unreadCount(username) { return all(username).filter(x => !x.read).length; }
  function markAllRead(username) {
    const list = all(username).map(n => ({ ...n, read: true }));
    save(username, list);
    window.dispatchEvent(new CustomEvent("devstart:notify", { detail: { username } }));
  }
  function remove(username, id) {
    save(username, all(username).filter(n => n.id !== id));
    window.dispatchEvent(new CustomEvent("devstart:notify", { detail: { username } }));
  }
  function clear(username) {
    save(username, []);
    window.dispatchEvent(new CustomEvent("devstart:notify", { detail: { username } }));
  }

  // Seed de notificações novinhas para novos usuários
  function seedIfEmpty(username) {
    if (!username) return;
    if (all(username).length) return;
    const base = [
      { emoji: "👋", title: "Bem-vindo à Devstart UP", body: "Explore o catálogo com 32 cursos em pt-BR e escolha sua trilha." },
      { emoji: "🔥", title: "Desafio diário liberado", body: "Conclua o desafio do dia e ganhe XP extra no seu painel." },
      { emoji: "🚀", title: "Vitrine de projetos aberta", body: "Publique seu primeiro projeto e peça feedback da comunidade." },
    ];
    base.forEach(b => push(username, b));
  }

  window.DevstartNotify = { all, push, unreadCount, markAllRead, remove, clear, seedIfEmpty };
})();
