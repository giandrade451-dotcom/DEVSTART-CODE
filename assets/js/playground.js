/* Devstart UP — Playground interativo (HTML/CSS/JS) */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const App = window.DevstartApp;
    const user = App.users.currentUser();
    const scope = user ? user.username : "_guest";
    const KEY_LIST = `devstart.playground.${scope}.list`;
    const KEY_ACTIVE = `devstart.playground.${scope}.active`;

    const DEFAULT_SNIPPET = {
      name: "Primeiro snippet",
      html: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Olá, Devstart UP! 🚀</h1>\n  <p id="msg">Edite à esquerda e clique em Executar.</p>\n  <button id="go">Clique aqui</button>\n</body>\n</html>`,
      css: `body { font-family: sans-serif; padding: 24px; background: #0f0f1c; color: #fff; }\nbutton { padding: 10px 16px; border: 0; border-radius: 8px; background: #7c5cff; color: #fff; cursor: pointer; }\nbutton:hover { opacity: .9; }`,
      js: `document.getElementById("go").addEventListener("click", () => {\n  document.getElementById("msg").textContent = "Funcionou! ✨ " + new Date().toLocaleTimeString();\n});`,
    };

    const ed = {
      html: document.getElementById("editor-html"),
      css: document.getElementById("editor-css"),
      js: document.getElementById("editor-js"),
    };
    const select = document.getElementById("snippet-select");
    const preview = document.getElementById("preview");
    const statusEl = document.getElementById("autosave-status");

    let list = loadList();
    let active = loadActive();
    if (!active || !list[active]) {
      active = "snippet-1";
      list = { [active]: { ...DEFAULT_SNIPPET } };
      saveList(list);
      saveActive(active);
    }

    function loadList() {
      try { return JSON.parse(localStorage.getItem(KEY_LIST)) || {}; } catch { return {}; }
    }
    function saveList(v) { localStorage.setItem(KEY_LIST, JSON.stringify(v)); }
    function loadActive() { return localStorage.getItem(KEY_ACTIVE) || null; }
    function saveActive(id) { localStorage.setItem(KEY_ACTIVE, id); }

    function refreshSelect() {
      select.innerHTML = Object.keys(list).map(id =>
        `<option value="${id}" ${id === active ? "selected" : ""}>${escapeHtml(list[id].name || id)}</option>`
      ).join("");
    }

    function loadIntoEditors(id) {
      const s = list[id] || DEFAULT_SNIPPET;
      ed.html.value = s.html || "";
      ed.css.value = s.css || "";
      ed.js.value = s.js || "";
      run();
    }

    function currentSnippet() {
      return {
        name: list[active]?.name || "Sem nome",
        html: ed.html.value,
        css: ed.css.value,
        js: ed.js.value,
      };
    }

    function autosave() {
      list[active] = currentSnippet();
      saveList(list);
      statusEl.textContent = "Salvo automaticamente · " + new Date().toLocaleTimeString();
    }

    function run() {
      const { html, css, js } = currentSnippet();
      const doc = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${extractBody(html)}<script>${wrapJs(js)}<\/script></body></html>`;
      preview.srcdoc = doc;
    }

    function extractBody(html) {
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) return bodyMatch[1];
      if (/<html[\s>]/i.test(html)) return html.replace(/<!DOCTYPE[^>]*>/i, "").replace(/<\/?html[^>]*>/gi, "").replace(/<head[\s\S]*?<\/head>/i, "");
      return html;
    }
    function wrapJs(js) {
      return `try { ${js} } catch (e) { document.body.insertAdjacentHTML("beforeend", "<pre style='background:#fee;color:#900;padding:8px;border-radius:6px;white-space:pre-wrap;'>" + (e && e.stack || e) + "</pre>"); }`;
    }

    function escapeHtml(s) {
      return (s || "").toString().replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
      }[c]));
    }

    // Tabs
    document.querySelectorAll(".playground-pane .tabs button[data-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".playground-pane .tabs button[data-tab]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        ["html", "css", "js"].forEach(k => ed[k].classList.add("hidden"));
        ed[btn.dataset.tab].classList.remove("hidden");
      });
    });

    // Autosave
    ["html", "css", "js"].forEach(k => {
      ed[k].addEventListener("input", debounce(() => autosave(), 600));
    });

    // Run
    document.getElementById("run-btn").addEventListener("click", run);
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); run(); }
    });

    // Save (explicit)
    document.getElementById("save-snippet").addEventListener("click", () => {
      const name = prompt("Nome do snippet:", list[active]?.name || "Meu snippet");
      if (!name) return;
      list[active] = { ...currentSnippet(), name };
      saveList(list);
      refreshSelect();
      App.toast({ title: "Snippet salvo!", type: "success" });
    });

    // New
    document.getElementById("new-snippet").addEventListener("click", () => {
      const id = "snippet-" + Date.now();
      list[id] = { name: "Novo snippet", html: "<h1>Olá!</h1>", css: "body{font-family:sans-serif;padding:24px;}", js: "// seu código aqui" };
      active = id;
      saveList(list); saveActive(active);
      refreshSelect(); loadIntoEditors(active);
    });

    // Delete
    document.getElementById("delete-snippet").addEventListener("click", () => {
      if (Object.keys(list).length <= 1) {
        App.toast({ title: "Mantenha pelo menos um snippet.", type: "info" }); return;
      }
      if (!confirm("Excluir este snippet?")) return;
      delete list[active];
      active = Object.keys(list)[0];
      saveList(list); saveActive(active);
      refreshSelect(); loadIntoEditors(active);
    });

    // Open in new tab
    document.getElementById("open-window").addEventListener("click", () => {
      const doc = preview.srcdoc;
      const w = window.open("", "_blank");
      if (w) { w.document.open(); w.document.write(doc); w.document.close(); }
    });

    // Select change
    select.addEventListener("change", () => {
      active = select.value;
      saveActive(active);
      loadIntoEditors(active);
    });

    // Clean
    document.getElementById("format-btn").addEventListener("click", () => {
      ed.html.value = ed.html.value.replace(/\t/g, "  ").replace(/[ \t]+\n/g, "\n");
      ed.css.value = ed.css.value.replace(/\t/g, "  ").replace(/[ \t]+\n/g, "\n");
      ed.js.value = ed.js.value.replace(/\t/g, "  ").replace(/[ \t]+\n/g, "\n");
      autosave();
    });

    refreshSelect();
    loadIntoEditors(active);

    function debounce(fn, ms) {
      let t;
      return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
    }
  });
})();
