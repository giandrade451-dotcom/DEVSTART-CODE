/* =============================================================
   Devstart UP — Alternador de tema (claro / escuro)
   Escrito como módulo independente; define data-theme no <html>.
   ============================================================= */
(function () {
  const KEY = "devstart.theme";
  function getPreferred() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    // Tema padrão do produto é escuro.
    return "dark";
  }
  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    window.dispatchEvent(new CustomEvent("devstart:theme", { detail: { theme } }));
  }
  function toggle() {
    const curr = document.documentElement.getAttribute("data-theme") || getPreferred();
    apply(curr === "dark" ? "light" : "dark");
  }
  // Apply ASAP to avoid flash
  apply(getPreferred());
  window.DevstartTheme = { apply, toggle, get: () => document.documentElement.getAttribute("data-theme") || "dark" };
})();
