/* =============================================================
   Devstart UP — Assistente IA (chat local, simulado)
   Botão flutuante em todas as páginas; respostas baseadas em
   heurísticas locais (sem chamada de API externa).
   ============================================================= */
(function () {
  const KEY = (u) => `devstart.ai.${u || "_guest"}`;

  function history(username) {
    try {
      const raw = localStorage.getItem(KEY(username));
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function save(username, list) {
    try { localStorage.setItem(KEY(username), JSON.stringify(list.slice(-100))); } catch (e) {}
  }

  // Heurísticas pt-BR. Procura palavras-chave e devolve resposta útil.
  const RULES = [
    { re: /(oi|ol[áa]|hey|bom dia|boa tarde|boa noite)/i,
      a: () => "Olá! 👋 Eu sou a Dev, assistente da Devstart UP. Posso te ajudar com explicações de código, sugestões de trilha, dicas de carreira e dúvidas das aulas. Qual é a sua pergunta?" },
    { re: /(quem.*voc[êe]|o que voc[êe] faz|como funciona)/i,
      a: () => "Sou uma assistente local da Devstart — simulada, sem conexão externa. Respondo dúvidas rápidas sobre as aulas, recomendo cursos, explico erros comuns e te guio em trilhas de carreira. Pergunta algo concreto pra gente treinar juntos 💡" },
    { re: /(come[çc]ar|por onde|iniciante|aprender.*programar)/i,
      a: () => "Recomendo começar pela trilha **Frontend** ou pela **Lógica de Programação**. Na aba **Trilhas**, você vê a sequência de cursos e seu progresso. Se tem mais interesse em dados/back, a trilha **Backend Developer** é sólida." },
    { re: /(vip|pro|assinatura|como.*pagar)/i,
      a: () => "O acesso VIP desbloqueia os 16 cursos avançados + as trilhas exclusivas de carreira, certificados VIP e projetos premium. A liberação é manual — contato via Discord da comunidade. Veja a página **VIP** pros detalhes." },
    { re: /(javascript|js|var|const|let|async|promise|fetch|array|map|filter)/i,
      a: () => "Em JavaScript moderno, prefira `const` por padrão e `let` só quando precisar reatribuir. Para assíncrono, use `async/await` com `try/catch`. Dúvida específica? Me descreva o erro exato que você está vendo." },
    { re: /(typescript|ts|tipagem|interface|generic)/i,
      a: () => "TypeScript brilha em projetos grandes: interface vs type, narrowing, generics e `unknown` em vez de `any`. Se você está começando, tipagem de função (args e retorno) já resolve 80% dos bugs." },
    { re: /(react|component|hook|usestate|useeffect|jsx)/i,
      a: () => "Em React, pense em componente como função: entra props, sai JSX. Hooks só no topo da função, nunca dentro de if/loop. `useEffect` com dependências certas — array vazio só roda 1x, sem array roda toda render." },
    { re: /(python|py|fastapi|django|flask|pandas)/i,
      a: () => "Em Python, pratique list comprehensions, dicionários e funções puras antes de frameworks. Para APIs, FastAPI é moderno e rápido. Pandas pra dados. Precisa de um trecho exemplo? Me pede." },
    { re: /(node|express|api|rest)/i,
      a: () => "Para uma API Node, comece com Express, validação (zod/joi), autenticação JWT e banco via Prisma ou pg. Testes com Vitest/Jest e deploy com Docker/Fly/Render." },
    { re: /(sql|banco|database|query|join)/i,
      a: () => "Em SQL: SELECT o que você precisa, WHERE antes do GROUP BY, entenda o plano de execução para queries pesadas. INNER JOIN pega só o que casa; LEFT JOIN traz todos da esquerda. Indexe colunas usadas em WHERE/JOIN." },
    { re: /(git|commit|pull request|branch)/i,
      a: () => "Git: 1 branch por feature, commits pequenos e descritivos (imperativo: \"adiciona\", \"corrige\"), PRs curtos e revisáveis. Rebase para limpar histórico, merge para preservar. Nunca `--force` em main compartilhada." },
    { re: /(erro|bug|n[ãa]o funciona|quebr[oa]u|falha)/i,
      a: () => "Pra te ajudar com bug: me diga **1) o que você esperava**, **2) o que aconteceu** e **3) a mensagem de erro exata**. Em JS, abra o DevTools (F12) → Console e cole a mensagem aqui." },
    { re: /(carreira|emprego|entrevista|curr[íi]culo|linkedin)/i,
      a: () => "Para destravar o primeiro emprego: portfólio com 3 projetos (login, dashboard, API), LinkedIn detalhado, GitHub com READMEs, e prática diária em problemas de lógica. O curso **Carreira & Primeiro Emprego** tem um roteiro." },
    { re: /(certificado|diploma)/i,
      a: () => "Certificados são gerados automaticamente ao concluir 100% de um curso, com código de verificação único. Vê em **Perfil → Meus certificados**." },
    { re: /(trilha|path|roadmap)/i,
      a: () => "Entre na aba **Trilhas** no painel. Escolha uma (Frontend, Backend, Fullstack, Python, Mobile ou Carreira VIP) e siga a sequência — o sistema acompanha seu progresso nela." },
  ];

  // Regras extras habilitadas no tier Pro (usuários VIP).
  const PRO_RULES = [
    { re: /(explique|explica|explicar).*c[óo]digo/i,
      a: () => "Modo **Explicar código** (Pro): cola o trecho entre crases triplas. Vou descrever: 1) o que cada linha faz, 2) efeitos colaterais, 3) pontos de atenção de performance/legibilidade e 4) uma versão refatorada sugerida." },
    { re: /(revis[ãa]o|revis[ae])/i,
      a: () => "Modo **Revisão de código** (Pro): mando checklist — nomeação, responsabilidade única, tratamento de erros, testes, segurança e performance. Cola o código que eu passo por cada item." },
    { re: /(roteiro|plano).*(estudos|estudo|carreira)/i,
      a: () => "Plano de estudos sob medida (Pro): me diga 1) seu objetivo (ex: dev frontend), 2) horas por semana e 3) nível atual. Vou sugerir 4 semanas de cursos + projetos da Devstart UP, com marcos semanais." },
  ];

  function getTier() {
    const user = window.DevstartApp?.users.currentUser();
    if (!user) return { id: "free", label: "v1 · Grátis" };
    if (user.vip) return { id: "pro", label: "v2 · Pro", user };
    return { id: "free", label: "v1 · Grátis", user };
  }

  function reply(text) {
    const t = (text || "").trim();
    if (!t) return "Me conta qual é a dúvida 😉";
    const tier = getTier();
    if (tier.id === "pro") {
      for (const r of PRO_RULES) if (r.re.test(t)) return r.a();
    }
    for (const r of RULES) if (r.re.test(t)) return r.a();
    if (tier.id === "free" && /(explique|explica|revis[ae]|roteiro.*estudos)/i.test(t)) {
      return "Esse recurso é do tier **Pro (v2)** — disponível para membros VIP. Explicação de código, revisão e plano de estudos personalizado ficam liberados junto com os cursos VIP. Veja a página **VIP** para os detalhes.";
    }
    return "Entendi. Não sei te responder isso diretamente (sou uma IA local simulada), mas posso te guiar: em que curso ou trecho de código você está? Cola aqui o erro, a linha do código ou o objetivo que me foco em algo útil.";
  }

  function open() {
    if (document.getElementById("ai-panel")) {
      document.getElementById("ai-panel").classList.add("open");
      return;
    }
    const user = window.DevstartApp?.users.currentUser();
    const uname = user?.username;
    const list = uname ? history(uname) : [];
    if (list.length === 0) {
      list.push({ role: "ai", text: "Oi! Eu sou a **Dev**, sua assistente da Devstart UP. 🤖\n\nPosso te ajudar com código, trilhas, dúvidas das aulas e dicas de carreira. Comece perguntando algo!" });
      if (uname) save(uname, list);
    }
    const panel = document.createElement("div");
    panel.id = "ai-panel";
    panel.className = "ai-panel open";
    panel.innerHTML = `
      <div class="ai-head">
        <div class="row" style="gap:10px;align-items:center;">
          <div class="ai-avatar">🤖</div>
          <div>
            <div class="ai-name">Dev — Assistente IA <span class="badge ${getTier().id === "pro" ? "vip" : ""}" style="margin-left:6px;font-size:.7rem;">${getTier().label}</span></div>
            <div class="ai-role">Local • simulado • pt-BR${getTier().id === "free" ? " — <a href='" + (window.location.pathname.includes("/pages/") ? "" : "pages/") + "vip.html' style='color:inherit;text-decoration:underline;'>upgrade para Pro</a>" : ""}</div>
          </div>
        </div>
        <button class="icon-btn" id="ai-close" aria-label="Fechar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
        </button>
      </div>
      <div class="ai-messages" id="ai-messages"></div>
      <form class="ai-input" id="ai-form" autocomplete="off">
        <input class="input" id="ai-text" placeholder="Pergunte algo sobre código, trilhas, carreira…" />
        <button class="btn primary sm" type="submit">Enviar</button>
      </form>
    `;
    document.body.appendChild(panel);

    const msgs = panel.querySelector("#ai-messages");
    function renderMsgs() {
      const src = uname ? history(uname) : list;
      msgs.innerHTML = src.map(m =>
        `<div class="ai-msg ${m.role}"><div class="ai-bubble">${formatBody(m.text)}</div></div>`
      ).join("");
      msgs.scrollTop = msgs.scrollHeight;
    }
    function formatBody(t) {
      return String(t)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\n/g, "<br>");
    }
    renderMsgs();

    panel.querySelector("#ai-close").addEventListener("click", () => panel.classList.remove("open"));
    panel.querySelector("#ai-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = panel.querySelector("#ai-text");
      const txt = (input.value || "").trim();
      if (!txt) return;
      input.value = "";
      const entry = { role: "user", text: txt, at: Date.now() };
      if (uname) {
        const h = history(uname); h.push(entry); save(uname, h);
      } else list.push(entry);
      renderMsgs();
      // Simula "digitando…"
      const typing = { role: "ai", text: "…", at: Date.now() };
      if (uname) { const h = history(uname); h.push(typing); save(uname, h); } else list.push(typing);
      renderMsgs();
      setTimeout(() => {
        const resp = reply(txt);
        if (uname) {
          const h = history(uname); h[h.length - 1] = { role: "ai", text: resp, at: Date.now() }; save(uname, h);
        } else {
          list[list.length - 1] = { role: "ai", text: resp, at: Date.now() };
        }
        renderMsgs();
      }, 420);
    });
  }

  function mountFAB() {
    if (document.getElementById("ai-fab")) return;
    const fab = document.createElement("button");
    fab.id = "ai-fab";
    fab.className = "ai-fab";
    fab.title = "Fale com a assistente IA";
    fab.setAttribute("aria-label", "Assistente IA");
    fab.innerHTML = `<span>🤖</span><span class="ai-fab-label">IA</span>`;
    fab.addEventListener("click", open);
    document.body.appendChild(fab);
  }

  document.addEventListener("DOMContentLoaded", mountFAB);

  window.DevstartAI = { open, reply };
})();
