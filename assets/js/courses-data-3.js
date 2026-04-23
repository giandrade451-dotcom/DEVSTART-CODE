/* =============================================================
   Devstart UP — Novos cursos (8 Grátis + 8 VIP, 18 aulas cada)
   Todos os textos em pt-BR. Cada aula tem:
    - summary curto
    - content HTML com seções didáticas (conceito, por que importa,
      exemplo, armadilhas comuns, prática, resumo)
    - 3 a 5 questões de quiz
   ============================================================= */
(function () {
  // Helpers ---------------------------------------------------------
  const CALL = (emoji, text) => `<div class="callout"><div class="ico">${emoji}</div><p>${text}</p></div>`;
  const CODE = (s) => `<pre><code>${s.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;
  const H2 = (s) => `<h2>${s}</h2>`;
  const P = (s) => `<p>${s}</p>`;
  const UL = (arr) => `<ul>${arr.map(i => `<li>${i}</li>`).join("")}</ul>`;
  const OL = (arr) => `<ol>${arr.map(i => `<li>${i}</li>`).join("")}</ol>`;

  function L(id, title, summary, parts, quiz) {
    const content = parts.join("");
    return { id, title, summary, content, quiz };
  }
  function q(prompt, options, correct, explain) {
    return { prompt, options, correct, explain };
  }

  // Shared lesson section templates
  const intro = (text) => P(text);
  const porque = (text) => H2("Por que isso importa") + P(text);
  const comoFunciona = (parts) => H2("Como funciona") + parts;
  const exemplo = (code) => H2("Exemplo na prática") + CODE(code);
  const armadilha = (text) => CALL("⚠️", text);
  const dica = (text) => CALL("💡", text);
  const pratica = (text) => H2("Mão na massa") + P(text);
  const resumo = (bullets) => H2("Resumo") + UL(bullets);

  // ===============================================================
  // CURSO 9 — GIT & GITHUB BÁSICO (GRÁTIS)
  // ===============================================================
  const gitBasic = {
    id: "git-github-basico",
    title: "Git & GitHub Básico",
    tagline: "Versionamento de código sem medo — o fundamento de todo dev moderno.",
    description: "Entenda de uma vez por todas como Git e GitHub funcionam. Aprenda a salvar histórico, trabalhar em equipe com branches, resolver conflitos simples e publicar seu código em um repositório remoto. Sem decoreba de comandos — foco em entender o modelo mental.",
    level: "Iniciante",
    duration: "6h",
    theme: "theme-js",
    cover: "Git",
    vip: false,
    instructor: "Lucas Mendes",
    lessons: [
      L("g1-intro", "Por que versionar código",
        "O problema real que o Git resolve.",
        [
          intro("Antes do Git, times de desenvolvimento nomeavam arquivos como <code>projeto-v2-final-mesmo-CORRIGIDO.zip</code>. Parece brincadeira, mas era sério — e custava horas de retrabalho toda semana. O Git resolve esse problema permitindo que você salve snapshots do seu projeto a qualquer momento, compare versões, desfaça mudanças e trabalhe em paralelo com outras pessoas sem pisar no código umas das outras."),
          porque("Toda empresa que contrata dev exige Git. Não é ferramenta opcional — é pré-requisito para trabalhar em time, fazer deploy e contribuir para projetos open source. Mais importante: Git te dá coragem para experimentar. Se quebrou, você volta."),
          H2("Git vs GitHub"),
          P("<strong>Git</strong> é um programa que roda no seu computador. Ele guarda o histórico do projeto em uma pasta chamada <code>.git</code>. Ele funciona offline, inclusive."),
          P("<strong>GitHub</strong> é um serviço online que hospeda repositórios Git. Ele adiciona colaboração visual (issues, pull requests), CI/CD, wikis. Existem concorrentes: GitLab, Bitbucket, Codeberg."),
          dica("Pense assim: Git é o motor, GitHub é a garagem compartilhada que guarda o carro."),
          resumo([
            "Git é um sistema de controle de versão distribuído.",
            "GitHub é um serviço que hospeda repositórios Git na nuvem.",
            "Todo snapshot fica no histórico — você pode voltar a qualquer ponto.",
          ])
        ],
        [
          q("Git é…", ["Uma linguagem de programação", "Um sistema de controle de versão", "Um editor de código", "Um banco de dados"], 1, "Git versiona código; é um VCS distribuído."),
          q("GitHub é obrigatório para usar Git?", ["Sim", "Não", "Só para empresas", "Só para projetos em Python"], 1, "Git funciona localmente; GitHub é só um host remoto."),
          q("Qual pasta o Git cria para guardar o histórico?", [".git", ".svn", ".version", ".history"], 0, "A pasta oculta .git guarda tudo."),
        ]
      ),
      L("g2-install", "Instalando Git e configurando sua identidade",
        "Primeiros passos no terminal.",
        [
          intro("Antes de usar Git você precisa instalá-lo e dizer quem é você. Essa identidade vai aparecer em cada commit que você fizer."),
          H2("Instalação"),
          P("No Windows baixe em <code>git-scm.com</code>. No macOS use Homebrew (<code>brew install git</code>) ou instale o Xcode Command Line Tools. No Linux use o gerenciador da sua distro (<code>sudo apt install git</code>, <code>sudo dnf install git</code>, etc.)."),
          H2("Configurando nome e email"),
          CODE("git config --global user.name \"Seu Nome\"\ngit config --global user.email \"voce@exemplo.com\""),
          P("O <code>--global</code> faz a configuração valer para todos os seus projetos. Se quiser um email diferente num projeto específico, rode o mesmo comando sem o <code>--global</code> dentro da pasta do projeto."),
          dica("Use o mesmo email que você vai usar no GitHub. Isso liga os commits à sua foto e perfil."),
          H2("Verificando"),
          CODE("git --version\ngit config --list"),
          resumo([
            "Instale o Git antes de qualquer coisa.",
            "Configure nome e email globais.",
            "Use o email da conta do GitHub para os commits aparecerem no seu perfil.",
          ])
        ],
        [
          q("O comando <code>git config --global</code> afeta…", ["Só este projeto", "Todos os seus projetos", "Só repositórios remotos", "Só o GitHub"], 1, "Global = todos os projetos do seu usuário."),
          q("Por que usar o mesmo email do GitHub?", ["Obrigatório", "Ligar commits ao perfil", "Evitar bug", "Reduz tamanho do repo"], 1, "O GitHub liga commits ao perfil pelo email."),
          q("Qual comando mostra a versão instalada?", ["git version", "git --version", "Ambos funcionam", "git -v"], 2, "Tanto <code>git version</code> quanto <code>git --version</code> funcionam."),
        ]
      ),
      L("g3-init", "Criando seu primeiro repositório",
        "git init, status, add e commit.",
        [
          intro("Vamos criar um repositório do zero. A ideia é transformar uma pasta qualquer em um projeto Git."),
          H2("Do nada ao repositório"),
          CODE("mkdir meu-projeto\ncd meu-projeto\ngit init"),
          P("Pronto — a pasta agora tem um <code>.git</code> oculto. Tudo que você fizer aí dentro pode ser versionado."),
          H2("O ciclo básico: working → staged → committed"),
          P("O Git tem três áreas. O <strong>working directory</strong> é onde você edita os arquivos. A <strong>staging area</strong> é uma antessala onde você coloca o que quer incluir no próximo commit. O <strong>repositório</strong> (pasta .git) guarda os commits confirmados."),
          exemplo("echo \"# Meu projeto\" > README.md\ngit status            # vê o que mudou\ngit add README.md     # coloca no staging\ngit commit -m \"feat: primeiro commit com README\""),
          dica("Uma boa mensagem de commit responde: <em>o que</em> mudou e <em>por quê</em>, não <em>como</em>."),
          resumo([
            "<code>git init</code> transforma uma pasta em repositório.",
            "Ciclo: editar → <code>git add</code> → <code>git commit</code>.",
            "Commits precisam de mensagens úteis.",
          ])
        ],
        [
          q("O que <code>git add</code> faz?", ["Salva no histórico", "Coloca na staging area", "Envia ao GitHub", "Baixa do remoto"], 1, "<code>add</code> adiciona à staging area, não commita ainda."),
          q("Qual comando mostra o estado do working directory?", ["git log", "git status", "git diff", "git show"], 1, "<code>git status</code> mostra arquivos alterados, preparados, etc."),
          q("O commit é salvo em…", ["GitHub", "RAM", "Pasta .git", "Arquivo README"], 2, "Commits ficam no .git local até você fazer push."),
        ]
      ),
      L("g4-log", "Vendo o histórico",
        "git log, git show e como ler um commit.",
        [
          intro("Depois de alguns commits você vai querer ver o histórico. O <code>git log</code> te dá isso."),
          exemplo("git log                # histórico completo\ngit log --oneline      # uma linha por commit\ngit log --graph --oneline --all"),
          H2("Anatomia de um commit"),
          P("Cada commit tem um hash (ID único em SHA-1), um autor, uma data e uma mensagem. O hash é o nome real do commit — você pode usar os primeiros 7 caracteres para se referir a ele."),
          H2("Vendo o que mudou num commit específico"),
          CODE("git show a1b2c3d"),
          dica("No terminal, pressione <code>q</code> para sair do <code>git log</code> quando ele fica com a paginação aberta."),
          resumo([
            "<code>git log</code> mostra o histórico.",
            "Cada commit tem um hash único.",
            "<code>git show HASH</code> mostra o diff de um commit.",
          ])
        ],
        [
          q("O identificador único do commit é…", ["Número sequencial", "Hash SHA-1", "Data", "Mensagem"], 1, "Git usa hash SHA-1 (ou SHA-256 em novas versões)."),
          q("Como sair do git log paginado?", ["ctrl+c", "exit", "q", "esc"], 2, "Pressione q para sair do pager."),
          q("<code>git log --oneline</code> serve para…", ["Ver diffs", "Ver resumo compacto", "Rebase", "Push"], 1, "Mostra um commit por linha, bem compacto."),
        ]
      ),
      L("g5-remote", "Conectando ao GitHub",
        "Criando repositório remoto e fazendo push.",
        [
          intro("Até aqui tudo está no seu computador. Vamos subir para o GitHub para ter backup na nuvem e poder compartilhar."),
          OL([
            "Crie uma conta em <code>github.com</code>.",
            "Clique em <strong>+ → New repository</strong>.",
            "Dê um nome, escolha público ou privado, não marque 'Initialize with README' se seu projeto já tiver um.",
            "Copie a URL HTTPS ou SSH mostrada.",
          ]),
          H2("Conectando o repositório local ao remoto"),
          CODE("git remote add origin https://github.com/seu-user/seu-repo.git\ngit branch -M main\ngit push -u origin main"),
          P("<code>origin</code> é um apelido padrão para o repositório remoto principal. O <code>-u</code> marca o remote como o upstream, então depois você pode rodar só <code>git push</code>."),
          armadilha("Se você já inicializou o remoto com README, vai ter que fazer <code>git pull --rebase</code> primeiro para trazer o histórico de lá."),
          resumo([
            "Um remote é um repositório em outro lugar (geralmente GitHub).",
            "<code>origin</code> é o nome padrão do remote principal.",
            "<code>git push -u origin main</code> sobe commits e define o upstream.",
          ])
        ],
        [
          q("<code>origin</code> é…", ["Uma branch", "Um apelido para o remote", "Um arquivo", "Um commit"], 1, "É apenas um nome padrão para o remote principal."),
          q("O que o <code>-u</code> em <code>git push -u</code> faz?", ["Força o push", "Define upstream", "Usa SSH", "Ignora arquivos"], 1, "Define o remote/branch como upstream padrão."),
          q("Criar o repositório no GitHub com README e também ter commits locais causa…", ["Nada", "Histórias divergentes — precisa sincronizar", "Apaga o local", "Apaga o remoto"], 1, "Quando os dois lados têm commits diferentes, há divergência."),
        ]
      ),
      L("g6-clone-pull", "Clone, fetch e pull",
        "Trazendo código do GitHub para seu computador.",
        [
          intro("Quando você quer trabalhar em um projeto que já existe no GitHub, você clona. Quando outro dev atualiza o remoto, você traz as novidades."),
          H2("Clonando"),
          CODE("git clone https://github.com/algum-user/algum-repo.git"),
          P("Isso cria uma pasta com o projeto, já conectada ao remote <code>origin</code>. O Git traz todo o histórico, não só o último estado."),
          H2("fetch vs pull"),
          UL([
            "<code>git fetch</code> baixa commits remotos, mas não mexe nos seus arquivos.",
            "<code>git pull</code> faz <code>fetch</code> + <code>merge</code> (ou rebase), atualizando a branch.",
          ]),
          dica("Na dúvida, <code>git fetch</code> é sempre seguro. <code>pull</code> pode gerar merge inesperado."),
          resumo([
            "<code>clone</code> copia o projeto inteiro.",
            "<code>fetch</code> baixa mas não aplica.",
            "<code>pull</code> = fetch + merge.",
          ])
        ],
        [
          q("<code>git clone</code>…", ["Só baixa último commit", "Baixa todo o histórico", "Só baixa arquivos, sem git", "Move o repositório"], 1, "Clone traz o histórico completo por padrão."),
          q("<code>git fetch</code> altera seus arquivos?", ["Sim, merge automático", "Não", "Só README", "Depende"], 1, "Fetch só atualiza referências remotas, não mexe no working tree."),
          q("Qual é mais seguro para rodar diariamente?", ["pull", "fetch", "push", "reset"], 1, "Fetch é não-destrutivo."),
        ]
      ),
      L("g7-branch", "Branches — paralelismo no seu projeto",
        "Criar, trocar e listar branches.",
        [
          intro("Branch é uma linha paralela do seu código. Você cria uma branch para trabalhar numa nova feature sem mexer na versão principal (<code>main</code>)."),
          H2("Comandos essenciais"),
          CODE("git branch                     # lista branches\ngit branch nova-feature        # cria branch\ngit checkout nova-feature      # muda para ela\ngit switch -c outra-feature    # moderno: cria + troca"),
          H2("Como pensar em branches"),
          P("Imagine que o projeto é um rio. A branch <code>main</code> é o rio principal. Quando você cria uma branch nova, você cria um afluente. No fim, você pode trazer as mudanças de volta (merge) ou descartar."),
          dica("Convenção: uma branch por feature/fix. Nomes como <code>feat/login</code>, <code>fix/erro-500</code>."),
          resumo([
            "Branches permitem trabalhar em paralelo sem quebrar main.",
            "<code>git switch -c</code> é a forma moderna de criar e trocar.",
            "Nomeie bem: prefixo (feat/fix/chore) + descrição curta.",
          ])
        ],
        [
          q("Por que usar branches?", ["Reduzir tamanho do repo", "Trabalhar em paralelo sem quebrar main", "Velocidade", "Conexão"], 1, "Branches isolam trabalho em progresso."),
          q("<code>git switch -c minha-branch</code>…", ["Só cria", "Cria e troca para a branch", "Deleta branch", "Só troca"], 1, "O flag <code>-c</code> cria e já muda pra ela."),
          q("Qual é uma boa convenção?", ["feat/login", "codigo-novo", "teste1", "x"], 0, "Prefixo+descrição é o padrão do mercado."),
        ]
      ),
      L("g8-merge", "Merge — integrando branches",
        "Trazendo mudanças de volta para main.",
        [
          intro("Depois de terminar uma feature na sua branch, você junta (merge) ela na <code>main</code>."),
          exemplo("git switch main\ngit merge feat/login\ngit push origin main"),
          H2("Fast-forward vs merge commit"),
          P("Se a main não avançou enquanto você trabalhava, o Git faz <em>fast-forward</em> — só move o ponteiro. Se a main também ganhou commits, ele cria um commit especial de merge unindo as duas histórias."),
          dica("Você pode forçar um merge commit com <code>--no-ff</code> para deixar a origem da feature mais visível no histórico."),
          armadilha("Se as duas branches mexeram nas mesmas linhas, surge um <em>conflito de merge</em> — veremos na próxima aula."),
          resumo([
            "Merge integra commits de uma branch em outra.",
            "Fast-forward ocorre quando a branch de destino não avançou.",
            "Merge commit preserva o histórico de que veio de um branch.",
          ])
        ],
        [
          q("Fast-forward acontece quando…", ["Há conflitos", "Main não avançou", "Branch foi deletada", "Sem internet"], 1, "FF só é possível se main está atrás da feature."),
          q("Para forçar um commit de merge: flag…", ["--force", "--no-ff", "-m", "--squash"], 1, "<code>--no-ff</code> cria merge commit mesmo em FF."),
          q("Conflito acontece quando…", ["Duas branches mexeram nas mesmas linhas", "Internet caiu", "Branch nova", "Arquivo é grande"], 0, "Conflitos surgem em mudanças sobrepostas."),
        ]
      ),
      L("g9-conflict", "Resolvendo conflitos de merge",
        "Quando o Git precisa da sua ajuda.",
        [
          intro("Conflito de merge não é erro — é o Git pedindo sua ajuda para decidir qual versão fica. Acontece quando duas branches mudaram as mesmas linhas do mesmo arquivo."),
          H2("O marcador do conflito"),
          CODE("<<<<<<< HEAD\nversão da main\n=======\nversão da feature\n>>>>>>> feat/login"),
          P("Abra o arquivo, escolha qual texto fica (pode ser misturar as duas ou reescrever), remova os marcadores <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>."),
          H2("Finalizando"),
          CODE("git add arquivo-resolvido.js\ngit commit            # finaliza o merge"),
          dica("VS Code destaca conflitos e oferece botões \"Accept Current\" / \"Accept Incoming\" / \"Accept Both\"."),
          resumo([
            "Conflito é sinal pra você escolher o que fica.",
            "Marcadores <code>&lt;&lt;&lt;&lt;</code>/<code>====</code>/<code>&gt;&gt;&gt;&gt;</code> delimitam as versões.",
            "<code>git add</code> + <code>commit</code> fecha o merge.",
          ])
        ],
        [
          q("Conflito de merge é um…", ["Bug do Git", "Pedido para você decidir", "Falha de rede", "Erro fatal"], 1, "É o Git pedindo intervenção manual."),
          q("O que separa as versões num conflito?", ["===", "<<<<<<< HEAD, =======, >>>>>>>", "// //", "/* */"], 1, "Esses são os marcadores padrão."),
          q("Depois de editar, você…", ["git push", "git add + git commit", "git reset", "git clone"], 1, "Adicionar e commitar fecha o merge."),
        ]
      ),
      L("g10-gitignore", ".gitignore — arquivos que não devem entrar",
        "Proteja credenciais, dependências e lixo de IDE.",
        [
          intro("Nem tudo na sua pasta deve ir para o repositório. Arquivos <code>.env</code>, pasta <code>node_modules/</code>, binários, cache de IDE — tudo isso deve ficar de fora."),
          H2("Criando um .gitignore"),
          CODE(".env\nnode_modules/\ndist/\n.DS_Store\n.vscode/\n*.log"),
          P("Cada linha é um padrão. Pode usar <code>*</code> para glob, <code>!</code> para forçar inclusão."),
          armadilha("Arquivos já commitados não somem só adicionando no .gitignore. Você precisa <code>git rm --cached</code> para tirar do Git sem apagar localmente."),
          dica("Use o site <code>gitignore.io</code> ou <code>toptal.com/developers/gitignore</code> para gerar um .gitignore pronto para sua stack."),
          resumo([
            "Não commite segredos ou dependências.",
            ".gitignore evita que arquivos entrem no versionamento.",
            "Arquivos já commitados precisam de <code>git rm --cached</code>.",
          ])
        ],
        [
          q("O .gitignore serve para…", ["Deletar arquivos", "Evitar que Git rastreie certos arquivos", "Forçar push", "Ignorar commits"], 1, "É uma lista de padrões que o Git ignora."),
          q("O que você NUNCA deve commitar?", ["README.md", "package.json", ".env com senhas", "index.html"], 2, "Credenciais/segredos nunca."),
          q("Para remover arquivo já versionado sem apagar local:", ["git rm arquivo", "git rm --cached arquivo", "rm arquivo", "git ignore arquivo"], 1, "<code>--cached</code> remove só do Git."),
        ]
      ),
      L("g11-pr", "Pull Requests — review em time",
        "O fluxo profissional de entrega.",
        [
          intro("Quando você trabalha em time, ninguém dá push direto na <code>main</code>. Você cria uma branch, abre um Pull Request e alguém revisa antes de merge."),
          OL([
            "Crie uma branch para a feature (<code>git switch -c feat/xyz</code>).",
            "Faça commits pequenos e descritivos.",
            "Faça push (<code>git push -u origin feat/xyz</code>).",
            "No GitHub, clique em <strong>Compare &amp; pull request</strong>.",
            "Descreva o que mudou, peça review, espere feedback.",
            "Após aprovação, merge via botão no GitHub.",
          ]),
          H2("Boas práticas na descrição"),
          UL([
            "Diga <em>o que</em> mudou e <em>por quê</em>.",
            "Prints da UI, se houver mudança visual.",
            "Steps para testar.",
            "Links para issues relacionadas.",
          ]),
          dica("PR pequeno = PR que dá pra revisar. PR gigante ninguém lê direito."),
          resumo([
            "PR = ponto de revisão antes do merge.",
            "Commits pequenos e descritivos ajudam o review.",
            "Descrição clara acelera a aprovação.",
          ])
        ],
        [
          q("Pull Request serve para…", ["Puxar código do remoto", "Propor mudanças para review", "Atualizar branch", "Deletar arquivos"], 1, "PRs são pedidos para integrar mudanças, após revisão."),
          q("Em time saudável, quem faz push direto em main?", ["Todo mundo", "Ninguém — via PR", "Só o CEO", "O novato"], 1, "Fluxo maduro proíbe push direto em main."),
          q("Boa descrição de PR inclui:", ["Xingamentos", "O que e por quê mudou", "Código inteiro colado", "Nada"], 1, "Clareza no o que/por quê é essencial."),
        ]
      ),
      L("g12-undo", "Desfazendo mudanças com segurança",
        "checkout, restore, reset e revert.",
        [
          intro("Errar é humano. Git tem várias formas de desfazer — cada uma com consequências diferentes."),
          H2("Desfazendo edição não commitada"),
          CODE("git restore arquivo.js       # descarta mudanças no working\ngit restore --staged arquivo # tira do staging"),
          H2("Desfazendo último commit"),
          CODE("git reset --soft HEAD~1      # mantém mudanças staged\ngit reset --mixed HEAD~1     # mantém no working\ngit reset --hard HEAD~1      # PERIGO: perde tudo"),
          H2("Revertendo um commit antigo"),
          P("Se o commit já foi para o remote, não reescreva histórico. Use <code>git revert HASH</code> — ele cria um novo commit que desfaz as mudanças."),
          armadilha("Nunca rode <code>reset --hard</code> num commit já enviado ao time. Use <code>revert</code>."),
          resumo([
            "<code>restore</code>: desfaz alterações locais.",
            "<code>reset</code>: mexe no histórico local.",
            "<code>revert</code>: commit novo que anula outro — seguro em branch compartilhada.",
          ])
        ],
        [
          q("Para desfazer um commit já publicado, use:", ["git reset --hard", "git revert", "git restore", "git checkout"], 1, "<code>revert</code> preserva o histórico compartilhado."),
          q("<code>git reset --hard HEAD~1</code> é:", ["Seguro", "Perigoso — perde mudanças", "Remoto", "Inócuo"], 1, "Ele joga fora alterações não commitadas também."),
          q("<code>git restore arquivo</code> descarta:", ["O arquivo inteiro", "Alterações não commitadas", "Commits", "Branches"], 1, "Volta o arquivo ao estado do último commit."),
        ]
      ),
      L("g13-stash", "Stash — guardar rascunhos rapidamente",
        "Quando você precisa trocar de branch mas ainda não terminou.",
        [
          intro("Imagine que você está no meio de uma feature e o time pede para corrigir um bug urgente. Você não quer commitar meia-feature, e não pode perder o trabalho. É pra isso que serve o stash."),
          exemplo("git stash                    # guarda tudo pra depois\ngit switch main\n# ... corrige o bug ...\ngit switch feat/xyz\ngit stash pop                # traz de volta"),
          H2("Listando stashes"),
          CODE("git stash list\ngit stash show stash@{0}\ngit stash drop stash@{0}"),
          dica("<code>stash pop</code> remove o stash após aplicar; <code>stash apply</code> mantém."),
          resumo([
            "Stash = gaveta temporária para mudanças não commitadas.",
            "<code>pop</code> = aplica + remove; <code>apply</code> = só aplica.",
            "Use quando precisa trocar de contexto rapidamente.",
          ])
        ],
        [
          q("Stash guarda:", ["Commits", "Mudanças não commitadas", "Branches", "Remotos"], 1, "É uma gaveta de rascunhos locais."),
          q("Diferença entre pop e apply:", ["Iguais", "Pop remove o stash após aplicar", "Apply é destrutivo", "Pop é só no remote"], 1, "Pop = apply + drop."),
          q("Quando usar stash?", ["Nunca", "Para trocar de contexto sem commitar WIP", "No lugar do commit", "No deploy"], 1, "Troca de contexto rápida e limpa."),
        ]
      ),
      L("g14-tags", "Tags e releases",
        "Marcando versões importantes.",
        [
          intro("Tags são atalhos para commits específicos, geralmente usados para marcar versões: <code>v1.0</code>, <code>v2.3.1</code>. No GitHub, tags viram Releases com notas e binários."),
          exemplo("git tag v1.0                  # tag simples\ngit tag -a v1.1 -m \"Release v1.1\"  # tag anotada\ngit push origin v1.1"),
          H2("Semantic versioning"),
          P("Padrão da indústria: <code>MAJOR.MINOR.PATCH</code>. MAJOR quebra compatibilidade, MINOR adiciona features compatíveis, PATCH só corrige bugs."),
          dica("Tags anotadas (<code>-a</code>) têm mensagem, autor e data. Tags leves só apontam para o commit."),
          resumo([
            "Tags marcam commits importantes (releases).",
            "Use semver: MAJOR.MINOR.PATCH.",
            "Dê push nas tags separadamente do branch.",
          ])
        ],
        [
          q("Para marcar uma release no Git, use:", ["branch", "tag", "stash", "remote"], 1, "Tags são feitas para isso."),
          q("Semver: <code>2.0.0</code> → <code>2.1.0</code> significa:", ["Quebra compat.", "Nova feature compatível", "Só bug fix", "Nada"], 1, "Aumento de MINOR = feature compatível."),
          q("Tags são empurradas para o remote junto do push?", ["Sim", "Não, precisa <code>git push --tags</code>", "Só anotadas", "Nunca"], 1, "Por padrão, push não envia tags."),
        ]
      ),
      L("g15-collab", "Fluxo de colaboração real",
        "GitHub Flow simplificado.",
        [
          intro("Na vida real, times seguem um fluxo parecido com este — GitHub Flow:"),
          OL([
            "Atualize main: <code>git switch main && git pull</code>.",
            "Crie branch: <code>git switch -c feat/nome</code>.",
            "Commit pequenos e frequentes.",
            "Push da branch e abra PR.",
            "Review, ajustes, aprovação.",
            "Merge no GitHub.",
            "Delete a branch (local e remota).",
          ]),
          H2("Regras implícitas"),
          UL([
            "Main deve estar sempre verde (CI passando).",
            "Toda mudança passa por PR.",
            "Conversa é no PR, não em DM — fica histórico.",
          ]),
          dica("Git Flow (com develop/release/hotfix) existe, mas para maioria dos times web, GitHub Flow é suficiente."),
          resumo([
            "GitHub Flow = branch por feature + PR + merge.",
            "Main sempre deployável.",
            "Conversa técnica fica no PR.",
          ])
        ],
        [
          q("GitHub Flow é mais:", ["Complexo", "Simples", "Caro", "Lento"], 1, "GitHub Flow é bem mais simples que Git Flow."),
          q("Main deve estar:", ["Sempre estável/deployável", "Instável", "Sem testes", "Com features em progresso"], 0, "Main estável é premissa do GitHub Flow."),
          q("Depois do merge:", ["Deleta branch", "Fica pra sempre", "Vai pro trash", "Deve ser retaggeada"], 0, "Limpar branches evita bagunça."),
        ]
      ),
      L("g16-oss", "Contribuindo em projetos open source",
        "Fork, pull request e etiqueta.",
        [
          intro("Contribuir em OSS é uma forma excelente de aprender e construir portfólio. O fluxo usa um conceito novo: fork."),
          H2("Fork vs clone"),
          UL([
            "<strong>Clone</strong>: copia repo para sua máquina — não tem permissão de push se não é seu.",
            "<strong>Fork</strong>: cria cópia do repo na sua conta do GitHub — você tem push nela.",
          ]),
          H2("Fluxo padrão"),
          OL([
            "Fork do projeto original (\"upstream\").",
            "Clone o seu fork.",
            "Crie branch de feature.",
            "Commit e push na sua branch.",
            "Abra PR no repo original.",
          ]),
          dica("Leia o <code>CONTRIBUTING.md</code> antes. Alguns projetos exigem issue aberta, formato de commit específico, etc."),
          resumo([
            "Fork é cópia do repo sob seu usuário.",
            "PR segue do seu fork para o upstream.",
            "Siga o CONTRIBUTING.md do projeto.",
          ])
        ],
        [
          q("Fork é:", ["Cópia local", "Cópia do repo na sua conta GitHub", "Uma tag", "Um commit"], 1, "Fork fica no GitHub, na sua conta."),
          q("Em OSS, PR vai:", ["do seu fork para o upstream", "do upstream pro seu fork", "sem direção", "só em branch main"], 0, "Você contribui mandando do fork pro original."),
          q("Antes de contribuir:", ["Sair atirando PRs", "Ler CONTRIBUTING.md", "Mudar licença", "Forçar push em main"], 1, "Ler as regras do projeto evita retrabalho."),
        ]
      ),
      L("g17-rebase", "Rebase — uma introdução amigável",
        "Reescrevendo histórico com cuidado.",
        [
          intro("Rebase é uma alternativa ao merge. Em vez de criar um commit unindo duas histórias, ele pega os commits da sua branch e os recoloca em cima da main."),
          H2("Visualmente"),
          P("Antes: main ─A─B─C   feat ─D─E (a partir de B)"),
          P("Depois de rebase feat em main: main ─A─B─C   feat ─D'─E' (recolocados em cima de C)"),
          exemplo("git switch feat/login\ngit fetch\ngit rebase origin/main"),
          armadilha("Rebase reescreve commits (novos hashes). Nunca rebase uma branch pública compartilhada — vai quebrar o histórico de quem já puxou."),
          dica("Regra de ouro: rebase só em branch sua, antes de abrir PR. Depois do PR, só merge."),
          resumo([
            "Rebase linearisa o histórico.",
            "Reescreve hashes — cuidado com branch compartilhada.",
            "Use antes de abrir PR para histórico limpo.",
          ])
        ],
        [
          q("Rebase reescreve hashes?", ["Não", "Sim", "Só em main", "Só fora do GitHub"], 1, "Cada commit ganha novo hash ao ser recolocado."),
          q("É seguro rebase em branch pública já compartilhada?", ["Sim", "Não", "Depende do SO", "Sempre"], 1, "Quebra a história de quem puxou."),
          q("Quando usar rebase?", ["Sempre", "Em branch sua, antes do PR", "No lugar de commit", "Pra deletar arquivos"], 1, "Branch pessoal, pré-PR."),
        ]
      ),
      L("g18-tips", "Dicas finais e comandos que vão te salvar",
        "Pequenos truques que fazem diferença.",
        [
          intro("Fechando o curso, uma lista de comandos e hábitos que só veteranos sabem:"),
          UL([
            "<code>git log --oneline --graph --all</code>: visão geral do projeto.",
            "<code>git diff --cached</code>: vê o que está no staging.",
            "<code>git commit --amend</code>: conserta o último commit (só se ainda não fez push).",
            "<code>git reflog</code>: histórico de TODAS as ações — te salva de resets acidentais.",
            "Alias no <code>~/.gitconfig</code>: <code>st = status</code>, <code>co = checkout</code>, etc.",
          ]),
          H2("Hábitos"),
          OL([
            "Commit pequeno e frequente.",
            "Mensagem clara (verbo imperativo: \"adiciona\", \"corrige\", \"remove\").",
            "Pull antes de começar o dia.",
            "Delete branches antigas.",
            "Leia o <code>git status</code> antes de qualquer comando destrutivo.",
          ]),
          dica("<code>git reflog</code> é a última linha de defesa. Quase nada está realmente perdido no Git."),
          resumo([
            "Conheça reflog — seu 'Ctrl+Z' de emergência.",
            "Hábitos > comandos: commit pequenos, mensagens claras.",
            "Mantenha o repo limpo: delete branches antigas.",
          ])
        ],
        [
          q("Para recuperar algo aparentemente perdido, tente:", ["git reflog", "git clone", "git push -f", "git reset --hard"], 0, "Reflog guarda todo movimento de HEAD."),
          q("<code>git commit --amend</code> serve para:", ["Commit novo", "Editar o último commit", "Deletar", "Pull"], 1, "Amend corrige o último commit."),
          q("Melhor hábito de time:", ["Commits gigantes", "Pull antes do dia", "Push forçado sempre", "Ignorar status"], 1, "Começar o dia sincronizado evita conflitos."),
          q("Alias servem para:", ["Atalhos no terminal", "Criar branches", "Hospedar código", "Ignorar arquivos"], 0, "Aliases economizam digitação."),
        ]
      ),
    ],
  };

  // ===============================================================
  // CURSO 10 — SQL & BANCO DE DADOS INICIANTE (GRÁTIS)
  // ===============================================================
  const sqlBasic = {
    id: "sql-iniciante",
    title: "SQL & Banco de Dados Iniciante",
    tagline: "Guarde e consulte dados como um profissional.",
    description: "Tudo começa com dados. Aprenda o que é um banco de dados relacional, como pensar em tabelas, chaves e relacionamentos, e como escrever SQL legível para ler, inserir, atualizar e apagar informações com segurança.",
    level: "Iniciante",
    duration: "7h",
    theme: "theme-py",
    cover: "SQL",
    vip: false,
    instructor: "Rafaela Tavares",
    lessons: [
      L("s1-intro", "O que é um banco de dados",
        "Por que não usar planilhas pra tudo.",
        [
          intro("Banco de dados é um sistema especializado em armazenar e recuperar dados com velocidade, consistência e confiabilidade. Todo app que você usa — Instagram, Uber, iFood — tem um ou mais bancos de dados rodando por trás."),
          porque("Planilhas são lindas para dados pequenos e locais. Mas quebram quando você tem milhares de usuários simultâneos, precisa buscar com velocidade ou fazer transações complexas."),
          H2("Relacional vs NoSQL"),
          UL([
            "<strong>Relacional</strong> (PostgreSQL, MySQL, SQLite): tabelas com colunas fixas, linguagem SQL.",
            "<strong>NoSQL</strong> (MongoDB, Redis): estrutura flexível, cada base com sua API.",
          ]),
          dica("Relacional ainda é o default da indústria. Saber SQL bem te abre mais portas que qualquer banco NoSQL."),
          resumo([
            "BD é software feito para guardar e recuperar dados com eficiência.",
            "Relacional usa tabelas + SQL.",
            "NoSQL tem estrutura flexível e linguagens próprias.",
          ])
        ],
        [
          q("Planilhas são bom substituto para BD em apps grandes?", ["Sim", "Não", "Só no Excel", "Depende do PC"], 1, "Não escalam para concorrência, integridade, velocidade."),
          q("Qual NÃO é banco relacional?", ["PostgreSQL", "MongoDB", "MySQL", "SQLite"], 1, "MongoDB é NoSQL documental."),
          q("Linguagem padrão de bancos relacionais:", ["JSON", "SQL", "HTML", "XML"], 1, "SQL = Structured Query Language."),
        ]
      ),
      L("s2-tabelas", "Tabelas, colunas e linhas",
        "Modelo mental básico.",
        [
          intro("Toda tabela é uma grade: colunas são os campos (atributos), linhas são os registros (instâncias). Ex: tabela <code>usuarios</code> com colunas <code>id, nome, email, criado_em</code>."),
          H2("Tipos de coluna"),
          UL([
            "<code>INTEGER</code> / <code>BIGINT</code>: números inteiros.",
            "<code>TEXT</code> / <code>VARCHAR</code>: texto.",
            "<code>BOOLEAN</code>: true/false.",
            "<code>DATE</code>, <code>TIMESTAMP</code>: datas.",
            "<code>NUMERIC</code>: dinheiro, valores decimais com precisão.",
          ]),
          armadilha("Nunca use <code>FLOAT</code> para dinheiro — imprecisão binária causa erros de centavo. Use <code>NUMERIC(10,2)</code>."),
          dica("Padrão de nomes: tabela no plural (<code>usuarios</code>), coluna snake_case (<code>criado_em</code>)."),
          resumo([
            "Tabela = colunas (campos) + linhas (registros).",
            "Escolher tipo certo evita bugs.",
            "Dinheiro: NUMERIC, não FLOAT.",
          ])
        ],
        [
          q("Colunas são:", ["Registros", "Campos/atributos", "Bancos", "Índices"], 1, "Cada coluna é um atributo do registro."),
          q("Para guardar dinheiro, use:", ["FLOAT", "NUMERIC", "TEXT", "BOOLEAN"], 1, "Precisão exige NUMERIC."),
          q("BIGINT guarda:", ["Texto longo", "Números inteiros grandes", "JSON", "Imagens"], 1, "Ótimo para IDs que crescem muito."),
        ]
      ),
      L("s3-select", "SELECT — lendo dados",
        "O comando mais usado no mundo.",
        [
          intro("SELECT serve para buscar linhas em uma ou mais tabelas. A sintaxe básica é: <code>SELECT colunas FROM tabela</code>."),
          exemplo("SELECT * FROM usuarios;\nSELECT nome, email FROM usuarios;\nSELECT nome FROM usuarios WHERE id = 1;"),
          H2("WHERE: filtrando"),
          CODE("SELECT * FROM produtos WHERE preco > 100;\nSELECT * FROM usuarios WHERE email LIKE '%@gmail.com';"),
          H2("ORDER BY, LIMIT"),
          CODE("SELECT * FROM produtos ORDER BY preco DESC LIMIT 10;"),
          dica("Evite <code>SELECT *</code> em produção — peça só as colunas que precisa. É mais rápido e seguro."),
          resumo([
            "SELECT pega colunas de tabelas.",
            "WHERE filtra linhas.",
            "ORDER BY + LIMIT organizam e limitam resultados.",
          ])
        ],
        [
          q("Quantas colunas retorna <code>SELECT nome, email FROM u</code>?", ["Todas", "Duas", "Uma", "Zero"], 1, "Duas: nome e email."),
          q("<code>LIKE '%@gmail.com'</code> casa com:", ["Exato", "Termina com @gmail.com", "Começa com", "Contém"], 1, "% no começo = qualquer coisa antes; fixa o fim."),
          q("Para trazer só 10 resultados:", ["LIMIT 10", "TOP 10", "FIRST 10", "ONLY 10"], 0, "LIMIT em Postgres/MySQL/SQLite; TOP é SQL Server."),
        ]
      ),
      L("s4-insert-update-delete", "INSERT, UPDATE e DELETE",
        "Escrevendo no banco.",
        [
          intro("Ler é fácil. Escrever exige cuidado — todo DELETE/UPDATE sem WHERE é uma história terrível."),
          H2("INSERT"),
          CODE("INSERT INTO usuarios (nome, email) VALUES ('Ana', 'ana@ex.com');"),
          H2("UPDATE"),
          CODE("UPDATE usuarios SET nome = 'Ana Silva' WHERE id = 1;"),
          H2("DELETE"),
          CODE("DELETE FROM usuarios WHERE id = 1;"),
          armadilha("<code>DELETE FROM usuarios;</code> sem WHERE apaga TUDO. Teste num SELECT primeiro para ver o que vai atingir."),
          dica("Antes de UPDATE, rode um SELECT com o mesmo WHERE e veja o que vai mudar."),
          resumo([
            "INSERT adiciona linhas.",
            "UPDATE modifica linhas existentes.",
            "DELETE remove linhas.",
            "Sempre teste o WHERE antes.",
          ])
        ],
        [
          q("DELETE sem WHERE:", ["Não faz nada", "Apaga tudo", "Erro fatal", "Só avisa"], 1, "Apaga todas as linhas da tabela!"),
          q("Comando para atualizar uma linha:", ["SELECT", "UPDATE", "INSERT", "ALTER"], 1, "UPDATE modifica dados existentes."),
          q("Boas práticas antes de UPDATE:", ["Fechar o olho", "Rodar SELECT com mesmo WHERE", "Deletar antes", "Reiniciar banco"], 1, "Previsualizar o escopo evita desastres."),
        ]
      ),
      L("s5-keys", "Chaves primárias e estrangeiras",
        "Como ligar tabelas com integridade.",
        [
          intro("<strong>Primary Key (PK)</strong>: coluna que identifica unicamente cada linha. Normalmente um <code>id</code>. <strong>Foreign Key (FK)</strong>: coluna que referencia a PK de outra tabela, criando relacionamentos."),
          exemplo("CREATE TABLE usuarios (\n  id SERIAL PRIMARY KEY,\n  nome TEXT NOT NULL\n);\n\nCREATE TABLE pedidos (\n  id SERIAL PRIMARY KEY,\n  usuario_id INTEGER NOT NULL REFERENCES usuarios(id),\n  total NUMERIC(10,2)\n);"),
          H2("Integridade referencial"),
          P("Com FK, o banco impede você de inserir um pedido para um usuário que não existe. Também impede você de apagar um usuário com pedidos (a não ser com <code>ON DELETE CASCADE</code>)."),
          dica("Use IDs numéricos auto-incrementais para PKs. Expor UUIDs para o mundo externo também é comum."),
          resumo([
            "PK identifica a linha unicamente.",
            "FK referencia PK de outra tabela.",
            "Integridade referencial protege você.",
          ])
        ],
        [
          q("PK significa:", ["Partial Key", "Primary Key", "Public Key", "Pointer Key"], 1, "É a chave primária da tabela."),
          q("FK aponta para:", ["Outra FK", "Uma PK de outra tabela", "Nenhuma coluna", "Views"], 1, "FKs referenciam PKs."),
          q("ON DELETE CASCADE faz:", ["Erro ao deletar", "Apaga filhos junto", "Nada", "Copia linha"], 1, "Delete do pai apaga os filhos automaticamente."),
        ]
      ),
      L("s6-joins", "JOINs — combinando tabelas",
        "INNER, LEFT, RIGHT, FULL.",
        [
          intro("Dados de verdade vivem em várias tabelas. JOIN combina linhas baseado em uma condição — normalmente igualdade de chaves."),
          H2("INNER JOIN"),
          P("Retorna só linhas que casam nos dois lados."),
          CODE("SELECT u.nome, p.total\nFROM usuarios u\nINNER JOIN pedidos p ON p.usuario_id = u.id;"),
          H2("LEFT JOIN"),
          P("Retorna todas da esquerda, mesmo sem par na direita (preenche com NULL)."),
          CODE("SELECT u.nome, p.total\nFROM usuarios u\nLEFT JOIN pedidos p ON p.usuario_id = u.id;"),
          dica("Use alias (u, p) para tornar consultas legíveis."),
          resumo([
            "JOIN combina tabelas.",
            "INNER = apenas casamentos.",
            "LEFT = todas da esquerda, NULL quando não casa.",
          ])
        ],
        [
          q("INNER JOIN retorna:", ["Tudo", "Só casamentos", "Só da esquerda", "Só NULLs"], 1, "Inner = interseção."),
          q("LEFT JOIN traz:", ["Só da direita", "Tudo da esquerda + casamentos", "Nada", "Aleatório"], 1, "Preserva todas as linhas da tabela esquerda."),
          q("Alias ajudam porque:", ["Apagam tabela", "Deixam consulta legível", "São obrigatórios", "Mudam dados"], 1, "Consulta fica mais curta e clara."),
        ]
      ),
      L("s7-group", "GROUP BY e agregações",
        "COUNT, SUM, AVG, MIN, MAX.",
        [
          intro("Agregações são perguntas sobre conjuntos: quantos? quanto custou no total? qual a média? GROUP BY agrupa linhas por valor antes de agregar."),
          exemplo("SELECT usuario_id, COUNT(*) AS total_pedidos, SUM(total) AS soma\nFROM pedidos\nGROUP BY usuario_id\nHAVING SUM(total) > 1000;"),
          H2("WHERE vs HAVING"),
          UL([
            "<code>WHERE</code> filtra <em>antes</em> do agrupamento.",
            "<code>HAVING</code> filtra <em>depois</em>.",
          ]),
          dica("Use <code>AS</code> para dar nome legível ao resultado da agregação."),
          resumo([
            "Agregações respondem perguntas sobre grupos.",
            "GROUP BY define os grupos.",
            "WHERE antes, HAVING depois.",
          ])
        ],
        [
          q("Para somar coluna, use:", ["COUNT", "SUM", "AVG", "TOTAL"], 1, "SUM soma valores."),
          q("HAVING serve para:", ["Filtrar antes do group", "Filtrar depois do group", "Ordenar", "Deletar"], 1, "HAVING filtra grupos já formados."),
          q("COUNT(*) retorna:", ["Nome", "Número de linhas do grupo", "Soma", "Média"], 1, "Conta linhas."),
        ]
      ),
      L("s8-subquery", "Subqueries — consulta dentro de consulta",
        "Resolvendo perguntas complexas.",
        [
          intro("Subquery é um SELECT dentro de outro. Útil quando o resultado de uma pergunta depende de outra."),
          exemplo("SELECT nome FROM usuarios\nWHERE id IN (SELECT usuario_id FROM pedidos WHERE total > 500);"),
          H2("Alternativas"),
          P("Muitas subqueries podem virar JOIN mais eficiente. Mas subqueries são mais legíveis em perguntas do tipo \"quem tem pelo menos um pedido grande\"."),
          dica("Se a subquery rodar pra cada linha do SELECT externo, considere JOIN — geralmente é mais rápido."),
          resumo([
            "Subquery = consulta aninhada.",
            "Legibilidade ganha em algumas perguntas.",
            "JOIN pode ser mais performático.",
          ])
        ],
        [
          q("Subquery está dentro de:", ["Nada", "Outra consulta", "Banco externo", "Função"], 1, "É consulta dentro de outra."),
          q("IN (SELECT ...) checa se:", ["É igual", "Valor está no conjunto retornado", "É null", "É unique"], 1, "Testa pertinência."),
          q("Alternativa comum à subquery:", ["DROP", "JOIN", "CREATE", "TRUNCATE"], 1, "JOINs frequentemente substituem subqueries."),
        ]
      ),
      L("s9-indexes", "Índices — performance básica",
        "Por que sua query pode ser lenta.",
        [
          intro("Índice é uma estrutura de dados que o banco mantém para acelerar buscas. Sem índice, pesquisar uma linha específica em milhões exige varrer a tabela inteira."),
          exemplo("CREATE INDEX idx_pedidos_usuario ON pedidos(usuario_id);"),
          H2("Quando criar índice"),
          UL([
            "Colunas usadas em <code>WHERE</code> frequentemente.",
            "Colunas de JOIN (FKs normalmente indexadas por padrão).",
            "Colunas em <code>ORDER BY</code> com muito dado.",
          ]),
          armadilha("Cada índice deixa INSERT/UPDATE mais lento e ocupa disco. Não crie índice para tudo."),
          resumo([
            "Índice acelera leitura.",
            "Custa em escrita e disco.",
            "Use em colunas filtradas/joinadas frequentemente.",
          ])
        ],
        [
          q("Sem índice, a busca:", ["É instantânea", "Varre a tabela inteira (full scan)", "Dá erro", "Aleatória"], 1, "É linear no tamanho da tabela."),
          q("Índice deixa INSERT:", ["Mais rápido", "Mais lento", "Igual", "Aleatório"], 1, "Precisa atualizar a estrutura de índice também."),
          q("Onde índices ajudam mais?", ["ORDER BY sem filtro", "WHERE com coluna muito consultada", "Print", "DROP"], 1, "WHERE é o caso clássico."),
        ]
      ),
      L("s10-transactions", "Transações — tudo ou nada",
        "BEGIN, COMMIT, ROLLBACK.",
        [
          intro("Transação é um bloco de operações que rodam como uma unidade atômica: ou todas funcionam, ou nada muda. Crucial para operações que dependem umas das outras (ex: transferência bancária)."),
          exemplo("BEGIN;\nUPDATE contas SET saldo = saldo - 100 WHERE id = 1;\nUPDATE contas SET saldo = saldo + 100 WHERE id = 2;\nCOMMIT;\n-- Em caso de erro: ROLLBACK;"),
          H2("Propriedades ACID"),
          UL([
            "<strong>A</strong>tomicidade: tudo ou nada.",
            "<strong>C</strong>onsistência: nunca viola regras.",
            "<strong>I</strong>solamento: transações não se atrapalham.",
            "<strong>D</strong>urabilidade: commit sobrevive a crash.",
          ]),
          resumo([
            "Transações garantem atomicidade.",
            "COMMIT confirma, ROLLBACK cancela.",
            "ACID define garantias.",
          ])
        ],
        [
          q("ACID inclui:", ["Atomicidade", "Concordância", "Ajuste", "Alta"], 0, "Atomicidade é o A."),
          q("Se um UPDATE falha no meio da transação:", ["Faz metade", "Rollback leva tudo ao estado inicial", "Commit automático", "Corrompe"], 1, "Rollback garante a atomicidade."),
          q("Comando para confirmar a transação:", ["COMMIT", "END", "FINISH", "APPLY"], 0, "COMMIT persiste as mudanças."),
        ]
      ),
      L("s11-constraints", "Constraints — regras que protegem os dados",
        "NOT NULL, UNIQUE, CHECK, DEFAULT.",
        [
          intro("Constraint é uma regra de negócio imposta pelo banco. Melhor deixar o banco proteger do que confiar na aplicação."),
          exemplo("CREATE TABLE usuarios (\n  id SERIAL PRIMARY KEY,\n  email TEXT NOT NULL UNIQUE,\n  idade INTEGER CHECK (idade >= 0),\n  ativo BOOLEAN NOT NULL DEFAULT true\n);"),
          UL([
            "<code>NOT NULL</code>: campo não pode ficar vazio.",
            "<code>UNIQUE</code>: não pode repetir.",
            "<code>CHECK</code>: condição arbitrária.",
            "<code>DEFAULT</code>: valor padrão se não informado.",
          ]),
          dica("Constraints viram sua defesa quando o código tem bug."),
          resumo([
            "Constraints protegem os dados.",
            "Defina as regras no banco, não só na app.",
            "CHECK pode validar qualquer condição.",
          ])
        ],
        [
          q("UNIQUE impede:", ["Inserts", "Valores repetidos na coluna", "Selects", "Joins"], 1, "Garante unicidade."),
          q("DEFAULT preenche:", ["Null forçado", "Valor padrão se não informado", "Nada", "Sempre zero"], 1, "Se não enviado, usa o default."),
          q("Proteção correta em banco:", ["Só na aplicação", "Em constraint + aplicação", "Em nenhum", "Só admin manual"], 1, "Defesa em camadas."),
        ]
      ),
      L("s12-normalize", "Normalização — evitando duplicação",
        "Formas normais sem academicismo.",
        [
          intro("Normalização é um processo de reorganizar tabelas para evitar redundância. A ideia prática: cada informação aparece em um só lugar."),
          H2("Exemplo ruim"),
          P("Tabela <code>pedidos</code> com colunas <code>usuario_nome, usuario_email</code>. Se o usuário mudar o email, você precisa atualizar em TODAS as linhas. Erro esperando acontecer."),
          H2("Exemplo bom"),
          P("Tabela <code>usuarios</code> (id, nome, email) + tabela <code>pedidos</code> (id, usuario_id). Mudou o email? Atualiza uma linha só."),
          dica("Excesso de normalização pode prejudicar performance — às vezes desnormaliza-se de propósito. Mas começar normalizado quase sempre é melhor."),
          resumo([
            "Normalização reduz redundância.",
            "Cada fato em um só lugar.",
            "Em alguns cenários, desnormaliza para performance.",
          ])
        ],
        [
          q("Normalização visa:", ["Aumentar redundância", "Reduzir redundância", "Nenhum", "Quebrar bancos"], 1, "Reduzir duplicação de dados."),
          q("Repetir email do usuário em várias linhas é:", ["Ótimo", "Perigoso e redundante", "Rápido sempre", "Correto"], 1, "Inconsistências ao atualizar."),
          q("Desnormalização é:", ["Sempre ruim", "Às vezes útil para performance", "Obrigatória", "Sinônimo de bug"], 1, "Trade-off consciente pode valer."),
        ]
      ),
      L("s13-views", "Views — consultas reutilizáveis",
        "Abstraindo SQL complexo.",
        [
          intro("View é uma query guardada que você pode consultar como se fosse uma tabela. Útil para padronizar relatórios."),
          exemplo("CREATE VIEW top_clientes AS\nSELECT u.id, u.nome, SUM(p.total) AS total\nFROM usuarios u\nJOIN pedidos p ON p.usuario_id = u.id\nGROUP BY u.id, u.nome;\n\nSELECT * FROM top_clientes ORDER BY total DESC LIMIT 10;"),
          H2("Views materializadas"),
          P("Alguns bancos suportam views materializadas: o resultado é cacheado em disco e atualizado sob demanda. Ótimo para relatórios pesados."),
          resumo([
            "View = query salva.",
            "Esconde complexidade e padroniza acesso.",
            "Materialized view = cache da query.",
          ])
        ],
        [
          q("View é:", ["Tabela nova", "Query salva acessível como tabela", "Índice", "Constraint"], 1, "Uma pseudo-tabela derivada de uma query."),
          q("Materialized view é útil para:", ["Tabelas pequenas", "Relatórios pesados cacheados", "Updates em massa", "Chat"], 1, "Cache de query cara."),
          q("View altera dados fisicamente?", ["Sempre", "Não por padrão", "Sim em NoSQL", "Aleatório"], 1, "É só uma visão sobre os dados."),
        ]
      ),
      L("s14-backup", "Backup e restore",
        "Porque um dia vai acontecer.",
        [
          intro("Banco sem backup é acidente esperando. Todo projeto sério tem rotina automática de dump."),
          H2("pg_dump / pg_restore (Postgres)"),
          CODE("pg_dump -U usuario nomebd > backup.sql\npsql -U usuario -d nomebd < backup.sql"),
          H2("mysqldump (MySQL)"),
          CODE("mysqldump -u user -p nomebd > backup.sql"),
          dica("Backups precisam ser testados. Backup que nunca foi restaurado = backup que você não tem."),
          resumo([
            "Backups são obrigatórios em produção.",
            "pg_dump/mysqldump geram SQL para restaurar.",
            "Teste o restore periodicamente.",
          ])
        ],
        [
          q("Backup não testado:", ["Seguro", "Pode não funcionar", "Melhor que testado", "Funciona sempre"], 1, "Sem teste, não há garantia."),
          q("pg_dump gera:", ["Arquivo JSON", "Arquivo SQL", "ZIP com índices", "Planilha"], 1, "SQL textual por padrão."),
          q("Frequência ideal:", ["Semestral", "Automática e frequente", "Nunca", "Só na estreia"], 1, "Depende do negócio, mas deve ser automática."),
        ]
      ),
      L("s15-migrations", "Migrations — versionando schema",
        "Como o banco acompanha o código.",
        [
          intro("Schema muda. Precisa adicionar coluna, remover tabela, renomear campo. Migrations são scripts versionados que levam o banco do estado X ao estado Y."),
          H2("Exemplo conceitual"),
          CODE("-- 2025_03_01_add_email_verificado.sql\nALTER TABLE usuarios ADD COLUMN email_verificado BOOLEAN DEFAULT false;"),
          H2("Ferramentas"),
          UL([
            "Prisma (JS/TS): <code>prisma migrate</code>.",
            "TypeORM: decorators + CLI.",
            "Alembic (Python/SQLAlchemy).",
            "Flyway/Liquibase (Java-agnóstico).",
          ]),
          dica("Jamais edite migrations já aplicadas em produção. Crie uma nova corrigindo."),
          resumo([
            "Migrations versionam o schema.",
            "Cada dev aplica as mesmas mudanças.",
            "Reverter via migration inversa (down).",
          ])
        ],
        [
          q("Migration é:", ["Mudança manual", "Script versionado de schema", "Backup", "Index"], 1, "Scripts ordenados que evoluem o schema."),
          q("Editar migration aplicada em produção:", ["OK", "Perigoso — pode quebrar bancos", "Rápido", "Seguro"], 1, "Pode deixar ambientes fora de sincronia."),
          q("Prisma é:", ["BD novo", "ORM/migration tool", "Antivirus", "Linguagem"], 1, "ORM moderno com migrations integradas."),
        ]
      ),
      L("s16-security", "Segurança básica — SQL Injection e mais",
        "Perigo clássico e como evitar.",
        [
          intro("SQL Injection acontece quando você concatena entrada do usuário direto na query. Atacante coloca SQL no lugar e manipula o banco."),
          H2("Errado"),
          CODE("const sql = \"SELECT * FROM users WHERE email = '\" + email + \"'\";"),
          H2("Certo — parametrizado"),
          CODE("db.query(\"SELECT * FROM users WHERE email = $1\", [email]);"),
          armadilha("Concatenação é a origem de quase todos os vazamentos de dados antigos. Nunca faça."),
          H2("Outras boas práticas"),
          UL([
            "Usuário de aplicação com permissões mínimas.",
            "Hash de senhas (bcrypt/argon2), nunca plain text.",
            "Backups criptografados.",
            "Logs sem dados sensíveis.",
          ]),
          resumo([
            "SQL Injection = concatenar entrada.",
            "Use parâmetros ($1, ?) sempre.",
            "Senhas: hash, nunca texto puro.",
          ])
        ],
        [
          q("Maior risco de concatenar input na query:", ["Bug visual", "SQL Injection", "CSRF", "DOS"], 1, "Permite que atacante injete SQL."),
          q("Senhas devem ser:", ["Em texto", "Hasheadas com bcrypt/argon2", "Codificadas base64", "Em JSON"], 1, "Hash com salt forte."),
          q("Queries seguras usam:", ["Concat direto", "Parâmetros ($1, ?)", "Dentro de var", "template literals"], 1, "Driver faz o escape correto."),
        ]
      ),
      L("s17-tools", "Ferramentas — clients, GUIs e CLIs",
        "Para cada gosto, uma ferramenta.",
        [
          intro("Dia-a-dia você precisa de algo pra rodar SQL rapidinho. Aqui estão as opções mais usadas:"),
          UL([
            "<strong>psql</strong>: CLI oficial do Postgres. Potente, extensível.",
            "<strong>DBeaver</strong>: GUI gratuita, multi-banco.",
            "<strong>TablePlus</strong>: elegante, paga, mac/win.",
            "<strong>Beekeeper Studio</strong>: open source, multiplataforma.",
            "<strong>pgAdmin</strong>: oficial do Postgres, web.",
          ]),
          dica("Para produção, prefira conexões read-only sempre que possível. Erro humano é a causa #1 de acidentes em banco."),
          resumo([
            "CLI é essencial para automação.",
            "GUIs aceleram exploração manual.",
            "Conexão read-only para tarefas de análise.",
          ])
        ],
        [
          q("psql é CLI de:", ["MySQL", "Postgres", "SQLite", "Oracle"], 1, "psql = Postgres."),
          q("Pra explorar dados visualmente, use:", ["psql", "DBeaver/TablePlus", "ls", "cat"], 1, "GUIs são melhores pra explorar."),
          q("Em análise/consultas, prefira conexão:", ["Root", "Read-only", "DBA", "Aleatória"], 1, "Read-only evita DELETE/UPDATE acidentais."),
        ]
      ),
      L("s18-final", "Projeto — modelo de e-commerce simples",
        "Juntando tudo.",
        [
          intro("Vamos modelar um e-commerce mínimo para consolidar os conceitos."),
          H2("Tabelas"),
          CODE("CREATE TABLE usuarios (\n  id SERIAL PRIMARY KEY,\n  nome TEXT NOT NULL,\n  email TEXT NOT NULL UNIQUE\n);\n\nCREATE TABLE produtos (\n  id SERIAL PRIMARY KEY,\n  titulo TEXT NOT NULL,\n  preco NUMERIC(10,2) CHECK (preco >= 0),\n  estoque INTEGER NOT NULL DEFAULT 0\n);\n\nCREATE TABLE pedidos (\n  id SERIAL PRIMARY KEY,\n  usuario_id INTEGER REFERENCES usuarios(id),\n  criado_em TIMESTAMP DEFAULT now()\n);\n\nCREATE TABLE itens_pedido (\n  id SERIAL PRIMARY KEY,\n  pedido_id INTEGER REFERENCES pedidos(id) ON DELETE CASCADE,\n  produto_id INTEGER REFERENCES produtos(id),\n  qtd INTEGER CHECK (qtd > 0),\n  preco_unit NUMERIC(10,2)\n);"),
          H2("Perguntas de negócio"),
          OL([
            "Top 10 produtos mais vendidos (SUM(qtd) por produto).",
            "Ticket médio por usuário (SUM(qtd*preco_unit) / COUNT DISTINCT pedido).",
            "Clientes que não compram há 90 dias.",
          ]),
          pratica("Pratique respondendo essas 3 perguntas em SQL. São casos de uso reais de BI."),
          resumo([
            "Modelagem começa por entender o domínio.",
            "Relações expressam regras de negócio.",
            "SQL responde perguntas — pratique traduzir dúvidas em queries.",
          ])
        ],
        [
          q("Top N produtos vendidos é:", ["SELECT *", "SUM(qtd) + GROUP BY produto + ORDER BY + LIMIT", "DELETE", "UPDATE"], 1, "Clássica agregação ordenada."),
          q("ON DELETE CASCADE em itens_pedido faz:", ["Bloqueia delete", "Apaga itens junto do pedido", "Duplica", "Nada"], 1, "Dependentes somem com o pedido."),
          q("Ticket médio é:", ["MAX(total)", "SUM(total)/COUNT DISTINCT pedido", "ORDER BY", "Sem SQL"], 1, "Média por pedido."),
          q("Modelagem boa começa por:", ["Escrever SQL", "Entender o domínio", "Criar índices", "Backup"], 1, "Só modele depois de entender."),
        ]
      ),
    ],
  };

  // ===============================================================
  // CURSO 11 — REACT INICIANTE (GRÁTIS)
  // ===============================================================
  const reactBasic = {
    id: "react-iniciante",
    title: "React Iniciante",
    tagline: "Construa interfaces reativas com a biblioteca mais usada do mercado.",
    description: "Aprenda React partindo do zero. Entenda componentes, JSX, props, state, hooks básicos e como estruturar aplicações reais. Foco em entendimento do modelo mental — não em decorar APIs.",
    level: "Iniciante",
    duration: "8h",
    theme: "theme-js",
    cover: "React",
    vip: false,
    instructor: "Pedro Ferraz",
    lessons: [
      L("r1-intro", "O que é React (e por que existe)",
        "Entendendo o problema que React resolve.",
        [
          intro("Antes do React, atualizar uma página em JavaScript era manual: você selecionava elementos do DOM e mexia neles um por um. Para apps pequenos funcionava. Para apps grandes virava um inferno de <code>document.querySelector</code> e bugs impossíveis."),
          porque("React inverte o jogo. Você descreve <em>como a UI deve ser</em> para cada estado dos dados, e o React se encarrega de descobrir <em>o que precisa mudar</em> no DOM. Isso simplifica drasticamente o código."),
          H2("Virtual DOM"),
          P("React mantém uma representação em memória do DOM. Quando o estado muda, ele calcula um novo Virtual DOM, compara com o anterior e aplica apenas as diferenças no DOM real. Isso se chama <em>reconciliation</em>."),
          dica("React não é framework, é biblioteca. Ele cuida da camada de UI — roteamento, forms, estado global são adicionados por libs separadas (React Router, React Hook Form, Zustand…)."),
          resumo([
            "React transforma dados em UI declarativa.",
            "Virtual DOM calcula mudanças e aplica minimamente no DOM real.",
            "É biblioteca de UI, não framework completo.",
          ])
        ],
        [
          q("React é…", ["Linguagem", "Biblioteca de UI", "Banco de dados", "SO"], 1, "Library, não framework."),
          q("Virtual DOM serve para…", ["Economizar RAM", "Calcular diffs e atualizar só o necessário", "Mudar cor", "Hospedar code"], 1, "Identifica o mínimo a modificar."),
          q("Descrever UI no React é:", ["Imperativo", "Declarativo", "Procedural", "Assíncrono"], 1, "Você diz o QUE, não o COMO."),
        ]
      ),
      L("r2-setup", "Criando seu primeiro projeto com Vite",
        "Setup moderno, rápido e sem dor.",
        [
          intro("Esqueça <code>create-react-app</code> (obsoleto). Hoje o padrão é <code>Vite</code> — rápido, simples, com HMR instantâneo."),
          exemplo("npm create vite@latest meu-app -- --template react\ncd meu-app\nnpm install\nnpm run dev"),
          H2("Estrutura que nasce"),
          UL([
            "<code>index.html</code>: ponto de entrada.",
            "<code>src/main.jsx</code>: bootstraps o React.",
            "<code>src/App.jsx</code>: seu primeiro componente.",
            "<code>vite.config.js</code>: configuração.",
          ]),
          dica("Use a extensão <em>ES7+ React/Redux snippets</em> no VSCode para gerar componentes rápido."),
          resumo([
            "Vite é a forma moderna de iniciar React.",
            "HMR = Hot Module Reload — vê mudanças instantâneas.",
            "Estrutura mínima e clara.",
          ])
        ],
        [
          q("Ferramenta moderna para iniciar projeto React:", ["CRA", "Vite", "Webpack manual", "FTP"], 1, "CRA está deprecated, Vite é o padrão."),
          q("HMR significa:", ["Hot Module Reload", "High Memory Ref", "HTTP Main Route", "Hashed Mem Reg"], 0, "Recarga parcial e instantânea ao salvar."),
          q("App.jsx contém:", ["Configuração do Vite", "Seu primeiro componente", "Backend", "Banco"], 1, "É o componente raiz do exemplo."),
        ]
      ),
      L("r3-jsx", "JSX — HTML no JavaScript",
        "A sintaxe que deixa tudo legível.",
        [
          intro("JSX permite escrever código parecido com HTML dentro de JavaScript. O build converte isso em chamadas de função <code>React.createElement</code>."),
          exemplo("function Ola() {\n  return <h1>Olá, mundo!</h1>;\n}"),
          H2("Regras que iniciantes esquecem"),
          UL([
            "Apenas <strong>um elemento raiz</strong> (use <code>&lt;&gt;&lt;/&gt;</code> fragment se precisar de dois).",
            "Atributos em <code>camelCase</code>: <code>className</code>, não <code>class</code>; <code>onClick</code>, não <code>onclick</code>.",
            "Chaves <code>{}</code> para embutir expressões: <code>{usuario.nome}</code>.",
            "Tags auto-fechadas: <code>&lt;img /&gt;</code>, <code>&lt;br /&gt;</code>.",
          ]),
          dica("JSX não é HTML. É JS. Tudo entre <code>{}</code> é uma expressão JavaScript avaliada."),
          resumo([
            "JSX mistura marcação e JS.",
            "Um elemento raiz, camelCase, chaves para expressões.",
            "<code>className</code> no lugar de <code>class</code>.",
          ])
        ],
        [
          q("No JSX, class vira…", ["cls", "className", "class mesmo", "css"], 1, "className evita conflito com palavra-chave JS."),
          q("Múltiplos elementos retornados precisam de…", ["Array", "Fragment &lt;&gt;&lt;/&gt;", "String", "Null"], 1, "Fragments agrupam sem adicionar nó."),
          q("Interpolação de JS em JSX:", ["${var}", "{var}", "&var;", "<var>"], 1, "Chaves simples."),
        ]
      ),
      L("r4-components", "Componentes — Lego da UI",
        "Funções que retornam JSX.",
        [
          intro("Componente é uma função que retorna JSX. Pense em cada componente como um bloco reutilizável de UI."),
          exemplo("function Botao() {\n  return <button className=\"btn\">Clique</button>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <Botao />\n      <Botao />\n    </div>\n  );\n}"),
          H2("Convenções importantes"),
          UL([
            "Nome começa com <strong>letra maiúscula</strong> (para diferenciar de tags HTML).",
            "Um componente, um arquivo (<code>Botao.jsx</code>).",
            "Exports nomeados ou default — escolha um padrão e seja consistente.",
          ]),
          dica("Dividir cedo e com coerência > componentes gigantescos. Mas não invente abstração antes da hora."),
          resumo([
            "Componente = função que retorna JSX.",
            "Começa com maiúscula.",
            "Reutilização é o superpoder.",
          ])
        ],
        [
          q("Nome de componente começa com…", ["Minúscula", "Maiúscula", "Número", "Underline"], 1, "React diferencia componentes por PascalCase."),
          q("Qual retorna um componente?", ["JSX", "JSON", "HTML string", "CSS"], 0, "Retorna JSX/React elements."),
          q("Componentes devem ser:", ["Gigantes e raros", "Pequenos e focados", "Aleatórios", "Abstratos sempre"], 1, "Pequenos, com responsabilidade clara."),
        ]
      ),
      L("r5-props", "Props — passando dados para componentes",
        "Parâmetros no mundo React.",
        [
          intro("Props (properties) são como argumentos de função. Você passa dados do componente pai para o filho."),
          exemplo("function Ola({ nome }) {\n  return <h1>Olá, {nome}!</h1>;\n}\n\n<Ola nome=\"Ana\" />\n<Ola nome=\"João\" />"),
          H2("Props são read-only"),
          P("O filho <strong>nunca</strong> modifica props recebidas. Se precisar mudar algo, pede ao pai via callback — veja aula sobre <em>state + lift state up</em>."),
          H2("Children — prop especial"),
          CODE("function Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n\n<Card><p>Conteúdo</p></Card>"),
          resumo([
            "Props passam dados pai → filho.",
            "São imutáveis no filho.",
            "<code>children</code> é conteúdo entre tags.",
          ])
        ],
        [
          q("Props são:", ["Mutáveis", "Read-only no filho", "Globais", "Internas"], 1, "O filho não muda props."),
          q("Para receber tudo dentro da tag, use:", ["style", "children", "inner", "content"], 1, "children é a prop especial."),
          q("Props são passadas como…", ["Global var", "Atributos JSX", "Params HTTP", "Cookies"], 1, "Via JSX, como atributos."),
        ]
      ),
      L("r6-state", "useState — o estado do componente",
        "Dados que mudam ao longo do tempo.",
        [
          intro("<code>useState</code> é o hook que dá memória ao componente. Ele retorna um par: o valor atual e uma função para atualizá-lo."),
          exemplo("import { useState } from 'react';\n\nfunction Contador() {\n  const [n, setN] = useState(0);\n  return (\n    <button onClick={() => setN(n + 1)}>\n      Cliquei {n} vezes\n    </button>\n  );\n}"),
          H2("Re-render"),
          P("Quando você chama <code>setN</code>, o React marca o componente para re-renderizar. A função inteira roda de novo, e JSX é gerado com o valor novo."),
          armadilha("Não mute o estado direto: <code>lista.push(item); setLista(lista)</code> não funciona de forma confiável. Use <code>setLista([...lista, item])</code>."),
          resumo([
            "<code>useState</code> dá memória ao componente.",
            "Setter dispara re-render.",
            "Nunca mute estado — crie cópia.",
          ])
        ],
        [
          q("useState retorna:", ["Valor", "Valor + setter", "Hook", "String"], 1, "Par: [valor, setValor]."),
          q("Após setter, o componente:", ["Morre", "Re-renderiza", "Faz nada", "Crasha"], 1, "Novo render com novo estado."),
          q("Para adicionar ao array no state:", ["push direto", "spread com novo array", "delete", "setTimeout"], 1, "Crie novo array com spread."),
        ]
      ),
      L("r7-events", "Eventos — onClick, onChange e amigos",
        "Reagindo a interações do usuário.",
        [
          intro("Em React, eventos usam camelCase e recebem funções, não strings: <code>onClick={handler}</code>, não <code>onclick=\"handler()\"</code>."),
          exemplo("function Form() {\n  const [email, setEmail] = useState('');\n  return (\n    <form onSubmit={(e) => { e.preventDefault(); alert(email); }}>\n      <input value={email} onChange={(e) => setEmail(e.target.value)} />\n      <button>Enviar</button>\n    </form>\n  );\n}"),
          H2("Controlled inputs"),
          P("Input controlado: o estado React é a fonte da verdade (<code>value</code> + <code>onChange</code>). Quase sempre o que você quer."),
          dica("Para forms maiores, use <em>React Hook Form</em>. Reduz dramaticamente o boilerplate."),
          resumo([
            "Eventos em camelCase, recebendo função.",
            "Inputs controlados sincronizam com state.",
            "preventDefault evita reload do form.",
          ])
        ],
        [
          q("Em JSX, onClick recebe:", ["String", "Função", "HTML", "Evento"], 1, "Função de callback."),
          q("Input controlado tem:", ["Só value", "value e onChange ligados ao state", "Só onChange", "Nada"], 1, "Sincroniza DOM com React."),
          q("Sem preventDefault no onSubmit:", ["Nada acontece", "Form recarrega página", "State some", "Bug de CSS"], 1, "Comportamento HTML padrão é recarregar."),
        ]
      ),
      L("r8-lists", "Listas e keys",
        "Renderizando arrays.",
        [
          intro("Para renderizar uma lista, use <code>map</code>. Cada item precisa de uma <code>key</code> única para o React identificar mudanças."),
          exemplo("const produtos = [{id:1,nome:'A'},{id:2,nome:'B'}];\n\n<ul>\n  {produtos.map(p => <li key={p.id}>{p.nome}</li>)}\n</ul>"),
          armadilha("Nunca use <code>index</code> do array como key em listas que mudam de ordem ou são filtradas. Causa bugs de preservação de estado."),
          dica("Se o item tem ID único, use o ID. Se não, crie um (<code>crypto.randomUUID()</code>)."),
          resumo([
            "<code>map</code> gera JSX por item.",
            "Key é obrigatória e única.",
            "Evite usar index em listas dinâmicas.",
          ])
        ],
        [
          q("Key precisa ser…", ["Igual para todos", "Única por item", "Número", "String"], 1, "Única dentro da lista."),
          q("Index como key é…", ["Sempre OK", "Ok só em listas estáticas", "Nunca usa map", "Obrigatório"], 1, "OK só se a lista nunca muda de ordem/tamanho."),
          q("Para renderizar array:", ["for loop", "map", "reduce", "forEach com return"], 1, "map retorna array de JSX."),
        ]
      ),
      L("r9-conditional", "Renderização condicional",
        "Mostrar coisas só às vezes.",
        [
          intro("JSX não tem <code>if</code>. Você usa expressões JS: ternário, <code>&&</code>, ou variáveis."),
          exemplo("{logado ? <Dashboard /> : <Login />}\n{erro && <p className=\"err\">{erro}</p>}\n{usuarios.length === 0 && <p>Sem usuários ainda.</p>}"),
          armadilha("<code>{count && <X />}</code> com count=0 renderiza... o 0. Use <code>{count > 0 && <X />}</code>."),
          resumo([
            "Use ternário ou &&.",
            "Cuidado com 0/falsy em &&.",
            "Para lógica complexa, extraia variável antes do return.",
          ])
        ],
        [
          q("JSX tem if?", ["Sim", "Não — use ternário", "Só em props", "Em loops"], 1, "Usa expressão JS."),
          q("<code>{0 && <X/>}</code> renderiza:", ["Nada", "O número 0", "Erro", "true"], 1, "Cuidado: 0 é falsy mas ainda é renderizável."),
          q("Para mostrar A ou B:", ["if/else", "Ternário A ? X : Y", "switch", "try/catch"], 1, "Ternário inline."),
        ]
      ),
      L("r10-effect", "useEffect — side effects no componente",
        "Buscando dados, assinando eventos.",
        [
          intro("Efeitos colaterais (fetch, listeners, timers) vão em <code>useEffect</code>. Ele roda depois da renderização."),
          exemplo("import { useEffect, useState } from 'react';\n\nfunction Usuarios() {\n  const [lista, setLista] = useState([]);\n  useEffect(() => {\n    fetch('/api/usuarios').then(r => r.json()).then(setLista);\n  }, []); // [] = só no mount\n  return <ul>{lista.map(u => <li key={u.id}>{u.nome}</li>)}</ul>;\n}"),
          H2("Dependências"),
          UL([
            "<code>[]</code>: roda uma vez no mount.",
            "<code>[x]</code>: roda quando x muda.",
            "Sem array: roda em todo render (quase sempre erro).",
          ]),
          dica("Para fetching moderno use <em>TanStack Query (React Query)</em> ou <em>SWR</em> — resolvem cache, loading, retry de graça."),
          resumo([
            "useEffect para side effects.",
            "Array de dependências controla quando roda.",
            "Para fetching, considere libs especializadas.",
          ])
        ],
        [
          q("useEffect([]) roda:", ["Sempre", "Uma vez no mount", "Nunca", "A cada setter"], 1, "Array vazio = mount-only."),
          q("fetch no body do componente (fora do useEffect):", ["OK", "Loop infinito potencial", "Rápido", "Seguro"], 1, "Dispara a cada render — loop."),
          q("Alternativa moderna para fetching:", ["jQuery", "TanStack Query", "XHR", "Axios puro"], 1, "Libs de data fetching resolvem muito."),
        ]
      ),
      L("r11-lift-state", "Elevando o estado (lift state up)",
        "Compartilhar estado entre irmãos.",
        [
          intro("Se dois componentes precisam do mesmo estado, coloque o estado no <em>ancestral comum</em> e passe via props."),
          exemplo("function App() {\n  const [filtro, setFiltro] = useState('');\n  return (\n    <>\n      <Busca filtro={filtro} setFiltro={setFiltro} />\n      <Lista filtro={filtro} />\n    </>\n  );\n}"),
          H2("Quando virar Context ou store global"),
          P("Se o prop precisa descer 4+ níveis, considere Context API. Para estado global complexo (carrinho, auth), use Zustand ou Redux Toolkit."),
          resumo([
            "Estado compartilhado sobe ao ancestral comum.",
            "Callbacks descem para modificar.",
            "Para muito prop-drilling, use Context/store.",
          ])
        ],
        [
          q("Lift state up serve para:", ["Subir app no servidor", "Compartilhar estado entre irmãos", "Deletar", "Cache"], 1, "Estado move para ancestral comum."),
          q("Prop drilling =", ["Passar por muitos níveis", "Deletar props", "Atalho de perf", "Undefined"], 0, "Descer prop por muitos níveis."),
          q("Solução para prop drilling intenso:", ["Mais drilling", "Context ou store", "Remover estado", "Nada"], 1, "Context/Zustand/Redux."),
        ]
      ),
      L("r12-router", "React Router — navegação SPA",
        "Múltiplas páginas em uma SPA.",
        [
          intro("SPAs (Single Page Apps) simulam navegação sem recarregar. React Router é a lib padrão pra isso."),
          exemplo("npm install react-router-dom\n\n// main.jsx\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\n\n<BrowserRouter>\n  <Routes>\n    <Route path=\"/\" element={<Home/>} />\n    <Route path=\"/sobre\" element={<Sobre/>} />\n    <Route path=\"/usuarios/:id\" element={<Usuario/>} />\n  </Routes>\n</BrowserRouter>"),
          H2("Navegação"),
          CODE("import { Link, useNavigate, useParams } from 'react-router-dom';\n\n<Link to=\"/sobre\">Sobre</Link>\nconst navigate = useNavigate();\nnavigate('/');\nconst { id } = useParams();"),
          resumo([
            "React Router adiciona rotas SPA.",
            "Use <code>Link</code> em vez de <code>a href</code>.",
            "Rotas dinâmicas com <code>:param</code>.",
          ])
        ],
        [
          q("SPA navega recarregando página?", ["Sim", "Não", "Às vezes", "Só no login"], 1, "SPA troca views via JS."),
          q("Para link interno use:", ["a href", "Link", "div onClick", "form"], 1, "Link evita reload."),
          q("Parâmetros dinâmicos: /user/:id acessados via:", ["props", "useParams()", "location", "cookies"], 1, "Hook dedicado."),
        ]
      ),
      L("r13-forms", "Formulários e validação básica",
        "Dos inputs ao submit.",
        [
          intro("Forms em React envolvem: estado por campo, validação, submit assíncrono, feedback de erros."),
          exemplo("function Form() {\n  const [email, setEmail] = useState('');\n  const [err, setErr] = useState(null);\n  const submit = (e) => {\n    e.preventDefault();\n    if (!email.includes('@')) return setErr('E-mail inválido');\n    // chamar API…\n  };\n  return (\n    <form onSubmit={submit}>\n      <input value={email} onChange={(e)=>setEmail(e.target.value)} />\n      {err && <small style={{color:'red'}}>{err}</small>}\n      <button>Enviar</button>\n    </form>\n  );\n}"),
          dica("Em projetos reais use <em>react-hook-form</em> + <em>zod</em> para validação declarativa."),
          resumo([
            "Controle cada campo com state.",
            "Valide antes de enviar.",
            "Libs modernas removem boilerplate.",
          ])
        ],
        [
          q("Para pegar valor do input:", ["e.target.html", "e.target.value", "e.inner", "e.data"], 1, "value é a propriedade do input."),
          q("Após submit inválido:", ["Continue", "Mostre erro e aborte", "Ignore", "Recarregue"], 1, "Feedback claro pro usuário."),
          q("Melhor lib para forms:", ["jQuery", "react-hook-form", "Angular", "Vue"], 1, "react-hook-form é o padrão."),
        ]
      ),
      L("r14-styling", "Estilizando componentes",
        "CSS modules, styled-components, Tailwind…",
        [
          intro("React não impõe forma de estilizar. As opções populares:"),
          UL([
            "<strong>CSS global</strong> (simples, pode conflitar).",
            "<strong>CSS Modules</strong> (<code>Componente.module.css</code>, escopo local).",
            "<strong>Styled-components / Emotion</strong> (CSS-in-JS, dinâmico).",
            "<strong>Tailwind CSS</strong> (utilitários, rápido, estável).",
          ]),
          dica("Para projetos novos, Tailwind tem hoje a melhor relação velocidade x consistência x DX."),
          resumo([
            "Múltiplas estratégias de styling.",
            "CSS Modules para escopo local.",
            "Tailwind virou padrão em muitos times.",
          ])
        ],
        [
          q("CSS Modules dá:", ["Global", "Escopo local automático", "Animação grátis", "Dark mode"], 1, "Gera classes únicas."),
          q("Tailwind é:", ["Framework CSS", "Conjunto de classes utilitárias", "Linguagem", "Banco"], 1, "Utility-first."),
          q("Pra projeto novo hoje:", ["Nada", "Tailwind/CSS Modules", "Só CSS inline", "Bootstrap obrigatório"], 1, "Moderno e ágil."),
        ]
      ),
      L("r15-fetch-api", "Consumindo APIs REST",
        "Buscando e enviando dados.",
        [
          intro("Apps reais falam com backends. Fetch nativo funciona, mas em produção você vai querer algo mais robusto."),
          exemplo("// fetch simples\nconst res = await fetch('/api/posts');\nconst data = await res.json();\n\n// com error handling\ntry {\n  const res = await fetch('/api/posts');\n  if (!res.ok) throw new Error('falha');\n  const data = await res.json();\n} catch (err) { /* feedback ao user */ }"),
          dica("Em produção: TanStack Query (cache, retries, loading state grátis) ou axios + interceptors."),
          resumo([
            "fetch nativo funciona bem.",
            "Sempre trate erros.",
            "Libs modernas dão cache e estado de loading.",
          ])
        ],
        [
          q("Após fetch, para obter JSON:", [".text()", ".json()", ".data", ".body"], 1, "r.json() retorna Promise do objeto."),
          q("res.ok indica:", ["JSON válido", "Status 200-299", "Erro", "Sem conteúdo"], 1, "Bom sinal de sucesso HTTP."),
          q("Sem tratar erros:", ["Tudo OK", "User pode ficar travado sem feedback", "App mais rápido", "Seguro"], 1, "UX ruim em falhas."),
        ]
      ),
      L("r16-structure", "Estruturando um projeto médio",
        "Pastas e convenções.",
        [
          intro("Não existe 'estrutura oficial', mas convenções comuns funcionam bem:"),
          CODE("src/\n  components/      # componentes reutilizáveis\n  pages/           # rotas\n  hooks/           # custom hooks\n  lib/ ou utils/   # funções auxiliares\n  services/        # chamadas de API\n  assets/          # imagens, fontes\n  App.jsx\n  main.jsx"),
          dica("Comece simples. Só crie pastas quando o projeto pedir. Estruturar demais antes da hora desperdiça energia."),
          resumo([
            "Convenções salvam tempo em times.",
            "Separe componentes, páginas, hooks, services.",
            "Cresça a estrutura conforme necessidade.",
          ])
        ],
        [
          q("Estrutura ideal:", ["Uma só pasta", "Separação por responsabilidade", "Caótica", "Baseada no autor"], 1, "Organizar por papel do código."),
          q("Custom hooks geralmente em:", ["components", "hooks", "pages", "assets"], 1, "Pasta hooks/ por convenção."),
          q("Começar o projeto:", ["Estrutura gigante de cara", "Simples e crescer", "Copiar de empresa X", "Sem pasta"], 1, "Simplicidade inicial > previsão excessiva."),
        ]
      ),
      L("r17-build-deploy", "Build e deploy",
        "Do dev.js à URL pública.",
        [
          intro("Seu app React eventualmente precisa sair no ar. Ferramentas modernas tornam isso trivial."),
          exemplo("npm run build    # gera /dist pronto pra hospedar\nnpm run preview  # servidor local do build"),
          H2("Onde hospedar"),
          UL([
            "<strong>Vercel</strong>: melhor DX, deploy em segundos, preview por PR.",
            "<strong>Netlify</strong>: similar, também excelente.",
            "<strong>Cloudflare Pages</strong>: rápido e generoso no free.",
            "<strong>GitHub Pages</strong>: simples, estático.",
          ]),
          dica("Conecte Vercel/Netlify ao GitHub: cada push vira deploy automático, cada PR ganha preview próprio."),
          resumo([
            "build gera pasta pronta para hospedar.",
            "Vercel/Netlify são padrão para React.",
            "Automação pelo Git é a melhor experiência.",
          ])
        ],
        [
          q("Após build, hospedar é:", ["Complicado", "Simples — pasta estática", "Requer servidor Node", "Impossível"], 1, "React build é estático."),
          q("Deploy automático por push:", ["Impossível", "Padrão em Vercel/Netlify", "Só com CI manual", "Caro"], 1, "Integrações nativas."),
          q("npm run preview:", ["Deploy", "Servidor local do build", "Build só", "Limpa dist"], 1, "Testa o build localmente."),
        ]
      ),
      L("r18-next-steps", "Próximos passos",
        "O que estudar depois.",
        [
          intro("React básico dominado. O ecossistema é enorme — aqui vai a trilha recomendada:"),
          OL([
            "TanStack Query (data fetching moderno).",
            "TypeScript + React (tipagem elimina uma classe inteira de bugs).",
            "Zustand ou Redux Toolkit (estado global).",
            "React Hook Form + Zod (formulários sérios).",
            "Next.js (SSR, SSG, rotas de API — o framework full-stack do React).",
            "Testing Library + Vitest (testes automatizados).",
          ]),
          dica("Próximo curso natural: <strong>React Avançado</strong> (VIP) — aprofunda hooks, performance, Suspense, padrões e arquitetura."),
          resumo([
            "Você já pode construir apps reais.",
            "Data fetching e estado global são próximos passos naturais.",
            "Next.js é o destino para full-stack React.",
          ])
        ],
        [
          q("Next.js é:", ["DB", "Framework React full-stack", "Linting", "Animação"], 1, "SSR/SSG/Edge, tudo junto."),
          q("Zustand/Redux resolvem:", ["Roteamento", "Estado global", "Form", "API"], 1, "Estado compartilhado sem prop drilling."),
          q("TypeScript com React:", ["Complica sem ganho", "Elimina classe de bugs em grande escala", "Só no backend", "Exclusivo de Next"], 1, "Tipagem estática evita bugs."),
          q("Para testes:", ["Nunca", "Testing Library + Vitest", "Só QA manual", "Excel"], 1, "Padrão da comunidade React."),
        ]
      ),
    ],
  };

  // ===============================================================
  // CURSO 12 — NODE.JS INICIANTE (GRÁTIS)
  // ===============================================================
  const nodeBasic = {
    id: "node-iniciante",
    title: "Node.js Iniciante",
    tagline: "JavaScript fora do navegador — backend, scripts e APIs.",
    description: "Entenda como o Node.js funciona, por que ele é tão popular e como usá-lo para criar APIs REST, scripts de automação e pequenos serviços. Foco no essencial: event loop, módulos, npm, Express e boas práticas.",
    level: "Iniciante",
    duration: "7h",
    theme: "theme-js",
    cover: "Node",
    vip: false,
    instructor: "Bruno Alencar",
    lessons: [
      L("n1-what", "O que é Node.js", "Runtime de JS fora do browser.",
        [
          intro("Node.js é um <strong>runtime</strong> que executa JavaScript fora do navegador. Criado em 2009, ele trouxe JS para o servidor usando o mesmo motor V8 do Chrome."),
          porque("Um dev full-stack pode usar a mesma linguagem no front e no back. Além disso, Node é extremamente eficiente em I/O (rede, disco), graças ao seu modelo assíncrono."),
          H2("O que dá pra fazer com Node"),
          UL(["APIs REST/GraphQL", "Scripts de automação", "Ferramentas de build (webpack, vite)", "Apps desktop (Electron)", "Serverless functions"]),
          dica("Deno e Bun são alternativas modernas, mas Node ainda domina o mercado."),
          resumo(["Node = runtime V8 + APIs de sistema.", "JS no backend desde 2009.", "Forte em I/O assíncrono."])
        ],
        [
          q("Node é…", ["Linguagem", "Runtime de JS", "Browser", "Banco"], 1, "Runtime, não linguagem."),
          q("Motor por trás:", ["SpiderMonkey", "V8", "JavaScriptCore", "Chakra"], 1, "V8 do Chrome."),
          q("Uso típico:", ["Animações 3D", "APIs e scripts", "Edição de vídeo", "Overclock"], 1, "Backend + automação."),
        ]
      ),
      L("n2-install", "Instalando Node e nvm", "Gerenciando versões.",
        [
          intro("Instalar Node direto do site funciona, mas você vai cedo ou tarde precisar de múltiplas versões. Use <code>nvm</code> (Linux/Mac) ou <code>nvm-windows</code> / <code>fnm</code>."),
          exemplo("# instala nvm (Linux/Mac)\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash\n\n# usa uma versão\nnvm install 20\nnvm use 20\nnvm alias default 20"),
          dica("Prefira LTS (Long Term Support) para projetos em produção."),
          resumo(["nvm gerencia múltiplas versões de Node.", "LTS para produção.", "Current para experimentar."])
        ],
        [
          q("nvm serve para:", ["Baixar NPM", "Gerenciar versões de Node", "Hospedar app", "Transpilar"], 1, "Multiversão."),
          q("Versão recomendada em produção:", ["LTS", "Current", "Beta", "Alpha"], 0, "LTS é estável."),
          q("Pra fixar default:", ["nvm default", "nvm alias default XX", "nvm fix", "npm link"], 1, "alias default."),
        ]
      ),
      L("n3-event-loop", "Event Loop — o coração do Node", "Assincronia não-bloqueante.",
        [
          intro("Node é single-threaded no JS, mas é altamente concorrente via <strong>event loop</strong>. Enquanto uma operação lenta (disco, rede) espera, o Node atende outras tarefas."),
          H2("Ordem das fases"),
          OL(["Timers (setTimeout, setInterval).", "Pending callbacks (I/O não atendido).", "Poll (lê I/O).", "Check (setImmediate).", "Close callbacks."]),
          dica("Entender o event loop evita bugs de \"por que meu setTimeout roda depois do fetch\"."),
          armadilha("Tarefas pesadas de CPU bloqueiam o loop — use worker threads ou outra stack (Go, Rust)."),
          resumo(["JS single-thread + event loop = alta concorrência I/O.", "Não é bom pra CPU-bound puro.", "Assincronia via callbacks, Promises, async/await."])
        ],
        [
          q("Node é…", ["Multi-thread puro", "Single-thread + event loop", "Síncrono", "Paralelo"], 1, "Concorrência por I/O não-bloqueante."),
          q("CPU pesado em Node é…", ["Ótimo", "Ruim — bloqueia o loop", "Neutro", "Sempre async"], 1, "Bloqueia o single thread."),
          q("setTimeout cai em qual fase:", ["Timers", "Close", "Poll", "Check"], 0, "Timers fase."),
        ]
      ),
      L("n4-modules", "Módulos — CommonJS vs ESM", "require vs import.",
        [
          intro("Node historicamente usou CommonJS (<code>require</code>, <code>module.exports</code>). Hoje, ESM (<code>import</code>/<code>export</code>) é suportado oficialmente."),
          exemplo("// CommonJS\nconst fs = require('fs');\nmodule.exports = { minha: fn };\n\n// ESM\nimport fs from 'node:fs';\nexport const minha = fn;"),
          dica("Em projetos novos, use ESM. Em package.json: <code>\"type\": \"module\"</code>."),
          resumo(["CJS = legado, ainda comum.", "ESM = moderno, padrão do JS.", "<code>type: module</code> ativa ESM."])
        ],
        [
          q("CommonJS usa:", ["import", "require", "fetch", "use"], 1, "require + module.exports."),
          q("ESM é:", ["Antigo", "Padrão oficial atual", "Só browser", "Sem suporte"], 1, "Padrão ECMAScript."),
          q("Ativa ESM em Node via:", ["cli", "\"type\":\"module\" no package.json", "flag --old", "nada"], 1, "Config no package.json."),
        ]
      ),
      L("n5-npm", "npm — pacotes e scripts", "O ecossistema de bibliotecas.",
        [
          intro("npm é o gerenciador de pacotes que vem com Node. Ele instala bibliotecas e gerencia scripts."),
          exemplo("npm init -y                    # cria package.json\nnpm install express            # dependency\nnpm install -D nodemon         # devDependency\nnpm run dev                    # roda script custom"),
          H2("Alternativas"),
          UL(["<strong>pnpm</strong>: rápido, economiza disco.", "<strong>yarn</strong>: outro veterano."]),
          dica("<code>npm ci</code> (em vez de <code>install</code>) para CI/CD — mais previsível."),
          resumo(["package.json descreve o projeto.", "dependencies vs devDependencies.", "Scripts automatizam tarefas comuns."])
        ],
        [
          q("npm init cria:", ["node_modules", "package.json", "index.js", "nada"], 1, "Gera o manifest."),
          q("-D em install marca como:", ["dep", "devDep", "global", "opcional"], 1, "devDependency."),
          q("Em CI, melhor usar:", ["npm install", "npm ci", "yarn global", "npx"], 1, "ci é idempotente e veloz."),
        ]
      ),
      L("n6-http", "Servidor HTTP com módulo nativo", "Sem libs, puro Node.",
        [
          intro("Antes do Express, dá pra criar um servidor só com o módulo <code>http</code>. Entender isso ajuda a apreciar o que frameworks escondem."),
          exemplo("import { createServer } from 'node:http';\n\ncreateServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ hello: 'world' }));\n}).listen(3000);"),
          dica("Para projetos reais use Express/Fastify/Koa/Hono — mais ergonomia."),
          resumo(["Node traz HTTP nativo.", "req/res são streams.", "Frameworks são abstrações em cima disso."])
        ],
        [
          q("http.createServer recebe:", ["objeto", "callback (req, res)", "string", "Promise"], 1, "Handler por request."),
          q("res.end encerra:", ["o app", "a resposta", "todas conexões", "nada"], 1, "Finaliza esta response."),
          q("Em projeto real, prefira:", ["Puro http", "Express/Fastify", "PHP", "WebSocket só"], 1, "Frameworks melhoram DX."),
        ]
      ),
      L("n7-express", "Express — framework minimalista", "Rotas e middleware.",
        [
          intro("Express é o framework mais popular de Node. Foco em rotas e middlewares."),
          exemplo("import express from 'express';\nconst app = express();\napp.use(express.json());\n\napp.get('/hello', (req, res) => res.json({ ok: true }));\napp.post('/users', (req, res) => { /* cria usuário */ res.status(201).json(req.body); });\n\napp.listen(3000);"),
          H2("Middleware"),
          P("Middleware é uma função <code>(req, res, next) => void</code>. Logs, autenticação, parsing de corpo — tudo vira middleware."),
          resumo(["Express = rotas + middlewares.", "Sem opinião forte sobre estrutura.", "Fastify é alternativa mais moderna e rápida."])
        ],
        [
          q("Middleware recebe:", ["req, res, next", "só req", "string", "Promise"], 0, "Trio clássico."),
          q("app.get define:", ["Só rota GET", "POST também", "Middleware só", "CLI"], 0, "GET-only."),
          q("Alternativa moderna a Express:", ["Django", "Fastify", "Laravel", "Rails"], 1, "Mesmo ecossistema, mais rápido."),
        ]
      ),
      L("n8-routes", "Rotas e params", "Construindo API REST.",
        [
          intro("Padrão REST usa URLs semânticas + métodos HTTP: GET lê, POST cria, PUT/PATCH atualiza, DELETE apaga."),
          exemplo("app.get('/posts', listar);\napp.get('/posts/:id', mostrar);\napp.post('/posts', criar);\napp.put('/posts/:id', atualizar);\napp.delete('/posts/:id', deletar);"),
          H2("Query e params"),
          UL(["<code>req.params.id</code>: /posts/:id", "<code>req.query.q</code>: /posts?q=termo", "<code>req.body</code>: corpo JSON (após express.json)"]),
          resumo(["REST mapeia recursos para URLs.", "Verbos HTTP dizem a ação.", "Params, query e body trazem dados."])
        ],
        [
          q(":id em '/posts/:id' vem em:", ["req.body", "req.params.id", "req.query", "req.cookies"], 1, "params."),
          q("Query ?q=x vem em:", ["req.params.q", "req.query.q", "req.body.q", "req.headers"], 1, "query."),
          q("Para ler JSON no body:", ["nada", "express.json()", "express.raw()", "jsonParse"], 1, "Middleware que faz parse."),
        ]
      ),
      L("n9-env", "Variáveis de ambiente e dotenv", "Segredos fora do código.",
        [
          intro("Nunca commite senha, token ou URL de banco no código. Use variáveis de ambiente."),
          exemplo("// .env (nunca commitado)\nDATABASE_URL=postgres://...\nAPI_KEY=xxx\n\n// code\nimport 'dotenv/config';\nconst url = process.env.DATABASE_URL;"),
          dica("Em produção, configure variáveis no provedor (Vercel, Fly, Render)."),
          resumo(["Nunca commite segredos.", "dotenv lê .env em dev.", "Em produção: config do host."])
        ],
        [
          q("Onde guardar segredos:", ["No código", "Em .env", "Em README", "Na branch"], 1, ".env (fora do git)."),
          q("Pra ignorar do git:", ["gitignore com .env", ".gitconfig", "npm ignore", "nada"], 0, "Listar no .gitignore."),
          q("Em produção:", ["commit .env", "config do host", "email", "pendrive"], 1, "Config no host/CI."),
        ]
      ),
      L("n10-db", "Conectando a banco de dados", "Postgres/SQLite básico.",
        [
          intro("Vamos conectar Node ao Postgres usando a lib <code>pg</code>."),
          exemplo("import pg from 'pg';\nconst client = new pg.Client({ connectionString: process.env.DATABASE_URL });\nawait client.connect();\nconst { rows } = await client.query('SELECT * FROM usuarios');"),
          dica("ORMs modernos (Prisma, Drizzle) são mais ergonômicos em apps maiores."),
          resumo(["pg é driver cru.", "ORMs economizam boilerplate.", "Sempre use parâmetros para evitar SQL Injection."])
        ],
        [
          q("pg é:", ["ORM", "Driver Postgres", "Banco", "IDE"], 1, "Driver de baixo nível."),
          q("ORM popular em Node:", ["Prisma", "Hibernate", "Flask", "TypeORM e Prisma ambos"], 3, "Ambos populares."),
          q("Para evitar SQL Injection:", ["concat", "parametrizar", "string builder", "base64"], 1, "Parâmetros $1, ?, etc."),
        ]
      ),
      L("n11-async", "async/await e Promises", "Assincronia legível.",
        [
          intro("Promises representam valores futuros. <code>async/await</code> deixa o código assíncrono parecido com síncrono."),
          exemplo("async function carregar() {\n  try {\n    const res = await fetch('/api/x');\n    const data = await res.json();\n    return data;\n  } catch (err) { console.error(err); throw err; }\n}"),
          dica("Funções async sempre retornam Promise — mesmo que você retorne string."),
          resumo(["async/await > callbacks aninhados.", "try/catch captura erros.", "Funções async retornam Promise."])
        ],
        [
          q("async retorna sempre:", ["Valor puro", "Promise", "String", "Number"], 1, "Mesmo retorno síncrono vira Promise resolvida."),
          q("Erros em await:", ["Silentes", "try/catch pega", "Nunca ocorrem", "Param do await"], 1, "try/catch funciona como síncrono."),
          q("Callback hell cura:", ["Mais callbacks", "Promises/async-await", "Ignorar", "Recriar"], 1, "async-await > pirâmide."),
        ]
      ),
      L("n12-errors", "Tratando erros em APIs", "Nunca deixe o process cair.",
        [
          intro("Em produção, erros não podem derrubar o servidor. Express tem middleware de erro especial: <code>(err, req, res, next)</code>."),
          exemplo("app.use((err, req, res, next) => {\n  console.error(err);\n  res.status(err.status || 500).json({ error: err.message });\n});\n\n// lance erros assim\nthrow Object.assign(new Error('Não encontrado'), { status: 404 });"),
          armadilha("Em async/await você precisa capturar a exceção e chamar <code>next(err)</code> manualmente, ou usar <code>express-async-errors</code>."),
          resumo(["Middleware de erro unifica respostas.", "Nunca expor stack trace ao cliente.", "Monitore erros (Sentry)."])
        ],
        [
          q("Middleware de erro tem quantos args:", ["2", "3", "4", "5"], 2, "4 args: err, req, res, next."),
          q("Stack trace em prod:", ["Mostre", "Esconda", "Só em GET", "Em header"], 1, "Nunca vazar internals."),
          q("Monitoramento de erros:", ["manual só", "Sentry/NewRelic/...", "não precisa", "console.log basta"], 1, "Ferramentas dedicadas."),
        ]
      ),
      L("n13-auth", "Autenticação com JWT", "Tokens stateless.",
        [
          intro("JWT (JSON Web Token) é um token assinado com payload JSON. Servidor gera, cliente envia nos próximos requests."),
          exemplo("import jwt from 'jsonwebtoken';\nconst token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });\n// verificar\nconst data = jwt.verify(token, process.env.JWT_SECRET);"),
          H2("Boas práticas"),
          UL(["Senhas com <code>bcrypt</code> (nunca texto puro).", "Tokens com prazo curto + refresh token.", "HTTPS sempre.", "HttpOnly cookie > localStorage para o token (XSS)."]),
          resumo(["JWT = token assinado stateless.", "Senhas sempre com hash.", "Prefira cookie HttpOnly para token."])
        ],
        [
          q("JWT é:", ["Criptografado", "Assinado, legível", "Encode só", "XML"], 1, "Assinatura garante integridade."),
          q("Senhas em banco:", ["Claras", "Hash (bcrypt/argon2)", "Base64", "MD5"], 1, "Hash forte com salt."),
          q("localStorage pra token:", ["Mais seguro", "Vulnerável a XSS", "Padrão", "Impossível"], 1, "HttpOnly cookie é melhor."),
        ]
      ),
      L("n14-test", "Testes básicos em Node", "Vitest e Supertest.",
        [
          intro("Testes automatizados são investimento: dão confiança para refatorar. Vitest é rápido e moderno; Supertest testa APIs HTTP."),
          exemplo("// soma.test.js\nimport { test, expect } from 'vitest';\nimport { soma } from './soma';\ntest('soma dois números', () => {\n  expect(soma(2, 3)).toBe(5);\n});"),
          dica("Teste a lógica, não os detalhes. Se você renomeia uma função, o teste não deveria quebrar — a menos que mude o comportamento."),
          resumo(["Testes protegem refatorações.", "Vitest + Supertest são o padrão.", "Teste comportamento, não implementação."])
        ],
        [
          q("Vitest é:", ["Monitoramento", "Framework de teste", "DB", "Server"], 1, "Test runner moderno."),
          q("Supertest testa:", ["DB direto", "APIs HTTP", "CSS", "Imagens"], 1, "Requests em Express etc."),
          q("Bom teste foca em:", ["Implementação", "Comportamento", "Nome de var", "Ordem dos arquivos"], 1, "O que a unidade faz."),
        ]
      ),
      L("n15-logs", "Logs estruturados e observabilidade", "Pino, morgan, métricas.",
        [
          intro("console.log funciona em dev mas em produção você precisa de logs estruturados (JSON), níveis, rotação e agregação."),
          exemplo("import pino from 'pino';\nconst log = pino({ level: 'info' });\nlog.info({ userId: 1, action: 'login' }, 'user logged in');"),
          resumo(["Logs estruturados facilitam busca.", "Níveis: trace/debug/info/warn/error/fatal.", "Centralize (Logtail, Datadog, ELK)."])
        ],
        [
          q("Log estruturado é:", ["Texto livre", "JSON com campos", "Imagem", "Vídeo"], 1, "JSON facilita filtro."),
          q("Ferramenta popular:", ["pino", "lodash", "axios", "chalk"], 0, "Logger rápido."),
          q("Produção deve:", ["Ignorar logs", "Agregar e alertar", "Apagar", "Só console"], 1, "Agregação/alertas essenciais."),
        ]
      ),
      L("n16-deploy", "Deploy — Fly, Render, Railway", "Do localhost à web.",
        [
          intro("Opções modernas de hospedar Node:"),
          UL(["<strong>Fly.io</strong>: rápido, global, containers.", "<strong>Render</strong>: simples, generoso no free.", "<strong>Railway</strong>: DX excelente.", "<strong>VPS</strong> (DigitalOcean, Hetzner) + PM2/systemd para quem quer controle total."]),
          dica("Use Docker para garantir reprodutibilidade entre dev e prod."),
          resumo(["Platforms modernas abstraem infra.", "Docker padroniza ambiente.", "VPS dá controle ao custo de trabalho."])
        ],
        [
          q("Para deploy fácil:", ["Fly/Render/Railway", "Configurar Nginx do zero", "FTP", "Só cron"], 0, "Plataformas modernas."),
          q("Docker serve para:", ["Animação", "Reprodutibilidade de ambiente", "Banco", "CSS"], 1, "Imagem roda igual em qualquer lugar."),
          q("VPS é mais:", ["Fácil", "Controle + trabalho", "Rápido de setup", "Automatizado"], 1, "Flexível, mas manual."),
        ]
      ),
      L("n17-npm-own", "Publicando seu próprio pacote", "Contribuindo para a comunidade.",
        [
          intro("Depois de fazer várias funções úteis, você pode publicá-las no npm."),
          exemplo("npm login\nnpm publish"),
          H2("Checklist"),
          UL(["Nome único no registry.", "<code>main</code> ou <code>exports</code> apontando pro arquivo certo.", "README claro com exemplos.", "Semver: 1.0.0 → 1.1.0 → 2.0.0 conforme natureza das mudanças."]),
          resumo(["npm é aberto para quem quiser contribuir.", "README + semver > tudo.", "Manter é trabalho — só publique o que vai cuidar."])
        ],
        [
          q("Antes de publicar:", ["Criar conta npm", "Pagar", "Pedir permissão", "Fazer fork"], 0, "Login no npm."),
          q("Semver: adicionei feature compatível:", ["major", "minor", "patch", "alpha"], 1, "Minor bump."),
          q("Pacote publicado:", ["Não precisa README", "README é essencial", "Só código", "Só testes"], 1, "Documentação = adoção."),
        ]
      ),
      L("n18-checklist", "Checklist final e próximos passos", "Produção consciente.",
        [
          intro("Lista do que um app Node profissional precisa antes de subir:"),
          UL(["Variáveis de ambiente separadas dev/staging/prod.", "Hash de senhas com bcrypt/argon2.", "HTTPS obrigatório.", "Rate limiting (express-rate-limit).", "CORS configurado.", "Helmet para headers seguros.", "Backup automático do banco.", "Monitoramento de erros (Sentry) e performance (APM).", "Logs centralizados.", "CI/CD automatizado."]),
          dica("Próximo passo: <strong>Node.js Avançado</strong> (VIP). Streams, clusters, performance, arquitetura hexagonal, microsserviços."),
          resumo(["Produção é sobre confiabilidade, não só features.", "Segurança, monitoramento e backup são inegociáveis.", "Automação via CI/CD reduz falha humana."])
        ],
        [
          q("Item essencial pra prod:", ["console.log", "HTTPS", "FTP", "chat"], 1, "TLS é premissa."),
          q("Helmet serve para:", ["Layout", "Headers seguros", "Git", "CSS"], 1, "Defesa em camadas HTTP."),
          q("CI/CD:", ["Manual", "Automatizado", "Opcional sempre", "Só em Java"], 1, "Evita erro humano."),
          q("Rate limit previne:", ["SEO", "Abuso/DDoS básico", "CSS bug", "NoSQL"], 1, "Protege API."),
        ]
      ),
    ],
  };

  // ===============================================================
  // CURSO 13 — TYPESCRIPT INICIANTE (GRÁTIS)
  // ===============================================================
  const tsBasic = {
    id: "typescript-iniciante",
    title: "TypeScript Iniciante",
    tagline: "JavaScript com superpoderes de tipagem.",
    description: "Aprenda TypeScript do zero. Entenda por que tipos estáticos evitam bugs, como anotar variáveis, funções e objetos, e como o compilador te ajuda todo dia em projetos médios e grandes.",
    level: "Iniciante",
    duration: "6h",
    theme: "theme-js",
    cover: "TS",
    vip: false,
    instructor: "Letícia Queiroz",
    lessons: [
      L("t1-why", "Por que TypeScript existe",
        "O problema que ele resolve.",
        [
          intro("JavaScript é lindo e flexível, mas essa flexibilidade tem um custo: em projetos grandes, é fácil passar o argumento errado, acessar propriedade que não existe, ou renomear algo e esquecer de atualizar em outro canto. Esses bugs só aparecem em tempo de execução."),
          porque("TypeScript adiciona um sistema de tipos em cima do JS. O compilador vê esses erros <strong>antes</strong> de rodar. Em projetos médios/grandes, isso economiza muitas horas de debug."),
          H2("É gradual"),
          P("Não é tudo ou nada: você pode adotar TS em partes. Qualquer JS válido é TS válido."),
          dica("Todo grande framework (React, Vue, Angular, Next, NestJS) já usa TS como padrão ou primeira classe."),
          resumo([
            "TS = JS + tipos estáticos + compilador.",
            "Erros pegos antes de rodar.",
            "Adoção gradual é possível.",
          ])
        ],
        [
          q("TypeScript é:", ["Runtime", "Superset de JS com tipos", "Framework", "DB"], 1, "Superset com compilador."),
          q("Qualquer JS válido:", ["Nada a ver", "É TS válido", "Quebra em TS", "Só em browser"], 1, "Compatibilidade gradual."),
          q("Benefício principal:", ["Mais rápido em runtime", "Erros em tempo de compilação", "Melhor CSS", "Menos RAM"], 1, "Early error detection."),
        ]
      ),
      L("t2-setup", "Instalando e configurando TS",
        "Do zero ao tsc funcionando.",
        [
          intro("Setup mínimo:"),
          exemplo("npm init -y\nnpm i -D typescript @types/node\nnpx tsc --init  # cria tsconfig.json"),
          H2("tsconfig.json essencial"),
          CODE("{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"ESNext\",\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"outDir\": \"dist\",\n    \"skipLibCheck\": true\n  }\n}"),
          dica("<code>strict: true</code> é obrigatório. Sem ele, você só pega metade dos erros."),
          resumo([
            "tsc é o compilador oficial.",
            "tsconfig.json controla tudo.",
            "<code>strict</code> é inegociável.",
          ])
        ],
        [
          q("tsc é:", ["Server", "Compilador", "Linter", "DB"], 1, "TypeScript Compiler."),
          q("strict:true deve ser:", ["Opcional", "Ligado sempre", "Nunca", "Só no front"], 1, "Ativa checagens importantes."),
          q("tsconfig é escrito em:", ["YAML", "JSON", "TOML", "INI"], 1, "JSON com comentários permitidos."),
        ]
      ),
      L("t3-basic-types", "Tipos primitivos", "string, number, boolean, array.",
        [
          intro("Anotação básica:"),
          exemplo("let nome: string = 'Ana';\nlet idade: number = 30;\nlet ativo: boolean = true;\nlet tags: string[] = ['a','b'];\nlet ponto: [number, number] = [10, 20]; // tupla"),
          dica("Quase sempre o TS consegue <em>inferir</em> o tipo — não polua o código com tipos óbvios."),
          resumo([
            "string, number, boolean cobrem primitivos.",
            "Arrays: <code>T[]</code> ou <code>Array&lt;T&gt;</code>.",
            "Tuplas têm tamanho fixo e tipos por posição.",
          ])
        ],
        [
          q("Array de strings em TS:", ["string&amp;", "string[]", "Array of string", "strarr"], 1, "Notação padrão."),
          q("Tupla é:", ["Array flex", "Array tamanho/tipo fixo por posição", "Objeto", "Enum"], 1, "Ex: [string, number]."),
          q("Anotar sempre:", ["Sim", "Não — use inferência", "Só em prod", "Só em dev"], 1, "Inferência reduz ruído."),
        ]
      ),
      L("t4-any-unknown-void", "any, unknown, void, never",
        "Tipos especiais e quando evitar.",
        [
          intro("<code>any</code> desliga o checagem — evite quase sempre. <code>unknown</code> é o \"any seguro\": você precisa estreitar antes de usar. <code>void</code> diz que função não retorna. <code>never</code> diz que nunca retorna (loop infinito, exceção)."),
          armadilha("<code>any</code> epidêmico destrói o benefício do TS. Se for pra usar any, é melhor escrever em JS puro."),
          dica("Prefira <code>unknown</code> para dados externos (JSON, APIs) e estreite com <code>typeof</code>/<code>instanceof</code>."),
          resumo([
            "any = sem checagem (evitar).",
            "unknown = precisa estreitar — seguro.",
            "void = função não retorna.",
            "never = função que nunca retorna.",
          ])
        ],
        [
          q("unknown vs any:", ["Iguais", "unknown exige estreitamento", "any é seguro", "never é igual"], 1, "Segurança vs liberdade."),
          q("Usar any está OK?", ["Sempre", "Raramente e com cuidado", "Sempre obrigatório", "Só em .js"], 1, "Exceção, não regra."),
          q("void significa:", ["Zero", "Nenhum retorno significativo", "Erro", "Null"], 1, "Função sem valor útil."),
        ]
      ),
      L("t5-functions", "Funções tipadas",
        "Parâmetros, retornos, opcionais.",
        [
          intro("Funções são onde TS mais brilha: você documenta contratos."),
          exemplo("function soma(a: number, b: number): number {\n  return a + b;\n}\n\nfunction saudar(nome: string, prefixo?: string): string {\n  return `${prefixo ?? 'Olá'}, ${nome}`;\n}\n\nconst dobro = (x: number): number => x * 2;"),
          dica("Deixe o TS inferir retorno em funções pequenas. Em funções públicas/exportadas, anote explicitamente."),
          resumo([
            "Anotar params + retorno deixa contrato claro.",
            "Params opcionais com <code>?</code>.",
            "Funções arrow tipam igual.",
          ])
        ],
        [
          q("Param opcional:", ["...", "?", "|null", "!"], 1, "param?: tipo."),
          q("Retorno anotado:", ["Antes do nome", "Depois dos args", "Nunca", "Em comentário"], 1, "function x(): tipo."),
          q("Quando anotar retorno:", ["Sempre", "Em API pública", "Nunca", "Só num.100"], 1, "Ajuda outros a ler."),
        ]
      ),
      L("t6-objects", "Tipando objetos",
        "Interfaces e types.",
        [
          intro("Dois jeitos principais de descrever a forma de um objeto: <code>type</code> (alias de tipo) e <code>interface</code>."),
          exemplo("type Usuario = { id: number; nome: string; email?: string };\ninterface Produto { id: number; preco: number }\n\nconst u: Usuario = { id: 1, nome: 'Ana' };\nconst p: Produto = { id: 1, preco: 10 };"),
          H2("type vs interface"),
          UL([
            "Interfaces podem ser estendidas (<code>extends</code>) e \"mergeadas\" automaticamente se declaradas duas vezes.",
            "Types aceitam união, interseção, tuplas, mapped types — são mais flexíveis.",
          ]),
          dica("Na dúvida, use <code>type</code>. Use <code>interface</code> quando fizer sentido explicitamente (APIs públicas, extensão)."),
          resumo([
            "type é alias versátil.",
            "interface é especializada em objetos extensíveis.",
            "? marca campo opcional.",
          ])
        ],
        [
          q("Campo opcional em tipo de objeto:", ["|null", "?", "!", "*"], 1, "nome?: tipo."),
          q("Pra unir tipos (union), use:", ["interface", "type", "class", "enum"], 1, "type X = A | B."),
          q("interface suporta:", ["extends + merging", "só union", "nada", "enum"], 0, "Extensão e declaration merging."),
        ]
      ),
      L("t7-union-intersection", "Union e Intersection", "Tipos combinados.",
        [
          intro("Union (<code>A | B</code>) = é A ou B. Intersection (<code>A &amp; B</code>) = é A e B ao mesmo tempo."),
          exemplo("type Status = 'pendente' | 'pago' | 'cancelado';\nfunction acao(s: Status) { /* TS força só esses valores */ }\n\ntype Identificavel = { id: number };\ntype ComNome = { nome: string };\ntype Usuario = Identificavel &amp; ComNome;"),
          dica("Unions de strings (<code>'a'|'b'</code>) substituem enums na maioria dos casos, mais leves."),
          resumo([
            "Union: A ou B.",
            "Intersection: A e B.",
            "String literal union é ótimo substituto de enum.",
          ])
        ],
        [
          q("A|B significa:", ["A e B juntos", "A ou B", "Nem A nem B", "Array"], 1, "União."),
          q("A&B significa:", ["A ou B", "Ambos", "Nenhum", "Subset"], 1, "Interseção."),
          q("String literal union é:", ["Bug", "Alternativa leve a enum", "Classe", "Impossível"], 1, "Leve e expressiva."),
        ]
      ),
      L("t8-generics", "Generics — tipos parametrizáveis", "Reutilização com segurança.",
        [
          intro("Generics permitem escrever funções e tipos que funcionam para qualquer tipo, preservando a informação."),
          exemplo("function primeiro<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\nprimeiro([1,2,3]);      // T inferido como number\nprimeiro(['a','b']);    // T inferido como string\n\ntype Resposta<T> = { ok: boolean; data: T };\nconst r: Resposta<string> = { ok: true, data: 'x' };"),
          dica("Generics permitem que o usuário da função mantenha o tipo específico que passou, sem perder informação."),
          resumo([
            "<code>&lt;T&gt;</code> é parâmetro de tipo.",
            "Permite reutilização tipada.",
            "Não confunda com any — tipos continuam checados.",
          ])
        ],
        [
          q("Generics servem para:", ["Nenhuma checagem", "Reuso preservando tipos", "CSS", "Runtime"], 1, "Reuso com segurança."),
          q("&lt;T&gt; é:", ["Constante", "Parâmetro de tipo", "Erro", "Enum"], 1, "Placeholder de tipo."),
          q("Generics são como any:", ["Sim", "Não — mantêm checagem", "Quase", "Em runtime"], 1, "TS continua validando."),
        ]
      ),
      L("t9-narrowing", "Narrowing — estreitando tipos",
        "typeof, instanceof, in, guards.",
        [
          intro("Quando uma variável é <code>string | number</code>, TS exige que você \"prove\" qual é antes de usar métodos específicos."),
          exemplo("function tamanho(x: string | number) {\n  if (typeof x === 'string') return x.length; // string aqui\n  return x.toString().length;                   // number aqui\n}"),
          H2("Técnicas de narrowing"),
          UL(["<code>typeof</code> para primitivos.", "<code>instanceof</code> para classes.", "<code>in</code> para propriedade existe.", "Type predicates: <code>x is User</code>."]),
          resumo([
            "Narrowing restringe o tipo dentro de um bloco.",
            "TS \"vê\" seu if/typeof/instanceof.",
            "Sem narrowing, você precisa fazer cast (ruim).",
          ])
        ],
        [
          q("Pra testar primitivo:", ["instanceof", "typeof", "in", "as"], 1, "typeof é pra primitivos."),
          q("instanceof serve pra:", ["Primitivos", "Classes", "Objetos literais", "Strings"], 1, "Checa instância de classe."),
          q("Sem narrowing, TS diz:", ["OK sempre", "Erro ao usar método específico", "Silêncio", "Runtime error"], 1, "O tipo é a união completa."),
        ]
      ),
      L("t10-arrays-utils", "Arrays, tuplas e utilitários",
        "Partial, Pick, Omit, ReturnType.",
        [
          intro("TS tem vários tipos utilitários prontos que manipulam outros tipos:"),
          exemplo("type User = { id: number; nome: string; email: string };\ntype Parcial = Partial<User>;             // tudo opcional\ntype SoEmail = Pick<User, 'email'>;       // só email\ntype SemEmail = Omit<User, 'email'>;      // tira email\ntype Chave = keyof User;                  // 'id'|'nome'|'email'"),
          dica("Memorize Partial, Pick, Omit, Required, Record. Cobre 80% dos casos."),
          resumo([
            "Tipos utilitários evitam retrabalho.",
            "Partial/Pick/Omit são campeões.",
            "keyof extrai as chaves de um tipo.",
          ])
        ],
        [
          q("Pick pega:", ["Tipo inteiro", "Subconjunto de campos", "Nada", "Union"], 1, "Pick<T, K>."),
          q("Omit faz:", ["Tira campos", "Adiciona", "Clona", "Union"], 0, "Remove campos."),
          q("Partial deixa campos:", ["Obrigatórios", "Opcionais", "Constantes", "Públicos"], 1, "Tudo vira T | undefined."),
        ]
      ),
      L("t11-modules", "Módulos em TS",
        "Import/export tipados.",
        [
          intro("TS usa import/export ESM. Você pode importar só o tipo: <code>import type</code>."),
          exemplo("// user.ts\nexport type User = { id: number; nome: string };\nexport function saudar(u: User) { return `Oi, ${u.nome}`; }\n\n// main.ts\nimport { saudar, type User } from './user';"),
          dica("<code>import type</code> é removido em runtime — zero overhead no bundle."),
          resumo([
            "Módulos ESM com tipagem.",
            "<code>import type</code> = só tipos.",
            "Cada arquivo pode ter seus próprios tipos.",
          ])
        ],
        [
          q("import type:", ["Gera código em runtime", "Só tipo — some no build", "Igual a import", "Não existe"], 1, "Zero runtime cost."),
          q("Módulos em TS:", ["Só CJS", "ESM com tipos", "XML", "HTML"], 1, "ESM é o padrão."),
          q("Exports nomeados:", ["Não existem", "Sim, tipo e função", "Só tipo", "Só função"], 1, "Pode exportar qualquer um."),
        ]
      ),
      L("t12-classes", "Classes com TS",
        "Quando usar e como tipar.",
        [
          intro("Classes existem em JS. TS adiciona modificadores e tipos:"),
          exemplo("class Contador {\n  private valor = 0;\n  constructor(public nome: string) {}\n  increment(n: number = 1) { this.valor += n; }\n  getValor(): number { return this.valor; }\n}"),
          dica("Em apps modernos React/Node, funções pura + hooks substituem boa parte das classes. Use classe quando a regra pedir (ORM, framework)."),
          resumo([
            "Classes ganham visibilidade (private/public/protected).",
            "<code>readonly</code> para props imutáveis.",
            "Nem sempre classe é a resposta — funções podem bastar.",
          ])
        ],
        [
          q("private em classe:", ["Público", "Só dentro da classe", "Global", "Runtime"], 1, "Acesso restrito."),
          q("readonly:", ["Modificável", "Só leitura pós-init", "Lazy", "Volátil"], 1, "Imutabilidade pós-constructor."),
          q("Em React moderno:", ["Sempre classes", "Funções+hooks dominam", "Só classes", "Sem componentes"], 1, "Hooks substituem classes."),
        ]
      ),
      L("t13-react", "TS com React", "Tipando componentes.",
        [
          intro("Em React com TS, você tipa as props e, quando necessário, o state. Hooks são tipados automaticamente."),
          exemplo("type ButtonProps = { label: string; onClick?: () => void };\nexport function Button({ label, onClick }: ButtonProps) {\n  return <button onClick={onClick}>{label}</button>;\n}\n\nconst [count, setCount] = useState<number>(0);"),
          dica("Evite <code>React.FC</code> em código novo — limita children implicitamente e não agrega muito."),
          resumo([
            "Tipa props com type/interface.",
            "useState&lt;T&gt; quando o valor inicial não deixa claro.",
            "Evite React.FC se puder.",
          ])
        ],
        [
          q("Tipar props:", ["Obrigatório JSDoc", "type/interface", "Any", "Nada"], 1, "Type/interface."),
          q("useState inicial null:", ["Tipa sozinho bem", "Melhor useState<Tipo|null>(null)", "Proibido", "Mesmo que undefined"], 1, "Explicitar evita any."),
          q("React.FC hoje:", ["Obrigatório", "Evite — opcional e limitado", "Melhor que antes", "Hook"], 1, "Não é recomendado."),
        ]
      ),
      L("t14-migration", "Migrando JS para TS",
        "Estratégia incremental.",
        [
          intro("Raramente você reescreve do zero. Migração gradual é o caminho:"),
          OL([
            "Adicione <code>tsconfig.json</code> com <code>allowJs: true, checkJs: false</code>.",
            "Renomeie um arquivo pequeno para .ts.",
            "Adicione anotações.",
            "Ligue <code>noImplicitAny</code>, corrija erros.",
            "Avance arquivo por arquivo.",
            "Eventualmente, ligue <code>strict: true</code>.",
          ]),
          dica("Priorize domínio/negócio sobre UI. Bugs em regras de negócio doem mais."),
          resumo([
            "Migração gradual > big bang.",
            "Strict ligado no fim, não no começo.",
            "Ferramentas: ts-migrate (Airbnb) ajudam.",
          ])
        ],
        [
          q("Migração ideal:", ["Big bang", "Gradual", "Sem plano", "Impossível"], 1, "Passo a passo funciona."),
          q("allowJs permite:", ["Nada", "Misturar js e ts no mesmo projeto", "Só strict", "Deploy"], 1, "Coexistência durante migração."),
          q("strict liga:", ["No dia zero", "Depois da migração estabilizar", "Nunca", "Sempre"], 1, "Cresce o nível aos poucos."),
        ]
      ),
      L("t15-practical-types", "Tipando APIs e formulários",
        "Fluxo do dado ponta a ponta.",
        [
          intro("Uma boa stack TS tipa o que chega da API e valida em runtime. O padrão moderno: <em>zod</em>."),
          exemplo("import { z } from 'zod';\nconst User = z.object({ id: z.number(), nome: z.string(), email: z.string().email() });\ntype User = z.infer<typeof User>;\n\nconst data = User.parse(responseJson); // valida em runtime + tipa"),
          dica("zod unifica validação + tipos. Muito melhor que checar manualmente e duplicar."),
          resumo([
            "Tipos sem validação confiam demais no backend.",
            "zod valida e deriva tipos automaticamente.",
            "Fluxo: request → parse → uso tipado.",
          ])
        ],
        [
          q("zod faz:", ["Só validação runtime", "Valida e deriva tipos", "Só tipos", "Nada"], 1, "Dupla função."),
          q("Tipos TS em runtime:", ["Existem", "Apagados no build", "Só em dev", "Só em prod"], 1, "TS é só compile-time."),
          q("Dados externos:", ["Confiar cegamente", "Validar antes de usar", "Ignorar sempre", "Only GET"], 1, "Nunca confie em input externo."),
        ]
      ),
      L("t16-tooling", "Ferramental TS",
        "ESLint, Prettier, tsc em CI.",
        [
          intro("Time saudável roda:"),
          UL([
            "<code>tsc --noEmit</code> no CI: falha se tipos quebram.",
            "ESLint + plugin-typescript: regras de estilo e bugs comuns.",
            "Prettier: formatação consistente.",
            "Husky + lint-staged: roda tudo antes do commit.",
          ]),
          dica("Configurar uma vez bem vale por todo o projeto. Evita 'PR de indentação'."),
          resumo([
            "Lint + format + typecheck cobrem classe inteira de bugs.",
            "Automatize no CI e no pre-commit.",
            "Discussões de estilo viram zero.",
          ])
        ],
        [
          q("tsc --noEmit:", ["Builda + emite", "Só checa tipos", "Deleta", "Deploy"], 1, "Verificação sem output."),
          q("Prettier cuida de:", ["Tipos", "Formatação", "Lógica", "Banco"], 1, "Estilo consistente."),
          q("pre-commit:", ["Ignorar", "Rodar lint/format/tipos", "Commit gigante", "Só em prod"], 1, "Garante qualidade antes do commit."),
        ]
      ),
      L("t17-gotchas", "Armadilhas comuns",
        "Erros de iniciante em TS.",
        [
          intro("Top erros de quem começa:"),
          UL([
            "Usar <code>any</code> pra 'passar compilação'.",
            "Cast forçado com <code>as Tipo</code> sem ter certeza.",
            "Ignorar <code>strictNullChecks</code>.",
            "Não distinguir <code>type</code> vs <code>interface</code>.",
            "Repetir tipos ao invés de extrair em um arquivo comum.",
          ]),
          armadilha("Todo <code>as</code> é um \"acredita em mim\" para o compilador. Use com moderação e teste em runtime se possível."),
          resumo([
            "any e as são escapes — evite.",
            "Reuso de tipo é tão importante quanto de função.",
            "Configuração strict evita fundo falso.",
          ])
        ],
        [
          q("as Tipo é:", ["Seguro", "Confiança forçada", "Obrigatório", "Grátis"], 1, "Você assume a responsabilidade."),
          q("strictNullChecks pega:", ["Bugs de null/undefined", "Nada", "Só arrays", "Só funções"], 0, "Crucial pra evitar NPE."),
          q("Tipos repetidos:", ["Boas", "Refatorar em arquivo comum", "Impossível", "Bug do TS"], 1, "DRY para tipos também."),
        ]
      ),
      L("t18-next", "Próximos passos em TS",
        "O que estudar depois.",
        [
          intro("Com o básico sólido, próximos tópicos valem ouro:"),
          UL([
            "Generics avançados (constraints, conditional types).",
            "Utility types próprios (<code>ReturnType</code>, <code>Parameters</code>, <code>Awaited</code>, etc.).",
            "Branded types e nominal typing.",
            "zod/valibot no runtime.",
            "tRPC para tipagem ponta-a-ponta cliente-servidor.",
          ]),
          dica("Próximo curso natural: <strong>TypeScript Avançado</strong> (VIP). Foca em conditional types, template literal types, inferência profunda."),
          resumo([
            "TS básico te leva a projetos reais.",
            "O sistema de tipos é enorme — continue aprendendo.",
            "tRPC é o próximo salto em type safety full-stack.",
          ])
        ],
        [
          q("Tipagem ponta-a-ponta:", ["Impossível", "tRPC, GraphQL+codegen", "Só manual", "Bug"], 1, "Ferramentas modernas resolvem."),
          q("Utility types avançados:", ["ReturnType/Parameters/Awaited", "Nada", "Só Partial", "CSS"], 0, "Essenciais em apps tipados."),
          q("zod é:", ["ORM", "Schema validator + tipos", "UI", "Server"], 1, "Validação + type inference."),
          q("Depois de iniciante:", ["Para", "Avançado (VIP)", "Esquecer TS", "Só JS"], 1, "Aprofundar o sistema de tipos."),
        ]
      ),
    ],
  };

  // ===============================================================
  // CURSO 14 — DEVOPS INICIANTE (GRÁTIS)
  // ===============================================================
  const devopsBasic = {
    id: "devops-iniciante",
    title: "DevOps Iniciante",
    tagline: "Do seu código à produção, com segurança e automação.",
    description: "Entenda o que é DevOps, como funcionam Docker, CI/CD, deploy, logs e monitoramento básico. Foco em conceitos e prática mínima viável — sem encher de ferramentas.",
    level: "Iniciante",
    duration: "8h",
    theme: "theme-py",
    cover: "DevOps",
    vip: false,
    instructor: "Vitor Gomes",
    lessons: [
      L("d1-what", "O que é DevOps",
        "Cultura antes de ferramenta.",
        [
          intro("DevOps é o encontro entre <em>Dev</em> (quem escreve código) e <em>Ops</em> (quem opera servidores). Antes, eram times separados que brigavam: \"na minha máquina funciona\" vs \"seu deploy caiu o banco\". DevOps quebra esse muro."),
          porque("Em empresas modernas, desenvolvedores são responsáveis por fazer deploy, monitorar, responder incidentes. Isso exige que você entenda o básico de infra."),
          H2("Pilares"),
          UL(["Cultura de colaboração.", "Automação (CI/CD, IaC).", "Observabilidade (logs, métricas, traces).", "Feedback rápido."]),
          resumo(["DevOps é cultura + automação.", "Dev entende ops; ops entende dev.", "Feedback rápido > perfeição inicial."])
        ],
        [
          q("DevOps é:", ["Cargo", "Cultura + práticas", "Ferramenta", "Empresa"], 1, "Movimento organizacional."),
          q("Pilar do DevOps:", ["Isolamento", "Automação", "Reuniões diárias", "Sprints"], 1, "Automação é central."),
          q("Observabilidade =", ["Logs/métricas/traces", "Só logs", "Backup", "DB"], 0, "Três pilares."),
        ]
      ),
      L("d2-linux", "Linux essencial",
        "Comandos que você vai usar todo dia.",
        [
          intro("Servidores rodam Linux em 90% dos casos. Você precisa do básico — não precisa ser sysadmin."),
          UL([
            "<code>ls, cd, pwd, cp, mv, rm</code>: navegação e arquivos.",
            "<code>cat, less, tail -f, grep</code>: ler e filtrar texto.",
            "<code>ps, top, htop, kill</code>: processos.",
            "<code>ssh user@host</code>: conexão remota.",
            "<code>sudo, chmod, chown</code>: permissões.",
          ]),
          dica("tail -f arquivo.log no terminal é o seu melhor amigo em produção."),
          resumo(["Linux é seu ambiente de trabalho.", "Texto é a interface.", "ssh + logs + processos: básico."])
        ],
        [
          q("Ver logs em tempo real:", ["cat", "tail -f", "ls", "grep"], 1, "tail -f acompanha."),
          q("Matar processo:", ["end", "kill PID", "del", "stop"], 1, "kill + signal."),
          q("Conectar em server:", ["telnet", "ssh user@host", "ftp", "http"], 1, "SSH é padrão."),
        ]
      ),
      L("d3-docker-what", "O que é Docker",
        "Containers e por que mudaram tudo.",
        [
          intro("Docker empacota seu app + dependências em um <em>container</em>. O container roda igual em qualquer lugar que tenha Docker: seu laptop, servidor de amigo, cluster Kubernetes."),
          porque("Acaba com o \"na minha máquina funciona\". Acaba com conflitos de versões. Facilita deploy e escalabilidade."),
          H2("Container vs VM"),
          P("VMs emulam uma máquina inteira (gigabytes, segundos/minutos pra subir). Containers compartilham kernel do host (megabytes, milissegundos). Muito mais leves."),
          resumo(["Docker = container = app isolado e portável.", "Mais leve que VM.", "Base de quase toda infra moderna."])
        ],
        [
          q("Container compartilha com host:", ["CPU apenas", "Kernel Linux", "Nada", "RAM exclusiva"], 1, "Mesmo kernel."),
          q("VM vs container, container é:", ["Mais pesado", "Mais leve", "Igual", "Mais lento"], 1, "Sem emulação de SO."),
          q("Docker resolve:", ["Na minha máquina funciona", "Design", "CSS", "Nada"], 0, "Portabilidade."),
        ]
      ),
      L("d4-dockerfile", "Dockerfile e primeira imagem",
        "Construindo seu container.",
        [
          intro("Dockerfile é a receita da sua imagem. Cada instrução vira uma camada."),
          exemplo("# Dockerfile de app Node\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]"),
          H2("Build e run"),
          CODE("docker build -t meu-app .\ndocker run -p 3000:3000 meu-app"),
          dica("Use imagens <code>-alpine</code> quando possível — muito menores."),
          resumo(["Dockerfile = receita da imagem.", "docker build cria, docker run executa.", "Imagens Alpine são pequenas."])
        ],
        [
          q("Dockerfile começa com:", ["FROM", "RUN", "CMD", "EXPOSE"], 0, "Imagem base primeiro."),
          q("Build gera:", ["Container", "Imagem", "Arquivo .exe", "Config"], 1, "Imagem é o artefato."),
          q("Run a partir de imagem:", ["docker start", "docker run", "docker launch", "docker exec"], 1, "run cria container."),
        ]
      ),
      L("d5-compose", "docker-compose — múltiplos containers",
        "App + banco em um comando.",
        [
          intro("Seu app real tem mais que um serviço: API, banco, cache, fila. <code>docker-compose.yml</code> descreve tudo e sobe com um comando."),
          exemplo("# docker-compose.yml\nversion: '3.9'\nservices:\n  api:\n    build: .\n    ports: [\"3000:3000\"]\n    environment:\n      DATABASE_URL: postgres://user:pass@db:5432/app\n    depends_on: [db]\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: pass\n      POSTGRES_DB: app"),
          CODE("docker compose up"),
          resumo(["Compose orquestra múltiplos containers.", "YAML declarativo.", "Ideal para dev local."])
        ],
        [
          q("Compose serve para:", ["1 container", "Múltiplos serviços em um arquivo", "Build só", "Deploy Kubernetes"], 1, "Orquestrar dev local."),
          q("Formato do compose:", ["JSON", "YAML", "XML", "INI"], 1, "YAML."),
          q("depends_on faz:", ["Ordem de subida (básica)", "Health check perfeito", "Nada", "Deleta"], 0, "Ordem; não health check garantido."),
        ]
      ),
      L("d6-ci-what", "O que é CI",
        "Integração contínua.",
        [
          intro("CI = Continuous Integration. Cada push dispara a pipeline: instala deps, roda testes, build. Se quebra, o PR fica vermelho."),
          porque("Sem CI, bugs voltam dias depois em produção. Com CI, você sabe em minutos se estragou algo."),
          H2("Ferramentas populares"),
          UL(["GitHub Actions (nativo do GitHub).", "GitLab CI.", "CircleCI.", "Jenkins (clássico)."]),
          resumo(["CI = roda testes automaticamente a cada push.", "Feedback rápido = qualidade.", "GitHub Actions é default moderno."])
        ],
        [
          q("CI é:", ["Deploy", "Integração contínua — testes a cada push", "Linting manual", "Backup"], 1, "Disparo automático."),
          q("Ferramenta CI nativa do GitHub:", ["GitLab CI", "GitHub Actions", "Jenkins", "Travis"], 1, "GH Actions."),
          q("Benefício do CI:", ["Feedback rápido", "Lentidão", "Só CI não vale", "Nada"], 0, "Pegar erros cedo."),
        ]
      ),
      L("d7-actions", "GitHub Actions — primeiro workflow",
        "Automatizando testes por push.",
        [
          intro("Actions usa YAML em <code>.github/workflows/ci.yml</code>."),
          exemplo("name: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 20 }\n      - run: npm ci\n      - run: npm test"),
          dica("Cacheie <code>~/.npm</code> com <code>actions/cache</code> pra economizar minutos de CI."),
          resumo(["Workflow em YAML.", "Jobs rodam em runners.", "Use actions reutilizáveis da comunidade."])
        ],
        [
          q("Pasta de workflows:", [".ci", ".github/workflows", "actions/", "ci/"], 1, "Padrão do GitHub."),
          q("YAML ou JSON:", ["JSON", "YAML", "TOML", "INI"], 1, "YAML nos workflows."),
          q("actions/checkout:", ["Deploy", "Faz clone do repo no runner", "Testa", "Backup"], 1, "Passo inicial comum."),
        ]
      ),
      L("d8-cd", "Continuous Deployment básico",
        "Deploy automático por merge.",
        [
          intro("CD = deploy automático após CI verde. Merge na main → produção rodando."),
          H2("Riscos"),
          UL(["Bug passa por testes e vai pra prod → rollback rápido é essencial.", "Feature toggles reduzem risco.", "Canary release: deploy para 5% dos usuários primeiro."]),
          dica("Para começar, deploy automático em staging já é um salto enorme. Prod pode ser manual com botão."),
          resumo(["CD automatiza deploy.", "Testes + rollback rápidos viabilizam.", "Começar por staging reduz risco."])
        ],
        [
          q("CD stands for:", ["Continuous Deployment/Delivery", "Container Docker", "Code Dynamic", "Nenhum"], 0, "Ambos termos existem."),
          q("Canary deploy:", ["Deploy em 100% de uma vez", "Deploy gradual para parte dos users", "Só de madrugada", "Rollback inicial"], 1, "Gradual."),
          q("Começar CD em:", ["Prod do dia 1", "Staging primeiro", "Nunca", "Só Kubernetes"], 1, "Passo a passo."),
        ]
      ),
      L("d9-env", "Ambientes: dev, staging, prod",
        "Isolamento e configs.",
        [
          intro("Três ambientes são clássicos:"),
          UL([
            "<strong>dev</strong>: sua máquina, docker compose.",
            "<strong>staging</strong>: réplica simplificada de prod para testes.",
            "<strong>prod</strong>: onde clientes usam.",
          ]),
          dica("Variáveis de ambiente carregam a diferença — mesmo código, configs diferentes."),
          armadilha("Nunca aponte dev para banco de prod. Um DELETE errado e adeus."),
          resumo(["Isolamento evita acidentes.", "Mesma imagem, configs diferentes.", "Promoção: dev → staging → prod."])
        ],
        [
          q("Staging é:", ["Produção", "Cópia de prod pra testes", "Dev", "Inútil"], 1, "Ambiente de ensaio."),
          q("Config muda entre ambientes via:", ["Código", "Variáveis de ambiente", "URL hardcoded", "Reboot"], 1, "ENV centraliza diferenças."),
          q("Apontar dev pra DB prod:", ["Ótimo", "Perigoso", "Inofensivo", "Rápido"], 1, "Desastres garantidos."),
        ]
      ),
      L("d10-iac", "Infrastructure as Code (IaC)",
        "Infra versionada em arquivos.",
        [
          intro("IaC significa descrever sua infra em arquivos versionados (Git), e usar ferramentas para aplicar. Não se clica mais em console web pra criar servidor."),
          H2("Ferramentas"),
          UL(["<strong>Terraform</strong>: multi-cloud, declarativo.", "<strong>Pulumi</strong>: IaC com linguagens reais (TS, Python).", "<strong>Ansible</strong>: configuração de servidor (imperativo)."]),
          dica("IaC é o que separa projeto hobby de produção real. Reproduzir infra em 5 min > 3 dias."),
          resumo(["Infra em arquivos, não em cliques.", "Terraform domina.", "Versionamento = disaster recovery."])
        ],
        [
          q("IaC principal:", ["Clicar em console", "Descrever infra em arquivos versionados", "Anotações em papel", "Email"], 1, "Código > clique."),
          q("Terraform é:", ["Banco", "IaC multi-cloud", "Linguagem", "Editor"], 1, "Padrão do mercado."),
          q("IaC ajuda em:", ["Escalar", "Reprodutibilidade/DR", "Reduzir custo obrigatoriamente", "UI"], 1, "Replicar infra é trivial."),
        ]
      ),
      L("d11-cloud", "Cloud 101 — AWS, GCP, Azure, e alternativas",
        "Onde seu app vai morar.",
        [
          intro("Cloud é servidor alugado com autoatendimento. Os três grandes: AWS, GCP, Azure. Existem alternativas mais simples e caras menos (Fly, Render, Railway)."),
          H2("Serviços básicos que você vai encontrar"),
          UL(["Compute (EC2/Compute Engine/VM): servidor virtual.", "Armazenamento (S3/GCS/Blob): arquivos.", "Banco gerenciado (RDS/Cloud SQL/Azure DB).", "CDN (CloudFront/Cloud CDN).", "DNS + Load Balancer."]),
          dica("Pra começar, plataformas como Fly.io/Render abstraem tudo isso. AWS é poder total mas com complexidade."),
          resumo(["Cloud é padrão do mercado.", "Serviços se repetem entre provedores.", "Para simplicidade, comece em plataformas simplificadas."])
        ],
        [
          q("Computa cloud:", ["EC2/CE/VM", "S3", "RDS", "CDN"], 0, "Máquinas virtuais."),
          q("Pra começar simples:", ["AWS cru", "Fly/Render/Railway", "GCP cru", "Azure cru"], 1, "Abstraem infra."),
          q("CDN serve para:", ["Banco", "Entregar arquivos estáticos rápidos globalmente", "Deploy", "SSH"], 1, "Cache geograficamente."),
        ]
      ),
      L("d12-monitor", "Monitoramento e observabilidade",
        "Logs, métricas e traces.",
        [
          intro("Sem monitoramento, você só sabe que algo quebrou pelo WhatsApp do cliente."),
          UL([
            "<strong>Logs</strong>: texto do que aconteceu (pino, winston → Logtail, Datadog).",
            "<strong>Métricas</strong>: números ao longo do tempo (CPU, req/s, erros % — Prometheus + Grafana).",
            "<strong>Traces</strong>: rastro de uma request passando por vários serviços (Jaeger, Honeycomb).",
          ]),
          dica("Comece com log estruturado e erros em Sentry. Depois adicione métricas."),
          resumo(["Três pilares de observabilidade.", "Erros críticos devem alertar.", "Sentry + logs agregados são mínimo viável."])
        ],
        [
          q("Logs bem estruturados ajudam em:", ["Busca/alerta", "Design", "UX", "Nada"], 0, "Filtro rápido."),
          q("Sentry serve para:", ["Monitorar erros", "Deploy", "Banco", "CDN"], 0, "Error monitoring."),
          q("Métrica clássica:", ["req/s", "cor do botão", "nome de dev", "tamanho PR"], 0, "Volume de requisições."),
        ]
      ),
      L("d13-security", "Segurança mínima em produção",
        "O que você não pode esquecer.",
        [
          intro("Lista mínima de segurança:"),
          UL([
            "HTTPS em tudo (Let's Encrypt é grátis).",
            "Nunca exponha DB direto pra internet.",
            "Firewall: permitir só o necessário.",
            "Usuário de banco com permissões mínimas.",
            "Senhas/tokens fora do código (secret manager).",
            "Backup criptografado e testado.",
            "Atualizações de segurança aplicadas.",
          ]),
          armadilha("DB exposto é a causa #1 de vazamentos em startups. Trave por VPC ou private network."),
          resumo(["Segurança é camadas.", "Defaults ruins são comuns.", "Cheque a superfície exposta periodicamente."])
        ],
        [
          q("DB na internet pública:", ["Seguro", "Causa de vazamentos", "Padrão", "OK com senha"], 1, "Nunca exponha."),
          q("HTTPS é:", ["Extra opcional", "Obrigatório hoje", "Só em bancos", "Só login"], 1, "Premissa."),
          q("Secret manager guarda:", ["Senhas/tokens", "Backup", "Imagens", "Logs"], 0, "Credenciais."),
        ]
      ),
      L("d14-backup", "Backup e disaster recovery",
        "O dia que o banco vai embora.",
        [
          intro("Todo sistema sério tem rotina de backup + plano de recuperação testado. Senão, é só tempo."),
          UL(["Backup automático diário no mínimo.", "Armazenar fora da mesma cloud/região.", "Criptografia em trânsito e em repouso.", "Teste de restore mensal.", "RPO (perda aceitável) e RTO (tempo de recuperação) definidos."]),
          dica("Backup não testado = placebo. Faça drill de disaster recovery ao menos trimestralmente."),
          resumo(["Backup + restore testado = resiliência.", "Fora da região original.", "RPO/RTO orientam a estratégia."])
        ],
        [
          q("Backup sem restore testado:", ["Seguro", "Falso senso de segurança", "Rápido", "Ok"], 1, "Pode falhar."),
          q("RPO é:", ["Tempo de restore", "Perda de dados aceitável", "Índice", "Log"], 1, "Recovery Point Objective."),
          q("Armazenar backup:", ["Mesma cloud, mesma região", "Em outra região/provedor", "No laptop", "No email"], 1, "Defesa em profundidade."),
        ]
      ),
      L("d15-scale", "Escalando: vertical vs horizontal",
        "Quando 1 server não dá conta.",
        [
          intro("Sua app pegando tração pede mais. Duas formas:"),
          UL([
            "<strong>Vertical</strong>: servidor mais potente (mais CPU/RAM). Simples, limite físico.",
            "<strong>Horizontal</strong>: mais servidores + load balancer. Escalável, mas exige app stateless.",
          ]),
          dica("Stateless é pré-requisito pra horizontal. Sessão em cookie/JWT + cache em Redis centralizado."),
          resumo(["Vertical = mais poderoso.", "Horizontal = mais réplicas.", "Stateless viabiliza horizontal."])
        ],
        [
          q("Vertical scaling:", ["Mais réplicas", "Servidor maior", "Mais bancos", "CDN"], 1, "Upgrade da máquina."),
          q("Horizontal exige:", ["Stateful", "Stateless app", "Banco único", "NFS"], 1, "Sem estado local."),
          q("Load balancer:", ["Banco", "Distribui requests entre réplicas", "CDN", "VPN"], 1, "Distribuidor."),
        ]
      ),
      L("d16-kubernetes-intro", "Kubernetes — um primeiro olhar",
        "Orquestração de containers.",
        [
          intro("Kubernetes (k8s) orquestra muitos containers em muitos servidores. Ele decide onde cada container roda, reinicia se cai, escala automático."),
          H2("Quando faz sentido"),
          UL(["Muitos microsserviços.", "Carga variável alta.", "Time maduro em ops."]),
          armadilha("Kubernetes tem curva de aprendizado pesada. Projeto pequeno raramente precisa — Docker Compose, Fly, Render resolvem."),
          resumo(["k8s orquestra escala grande.", "Overkill para maioria dos projetos.", "Sabendo o conceito, vende muito no mercado."])
        ],
        [
          q("k8s é:", ["Banco", "Orquestrador de containers", "Build tool", "VPN"], 1, "Container orchestrator."),
          q("Quando usar k8s:", ["Sempre", "Quando a escala/complexidade pedem", "Nunca", "Só em Java"], 1, "Ferramenta pesada."),
          q("Para app pequeno:", ["k8s é obrigatório", "Geralmente overkill", "Único caminho", "Sem Docker"], 1, "Opções mais simples bastam."),
        ]
      ),
      L("d17-toolbox", "Toolbox essencial do dev moderno",
        "Ferramentas que você vai usar toda semana.",
        [
          intro("Lista curta, útil:"),
          UL([
            "<strong>curl/httpie</strong>: testar HTTP no terminal.",
            "<strong>jq</strong>: filtrar JSON em pipe.",
            "<strong>htop</strong>: ver processos interativamente.",
            "<strong>docker/compose</strong>: containers no dia a dia.",
            "<strong>tmux/screen</strong>: múltiplas sessões no mesmo terminal.",
            "<strong>git</strong>: obviamente.",
            "<strong>ssh/rsync</strong>: remoto e transferências.",
          ]),
          resumo(["Aprenda essas 7 e você se sente em casa em qualquer terminal.", "Automação vem do hábito delas.", "Google + repetição resolvem 80%."])
        ],
        [
          q("jq serve para:", ["Testar banco", "Filtrar JSON no terminal", "Logs em tempo real", "Editar código"], 1, "Poderoso em pipeline."),
          q("tmux permite:", ["Múltiplas sessões no mesmo terminal", "Cozinhar", "Build", "VPN"], 0, "Multiplexador de terminal."),
          q("httpie alternativa a:", ["cURL", "ssh", "jq", "vim"], 0, "Cliente HTTP mais amigável."),
        ]
      ),
      L("d18-path", "Trilha DevOps — próximos passos",
        "O que estudar depois.",
        [
          intro("Resumo do que vem a seguir se DevOps te interessa:"),
          OL([
            "Dominar Docker + Compose em projeto real.",
            "Deploy sério em plataforma (Fly, Render, Railway).",
            "CI/CD com GitHub Actions — jobs paralelos, cache, artefatos.",
            "Terraform básico para provisionar infra pequena.",
            "Observabilidade: Sentry, logs agregados, métricas.",
            "Kubernetes — depois que os fundamentos estão firmes.",
            "Certificações (AWS/GCP) se for carreira em ops.",
          ]),
          dica("Próximo curso recomendado: <strong>DevOps Profissional</strong> (VIP). Aprofunda Kubernetes, GitOps, IaC, arquitetura em nuvem."),
          resumo(["DevOps é trilha longa e recompensadora.", "Comece simples, evolua com projetos reais.", "Certificações pesam em CV de ops."])
        ],
        [
          q("Ordem recomendada:", ["k8s direto", "Docker/Compose → CI/CD → IaC → k8s", "IaC primeiro", "Só manual"], 1, "Do mais concreto ao mais abstrato."),
          q("Projeto real é:", ["Desnecessário", "O melhor professor", "Perda de tempo", "Só com certificação"], 1, "Mão na massa > teoria."),
          q("Depois de básico:", ["Parar", "VIP Avançado", "Só JS", "Esquecer"], 1, "Continue aprofundando."),
          q("Certificações:", ["Inúteis", "Ajudam em carreira ops", "Obrigatórias pra dev", "Só em Java"], 1, "Sinalizam conhecimento."),
        ]
      ),
    ],
  };

  // ===============================================================
  // CURSO 15 — SEGURANÇA WEB BÁSICA (GRÁTIS)
  // ===============================================================
  const secBasic = {
    id: "seguranca-web-basica",
    title: "Segurança Web Básica",
    tagline: "OWASP Top 10 e defesa mínima para qualquer app web.",
    description: "Aprenda as vulnerabilidades mais comuns em aplicações web (XSS, CSRF, injection, autenticação fraca) e como se proteger. Foco prático: entender o ataque para construir a defesa.",
    level: "Iniciante",
    duration: "7h",
    theme: "theme-js",
    cover: "🔒",
    vip: false,
    instructor: "Diego Martins",
    lessons: [
      L("sec1-intro", "Por que segurança importa",
        "Um vazamento basta pra acabar com a empresa.",
        [
          intro("Toda semana vaza alguma base de dados. Muitas vezes é causado por erros simples: senha em texto puro, SQL injection, sessão mal configurada. Aprender segurança não é opcional — é parte do ofício."),
          porque("Além do dano ao usuário, vazamentos trazem multas (LGPD, GDPR), processos, perda de confiança. Uma startup pode ir à falência por um vazamento."),
          H2("Mentalidade"),
          P("Segurança é sobre assumir que alguém vai tentar quebrar. Você constrói defesa em camadas, e aceita que nada é 100% seguro — você encarece o ataque."),
          resumo(["Segurança é responsabilidade do dev.", "Defesa em camadas, não bala de prata.", "LGPD/GDPR tornam descuidos caros."])
        ],
        [
          q("Segurança é:", ["Só do sysadmin", "Responsabilidade de todos devs", "Opcional", "Só bancos"], 1, "Todo dev precisa pensar nisso."),
          q("Defesa em camadas:", ["Uma só é suficiente", "Várias camadas tornam ataque mais caro", "Impossível", "Só firewall"], 1, "Nada é 100%."),
          q("Vazamento de dados:", ["Sem consequência", "Multa + reputação + processos", "Ok se pequeno", "Só problema técnico"], 1, "Impacto financeiro e legal."),
        ]
      ),
      L("sec2-owasp", "OWASP Top 10 — visão geral",
        "Os dez riscos mais comuns em apps web.",
        [
          intro("A OWASP mantém uma lista atualizada dos riscos mais comuns:"),
          OL([
            "Broken Access Control — permissões mal feitas.",
            "Cryptographic Failures — uso indevido de cripto.",
            "Injection (SQL/NoSQL/Command).",
            "Insecure Design — design ruim de segurança.",
            "Security Misconfiguration — defaults inseguros.",
            "Vulnerable Components — libs desatualizadas.",
            "Identification and Authentication Failures.",
            "Software and Data Integrity Failures.",
            "Security Logging and Monitoring Failures.",
            "Server-Side Request Forgery (SSRF).",
          ]),
          dica("Leia a referência oficial em <code>owasp.org/Top10</code>."),
          resumo(["Top 10 é a base.", "Revise ao começar qualquer app.", "Atualiza a cada alguns anos."])
        ],
        [
          q("OWASP é:", ["Framework", "Organização de segurança", "Lib JS", "Banco"], 1, "Comunidade focada em segurança web."),
          q("Top 10 tem quantos riscos:", ["5", "10", "20", "100"], 1, "Literal, dez."),
          q("Prioridade de leitura:", ["Nenhuma", "Todo dev web", "Só pentester", "Só auditor"], 1, "Todo dev deve conhecer."),
        ]
      ),
      L("sec3-xss", "XSS — Cross-Site Scripting",
        "Quando usuário injeta JS.",
        [
          intro("XSS é quando entrada do usuário é exibida como HTML/JS sem escape, permitindo que o atacante execute JS no navegador das vítimas. Pode roubar cookies, fazer ações em nome do user."),
          H2("Exemplo vulnerável"),
          CODE("// vulnerável: innerHTML com input do usuário\nel.innerHTML = '<p>' + comentario + '</p>';"),
          H2("Defesa"),
          UL([
            "Escape HTML por padrão (frameworks modernos fazem automático).",
            "Nunca <code>innerHTML</code> com dado externo. Use <code>textContent</code>.",
            "Content Security Policy (CSP) restringe scripts.",
          ]),
          resumo(["XSS = injeção de JS via HTML.", "Frameworks modernos escapam por default.", "CSP é cinto de segurança extra."])
        ],
        [
          q("XSS acontece quando:", ["Banco quebra", "Input não é escapado ao exibir", "CSS falha", "Servidor cai"], 1, "Dados reaparecem como HTML."),
          q("Mitigação primária:", ["innerHTML sempre", "Escape por default", "Remover JS", "CSS only"], 1, "Escape/parametrização."),
          q("CSP é:", ["Banco", "Header que limita origens de script", "Linter", "Extensão"], 1, "Policy no navegador."),
        ]
      ),
      L("sec4-csrf", "CSRF — Cross-Site Request Forgery",
        "Quando o site malicioso faz o user agir sem querer.",
        [
          intro("CSRF abusa do fato de que o navegador envia cookies automaticamente. Um site malicioso força o usuário logado a fazer uma ação (transferir dinheiro, mudar email) sem consentimento."),
          H2("Defesas"),
          UL([
            "Tokens CSRF: servidor envia token único que acompanha forms.",
            "SameSite cookies: impede envio cross-site.",
            "Origin/Referer check em ações sensíveis.",
          ]),
          dica("SameSite=Lax é default moderno e bloqueia boa parte do CSRF."),
          resumo(["CSRF abusa do cookie auto-enviado.", "Token CSRF + SameSite protegem.", "Cheque origem em mutações."])
        ],
        [
          q("CSRF ataca:", ["Server direto", "Usuário logado via outro site", "Rede", "DB"], 1, "User faz sem querer."),
          q("SameSite=Lax:", ["Nada faz", "Bloqueia cookies cross-site em requests perigosos", "Só em Chrome", "Extensão"], 1, "Default recente de navegadores."),
          q("Token CSRF:", ["Obrigatório em GET só", "Por form em mutações", "Aleatório", "Grátis"], 1, "Forms POST/PUT/DELETE."),
        ]
      ),
      L("sec5-sqli", "SQL Injection",
        "O clássico que não morre.",
        [
          intro("SQL Injection acontece quando entrada do user é concatenada numa query SQL. Atacante injeta SQL malicioso."),
          exemplo("// vulnerável\nconst q = \"SELECT * FROM users WHERE email = '\" + email + \"'\";\n\n// seguro — parâmetro\ndb.query('SELECT * FROM users WHERE email = $1', [email]);"),
          dica("Todo driver moderno suporta parâmetros. Use sempre."),
          resumo(["SQLi = concat input em query.", "Parâmetros eliminam a vulnerabilidade.", "ORMs ajudam, mas não é bala de prata."])
        ],
        [
          q("Defesa principal contra SQLi:", ["Filtrar palavras-chave", "Parâmetros/prepared statements", "Escape manual", "Hash"], 1, "Escape correto feito pelo driver."),
          q("Concat com input:", ["OK com aspas", "Insegura", "Rápida", "Obrigatória"], 1, "Vetor clássico."),
          q("ORM:", ["Imune a tudo", "Ajuda mas pode ter bugs — use parâmetros", "Só em Java", "Desnecessário"], 1, "Você ainda pode escrever raw queries inseguras."),
        ]
      ),
      L("sec6-auth", "Autenticação — senhas e sessão",
        "Armazenar senha é arte.",
        [
          intro("Senhas NUNCA vão em texto. Sempre hash com algoritmo lento e salt: <strong>bcrypt</strong>, <strong>scrypt</strong>, <strong>argon2</strong>."),
          exemplo("import bcrypt from 'bcrypt';\nconst hash = await bcrypt.hash(senha, 12);\nconst ok = await bcrypt.compare(senha, hashDoBanco);"),
          armadilha("MD5 e SHA1 não são pra senha — são rápidos, vazamento = brute force instantâneo."),
          H2("Sessão"),
          UL(["Cookie HttpOnly + Secure + SameSite.", "Token com expiração curta + refresh.", "Logout invalida o token no servidor (denylist)."]),
          resumo(["bcrypt/argon2 > MD5/SHA.", "Cookies seguros > localStorage.", "Sessão precisa de invalidação."])
        ],
        [
          q("Senha em banco:", ["Plain", "MD5", "bcrypt/argon2 + salt", "Base64"], 2, "Hashs lentos com salt."),
          q("HttpOnly em cookie:", ["JS pode ler", "JS não pode ler", "Sempre expira", "Só em Firefox"], 1, "Mitiga roubo por XSS."),
          q("Logout ideal:", ["Apagar no client", "Invalidar no servidor também", "Reiniciar server", "Trocar senha"], 1, "Token fica inútil no server."),
        ]
      ),
      L("sec7-access", "Controle de acesso",
        "Cada requisição passa por permissão.",
        [
          intro("Authorization é decidir se um user pode fazer X. Muitos apps têm auth OK, mas falham em authz — qualquer user logado acessa tudo."),
          H2("Princípios"),
          UL(["Least privilege: menor permissão possível.", "Deny by default: proibido a menos que explicitamente permitido.", "Checar em cada ação do servidor (não confiar só no UI)."]),
          armadilha("Esconder botão no frontend não é autorização — atacante chama a API direto. Checagem sempre no backend."),
          resumo(["Authz ≠ auth.", "Least privilege é regra de ouro.", "UI esconde, backend impõe."])
        ],
        [
          q("Authz é:", ["Login", "Decidir o que o user pode fazer", "Banco", "UI"], 1, "Controle fino de ações."),
          q("Esconder botão basta?", ["Sim", "Não — API também precisa checar", "Às vezes", "Só em admin"], 1, "Atacante chama API sem UI."),
          q("Least privilege:", ["Tudo liberado", "Só o mínimo necessário", "Random", "Full admin"], 1, "Princípio de segurança."),
        ]
      ),
      L("sec8-https", "HTTPS e TLS",
        "Criptografia em trânsito.",
        [
          intro("HTTP é texto puro — qualquer roteador intermediário lê. HTTPS criptografa com TLS. Hoje é inegociável, mesmo pra site estático."),
          H2("Como obter certificado"),
          UL(["Let's Encrypt + certbot: grátis e automático.", "Cloudflare: grátis com proxy.", "Plataformas modernas (Vercel, Netlify) já fornecem por padrão."]),
          dica("HSTS força navegador a só falar HTTPS com seu domínio. Previne downgrade attacks."),
          resumo(["HTTP é inaceitável em 2025.", "TLS é grátis via Let's Encrypt.", "HSTS aumenta segurança."])
        ],
        [
          q("HTTPS usa:", ["SSL", "TLS", "FTP", "SSH"], 1, "TLS (evolução do SSL)."),
          q("Let's Encrypt é:", ["Pago", "CA grátis e automatizada", "Ferramenta JS", "Navegador"], 1, "Certificados gratuitos."),
          q("HSTS:", ["Revoga certificado", "Força HTTPS no cliente", "Desliga servidor", "Criptografa cookies"], 1, "Header que força HTTPS."),
        ]
      ),
      L("sec9-headers", "Headers de segurança",
        "Defesa por HTTP headers.",
        [
          intro("Headers dizem ao navegador o que permitir:"),
          UL([
            "<code>Content-Security-Policy</code>: restringe origens de recursos.",
            "<code>X-Content-Type-Options: nosniff</code>: impede MIME sniffing.",
            "<code>X-Frame-Options: DENY</code>: impede iframe (clickjacking).",
            "<code>Strict-Transport-Security</code>: HSTS.",
            "<code>Referrer-Policy</code>: limita informação no Referer.",
          ]),
          dica("Helmet (Node/Express) configura vários desses com uma linha."),
          resumo(["Headers são baratos e poderosos.", "CSP é o mais potente.", "Helmet automatiza a maioria."])
        ],
        [
          q("CSP controla:", ["Cookies", "Origens de scripts/imagens/etc.", "HTTPS", "Banco"], 1, "Políticas de recursos."),
          q("X-Frame-Options previne:", ["XSS", "Clickjacking via iframe", "SQLi", "CSRF"], 1, "Bloqueia iframe malicioso."),
          q("Helmet (Node):", ["Banco", "Middleware que aplica headers seguros", "Linter", "ORM"], 1, "Atalho para os headers comuns."),
        ]
      ),
      L("sec10-deps", "Dependências vulneráveis",
        "Sua lib pode te trair.",
        [
          intro("A maior parte do seu app é código de terceiros. Bibliotecas vulneráveis são vetor comum de ataque."),
          exemplo("npm audit          # mostra vulnerabilidades\nnpm audit fix       # tenta atualizar"),
          H2("Ferramentas"),
          UL(["<code>npm audit</code>/<code>pnpm audit</code>.", "Dependabot (GitHub): PRs automáticos para update.", "Snyk: scanner comercial completo."]),
          dica("Não aceite atualização às cegas em prod — teste. Mas também não ignore alertas."),
          resumo(["Suas deps são sua responsabilidade.", "Scan automático é mínimo.", "Dependabot é grátis no GitHub."])
        ],
        [
          q("npm audit:", ["Builda app", "Lista deps vulneráveis", "Deploy", "Testa"], 1, "Checa deps por CVEs."),
          q("Dependabot:", ["Linter", "Bot que abre PRs de update", "Banco", "Test runner"], 1, "Automação de atualizações."),
          q("Atualização cega:", ["Sempre boa", "Pode quebrar — teste", "Nunca", "Só em libs pequenas"], 1, "Valide com testes."),
        ]
      ),
      L("sec11-ssrf", "SSRF — Server-Side Request Forgery",
        "Quando o server faz requests malignos por você.",
        [
          intro("SSRF acontece quando o app aceita URL do user e faz request. Atacante pode forçar o server a acessar metadata de cloud, serviços internos, pivotar."),
          H2("Defesa"),
          UL([
            "Nunca confie em URL de entrada.",
            "Whitelist de domínios permitidos.",
            "Bloqueie IPs privados (169.254, 10.x, 192.168.x, 127.0.0.1).",
            "Camada de rede (VPC + egress control).",
          ]),
          resumo(["SSRF usa seu server como proxy.", "Whitelist domínios.", "Bloqueie IPs internos/metadata."])
        ],
        [
          q("SSRF é ataque onde:", ["Client faz request", "Server é induzido a fazer request maligno", "DB cai", "Rede fora"], 1, "Abuso do server."),
          q("Defesa:", ["Nada", "Whitelist domínios + bloquear IPs privados", "Só IPv6", "Só GET"], 1, "Restringir destinos."),
          q("Metadata da cloud (169.254.169.254):", ["Ok", "Deve ser bloqueada", "Pública", "Legal"], 1, "Expõe credenciais IAM."),
        ]
      ),
      L("sec12-rate", "Rate limiting e proteção contra abuso",
        "Não deixe um script tomar sua API inteira.",
        [
          intro("Sem rate limit, um script pode martelar seu login com milhões de tentativas ou abusar de features. Rate limit conta requests por IP/user/tempo e bloqueia excesso."),
          exemplo("import rateLimit from 'express-rate-limit';\napp.use('/login', rateLimit({ windowMs: 15*60*1000, max: 10 }));"),
          dica("Em login, combine rate limit + captcha após N falhas."),
          resumo(["Rate limit protege APIs.", "Login precisa de defesa extra.", "Cloudflare tem rate limiting grátis."])
        ],
        [
          q("Rate limiting serve para:", ["Acelerar app", "Limitar requisições por janela", "Banco", "UI"], 1, "Controle de abuso."),
          q("Login sem rate limit:", ["Seguro", "Vulnerável a brute force", "Neutro", "Imune a bots"], 1, "Chave para brute force."),
          q("Cloudflare:", ["Só CDN", "CDN + segurança (WAF, rate limit)", "Só DNS", "Sem relação"], 1, "Camada de segurança na borda."),
        ]
      ),
      L("sec13-logs", "Logs e resposta a incidentes",
        "Detectar antes de doer.",
        [
          intro("Sem logs de segurança você nem sabe que foi hackeado. Log:"),
          UL([
            "Logins bem-sucedidos/falhados com IP.",
            "Mudanças de senha/email.",
            "Tentativas de acesso não autorizado.",
            "Mutações sensíveis (pagamentos, permissões).",
          ]),
          armadilha("Nunca logue senha, token ou dado sensível — o log vira o vazamento."),
          resumo(["Logs de segurança são obrigatórios.", "Cuidado com PII nos logs.", "Plano de incidente escrito economiza horas."])
        ],
        [
          q("Logar senha:", ["Ok se criptografada", "Nunca", "Só em dev", "Pra debug"], 1, "Nunca, mesmo 'temporariamente'."),
          q("Logs de segurança incluem:", ["Só acertos", "Logins e mudanças sensíveis", "Nada", "UI"], 1, "Eventos relevantes."),
          q("Plano de incidente:", ["Bom ter", "Essencial para reduzir dano", "Inútil", "Só em bancos"], 1, "Tempo de resposta importa."),
        ]
      ),
      L("sec14-lgpd", "LGPD/GDPR — privacidade e dados",
        "Legislação que afeta todo app.",
        [
          intro("LGPD (BR) e GDPR (EU) regulam dados pessoais. Todo app com usuários está sujeito."),
          H2("Princípios"),
          UL([
            "Finalidade: colete só o que precisa, pra uso específico.",
            "Transparência: termos claros.",
            "Direitos: acesso, correção, exclusão, portabilidade.",
            "Segurança proporcional.",
            "Notificação de vazamento.",
          ]),
          dica("Em doubt, menos dado = menos risco. Pergunte se realmente precisa daquela informação."),
          resumo(["Lei obriga cuidados com dados.", "Menos dado = menos risco.", "Direitos do titular devem ser atendidos."])
        ],
        [
          q("LGPD se aplica a:", ["Só grandes empresas", "Quase todo app com users brasileiros", "Só bancos", "Nunca"], 1, "Toda tratativa de dado pessoal."),
          q("Princípio chave:", ["Coletar tudo", "Coletar o mínimo necessário", "Vender dados", "Público"], 1, "Minimização."),
          q("Vazamento grave:", ["Silencioso", "Deve ser notificado à ANPD e aos titulares", "Ignorado", "Só imprensa"], 1, "Notificação obrigatória."),
        ]
      ),
      L("sec15-checklist", "Checklist de lançamento",
        "Antes de abrir pro mundo.",
        [
          intro("Antes de deploy público:"),
          UL([
            "HTTPS forçado, certificado válido.",
            "Senhas com bcrypt/argon2 + salt.",
            "Rate limit no login/signup.",
            "Parâmetros em queries (sem concat).",
            "Headers seguros (Helmet/CSP).",
            "Variáveis de ambiente, nada hardcoded.",
            "Logs sem PII sensível.",
            "Backup automatizado e testado.",
            "Permissões mínimas no DB.",
            "Dependências atualizadas (audit limpo).",
            "Plano de resposta a incidentes escrito.",
          ]),
          resumo(["Checklist é disciplina.", "Segurança pede hábito.", "Re-audite periodicamente."])
        ],
        [
          q("Checklist evita:", ["Esquecimentos básicos", "Ataques sofisticados", "Tudo", "Nada"], 0, "Cobre o básico."),
          q("Senhas sem hash:", ["Sempre OK", "Nunca", "Ok em staging", "Com cache"], 1, "Risco inaceitável."),
          q("Audit de deps:", ["Pré-lançamento", "Periódico", "Ambos", "Nunca"], 2, "Ambos são certos."),
        ]
      ),
      L("sec16-pentest", "Pentesting defensivo básico",
        "Pensando como atacante.",
        [
          intro("Para defender, pense como atacante. O básico (e legal, no seu próprio sistema):"),
          UL([
            "Burp Suite Community: proxy que intercepta requests.",
            "OWASP ZAP: scanner open source.",
            "Testar inputs com caracteres especiais, SQL, HTML, caminhos relativos.",
            "Tentar acessar URLs de admin sem login.",
            "Forçar IDs em URL: /user/1, /user/2…",
          ]),
          armadilha("Nunca pentest sistemas alheios sem autorização — crime grave. Só no seu ou em ambientes autorizados."),
          resumo(["Pensar como atacante revela falhas.", "Burp/ZAP são ferramentas clássicas.", "Sempre com autorização."])
        ],
        [
          q("Pentest sem autorização:", ["Ok se ambiente é aberto", "Crime", "Neutro", "Só em bancos"], 1, "É ilegal."),
          q("Burp Suite:", ["Editor", "Proxy interceptador HTTP", "Banco", "IDE"], 1, "Intercepta e modifica requests."),
          q("Forçar IDs em URL testa:", ["Performance", "Broken Access Control", "CSS", "Velocidade"], 1, "Clássico IDOR."),
        ]
      ),
      L("sec17-dev-secure", "Desenvolvimento seguro — hábitos",
        "Cultura que escala.",
        [
          intro("Segurança não é só ferramenta — é hábito. Práticas de time:"),
          UL([
            "Code review foca em segurança em endpoints sensíveis.",
            "Dependência nova passa por análise mínima.",
            "Secrets só em vault/secret manager.",
            "Ambientes separados estritamente.",
            "Treinamento de time periódico.",
            "Bug bounty ou responsible disclosure policy.",
          ]),
          dica("Pequenos hábitos (não commitar secret, revisar auth em endpoints sensíveis) evitam 90% dos problemas."),
          resumo(["Segurança é cultura.", "Review + processos > ferramenta isolada.", "Hábitos escalam, heróis não."])
        ],
        [
          q("Segurança eficaz é:", ["1 ferramenta", "Combinação de ferramentas e hábitos", "Só pentest", "Só firewall"], 1, "Camadas + cultura."),
          q("Responsible disclosure:", ["Dizer publicamente", "Canal para reportar falhas ao fornecedor", "Ignorar", "Hackear de volta"], 1, "Processo ético."),
          q("Bug bounty:", ["Recompensa por falhas reportadas", "Multa por bug", "Lançamento beta", "Mural de bugs"], 0, "Incentivo a pesquisadores."),
        ]
      ),
      L("sec18-next", "Trilha de segurança — próximos passos",
        "De iniciante a pro.",
        [
          intro("Segurança é oceano. Caminhos:"),
          OL([
            "Praticar em CTFs (Hack The Box, TryHackMe).",
            "Certificação OSCP se for carreira.",
            "Especialização em AppSec, Cloud Sec, ou Infraestrutura.",
            "Contribuir para OWASP, reportar bugs em OSS.",
            "Ler postmortems famosos (blog de empresas).",
          ]),
          dica("Curso <strong>Segurança Web Avançada</strong> (VIP) mergulha em pentest prático, OWASP aprofundado, bug bounty."),
          resumo(["Prática constante em CTFs.", "Certificações ajudam na carreira.", "Comunidade é chave."])
        ],
        [
          q("CTF é:", ["Capture The Flag — prática de segurança", "Framework", "Banco", "ORM"], 0, "Competição lúdica."),
          q("Próximo curso sugerido:", ["Sair do assunto", "VIP Avançado", "Só JS", "HTML"], 1, "Aprofundar."),
          q("Comunidade é:", ["Dispensável", "Fundamental em segurança", "Só CTF", "Só OSCP"], 1, "Compartilhar experiências."),
          q("Prática é:", ["Opcional", "Essencial", "Só teoria", "Só leitura"], 1, "Faz diferença real."),
        ]
      ),
    ],
  };

  // ===============================================================
  // CURSO 16 — MOBILE INICIANTE (REACT NATIVE) (GRÁTIS)
  // ===============================================================
  const mobileBasic = {
    id: "mobile-rn-iniciante",
    title: "Mobile Iniciante com React Native",
    tagline: "Apps para iOS e Android com o React que você já conhece.",
    description: "Construa apps mobile reais usando React Native + Expo. Entenda layout mobile, navegação, APIs nativas básicas, estado e publicação nas stores. Foco em praticidade: do zero ao TestFlight/APK.",
    level: "Iniciante",
    duration: "8h",
    theme: "theme-html",
    cover: "📱",
    vip: false,
    instructor: "Camila Rocha",
    lessons: [
      L("m1-intro", "Por que React Native",
        "Um código, duas plataformas.",
        [
          intro("React Native (RN) permite escrever apps para iOS e Android com uma única codebase em JavaScript/TypeScript. A lib converte componentes em UI nativa de verdade — não é webview."),
          porque("Empresas como Shopify, Discord, Instagram usam RN em partes de seus apps. Você ganha velocidade de desenvolvimento com perda pequena de performance em relação ao nativo puro."),
          H2("RN vs Flutter vs nativo"),
          UL([
            "RN: JS/TS, ecossistema React, UI nativa.",
            "Flutter: Dart, renderiza em Skia (próprio).",
            "Nativo: Swift/Kotlin — top performance, custo dobrado.",
          ]),
          dica("Para dev web que já sabe React, RN tem menor curva."),
          resumo([
            "RN = React + APIs nativas.",
            "Mesma base de código, múltiplas plataformas.",
            "Compromisso bom entre velocidade e perf.",
          ])
        ],
        [
          q("RN usa componentes:", ["Web", "Nativos (UIView/Android View)", "Canvas próprio", "Flash"], 1, "Renderização nativa."),
          q("RN x Flutter:", ["Mesma linguagem", "RN usa JS/TS, Flutter usa Dart", "Nenhum nativo", "Só iOS"], 1, "Linguagens diferentes."),
          q("RN é bom para quem:", ["Vem do Swift", "Já sabe React", "Nunca programou", "Só C"], 1, "Curva menor."),
        ]
      ),
      L("m2-expo", "Expo — o caminho fácil",
        "Setup e primeiro app.",
        [
          intro("Expo é um SDK e toolchain que simplifica RN dramaticamente. Você começa com um comando, não mexe em Xcode/Android Studio, e tem acesso a APIs nativas via JS."),
          exemplo("npx create-expo-app@latest meu-app\ncd meu-app\nnpx expo start"),
          H2("Rodando no celular"),
          P("Instale o app <strong>Expo Go</strong> no seu celular. Escaneie o QR code gerado. O app aparece ali, com hot reload."),
          dica("Para recursos nativos não suportados pelo Expo Go, use <em>dev build</em> (npx expo prebuild + EAS Build)."),
          resumo(["Expo acelera setup.", "Expo Go permite testar sem compilar.", "Dev builds para APIs mais avançadas."])
        ],
        [
          q("Expo elimina:", ["JS", "Necessidade de configurar Xcode/Android Studio inicialmente", "React", "Componentes"], 1, "Abstrai complexidade nativa."),
          q("Expo Go é:", ["Emulador", "App client para testar apps Expo", "IDE", "Build tool"], 1, "Client de desenvolvimento."),
          q("npx expo start:", ["Faz build", "Inicia o servidor dev com QR code", "Publica app", "Limpa cache"], 1, "Modo desenvolvimento."),
        ]
      ),
      L("m3-views", "Components mobile — View, Text, Image",
        "Não tem div, tem View.",
        [
          intro("Em RN, você NÃO usa HTML. Tudo é componente nativo:"),
          UL([
            "<code>View</code> = div (container).",
            "<code>Text</code> = só dentro dele que texto aparece.",
            "<code>Image</code> = imagens.",
            "<code>ScrollView</code>, <code>FlatList</code> = listas.",
            "<code>TouchableOpacity</code>, <code>Pressable</code> = botões.",
          ]),
          exemplo("import { View, Text } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Olá, mobile!</Text>\n    </View>\n  );\n}"),
          armadilha("Texto solto (string direto em JSX sem Text) quebra o app."),
          resumo(["Tudo é componente nativo.", "Texto vai só em Text.", "View é o container universal."])
        ],
        [
          q("Container universal:", ["div", "View", "Box", "section"], 1, "Substitui div."),
          q("Texto em RN:", ["Solto em JSX", "Dentro de Text", "Em div", "Em span"], 1, "Obrigatório."),
          q("Imagem:", ["img", "Image", "Picture", "Source"], 1, "Componente próprio."),
        ]
      ),
      L("m4-flexbox", "Estilização com Flexbox",
        "Todo layout é flex.",
        [
          intro("RN usa uma versão simplificada de Flexbox. A grande diferença do web: <code>flex-direction</code> padrão é <code>column</code> (não row), e não há CSS, só objetos de estilo."),
          exemplo("const styles = {\n  container: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 16 },\n  box: { width: 100, height: 100, backgroundColor: '#7c5cff' },\n};"),
          dica("Use <code>StyleSheet.create()</code> para otimização (alias de estilo por ID)."),
          resumo([
            "Flexbox com flex-direction default column.",
            "Estilos são objetos, não CSS.",
            "StyleSheet.create otimiza.",
          ])
        ],
        [
          q("Default flex-direction em RN:", ["row", "column", "depende", "inherit"], 1, "Inverso do web."),
          q("Estilos são:", ["CSS", "Objetos JS", "HTML attrs", "XML"], 1, "Estilo inline em JS."),
          q("StyleSheet.create dá:", ["Nada", "Otimização e cache", "CSS real", "Animação"], 1, "Usa IDs internos."),
        ]
      ),
      L("m5-nav", "Navegação com React Navigation",
        "Stack, Tab, Drawer.",
        [
          intro("Apps mobile têm navegação em pilha (tela sobre tela). React Navigation é o padrão."),
          exemplo("npm install @react-navigation/native @react-navigation/native-stack\nnpx expo install react-native-screens react-native-safe-area-context\n\n// App.tsx\nconst Stack = createNativeStackNavigator();\n<NavigationContainer>\n  <Stack.Navigator>\n    <Stack.Screen name=\"Home\" component={Home} />\n    <Stack.Screen name=\"Detalhe\" component={Detalhe} />\n  </Stack.Navigator>\n</NavigationContainer>"),
          CODE("navigation.navigate('Detalhe', { id: 1 });\nconst { id } = route.params;"),
          resumo(["Stack Navigator = pilha de telas.", "Tab e Drawer completam padrões mobile.", "Navegação é por props navigation/route."])
        ],
        [
          q("Padrão principal mobile:", ["SPA", "Pilha de telas", "MDI", "Tab único"], 1, "Stack é comum."),
          q("Navegar entre telas:", ["router.push", "navigation.navigate", "location.href", "window.open"], 1, "API do React Navigation."),
          q("Params vêm em:", ["props.params", "route.params", "navigation.params", "window.params"], 1, "route é prop."),
        ]
      ),
      L("m6-state", "Estado e hooks em RN",
        "useState e useEffect iguais ao web.",
        [
          intro("A boa notícia: hooks funcionam igual ao React web. useState, useEffect, useContext — tudo."),
          exemplo("const [counter, setCounter] = useState(0);\nuseEffect(() => { const id = setInterval(() => setCounter(c => c+1), 1000); return () => clearInterval(id); }, []);"),
          resumo([
            "Hooks iguais do web.",
            "Padrões React valem.",
            "Ecosistema de hooks ricos disponível.",
          ])
        ],
        [
          q("Hooks em RN:", ["Diferentes", "Iguais ao web", "Proibidos", "Só class"], 1, "Mesma API."),
          q("useState funciona:", ["Só no web", "No RN também", "Em Flutter", "Nativo puro"], 1, "Núcleo React."),
          q("cleanup do useEffect:", ["Ignorado", "Essencial para evitar vazamento", "Só no web", "Só em async"], 1, "clearInterval/timeout etc."),
        ]
      ),
      L("m7-touch", "Interações — toque e gestos",
        "TouchableOpacity, Pressable, Gestos.",
        [
          intro("Mobile não tem :hover, tem toque. RN dá vários componentes:"),
          UL([
            "<code>TouchableOpacity</code>: fade ao tocar.",
            "<code>TouchableHighlight</code>: highlight.",
            "<code>Pressable</code>: moderno, mais controle.",
            "<code>GestureHandler</code>: gestos complexos (swipe, pinch).",
          ]),
          dica("Para produção, <code>Pressable</code> é a escolha atual. Mais flexível."),
          resumo(["Toque substitui clique.", "Pressable é o default moderno.", "Gestos complexos com Gesture Handler."])
        ],
        [
          q("Default moderno:", ["TouchableOpacity", "Pressable", "Button puro", "Click"], 1, "Pressable é recomendado."),
          q("Hover em mobile:", ["CSS", "Não existe", "onHover", "pointerover"], 1, "Não há hover em toque."),
          q("Gestos complexos:", ["Mão", "Gesture Handler", "TouchEvent", "Mouse"], 1, "Lib dedicada."),
        ]
      ),
      L("m8-lists", "Listas performáticas com FlatList",
        "Renderizando milhares de itens.",
        [
          intro("ScrollView renderiza tudo de uma vez — ok para poucos itens, desastre para muitos. FlatList virtualiza: só renderiza o que está na tela."),
          exemplo("<FlatList\n  data={lista}\n  keyExtractor={(item) => item.id.toString()}\n  renderItem={({ item }) => <Item {...item} />}\n  onEndReached={carregarMais}\n/>"),
          dica("Use <code>getItemLayout</code> quando possível — melhora scroll em listas gigantes."),
          resumo(["ScrollView: até 50 itens.", "FlatList: virtualizado, escala.", "onEndReached para paginação infinita."])
        ],
        [
          q("Lista grande em ScrollView:", ["Ok", "Lento/travado", "Rápido", "Igual FlatList"], 1, "Renderiza tudo."),
          q("FlatList:", ["Virtualiza, renderiza só visível", "Renderiza tudo", "Não scrolla", "Só fixo"], 0, "Performance."),
          q("Paginação infinita em FlatList:", ["onLoadMore", "onEndReached", "onScrollBottom", "nada"], 1, "Callback."),
        ]
      ),
      L("m9-forms", "Formulários e teclado",
        "Inputs em mobile.",
        [
          intro("<code>TextInput</code> é o input. Ele é controlado como no web: value + onChangeText. Mobile tem detalhes importantes:"),
          UL([
            "<code>keyboardType</code>: 'email-address', 'numeric', etc.",
            "<code>autoCapitalize</code>: 'none' para email/senha.",
            "<code>secureTextEntry</code>: para senha.",
            "<code>KeyboardAvoidingView</code>: evita teclado cobrir inputs.",
          ]),
          dica("Em forms reais, use <em>react-hook-form</em> + <em>zod</em> — mesma stack do web."),
          resumo(["TextInput controlado.", "KeyboardAvoidingView previne bug clássico.", "Stack de form vale entre web/mobile."])
        ],
        [
          q("Senha em TextInput:", ["type=password", "secureTextEntry", "private", "hidden"], 1, "Prop específica."),
          q("Teclado numérico:", ["type=number", "keyboardType='numeric'", "input='tel'", "nada"], 1, "Prop do TextInput."),
          q("Evitar teclado cobrir:", ["Ignorar", "KeyboardAvoidingView", "position:fixed", "ScrollView infinito"], 1, "Componente dedicado."),
        ]
      ),
      L("m10-fetch", "Consumindo APIs",
        "fetch e bibliotecas.",
        [
          intro("Fetch funciona igual ao web. Para apps reais, use TanStack Query ou Axios. Considere offline-first (cache local)."),
          exemplo("useEffect(() => {\n  fetch('https://api.exemplo.com/posts')\n    .then(r => r.json())\n    .then(setPosts)\n    .catch(err => console.error(err));\n}, []);"),
          dica("Em mobile, rede falha com frequência. Sempre tenha estado de loading e erro."),
          resumo(["fetch é igual ao web.", "Considere offline-first.", "Estado de loading/erro é obrigatório."])
        ],
        [
          q("fetch em RN:", ["Diferente do web", "Mesma API do web", "Sem suporte", "Só GET"], 1, "API padrão."),
          q("Rede mobile:", ["Sempre perfeita", "Falha frequente — prepare-se", "Igual banda larga", "Não importa"], 1, "Offline é realidade."),
          q("Lib popular para data fetching:", ["jQuery", "TanStack Query", "Mongoose", "Prisma"], 1, "Padrão também em RN."),
        ]
      ),
      L("m11-storage", "Armazenamento local",
        "AsyncStorage, SecureStore.",
        [
          intro("localStorage não existe. RN tem APIs próprias:"),
          UL([
            "<code>AsyncStorage</code>: pares chave-valor, assíncrono, não criptografado.",
            "<code>SecureStore</code> (Expo): criptografado, ótimo para tokens.",
            "<strong>MMKV</strong>: biblioteca rápida (síncrona) com criptografia.",
            "Banco local: <strong>WatermelonDB</strong>, <strong>Realm</strong>, ou SQLite via Expo.",
          ]),
          dica("Nunca guarde token de sessão em AsyncStorage puro. Use SecureStore ou MMKV com encryption."),
          resumo(["AsyncStorage para dados não sensíveis.", "SecureStore/MMKV para tokens.", "Banco local para dados complexos."])
        ],
        [
          q("Token de auth em RN:", ["AsyncStorage puro", "SecureStore/MMKV cripto", "Cookie", "LocalStorage"], 1, "Criptografado."),
          q("AsyncStorage é:", ["Síncrono", "Assíncrono", "In-memory", "SQL"], 1, "Sempre async."),
          q("Banco local popular:", ["Redis", "WatermelonDB/Realm/SQLite", "Postgres", "DynamoDB"], 1, "Offline-first."),
        ]
      ),
      L("m12-platform", "Diferenças iOS vs Android",
        "Plataformas parecidas, mas não iguais.",
        [
          intro("RN abstrai bastante, mas convenções diferem:"),
          UL([
            "Back button físico (Android) — trate.",
            "Safe Area: iPhone com notch exige <code>SafeAreaView</code>.",
            "Permissões: pedidos mudam de contexto.",
            "Performance: Android varia MUITO entre devices.",
            "Fonts de sistema diferentes.",
          ]),
          CODE("import { Platform } from 'react-native';\nif (Platform.OS === 'ios') { /* específico iOS */ }"),
          resumo([
            "Plataformas têm nuances.",
            "<code>Platform.OS</code> decide.",
            "Teste em ambos sempre.",
          ])
        ],
        [
          q("SafeAreaView usado em:", ["Android padrão", "iOS com notch", "Sempre", "Nunca"], 1, "Evita overlap com status bar/notch."),
          q("Platform.OS diz:", ["Versão", "ios/android/web", "Empresa", "Release"], 1, "Plataforma atual."),
          q("Back button Android:", ["Ignorar", "Precisa ser tratado", "Proibido", "Só iOS"], 1, "Parte do UX nativo."),
        ]
      ),
      L("m13-native-apis", "APIs nativas via Expo",
        "Câmera, localização, notificações.",
        [
          intro("Expo SDK traz APIs nativas acessíveis via JS:"),
          UL([
            "<code>expo-camera</code>: câmera.",
            "<code>expo-location</code>: geolocalização.",
            "<code>expo-notifications</code>: push notifications.",
            "<code>expo-image-picker</code>: escolher foto/vídeo.",
            "<code>expo-av</code>: áudio/vídeo.",
          ]),
          dica("Sempre peça permissão de runtime — usuário decide."),
          resumo(["Expo tem ecosistema de módulos nativos.", "Tudo via JS.", "Permissões no uso, não no instalar."])
        ],
        [
          q("Câmera em RN com Expo:", ["expo-camera", "react-camera", "cam-native", "RNCamera obrigatório"], 0, "Módulo dedicado."),
          q("Push notifications:", ["Fetch só", "expo-notifications", "Ethernet", "CORS"], 1, "Módulo específico."),
          q("Permissões:", ["No instalar", "Runtime (o user aceita no uso)", "Automáticas", "Impossíveis"], 1, "Pedidas na hora."),
        ]
      ),
      L("m14-debug", "Debug e perf básico",
        "Ferramentas do dia a dia.",
        [
          intro("Debug em RN:"),
          UL([
            "<code>console.log</code> aparece no terminal e no Dev Menu.",
            "Dev Menu (shake o celular ou Ctrl+M): elementos, perf, remote debug.",
            "Flipper: depurador oficial com plugins.",
            "Hermes engine: JS engine otimizado para RN.",
            "React DevTools stand-alone funciona com RN.",
          ]),
          dica("Para memory leak e re-renders, use o React DevTools Profiler."),
          resumo(["Dev Menu é seu amigo.", "Hermes melhora performance.", "Profiler localiza gargalos."])
        ],
        [
          q("Dev Menu abre com:", ["Ctrl+M ou shake", "F12", "Menu iniciar", "Logout"], 0, "Atalho comum."),
          q("Hermes:", ["Framework", "Engine JS otimizada para RN", "Banco", "CSS"], 1, "Rápida e leve."),
          q("Localizar re-renders:", ["console", "React DevTools Profiler", "logcat", "sem jeito"], 1, "Profiler oficial."),
        ]
      ),
      L("m15-assets", "Assets, fontes, ícones",
        "Deixando o app bonito.",
        [
          intro("Imagens entram via <code>require</code> ou URL:"),
          exemplo("<Image source={require('./assets/logo.png')} />\n<Image source={{ uri: 'https://site/img.png' }} />"),
          H2("Fontes e ícones"),
          UL([
            "<code>expo-font</code> + <code>useFonts</code> para carregar TTF/OTF.",
            "<code>@expo/vector-icons</code> ou <code>react-native-vector-icons</code>: milhares de ícones prontos.",
          ]),
          dica("Otimize imagens — apps mobile têm espaço limitado. Prefira WebP/AVIF quando possível."),
          resumo(["require + uri para imagens.", "Fontes customizadas via expo-font.", "Ícones via lib vectorial."])
        ],
        [
          q("Imagem local em RN:", ["<img src>", "<Image source={require(...)}>", "<picture>", "Link"], 1, "Require do bundle."),
          q("Fontes customizadas:", ["font-face", "expo-font + useFonts", "Nada", "Só system"], 1, "Lib específica."),
          q("Otimização:", ["Não importa", "Comprimir imagens + formatos modernos", "Enviar PSD", "Enviar GIF só"], 1, "Tamanho do bundle."),
        ]
      ),
      L("m16-build-deploy", "Build e deploy com EAS",
        "Seu app nas stores.",
        [
          intro("<strong>EAS Build</strong> (Expo Application Services) compila seu app na nuvem — sem precisar de Mac para iOS."),
          exemplo("npx expo install eas-cli\neas login\neas build:configure\neas build --platform ios\neas build --platform android"),
          H2("Publicação"),
          UL(["iOS: App Store Connect + TestFlight.", "Android: Play Console.", "OTA updates via Expo quando a mudança é JS only (sem rebuild nativo)."]),
          dica("TestFlight é ótimo para beta fechado antes de publicar."),
          resumo(["EAS builda na nuvem.", "iOS exige conta Apple Developer ($99/ano).", "OTA updates aceleram fix rápido."])
        ],
        [
          q("EAS Build:", ["Local só", "Builds na nuvem", "Só Android", "CI manual"], 1, "Sem necessidade de Xcode local."),
          q("iOS publish requer:", ["Nada", "Conta Apple Developer", "Google Play", "Só Expo"], 1, "$99/ano."),
          q("OTA update:", ["Atualização JS sem rebuild", "Rebuild obrigatório sempre", "Só Android", "Só em dev"], 0, "Atualiza só o JS bundle."),
        ]
      ),
      L("m17-polish", "Polimento final — UX mobile",
        "Detalhes que transformam.",
        [
          intro("Pequenas coisas que profissionais fazem:"),
          UL([
            "Splash screen + ícone do app.",
            "Loading states e skeletons.",
            "Feedback tátil (<code>expo-haptics</code>) em ações importantes.",
            "Animações com <code>react-native-reanimated</code>.",
            "Tema claro/escuro.",
            "Acessibilidade: <code>accessibilityLabel</code> em elementos interativos.",
          ]),
          dica("Usuários mobile abandonam em 3s se o app parece travado. Feedback imediato é tudo."),
          resumo([
            "Pequenos detalhes viram impressão \"app sério\".",
            "Animações 60fps importam.",
            "Acessibilidade é inegociável.",
          ])
        ],
        [
          q("Haptics:", ["Feedback tátil", "Som", "Vídeo", "GPS"], 0, "Vibração sutil."),
          q("Animações performáticas:", ["setInterval", "react-native-reanimated", "CSS", "GIF"], 1, "Anima em thread nativa."),
          q("accessibilityLabel:", ["Ignorar", "Essencial para leitores de tela", "Só iOS", "Só Android"], 1, "Inclusão."),
        ]
      ),
      L("m18-next", "Próximos passos em mobile",
        "De iniciante a profissional.",
        [
          intro("Você já consegue construir apps reais. Próximos tópicos:"),
          OL([
            "Navigation avançada (deep linking, modais, gestures).",
            "Estado global (Zustand, Redux Toolkit, Jotai).",
            "Offline first e sync (WatermelonDB, Realm).",
            "Push notifications (Expo + FCM/APNs).",
            "In-app purchases e subscription.",
            "Testes (Detox para E2E, Jest para unit).",
            "Monitoramento (Sentry para RN).",
          ]),
          dica("Próximo curso: <strong>Mobile Avançado</strong> (VIP). Performance profunda, native modules, deploy sofisticado, monetização."),
          resumo([
            "Você pode construir apps reais.",
            "Offline, push e monetização são tópicos naturais.",
            "Testes evitam regressões em produção.",
          ])
        ],
        [
          q("Testes E2E em RN:", ["Selenium", "Detox", "Cypress", "Puppeteer"], 1, "Detox é padrão."),
          q("Push no Expo:", ["Impossível", "expo-notifications integra com FCM/APNs", "Só web push", "SMS"], 1, "Integração pronta."),
          q("Para estado global moderno:", ["jQuery", "Zustand/Jotai/RTK", "Cookie", "Window.var"], 1, "Libs modernas."),
          q("Monetização:", ["Só venda fora", "In-app purchases + subscription", "Só anúncios", "Impossível"], 1, "Múltiplos modelos."),
        ]
      ),
    ],
  };

  const newCourses = [gitBasic, sqlBasic, reactBasic, nodeBasic, tsBasic, devopsBasic, secBasic, mobileBasic];
  window.DevstartCoursesExtra = (window.DevstartCoursesExtra || []).concat(newCourses);
  if (window.DevstartCourses) window.DevstartCourses = window.DevstartCourses.concat(newCourses);
  else window.DevstartCourses = newCourses;
})();
