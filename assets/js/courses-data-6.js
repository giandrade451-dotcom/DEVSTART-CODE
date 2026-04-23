/* courses-data-6.js — 4 novos cursos VIP gerados programaticamente (pt-BR) */
(function () {
  const NEW_VIP = [
  {
    "id": "arquitetura-software-vip",
    "title": "Arquitetura de Software (VIP)",
    "subtitle": "Monolítico, microsserviços, DDD e hexagonal aplicados a produtos reais",
    "description": "Aprenda a decidir arquitetura baseado em contexto: tamanho do time, domínio, complexidade, mudanças esperadas. Caso-estudos reais.",
    "tagline": "Pare de copiar arquitetura — aprenda a escolher a sua.",
    "vip": true,
    "instructor": "Equipe Devstart VIP",
    "level": "Avançado",
    "duration": "6h",
    "emoji": "🏛️",
    "lessons": [
      {
        "id": "l1",
        "title": "O que é arquitetura de software",
        "summary": "Além de diagrama — são decisões custosas.",
        "content": "<h2>Introdução</h2>\n    <p>Arquitetura de software é o conjunto de decisões caras de mudar depois.</p>\n    <p>Organização do código, divisão de módulos, integrações e governança são decisões arquiteturais.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Alta coesão + baixo acoplamento.</li><li>Trade-offs explícitos.</li><li>Times pequenos não precisam de 50 microsserviços.</li><li>Custos > hype.</li></ul>\n    <p>Boas arquiteturas se adaptam; ótimas evitam decisões irreversíveis cedo demais.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: copiar arquitetura de big tech em time de 3 pessoas.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Arquitetura é sobre trade-offs — não sobre escolha óbvia.</div>",
        "quiz": [
          {
            "prompt": "Arquitetura trata de…",
            "options": [
              "Decisões caras de mudar",
              "Cores",
              "Deploy",
              "Syntax"
            ],
            "correct": 0,
            "explain": "Decisões que moldam estrutura."
          },
          {
            "prompt": "Quando NÃO imitar big tech?",
            "options": [
              "Time pequeno, produto jovem",
              "Sempre",
              "Nunca",
              "Só em JS"
            ],
            "correct": 0,
            "explain": "Contexto diferente."
          },
          {
            "prompt": "Objetivo: minimizar…",
            "options": [
              "Coesão",
              "Acoplamento",
              "Funções",
              "Todos"
            ],
            "correct": 1,
            "explain": "Baixo acoplamento facilita mudanças."
          }
        ]
      },
      {
        "id": "l2",
        "title": "Monolítico vs Microsserviços",
        "summary": "O pêndulo volta para monolito em 2025.",
        "content": "<h2>Introdução</h2>\n    <p>Monolito bem escrito serve 95% dos projetos em fase de crescimento.</p>\n    <p>Microsserviços resolvem problemas de escala organizacional e operacional, não técnica.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Microsserviço não é 'dev individual'.</li><li>Transações distribuídas são caras.</li><li>Observabilidade precisa de investimento.</li><li>Monolito com testes fortes é elegante.</li></ul>\n    <p>Armadilha de microsserviços: complexidade explode em rede, observabilidade, consistência.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Monolito modular (modulith) é o meio-termo moderno: 1 deploy, limites claros.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Escolha a arquitetura mais simples que resolve o problema atual.</div>",
        "quiz": [
          {
            "prompt": "Quando adotar microsserviços?",
            "options": [
              "Time pequeno",
              "Grande time com domínios distintos",
              "Sempre",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Problemas organizacionais."
          },
          {
            "prompt": "Modulith é…",
            "options": [
              "Monolito modular",
              "Microsserviço",
              "Lib CSS",
              "Frontend"
            ],
            "correct": 0,
            "explain": "Meio-termo popular."
          },
          {
            "prompt": "Custo principal dos microsserviços?",
            "options": [
              "Nenhum",
              "Complexidade operacional e de consistência",
              "Performance",
              "UI"
            ],
            "correct": 1,
            "explain": "Observabilidade + latência."
          }
        ]
      },
      {
        "id": "l3",
        "title": "DDD — Domain-Driven Design",
        "summary": "Modele primeiro o domínio, não a tabela.",
        "content": "<h2>Introdução</h2>\n    <p>DDD coloca o domínio de negócio no centro do design — linguagem ubíqua e contextos delimitados.</p>\n    <p>Bounded contexts separam modelos que são a 'mesma coisa' em contextos diferentes (cliente no vendas ≠ cliente no suporte).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Linguagem ubíqua = vocabulário comum.</li><li>Aggregate root protege invariantes.</li><li>Context map mostra relações entre contextos.</li><li>Event storming descobre domínio.</li></ul>\n    <p>Tático vs estratégico: entidades/agregados/servicos (tático) e contextos/relações (estratégico).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: 'CRUDificar' tudo. DDD brilha em domínio complexo; em CRUD simples vira over-engineering.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> DDD bem feito facilita conversas entre negócio e tecnologia.</div>",
        "quiz": [
          {
            "prompt": "Bounded context…",
            "options": [
              "Limita modelo a um contexto",
              "Não existe",
              "É linguagem",
              "É banco"
            ],
            "correct": 0,
            "explain": "Cada contexto tem semântica própria."
          },
          {
            "prompt": "DDD é bom para…",
            "options": [
              "CRUD simples",
              "Domínios complexos",
              "Somente APIs REST",
              "Deploy"
            ],
            "correct": 1,
            "explain": "Complexidade vira clareza."
          },
          {
            "prompt": "Aggregate root protege…",
            "options": [
              "Pasta",
              "Invariantes",
              "Rotas",
              "JSON"
            ],
            "correct": 1,
            "explain": "Consistência interna."
          }
        ]
      },
      {
        "id": "l4",
        "title": "Hexagonal / Ports & Adapters",
        "summary": "Isola regra de negócio do mundo externo.",
        "content": "<h2>Introdução</h2>\n    <p>Arquitetura hexagonal divide app em 'dentro' (regra) e 'fora' (banco, HTTP, filas). Dentro não conhece fora.</p>\n    <p>Comunicação via 'ports' (interfaces) e 'adapters' (implementações concretas).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Dependency rule: setas apontam pra dentro.</li><li>Teste de unidade sem mock massivo.</li><li>Swap de driver sem tremor.</li><li>Combina bem com DDD.</li></ul>\n    <p>Facilita testes: você troca banco real por fake sem tocar na regra.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Torna ambiente agnóstico — mesmo domínio em CLI, HTTP, worker.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Excelente em sistemas que têm vida longa.</div>",
        "quiz": [
          {
            "prompt": "Ports & adapters protege…",
            "options": [
              "Banco",
              "Regra de negócio",
              "Netflix",
              "CSS"
            ],
            "correct": 1,
            "explain": "Core fica isolado."
          },
          {
            "prompt": "Direção das dependências…",
            "options": [
              "De fora pra dentro",
              "De dentro pra fora",
              "Circular",
              "Random"
            ],
            "correct": 0,
            "explain": "Core não depende de infra."
          },
          {
            "prompt": "Benefício em testes?",
            "options": [
              "Troca driver por fake",
              "Banco obrigatório",
              "UI obrigatória",
              "Nada"
            ],
            "correct": 0,
            "explain": "Rápido e isolado."
          }
        ]
      },
      {
        "id": "l5",
        "title": "Clean Architecture",
        "summary": "Dependências apontam para o domínio.",
        "content": "<h2>Introdução</h2>\n    <p>Clean Architecture (Uncle Bob) evolui hexagonal com camadas claras: entidades → casos de uso → adaptadores → frameworks.</p>\n    <p>Regra fundamental: toda dependência aponta para o domínio.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Entities > use-cases > adapters > frameworks.</li><li>Dependency inversion everywhere.</li><li>Muda framework sem tocar domínio.</li><li>Curva de aprendizado alta.</li></ul>\n    <p>Útil em sistemas grandes com múltiplas interfaces (web, mobile, CLI, CLI).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: aplicar em projeto pequeno leva over-engineering absurdo.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Pesa mais: cerimônia vs agilidade. Escolha consciente.</div>",
        "quiz": [
          {
            "prompt": "Clean arch faz dependências apontarem para…",
            "options": [
              "Frameworks",
              "Domínio",
              "Banco",
              "Rede"
            ],
            "correct": 1,
            "explain": "Inverte controle."
          },
          {
            "prompt": "Quando evitar?",
            "options": [
              "Projeto grande complexo",
              "Projeto pequeno simples",
              "Nunca",
              "Sempre"
            ],
            "correct": 1,
            "explain": "Peso demais para pouco ganho."
          },
          {
            "prompt": "Camada mais interna?",
            "options": [
              "Entidades",
              "Casos de uso",
              "Adapters",
              "Frameworks"
            ],
            "correct": 0,
            "explain": "Regras universais."
          }
        ]
      },
      {
        "id": "l6",
        "title": "Event-Driven Architecture",
        "summary": "Eventos como fonte de verdade.",
        "content": "<h2>Introdução</h2>\n    <p>EDA usa eventos como meio principal de comunicação entre serviços ou módulos.</p>\n    <p>Event sourcing grava eventos de domínio; o estado é consequência deles.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Event > state snapshot.</li><li>Saga coordena transações distribuídas.</li><li>Dead letter queue é indispensável.</li><li>Observabilidade vira prioridade.</li></ul>\n    <p>CQRS separa comandos de consultas; bom para leitura e escrita muito diferentes.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Trade-offs: eventuais, rastreamento complexo, mas excelente escala horizontal.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Ferramentas: Kafka, RabbitMQ, SQS + patterns maduros.</div>",
        "quiz": [
          {
            "prompt": "Event sourcing grava…",
            "options": [
              "Estado atual",
              "Sequência de eventos",
              "Schema",
              "UI"
            ],
            "correct": 1,
            "explain": "Estado deriva dos eventos."
          },
          {
            "prompt": "CQRS separa…",
            "options": [
              "Cliente/servidor",
              "Leitura/escrita",
              "Deploy/Dev",
              "Testes"
            ],
            "correct": 1,
            "explain": "Modelos independentes."
          },
          {
            "prompt": "Para EDA precisa de…",
            "options": [
              "Nada",
              "Observabilidade forte",
              "Só CSS",
              "Só Node"
            ],
            "correct": 1,
            "explain": "Rastrear fluxos."
          }
        ]
      },
      {
        "id": "l7",
        "title": "Data Modeling — SQL vs NoSQL",
        "summary": "A escolha não é quesito religioso.",
        "content": "<h2>Introdução</h2>\n    <p>SQL: consistência forte, consultas flexíveis, JOINs, transações ACID. Padrão seguro.</p>\n    <p>NoSQL (document, key-value, wide-column, graph): escala horizontal e estruturas específicas.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Postgres resolve 80% dos cenários.</li><li>Redis ajuda com cache/queues.</li><li>Mongo cobre dados semi-estruturados.</li><li>Graph DB para relacionamentos densos.</li></ul>\n    <p>Regra de ouro: comece com SQL, pule para NoSQL por necessidade específica.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Polyglot persistence: usar DB certo para cada caso de uso (ex: Postgres + Redis).</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Escolha por forma de consulta, não por hype.</div>",
        "quiz": [
          {
            "prompt": "Ponto forte do SQL?",
            "options": [
              "Menos segurança",
              "Consistência, JOINs, ACID",
              "Preço",
              "Cor"
            ],
            "correct": 1,
            "explain": "Transações fortes."
          },
          {
            "prompt": "NoSQL é melhor quando…",
            "options": [
              "Forma de consulta pede",
              "Moda",
              "Ordem alfabética",
              "Cliente pediu"
            ],
            "correct": 0,
            "explain": "Padrão de acesso dita."
          },
          {
            "prompt": "Polyglot persistence…",
            "options": [
              "Uma DB só",
              "Mix de DBs por caso",
              "Só Redis",
              "Só Mongo"
            ],
            "correct": 1,
            "explain": "Ferramentas certas."
          }
        ]
      },
      {
        "id": "l8",
        "title": "Caching e consistência",
        "summary": "Cache certo salva CPU e dinheiro.",
        "content": "<h2>Introdução</h2>\n    <p>Cache bem colocado reduz custo e latência drasticamente. Mal colocado gera bugs de consistência.</p>\n    <p>Estratégias: cache-aside (app decide), read-through (cache busca), write-through/back (escritas via cache).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Redis é padrão de cache de memória.</li><li>CDN resolve latência geográfica.</li><li>HTTP caching com ETag e Cache-Control.</li><li>Invalidar é mais difícil que guardar.</li></ul>\n    <p>TTL + invalidação por eventos evita stale data. Sem estratégia, cache vira dívida.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Cuidado com cache stampede (invalidou tudo ao mesmo tempo) — use jitter.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Cache é parte essencial da arquitetura, não 'feito depois'.</div>",
        "quiz": [
          {
            "prompt": "Estratégia 'app decide buscar e cachear' é…",
            "options": [
              "Cache-aside",
              "Write-through",
              "TCP",
              "UDP"
            ],
            "correct": 0,
            "explain": "App coordena."
          },
          {
            "prompt": "Cache stampede acontece quando…",
            "options": [
              "Muito invalida ao mesmo tempo",
              "Só no cliente",
              "Nunca",
              "Só em ERP"
            ],
            "correct": 0,
            "explain": "Pico simultâneo."
          },
          {
            "prompt": "TTL serve para…",
            "options": [
              "Evitar stale data",
              "Ganhar likes",
              "Backup",
              "UI"
            ],
            "correct": 0,
            "explain": "Expira dados."
          }
        ]
      },
      {
        "id": "l9",
        "title": "Observabilidade — logs, métricas e traces",
        "summary": "Sem observabilidade = pilotando às cegas.",
        "content": "<h2>Introdução</h2>\n    <p>Três pilares: logs estruturados (JSON), métricas (contadores/histogramas) e traces distribuídos.</p>\n    <p>Logs: estruturados permitem pesquisa eficiente. Grafana + Loki ou ELK cobrem a maioria dos casos.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Correlation IDs atravessam serviços.</li><li>SLIs/SLOs guiam alertas.</li><li>Observabilidade ≠ monitoramento.</li><li>ELK, Grafana, OpenTelemetry, Datadog.</li></ul>\n    <p>Métricas: Prometheus + Grafana. Latência p95, p99, error rate, saturação.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Traces: OpenTelemetry. Essencial em microsserviços.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Alertas precisam ser acionáveis — se ninguém agir, é ruído.</div>",
        "quiz": [
          {
            "prompt": "Os três pilares são…",
            "options": [
              "Logs, métricas, traces",
              "DNS, SSL, TLS",
              "CI, CD, TDD",
              "Front, back, infra"
            ],
            "correct": 0,
            "explain": "Base de observabilidade."
          },
          {
            "prompt": "Correlation ID serve para…",
            "options": [
              "Identificar request atravessando serviços",
              "Cobrar cliente",
              "Nenhuma",
              "SEO"
            ],
            "correct": 0,
            "explain": "Segue o fio da requisição."
          },
          {
            "prompt": "Alerta ideal é…",
            "options": [
              "Ruidoso",
              "Acionável e específico",
              "Sem sentido",
              "Meme"
            ],
            "correct": 1,
            "explain": "Só acione quem vai agir."
          }
        ]
      },
      {
        "id": "l10",
        "title": "Deploy e infraestrutura",
        "summary": "Contêineres, orquestração e IaC.",
        "content": "<h2>Introdução</h2>\n    <p>Docker isola e torna reproduzível. Kubernetes orquestra em escala, mas não é brinquedo para time pequeno.</p>\n    <p>IaC (Terraform, Pulumi) descreve infraestrutura em código — versionada, reviewável.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Cloud provider é commodity hoje.</li><li>Backup e DR obrigatórios.</li><li>Zero-downtime precisa health check real.</li><li>Secret management desde o dia 1.</li></ul>\n    <p>Blue/green e canary reduzem risco de deploy.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Plataformas como Fly.io, Render, Railway removem complexidade de Kubernetes para a maior parte dos produtos.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Escolha quantidade certa de abstração — e revisite com o crescimento.</div>",
        "quiz": [
          {
            "prompt": "Kubernetes é bom para…",
            "options": [
              "Todo projeto",
              "Times com operação dedicada",
              "Sites estáticos",
              "Excel"
            ],
            "correct": 1,
            "explain": "Escala organizacional."
          },
          {
            "prompt": "IaC significa…",
            "options": [
              "Infra as Code",
              "Infra as Cost",
              "Instantaneous",
              "Infra after Cloud"
            ],
            "correct": 0,
            "explain": "Infraestrutura versionada."
          },
          {
            "prompt": "Canary deploy reduz…",
            "options": [
              "Custo",
              "Risco gradualmente",
              "Segurança",
              "UI"
            ],
            "correct": 1,
            "explain": "Libera a um % primeiro."
          }
        ]
      },
      {
        "id": "l11",
        "title": "Segurança em arquitetura",
        "summary": "Segurança não é camada — é atravessada.",
        "content": "<h2>Introdução</h2>\n    <p>Princípios: menor privilégio, defesa em profundidade, zero trust, criptografia em trânsito e repouso.</p>\n    <p>Segredos nunca em código — use gerenciadores (Vault, AWS SM, Doppler).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>JWT com expiração curta.</li><li>Rate limiting no edge.</li><li>Dependabot/Snyk em deps.</li><li>Rotate secrets periodicamente.</li></ul>\n    <p>Auditoria + trilha de eventos de segurança é obrigatória em sistemas sérios.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Injection, autenticação/autorização e exposição de dados compõem o OWASP top-10.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Pense segurança desde o design, não como patch.</div>",
        "quiz": [
          {
            "prompt": "Defesa em profundidade significa…",
            "options": [
              "Uma camada forte",
              "Várias camadas complementares",
              "Tamanho do servidor",
              "Nada"
            ],
            "correct": 1,
            "explain": "Várias barreiras."
          },
          {
            "prompt": "Segredos devem ficar em…",
            "options": [
              "Código",
              "Gerenciadores dedicados",
              "E-mail",
              "Slack público"
            ],
            "correct": 1,
            "explain": "Nunca em repositório."
          },
          {
            "prompt": "Zero trust…",
            "options": [
              "Ninguém confia em ninguém sem verificar",
              "Só usuários",
              "Só deploy",
              "Só cloud"
            ],
            "correct": 0,
            "explain": "Cada request é validado."
          }
        ]
      },
      {
        "id": "l12",
        "title": "Tomando decisões arquiteturais — ADRs",
        "summary": "Documente o porquê.",
        "content": "<h2>Introdução</h2>\n    <p>ADR (Architecture Decision Record) registra decisão, contexto, alternativas e consequências.</p>\n    <p>Pequeno, ~1 página. Guardado no repo junto ao código. Serve como memória institucional.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>1 ADR por decisão relevante.</li><li>Numere e dê título imperativo.</li><li>Mostre alternativas e consequências.</li><li>Ferramentas: adr-tools, Markdown simples.</li></ul>\n    <p>Decisões não viram 'tradição' sem explicação — o dev de 2 anos depois entende o porquê.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Exemplo: por que escolhemos Postgres em vez de Mongo em 2024.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Documentar decisões é arquitetura em prática.</div>",
        "quiz": [
          {
            "prompt": "ADR é…",
            "options": [
              "Um padrão ISO",
              "Registro de decisão arquitetural",
              "Servidor",
              "Biblioteca"
            ],
            "correct": 1,
            "explain": "Documento curto de contexto."
          },
          {
            "prompt": "Onde guardar?",
            "options": [
              "E-mail",
              "No repositório do projeto",
              "Hangouts",
              "Notion perdido"
            ],
            "correct": 1,
            "explain": "Junto do código."
          },
          {
            "prompt": "Serve principalmente para…",
            "options": [
              "Controle",
              "Memória institucional",
              "Dashboard",
              "UI"
            ],
            "correct": 1,
            "explain": "Time entende o porquê."
          }
        ]
      }
    ]
  },
  {
    "id": "system-design-vip",
    "title": "System Design para Devs (VIP)",
    "subtitle": "Escalar APIs, cachear certo, modelar DB e passar em entrevistas sênior",
    "description": "Do sizing inicial ao deploy global: capacidade, load balancing, filas, banco, cache, partição e disponibilidade — com desenho prático.",
    "tagline": "System design não é mistério — é método.",
    "vip": true,
    "instructor": "Equipe Devstart VIP",
    "level": "Avançado",
    "duration": "5h30",
    "emoji": "📐",
    "lessons": [
      {
        "id": "l1",
        "title": "Como pensar um sistema do zero",
        "summary": "Um esqueleto de entrevista.",
        "content": "<h2>Introdução</h2>\n    <p>Framework: requisitos → APIs → esquema de dados → arquitetura em alto nível → escalar → trade-offs.</p>\n    <p>Pergunte antes de desenhar — escopo mal definido gera desenho errado.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Quantitativos/qualitativos.</li><li>SLA / SLO / SLI explícitos.</li><li>Assunções documentadas.</li><li>5–7 blocos principais antes de detalhes.</li></ul>\n    <p>Comunique assunções em voz alta; isso ajuda entrevistador e time real.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Desenhe blocos grandes primeiro, zoom depois.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Método > memorização.</div>",
        "quiz": [
          {
            "prompt": "Primeiro passo em system design?",
            "options": [
              "Escolher DB",
              "Entender requisitos",
              "Codar",
              "Fazer docker"
            ],
            "correct": 1,
            "explain": "Sem escopo, nada faz sentido."
          },
          {
            "prompt": "SLO é…",
            "options": [
              "Acordo legal",
              "Meta interna de serviço",
              "Protocolo de rede",
              "Linguagem"
            ],
            "correct": 1,
            "explain": "Service Level Objective."
          },
          {
            "prompt": "Assunção em voz alta…",
            "options": [
              "Atrapalha",
              "Esclarece e convida feedback",
              "Não importa",
              "É erro"
            ],
            "correct": 1,
            "explain": "Transparência impressiona."
          }
        ]
      },
      {
        "id": "l2",
        "title": "Capacity planning (sizing)",
        "summary": "Quantas requisições por segundo?",
        "content": "<h2>Introdução</h2>\n    <p>Estime DAU, pico/concorrência, payload médio — traduz em RPS, bytes/s, IOPS.</p>\n    <p>Tabela mental: 1 DAU ~ 10–30 requests por dia depende do produto. 1M DAU ≈ 10k RPS de pico.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>DAU × uso médio = RPS aproximado.</li><li>Cache reduz carga em orders of magnitude.</li><li>Armazenamento é cumulativo.</li><li>Instrumentação confirma suposição.</li></ul>\n    <p>Dimensione por gargalo mais caro: CPU (compute), IO (DB), rede, storage.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Sempre estime com margem — 2x para pico, 10x para viralização.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Sizing evita over/under-provisioning.</div>",
        "quiz": [
          {
            "prompt": "Sizing parte de…",
            "options": [
              "Linguagem escolhida",
              "DAU e payload médio",
              "Cor do logo",
              "Orçamento apenas"
            ],
            "correct": 1,
            "explain": "Entradas claras."
          },
          {
            "prompt": "Margem recomendada para picos?",
            "options": [
              "1x",
              "2–3x",
              "0.5x",
              "10%"
            ],
            "correct": 1,
            "explain": "Evita surpresas."
          },
          {
            "prompt": "IOPS medem…",
            "options": [
              "Latência",
              "Operações de I/O por segundo",
              "Hostname",
              "CPU"
            ],
            "correct": 1,
            "explain": "Gargalo de DB muitas vezes."
          }
        ]
      },
      {
        "id": "l3",
        "title": "Balanceamento de carga",
        "summary": "Distribua o tráfego sem ficar offline.",
        "content": "<h2>Introdução</h2>\n    <p>Load balancers distribuem requests em múltiplos servidores, evitando sobrecarga e quedas.</p>\n    <p>L4 (TCP) vs L7 (HTTP): L7 decide por path/header, L4 é mais rápido e transparente.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>NGINX, HAProxy, Envoy, ELB.</li><li>Sticky sessions: tome cuidado.</li><li>Edge + regional layering.</li><li>Graceful shutdown evita drop.</li></ul>\n    <p>Algoritmos: round robin, least connections, IP hash, weighted.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Health checks removem instâncias doentes automaticamente.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> LB + autoscaling = chave para disponibilidade.</div>",
        "quiz": [
          {
            "prompt": "L7 LB decide baseado em…",
            "options": [
              "Bit",
              "HTTP path/header",
              "IP só",
              "Nada"
            ],
            "correct": 1,
            "explain": "Camada de aplicação."
          },
          {
            "prompt": "Health check serve para…",
            "options": [
              "Enfeitar",
              "Remover instâncias doentes",
              "Subir CPU",
              "Nada"
            ],
            "correct": 1,
            "explain": "Resiliência automática."
          },
          {
            "prompt": "Sticky sessions…",
            "options": [
              "Sempre bom",
              "Necessário às vezes, risco ao failover",
              "Proibido",
              "Ilegal"
            ],
            "correct": 1,
            "explain": "Trade-off."
          }
        ]
      },
      {
        "id": "l4",
        "title": "Banco relacional — modelar para escalar",
        "summary": "Normalize por defeito, denormalize por necessidade.",
        "content": "<h2>Introdução</h2>\n    <p>Comece normalizado (3NF) — evita anomalias e mantém consistência.</p>\n    <p>Ao crescer, identifique queries quentes e denormalize pontualmente para leitura rápida.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>EXPLAIN ANALYZE é seu amigo.</li><li>Índice composto pede ordem certa.</li><li>Denormalize em tabelas de leitura.</li><li>Sharding usa chave bem escolhida.</li></ul>\n    <p>Índices certos dominam performance. Índice errado piora escrita.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Particione (sharding) quando 1 máquina não dá conta — mas é caro operacionalmente.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Postgres escala muito mais do que se imagina.</div>",
        "quiz": [
          {
            "prompt": "Primeiro passo de modelagem?",
            "options": [
              "Desnormalizar tudo",
              "Normalizar (3NF)",
              "NoSQL",
              "CSV"
            ],
            "correct": 1,
            "explain": "Base limpa."
          },
          {
            "prompt": "Índices impactam…",
            "options": [
              "Só leitura",
              "Leitura positiva, escrita negativa",
              "Só escrita",
              "Nada"
            ],
            "correct": 1,
            "explain": "Trade-off clássico."
          },
          {
            "prompt": "Sharding é indicado quando…",
            "options": [
              "Cedo",
              "Depois de tunar DB vertical",
              "Nunca",
              "Sempre"
            ],
            "correct": 1,
            "explain": "Último recurso."
          }
        ]
      },
      {
        "id": "l5",
        "title": "Cache em camadas",
        "summary": "Do browser ao banco — cache em cada hop.",
        "content": "<h2>Introdução</h2>\n    <p>Camadas de cache: browser → CDN → edge → app → DB. Cada uma reduz custo no próximo nível.</p>\n    <p>Cache-aside é o padrão: app verifica cache, senão busca no DB e salva.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>HTTP cache com ETag e max-age.</li><li>CDN nunca pula.</li><li>Redis = padrão de cache in-memory.</li><li>Write-through raramente necessário.</li></ul>\n    <p>Invalidação é o problema difícil — use TTL + invalidação explícita por evento.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>LRU, LFU e ARC são políticas comuns. Redis cuida disso pra você.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Bom cache = UX rápida e bill mensal baixo.</div>",
        "quiz": [
          {
            "prompt": "Cache mais próximo do usuário?",
            "options": [
              "Browser",
              "DB",
              "LB",
              "Worker"
            ],
            "correct": 0,
            "explain": "Menor latência possível."
          },
          {
            "prompt": "TTL evita…",
            "options": [
              "Cache válido infinito (stale data)",
              "Boa UX",
              "Performance",
              "Nada"
            ],
            "correct": 0,
            "explain": "Expiração automática."
          },
          {
            "prompt": "Invalidação é…",
            "options": [
              "Fácil",
              "O problema mais difícil de cache",
              "Impossível",
              "Grátis"
            ],
            "correct": 1,
            "explain": "Grande parte do esforço."
          }
        ]
      },
      {
        "id": "l6",
        "title": "Filas e processamento assíncrono",
        "summary": "Quando resposta pode esperar.",
        "content": "<h2>Introdução</h2>\n    <p>Filas desacoplam produtor e consumidor. Ideal para e-mail, PDF, processamento em lote.</p>\n    <p>Tipos: RabbitMQ (msg), Kafka (event log), SQS (managed). Cada uma resolve um problema diferente.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>At-least-once é o padrão.</li><li>Jobs idempotentes.</li><li>Backpressure via workers.</li><li>DLQ obrigatório.</li></ul>\n    <p>Idempotência é vital — consumer pode receber a mensagem duas vezes.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Dead letter queue captura mensagens problemáticas sem perder dados.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Assincronismo gera resiliência e escalabilidade.</div>",
        "quiz": [
          {
            "prompt": "Fila serve para…",
            "options": [
              "Conectar direto",
              "Desacoplar produtor e consumidor",
              "UI",
              "SEO"
            ],
            "correct": 1,
            "explain": "Processamento assíncrono."
          },
          {
            "prompt": "Idempotência ajuda em…",
            "options": [
              "At-least-once delivery",
              "Nada",
              "Cor",
              "Login"
            ],
            "correct": 0,
            "explain": "Execução repetida = mesmo efeito."
          },
          {
            "prompt": "DLQ é…",
            "options": [
              "Dead Letter Queue",
              "Direct Link Queue",
              "Domain Loading Queue",
              "Nada"
            ],
            "correct": 0,
            "explain": "Captura mensagens problemáticas."
          }
        ]
      },
      {
        "id": "l7",
        "title": "Consistência vs disponibilidade (CAP)",
        "summary": "Escolhas inevitáveis.",
        "content": "<h2>Introdução</h2>\n    <p>Teorema CAP: em partição de rede, você escolhe entre consistência ou disponibilidade.</p>\n    <p>BASE (Basic Availability, Soft state, Eventual consistency) é comum em sistemas distribuídos.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>PACELC estende CAP.</li><li>Eventual consistency ≠ inconsistência permanente.</li><li>Saga coordena transações distribuídas.</li><li>Idempotência continua central.</li></ul>\n    <p>ACID continua importante em banco relacional para negócios sensíveis.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Casos: pagamento = ACID forte. Feed social = eventualmente consistente é suficiente.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Decida em função do domínio, não por hype.</div>",
        "quiz": [
          {
            "prompt": "CAP diz que em partição você escolhe entre…",
            "options": [
              "A e C",
              "Performance e preço",
              "Backup e DR",
              "Cor"
            ],
            "correct": 0,
            "explain": "Disponibilidade ou consistência."
          },
          {
            "prompt": "Eventual consistency é…",
            "options": [
              "Inconsistência eterna",
              "Convergência ao longo do tempo",
              "Sempre ruim",
              "Só em relacional"
            ],
            "correct": 1,
            "explain": "Chegaremos lá."
          },
          {
            "prompt": "Pagamentos pedem…",
            "options": [
              "Eventual",
              "Consistência forte e ACID",
              "Nenhum",
              "Menos logs"
            ],
            "correct": 1,
            "explain": "Dinheiro = transação."
          }
        ]
      },
      {
        "id": "l8",
        "title": "API gateway e edge",
        "summary": "Porta única, resiliente e inteligente.",
        "content": "<h2>Introdução</h2>\n    <p>API gateway centraliza autenticação, rate limiting, transformação, fan-out e observabilidade.</p>\n    <p>Evita lógica cross-cutting duplicada em cada serviço.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Circuit breakers no edge.</li><li>Auth centralizada.</li><li>WAF integrado em gateways modernos.</li><li>Cache por rota inteligente.</li></ul>\n    <p>Cuidado: gateway vira gargalo se mal dimensionado.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Envoy, Kong, Traefik, AWS API Gateway são opções comuns.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Edge computing move lógica simples para perto do usuário — latência mínima.</div>",
        "quiz": [
          {
            "prompt": "API gateway centraliza…",
            "options": [
              "Banco",
              "Auth, rate limit, observabilidade",
              "SEO",
              "Deploy"
            ],
            "correct": 1,
            "explain": "Responsabilidades cross-cutting."
          },
          {
            "prompt": "Risco principal?",
            "options": [
              "Cor",
              "Virar gargalo",
              "UI",
              "CSS"
            ],
            "correct": 1,
            "explain": "Ponto único de falha."
          },
          {
            "prompt": "Circuit breaker evita…",
            "options": [
              "Cascata de falhas",
              "Lucro",
              "Cor",
              "Nada"
            ],
            "correct": 0,
            "explain": "Protege o sistema inteiro."
          }
        ]
      },
      {
        "id": "l9",
        "title": "Alta disponibilidade e DR",
        "summary": "Calcule nines, prepare failover.",
        "content": "<h2>Introdução</h2>\n    <p>99.9% = 8h de downtime/ano. 99.99% = 52min. 99.999% = 5min. Custo cresce exponencial.</p>\n    <p>HA requer redundância + failover automático. DR trata cenários catastróficos.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Backups versionados + teste real.</li><li>Health checks específicos por função.</li><li>Runbook mantém time calmo em incidentes.</li><li>Postmortems sem culpa.</li></ul>\n    <p>RPO (perda aceitável de dados) e RTO (tempo de recuperação) guiam estratégia.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Multi-AZ é base; multi-region adiciona custo e complexidade de latência.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Pratique chaos engineering (matar instâncias) para descobrir frágeis.</div>",
        "quiz": [
          {
            "prompt": "99.99% significa quanto downtime/ano?",
            "options": [
              "~8h",
              "~52min",
              "~5min",
              "Zero"
            ],
            "correct": 1,
            "explain": "Quatro noves."
          },
          {
            "prompt": "RPO mede…",
            "options": [
              "Tempo para recuperar",
              "Perda aceitável de dados",
              "CPU",
              "Nada"
            ],
            "correct": 1,
            "explain": "Recovery Point Objective."
          },
          {
            "prompt": "Chaos engineering serve para…",
            "options": [
              "Gastar",
              "Descobrir fragilidades controladamente",
              "Sabotar",
              "Fingir"
            ],
            "correct": 1,
            "explain": "Treino em campo."
          }
        ]
      },
      {
        "id": "l10",
        "title": "Microsserviços bem feitos",
        "summary": "Receita para não quebrar os dentes.",
        "content": "<h2>Introdução</h2>\n    <p>Separe por bounded context, não por tamanho do arquivo.</p>\n    <p>Ownership claro: 1 time dono de 1 serviço e de sua base.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Service mesh opcional (Istio/Linkerd).</li><li>BFF para frontend dedicado.</li><li>Schema registry em eventos.</li><li>Evite distributed monolith.</li></ul>\n    <p>Contratos entre serviços são OpenAPI ou AsyncAPI; versionados.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Comunicação síncrona = latência somada; prefira assíncrono em fluxos internos.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Observabilidade é prerrequisito, não bônus.</div>",
        "quiz": [
          {
            "prompt": "Separação ideal é por…",
            "options": [
              "Arquivo grande",
              "Bounded context",
              "LinhaCount",
              "Ordem alfabética"
            ],
            "correct": 1,
            "explain": "Domínio dita limites."
          },
          {
            "prompt": "Distributed monolith é…",
            "options": [
              "Bom",
              "Quando microsserviços ficam fortemente acoplados",
              "Produto",
              "Framework"
            ],
            "correct": 1,
            "explain": "Pior dos dois mundos."
          },
          {
            "prompt": "Preferir assíncrono em…",
            "options": [
              "Fluxos internos lentos",
              "Clicks de UI",
              "Logs",
              "Cache"
            ],
            "correct": 0,
            "explain": "Reduz latência percebida."
          }
        ]
      },
      {
        "id": "l11",
        "title": "System design de casos famosos",
        "summary": "Twitter, Uber, Netflix simplificados.",
        "content": "<h2>Introdução</h2>\n    <p>Twitter: fan-out on write vs on read; caches agressivos, timelines materializadas.</p>\n    <p>Uber: matching espacial com geohash, filas assíncronas para estados do pedido.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Timelines híbridas: push+pull.</li><li>Geohash/R-tree resolvem vizinhança.</li><li>CDN + encoding adaptativo em vídeo.</li><li>Chaos monkey como prática.</li></ul>\n    <p>Netflix: CDN pesado, microsserviços maduros, experiência baseada em resiliência (chaos monkey).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Padrões comuns: replicação, sharding, event-driven, CDN, eventual consistency.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Entenda princípios e recombine pra seu contexto.</div>",
        "quiz": [
          {
            "prompt": "Twitter usa…",
            "options": [
              "Banco único",
              "Timelines materializadas com fan-out",
              "Excel",
              "Só cache"
            ],
            "correct": 1,
            "explain": "Estratégia específica."
          },
          {
            "prompt": "Geohash é útil em…",
            "options": [
              "Busca espacial",
              "Base64",
              "SEO",
              "TLS"
            ],
            "correct": 0,
            "explain": "Indexa coordenadas."
          },
          {
            "prompt": "Netflix + chaos monkey…",
            "options": [
              "Matam instâncias para treinar resiliência",
              "Monitoram",
              "Só UI",
              "Fazem backup"
            ],
            "correct": 0,
            "explain": "Falha induzida propositalmente."
          }
        ]
      },
      {
        "id": "l12",
        "title": "Entrevista de system design — o mapa",
        "summary": "Como brilhar no quadro branco.",
        "content": "<h2>Introdução</h2>\n    <p>Estrutura boa: 5 minutos de requisitos → 5 de APIs e dados → 10 de arquitetura → 10 de scaling → 5 de trade-offs.</p>\n    <p>Comunique assunções; peça feedback; simplifique antes de complicar.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Pratique whiteboard em papel também.</li><li>Pergunte sempre prioridade: latência, consistência ou custo?</li><li>Feche com trade-offs explícitos.</li><li>Evite 'engineer silent mode'.</li></ul>\n    <p>Não decore — entenda padrões. O entrevistador muda detalhes para testar reflexão.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Pratique em voz alta 20 sistemas famosos — Twitter, TinyURL, Dropbox, WhatsApp.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Confiança vem do método, não da sorte.</div>",
        "quiz": [
          {
            "prompt": "Primeiro tempo bem gasto em entrevista?",
            "options": [
              "Começar desenho",
              "Perguntar requisitos",
              "Chutar DB",
              "Nada"
            ],
            "correct": 1,
            "explain": "Escopo claro."
          },
          {
            "prompt": "Decorar sistemas…",
            "options": [
              "Funciona",
              "Falha quando entrevistador muda detalhes",
              "É suficiente",
              "É proibido"
            ],
            "correct": 1,
            "explain": "Entenda a lógica."
          },
          {
            "prompt": "Trade-off deve ser…",
            "options": [
              "Escondido",
              "Explícito e comunicado",
              "Único",
              "Perfeito"
            ],
            "correct": 1,
            "explain": "Tudo tem custo."
          }
        ]
      }
    ]
  },
  {
    "id": "lideranca-tecnica-vip",
    "title": "Liderança Técnica (VIP)",
    "subtitle": "De dev sênior a tech lead de verdade",
    "description": "Como liderar equipes técnicas: mentoria, decisões, feedback, bandeiras vermelhas, roadmap e saúde do time.",
    "tagline": "Tech lead é 50% técnico e 50% gente.",
    "vip": true,
    "instructor": "Equipe Devstart VIP",
    "level": "Sênior",
    "duration": "4h",
    "emoji": "🎯",
    "lessons": [
      {
        "id": "l1",
        "title": "O papel do tech lead",
        "summary": "Você entrega via outros agora.",
        "content": "<h2>Introdução</h2>\n    <p>Tech lead junta visão técnica, produto e gente. Você não é mais só quem codifica melhor — é quem alavanca o time.</p>\n    <p>Entrega muda: não é mais linha de código, é capacidade do time entregar consistentemente.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Alavancagem > velocidade pessoal.</li><li>1:1 semanal com cada pessoa.</li><li>Proteção de foco é papel.</li><li>Código próprio vira apoio.</li></ul>\n    <p>Sua agenda encolhe para coding. Aceite e proteja o foco do time.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: fazer tudo sozinho. Isso mata seu tempo e não forma ninguém.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Líder técnico cria mais líderes, não mais tasks fechadas.</div>",
        "quiz": [
          {
            "prompt": "Entrega do tech lead muda para…",
            "options": [
              "Mais código",
              "Capacidade do time entregar",
              "SEO",
              "UI"
            ],
            "correct": 1,
            "explain": "Alavancagem, não sozinho."
          },
          {
            "prompt": "Erro clássico?",
            "options": [
              "Delegar",
              "Fazer tudo sozinho",
              "Mentorar",
              "Ouvir"
            ],
            "correct": 1,
            "explain": "Gargalo em você."
          },
          {
            "prompt": "1:1 semanal é…",
            "options": [
              "Perda",
              "Essencial",
              "Formalismo",
              "Desnecessário"
            ],
            "correct": 1,
            "explain": "Conexão individual."
          }
        ]
      },
      {
        "id": "l2",
        "title": "Mentoria diária",
        "summary": "Ensine pescando junto.",
        "content": "<h2>Introdução</h2>\n    <p>Mentoria real acontece em revisões, pair programming e perguntas abertas.</p>\n    <p>Em vez de dizer a solução, pergunte: 'o que você tentou?', 'por que essa escolha?', 'qual o risco?'.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Pair programming 1h/semana por pessoa.</li><li>Feedback quente, depois frio.</li><li>Perguntas socráticas > respostas prontas.</li><li>Anote evoluções para review.</li></ul>\n    <p>Ensine princípios, não receitas. Receita decora; princípio se aplica.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Celebre pequenas vitórias publicamente; corrija em privado, com empatia.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Mentor bom transforma tudo: retenção, clima, entrega e moral.</div>",
        "quiz": [
          {
            "prompt": "Corrigir deve ser feito…",
            "options": [
              "Em público",
              "Em privado com empatia",
              "Nunca",
              "Com sarcasmo"
            ],
            "correct": 1,
            "explain": "Preserva dignidade."
          },
          {
            "prompt": "Pergunta socrática ensina…",
            "options": [
              "Decorar",
              "Pensar por si",
              "Ignorar",
              "Copiar"
            ],
            "correct": 1,
            "explain": "Raciocínio próprio."
          },
          {
            "prompt": "Celebrar vitórias deve ser…",
            "options": [
              "Privado",
              "Em público",
              "Nunca",
              "Só em VIP"
            ],
            "correct": 1,
            "explain": "Reconhecimento social."
          }
        ]
      },
      {
        "id": "l3",
        "title": "Feedback — dar e receber",
        "summary": "Modelo SCI: situação, comportamento, impacto.",
        "content": "<h2>Introdução</h2>\n    <p>Feedback claro: descreva a Situação, o Comportamento observado e o Impacto gerado.</p>\n    <p>Feedback positivo também merece SCI — vira padrão que se repete.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>1 feedback específico > 10 vagos.</li><li>Anote fatos antes de falar.</li><li>Use 'eu' em vez de 'você'.</li><li>Peça também feedback sobre você.</li></ul>\n    <p>Receber feedback: ouça, respire, pergunte exemplos, agradeça. Defesas matam feedback.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Evite 'sandwich' mal feito — rápido vira padrão previsível que o time aprende a desconsiderar.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Cultura de feedback frequente evita bombas de avaliação.</div>",
        "quiz": [
          {
            "prompt": "SCI significa…",
            "options": [
              "Situação, Comportamento, Impacto",
              "SQL",
              "SCI-FI",
              "Service"
            ],
            "correct": 0,
            "explain": "Framework prático."
          },
          {
            "prompt": "Feedback positivo deve ser…",
            "options": [
              "Genérico",
              "Específico com SCI",
              "Apenas emoji",
              "Raro"
            ],
            "correct": 1,
            "explain": "Reforça comportamento."
          },
          {
            "prompt": "Ao receber, melhor postura?",
            "options": [
              "Defender",
              "Ouvir e agradecer",
              "Ignorar",
              "Sarcasmo"
            ],
            "correct": 1,
            "explain": "Ganha-ganha."
          }
        ]
      },
      {
        "id": "l4",
        "title": "Tomada de decisão técnica",
        "summary": "Decisões reversíveis vs irreversíveis.",
        "content": "<h2>Introdução</h2>\n    <p>Decisões reversíveis: decida rápido, com 60–70% das informações. Recupere depois.</p>\n    <p>Decisões irreversíveis: gaste mais tempo. Escolha tecnologia de longo prazo, estrutura de time.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>DACI/RACI simples.</li><li>Deadline para decisão.</li><li>Consultores ≠ vetadores.</li><li>Explique o 'porquê' sempre.</li></ul>\n    <p>Evite comitê permanente. Nomeie um 'decisor' + consultores por decisão.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Documente em ADR para memória institucional.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Decisão rápida ética > decisão perfeita tardia.</div>",
        "quiz": [
          {
            "prompt": "Decisão reversível exige…",
            "options": [
              "Semana de reuniões",
              "Velocidade com 60-70% info",
              "Votação",
              "Comitê"
            ],
            "correct": 1,
            "explain": "Risco baixo."
          },
          {
            "prompt": "Decisão irreversível exige…",
            "options": [
              "Cuidado e análise",
              "Pressa",
              "Sorteio",
              "Aleatoriedade"
            ],
            "correct": 0,
            "explain": "Custo alto para reverter."
          },
          {
            "prompt": "ADR ajuda porque…",
            "options": [
              "Registra contexto e alternativas",
              "Enfeita",
              "Gasta tempo",
              "Atrapalha"
            ],
            "correct": 0,
            "explain": "Memória do 'porquê'."
          }
        ]
      },
      {
        "id": "l5",
        "title": "Roadmap e prioridade",
        "summary": "Foco em outcomes, não outputs.",
        "content": "<h2>Introdução</h2>\n    <p>Roadmap bom vende resultado (outcome) de negócio/usuário, não tarefa (output).</p>\n    <p>Técnicas: RICE (Reach × Impact × Confidence / Effort), WSJF ou simplesmente ICE.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Outcomes > outputs.</li><li>RICE/ICE priorizam.</li><li>Tech debt como linha explícita.</li><li>Pequeno, constante, mensurável.</li></ul>\n    <p>Reserve 20% do tempo para tech debt — caso contrário, o time desacelera em 6 meses.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Negocie escopo com PM de forma colaborativa — mostre trade-offs em roadmap.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Cadência: trimestral de visão, mensal de detalhe.</div>",
        "quiz": [
          {
            "prompt": "Outcome é…",
            "options": [
              "Tarefa",
              "Resultado de negócio/usuário",
              "Framework",
              "Tabela"
            ],
            "correct": 1,
            "explain": "Foco certo."
          },
          {
            "prompt": "Tempo recomendado para tech debt?",
            "options": [
              "0%",
              "20% do time",
              "90%",
              "100%"
            ],
            "correct": 1,
            "explain": "Equilíbrio."
          },
          {
            "prompt": "Trade-off deve ser…",
            "options": [
              "Oculto",
              "Mostrado na priorização",
              "Individual",
              "Ignorado"
            ],
            "correct": 1,
            "explain": "Transparência ajuda negociação."
          }
        ]
      },
      {
        "id": "l6",
        "title": "Gerenciando pessoas problemáticas",
        "summary": "O fit saiu — e agora?",
        "content": "<h2>Introdução</h2>\n    <p>Low performers: feedback claro, plano de melhoria de 30–60 dias, suporte real.</p>\n    <p>Conflitos: ouça os dois lados separadamente antes de juntar.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>PIP (plan improvement plan) transparente.</li><li>Registre 1:1 em doc compartilhado.</li><li>Envolva RH cedo em casos graves.</li><li>Proteja o resto do time.</li></ul>\n    <p>Estrelas com ego: reconheça sempre em público + limites firmes sobre comportamento.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Documente conversas importantes (fatos, plano, datas). Não é burocracia — é proteção.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Se fit não recuperar após suporte honesto, facilite saída digna.</div>",
        "quiz": [
          {
            "prompt": "Primeiro passo com low performer?",
            "options": [
              "Demitir",
              "Dar feedback claro e plano",
              "Ignorar",
              "Brigar"
            ],
            "correct": 1,
            "explain": "Sempre dê chance real."
          },
          {
            "prompt": "Estrela com ego?",
            "options": [
              "Rebaixar",
              "Reconhecer + pôr limites",
              "Ignorar",
              "Humilhar"
            ],
            "correct": 1,
            "explain": "Dois lados."
          },
          {
            "prompt": "Conflito entre pares?",
            "options": [
              "Reunião pública",
              "Ouvir separadamente, depois juntar",
              "Ignorar",
              "Escolher lado"
            ],
            "correct": 1,
            "explain": "Mediação sensata."
          }
        ]
      },
      {
        "id": "l7",
        "title": "Gestão de crise e incidentes",
        "summary": "Calma + método = sobrevida.",
        "content": "<h2>Introdução</h2>\n    <p>Incidente grave = menos código, mais comunicação. Alguém assume command (IC), outro comunica stakeholders.</p>\n    <p>Use protocolo: status → impacto → ação atual → próximo passo → ETA de próxima atualização.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>IC = Incident Commander.</li><li>Comunicação > velocidade no início.</li><li>Registro temporal é obrigatório.</li><li>Postmortem público é pedagógico.</li></ul>\n    <p>Postmortem sem culpa foca no sistema, não na pessoa. 'O que a pipeline permitiu que isso virasse produção?'</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Sirene alta por ausência de runbook — construa ao longo do ano.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Time que treina crise em 'game days' reage melhor em incidentes reais.</div>",
        "quiz": [
          {
            "prompt": "Postmortem deve ser…",
            "options": [
              "Punitivo",
              "Sem culpa, focado no sistema",
              "Secreto",
              "Só para RH"
            ],
            "correct": 1,
            "explain": "Aprendizado organizacional."
          },
          {
            "prompt": "IC serve para…",
            "options": [
              "Ser vilão",
              "Coordenar o incidente",
              "Programar",
              "Tomar café"
            ],
            "correct": 1,
            "explain": "Comando único na crise."
          },
          {
            "prompt": "Game day é…",
            "options": [
              "Festa",
              "Exercício simulado de incidente",
              "Feriado",
              "Evento"
            ],
            "correct": 1,
            "explain": "Treino de crise."
          }
        ]
      },
      {
        "id": "l8",
        "title": "Cultura de engenharia",
        "summary": "Os princípios valem mais que regras.",
        "content": "<h2>Introdução</h2>\n    <p>Cultura forte é efeito da repetição de decisões pequenas: revisões cuidadosas, quality gates, kindness explícita.</p>\n    <p>Defina 4–6 princípios de engenharia (ex: 'automatize antes de pedir', 'simples > inteligente').</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Writing culture ajuda escala.</li><li>DACI clarifica decisões.</li><li>Fairness = retenção.</li><li>Celebração estrutural ≠ teatro.</li></ul>\n    <p>Onboarding bem feito dobra retenção nos primeiros 90 dias.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Celebre consertos silenciosos e aprendizado — não só demos bonitas.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Cultura te permite crescer sem microgerenciamento.</div>",
        "quiz": [
          {
            "prompt": "Cultura nasce de…",
            "options": [
              "Slogan",
              "Decisões repetidas pequenas",
              "Bônus",
              "Festa anual"
            ],
            "correct": 1,
            "explain": "Acontece nos detalhes."
          },
          {
            "prompt": "Princípios devem ser…",
            "options": [
              "Muitos",
              "4–6 memoráveis",
              "Zero",
              "1 só"
            ],
            "correct": 1,
            "explain": "Foco real."
          },
          {
            "prompt": "Retenção se ganha com…",
            "options": [
              "Salário apenas",
              "Onboarding + clareza + respeito",
              "Discurso",
              "Anéis"
            ],
            "correct": 1,
            "explain": "Experiência integral."
          }
        ]
      },
      {
        "id": "l9",
        "title": "Comunicação com C-level",
        "summary": "Adapte a linguagem sem perder verdade.",
        "content": "<h2>Introdução</h2>\n    <p>C-level pensa em risco, receita e tempo. Traduza problemas técnicos para essas lentes.</p>\n    <p>Reduza jargão; use dados e comparações. 'Se esperarmos 3 meses, risco de X% de perder Y receita'.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Mostre dados antes do pleito.</li><li>Resposta curta > longa.</li><li>Memo > slide quando é decisão.</li><li>Nunca reclame sem proposta.</li></ul>\n    <p>Proponha sempre 2–3 opções com trade-offs claros — deixe o decisor escolher.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Use 1-pagers para decisões; slides para alinhamento; memo para estratégia.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Engenharia comunicada vira orçamento aprovado.</div>",
        "quiz": [
          {
            "prompt": "Executivo pensa em…",
            "options": [
              "Syntax",
              "Risco, receita e tempo",
              "CSS",
              "Linters"
            ],
            "correct": 1,
            "explain": "Linguagem de negócio."
          },
          {
            "prompt": "Opções devem ser…",
            "options": [
              "Uma só",
              "2–3 com trade-offs",
              "Infinitas",
              "Aleatórias"
            ],
            "correct": 1,
            "explain": "Decisor escolhe."
          },
          {
            "prompt": "Reclamar sem proposta…",
            "options": [
              "Impressiona",
              "Perde credibilidade",
              "Atrasa",
              "Bom"
            ],
            "correct": 1,
            "explain": "Leve sempre solução."
          }
        ]
      },
      {
        "id": "l10",
        "title": "Escalando o time",
        "summary": "Contratação e estrutura.",
        "content": "<h2>Introdução</h2>\n    <p>Escopo de contratação: junior (crescer), pleno (entregar), sênior (multiplicar), staff (arquitetura).</p>\n    <p>Estabeleça expectativas por nível — leveling matrix ajuda muito.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Leveling matrix por eixo.</li><li>Debrief escrito evita vieses.</li><li>Referral + fontes múltiplas.</li><li>Onboarding padrão padronizado.</li></ul>\n    <p>Entrevistas: estrutura padrão, rubrica, debrief. Sem estrutura vira loteria.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Diversidade real pede esforço: referral não basta, busque ativamente candidatas/os.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Contratar lento e demitir cedo quando não há fit salva dores longas.</div>",
        "quiz": [
          {
            "prompt": "Staff entrega via…",
            "options": [
              "Tasks",
              "Arquitetura e multiplicação",
              "UI",
              "Memes"
            ],
            "correct": 1,
            "explain": "Influência técnica."
          },
          {
            "prompt": "Hiring sem rubrica…",
            "options": [
              "Rápido e bom",
              "Viés alto",
              "Perfeito",
              "Só em TI"
            ],
            "correct": 1,
            "explain": "Decisão justa pede estrutura."
          },
          {
            "prompt": "Demitir cedo…",
            "options": [
              "Cruel",
              "Gentil com o time e a pessoa",
              "Sempre",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Certeza educada."
          }
        ]
      },
      {
        "id": "l11",
        "title": "Saúde pessoal como líder",
        "summary": "Cuidar da máquina que toma decisão.",
        "content": "<h2>Introdução</h2>\n    <p>Burn out é a doença ocupacional do tech lead. Sono, exercício, limites são prioridade, não luxo.</p>\n    <p>Proteja 20% do tempo para pensar — estratégia morre em agenda cheia.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Dormir > cafeína.</li><li>Terapia normalizada.</li><li>Pratique hobby técnico separado.</li><li>Walking 1:1 muda qualidade da conversa.</li></ul>\n    <p>Tenha mentor externo: alguém que já passou pelo que você está passando.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Delegue com confiança, não com abandono — check-in leve depois.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Liderança sustentável é a única liderança real no longo prazo.</div>",
        "quiz": [
          {
            "prompt": "Risco principal do tech lead?",
            "options": [
              "Burn out",
              "Amar demais",
              "Aprender demais",
              "Ver filmes"
            ],
            "correct": 0,
            "explain": "Carga emocional e cognitiva."
          },
          {
            "prompt": "Delegar bem é…",
            "options": [
              "Abandonar",
              "Confiar + acompanhar leve",
              "Vetar",
              "Microgerenciar"
            ],
            "correct": 1,
            "explain": "Equilíbrio."
          },
          {
            "prompt": "Mentor externo…",
            "options": [
              "Desnecessário",
              "Acelera muito e dá perspectiva",
              "Ilegal",
              "Só em VIP"
            ],
            "correct": 1,
            "explain": "Espelho experiente."
          }
        ]
      },
      {
        "id": "l12",
        "title": "Próximos passos — líder em evolução",
        "summary": "Livros, podcasts, prática.",
        "content": "<h2>Introdução</h2>\n    <p>Lista mínima: 'The Manager's Path' (Camille Fournier), 'An Elegant Puzzle' (Will Larson), 'Staff Engineer' (Will Larson).</p>\n    <p>Podcasts: Engineering Leadership, Lenny's Podcast, Dev Interrupted.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Retrô mensal com ações concretas.</li><li>Lê 1 livro por trimestre.</li><li>Comunidade de pares (ex: Rands Slack).</li><li>Ensine para consolidar.</li></ul>\n    <p>Pratique com retrospectivas periódicas do seu time — itere como engenheiro.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Compartilhe aprendizados publicamente — escrever te obriga a clarear.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> A liderança é uma habilidade — e habilidade se pratica.</div>",
        "quiz": [
          {
            "prompt": "Livro recomendado?",
            "options": [
              "'Manager's Path' (Fournier)",
              "Novela",
              "Só ficção",
              "Nenhum"
            ],
            "correct": 0,
            "explain": "Referência em liderança técnica."
          },
          {
            "prompt": "Compartilhar aprendizados…",
            "options": [
              "Atrapalha carreira",
              "Acelera crescimento e rede",
              "É proibido",
              "Só em VIP"
            ],
            "correct": 1,
            "explain": "Escrever clareia e posiciona."
          },
          {
            "prompt": "Retrospectivas do time…",
            "options": [
              "Inúteis",
              "Laboratório de melhoria",
              "Chato",
              "Nenhum valor"
            ],
            "correct": 1,
            "explain": "Itere o próprio time."
          }
        ]
      }
    ]
  },
  {
    "id": "gestao-carreira-vip",
    "title": "Gestão de Carreira Sênior (VIP)",
    "subtitle": "Saia do júnior, chegue a staff — com intenção e não sorte",
    "description": "Plano de carreira concreto: níveis, promoções, marca pessoal, dinheiro e transições — do primeiro trabalho a staff engineer ou tech lead.",
    "tagline": "Carreira não acontece; ela é construída.",
    "vip": true,
    "instructor": "Equipe Devstart VIP",
    "level": "Intermediário a Sênior",
    "duration": "4h",
    "emoji": "📈",
    "lessons": [
      {
        "id": "l1",
        "title": "Mapa de carreira — do júnior a staff",
        "summary": "A trilha existe, mesmo que ninguém conte.",
        "content": "<h2>Introdução</h2>\n    <p>Níveis típicos em tech: júnior → pleno → sênior → staff/staff+. Cada nível tem escopo e impacto maiores.</p>\n    <p>Júnior entrega tasks; pleno entrega features; sênior entrega sistemas; staff entrega alinhamento entre times.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Leveling matrix típica por eixo.</li><li>Impacto em pessoas e sistemas.</li><li>Nomes mudam por empresa.</li><li>Promoção é evento; escopo cresce antes.</li></ul>\n    <p>Promoções geralmente acontecem entre 1 e 2 anos no nível, se você entrega acima do esperado.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: tempo no cargo não é promoção automática. Impacto importa mais.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Desenhar o mapa te dá noção de onde você está e pra onde vai.</div>",
        "quiz": [
          {
            "prompt": "Pleno entrega…",
            "options": [
              "Task",
              "Feature",
              "Sistemas inteiros",
              "Arquitetura global"
            ],
            "correct": 1,
            "explain": "Escopo feature."
          },
          {
            "prompt": "Staff costuma entregar…",
            "options": [
              "Cor",
              "Alinhamento e arquitetura entre times",
              "Boletim",
              "Só código"
            ],
            "correct": 1,
            "explain": "Multiplicação."
          },
          {
            "prompt": "Tempo no cargo garante promoção?",
            "options": [
              "Sim",
              "Não — impacto importa mais",
              "Às vezes",
              "Só em VIP"
            ],
            "correct": 1,
            "explain": "Escopo real é o critério."
          }
        ]
      },
      {
        "id": "l2",
        "title": "Como conseguir promoção de verdade",
        "summary": "Promoção é resultado, não pedido.",
        "content": "<h2>Introdução</h2>\n    <p>Antes de pedir, entregue consistentemente no nível alvo por 3–6 meses.</p>\n    <p>Documente impacto: métricas, PRs relevantes, problemas resolvidos, aprendizados do time.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Brag doc atualizado trimestral.</li><li>Peer feedback positivo.</li><li>Mentoria entregue (demonstra seniority).</li><li>Projetos visíveis ao time maior.</li></ul>\n    <p>Faça campanha silenciosa: colegas e pares precisam saber do seu impacto. 'Trabalho bom invisível' raramente promove.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Converse com gestor em 1:1 sobre plano: 'o que falta objetivamente para o próximo nível?'.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Promoção vem quando já aparenta naturalmente no dia a dia.</div>",
        "quiz": [
          {
            "prompt": "Antes de pedir promoção você deve…",
            "options": [
              "Reclamar",
              "Entregar consistentemente no nível alvo",
              "Ignorar",
              "Fingir"
            ],
            "correct": 1,
            "explain": "Desempenho precede cargo."
          },
          {
            "prompt": "Brag doc serve para…",
            "options": [
              "Auto-elogio",
              "Documentar impacto",
              "Chatear time",
              "Nada"
            ],
            "correct": 1,
            "explain": "Evidência concreta."
          },
          {
            "prompt": "Trabalho invisível…",
            "options": [
              "Promove",
              "Raramente promove",
              "Sempre",
              "Só em VIP"
            ],
            "correct": 1,
            "explain": "Visibilidade é parte do jogo."
          }
        ]
      },
      {
        "id": "l3",
        "title": "Medindo impacto do seu trabalho",
        "summary": "Nem tudo mede em task.",
        "content": "<h2>Introdução</h2>\n    <p>Impacto = valor gerado / esforço. Nem tudo mede em tasks; muitas vezes é alinhar, desbloquear, simplificar.</p>\n    <p>Categorias: direto (feature entregue), indireto (desbloqueio de time), estratégico (decisão arquitetural).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Escolha 1–3 highlights por trimestre.</li><li>Descreva antes, depois, como.</li><li>Guarde prints e links.</li><li>Conecte ao objetivo do negócio.</li></ul>\n    <p>Use métricas claras quando possível: economia de custo, redução de latência, pessoas onboardadas.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Se não mede, descreva com clareza o 'antes x depois'.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Impacto mostrado vira moeda de negociação.</div>",
        "quiz": [
          {
            "prompt": "Impacto é…",
            "options": [
              "Tarefas concluídas",
              "Valor gerado / esforço",
              "Linhas de código",
              "Bugs criados"
            ],
            "correct": 1,
            "explain": "Produz resultado."
          },
          {
            "prompt": "Quando não mede numericamente…",
            "options": [
              "Inventa",
              "Mostra antes x depois narrativamente",
              "Desiste",
              "Omite"
            ],
            "correct": 1,
            "explain": "Narrativa vale."
          },
          {
            "prompt": "Highlights trimestrais…",
            "options": [
              "3 principais",
              "Todos",
              "Só 1",
              "Zero"
            ],
            "correct": 0,
            "explain": "Foco conta."
          }
        ]
      },
      {
        "id": "l4",
        "title": "Marca pessoal — sem cringe",
        "summary": "Seja conhecido pelo trabalho, não pelo marketing.",
        "content": "<h2>Introdução</h2>\n    <p>Marca pessoal = como as pessoas te descrevem quando você não está na sala.</p>\n    <p>Escrever sobre o que você aprende é o caminho mais curto. LinkedIn + blog técnico funcionam bem.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>1 post por semana é sustentável.</li><li>Conteúdo técnico > motivacional.</li><li>Contribuir em OSS é marca.</li><li>Seja útil, não performático.</li></ul>\n    <p>Palestras em meetups internos e externos constroem autoridade rápido.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Evite 'guru-cringe': ensine do seu nível atual com honestidade, não de quem sabe tudo.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Marca boa gera oportunidades inbound por anos.</div>",
        "quiz": [
          {
            "prompt": "Marca pessoal é…",
            "options": [
              "Hype",
              "O que dizem de você quando não está",
              "Logo",
              "Slogan"
            ],
            "correct": 1,
            "explain": "Reputação real."
          },
          {
            "prompt": "Conteúdo útil = ?",
            "options": [
              "Motivacional",
              "Técnico específico",
              "Selfies",
              "Cliques"
            ],
            "correct": 1,
            "explain": "Ensina e ajuda."
          },
          {
            "prompt": "Palestras servem para…",
            "options": [
              "Passar tempo",
              "Construir autoridade rapidamente",
              "Nada",
              "Vanglória"
            ],
            "correct": 1,
            "explain": "Expõe sua expertise."
          }
        ]
      },
      {
        "id": "l5",
        "title": "Dinheiro — negociar bem é habilidade",
        "summary": "Leve para sério.",
        "content": "<h2>Introdução</h2>\n    <p>Salário é negociado em troca, não solicitado — ter alternativas fortalece sua posição.</p>\n    <p>Mapeie o mercado: Glassdoor, Levels.fyi, Matheus Sinelli, canais pagos tipo Salary.com.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Tenha reserva de emergência (6m).</li><li>Diversifique investimentos.</li><li>Contador em PJ é essencial.</li><li>Seguro de vida/saúde importa.</li></ul>\n    <p>Recebeu oferta? Nunca aceite na hora. Compare com mercado, pense em 24–48h.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Pacote total: CLT (FGTS, 13º, VA, VR, saúde) vs PJ (maior bruto, sem benefícios).</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Carreira em tech é maratona — equilibrar dinheiro + aprendizado + energia.</div>",
        "quiz": [
          {
            "prompt": "Aceitar oferta na hora?",
            "options": [
              "Sim",
              "Nunca — peça 24–48h",
              "Sempre",
              "Só em VIP"
            ],
            "correct": 1,
            "explain": "Pense com calma."
          },
          {
            "prompt": "Onde pesquisar salário?",
            "options": [
              "Levels.fyi, Glassdoor, pares",
              "Redes sociais",
              "Horóscopo",
              "Ninguém"
            ],
            "correct": 0,
            "explain": "Dados confiáveis."
          },
          {
            "prompt": "Reserva de emergência ideal?",
            "options": [
              "1 semana",
              "6 meses",
              "Nenhuma",
              "20 anos"
            ],
            "correct": 1,
            "explain": "Liberdade de escolha."
          }
        ]
      },
      {
        "id": "l6",
        "title": "Transições de carreira",
        "summary": "Pular cedo ≠ desistir.",
        "content": "<h2>Introdução</h2>\n    <p>Transições comuns: dev → tech lead, dev → produto, dev → SRE/DevOps, fullstack → back/front puro.</p>\n    <p>Antes de pular, pergunte: o que me atrai? o que me cansa? o que eu ainda não testei?</p>\n    <h2>Aprofundando</h2>\n    <ul><li>1:1s em outras áreas abrem portas.</li><li>Mentor na área alvo ajuda.</li><li>Trazer portfólio novo para a função nova.</li><li>Nunca pule por salário apenas.</li></ul>\n    <p>Experimente 3 meses em outra função (side project, rotação interna) antes de migrar.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Use vida pregressa como vantagem: dev virou PM carrega técnica que outros PMs não têm.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Transição bem feita é upgrade, não fuga.</div>",
        "quiz": [
          {
            "prompt": "Antes de pular, experimente…",
            "options": [
              "Aleatoriamente",
              "Side project/rotação",
              "Demitir-se",
              "Esperar"
            ],
            "correct": 1,
            "explain": "Testa sem risco alto."
          },
          {
            "prompt": "Transição boa é…",
            "options": [
              "Fuga",
              "Upgrade consciente",
              "Impulsiva",
              "Forçada"
            ],
            "correct": 1,
            "explain": "Curiosidade direcionada."
          },
          {
            "prompt": "Dev → PM funciona porque…",
            "options": [
              "Mesmas tarefas",
              "Bagagem técnica é vantagem",
              "Salário alto",
              "Moda"
            ],
            "correct": 1,
            "explain": "Raro e valioso."
          }
        ]
      },
      {
        "id": "l7",
        "title": "Trabalho remoto global",
        "summary": "Trabalhando em dólar, vivendo em real.",
        "content": "<h2>Introdução</h2>\n    <p>Vagas internacionais exigem inglês técnico, auto-gestão e disciplina de fuso.</p>\n    <p>Plataformas: Toptal, We Work Remotely, Remote OK, LinkedIn com filtro 'worldwide'.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Overlap de fuso em 3–4h é ideal.</li><li>Conta Wise/Remessa Online para receber.</li><li>Cotações cambiais são gatilhos a planejar.</li><li>Políticas de férias variam demais.</li></ul>\n    <p>Considerações fiscais: pesquise MEI, Simples Nacional, contratos 'contractor'. Contador internacional vale ouro.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Cuidado com isolamento: crie rituais e encontros presenciais mensais.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Remote internacional é ótimo, mas pede maturidade emocional.</div>",
        "quiz": [
          {
            "prompt": "Considerações fiscais em remote internacional?",
            "options": [
              "Zero",
              "Importantes; contador ajuda",
              "Só em CLT",
              "Nada"
            ],
            "correct": 1,
            "explain": "Regras específicas."
          },
          {
            "prompt": "Overlap de fuso bom?",
            "options": [
              "0h",
              "3–4h de overlap",
              "12h",
              "Nenhum"
            ],
            "correct": 1,
            "explain": "Permite colaboração."
          },
          {
            "prompt": "Isolamento remoto combate com…",
            "options": [
              "Trabalhar mais",
              "Rituais e encontros presenciais",
              "Sumir",
              "Café"
            ],
            "correct": 1,
            "explain": "Humano é social."
          }
        ]
      },
      {
        "id": "l8",
        "title": "Construindo rede (networking)",
        "summary": "Rede forte > currículo forte.",
        "content": "<h2>Introdução</h2>\n    <p>Rede profissional é ativo que rende por décadas. Mantenha sem pedir algo.</p>\n    <p>Ações simples: feedback, indicações, convites, compartilhar conteúdo útil.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Mentoria é 2-way street.</li><li>LinkedIn DMs respeitosas abrem portas.</li><li>Meetups presenciais voltaram.</li><li>Comunidades de Slack/Discord valem ouro.</li></ul>\n    <p>Participe de 2–3 eventos/comunidades por trimestre; contribuir > só consumir.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Faça follow-up depois de eventos: 1 mensagem curta com próximo passo.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Pessoas preferem trabalhar com quem conhecem; networking é estratégia.</div>",
        "quiz": [
          {
            "prompt": "Rede forte…",
            "options": [
              "Rende décadas",
              "Só 1 vez",
              "Inútil",
              "Ruim"
            ],
            "correct": 0,
            "explain": "Ativo de longo prazo."
          },
          {
            "prompt": "Melhor prática em evento?",
            "options": [
              "Só palestrar",
              "Contribuir + follow-up",
              "Sumir",
              "Dar panfleto"
            ],
            "correct": 1,
            "explain": "Relacionamento real."
          },
          {
            "prompt": "Mentoria…",
            "options": [
              "Só recebe",
              "É 2-way",
              "Paga sempre",
              "Não existe"
            ],
            "correct": 1,
            "explain": "Mentor também aprende."
          }
        ]
      },
      {
        "id": "l9",
        "title": "Produtividade e energia",
        "summary": "Agenda como organismo vivo.",
        "content": "<h2>Introdução</h2>\n    <p>Energia > tempo. 4h focadas rendem mais que 10h dispersas.</p>\n    <p>Use time-blocking: manhãs para profundo, tardes para reuniões e mentorias.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Pomodoro 25/5 ou 50/10.</li><li>Notification off fora das janelas.</li><li>One big thing por dia.</li><li>Reunião é custo real — negocie.</li></ul>\n    <p>Limpeza de Slack/email em janelas específicas evita troca constante de contexto.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Sleep 7h+, 150min de cardio/semana, hidratação. Nada novo — continuam funcionando.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Produtividade sustentável é vantagem competitiva.</div>",
        "quiz": [
          {
            "prompt": "Energia > tempo?",
            "options": [
              "Sim",
              "Não",
              "Às vezes",
              "Nunca"
            ],
            "correct": 0,
            "explain": "Foco rende."
          },
          {
            "prompt": "Time-blocking é…",
            "options": [
              "Reuniões livres",
              "Blocos dedicados por tipo de tarefa",
              "Burocracia",
              "Distração"
            ],
            "correct": 1,
            "explain": "Método conhecido."
          },
          {
            "prompt": "Reunião é…",
            "options": [
              "Grátis",
              "Custo real; questione",
              "Obrigação",
              "Diversão"
            ],
            "correct": 1,
            "explain": "Consome energia de todos."
          }
        ]
      },
      {
        "id": "l10",
        "title": "Plano de 12 meses",
        "summary": "Objetivos bons viram realidade.",
        "content": "<h2>Introdução</h2>\n    <p>Todo dezembro/janeiro, escreva 3–5 metas anuais. 1 de habilidade, 1 de carreira, 1 de pessoal/saúde.</p>\n    <p>Cada meta vira 4 milestones trimestrais. Reviso mensal curto em 1:1 contigo mesmo.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Revisão mensal curta (30min).</li><li>Metas mensuráveis > vagas.</li><li>Compartilhe publicamente quando possível.</li><li>Redesenhe quando contexto muda.</li></ul>\n    <p>Meta boa tem verbo + métrica + prazo. 'Em Q2, publicar 3 posts técnicos no LinkedIn com média de 100 reações.'</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Compartilhe com 1–2 pessoas: accountability aumenta taxa de execução.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Revise sem dogma — metas podem mudar com contexto; o importante é não ter zero direção.</div>",
        "quiz": [
          {
            "prompt": "Meta boa tem…",
            "options": [
              "Só verbo",
              "Verbo + métrica + prazo",
              "Só adjetivo",
              "Apenas sonho"
            ],
            "correct": 1,
            "explain": "Concreto e verificável."
          },
          {
            "prompt": "Accountability…",
            "options": [
              "Atrapalha",
              "Aumenta execução quando compartilhada",
              "Zero efeito",
              "Só ego"
            ],
            "correct": 1,
            "explain": "Tem amparo emocional."
          },
          {
            "prompt": "Meta pode mudar?",
            "options": [
              "Nunca",
              "Sim, com contexto novo",
              "Só em VIP",
              "Proibido"
            ],
            "correct": 1,
            "explain": "Adaptação é maturidade."
          }
        ]
      },
      {
        "id": "l11",
        "title": "Consultoria e empreendedorismo",
        "summary": "Quando sair do CLT começa a fazer sentido.",
        "content": "<h2>Introdução</h2>\n    <p>Consultor: vende horas; empreendedor: vende produto. Caminhos diferentes, pedem skills diferentes.</p>\n    <p>Começar consultoria: cobre acima do CLT (≥50%), monte 3 casos, network com PMs/CTOs.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Contrato escrito, sempre.</li><li>Reserva 6m antes de pular.</li><li>Empreender exige cofundador comercial forte.</li><li>Produto > consultoria em escala, não em velocidade.</li></ul>\n    <p>Empreender em produto requer distribuição, não só código. Marketing é indispensável.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Teste pequeno: side-project pago enquanto está empregado. Valide tempo e mercado.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Nem todo dev precisa empreender — tech também remunera muito bem dentro de empresa.</div>",
        "quiz": [
          {
            "prompt": "Consultor vende…",
            "options": [
              "Produto",
              "Horas e resultado",
              "Nada",
              "Trades"
            ],
            "correct": 1,
            "explain": "Tempo/expertise."
          },
          {
            "prompt": "Produto precisa de…",
            "options": [
              "Só código",
              "Distribuição e marketing",
              "Só design",
              "Nada"
            ],
            "correct": 1,
            "explain": "Canal de venda importa."
          },
          {
            "prompt": "Empreender em produto de tech…",
            "options": [
              "Sempre vale",
              "Requer mercado e tempo — avalie",
              "Proibido",
              "Só VIP"
            ],
            "correct": 1,
            "explain": "Opcional, não obrigatório."
          }
        ]
      },
      {
        "id": "l12",
        "title": "Visão de longo prazo — vida integral",
        "summary": "Carreira é parte, não o todo.",
        "content": "<h2>Introdução</h2>\n    <p>Separe identidade de cargo: você não é 'dev', você é alguém que atualmente faz dev bem.</p>\n    <p>Saúde física, relacionamentos e hobbies pagam juros ao longo da vida — invista nestes três.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Reserva de longo prazo separada da emergência.</li><li>Férias reais, sem laptop.</li><li>Amizade vale mais que LinkedIn.</li><li>Reveja valores a cada 2 anos.</li></ul>\n    <p>Reserva financeira robusta te dá opção de escolher — não ser escolhido.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Defina valores pessoais e tome decisões em linha com eles. Dinheiro sozinho não basta.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Carreira bem gerida te dá tempo para viver, não o contrário.</div>",
        "quiz": [
          {
            "prompt": "Identidade deve ser…",
            "options": [
              "Cargo",
              "Valores e escolhas",
              "Salário",
              "Follower"
            ],
            "correct": 1,
            "explain": "Mais estável e saudável."
          },
          {
            "prompt": "Reserva financeira dá…",
            "options": [
              "Escolhas",
              "Ansiedade",
              "Nada",
              "Problemas"
            ],
            "correct": 0,
            "explain": "Poder de negociar."
          },
          {
            "prompt": "Férias reais…",
            "options": [
              "Raras",
              "Essenciais para sustentabilidade",
              "Fraqueza",
              "Só VIP"
            ],
            "correct": 1,
            "explain": "Recupera energia."
          }
        ]
      }
    ]
  }
];
  if (typeof window !== 'undefined') {
    window.DevstartCourses = (window.DevstartCourses || []).concat(NEW_VIP);
  }
})();
