/* courses-data-5.js — 4 novos cursos GRÁTIS gerados programaticamente (pt-BR) */
(function () {
  const NEW_FREE = [
  {
    "id": "ingles-para-devs",
    "title": "Inglês para Devs",
    "subtitle": "Vocabulário, leitura de docs e comunicação no dia a dia de tecnologia",
    "description": "Inglês prático, focado 100% no que um dev usa: ler documentação, entender mensagens de erro, escrever commits e PRs, participar de daily meetings e entrevistas técnicas.",
    "tagline": "Sem decoreba de gramática — só o inglês que você realmente usa como dev.",
    "vip": false,
    "instructor": "Equipe Devstart",
    "level": "Iniciante a Intermediário",
    "duration": "4h",
    "emoji": "🌐",
    "lessons": [
      {
        "id": "l1",
        "title": "Por que inglês importa pra dev",
        "summary": "A carreira global começa no inglês técnico.",
        "content": "<h2>Introdução</h2>\n    <p>Dominar inglês técnico dobra suas vagas — 90% das documentações, libraries, issues e tutoriais avançados estão em inglês.</p>\n    <p>Não é preciso ser fluente em conversação para começar; leitura e escrita técnica já abrem vagas remotas internacionais.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Inglês abre vagas remotas pagas em dólar.</li><li>Documentação oficial de toda tecnologia relevante é em inglês.</li><li>Entrevistas técnicas internacionais são 100% em inglês.</li><li>Comunidade global (Stack Overflow, GitHub) é em inglês.</li></ul>\n    <p>Este curso foca só no inglês que um dev usa — não vamos perder tempo com conjugação de verbos.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha comum: tentar decorar tudo. O certo é ler código e docs em inglês todo dia, mesmo que devagar.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Foque em leitura de docs, commits, PRs e comunicação em time — é isso que move sua carreira.</div>",
        "quiz": [
          {
            "prompt": "Por onde começar o inglês para dev?",
            "options": [
              "Decorando tempos verbais",
              "Lendo docs e código em inglês",
              "Só ouvindo filmes",
              "Tradução literal de textos"
            ],
            "correct": 1,
            "explain": "Imersão em conteúdo técnico é muito mais efetivo."
          },
          {
            "prompt": "Qual ambiente tem MAIOR volume de conteúdo em inglês?",
            "options": [
              "LinkedIn brasileiro",
              "Revistas de moda",
              "Documentação de APIs",
              "Chat do WhatsApp"
            ],
            "correct": 2,
            "explain": "APIs e frameworks publicam docs oficiais em inglês."
          },
          {
            "prompt": "É preciso falar inglês fluentemente para começar?",
            "options": [
              "Sim, nível C2",
              "Não — começar por leitura já ajuda",
              "Só se trabalhar no exterior",
              "Só para VIP"
            ],
            "correct": 1,
            "explain": "Leitura técnica é a primeira e mais rentável habilidade."
          }
        ]
      },
      {
        "id": "l2",
        "title": "Vocabulário essencial: bug, deploy, merge",
        "summary": "Os 30 termos que você vai ver todo dia.",
        "content": "<h2>Introdução</h2>\n    <p>Termos técnicos têm um significado específico — 'merge' não é 'fundir' no sentido comum, é unir branches.</p>\n    <p>Memorize o vocabulário em contexto: leia uma issue real no GitHub e anote cada palavra nova.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>'Push' manda código pro repositório remoto.</li><li>'Pull Request' propõe uma mudança para o time revisar.</li><li>'Deploy' põe a aplicação no ar.</li><li>'Rollback' volta para a versão anterior.</li><li>'Hotfix' é correção urgente em produção.</li></ul>\n    <p>Palavras-chave: bug, feature, deploy, commit, branch, merge, pull request, review, staging, rollback, fix, refactor, test, mock, patch, release.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Dica: use o Raycast/Alfred ou o Dicionário Cambridge para palavras desconhecidas.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Construa seu próprio glossário — 30 palavras cobrem 80% do seu dia.</div>",
        "quiz": [
          {
            "prompt": "O que significa 'rollback'?",
            "options": [
              "Reenviar a mensagem",
              "Voltar à versão anterior",
              "Compilar",
              "Criar branch"
            ],
            "correct": 1,
            "explain": "Rollback = desfazer o deploy."
          },
          {
            "prompt": "'Merge conflict' é…",
            "options": [
              "Tarefa duplicada",
              "Conflito de branches ao fundi-las",
              "Erro de rede",
              "Erro de deploy"
            ],
            "correct": 1,
            "explain": "Quando o Git não consegue unir automaticamente."
          },
          {
            "prompt": "'Hotfix' é…",
            "options": [
              "Correção urgente em produção",
              "Feature grande",
              "Patch do SO",
              "Deploy planejado"
            ],
            "correct": 0,
            "explain": "Hotfix é uma correção fora do ciclo normal."
          }
        ]
      },
      {
        "id": "l3",
        "title": "Lendo documentação técnica",
        "summary": "Estratégia para ler docs sem ficar travado.",
        "content": "<h2>Introdução</h2>\n    <p>Docs técnicas têm padrões: overview → install → usage → API reference → examples → FAQ. Você quase nunca precisa ler tudo.</p>\n    <p>Leia primeiro overview + 1 exemplo; depois pule direto pra seção relevante. Traduza mentalmente só o que travar.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Procure 'Getting started' ou 'Quickstart'.</li><li>Pule seções históricas e introduções longas.</li><li>Teste exemplos em um CodeSandbox enquanto lê.</li><li>Anote 5 termos novos por leitura.</li></ul>\n    <p>Use Ctrl+F para 'example', 'usage', 'quickstart' — você acha o caminho 10x mais rápido.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Evite o erro de traduzir tudo literalmente. Aceite o termo em inglês e entenda pelo contexto.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Dominar leitura de docs é 50% do trabalho de dev.</div>",
        "quiz": [
          {
            "prompt": "Qual a ordem ideal de leitura de uma doc?",
            "options": [
              "API reference primeiro",
              "Overview + exemplo + seção específica",
              "FAQ primeiro",
              "Blog posts primeiro"
            ],
            "correct": 1,
            "explain": "Entender o quadrão antes do detalhe."
          },
          {
            "prompt": "O que NÃO é estratégia de leitura eficiente?",
            "options": [
              "Ctrl+F por palavra-chave",
              "Traduzir cada palavra",
              "Pular pra exemplos",
              "Anotar glossário"
            ],
            "correct": 1,
            "explain": "Traduzir tudo trava o aprendizado."
          },
          {
            "prompt": "'Quickstart' geralmente contém…",
            "options": [
              "API inteira",
              "Um guia rápido para começar",
              "Histórico do projeto",
              "Roadmap"
            ],
            "correct": 1,
            "explain": "É o atalho para primeiro contato."
          }
        ]
      },
      {
        "id": "l4",
        "title": "Mensagens de erro em inglês",
        "summary": "Como interpretar stack traces e logs.",
        "content": "<h2>Introdução</h2>\n    <p>Toda mensagem de erro em inglês segue um padrão: o quê + onde + por quê. Aprenda a encontrar esse padrão.</p>\n    <p>Expressões comuns: 'undefined is not a function', 'cannot read property of null', 'unexpected token', 'connection refused', '404 not found'.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>'Cannot read property X of undefined' = acessou algo que não existe.</li><li>'Connection refused' = o servidor está fora ou bloqueado.</li><li>'Timeout' = demorou demais pra responder.</li><li>'Permission denied' = faltou autorização.</li></ul>\n    <p>'Stack trace' é a pilha de chamadas que te mostra por onde o código passou antes de quebrar. Leia de baixo pra cima.</p>\n    <h2>Exemplo prático</h2><pre><code>TypeError: Cannot read property 'map' of undefined\n  at Component.render (App.js:42)</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Armadilha: copiar o erro inteiro no Google. Melhor: isolar a linha que realmente importa.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Entender o erro economiza horas — não é exagero.</div>",
        "quiz": [
          {
            "prompt": "'Cannot read property X of undefined' significa…",
            "options": [
              "O arquivo não existe",
              "A variável em si é undefined",
              "Erro de rede",
              "Bug do navegador"
            ],
            "correct": 1,
            "explain": "A variável está undefined e você tentou acessar uma propriedade."
          },
          {
            "prompt": "Stack trace lê-se…",
            "options": [
              "De cima pra baixo",
              "De baixo pra cima",
              "Não importa",
              "Em ordem alfabética"
            ],
            "correct": 1,
            "explain": "Do mais recente (topo) ao mais antigo (base)."
          },
          {
            "prompt": "'Connection refused' indica…",
            "options": [
              "Servidor indisponível",
              "Senha errada",
              "Erro de sintaxe",
              "Bug no JS"
            ],
            "correct": 0,
            "explain": "O servidor recusou a conexão."
          }
        ]
      },
      {
        "id": "l5",
        "title": "Commits e Pull Requests em inglês",
        "summary": "Como escrever mensagens que o time entende.",
        "content": "<h2>Introdução</h2>\n    <p>Commits ideais usam o modo imperativo em inglês: 'Add login form', 'Fix typo in header', 'Refactor user service'.</p>\n    <p>Prefixos populares: feat, fix, chore, docs, test, refactor, style. Ex: 'fix: handle null in login callback'.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Use imperativo: 'Add' não 'Added'.</li><li>Prefixo indica tipo da mudança.</li><li>Descrição explica motivação.</li><li>Linke issues: 'Closes #123'.</li></ul>\n    <p>Título curto (≤50 caracteres), descrição no corpo se necessário. Evite 'update' genérico.</p>\n    <h2>Exemplo prático</h2><pre><code>git commit -m \"fix: prevent double submit on login form\"</code></pre>\n    <h2>Dicas e armadilhas</h2><p>PRs: título no mesmo estilo; descrição com 'What', 'Why' e 'How to test'.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Comunique como se estivesse falando com um colega estrangeiro — simples e direto.</div>",
        "quiz": [
          {
            "prompt": "Qual commit está no padrão correto?",
            "options": [
              "'Updated stuff'",
              "'feat: add dark mode toggle'",
              "'bug fix'",
              "'aaa'"
            ],
            "correct": 1,
            "explain": "Imperativo + prefixo + objetivo claro."
          },
          {
            "prompt": "Melhor título de PR?",
            "options": [
              "'Fixes!!'",
              "'feat: add password reset flow'",
              "'new stuff'",
              "'wip'"
            ],
            "correct": 1,
            "explain": "Conciso e informativo."
          },
          {
            "prompt": "'Closes #42' no PR serve para…",
            "options": [
              "Atrapalhar CI",
              "Fechar automaticamente a issue #42 ao mergear",
              "Nada",
              "Spam"
            ],
            "correct": 1,
            "explain": "Integração padrão do GitHub."
          }
        ]
      },
      {
        "id": "l6",
        "title": "Daily meetings em inglês",
        "summary": "Três frases que te salvam em toda daily.",
        "content": "<h2>Introdução</h2>\n    <p>Daily de dev segue sempre o mesmo roteiro: Yesterday / Today / Blockers. Monte três frases modelo e reuse.</p>\n    <p>Yesterday I finished the login API / Today I will work on the user dashboard / No blockers.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Yesterday = o que fez ontem.</li><li>Today = o que fará hoje.</li><li>Blockers = o que está te impedindo.</li><li>Escreva seu roteiro antes da call.</li></ul>\n    <p>Usar frases curtas é profissional — até nativos não fazem discurso em daily.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Evite frases como 'I was doing…', que soam sem fim. Prefira 'I finished…', 'I'm working on…', 'I'll start…'.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Três frases e você sobrevive a qualquer daily.</div>",
        "quiz": [
          {
            "prompt": "Qual a estrutura padrão da daily?",
            "options": [
              "Improviso",
              "Yesterday / Today / Blockers",
              "Blame",
              "Testing steps"
            ],
            "correct": 1,
            "explain": "É o formato universal de stand-up."
          },
          {
            "prompt": "'Blockers' são…",
            "options": [
              "Músicas",
              "Obstáculos que te travam",
              "Apps",
              "Pull Requests"
            ],
            "correct": 1,
            "explain": "Coisas que impedem o progresso."
          },
          {
            "prompt": "Qual frase é mais profissional?",
            "options": [
              "'I did some stuff'",
              "'Yesterday I finished the login API'",
              "'Não sei'",
              "'Random things'"
            ],
            "correct": 1,
            "explain": "Específica e objetiva."
          }
        ]
      },
      {
        "id": "l7",
        "title": "Entrevistas técnicas em inglês",
        "summary": "Framework STAR + respostas para perguntas comuns.",
        "content": "<h2>Introdução</h2>\n    <p>Entrevistas técnicas em inglês testam comunicação tanto quanto código. Pratique 'pensar em voz alta' em inglês.</p>\n    <p>Use o método STAR: Situation, Task, Action, Result — resolve 80% das perguntas comportamentais.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>STAR = Situação + Tarefa + Ação + Resultado.</li><li>Pratique pensar em inglês com pair programming.</li><li>Use frases-âncora para ganhar tempo.</li><li>Termine sempre com 'Do you have any feedback?'</li></ul>\n    <p>Frases coringa: 'Let me think out loud…', 'To make sure I understand…', 'I'd start by…', 'My approach would be…'.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Se travar em uma palavra, use um sinônimo simples. Não pare de falar.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Treinar 10 respostas-padrão em inglês te deixa pronto para qualquer entrevista.</div>",
        "quiz": [
          {
            "prompt": "O que é STAR?",
            "options": [
              "Padrão de currículo",
              "Situação, Tarefa, Ação, Resultado",
              "Tipo de pull request",
              "Linguagem"
            ],
            "correct": 1,
            "explain": "Framework para respostas estruturadas."
          },
          {
            "prompt": "Se travar em inglês você deve…",
            "options": [
              "Parar e pedir desculpa",
              "Usar sinônimo mais simples e continuar",
              "Mudar para português",
              "Encerrar a call"
            ],
            "correct": 1,
            "explain": "Mostra flexibilidade e confiança."
          },
          {
            "prompt": "Frase boa para ganhar tempo pensando?",
            "options": [
              "'Let me think out loud'",
              "'Dunno'",
              "'Whatever'",
              "'I don't care'"
            ],
            "correct": 0,
            "explain": "Profissional e aceita."
          }
        ]
      },
      {
        "id": "l8",
        "title": "Escrita técnica — issues e docs",
        "summary": "Como redigir tickets claros.",
        "content": "<h2>Introdução</h2>\n    <p>Issues boas têm: descrição curta + passos para reproduzir + resultado esperado + ambiente.</p>\n    <p>Separar descrição em 'Steps to reproduce', 'Expected', 'Actual' vira ouro para o dev que pegar o ticket.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Include versão do software.</li><li>Inclua prints ou logs.</li><li>Use listas numeradas.</li><li>Linke issues correlatas.</li></ul>\n    <p>Para docs internos: títulos claros, listas, evitar jargão onde for possível, linkar issues relevantes.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Evite 'it doesn't work' — seja específico do erro.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Ticket bom = economia de dias no projeto.</div>",
        "quiz": [
          {
            "prompt": "Seção ESSENCIAL numa issue de bug?",
            "options": [
              "Meu humor",
              "Steps to reproduce",
              "Playlist",
              "Copyright"
            ],
            "correct": 1,
            "explain": "Sem passos, o time não reproduz."
          },
          {
            "prompt": "Por que escrever em inglês mesmo em time BR?",
            "options": [
              "Padronização internacional e futuro do projeto",
              "Só chique",
              "Obrigação",
              "Não deve"
            ],
            "correct": 0,
            "explain": "Abre portas se o projeto virar OSS."
          },
          {
            "prompt": "'Actual behavior' é…",
            "options": [
              "Código novo",
              "O que realmente aconteceu",
              "Expectativa",
              "Design"
            ],
            "correct": 1,
            "explain": "Contrasta com 'Expected'."
          }
        ]
      },
      {
        "id": "l9",
        "title": "Revisão de PR em inglês",
        "summary": "Comentários educados que ajudam o time.",
        "content": "<h2>Introdução</h2>\n    <p>Code review em inglês pede tom construtivo. Use 'Could we…', 'What do you think about…', 'Consider…'.</p>\n    <p>Evite 'This is wrong' — prefira 'Have we considered edge case X?'. O objetivo é melhorar o código, não destacar culpa.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>LGTM significa aprovado.</li><li>Nit/minor = observação não-bloqueante.</li><li>Comentários devem apontar solução, não só problema.</li><li>Use emojis para tom amigável (🙏, ✅, 🎉).</li></ul>\n    <p>Quando o PR está ok, só escreva 'LGTM' (Looks Good To Me) — economia de tempo do time.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Frases úteis: 'Nice refactor!', 'Could you add a test for this?', 'Minor: typo in comment'.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Review com respeito = cultura de engenharia forte.</div>",
        "quiz": [
          {
            "prompt": "LGTM significa…",
            "options": [
              "Faltou teste",
              "Looks Good To Me",
              "Let's Get This Moving",
              "Nada"
            ],
            "correct": 1,
            "explain": "Aprovação comum no review."
          },
          {
            "prompt": "Bom comentário de review:",
            "options": [
              "'This sucks'",
              "'Could we add a test for this edge case?'",
              "'Why?'",
              "'Ok'"
            ],
            "correct": 1,
            "explain": "Específico e com caminho para melhora."
          },
          {
            "prompt": "'Nit' em code review significa…",
            "options": [
              "Crítica séria",
              "Observação não-bloqueante",
              "Bug crítico",
              "Erro de build"
            ],
            "correct": 1,
            "explain": "De 'nitpicking', detalhes pequenos."
          }
        ]
      },
      {
        "id": "l10",
        "title": "Ler código open source em inglês",
        "summary": "Estratégia para navegar em repositórios grandes.",
        "content": "<h2>Introdução</h2>\n    <p>Todo repositório em inglês tem README, CONTRIBUTING, ARCHITECTURE. Leia nessa ordem para entender o projeto.</p>\n    <p>Use o GitHub Code Search para achar 'how is X used?'. Busca global é melhor que ctrl+F local.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>README = entrada do projeto.</li><li>CONTRIBUTING = como contribuir.</li><li>issues antigas = memória do projeto.</li><li>Debugger local > leitura passiva.</li></ul>\n    <p>Estude PRs históricos — é como o time pensa. Issues antigas mostram decisões de design.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Não tente ler tudo. Foque no módulo que você quer mexer ou entender.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Contribuir pra OSS em inglês é um turbo na carreira.</div>",
        "quiz": [
          {
            "prompt": "Primeiro arquivo para ler em repo OSS?",
            "options": [
              "index.html",
              "README",
              "node_modules",
              "LICENSE"
            ],
            "correct": 1,
            "explain": "README mostra o quadro geral."
          },
          {
            "prompt": "Como navegar projeto grande?",
            "options": [
              "Ler tudo linha por linha",
              "Seguir um fluxo real de feature",
              "Só ler nome de pasta",
              "Ignorar e chutar"
            ],
            "correct": 1,
            "explain": "Rastreie uma feature de ponta a ponta."
          },
          {
            "prompt": "CONTRIBUTING.md mostra…",
            "options": [
              "API",
              "Como contribuir com o projeto",
              "Patrocinadores",
              "Histórico"
            ],
            "correct": 1,
            "explain": "Documento padrão para contribuidores."
          }
        ]
      },
      {
        "id": "l11",
        "title": "Slack / Teams — comunicação assíncrona",
        "summary": "Mensagens que respeitam o tempo do time.",
        "content": "<h2>Introdução</h2>\n    <p>Evite 'Oi, posso perguntar uma coisa?'. Escreva a pergunta inteira logo — economiza 1 ida e volta.</p>\n    <p>Use threads para não poluir canal. Thread bom começa com contexto + pergunta específica.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>EOD = End Of Day.</li><li>ETA = Estimated Time of Arrival.</li><li>FYI = For Your Information.</li><li>Threads antes de DM direto.</li></ul>\n    <p>Templates úteis: 'Hey! Could someone help with [problem]? I tried [attempt]. Getting [error]. Ideas?'.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Respostas curtas são profissionais. 'Sure, will do by EOD' resolve.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Assincronismo bem feito economiza meetings.</div>",
        "quiz": [
          {
            "prompt": "Evite mandar…",
            "options": [
              "'Hi' sozinho esperando resposta",
              "Mensagens longas",
              "Threads",
              "FYI"
            ],
            "correct": 0,
            "explain": "Não queime o tempo do colega pedindo permissão para falar."
          },
          {
            "prompt": "'EOD' significa…",
            "options": [
              "End Of Day",
              "Everyone On Duty",
              "End On Deploy",
              "Nada"
            ],
            "correct": 0,
            "explain": "Fim do dia útil."
          },
          {
            "prompt": "Por que usar thread?",
            "options": [
              "Enfeitar canal",
              "Manter contexto da conversa",
              "Obrigação",
              "Não deve"
            ],
            "correct": 1,
            "explain": "Threads evitam ruído no canal."
          }
        ]
      },
      {
        "id": "l12",
        "title": "Anotações e revisão",
        "summary": "Como continuar evoluindo o inglês depois do curso.",
        "content": "<h2>Introdução</h2>\n    <p>Crie um caderno (físico ou Notion) só para termos técnicos novos. Revisite 1x por semana.</p>\n    <p>Consuma mídia técnica em inglês — podcasts (Syntax, Changelog), canais (Fireship, Web Dev Simplified).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Caderno pessoal de termos.</li><li>Podcasts técnicos curtos (15min).</li><li>Escrever força estruturar pensamento.</li><li>Pouco, constante > muito, esporádico.</li></ul>\n    <p>Escreva um post por mês em inglês sobre algo que aprendeu — até 200 palavras servem.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Contribua em uma issue OSS em inglês por mês. Pouco, constante, rende.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Resumo: leitura diária + escrita mensal + vocabulário curado = fluência técnica em 6 meses.</div>",
        "quiz": [
          {
            "prompt": "Qual hábito rende mais?",
            "options": [
              "Maratonar 8h uma vez",
              "15 min por dia de leitura técnica",
              "Só ver filmes",
              "Só falar"
            ],
            "correct": 1,
            "explain": "Consistência é o multiplicador."
          },
          {
            "prompt": "Escrever em inglês serve para…",
            "options": [
              "Nada",
              "Forçar estrutura do pensamento",
              "Só Instagram",
              "Só CV"
            ],
            "correct": 1,
            "explain": "Escrever consolida vocabulário."
          },
          {
            "prompt": "Contribuir em OSS em inglês…",
            "options": [
              "Não ajuda",
              "Melhora currículo e prática",
              "Exige C2",
              "Só VIP"
            ],
            "correct": 1,
            "explain": "Ambiente real de treino."
          }
        ]
      }
    ]
  },
  {
    "id": "carreira-primeiro-emprego",
    "title": "Primeiro Emprego em Tech",
    "subtitle": "De dev iniciante a primeira vaga — passo a passo",
    "description": "O roteiro completo para conquistar sua primeira vaga em tech: portfólio, LinkedIn, GitHub, entrevistas e soft skills. Feito por quem contrata no mercado brasileiro.",
    "tagline": "Pare de estudar infinitamente e comece a se candidatar com estratégia.",
    "vip": false,
    "instructor": "Equipe Devstart",
    "level": "Iniciante",
    "duration": "4h30",
    "emoji": "🚀",
    "lessons": [
      {
        "id": "l1",
        "title": "Mapeando o mercado brasileiro",
        "summary": "Onde estão as vagas e por quê.",
        "content": "<h2>Introdução</h2>\n    <p>O mercado BR tem 3 centros principais: SP/capital + interior (produto digital), Remoto nacional (startups e consultorias), e Remoto internacional PJ (dólar).</p>\n    <p>Vagas júnior têm concorrência alta — diferencial não é só conhecimento, é aparição (GitHub, LinkedIn, posts).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Plataformas: Gupy, Vagas.com, LinkedIn, TrampaDev.</li><li>Comunidades: Discord Devstart, Slack de techs.</li><li>Indicação vale ouro — participe de eventos.</li><li>Salário junior BR: R$2.5k–R$6k CLT em 2025.</li></ul>\n    <p>Canais: LinkedIn (70% das vagas), plataformas (Gupy, Vagas, TrampaDev), Discord, Twitter e indicação (quase metade dos hires).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: ficar 'se preparando' 18 meses antes de aplicar. Aplique cedo, aprenda com as rejeições.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Mapa + disciplina = emprego em 3–6 meses.</div>",
        "quiz": [
          {
            "prompt": "Quantos % das vagas estão no LinkedIn?",
            "options": [
              "10%",
              "30%",
              "70%",
              "100%"
            ],
            "correct": 2,
            "explain": "É o maior canal público."
          },
          {
            "prompt": "Indicação vale mais que currículo?",
            "options": [
              "Não",
              "Sim — muitos hires vêm de indicação",
              "Só no exterior",
              "Só em VIP"
            ],
            "correct": 1,
            "explain": "Time confia em quem já conhece."
          },
          {
            "prompt": "Erro comum de iniciante?",
            "options": [
              "Se candidatar cedo",
              "Estudar 18 meses antes de aplicar",
              "Participar de comunidade",
              "Escrever no LinkedIn"
            ],
            "correct": 1,
            "explain": "Paralisia por perfeição."
          }
        ]
      },
      {
        "id": "l2",
        "title": "Construindo portfólio com 3 projetos",
        "summary": "Quais projetos contam de verdade.",
        "content": "<h2>Introdução</h2>\n    <p>Recrutador não olha 20 projetos — olha 3 bem feitos. Qualidade > quantidade.</p>\n    <p>Combinação vencedora: 1 projeto frontend (dashboard ou landing SaaS), 1 fullstack (CRUD real com auth) e 1 curador (clone melhorado de algo conhecido).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Cada projeto com deploy ao vivo.</li><li>README com screenshots e stack.</li><li>Mostre dor real resolvida.</li><li>Código limpo importa mais que recursos.</li></ul>\n    <p>README bem feito é 50% do impacto: screenshots, stack, como rodar, demo ao vivo.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Evite: 'todo app', 'calculadora simples', 'clone do Trello sem deploy'. Tudo o recrutador já viu.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> 3 projetos bons > 20 médios. Sempre.</div>",
        "quiz": [
          {
            "prompt": "Quantos projetos ter no portfolio?",
            "options": [
              "1",
              "3 bem feitos",
              "20 médios",
              "50"
            ],
            "correct": 1,
            "explain": "Foque em qualidade."
          },
          {
            "prompt": "Em cada projeto NÃO pode faltar…",
            "options": [
              "README + deploy",
              "Fundo animado",
              "Música",
              "Chatbot"
            ],
            "correct": 0,
            "explain": "Sem rodar, não conta."
          },
          {
            "prompt": "Projeto mais valioso?",
            "options": [
              "Calculadora",
              "Fullstack com auth e CRUD real",
              "Portfólio sem deploy",
              "Hello world"
            ],
            "correct": 1,
            "explain": "Mostra domínio de ponta a ponta."
          }
        ]
      },
      {
        "id": "l3",
        "title": "LinkedIn que atrai recrutador",
        "summary": "Sua vitrine principal.",
        "content": "<h2>Introdução</h2>\n    <p>LinkedIn é vendas — seu perfil precisa converter em 8 segundos. Foto + manchete + resumo + 2 projetos fixos.</p>\n    <p>Manchete não é cargo — é posicionamento. Ex: 'Dev Fullstack júnior | React + Node | Buscando primeira oportunidade em produto digital'.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Foto profissional em cor sólida.</li><li>Palavras-chave em skills.</li><li>Experiências incluem projetos pessoais.</li><li>Peça recomendações a colegas e professores.</li></ul>\n    <p>Resumo: conte história curta (o que você sabe fazer, o que busca, link pro portfólio).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Poste 1x por semana: projeto que terminou, aula, desafio vencido. Consistência domina o algoritmo.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Perfil forte destrava indicações.</div>",
        "quiz": [
          {
            "prompt": "Manchete do LinkedIn deve…",
            "options": [
              "Ter seu cargo atual",
              "Posicionar você para onde quer ir",
              "Ser vazia",
              "Ser sua cidade"
            ],
            "correct": 1,
            "explain": "Manchete é pitch de 200 caracteres."
          },
          {
            "prompt": "Qual frequência de posts?",
            "options": [
              "Diária",
              "1x/semana é ótimo",
              "1x/ano",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Consistência > volume."
          },
          {
            "prompt": "Recomendações valem…",
            "options": [
              "Nada",
              "Muito — prova social real",
              "Só de familiares",
              "Só em VIP"
            ],
            "correct": 1,
            "explain": "Terceiros falando por você geram confiança."
          }
        ]
      },
      {
        "id": "l4",
        "title": "GitHub profissional",
        "summary": "Seu repositório é seu currículo de verdade.",
        "content": "<h2>Introdução</h2>\n    <p>Recrutador abre GitHub antes da entrevista. Repositórios sem README são descartados em 5 segundos.</p>\n    <p>Fixe 4–6 projetos com README caprichado. O restante fica oculto — não polui.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Use pinned repos estrategicamente.</li><li>Commits espalhados mostram constância.</li><li>Traduza README em inglês se possível.</li><li>Profile README vira portfolio landing.</li></ul>\n    <p>Contribua pelo menos no README, docs ou issues de projetos abertos. 'Contribuidor OSS' pesa no CV.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Perfil README: foto, stack, projetos em destaque, como contatar. Existe `username/username` repo para isso.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> GitHub limpo = credibilidade instantânea.</div>",
        "quiz": [
          {
            "prompt": "Onde o recrutador vai primeiro?",
            "options": [
              "YouTube",
              "GitHub do candidato",
              "TikTok",
              "CPF"
            ],
            "correct": 1,
            "explain": "É a pasta real do dev."
          },
          {
            "prompt": "O que fazer com repos sem valor?",
            "options": [
              "Excluir ou privar",
              "Deixar visíveis",
              "Tudo pinned",
              "Stars em tudo"
            ],
            "correct": 0,
            "explain": "Menos poluição = mais foco."
          },
          {
            "prompt": "Contribuir em OSS é útil porque…",
            "options": [
              "Mostra domínio colaborativo",
              "Dá likes",
              "Pesa na Receita",
              "Nada"
            ],
            "correct": 0,
            "explain": "Sinal forte de maturidade."
          }
        ]
      },
      {
        "id": "l5",
        "title": "Currículo técnico perfeito",
        "summary": "Uma página, zero firula.",
        "content": "<h2>Introdução</h2>\n    <p>Currículo junior ideal: 1 página, fontes padrão, cabeçalho simples, projetos antes de experiência se ainda não tem emprego.</p>\n    <p>Estrutura: Cabeçalho (nome + links) → Objetivo curto → Skills técnicos → Projetos → Formação.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>1 página vence 3 páginas.</li><li>ATS-friendly: sem colunas complicadas.</li><li>Verbos fortes: 'desenvolvi', 'implementei'.</li><li>Ordem: relevância > cronologia.</li></ul>\n    <p>Cada projeto com 1 linha de descrição + 1 linha de 'impacto/tecnologias usadas'. Nada de prosa longa.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Evite fotos (exceto se exigido), tabelas decorativas e templates 'criativos' que ATS não lê.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> PDF, nome 'Seu-Nome-Dev-Fullstack.pdf' e pronto.</div>",
        "quiz": [
          {
            "prompt": "Tamanho ideal do CV junior?",
            "options": [
              "1 página",
              "3 páginas",
              "5 páginas",
              "10 páginas"
            ],
            "correct": 0,
            "explain": "Recrutador dedica 30s."
          },
          {
            "prompt": "Por que evitar tabelas decorativas?",
            "options": [
              "Ficam feias",
              "ATS pode não processar",
              "Só VIP",
              "Nenhum motivo"
            ],
            "correct": 1,
            "explain": "Muitos sistemas recusam."
          },
          {
            "prompt": "O que mandar como extensão?",
            "options": [
              "PDF",
              "DOCX",
              "HTML",
              "PNG"
            ],
            "correct": 0,
            "explain": "Preserva formatação."
          }
        ]
      },
      {
        "id": "l6",
        "title": "Entrevista técnica — aquecimento",
        "summary": "O que cai e como se preparar.",
        "content": "<h2>Introdução</h2>\n    <p>Entrevista técnica junior costuma ter 3 partes: bate-papo + desafio técnico + caso comportamental.</p>\n    <p>Código ao vivo: problemas simples (reverse string, soma de array, fizz buzz). Fale em voz alta.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>LeetCode easy é suficiente para junior.</li><li>Fale em voz alta — mostra raciocínio.</li><li>Limpe código antes de entregar.</li><li>Pergunte escopo antes de codar.</li></ul>\n    <p>Estude: estruturas básicas (array, map, set), complexidade Big-O mental, debugging.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Treine com mockinterview em voz alta — gravar e ouvir acelera muito.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Aquecer 2 semanas com 1 problema/dia de LeetCode easy resolve 80% dos casos.</div>",
        "quiz": [
          {
            "prompt": "Primeiro movimento ao receber um problema?",
            "options": [
              "Codar direto",
              "Perguntar escopo e exemplos",
              "Ficar em silêncio",
              "Abandonar"
            ],
            "correct": 1,
            "explain": "Mostra seniority."
          },
          {
            "prompt": "Big-O serve para…",
            "options": [
              "Decorar",
              "Entender custo do algoritmo",
              "SEO",
              "Nada"
            ],
            "correct": 1,
            "explain": "Complexidade é linguagem comum."
          },
          {
            "prompt": "LeetCode easy/medium é…",
            "options": [
              "Insuficiente",
              "Base realista para junior",
              "Para sênior",
              "Ilegal"
            ],
            "correct": 1,
            "explain": "Cobre grande parte das entrevistas."
          }
        ]
      },
      {
        "id": "l7",
        "title": "Soft skills que decidem o hire",
        "summary": "O lado que programa menos mas vale mais.",
        "content": "<h2>Introdução</h2>\n    <p>Em empate técnico, quem tem melhor comunicação, humildade e iniciativa leva a vaga.</p>\n    <p>Comunicação: organize sua fala em estrutura 'problema → ação → resultado'.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Escute antes de responder.</li><li>Admita dúvidas sem medo.</li><li>Aja proativamente em desafios.</li><li>Pergunte sempre 'posso ajudar mais nisso?'</li></ul>\n    <p>Humildade: 'não sei, mas posso descobrir' é ouro. Pior é fingir saber.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Iniciativa: mostrar que você fez algo além do curso (projeto, post, ajudou colega).</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Soft skill virou critério eliminatório — não dá pra ignorar.</div>",
        "quiz": [
          {
            "prompt": "Em empate técnico o que decide?",
            "options": [
              "Sorte",
              "Soft skills",
              "Cor da camisa",
              "Sinal do celular"
            ],
            "correct": 1,
            "explain": "Profissionalismo pesa."
          },
          {
            "prompt": "Melhor postura sobre dúvida?",
            "options": [
              "Fingir que sabe",
              "Admitir e prometer estudar",
              "Travar",
              "Culpar ferramentas"
            ],
            "correct": 1,
            "explain": "Autenticidade gera confiança."
          },
          {
            "prompt": "Iniciativa demonstra…",
            "options": [
              "Maturidade profissional",
              "Ansiedade",
              "Falta de foco",
              "Nada"
            ],
            "correct": 0,
            "explain": "Proatividade é procurada."
          }
        ]
      },
      {
        "id": "l8",
        "title": "Desafio técnico (take-home)",
        "summary": "Entregue bem e adiante rounds.",
        "content": "<h2>Introdução</h2>\n    <p>Take-home é prova de como você entrega um projeto real — código limpo importa mais que funcionalidade extra.</p>\n    <p>Estrutura: README com passos, testes (pelo menos 3), tipagem (se aplicável), lint sem warnings.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>README com decisões de arquitetura.</li><li>Pequenos commits durante o desafio.</li><li>Teste unitário > teste e2e pra junior.</li><li>Sempre explicar trade-offs assumidos.</li></ul>\n    <p>Não use libraries obscuras 'para impressionar'. Use o básico bem feito.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Entregue 1 hora antes do prazo — parece pequeno, diferencia muito.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Mostre 3 coisas: código limpo, testes, documentação.</div>",
        "quiz": [
          {
            "prompt": "O que diferencia um take-home ótimo?",
            "options": [
              "Features extras",
              "README e código limpo",
              "Mais tempo gasto",
              "Cores vibrantes"
            ],
            "correct": 1,
            "explain": "Recrutador valoriza leitura fácil."
          },
          {
            "prompt": "Enviar cedo…",
            "options": [
              "Nada",
              "Diferencia positivamente",
              "Atrasa",
              "Não importa"
            ],
            "correct": 1,
            "explain": "Mostra organização."
          },
          {
            "prompt": "Testes para junior: foco em…",
            "options": [
              "E2E complicado",
              "Teste unitário em funções principais",
              "Integração visual",
              "0 testes"
            ],
            "correct": 1,
            "explain": "Unidade é realista."
          }
        ]
      },
      {
        "id": "l9",
        "title": "Negociar salário (iniciante)",
        "summary": "Nunca diga o primeiro número.",
        "content": "<h2>Introdução</h2>\n    <p>Primeira regra: nunca fale seu número antes do recrutador. Devolva: 'Qual a faixa dessa vaga?'.</p>\n    <p>Pesquise no Glassdoor, Levels.fyi, Matheus Sinelli, e confirme com pares antes.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Peça a faixa da vaga sempre.</li><li>Pacote total > salário bruto.</li><li>Modelo PJ: 50%+ acima do CLT.</li><li>Nunca aceite na hora; peça 24h.</li></ul>\n    <p>Negocie 1x com educação: 'baseado em pesquisa da função, minha expectativa é X, há espaço?'.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Considere pacote total: VR, plano de saúde, PLR, home office, equipamento.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Bom negociador não agride — argumenta com dados.</div>",
        "quiz": [
          {
            "prompt": "Nunca faça…",
            "options": [
              "Fazer 1 contraoferta educada",
              "Dizer o primeiro número antes do recrutador",
              "Pedir pacote completo",
              "Pesquisar mercado"
            ],
            "correct": 1,
            "explain": "Você perde poder de negociação."
          },
          {
            "prompt": "O que pesquisar antes?",
            "options": [
              "Glassdoor / Levels.fyi / pares",
              "Redes sociais aleatórias",
              "Nada",
              "Horóscopo"
            ],
            "correct": 0,
            "explain": "Dados mandam."
          },
          {
            "prompt": "PJ costuma ser quanto acima do CLT?",
            "options": [
              "10%",
              "50%+",
              "Igual",
              "Menor"
            ],
            "correct": 1,
            "explain": "Por causa dos encargos."
          }
        ]
      },
      {
        "id": "l10",
        "title": "Superando a síndrome do impostor",
        "summary": "Não é sobre você — é universal.",
        "content": "<h2>Introdução</h2>\n    <p>Quase todo dev júnior sente impostor — os seniors também. É normal, mas não deve te paralisar.</p>\n    <p>Antídoto: registre diariamente 3 coisas que aprendeu ou entregou. Evidência mata sabotagem.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Diário de vitórias ajuda muito.</li><li>Mentores externos dão perspectiva real.</li><li>Terapia > só motivação.</li><li>Saia da bolha online de 'devs perfeitos'.</li></ul>\n    <p>Compare-se apenas com o você de 6 meses atrás. Nunca com devs com 10 anos de mercado.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Se comunicar com humildade é bom; se autodesqualificar publicamente não é. Cuide das palavras.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Você está mais pronto do que pensa.</div>",
        "quiz": [
          {
            "prompt": "Síndrome do impostor é…",
            "options": [
              "Rara",
              "Quase universal",
              "Só em PJ",
              "Só em junior"
            ],
            "correct": 1,
            "explain": "Atinge quase todos, em todos os níveis."
          },
          {
            "prompt": "Antídoto prático?",
            "options": [
              "Ignorar",
              "Diário de vitórias + comparação saudável",
              "Comparar com Elon Musk",
              "Desistir"
            ],
            "correct": 1,
            "explain": "Evidências escritas curam."
          },
          {
            "prompt": "Com quem se comparar?",
            "options": [
              "Seu eu de 6 meses atrás",
              "Senior de 10 anos",
              "Influencers",
              "Amigo mais velho"
            ],
            "correct": 0,
            "explain": "Baseline realista."
          }
        ]
      },
      {
        "id": "l11",
        "title": "Onboarding no primeiro emprego",
        "summary": "Os 90 primeiros dias.",
        "content": "<h2>Introdução</h2>\n    <p>Primeiros 90 dias valem mais que os próximos 900 — são sua janela para construir reputação.</p>\n    <p>Regra dos 30/60/90: Aprender → Contribuir → Propor. Siga essa escala sem pular.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Peça buddy/mentor logo no dia 1.</li><li>Faça 1:1 semanal com líder.</li><li>Pergunte 'o que foi feedback sobre minhas entregas?'.</li><li>Documente decisões.</li></ul>\n    <p>Pergunte muito nos 30 primeiros dias; é esperado e não pega mal.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Documente o que você aprende — vira referência para próximos juniors.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Conquistar quick wins pequenos constrói confiança do time.</div>",
        "quiz": [
          {
            "prompt": "Nos primeiros 30 dias é esperado…",
            "options": [
              "Entregar features complexas",
              "Aprender e fazer perguntas",
              "Sumir",
              "Redecorar sala"
            ],
            "correct": 1,
            "explain": "Aprendizado > ego."
          },
          {
            "prompt": "Quick win é…",
            "options": [
              "Grande projeto",
              "Pequena entrega de valor rápida",
              "Festa",
              "Promoção"
            ],
            "correct": 1,
            "explain": "Ganha confiança gradual."
          },
          {
            "prompt": "Documentar o que aprendeu…",
            "options": [
              "Atrapalha",
              "Acelera time e sua memória",
              "Só serve pra junior",
              "É tempo perdido"
            ],
            "correct": 1,
            "explain": "Documentação paga juros altos."
          }
        ]
      },
      {
        "id": "l12",
        "title": "Carreira em T — evoluindo a longo prazo",
        "summary": "Vá fundo em 1 área e largo em muitas.",
        "content": "<h2>Introdução</h2>\n    <p>Seniority real tem formato em T: profundidade em 1 stack + amplitude em várias áreas correlatas.</p>\n    <p>Júnior deve escolher 1 stack principal e ficar 12 meses antes de mudar.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Cuide da saúde mental: pausa conta.</li><li>Mentores aceleram ganhos.</li><li>Troque de stack só depois de 1 ano forte.</li><li>Vá para o interior se SP te desgasta.</li></ul>\n    <p>Depois: estude adjacências (testes, arquitetura, produto, infra, pessoas) aos poucos.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Metas de 90 dias com 1 grande skill evitam ficar 'aprendendo tudo, nada de fato'.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Carreira é maratona. Fique com fome mas ache ritmo sustentável.</div>",
        "quiz": [
          {
            "prompt": "O que é carreira em T?",
            "options": [
              "Palavrão",
              "Profundidade em 1 + amplitude em várias",
              "Um framework",
              "Horário ruim"
            ],
            "correct": 1,
            "explain": "Modelo recomendado de evolução."
          },
          {
            "prompt": "Quanto tempo ficar em 1 stack antes de mudar?",
            "options": [
              "1 mês",
              "1 ano no mínimo",
              "10 anos",
              "Nunca mudar"
            ],
            "correct": 1,
            "explain": "Curva de aprendizado é alta."
          },
          {
            "prompt": "Meta de 90 dias deve ser…",
            "options": [
              "Tudo ao mesmo tempo",
              "1 skill grande e clara",
              "Só dinheiro",
              "Só fazer aulas"
            ],
            "correct": 1,
            "explain": "Foco gera progresso visível."
          }
        ]
      }
    ]
  },
  {
    "id": "testes-automatizados",
    "title": "Testes Automatizados do Zero",
    "subtitle": "Unitários, integração e e2e — com Jest, Vitest e Playwright",
    "description": "Aprenda a escrever testes que realmente protegem seu código. Do básico de TDD a testes e2e com Playwright.",
    "tagline": "Quem testa dorme tranquilo em produção.",
    "vip": false,
    "instructor": "Equipe Devstart",
    "level": "Intermediário",
    "duration": "4h",
    "emoji": "🧪",
    "lessons": [
      {
        "id": "l1",
        "title": "Por que testar? Custos e benefícios",
        "summary": "Testes são investimento, não custo.",
        "content": "<h2>Introdução</h2>\n    <p>Bugs em produção custam 10–100x mais que bugs pegos no desenvolvimento. Testes automatizados capturam 80% deles antes de ir pro ar.</p>\n    <p>Teste não é luxo — é o que permite refatorar sem medo, deploy contínuo e sono tranquilo.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Quanto mais tarde o bug aparece, mais caro.</li><li>Testes protegem refatoração.</li><li>Cobertura ≠ qualidade.</li><li>CI deve falhar se testes falharem.</li></ul>\n    <p>Pirâmide de testes: muitos unitários (rápidos), alguns de integração (médios) e poucos e2e (lentos, caros).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: perseguir 100% de cobertura. Foque em testar o que pode quebrar de verdade.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Testar bem economiza tempo em 3 meses, mesmo que pareça 'gastar mais' no início.</div>",
        "quiz": [
          {
            "prompt": "Pirâmide de testes: qual camada é mais numerosa?",
            "options": [
              "E2E",
              "Unitários",
              "Integração",
              "Nenhuma"
            ],
            "correct": 1,
            "explain": "Base da pirâmide — rápidos e específicos."
          },
          {
            "prompt": "Testes existem para…",
            "options": [
              "Bonito no CV",
              "Permitir refatoração e prevenir regressão",
              "Fazer demora",
              "Nada"
            ],
            "correct": 1,
            "explain": "Segurança de mudança."
          },
          {
            "prompt": "Cobertura 100% sempre é bom?",
            "options": [
              "Sim",
              "Não — pode esconder má qualidade",
              "Ilegal",
              "Só VIP"
            ],
            "correct": 1,
            "explain": "Foque em caminhos críticos."
          }
        ]
      },
      {
        "id": "l2",
        "title": "Unitário com Jest — hello world",
        "summary": "Primeiro teste, primeiro verde.",
        "content": "<h2>Introdução</h2>\n    <p>Teste unitário verifica 1 unidade (função/classe) isolada, sem dependências externas.</p>\n    <p>Estrutura AAA: Arrange (preparar) → Act (agir) → Assert (verificar).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>describe agrupa contextos.</li><li>it/test define caso.</li><li>expect() + matcher validam.</li><li>beforeEach reseta estado.</li></ul>\n    <p>Jest e Vitest têm sintaxe quase idêntica — o que aprende aqui serve pros dois.</p>\n    <h2>Exemplo prático</h2><pre><code>test('soma positivos', () => {\n  // Arrange\n  const a = 2, b = 3;\n  // Act\n  const r = soma(a, b);\n  // Assert\n  expect(r).toBe(5);\n});</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Regra: 1 assertion por teste (ou muito poucas). Se precisa de muitas, a unidade está grande demais.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Nome do teste deve descrever comportamento: 'soma deve retornar soma correta de dois positivos'.</div>",
        "quiz": [
          {
            "prompt": "Padrão AAA significa…",
            "options": [
              "Array Array Array",
              "Arrange Act Assert",
              "Always Add Assert",
              "Assíncrono Async Await"
            ],
            "correct": 1,
            "explain": "Estrutura clássica de testes."
          },
          {
            "prompt": "expect(x).toBe(5) verifica…",
            "options": [
              "Igualdade referencial com 5",
              "Tipo",
              "Tamanho",
              "Ordem"
            ],
            "correct": 0,
            "explain": "Compara valor/referência."
          },
          {
            "prompt": "O que NÃO é responsabilidade do unitário?",
            "options": [
              "Testar função isolada",
              "Chamar API real",
              "Validar caso de borda",
              "Ser rápido"
            ],
            "correct": 1,
            "explain": "Rede = integração/e2e."
          }
        ]
      },
      {
        "id": "l3",
        "title": "Mocks, stubs e spies",
        "summary": "Cuidado pra não testar o mock.",
        "content": "<h2>Introdução</h2>\n    <p>Mock substitui uma dependência pra isolar a unidade em teste. Útil quando há chamada de API, banco ou relógio.</p>\n    <p>Spy observa uma chamada real sem substituir. Stub retorna valor pré-definido.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Mock falso substitui completamente.</li><li>Stub devolve valor fixo.</li><li>Spy observa sem trocar.</li><li>Timers/datas mocados evitam flakes.</li></ul>\n    <p>Armadilha: mocks demais => teste inútil. Se mocka tudo, só testa o mock.</p>\n    <h2>Exemplo prático</h2><pre><code>const fetchUser = jest.fn().mockResolvedValue({ id: 1, name: 'Ana' });</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Ferramenta: jest.fn(), jest.mock(module). Vitest: vi.fn(), vi.mock(module).</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Use mocks cirurgicamente — exporte o menor possível.</div>",
        "quiz": [
          {
            "prompt": "Qual a diferença entre mock e spy?",
            "options": [
              "Nenhuma",
              "Mock substitui, spy só observa",
              "Mock só VIP",
              "Spy só em e2e"
            ],
            "correct": 1,
            "explain": "Semântica diferente."
          },
          {
            "prompt": "Mockar demais é ruim porque…",
            "options": [
              "Deixa código rápido",
              "Teste passa sem testar nada real",
              "Gera lint",
              "Só em Node"
            ],
            "correct": 1,
            "explain": "Você testa o mock, não o código."
          },
          {
            "prompt": "jest.fn() cria…",
            "options": [
              "Um arquivo",
              "Uma função mock rastreável",
              "Um objeto",
              "Um banco"
            ],
            "correct": 1,
            "explain": "Rastreia chamadas."
          }
        ]
      },
      {
        "id": "l4",
        "title": "TDD — Test Driven Development",
        "summary": "Escreva o teste primeiro, o código depois.",
        "content": "<h2>Introdução</h2>\n    <p>TDD: escreva teste que falha → escreva código mínimo para passar → refatore com testes verdes. Ciclo 'red/green/refactor'.</p>\n    <p>Benefício real: você se força a pensar na API antes da implementação.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>red = teste falha.</li><li>green = código mínimo que passa.</li><li>refactor = limpar com testes verdes.</li><li>Pular etapas quebra o valor.</li></ul>\n    <p>Não vale para tudo — UI experimental é péssimo pra TDD. Lógica de domínio é ótima.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: TDD 'purista' 100% do tempo. Use quando a lógica é complexa ou tem muitas regras.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> TDD bem aplicado dá confiança pra refatorar sem medo.</div>",
        "quiz": [
          {
            "prompt": "Ciclo do TDD é…",
            "options": [
              "Red/green/refactor",
              "Design/Code/Deploy",
              "Plan/Act",
              "Random"
            ],
            "correct": 0,
            "explain": "Disciplina clássica."
          },
          {
            "prompt": "TDD é ideal para…",
            "options": [
              "Lógica complexa e regras",
              "UI prototipada",
              "Landing page",
              "HTML estático"
            ],
            "correct": 0,
            "explain": "Onde há muito o que verificar."
          },
          {
            "prompt": "Após o green você deve…",
            "options": [
              "Parar",
              "Refatorar e rodar os testes de novo",
              "Deletar testes",
              "Ignorar"
            ],
            "correct": 1,
            "explain": "Limpeza com rede de segurança."
          }
        ]
      },
      {
        "id": "l5",
        "title": "Testes de integração",
        "summary": "Partes reais conversando entre si.",
        "content": "<h2>Introdução</h2>\n    <p>Teste de integração verifica pedaços reais do sistema trabalhando juntos — controller + repositório, serviço + DB de teste.</p>\n    <p>Geralmente usa banco em memória (SQLite/h2) ou um container Docker efêmero.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>In-memory DB acelera muito.</li><li>Isolamento por suíte evita flaky.</li><li>Seeds pequenas e controladas.</li><li>Integração real > mock de integração.</li></ul>\n    <p>Mais lento que unitário, mais rápido que e2e. Cubra os fluxos críticos (auth, pagamento, checkout).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Limpe o estado antes de cada teste — flakiness vem do estado acumulado.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> O segredo é reutilizar infraestrutura de teste entre suites.</div>",
        "quiz": [
          {
            "prompt": "Integração costuma ser…",
            "options": [
              "Mais rápida que unitário",
              "Mais lenta que unitário, mais rápida que e2e",
              "Mais lenta que e2e",
              "Sem custo"
            ],
            "correct": 1,
            "explain": "Posição intermediária na pirâmide."
          },
          {
            "prompt": "Para evitar flaky tests…",
            "options": [
              "Rodar só em CI",
              "Limpar estado entre testes",
              "Ignorar falhas",
              "Desligar internet"
            ],
            "correct": 1,
            "explain": "Estado consistente = testes estáveis."
          },
          {
            "prompt": "Banco em memória serve para…",
            "options": [
              "Produção",
              "Acelerar testes de integração",
              "Só backup",
              "Front"
            ],
            "correct": 1,
            "explain": "Velocidade e isolamento."
          }
        ]
      },
      {
        "id": "l6",
        "title": "Testes de componente React",
        "summary": "Testing Library no centro do ringue.",
        "content": "<h2>Introdução</h2>\n    <p>Regra de ouro: teste pelo comportamento do usuário, não implementação interna.</p>\n    <p>Testing Library tem API que só deixa você consultar DOM como o usuário faria — role, text, label.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>render(<App/>) monta no DOM virtual.</li><li>screen.getByRole é o preferido.</li><li>userEvent simula interação real.</li><li>Queries assíncronas: findBy*</li></ul>\n    <p>Evite querySelector com classe CSS — é frágil e não representa UX.</p>\n    <h2>Exemplo prático</h2><pre><code>import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\ntest('login chama api', async () => {\n  render(&lt;Login onSubmit={jest.fn()} />);\n  await userEvent.type(screen.getByLabelText(/usuário/i), 'ana');\n  await userEvent.click(screen.getByRole('button', {name:/entrar/i}));\n});</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Teste: renderiza, interage (click, type), verifica resultado visível.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Componente bem coberto = UX tranquila de refatorar.</div>",
        "quiz": [
          {
            "prompt": "Filosofia da Testing Library é…",
            "options": [
              "Testar implementação",
              "Testar pelo comportamento do usuário",
              "Usar querySelector",
              "Snapshot sempre"
            ],
            "correct": 1,
            "explain": "O usuário é o oráculo."
          },
          {
            "prompt": "Melhor query quando há um botão 'Entrar'?",
            "options": [
              "getByClassName",
              "getByRole + name",
              "querySelector('.btn')",
              "getByTestId sempre"
            ],
            "correct": 1,
            "explain": "Role reflete UX."
          },
          {
            "prompt": "findBy é…",
            "options": [
              "Síncrono",
              "Assíncrono e espera elemento aparecer",
              "Deprecated",
              "Só VIP"
            ],
            "correct": 1,
            "explain": "Útil para conteúdo que chega depois."
          }
        ]
      },
      {
        "id": "l7",
        "title": "Testes E2E com Playwright",
        "summary": "Navegador real, fluxos reais.",
        "content": "<h2>Introdução</h2>\n    <p>E2E simulam o usuário de verdade clicando no navegador. Servem para garantir fluxos críticos (login, pagamento).</p>\n    <p>Playwright instancia Chromium/Firefox/WebKit headless, cria contextos isolados, tira prints em falhas.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Headless rápido em CI.</li><li>Visual regressão complementar.</li><li>Gerar e gravar testes com codegen.</li><li>Rodar em paralelo é seguro.</li></ul>\n    <p>Evite e2e para tudo — eles são lentos e flakey por natureza. Cubra fluxos de ouro apenas.</p>\n    <h2>Exemplo prático</h2><pre><code>import { test, expect } from '@playwright/test';\ntest('login ok', async ({ page }) => {\n  await page.goto('/login');\n  await page.getByLabel('Usuário').fill('ana');\n  await page.getByLabel('Senha').fill('1234');\n  await page.getByRole('button', { name: 'Entrar' }).click();\n  await expect(page).toHaveURL('/painel');\n});</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Use fixtures para isolar dados entre testes.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Um e2e bem escrito é um contrato com o usuário.</div>",
        "quiz": [
          {
            "prompt": "E2E é bom para…",
            "options": [
              "Tudo",
              "Fluxos críticos do usuário",
              "Unit",
              "Schema"
            ],
            "correct": 1,
            "explain": "Golden paths."
          },
          {
            "prompt": "Playwright roda em…",
            "options": [
              "Só Chromium",
              "Chromium, Firefox e WebKit",
              "Só Node",
              "Só IE"
            ],
            "correct": 1,
            "explain": "Multi-browser moderno."
          },
          {
            "prompt": "Flaky e2e costuma ser por…",
            "options": [
              "Design bonito",
              "Estado não limpo e esperas errôneas",
              "Velocidade da rede",
              "Nada"
            ],
            "correct": 1,
            "explain": "Sincronizações falhas são comuns."
          }
        ]
      },
      {
        "id": "l8",
        "title": "Mocks de API e MSW",
        "summary": "Testes de front sem back.",
        "content": "<h2>Introdução</h2>\n    <p>MSW (Mock Service Worker) intercepta requisições e retorna respostas falsas — teste front sem depender de back.</p>\n    <p>Você define handlers por rota e controla respostas, erros, latências.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Handlers por rota: GET /users etc.</li><li>Simule latência e erro 500.</li><li>Chrome devtools detecta MSW.</li><li>Usa Service Worker no browser.</li></ul>\n    <p>Evita rede real e acelera suíte. Em produção, o MSW fica desativado automaticamente.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Combine MSW + Testing Library para front e2e curto e barato.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Front feliz testado sem backend instável.</div>",
        "quiz": [
          {
            "prompt": "MSW serve para…",
            "options": [
              "Deploy",
              "Interceptar requisições em testes",
              "Compressão",
              "Build"
            ],
            "correct": 1,
            "explain": "API fake via Service Worker."
          },
          {
            "prompt": "Simular erro com MSW é útil porque…",
            "options": [
              "Quebra código",
              "Testa resiliência do front",
              "Enfeita",
              "Só VIP"
            ],
            "correct": 1,
            "explain": "Validar estados de erro é raro mas valioso."
          },
          {
            "prompt": "MSW + Testing Library combinados…",
            "options": [
              "Dificultam",
              "Cobre frontend com rede mockada",
              "Só em Ruby",
              "Só em e2e"
            ],
            "correct": 1,
            "explain": "Stack moderno de front testing."
          }
        ]
      },
      {
        "id": "l9",
        "title": "CI/CD e testes",
        "summary": "Testes que não rodam não existem.",
        "content": "<h2>Introdução</h2>\n    <p>Teste que não roda no CI é ilusão. Toda suíte precisa rodar em cada PR e bloquear merge se falhar.</p>\n    <p>Priorize paralelização no CI. Suítes lentas destroem velocidade do time.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>GitHub Actions: workflow por job.</li><li>Cache de deps acelera roda.</li><li>Relatórios JUnit facilitam análise.</li><li>Preview deploys por PR são ouro.</li></ul>\n    <p>Integre cobertura: ferramenta como Codecov sobe comentários no PR mostrando delta.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Falhou o teste flaky? Isolar, etiquetar 'flaky' e consertar, não ignorar.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Boa disciplina de CI vira cultura de qualidade.</div>",
        "quiz": [
          {
            "prompt": "Teste fora do CI…",
            "options": [
              "É tão bom quanto",
              "Praticamente não existe",
              "É melhor",
              "Não importa"
            ],
            "correct": 1,
            "explain": "Sem garantia automatizada, perde valor."
          },
          {
            "prompt": "Flaky deve ser…",
            "options": [
              "Ignorado",
              "Isolado, etiquetado e corrigido",
              "Excluído sem análise",
              "Deixado quebrando"
            ],
            "correct": 1,
            "explain": "Proteja a saúde da suíte."
          },
          {
            "prompt": "Paralelizar testes ajuda…",
            "options": [
              "A confusão",
              "A velocidade da pipeline",
              "A quebrar tudo",
              "Nada"
            ],
            "correct": 1,
            "explain": "Essencial em times maduros."
          }
        ]
      },
      {
        "id": "l10",
        "title": "Cobertura e métricas úteis",
        "summary": "O que medir e o que ignorar.",
        "content": "<h2>Introdução</h2>\n    <p>Cobertura por linhas é o mínimo. Cobertura por branch mostra IFs não testados.</p>\n    <p>Metas realistas: 70–80% nas libs internas, 50–70% no front com UI experimental.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Istanbul/V8 coverage.</li><li>Relatórios HTML ajudam diagnosticar.</li><li>Diff-coverage em PRs.</li><li>Cobertura por tipo: linha/branch/function.</li></ul>\n    <p>Cobertura não garante qualidade — mas cobertura baixa garante problemas escondidos.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Métricas a acompanhar: tempo médio da suíte, nº de flakies por semana, delta de cobertura por PR.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Qualidade não é acidental.</div>",
        "quiz": [
          {
            "prompt": "Métrica útil além de cobertura?",
            "options": [
              "Nº de likes",
              "Tempo da suíte e flakies por semana",
              "Linhas totais",
              "Número de PRs"
            ],
            "correct": 1,
            "explain": "Saúde real da pipeline."
          },
          {
            "prompt": "Meta de cobertura razoável em libs internas?",
            "options": [
              "0–20%",
              "70–80%",
              "100% obrigatório",
              "Nenhuma"
            ],
            "correct": 1,
            "explain": "Realismo + segurança."
          },
          {
            "prompt": "Cobertura não garante…",
            "options": [
              "Nada",
              "Qualidade absoluta",
              "Existência de testes",
              "Sintaxe"
            ],
            "correct": 1,
            "explain": "Pode haver testes vazios."
          }
        ]
      },
      {
        "id": "l11",
        "title": "Refatoração segura com testes",
        "summary": "A rede debaixo do trapézio.",
        "content": "<h2>Introdução</h2>\n    <p>Refatorar = mudar código sem mudar comportamento. Testes garantem isso.</p>\n    <p>Estratégia: caracterize comportamento primeiro (teste antes de mudar), então mude sem alterar a suíte verde.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Testes caracterizadores capturam comportamento antes da mudança.</li><li>Commits pequenos por etapa.</li><li>Evite 'big bang rewrite'.</li><li>Não adicione features enquanto refatora.</li></ul>\n    <p>Evite refatorar e trocar comportamento no mesmo commit. PRs pequenos facilitam review.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Ferramentas de IDE (Rename, Extract) aliadas a testes = velocidade de refatoração alta.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Cultura de refatorar pequeno + testar sempre elimina dívida técnica.</div>",
        "quiz": [
          {
            "prompt": "Refatorar significa…",
            "options": [
              "Reescrever tudo",
              "Melhorar código sem mudar comportamento",
              "Mudar comportamento",
              "Remover testes"
            ],
            "correct": 1,
            "explain": "Mesma entrada = mesma saída."
          },
          {
            "prompt": "Quando faltar teste, o que fazer?",
            "options": [
              "Refatorar direto",
              "Criar teste caracterizador antes",
              "Pular testes",
              "Lançar em produção"
            ],
            "correct": 1,
            "explain": "Rede antes do salto."
          },
          {
            "prompt": "Evitar 'big bang' significa…",
            "options": [
              "Refatorar pedacinhos",
              "Refazer tudo de uma vez",
              "Começar do zero sempre",
              "Não refatorar nunca"
            ],
            "correct": 0,
            "explain": "Passos pequenos são seguros."
          }
        ]
      },
      {
        "id": "l12",
        "title": "Cultura de qualidade — além das ferramentas",
        "summary": "Time decide, não ferramenta.",
        "content": "<h2>Introdução</h2>\n    <p>Ferramentas caem rápido; cultura decide qualidade a longo prazo.</p>\n    <p>Pair programming e code reviews capricho geram aprendizado cruzado mais que qualquer lint.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Pair programming > treinamento solo.</li><li>Bug não é falha pessoal — é bug no processo.</li><li>Postmortem sem culpa fortalece cultura.</li><li>Métrica é conversa, não julgamento.</li></ul>\n    <p>Métricas servem ao time, não o contrário. Se começam a servir de vitrine política, ajuste.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Celebre consertos, não apenas features novas. O bug que nunca volta é vitória silenciosa.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Qualidade é efeito colateral de uma cultura que respeita o usuário e o colega.</div>",
        "quiz": [
          {
            "prompt": "Cultura > ferramenta porque…",
            "options": [
              "Cultura dura e escala",
              "Ferramenta é cara",
              "Nenhuma razão",
              "Moda"
            ],
            "correct": 0,
            "explain": "Ferramentas mudam; time fica."
          },
          {
            "prompt": "Postmortem deve ser…",
            "options": [
              "Punitivo",
              "Sem culpa, focado no sistema",
              "Secreto",
              "Irrelevante"
            ],
            "correct": 1,
            "explain": "Aprendizado sem medo."
          },
          {
            "prompt": "Métrica deve servir…",
            "options": [
              "Só chefe",
              "O time e o produto",
              "Burocracia",
              "Ninguém"
            ],
            "correct": 1,
            "explain": "É um instrumento, não fim."
          }
        ]
      }
    ]
  },
  {
    "id": "design-patterns",
    "title": "Design Patterns com Exemplos Práticos",
    "subtitle": "Padrões clássicos que aparecem no dia a dia de dev",
    "description": "Factory, Strategy, Observer, Singleton e companhia — aplicados em contextos reais de JS/TS/Python.",
    "tagline": "Padrões bem escolhidos deixam seu código legível por anos.",
    "vip": false,
    "instructor": "Equipe Devstart",
    "level": "Intermediário",
    "duration": "3h30",
    "emoji": "🧩",
    "lessons": [
      {
        "id": "l1",
        "title": "Por que estudar design patterns",
        "summary": "Nomes comuns para problemas comuns.",
        "content": "<h2>Introdução</h2>\n    <p>Design patterns são soluções recorrentes a problemas recorrentes de design de software.</p>\n    <p>Saber os nomes acelera comunicação: 'usa factory aqui' é mais curto que explicar a estrutura inteira.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Patterns vieram do livro 'GoF' (Gang of Four).</li><li>3 famílias: criação, estrutura, comportamento.</li><li>Idioms de cada linguagem variam.</li><li>Princípio SOLID complementa patterns.</li></ul>\n    <p>Patterns não são dogma — entenda o problema antes de aplicar. Pattern errado complica código.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Armadilha: aplicar patterns em tudo. Muitas vezes uma função simples resolve melhor.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Aprenda a receber os patterns quando o problema pede, não força.</div>",
        "quiz": [
          {
            "prompt": "Patterns servem para…",
            "options": [
              "Adicionar complexidade",
              "Nomear soluções comuns",
              "Otimizar BD",
              "SEO"
            ],
            "correct": 1,
            "explain": "Vocabulário compartilhado."
          },
          {
            "prompt": "GoF é referência de…",
            "options": [
              "Design patterns clássicos",
              "Segurança",
              "Rede",
              "Testes"
            ],
            "correct": 0,
            "explain": "Livro fundador."
          },
          {
            "prompt": "Pattern errado…",
            "options": [
              "Sempre ajuda",
              "Complica o código",
              "É neutro",
              "Só em frontend"
            ],
            "correct": 1,
            "explain": "Precisa casar com problema real."
          }
        ]
      },
      {
        "id": "l2",
        "title": "Factory",
        "summary": "Crie objetos sem acoplar a classes concretas.",
        "content": "<h2>Introdução</h2>\n    <p>Factory centraliza a criação de objetos, permitindo decidir o tipo em runtime.</p>\n    <p>Útil quando há várias variantes de um objeto ou quando a criação é complexa.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Factory oculta detalhes de criação.</li><li>Pode ser função, método estático ou classe dedicada.</li><li>Ideal para UI, drivers, adaptadores.</li><li>Combine com Strategy em casos avançados.</li></ul>\n    <p>Em JS/TS moderno, factory costuma ser uma função simples que retorna o objeto certo.</p>\n    <h2>Exemplo prático</h2><pre><code>function createPaymentGateway(type) {\n  if (type === 'stripe') return new StripeGateway();\n  if (type === 'paypal') return new PaypalGateway();\n  throw new Error('gateway?');\n}</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Evita new X direto espalhado pelo código, reduzindo acoplamento.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Pense em factory quando a classe depender de parâmetros/contextos variáveis.</div>",
        "quiz": [
          {
            "prompt": "Factory centraliza…",
            "options": [
              "A UI",
              "A criação de objetos",
              "O banco",
              "O deploy"
            ],
            "correct": 1,
            "explain": "Esconde detalhes de construção."
          },
          {
            "prompt": "Quando evitar factory?",
            "options": [
              "Criação simples",
              "Muitas variantes",
              "Construção complexa",
              "Parametrização"
            ],
            "correct": 0,
            "explain": "Código simples não precisa."
          },
          {
            "prompt": "Factory reduz…",
            "options": [
              "Qualidade",
              "Acoplamento com classes concretas",
              "Performance",
              "Segurança"
            ],
            "correct": 1,
            "explain": "Desacopla chamador e tipo."
          }
        ]
      },
      {
        "id": "l3",
        "title": "Singleton",
        "summary": "Uma única instância global.",
        "content": "<h2>Introdução</h2>\n    <p>Singleton garante 1 única instância da classe e a disponibiliza globalmente.</p>\n    <p>Úteis: logger, pool de conexão, config central. Mal usados: testes pioram, estado global escondido.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Prós: acesso fácil, estado compartilhado.</li><li>Contras: testes, acoplamento global.</li><li>Em Node, `require` cacheia módulo (quase singleton).</li><li>Preferir DI quando possível.</li></ul>\n    <p>Em JS, 'module' já funciona como singleton — não precisa de padrão explícito.</p>\n    <h2>Exemplo prático</h2><pre><code>class Logger {\n  static #inst;\n  static get() { return Logger.#inst ||= new Logger(); }\n  log(m){ console.log('[LOG]', m); }\n}</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Cuidado com testes: reset global é difícil; considere injeção de dependência.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Use sem medo quando a semântica pede; evite 'porque é moda'.</div>",
        "quiz": [
          {
            "prompt": "Singleton garante…",
            "options": [
              "Zero instância",
              "Uma instância",
              "Muitas",
              "Nada"
            ],
            "correct": 1,
            "explain": "Ponto único de acesso."
          },
          {
            "prompt": "Em JS, módulos funcionam como…",
            "options": [
              "Classes",
              "Singletons naturais",
              "Factory",
              "Strategy"
            ],
            "correct": 1,
            "explain": "`require` já cacheia."
          },
          {
            "prompt": "Perigo principal do Singleton?",
            "options": [
              "Performance",
              "Acoplamento e dificuldade de teste",
              "Segurança",
              "Cor"
            ],
            "correct": 1,
            "explain": "Estado global esconde dependências."
          }
        ]
      },
      {
        "id": "l4",
        "title": "Strategy",
        "summary": "Troque o algoritmo em runtime.",
        "content": "<h2>Introdução</h2>\n    <p>Strategy encapsula diferentes algoritmos sob uma mesma interface e permite trocar em runtime.</p>\n    <p>Ideal para ordenação, cálculo de frete, fórmulas fiscais, regras de desconto.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Interface comum para estratégias.</li><li>Escolha por dados/contexto.</li><li>Open/Closed: adicione nova estratégia sem mudar cliente.</li><li>Evita switch gigante.</li></ul>\n    <p>Em JS, costuma ser um objeto/função passada por parâmetro — sem herança complicada.</p>\n    <h2>Exemplo prático</h2><pre><code>function calcularFrete(pedido, estrategia) { return estrategia(pedido); }\nconst correios = p => p.peso * 10;\nconst retirada = _ => 0;\ncalcularFrete(pedido, correios);</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Evita IFs longos que crescem cada vez que aparece uma regra nova.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Combina perfeitamente com Factory para selecionar a estratégia.</div>",
        "quiz": [
          {
            "prompt": "Strategy resolve bem…",
            "options": [
              "Múltiplos algoritmos parecidos",
              "Banco de dados",
              "Criptografia",
              "DNS"
            ],
            "correct": 0,
            "explain": "Permite variação sob mesma interface."
          },
          {
            "prompt": "Benefício central?",
            "options": [
              "Hardcode",
              "Trocar algoritmo sem alterar cliente",
              "Gargalo",
              "Fim do mundo"
            ],
            "correct": 1,
            "explain": "Cliente fica estável."
          },
          {
            "prompt": "Em JS, estratégia costuma ser…",
            "options": [
              "Classe com herança",
              "Função ou objeto simples",
              "Arquivo XML",
              "CSS"
            ],
            "correct": 1,
            "explain": "JS é flexível."
          }
        ]
      },
      {
        "id": "l5",
        "title": "Observer / PubSub",
        "summary": "Notifique interessados sem acoplar.",
        "content": "<h2>Introdução</h2>\n    <p>Observer permite um objeto (subject) notificar N ouvintes (observers) quando algo muda.</p>\n    <p>Base de event emitters do Node, addEventListener do DOM e estados reativos do React.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>EventEmitter no Node.</li><li>addEventListener no browser.</li><li>RxJS leva observer a nível industrial.</li><li>Cuide de memory leaks com unsubscribe.</li></ul>\n    <p>Evita ligar diretamente produtor e consumidor — ambos dependem só da interface do evento.</p>\n    <h2>Exemplo prático</h2><pre><code>class Events {\n  #map = {};\n  on(ev,fn){ (this.#map[ev]??=[]).push(fn); }\n  emit(ev,data){ (this.#map[ev]||[]).forEach(fn=>fn(data)); }\n}</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Cuidado: memória. Remova observers quando não fizer sentido escutar mais.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> É a coluna vertebral do pensamento reativo.</div>",
        "quiz": [
          {
            "prompt": "Observer permite que…",
            "options": [
              "Tudo seja estático",
              "N objetos sejam notificados de mudanças",
              "Dados venham do banco",
              "UI só funcione"
            ],
            "correct": 1,
            "explain": "Comunicação desacoplada."
          },
          {
            "prompt": "Memory leak em Observer vem de…",
            "options": [
              "Não remover listeners quando não precisar",
              "Muito CSS",
              "Pouco RAM",
              "Banco"
            ],
            "correct": 0,
            "explain": "Sempre `off` quando sair."
          },
          {
            "prompt": "React usa observer indiretamente em…",
            "options": [
              "eventos e estados",
              "Banco",
              "Rede",
              "Nada"
            ],
            "correct": 0,
            "explain": "Toda reatividade é uma forma de observer."
          }
        ]
      },
      {
        "id": "l6",
        "title": "Adapter",
        "summary": "Faça APIs incompatíveis conversarem.",
        "content": "<h2>Introdução</h2>\n    <p>Adapter transforma a interface de um objeto em outra esperada pelo cliente.</p>\n    <p>Usa-se muito ao integrar SDKs externos ou legados sem alterar o código principal.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Traduz interfaces.</li><li>Ideal para bibliotecas externas.</li><li>Facilita trocar vendor no futuro.</li><li>Combine com Facade para simplificar.</li></ul>\n    <p>Exemplo: adapter de pagamento que padroniza chamadas do Stripe e PayPal sob mesma interface.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Em JS, geralmente é uma classe ou função embrulhando a original.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Desacopla sua regra de negócio de detalhes do fornecedor.</div>",
        "quiz": [
          {
            "prompt": "Adapter serve para…",
            "options": [
              "Criar objetos",
              "Traduzir interfaces incompatíveis",
              "Encurtar código",
              "Compressão"
            ],
            "correct": 1,
            "explain": "Ponte entre APIs."
          },
          {
            "prompt": "Bom uso?",
            "options": [
              "Integrar SDKs diferentes",
              "Só em frontend",
              "Só em DB",
              "Nada"
            ],
            "correct": 0,
            "explain": "Abstrair vendor."
          },
          {
            "prompt": "Benefício: trocar vendor…",
            "options": [
              "Sem dor por causa do adapter",
              "Sempre dói",
              "Impossível",
              "Só VIP"
            ],
            "correct": 0,
            "explain": "Mudanças locais."
          }
        ]
      },
      {
        "id": "l7",
        "title": "Decorator",
        "summary": "Adicione comportamento sem herança.",
        "content": "<h2>Introdução</h2>\n    <p>Decorator envolve um objeto adicionando responsabilidades em runtime — sem herança explícita.</p>\n    <p>Em JS, é comum via higher-order functions. Em TS, via decorators (experimental).</p>\n    <h2>Aprofundando</h2>\n    <ul><li>HOFs em JS são decorators.</li><li>Retry + timeout + cache = combinação poderosa.</li><li>Legível em pequenas doses.</li><li>Cuidado com rastreabilidade em stack traces.</li></ul>\n    <p>Exemplo: log de tempo de execução, cache, retry, telemetria ao redor de funções.</p>\n    <h2>Exemplo prático</h2><pre><code>const withLog = fn => (...args) => { console.log('call', args); return fn(...args); };</code></pre>\n    <h2>Dicas e armadilhas</h2><p>Segue Open/Closed: adiciona comportamento sem mudar função original.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Elegante quando você precisa compor pequenas capacidades.</div>",
        "quiz": [
          {
            "prompt": "Decorator…",
            "options": [
              "Substitui herança",
              "Envolve funcionalidades adicionais",
              "Remove código",
              "Compila menos"
            ],
            "correct": 1,
            "explain": "Composição > herança."
          },
          {
            "prompt": "Em JS, decorator comum é…",
            "options": [
              "HOF (higher-order function)",
              "Classe abstrata",
              "XML",
              "Env var"
            ],
            "correct": 0,
            "explain": "Funções que retornam funções."
          },
          {
            "prompt": "Desvantagem?",
            "options": [
              "Stack trace mais ruidoso",
              "Acoplamento",
              "Testes impossíveis",
              "Nada"
            ],
            "correct": 0,
            "explain": "Várias camadas podem confundir debug."
          }
        ]
      },
      {
        "id": "l8",
        "title": "Facade",
        "summary": "Uma porta única para um sistema complexo.",
        "content": "<h2>Introdução</h2>\n    <p>Facade oferece uma interface simples para um subsistema complicado.</p>\n    <p>Cliente não precisa aprender a orquestra — apenas chama a fachada.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Fachada ≠ adaptador.</li><li>Isola complexidade interna.</li><li>Testes do cliente ficam simples.</li><li>Ideal em gateways internos.</li></ul>\n    <p>Exemplo: `Pagamentos.pagar(pedido)` esconde 6 passos (validação, gateway, taxas, auditoria).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Facade é menos sobre técnica e mais sobre ergonomia.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Use para diminuir curva de aprendizado em pontos críticos do sistema.</div>",
        "quiz": [
          {
            "prompt": "Facade entrega…",
            "options": [
              "Complexidade ao cliente",
              "Interface simples",
              "Performance",
              "Segurança"
            ],
            "correct": 1,
            "explain": "Ergonomia."
          },
          {
            "prompt": "Facade difere de adapter porque…",
            "options": [
              "Adapter traduz interface, facade simplifica o conjunto",
              "São iguais",
              "Facade é teoria",
              "Adapter é UI"
            ],
            "correct": 0,
            "explain": "Problemas diferentes."
          },
          {
            "prompt": "Bom exemplo de facade?",
            "options": [
              "API de pagamento unificada",
              "CSS var",
              "HTTP",
              "Nada"
            ],
            "correct": 0,
            "explain": "Uma porta para várias engrenagens."
          }
        ]
      },
      {
        "id": "l9",
        "title": "Composite",
        "summary": "Arvores de objetos sob uma interface.",
        "content": "<h2>Introdução</h2>\n    <p>Composite permite tratar objetos individuais e compostos uniformemente através de interface comum.</p>\n    <p>Clássico: DOM, sistemas de arquivos, componentes UI.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Folha + composto sob interface comum.</li><li>React é composite embutido.</li><li>Problemas com DAGs precisam variação.</li><li>Cuidado com performance em trees gigantes.</li></ul>\n    <p>Cada 'folha' e cada 'nó' implementam a mesma operação (ex: render, size).</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Com composite você consegue operações recursivas elegantes e legíveis.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Muito usado em ferramentas de desenho, editores e árvores de categoria.</div>",
        "quiz": [
          {
            "prompt": "Composite é forte para…",
            "options": [
              "Hierarquias / árvores",
              "Plain objects",
              "Backend",
              "CSS"
            ],
            "correct": 0,
            "explain": "Nódulos e folhas."
          },
          {
            "prompt": "Exemplo clássico?",
            "options": [
              "DOM e file system",
              "String",
              "Rede",
              "SEO"
            ],
            "correct": 0,
            "explain": "Estruturas em árvore."
          },
          {
            "prompt": "React implementa composite?",
            "options": [
              "Sim, componentes",
              "Não",
              "Só VIP",
              "Só backend"
            ],
            "correct": 0,
            "explain": "Árvore de componentes."
          }
        ]
      },
      {
        "id": "l10",
        "title": "Command",
        "summary": "Encapsule ações em objetos.",
        "content": "<h2>Introdução</h2>\n    <p>Command transforma uma ação em objeto — com execução e, opcionalmente, undo.</p>\n    <p>Útil para fila de tarefas, macro, histórico de ações (editores) e comandos remotos.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Suporta undo/redo.</li><li>Facilita filas e workers.</li><li>Troca call direta por despacho.</li><li>Combine com Observer para broadcast.</li></ul>\n    <p>Separa quem dispara a ação de quem a executa.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Em JS, a ação pode ser uma função + args serializáveis.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Adiciona flexibilidade para logging, retry, agendamento.</div>",
        "quiz": [
          {
            "prompt": "Command serve para…",
            "options": [
              "Encapsular ação em objeto",
              "Criar classes",
              "Banco",
              "Deploy"
            ],
            "correct": 0,
            "explain": "Objeto representa verbo."
          },
          {
            "prompt": "Benefício notável?",
            "options": [
              "Undo/redo e fila",
              "Mais bugs",
              "Nada",
              "Menos velocidade"
            ],
            "correct": 0,
            "explain": "Histórico natural."
          },
          {
            "prompt": "Comando pode ser serializado?",
            "options": [
              "Sim, se dados forem",
              "Nunca",
              "Só em VIP",
              "Só em Java"
            ],
            "correct": 0,
            "explain": "Útil pra queues."
          }
        ]
      },
      {
        "id": "l11",
        "title": "Repository",
        "summary": "Persistência sem sujar sua regra de negócio.",
        "content": "<h2>Introdução</h2>\n    <p>Repository isola acesso a dados: seu serviço pede um objeto e o repositório sabe de onde vem (SQL, Mongo, API).</p>\n    <p>Regras de negócio ficam limpas de SQL ou chamadas HTTP específicas.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>Repo expõe métodos de domínio.</li><li>Driver de DB fica trocável.</li><li>Testar serviço = fake repo.</li><li>Combine com DTOs para desacoplar.</li></ul>\n    <p>Ajuda testes: você troca o repositório real por um fake em memória.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Em Node, repositórios são classes ou módulos com find, save, delete etc.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Pilar de Clean Architecture.</div>",
        "quiz": [
          {
            "prompt": "Repository serve para…",
            "options": [
              "Isolar persistência",
              "Criar UI",
              "SEO",
              "Build"
            ],
            "correct": 0,
            "explain": "Porta para dados."
          },
          {
            "prompt": "Benefício em testes?",
            "options": [
              "Repos reais obrigatórios",
              "Fake repo em memória",
              "Sempre DB real",
              "Nenhum"
            ],
            "correct": 1,
            "explain": "Testes rápidos."
          },
          {
            "prompt": "É base de qual arquitetura?",
            "options": [
              "Clean",
              "Sem nome",
              "Monolítica",
              "Cliente-servidor"
            ],
            "correct": 0,
            "explain": "Clean Architecture usa muito."
          }
        ]
      },
      {
        "id": "l12",
        "title": "Anti-patterns a evitar",
        "summary": "Padrões que parecem bons mas mordem.",
        "content": "<h2>Introdução</h2>\n    <p>God Object: classe que sabe tudo. Separe responsabilidades.</p>\n    <p>Spaghetti code: fluxos sem estrutura clara. Use camadas explícitas.</p>\n    <h2>Aprofundando</h2>\n    <ul><li>SRP resolve God Object.</li><li>DRY guia a abstração.</li><li>Legibilidade > cleverness.</li><li>Refatoração frequente mata débito técnico.</li></ul>\n    <p>Copy-paste programming: duplicação sem abstração. Quando ver 3, abstraia.</p>\n    \n    <h2>Dicas e armadilhas</h2><p>Magic numbers/strings: constantes espalhadas sem nome. Crie enums/constants.</p>\n    <div class=\"callout\"><strong>Resumo:</strong> Aprender antipatterns evita reinventar erros clássicos.</div>",
        "quiz": [
          {
            "prompt": "God Object é classe que…",
            "options": [
              "Faz tudo",
              "Só I/O",
              "Nada",
              "Só testes"
            ],
            "correct": 0,
            "explain": "Viola SRP."
          },
          {
            "prompt": "Quando abstrair duplicação?",
            "options": [
              "Nunca",
              "Quando aparecer 3 vezes",
              "Logo na 1ª",
              "Depois de 10"
            ],
            "correct": 1,
            "explain": "Regra do 3."
          },
          {
            "prompt": "Magic string é…",
            "options": [
              "Variável nomeada",
              "String literal espalhada sem contexto",
              "Cliente",
              "Nada"
            ],
            "correct": 1,
            "explain": "Transforme em constante."
          }
        ]
      }
    ]
  }
];
  if (typeof window !== 'undefined') {
    window.DevstartCourses = (window.DevstartCourses || []).concat(NEW_FREE);
  }
})();
