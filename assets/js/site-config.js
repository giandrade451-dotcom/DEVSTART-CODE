/* =============================================================
   Devstart UP — Configuração global (categorias, trilhas, etc.)
   Este arquivo NÃO modifica os dados dos cursos; ele apenas
   associa cada curso a uma categoria e define trilhas de carreira.
   ============================================================= */
(function () {
  // Categorias disponíveis para filtragem na página de cursos.
  const CATEGORIES = [
    { id: "all", label: "Todas", emoji: "🎓" },
    { id: "frontend", label: "Frontend", emoji: "🎨" },
    { id: "backend", label: "Backend", emoji: "🛠️" },
    { id: "javascript", label: "JavaScript", emoji: "🟨" },
    { id: "python", label: "Python", emoji: "🐍" },
    { id: "mobile", label: "Mobile", emoji: "📱" },
    { id: "devops", label: "DevOps", emoji: "⚙️" },
    { id: "carreira", label: "Carreira & Soft Skills", emoji: "🚀" },
    { id: "outros", label: "Outros", emoji: "📚" },
  ];

  // Mapeamento explícito curso → categoria.
  // Se o curso não estiver aqui, cairá em "outros".
  const COURSE_CATEGORY = {
    "html-css-basics": "frontend",
    "js-fundamentals": "javascript",
    "programming-logic": "outros",
    "python-basic": "python",
    "advanced-javascript": "javascript",
    "python-developer": "python",
    "fullstack-web": "backend",
    "ui-ux-design": "frontend",
    "git-github-basico": "outros",
    "sql-iniciante": "backend",
    "react-iniciante": "frontend",
    "node-iniciante": "backend",
    "typescript-iniciante": "javascript",
    "devops-iniciante": "devops",
    "seguranca-web-basica": "outros",
    "mobile-rn-iniciante": "mobile",
    "git-github-avancado": "outros",
    "sql-avancado": "backend",
    "react-avancado": "frontend",
    "node-avancado": "backend",
    "typescript-avancado": "javascript",
    "devops-profissional": "devops",
    "seguranca-web-avancada": "outros",
    "mobile-rn-avancado": "mobile",
    // Novos cursos adicionados nesta expansão
    "ingles-para-devs": "carreira",
    "carreira-primeiro-emprego": "carreira",
    "testes-automatizados": "outros",
    "design-patterns": "outros",
    "arquitetura-software-vip": "backend",
    "system-design-vip": "backend",
    "lideranca-tecnica-vip": "carreira",
    "gestao-carreira-vip": "carreira",
  };

  // Trilhas de carreira — listas ordenadas de IDs de cursos.
  const PATHS = [
    {
      id: "frontend",
      title: "Frontend Developer",
      emoji: "🎨",
      tagline: "Do HTML básico até interfaces reativas em produção.",
      description:
        "A trilha completa para quem quer dominar a camada visual da web. " +
        "Você sai do zero do HTML e CSS e chega em React com TypeScript, testes e UI/UX.",
      vip: false,
      courses: [
        "html-css-basics",
        "js-fundamentals",
        "react-iniciante",
        "typescript-iniciante",
        "ui-ux-design",
        "react-avancado",
      ],
    },
    {
      id: "backend",
      title: "Backend Developer",
      emoji: "🛠️",
      tagline: "APIs, bancos de dados e sistemas que aguentam o tranco.",
      description:
        "Aprenda a construir APIs robustas com Node, modelar dados em SQL, " +
        "proteger aplicações e chegar em arquitetura e system design de nível sênior.",
      vip: false,
      courses: [
        "programming-logic",
        "node-iniciante",
        "sql-iniciante",
        "seguranca-web-basica",
        "node-avancado",
        "sql-avancado",
      ],
    },
    {
      id: "fullstack",
      title: "Fullstack Developer",
      emoji: "⚡",
      tagline: "Do front ao back — pronto para entregar produtos inteiros.",
      description:
        "A trilha mais completa: frontend moderno, backend, banco, DevOps e segurança. " +
        "Feita para quem quer trabalhar em qualquer ponta do stack.",
      vip: false,
      courses: [
        "html-css-basics",
        "js-fundamentals",
        "react-iniciante",
        "node-iniciante",
        "sql-iniciante",
        "typescript-iniciante",
        "devops-iniciante",
        "fullstack-web",
      ],
    },
    {
      id: "python",
      title: "Python Developer",
      emoji: "🐍",
      tagline: "Python do básico ao uso profissional em back e automação.",
      description:
        "Saia do zero de Python e chegue a projetos reais: APIs, scripts e automações. " +
        "Inclui lógica de programação para consolidar as bases.",
      vip: false,
      courses: [
        "programming-logic",
        "python-basic",
        "sql-iniciante",
        "python-developer",
      ],
    },
    {
      id: "mobile",
      title: "Mobile Developer",
      emoji: "📱",
      tagline: "Apps para iOS e Android com React Native.",
      description:
        "Reaproveite o que você já sabe de JS/React e entregue apps nativos de verdade, " +
        "com navegação, armazenamento local e integração com APIs.",
      vip: false,
      courses: [
        "js-fundamentals",
        "react-iniciante",
        "mobile-rn-iniciante",
        "mobile-rn-avancado",
      ],
    },
    {
      id: "carreira-vip",
      title: "Carreira & Liderança (VIP)",
      emoji: "🚀",
      tagline: "Trilha exclusiva para evoluir de dev júnior a tech lead.",
      description:
        "Inglês prático, primeiro emprego, arquitetura, system design e liderança. " +
        "Pensada para quem quer destravar salários sênior e vagas de impacto.",
      vip: true,
      courses: [
        "ingles-para-devs",
        "carreira-primeiro-emprego",
        "arquitetura-software-vip",
        "system-design-vip",
        "lideranca-tecnica-vip",
        "gestao-carreira-vip",
      ],
    },
  ];

  // Desafios diários — rotaciona pelo dia do ano.
  const DAILY_CHALLENGES = [
    { emoji: "📝", title: "Aula do dia", text: "Conclua uma aula de qualquer curso hoje.", xp: 60 },
    { emoji: "🧠", title: "Quiz perfeito", text: "Tire 100% em pelo menos um quiz hoje.", xp: 90 },
    { emoji: "🔥", title: "Mantenha a ofensiva", text: "Acesse a plataforma e complete algo hoje para não perder o streak.", xp: 40 },
    { emoji: "👥", title: "Contribua na comunidade", text: "Publique algo no fórum ou um projeto na vitrine.", xp: 70 },
    { emoji: "🚀", title: "Trilha em frente", text: "Avance uma aula em uma trilha de carreira.", xp: 80 },
    { emoji: "🐛", title: "Caçador de bugs", text: "Revise uma aula antiga e refaça o quiz.", xp: 50 },
    { emoji: "💬", title: "Ajude alguém", text: "Responda uma dúvida no chat ou fórum.", xp: 60 },
  ];

  // Utilidades públicas
  function getCategory(courseId) {
    return COURSE_CATEGORY[courseId] || "outros";
  }
  function categoriesList() {
    return CATEGORIES.slice();
  }
  function pathsList() {
    return PATHS.slice();
  }
  function getPath(id) {
    return PATHS.find(p => p.id === id) || null;
  }
  function dailyChallenge() {
    const d = new Date();
    const start = new Date(d.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((d - start) / 86400000);
    return DAILY_CHALLENGES[dayOfYear % DAILY_CHALLENGES.length];
  }

  window.DevstartConfig = {
    CATEGORIES,
    COURSE_CATEGORY,
    PATHS,
    getCategory,
    categoriesList,
    pathsList,
    getPath,
    dailyChallenge,
  };
})();
