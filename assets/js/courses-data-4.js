/* =============================================================
   Devstart UP — Cursos VIP avançados (8 cursos × 18 aulas)
   Versões aprofundadas dos cursos introdutórios de courses-data-3.
   Conteúdo em pt-BR com foco em profundidade e aplicação real.
   ============================================================= */
(function () {
  const DATA = [
  {
    "id": "git-github-avancado",
    "title": "Git & GitHub Avançado",
    "tagline": "Rebase interativo, reflog, workflows e GitHub no limite.",
    "description": "Domine o que diferencia devs sêniores: modelo interno do Git, rebase interativo, reflog para salvar a pele, cherry-pick, bisect, worktrees, hooks, GitHub Actions avançado e trunk-based development.",
    "level": "Avançado",
    "duration": "10h",
    "theme": "theme-js",
    "cover": "Git+",
    "vip": true,
    "instructor": "Lucas Mendes",
    "lessons": [
      {
        "id": "ga1",
        "title": "O modelo interno do Git",
        "summary": "Objects, refs e por que tudo faz sentido.",
        "content": "<p>Git não é lista de diffs — é armazenamento content-addressable de objetos (blob, tree, commit, tag). Entender isso muda como você pensa em branches, merges e rebases.</p><h2>Aprofundando</h2><p>Cada commit aponta para uma árvore (tree) que referencia blobs (conteúdo). Branches são apenas ponteiros móveis para commits. HEAD é um ponteiro para uma branch (ou commit em detached HEAD).</p><p>Essa abstração explica por que operações pesadas são baratas: você só move ponteiros e cria objetos novos, nunca edita em lugar.</p><h2>Exemplo prático</h2><pre><code>git cat-file -p HEAD                 # ver commit\ngit cat-file -p HEAD^{tree}          # ver árvore\ngit rev-parse HEAD                   # SHA do HEAD\ngit update-ref refs/heads/nova HEAD  # criar ref manual</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Entender objects transforma mágicas como reflog e rebase em coisa trivial.</p></div>",
        "quiz": [
          {
            "prompt": "Commit aponta para:",
            "options": [
              "Branch",
              "Tree (e parent commits)",
              "Outro commit só",
              "Arquivo"
            ],
            "correct": 1,
            "explain": "Cada commit tem árvore raiz e 0+ parents."
          },
          {
            "prompt": "Branch é:",
            "options": [
              "Cópia física",
              "Ponteiro para commit",
              "Pasta",
              "Index"
            ],
            "correct": 1,
            "explain": "Apenas uma ref em refs/heads/."
          },
          {
            "prompt": "HEAD aponta para:",
            "options": [
              "Commit sempre",
              "Branch (ou commit em detached)",
              "Nada",
              "Tag"
            ],
            "correct": 1,
            "explain": "Normalmente uma branch."
          }
        ]
      },
      {
        "id": "ga2",
        "title": "Reset, restore, switch — diferenças finas",
        "summary": "Cada comando afeta um subset de (HEAD, index, working).",
        "content": "<p>Os três comandos clássicos se misturam porque afetam estados diferentes do Git. Separar isso destrava produtividade.</p><h2>Aprofundando</h2><p><code>reset --soft X</code>: move HEAD, mantém index e working. Útil para reagrupar commits.</p><p><code>reset --mixed X</code> (padrão): HEAD e index, mantém working. Desfaz <code>git add</code>.</p><p><code>reset --hard X</code>: altera HEAD, index e working. PERIGOSO — descarta tudo.</p><p><code>restore</code> e <code>switch</code> (modernos): mais focados, menos ambíguos.</p><h2>Exemplo prático</h2><pre><code>git reset --soft HEAD~3    # junta os últimos 3 commits\ngit restore --source=HEAD~1 app.js\ngit switch -c feat/x</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Prefira restore/switch em código novo — reduz confusão com o velho checkout.</p></div>",
        "quiz": [
          {
            "prompt": "reset --soft mantém:",
            "options": [
              "Nada",
              "Index e working",
              "Só HEAD",
              "Tudo novo"
            ],
            "correct": 1,
            "explain": "Altera só o HEAD."
          },
          {
            "prompt": "reset --hard é:",
            "options": [
              "Seguro",
              "Perigoso — descarta working",
              "Igual ao soft",
              "Não apaga"
            ],
            "correct": 1,
            "explain": "Perde alterações."
          },
          {
            "prompt": "switch vs checkout:",
            "options": [
              "Iguais",
              "switch é focado em branch",
              "checkout substituto",
              "switch só cria"
            ],
            "correct": 1,
            "explain": "Separação de responsabilidades."
          }
        ]
      },
      {
        "id": "ga3",
        "title": "Rebase interativo — reescrevendo histórico",
        "summary": "pick, reword, edit, squash, fixup, drop.",
        "content": "<p>Rebase interativo é a ferramenta mais poderosa para montar histórico limpo antes de abrir PR. Você reordena, agrupa e reescreve commits com precisão cirúrgica.</p><h2>Aprofundando</h2><p>Fixup é igual a squash mas descarta a mensagem; combinado com <code>--autosquash</code> automatiza pequenos ajustes.</p><p>Nunca rebase branches já compartilhadas publicamente sem alinhar com o time.</p><h2>Exemplo prático</h2><pre><code>git rebase -i HEAD~5\n# edite a lista:\npick a1 adiciona X\nfixup b2 typo\nsquash c3 refina X\nreword d4 refaz Y\npick e5 finaliza Y</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p><code>git commit --fixup=HASH</code> + <code>rebase -i --autosquash</code> automatiza fixups.</p></div>",
        "quiz": [
          {
            "prompt": "fixup descarta:",
            "options": [
              "Código",
              "Mensagem do commit",
              "Branch",
              "Tag"
            ],
            "correct": 1,
            "explain": "Aplica mudanças, some a mensagem."
          },
          {
            "prompt": "Rebase em branch compartilhada:",
            "options": [
              "Sempre seguro",
              "Cuidado — reescreve histórico",
              "Só com --force",
              "Sem efeito"
            ],
            "correct": 1,
            "explain": "Coordene com o time."
          },
          {
            "prompt": "autosquash:",
            "options": [
              "Nada",
              "Aplica fixups automaticamente",
              "Muda branch",
              "Quebra"
            ],
            "correct": 1,
            "explain": "Usa commits com prefixo fixup!."
          }
        ]
      },
      {
        "id": "ga4",
        "title": "Reflog — seu undo universal",
        "summary": "Quase nada no Git está realmente perdido.",
        "content": "<p>Reflog guarda toda movimentação do HEAD local. Mesmo após reset --hard, rebase catastrófico ou branch deletada, você quase sempre consegue voltar.</p><h2>Aprofundando</h2><p>Cada entrada tem índice temporal (HEAD@{1}, HEAD@{'2.hours.ago'}).</p><p>Reflog é local por clone — ao invés de cloud backup, pense nele como sua rede de segurança pessoal.</p><h2>Exemplo prático</h2><pre><code>git reflog\ngit reset --hard HEAD@{3}\ngit branch recuperada HEAD@{2}</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Ensaie <code>git reflog</code> até virar memória muscular — salva carreira quando algo dá errado.</p></div>",
        "quiz": [
          {
            "prompt": "Reflog é:",
            "options": [
              "Global",
              "Local da sua máquina",
              "Compartilhado",
              "Só do remote"
            ],
            "correct": 1,
            "explain": "Cada clone tem o seu."
          },
          {
            "prompt": "Duração padrão:",
            "options": [
              "Eterno",
              "~90 dias (configurável)",
              "1 hora",
              "Até reboot"
            ],
            "correct": 1,
            "explain": "gc.reflogExpire."
          },
          {
            "prompt": "Após reset --hard:",
            "options": [
              "Perdi tudo",
              "Posso recuperar via reflog",
              "Só com Dropbox",
              "Impossível"
            ],
            "correct": 1,
            "explain": "Reflog preserva."
          }
        ]
      },
      {
        "id": "ga5",
        "title": "Cherry-pick e backport",
        "summary": "Aplicando commits específicos em outras branches.",
        "content": "<p>Quando um fix pontual precisa ir para outra branch (hotfix em release antiga), <code>cherry-pick</code> copia commits específicos.</p><h2>Aprofundando</h2><p>O commit copiado recebe novo hash. Cherry-pick de merge commit exige <code>-m 1</code> (mainline).</p><p>Use <code>-x</code> para adicionar referência ao commit original — útil em backports.</p><h2>Exemplo prático</h2><pre><code>git cherry-pick abc123\ngit cherry-pick -x abc123\ngit cherry-pick -m 1 MERGE_SHA</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Se der conflito: resolva, <code>git add</code>, <code>git cherry-pick --continue</code>.</p></div>",
        "quiz": [
          {
            "prompt": "Cherry-pick cria:",
            "options": [
              "Mesmo commit",
              "Novo commit com novo hash",
              "Merge",
              "Nada"
            ],
            "correct": 1,
            "explain": "Reaplica mudanças."
          },
          {
            "prompt": "Merge commit precisa:",
            "options": [
              "Nada especial",
              "Flag -m pra escolher parent",
              "Impossível",
              "Só GUI"
            ],
            "correct": 1,
            "explain": "Mainline."
          },
          {
            "prompt": "-x faz:",
            "options": [
              "Força",
              "Adiciona referência ao original",
              "Ignora conflito",
              "Deleta"
            ],
            "correct": 1,
            "explain": "Útil em backports."
          }
        ]
      },
      {
        "id": "ga6",
        "title": "Bisect — caçando bugs no histórico",
        "summary": "Busca binária assistida pelo Git.",
        "content": "<p>Encontrar o commit que introduziu um bug num histórico de 2000 commits é inviável manualmente. <code>git bisect</code> faz busca binária: você marca bom e ruim, ele leva ao culpado em log2(N) passos.</p><h2>Aprofundando</h2><p>Com script de teste, <code>bisect run</code> automatiza — perfeito para CI reproduzir bug.</p><p>Funciona porque Git preserva histórico linear de checkouts específicos.</p><h2>Exemplo prático</h2><pre><code>git bisect start\ngit bisect bad HEAD\ngit bisect good v1.2\ngit bisect run ./scripts/teste.sh</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Bisect automatizado acha bug em segundos mesmo em histórico gigante.</p></div>",
        "quiz": [
          {
            "prompt": "Bisect faz:",
            "options": [
              "Busca binária",
              "Linear",
              "Random",
              "BFS"
            ],
            "correct": 0,
            "explain": "O(log n)."
          },
          {
            "prompt": "bisect run:",
            "options": [
              "Interativo",
              "Usa script de teste",
              "Só GUI",
              "Manual"
            ],
            "correct": 1,
            "explain": "Automatiza."
          },
          {
            "prompt": "Resultado final:",
            "options": [
              "Nada",
              "Aponta commit culpado",
              "Reverte automaticamente",
              "Requer manual"
            ],
            "correct": 1,
            "explain": "Ponta final."
          }
        ]
      },
      {
        "id": "ga7",
        "title": "Worktrees — múltiplos checkouts do mesmo repo",
        "summary": "Trabalhe em duas branches sem stash.",
        "content": "<p><code>git worktree</code> cria outro diretório apontando para o mesmo repo em branch diferente. Ideal para comparar, testar paralelos ou hotfix urgente sem perder contexto.</p><h2>Aprofundando</h2><p>Todo worktree compartilha o mesmo <code>.git</code> — economiza disco e sincroniza histórico.</p><p>Substitui bem o costume de clonar o mesmo repo duas vezes.</p><h2>Exemplo prático</h2><pre><code>git worktree add ../meu-repo-hotfix hotfix/bug\ngit worktree list\ngit worktree remove ../meu-repo-hotfix</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Worktrees são mais leves e consistentes que clones múltiplos.</p></div>",
        "quiz": [
          {
            "prompt": "Worktree:",
            "options": [
              "Outro repo",
              "Outro working dir do mesmo repo",
              "Backup",
              "Tag"
            ],
            "correct": 1,
            "explain": "Compartilha .git."
          },
          {
            "prompt": "Vantagem:",
            "options": [
              "Desperdício",
              "Evita stash/trocar branch",
              "Mais lento",
              "Exige GitHub"
            ],
            "correct": 1,
            "explain": "Paralelismo."
          },
          {
            "prompt": "Remover worktree:",
            "options": [
              "Apaga repo",
              "Só o checkout extra",
              "Perde commits",
              "Quebra remote"
            ],
            "correct": 1,
            "explain": "Seguro."
          }
        ]
      },
      {
        "id": "ga8",
        "title": "Submodules e alternativas",
        "summary": "Quando (e quando NÃO) usar.",
        "content": "<p>Submodule é um repo Git dentro de outro, apontando para commit específico. Útil para dependências monorepo-like, mas causa frustração em times sem disciplina.</p><h2>Aprofundando</h2><p>Alternativas modernas: monorepo real com pnpm/nx/turbo, subtree (mais simples), ou pacotes npm privados.</p><p>Se submodules te fazem perder tempo toda semana, reestruture.</p><h2>Exemplo prático</h2><pre><code>git submodule add https://x/y libs/y\ngit submodule update --init --recursive</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Monorepo com workspaces e cache de build resolve quase sempre melhor que submodules.</p></div>",
        "quiz": [
          {
            "prompt": "Submodule aponta para:",
            "options": [
              "Branch",
              "Commit específico",
              "Tag só",
              "Pasta externa"
            ],
            "correct": 1,
            "explain": "SHA fixo."
          },
          {
            "prompt": "Alternativa comum:",
            "options": [
              "subtree",
              "Monorepo",
              "npm privado",
              "Todas"
            ],
            "correct": 3,
            "explain": "Várias opções."
          },
          {
            "prompt": "Principal dor:",
            "options": [
              "Rápido",
              "Estado descasa entre devs",
              "Impossível",
              "Nenhuma"
            ],
            "correct": 1,
            "explain": "Frequente."
          }
        ]
      },
      {
        "id": "ga9",
        "title": "Git hooks e husky",
        "summary": "Automatizar verificações locais.",
        "content": "<p>Hooks são scripts em <code>.git/hooks/</code> que rodam em momentos específicos (pre-commit, pre-push, commit-msg). Husky sincroniza hooks compartilhados via package.json.</p><h2>Aprofundando</h2><p>Combine com <code>lint-staged</code>: roda lint/format só no que foi alterado.</p><p>Hooks local são conveniência — se CI é obrigatório, mantenha também no servidor.</p><h2>Exemplo prático</h2><pre><code>npx husky init\n# .husky/pre-commit\nnpx lint-staged\n\n// package.json\n\"lint-staged\": { \"*.ts\": [\"eslint --fix\", \"prettier -w\"] }</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Hooks locais aceleram feedback; CI garante que ninguém burle.</p></div>",
        "quiz": [
          {
            "prompt": "pre-commit roda:",
            "options": [
              "Antes de commit",
              "Após push",
              "No merge",
              "No clone"
            ],
            "correct": 0,
            "explain": "Imediatamente antes."
          },
          {
            "prompt": "Husky é:",
            "options": [
              "Lint",
              "Gerenciador de hooks JS",
              "Git fork",
              "Editor"
            ],
            "correct": 1,
            "explain": "Compartilha hooks."
          },
          {
            "prompt": "lint-staged:",
            "options": [
              "Lint no projeto inteiro",
              "Só no que vai ser commitado",
              "Só em CI",
              "Nenhum"
            ],
            "correct": 1,
            "explain": "Eficiente."
          }
        ]
      },
      {
        "id": "ga10",
        "title": "GitHub Actions avançado",
        "summary": "Matrix, cache, reusable workflows, OIDC.",
        "content": "<p>Actions oferecem muito além do básico: matrix, cache para economizar minutos, reusable workflows, secrets, concurrency e autenticação OIDC para cloud providers.</p><h2>Aprofundando</h2><p>Matrix: testar em Node 18/20/22 × Ubuntu/macOS ao mesmo tempo.</p><p>Cache: <code>actions/cache</code> com chave baseada em lockfile.</p><p>OIDC: elimina long-lived keys em providers de cloud.</p><h2>Exemplo prático</h2><pre><code>jobs:\n  test:\n    strategy:\n      matrix:\n        node: [18, 20, 22]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/cache@v4\n        with:\n          path: ~/.npm\n          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>OIDC elimina uma classe inteira de risco (keys vazadas). Adote quando possível.</p></div>",
        "quiz": [
          {
            "prompt": "Matrix:",
            "options": [
              "Rodar uma vez",
              "Combinações em paralelo",
              "Backup",
              "Deploy"
            ],
            "correct": 1,
            "explain": "Expansão combinatória."
          },
          {
            "prompt": "OIDC em Actions:",
            "options": [
              "Senha",
              "Auth sem long-lived keys",
              "Só AWS",
              "Só deploy"
            ],
            "correct": 1,
            "explain": "STS temporário."
          },
          {
            "prompt": "concurrency:",
            "options": [
              "Paraleliza CI",
              "Cancela runs redundantes",
              "Aumenta custo",
              "Nada"
            ],
            "correct": 1,
            "explain": "Evita desperdício."
          }
        ]
      },
      {
        "id": "ga11",
        "title": "Trunk-based vs Git Flow",
        "summary": "Fluxos de release em times maduros.",
        "content": "<p>Git Flow (develop/release/hotfix) nasceu quando releases eram trimestrais. Hoje, times de alta performance praticam trunk-based: main única, features curtas (&lt;24h), feature flags para esconder incompleto, CI/CD contínuo.</p><h2>Aprofundando</h2><p>Trunk-based reduz merge hell e acelera feedback — DORA report liga práticas assim a maior performance.</p><p>Git Flow ainda faz sentido em libs com múltiplas versões suportadas.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Feature flags são pré-requisito para trunk-based. Sem elas, você não consegue mesclar cedo sem expor trabalho incompleto.</p></div>",
        "quiz": [
          {
            "prompt": "Trunk-based prefere:",
            "options": [
              "Branches longas",
              "Branches curtas + feature flags",
              "Sem CI",
              "Sem main"
            ],
            "correct": 1,
            "explain": "Merge cedo."
          },
          {
            "prompt": "Git Flow é bom para:",
            "options": [
              "SaaS web",
              "Libs com múltiplas versões",
              "Mobile",
              "MVPs"
            ],
            "correct": 1,
            "explain": "Release formal."
          },
          {
            "prompt": "Feature flag:",
            "options": [
              "Hack",
              "Chave que liga/desliga feature em runtime",
              "Comentário",
              "Branch"
            ],
            "correct": 1,
            "explain": "Essencial."
          }
        ]
      },
      {
        "id": "ga12",
        "title": "Monorepos modernos",
        "summary": "Turborepo, Nx, pnpm workspaces.",
        "content": "<p>Monorepo hospeda múltiplos projetos (apps + libs) no mesmo repositório. Ferramentas modernas entregam build paralelo, cache remoto, grafo de dependências e deploy seletivo.</p><h2>Aprofundando</h2><p>Vantagens: refactor atômico cross-projeto, lint unificado, onboarding simples.</p><p>Trade-off: CI complexo, repo cresce, requer disciplina de APIs entre pacotes.</p><h2>Exemplo prático</h2><pre><code># turbo.json\n{ \"tasks\": { \"build\": { \"dependsOn\": [\"^build\"], \"outputs\": [\"dist/**\"] } } }\n\nturbo run build --filter=@app/web</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Para 2-3 projetos conexos, monorepo é quase sempre vitória. Para estranhos, separe.</p></div>",
        "quiz": [
          {
            "prompt": "Monorepo:",
            "options": [
              "1 projeto",
              "Múltiplos projetos/pacotes",
              "Só backend",
              "Só docs"
            ],
            "correct": 1,
            "explain": "Vários."
          },
          {
            "prompt": "Turborepo adiciona:",
            "options": [
              "DB",
              "Cache e paralelismo de tasks",
              "UI",
              "IDE"
            ],
            "correct": 1,
            "explain": "Build system."
          },
          {
            "prompt": "Refactor cross:",
            "options": [
              "Impossível",
              "Fácil em monorepo",
              "Só polyrepo",
              "Sem diferença"
            ],
            "correct": 1,
            "explain": "Commit único atômico."
          }
        ]
      },
      {
        "id": "ga13",
        "title": "Git LFS e binários",
        "summary": "Não deixe a .git virar de 20GB.",
        "content": "<p>Git é péssimo com binários grandes — cada revisão infla o repo. Git LFS (Large File Storage) substitui binários por ponteiros, guardando bytes em servidor dedicado.</p><h2>Aprofundando</h2><p>Configure <code>.gitattributes</code> para marcar extensões.</p><p>GitHub/GitLab/Bitbucket suportam LFS com cotas; DVC é alternativa popular em ML.</p><h2>Exemplo prático</h2><pre><code>git lfs install\ngit lfs track '*.psd' '*.mp4'\ngit add .gitattributes design.psd\ngit commit -m 'adiciona arte'</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Pense em LFS desde o primeiro commit que envolva binário pesado.</p></div>",
        "quiz": [
          {
            "prompt": "Git LFS é:",
            "options": [
              "Mesmo que git",
              "Extensão para binários grandes",
              "Banco",
              "Backend"
            ],
            "correct": 1,
            "explain": "Ponteiros."
          },
          {
            "prompt": "Sem LFS:",
            "options": [
              "Ok",
              "Inflam a .git a cada versão",
              "Comprimidos",
              "Ignorados"
            ],
            "correct": 1,
            "explain": "Cada versão duplica."
          },
          {
            "prompt": "DVC:",
            "options": [
              "Linter",
              "Alternativa para versionar datasets",
              "Editor",
              "Hospedagem"
            ],
            "correct": 1,
            "explain": "Popular em ML."
          }
        ]
      },
      {
        "id": "ga14",
        "title": "Segurança em GitHub",
        "summary": "Secret scanning, Dependabot, CodeQL.",
        "content": "<p>GitHub oferece múltiplas camadas: secret scanning detecta chaves vazadas, Dependabot atualiza deps vulneráveis, CodeQL faz análise estática, branch protection impede bypass.</p><h2>Aprofundando</h2><p>Rotacione secrets periodicamente. Use environment secrets para separar staging/prod.</p><p>CODEOWNERS automatiza review por path.</p><h2>Exemplo prático</h2><pre><code># .github/CODEOWNERS\n/backend/  @devs/backend\n/frontend/ @devs/frontend\n\n# Settings → Branches → Protection rule:\n# require PR + reviews, require CI green, no force push</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Secret scanning já salvou muitos projetos de vazamentos silenciosos.</p></div>",
        "quiz": [
          {
            "prompt": "Dependabot:",
            "options": [
              "Banco",
              "Automação de updates de deps",
              "Linter",
              "Monitor"
            ],
            "correct": 1,
            "explain": "PRs automáticos."
          },
          {
            "prompt": "Secret scanning pega:",
            "options": [
              "SQL",
              "Tokens/keys em commits",
              "CSS bug",
              "UI"
            ],
            "correct": 1,
            "explain": "Detecta vazamento."
          },
          {
            "prompt": "CODEOWNERS:",
            "options": [
              "Dono do repo",
              "Revisores automáticos por path",
              "Permissões DB",
              "Nada"
            ],
            "correct": 1,
            "explain": "Auto-assign."
          }
        ]
      },
      {
        "id": "ga15",
        "title": "Release engineering",
        "summary": "Versionamento, changelog e release notes automáticos.",
        "content": "<p>Release sério inclui semver, changelog mantido, release notes geradas e assets anexados. Ferramentas: changesets, semantic-release, release-please.</p><h2>Aprofundando</h2><p>Release-please lê conventional commits (feat:, fix:, chore:) e abre PR de release com changelog + bump.</p><p>Adote conventional commits desde cedo — destrava automação poderosa.</p><h2>Exemplo prático</h2><pre><code># .github/workflows/release.yml\n- uses: googleapis/release-please-action@v4\n  with:\n    release-type: node</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Padrão de commits claro compensa dez vezes o custo inicial de disciplina.</p></div>",
        "quiz": [
          {
            "prompt": "Semver:",
            "options": [
              "Datas",
              "MAJOR.MINOR.PATCH",
              "Aleatório",
              "Sprints"
            ],
            "correct": 1,
            "explain": "Padrão."
          },
          {
            "prompt": "Conventional commits:",
            "options": [
              "Estilo livre",
              "Formato estruturado",
              "Sem padrão",
              "Só monorepo"
            ],
            "correct": 1,
            "explain": "Permite automação."
          },
          {
            "prompt": "release-please:",
            "options": [
              "Manual",
              "PR automático com changelog",
              "Só Git Flow",
              "Não existe"
            ],
            "correct": 1,
            "explain": "Google's tool."
          }
        ]
      },
      {
        "id": "ga16",
        "title": "Git em escala",
        "summary": "Sparse checkout, partial clone, scalar.",
        "content": "<p>Repos de milhões de arquivos quebram Git ingênuo. Técnicas: partial clone (<code>--filter</code>), sparse checkout (só parte do repo), scalar (tooling Microsoft).</p><h2>Aprofundando</h2><p>Você raramente precisa, mas saber que existe te tira do buraco em repos grandes (gamedev, data platforms).</p><p>Se <code>git status</code> demora &gt;1s, é hora de investigar.</p><h2>Exemplo prático</h2><pre><code>git clone --filter=blob:none --sparse URL\ngit sparse-checkout set frontend/</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Performance matters — monitore tempos e investigue quando degradar.</p></div>",
        "quiz": [
          {
            "prompt": "Partial clone:",
            "options": [
              "Baixa tudo",
              "Baixa sob demanda",
              "Impossível",
              "Só tags"
            ],
            "correct": 1,
            "explain": "Reduz transferência."
          },
          {
            "prompt": "Sparse checkout:",
            "options": [
              "Tudo do repo",
              "Só subset de paths",
              "Só head",
              "Só main"
            ],
            "correct": 1,
            "explain": "Menos arquivos."
          },
          {
            "prompt": "Scalar:",
            "options": [
              "Linter",
              "Ferramentas Git para monorepo gigante",
              "Animação",
              "CI"
            ],
            "correct": 1,
            "explain": "Microsoft."
          }
        ]
      },
      {
        "id": "ga17",
        "title": "Forense — quem/quando/porquê",
        "summary": "blame, log -p, pickaxe.",
        "content": "<p>Quando um bug aparece, achar contexto vale ouro. Git tem várias lentes: blame (linha por linha), log -p (diffs), log --follow (renomeações), pickaxe (<code>-S</code>) para quando uma string apareceu/sumiu.</p><h2>Aprofundando</h2><p><code>-S'x'</code> é brilhante em auditoria de segurança — quando uma senha/flag apareceu?</p><p><code>log --follow</code> segue renames e preserva histórico real.</p><h2>Exemplo prático</h2><pre><code>git log -S'SenhaPadrao' --oneline\ngit blame app.js -L 10,20\ngit log --follow app.js</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Pickaxe é uma das ferramentas mais poderosas e subutilizadas do Git.</p></div>",
        "quiz": [
          {
            "prompt": "blame:",
            "options": [
              "Apaga",
              "Linha → último autor",
              "Linter",
              "Benchmark"
            ],
            "correct": 1,
            "explain": "Autoria por linha."
          },
          {
            "prompt": "-S'x':",
            "options": [
              "Busca em mensagens",
              "Commits que adicionaram/removeram 'x'",
              "Não existe",
              "CSS"
            ],
            "correct": 1,
            "explain": "Pickaxe."
          },
          {
            "prompt": "--follow:",
            "options": [
              "Sem efeito",
              "Segue renomes no log",
              "Só em merges",
              "Forest"
            ],
            "correct": 1,
            "explain": "Preserva histórico."
          }
        ]
      },
      {
        "id": "ga18",
        "title": "Boas práticas de time senior",
        "summary": "Cultura > comandos.",
        "content": "<p>Comandos são fáceis; o difícil é cultura. Práticas de times maduros fazem a diferença real.</p><h2>Aprofundando</h2><p>PRs pequenos e frequentes (&lt;400 linhas).</p><p>Commits atômicos com conventional commits.</p><p>CODEOWNERS e branch protection em main.</p><p>CI verde sempre (ninguém quebra main).</p><p>Release automático baseado em commits.</p><p>Documentação sobre o <em>porquê</em> das decisões, não só o <em>como</em>.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>A melhor dica técnica não vale nada se seu time não confia em você.</p></div>",
        "quiz": [
          {
            "prompt": "PR ideal:",
            "options": [
              "Gigante",
              "Pequeno e focado",
              "Aleatório",
              "Vazio"
            ],
            "correct": 1,
            "explain": "&lt;400 linhas."
          },
          {
            "prompt": "CODEOWNERS:",
            "options": [
              "Não existe",
              "Reviewers automáticos",
              "Só DB",
              "Só UI"
            ],
            "correct": 1,
            "explain": "Ownership."
          },
          {
            "prompt": "Cultura + técnica:",
            "options": [
              "Oposto",
              "Complementares",
              "Irrelevantes",
              "Só técnica importa"
            ],
            "correct": 1,
            "explain": "Ambas importam."
          },
          {
            "prompt": "Histórico linear:",
            "options": [
              "Sem valor",
              "Leitura/bisect mais fáceis",
              "Bug",
              "Maior"
            ],
            "correct": 1,
            "explain": "Debug facilitado."
          }
        ]
      }
    ]
  },
  {
    "id": "sql-avancado",
    "title": "SQL & Banco de Dados Avançado",
    "tagline": "CTEs, window functions, index tuning e o que separa analyst de engineer.",
    "description": "Aprenda o que realmente diferencia: CTEs recursivas, window functions, EXPLAIN/ANALYZE, índices compostos, partições, MVCC, replicação, sharding e zero-downtime migrations.",
    "level": "Avançado",
    "duration": "12h",
    "theme": "theme-py",
    "cover": "SQL+",
    "vip": true,
    "instructor": "Rafaela Tavares",
    "lessons": [
      {
        "id": "sa1",
        "title": "CTEs — WITH e legibilidade",
        "summary": "Common Table Expressions fazem SQL complexo ler bem.",
        "content": "<p>CTE é uma query nomeada válida dentro de outra. Evita subqueries aninhadas impossíveis de ler.</p><h2>Aprofundando</h2><p>Em Postgres, CTEs podem ser materializadas (cache) ou inlineable (PG12+ por padrão).</p><p>Ideal para relatórios, migrations e queries multi-etapas.</p><h2>Exemplo prático</h2><pre><code>WITH recentes AS (\n  SELECT * FROM pedidos WHERE criado_em &gt; now() - interval '30 days'\n),\ntop_clientes AS (\n  SELECT usuario_id, SUM(total) tot FROM recentes GROUP BY 1\n  ORDER BY tot DESC LIMIT 10\n)\nSELECT u.nome, t.tot\nFROM top_clientes t JOIN usuarios u ON u.id = t.usuario_id;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Nomeie etapas intermediárias — legibilidade é performance para quem mantém.</p></div>",
        "quiz": [
          {
            "prompt": "CTE é:",
            "options": [
              "Stored proc",
              "Query nomeada dentro de outra",
              "Trigger",
              "View"
            ],
            "correct": 1,
            "explain": "WITH foo AS (...)."
          },
          {
            "prompt": "Benefício:",
            "options": [
              "Performance sempre",
              "Legibilidade",
              "Menos memória",
              "Sem índice"
            ],
            "correct": 1,
            "explain": "Clareza primeiro."
          },
          {
            "prompt": "PG 12+ CTE:",
            "options": [
              "Sempre materializa",
              "Inlineable por default",
              "Desabilitado",
              "Experimental"
            ],
            "correct": 1,
            "explain": "Performance melhor."
          }
        ]
      },
      {
        "id": "sa2",
        "title": "CTEs recursivas",
        "summary": "Árvores e grafos direto em SQL.",
        "content": "<p>CTEs recursivas iteram sobre si mesmas até a base. Ideal para hierarquias (org charts, comentários, categorias).</p><h2>Aprofundando</h2><p>Sintaxe: parte base (anchor) UNION ALL parte recursiva.</p><p>Sempre tenha critério de parada — recursão infinita trava o banco.</p><h2>Exemplo prático</h2><pre><code>WITH RECURSIVE subs AS (\n  SELECT id, nome, parent_id, 1 AS nivel\n  FROM categorias WHERE parent_id IS NULL\n  UNION ALL\n  SELECT c.id, c.nome, c.parent_id, s.nivel + 1\n  FROM categorias c JOIN subs s ON c.parent_id = s.id\n)\nSELECT * FROM subs ORDER BY nivel, nome;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Hierarquias em SQL evitam N+1 na aplicação.</p></div>",
        "quiz": [
          {
            "prompt": "Recursive CTE:",
            "options": [
              "Só recursão",
              "Base + recursão + UNION ALL",
              "Loop while",
              "Procedure"
            ],
            "correct": 1,
            "explain": "Padrão SQL."
          },
          {
            "prompt": "Uso típico:",
            "options": [
              "Agregação",
              "Hierarquia/grafo",
              "Filtro",
              "Index"
            ],
            "correct": 1,
            "explain": "Árvores."
          },
          {
            "prompt": "Sem parada:",
            "options": [
              "Loop infinito",
              "Erro imediato",
              "Nada",
              "OK"
            ],
            "correct": 0,
            "explain": "Cuidado."
          }
        ]
      },
      {
        "id": "sa3",
        "title": "Window functions — o salto de nível",
        "summary": "ROW_NUMBER, RANK, LAG, LEAD, partições.",
        "content": "<p>Window functions calculam sobre um conjunto de linhas relacionadas sem agrupar. Permitem ranking, diferenças entre linhas, médias móveis e cohort analysis.</p><h2>Aprofundando</h2><p><code>OVER (PARTITION BY x ORDER BY y)</code> define o escopo da janela.</p><p>Substituem subqueries correlacionadas lentas — talvez o conhecimento de SQL com maior ROI.</p><h2>Exemplo prático</h2><pre><code>SELECT\n  usuario_id,\n  total,\n  ROW_NUMBER() OVER (PARTITION BY usuario_id ORDER BY criado_em) AS ordem,\n  LAG(total) OVER (PARTITION BY usuario_id ORDER BY criado_em) AS prev_total,\n  SUM(total) OVER (PARTITION BY usuario_id) AS total_usuario\nFROM pedidos;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Domine window functions e uma classe inteira de dores some.</p></div>",
        "quiz": [
          {
            "prompt": "Window function:",
            "options": [
              "Agrupa e reduz",
              "Calcula sem reduzir linhas",
              "Só agrega",
              "Só filtra"
            ],
            "correct": 1,
            "explain": "Mantém cardinalidade."
          },
          {
            "prompt": "LAG:",
            "options": [
              "Valor anterior na partição",
              "Próximo",
              "Aleatório",
              "Média"
            ],
            "correct": 0,
            "explain": "Olha para trás."
          },
          {
            "prompt": "ROW_NUMBER vs RANK:",
            "options": [
              "Iguais",
              "RANK empata, ROW_NUMBER não",
              "Inverso",
              "RANK mais rápido"
            ],
            "correct": 1,
            "explain": "Semântica distinta."
          }
        ]
      },
      {
        "id": "sa4",
        "title": "EXPLAIN e EXPLAIN ANALYZE",
        "summary": "Lendo o plano de execução.",
        "content": "<p><code>EXPLAIN</code> mostra o plano estimado; <code>EXPLAIN ANALYZE</code> roda e mede o real. Essencial para otimizar queries lentas.</p><h2>Aprofundando</h2><p>Observe tipo de scan (Seq vs Index), joins (Hash/Nested/Merge), custos e rows esperadas vs reais.</p><p>Diferenças grandes entre estimado e real indicam estatísticas desatualizadas — rode <code>ANALYZE</code>.</p><h2>Exemplo prático</h2><pre><code>EXPLAIN (ANALYZE, BUFFERS)\nSELECT u.nome, COUNT(*) FROM usuarios u\nJOIN pedidos p ON p.usuario_id = u.id\nWHERE p.total &gt; 100\nGROUP BY u.nome;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>explain.dalibo.com visualiza planos complexos de forma legível.</p></div>",
        "quiz": [
          {
            "prompt": "EXPLAIN ANALYZE:",
            "options": [
              "Só estima",
              "Executa e mede",
              "Cria plano",
              "Deleta"
            ],
            "correct": 1,
            "explain": "Roda de verdade."
          },
          {
            "prompt": "Seq Scan:",
            "options": [
              "Usa índice",
              "Lê tabela inteira",
              "Rápido sempre",
              "Erro"
            ],
            "correct": 1,
            "explain": "Sem índice."
          },
          {
            "prompt": "Rows estimado != real:",
            "options": [
              "Perfeito",
              "Estatísticas desatualizadas",
              "Normal",
              "Bug"
            ],
            "correct": 1,
            "explain": "ANALYZE tabela."
          }
        ]
      },
      {
        "id": "sa5",
        "title": "Índices avançados",
        "summary": "Compostos, parciais, expression, GIN.",
        "content": "<p>Além do índice simples: composto (ordem importa!), parcial (WHERE), em expressão (lower(email)), covering (INCLUDE), GIN para arrays/JSONB/full-text.</p><h2>Aprofundando</h2><p>Regra de ouro: coluna com igualdade mais seletiva primeiro, intervalos por último.</p><p>Índice errado consome disco e escrita sem benefício. Meça antes e depois.</p><h2>Exemplo prático</h2><pre><code>CREATE INDEX idx_pedidos_user_data ON pedidos(usuario_id, criado_em DESC);\nCREATE INDEX idx_pedidos_ativos ON pedidos(status) WHERE status = 'ativo';\nCREATE INDEX idx_email_lower ON usuarios((lower(email)));\nCREATE INDEX idx_meta ON produtos USING gin (metadata);</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Meça com EXPLAIN ANALYZE antes e depois de criar cada índice.</p></div>",
        "quiz": [
          {
            "prompt": "Índice composto:",
            "options": [
              "Ordem não importa",
              "Ordem importa (prefix match)",
              "Aleatório",
              "Automático"
            ],
            "correct": 1,
            "explain": "Mais seletivo primeiro."
          },
          {
            "prompt": "Índice parcial:",
            "options": [
              "Toda tabela",
              "Só linhas do WHERE",
              "Só PK",
              "JSONB-only"
            ],
            "correct": 1,
            "explain": "Economia."
          },
          {
            "prompt": "GIN em JSONB:",
            "options": [
              "Impossível",
              "Busca eficiente em campos",
              "Só PG13+",
              "Só BLOBs"
            ],
            "correct": 1,
            "explain": "Indexa estrutura."
          }
        ]
      },
      {
        "id": "sa6",
        "title": "Transações e isolamento",
        "summary": "READ COMMITTED, REPEATABLE READ, SERIALIZABLE.",
        "content": "<p>Quando transações concorrem, surgem anomalias: dirty read, non-repeatable read, phantom read. Nível de isolamento define quais são permitidas.</p><h2>Aprofundando</h2><p>Postgres default é READ COMMITTED. Para relatórios financeiros críticos, SERIALIZABLE elimina todas anomalias ao custo de retry em conflito.</p><p>MVCC do PG faz leituras não bloquearem escritas.</p><h2>Exemplo prático</h2><pre><code>BEGIN ISOLATION LEVEL SERIALIZABLE;\n-- ... queries ...\nCOMMIT;\n-- app precisa tratar erro de serialization failure</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Entenda anomalias primeiro; só então escolha isolamento.</p></div>",
        "quiz": [
          {
            "prompt": "Default Postgres:",
            "options": [
              "SERIALIZABLE",
              "READ COMMITTED",
              "REPEATABLE READ",
              "READ UNCOMMITTED"
            ],
            "correct": 1,
            "explain": "READ COMMITTED."
          },
          {
            "prompt": "Phantom read:",
            "options": [
              "Linha muda",
              "Query igual retorna conjunto diferente",
              "Dirty",
              "Não existe"
            ],
            "correct": 1,
            "explain": "Novas linhas aparecem."
          },
          {
            "prompt": "SERIALIZABLE pode:",
            "options": [
              "Silencioso",
              "Falhar e exigir retry",
              "Sem conflitos",
              "Slow only"
            ],
            "correct": 1,
            "explain": "Aborta em conflitos."
          }
        ]
      },
      {
        "id": "sa7",
        "title": "Locks — explícitos e implícitos",
        "summary": "SELECT FOR UPDATE, advisory, deadlock.",
        "content": "<p>Toda escrita no Postgres pega locks. Você pode escalar com <code>SELECT FOR UPDATE</code> (row-level) ou advisory locks (coordenação app-level).</p><h2>Aprofundando</h2><p>Deadlock: duas transações esperam lock uma da outra. PG detecta e aborta uma.</p><p>Transações curtas evitam filas de locks. Minutes-long transactions são antipattern.</p><h2>Exemplo prático</h2><pre><code>BEGIN;\nSELECT * FROM pedidos WHERE id = 1 FOR UPDATE;\nUPDATE pedidos SET status='pago' WHERE id=1;\nCOMMIT;\n\n-- advisory\nSELECT pg_try_advisory_lock(42);</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Transações curtas são um hábito, não uma opção.</p></div>",
        "quiz": [
          {
            "prompt": "SELECT FOR UPDATE:",
            "options": [
              "Lê só",
              "Lock exclusivo nas rows retornadas",
              "Deleta",
              "Count"
            ],
            "correct": 1,
            "explain": "Prende para update posterior."
          },
          {
            "prompt": "Advisory lock:",
            "options": [
              "Em linha",
              "Numérico app-level",
              "Tabela toda",
              "Só PG15"
            ],
            "correct": 1,
            "explain": "Coordenação."
          },
          {
            "prompt": "Deadlock:",
            "options": [
              "Fatal",
              "Detectado, uma txn aborta",
              "Nunca acontece",
              "Só MySQL"
            ],
            "correct": 1,
            "explain": "PG resolve."
          }
        ]
      },
      {
        "id": "sa8",
        "title": "Design de schema em escala",
        "summary": "Modelagem além de normalização.",
        "content": "<p>Normalização é ponto de partida. Em produção: denormalização seletiva, tabelas de agregados (rollup), event sourcing, soft delete.</p><h2>Aprofundando</h2><p>Um campo <code>total_pedidos</code> em <code>usuarios</code> pode ser 1000x mais rápido que recontar todo request.</p><p>Trade-offs são a essência do design de schema.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Não há resposta universal. Entenda o query pattern antes de modelar.</p></div>",
        "quiz": [
          {
            "prompt": "Denormalização:",
            "options": [
              "Sempre ruim",
              "Trade-off consciente",
              "Proibida",
              "Bug"
            ],
            "correct": 1,
            "explain": "Ferramenta válida."
          },
          {
            "prompt": "Soft delete:",
            "options": [
              "Apaga mesmo",
              "Marca deleted_at e filtra",
              "PG-only",
              "Bug"
            ],
            "correct": 1,
            "explain": "Preserva auditoria."
          },
          {
            "prompt": "Event sourcing:",
            "options": [
              "Tabela mutável",
              "Sequência imutável de eventos",
              "Cache",
              "Migration"
            ],
            "correct": 1,
            "explain": "Append-only."
          }
        ]
      },
      {
        "id": "sa9",
        "title": "Partitioning",
        "summary": "Tabelas gigantes gerenciáveis.",
        "content": "<p>Quando tabela ultrapassa centenas de GB, partitioning vira essencial. PG tem particionamento nativo por range (datas), list (enum), hash.</p><h2>Aprofundando</h2><p>Partição permite dropar range (apaga TB em segundos) e índices menores.</p><p>Automatize criação com pg_partman — partição faltando derruba a aplicação.</p><h2>Exemplo prático</h2><pre><code>CREATE TABLE eventos (id bigserial, criado_em timestamptz)\nPARTITION BY RANGE (criado_em);\n\nCREATE TABLE eventos_2025_01 PARTITION OF eventos\n  FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Partitioning é ferramenta de ops. Configure automação de partição desde o primeiro dia.</p></div>",
        "quiz": [
          {
            "prompt": "Partitioning serve em:",
            "options": [
              "Tabelas pequenas",
              "Tabelas muito grandes",
              "Sempre",
              "SQLite only"
            ],
            "correct": 1,
            "explain": "Escala."
          },
          {
            "prompt": "Range partition:",
            "options": [
              "Por hash",
              "Por intervalo (data)",
              "Aleatória",
              "Por nome"
            ],
            "correct": 1,
            "explain": "Clássico."
          },
          {
            "prompt": "Drop partição antiga:",
            "options": [
              "Linha a linha",
              "DROP TABLE em segundos",
              "Impossível",
              "Manual"
            ],
            "correct": 1,
            "explain": "Rápido."
          }
        ]
      },
      {
        "id": "sa10",
        "title": "Replicação",
        "summary": "Streaming, logical, failover.",
        "content": "<p>Replicação cria cópias quase em tempo real. PG oferece streaming (WAL físico) e logical (decodifica WAL em eventos).</p><h2>Aprofundando</h2><p>Use read replicas para aliviar leitura. Para HA, Patroni coordena failover automático.</p><p>Leitura eventualmente consistente — se precisa de read-after-write forte, não leia da réplica.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Replica é leitura rápida, não segurança de dados — para isso, backups.</p></div>",
        "quiz": [
          {
            "prompt": "Física:",
            "options": [
              "JSON sync",
              "WAL shipping byte-a-byte",
              "SQL dump",
              "Manual"
            ],
            "correct": 1,
            "explain": "Streaming."
          },
          {
            "prompt": "Logical:",
            "options": [
              "Mesmo que física",
              "Decodifica WAL em eventos",
              "SQLite",
              "Manual"
            ],
            "correct": 1,
            "explain": "Transformável."
          },
          {
            "prompt": "Read replica:",
            "options": [
              "Pode escrever",
              "Read-only",
              "Sem lag",
              "Síncrona sempre"
            ],
            "correct": 1,
            "explain": "Padrão async."
          }
        ]
      },
      {
        "id": "sa11",
        "title": "Sharding",
        "summary": "Quando um nó não dá conta.",
        "content": "<p>Sharding divide dados por chave entre múltiplos clusters. Acelera mas complica muito: joins cross-shard, re-sharding, distribuição.</p><h2>Aprofundando</h2><p>Alternativa em PG: Citus (extensão). Em apps, shard por tenant é padrão comum.</p><p>Prefira scale vertical + replicação até o último momento.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Sharding prematuro é a nova otimização prematura. Medir e adiar.</p></div>",
        "quiz": [
          {
            "prompt": "Sharding:",
            "options": [
              "Backup",
              "Divide dados entre clusters",
              "Index",
              "Cache"
            ],
            "correct": 1,
            "explain": "Scale horizontal."
          },
          {
            "prompt": "Custo:",
            "options": [
              "Nenhum",
              "Complexidade enorme",
              "Só dinheiro",
              "Neutro"
            ],
            "correct": 1,
            "explain": "Pain."
          },
          {
            "prompt": "Shard vs replica:",
            "options": [
              "Iguais",
              "Shard: dados diferentes; Replica: mesmos",
              "Inverso",
              "MySQL-only"
            ],
            "correct": 1,
            "explain": "Conceitos distintos."
          }
        ]
      },
      {
        "id": "sa12",
        "title": "JSONB e dados semi-estruturados",
        "summary": "Quando NoSQL encontra SQL.",
        "content": "<p>JSONB do Postgres guarda JSON indexável. Útil para campos flexíveis sem abandonar o relacional.</p><h2>Aprofundando</h2><p>Operadores: <code>-&gt;</code>, <code>-&gt;&gt;</code>, <code>@&gt;</code> (contains), <code>?</code> (existe key).</p><p>Se está guardando muito JSONB, questione se campos não deveriam virar colunas reais.</p><h2>Exemplo prático</h2><pre><code>SELECT meta-&gt;&gt;'cor' FROM produtos;\nSELECT * FROM produtos WHERE meta @&gt; '{\"ativo\": true}';\nCREATE INDEX ON produtos USING GIN (meta);</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>JSONB é poderoso mas cria falsa sensação de flexibilidade. Use com consciência.</p></div>",
        "quiz": [
          {
            "prompt": "JSONB indexável:",
            "options": [
              "Não",
              "Sim via GIN",
              "Só com copy",
              "Só PG14+"
            ],
            "correct": 1,
            "explain": "Busca eficiente."
          },
          {
            "prompt": "@>:",
            "options": [
              "Maior que",
              "Contains (subset JSON)",
              "Atribuição",
              "NULL check"
            ],
            "correct": 1,
            "explain": "Operador contém."
          },
          {
            "prompt": "Abusar de JSONB:",
            "options": [
              "Ok sempre",
              "Vira NoSQL mal feito",
              "Sempre certo",
              "Proibido"
            ],
            "correct": 1,
            "explain": "Modele bem."
          }
        ]
      },
      {
        "id": "sa13",
        "title": "Otimizando queries lentas",
        "summary": "Metodologia profissional.",
        "content": "<p>Metodologia: identifique (pg_stat_statements), reproduza, EXPLAIN ANALYZE, gargalo, fix, meça.</p><h2>Aprofundando</h2><p>Nunca otimize no achismo — sempre meça.</p><p>Top ofensores ficam claros em pg_stat_statements.</p><h2>Exemplo prático</h2><pre><code>SELECT query, calls, mean_exec_time\nFROM pg_stat_statements\nORDER BY mean_exec_time DESC LIMIT 10;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Uma hora de análise pode evitar um dia de refactor.</p></div>",
        "quiz": [
          {
            "prompt": "pg_stat_statements:",
            "options": [
              "Erro",
              "Extensão que traceia queries",
              "CLI",
              "UI"
            ],
            "correct": 1,
            "explain": "Performance insights."
          },
          {
            "prompt": "Primeiro passo:",
            "options": [
              "Adicionar índice",
              "Medir",
              "Reescrever",
              "Refactor"
            ],
            "correct": 1,
            "explain": "Diagnóstico antes."
          },
          {
            "prompt": "EXPLAIN ANALYZE:",
            "options": [
              "Dispensável",
              "Essencial",
              "Só MySQL",
              "Obsoleto"
            ],
            "correct": 1,
            "explain": "Indispensável."
          }
        ]
      },
      {
        "id": "sa14",
        "title": "MVCC — como PG enxerga concorrência",
        "summary": "Multi-version concurrency control.",
        "content": "<p>Cada escrita cria versão nova da linha. Leitores veem versão consistente no início da transação. Escritas não bloqueiam leituras.</p><h2>Aprofundando</h2><p>Versões antigas ocupam espaço até VACUUM liberar. Tabelas quentes requerem autovacuum tunado.</p><p>Dead tuples + autovacuum atrasado = table bloat. Monitore.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>MVCC é vantagem; bloat é a conta. Configure autovacuum adequado.</p></div>",
        "quiz": [
          {
            "prompt": "MVCC:",
            "options": [
              "Locks sempre",
              "Versões múltiplas, leitores não bloqueiam",
              "Single-thread",
              "MySQL legacy"
            ],
            "correct": 1,
            "explain": "Característica PG."
          },
          {
            "prompt": "VACUUM:",
            "options": [
              "Drop table",
              "Limpa versões mortas",
              "Backup",
              "Rebuild index"
            ],
            "correct": 1,
            "explain": "Libera espaço."
          },
          {
            "prompt": "Autovacuum:",
            "options": [
              "Sempre ligado, ignorar",
              "Tunar em tabelas quentes",
              "Só manual",
              "Ruim"
            ],
            "correct": 1,
            "explain": "Configuração por tabela."
          }
        ]
      },
      {
        "id": "sa15",
        "title": "Zero-downtime migrations",
        "summary": "Mudança de schema sem parar o produto.",
        "content": "<p>Migrations ingênuas travam minutos em tabelas grandes. Padrão: adicionar coluna nullable, backfill, trocar código, NOT NULL, remover legacy.</p><h2>Aprofundando</h2><p>Renomear coluna? Nunca direto. Crie nova, migre, deprecate antiga.</p><p>Migration em prod é software — revise, teste, monitore.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Migrations grandes devem virar cultura — revisão obrigatória.</p></div>",
        "quiz": [
          {
            "prompt": "ALTER em tabela grande:",
            "options": [
              "Instantâneo",
              "Pode travar",
              "Read-lock só",
              "Proibido"
            ],
            "correct": 1,
            "explain": "Exige cuidado."
          },
          {
            "prompt": "Rename coluna prod:",
            "options": [
              "Direto",
              "Em fases (expand-contract)",
              "Impossível",
              "Manual"
            ],
            "correct": 1,
            "explain": "Evita downtime."
          },
          {
            "prompt": "NOT NULL em coluna nova:",
            "options": [
              "Imediato",
              "Nullable, backfill, depois NOT NULL",
              "Nunca",
              "Só PG15"
            ],
            "correct": 1,
            "explain": "Sem lock prolongado."
          }
        ]
      },
      {
        "id": "sa16",
        "title": "Backup e PITR",
        "summary": "Point-in-time recovery.",
        "content": "<p>pg_dump é lógico; bom para exports pequenos. Para bases grandes: pg_basebackup + WAL archiving → restore em qualquer momento (PITR).</p><h2>Aprofundando</h2><p>Ferramentas: WAL-G, Barman, Borg.</p><p>Teste o restore periodicamente com drill real.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>O primeiro teste de restore deve ser hoje, não no dia do desastre.</p></div>",
        "quiz": [
          {
            "prompt": "PITR:",
            "options": [
              "Point-in-Time Recovery",
              "Log de perf",
              "Index",
              "Cloud"
            ],
            "correct": 0,
            "explain": "Reverter a momento."
          },
          {
            "prompt": "pg_basebackup:",
            "options": [
              "Lógico",
              "Físico (base completa)",
              "Só SQL",
              "Nenhum"
            ],
            "correct": 1,
            "explain": "Base binária."
          },
          {
            "prompt": "Testar restore:",
            "options": [
              "Desnecessário",
              "Periódico em isolado",
              "Só quando quebrar",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Disciplina."
          }
        ]
      },
      {
        "id": "sa17",
        "title": "Quando SQL não é a resposta",
        "summary": "Redis, Elasticsearch, ClickHouse, Mongo.",
        "content": "<p>Postgres resolve 90% dos casos. Mas às vezes uma ferramenta especializada ganha.</p><h2>Aprofundando</h2><p>Redis: cache, sessão, filas, rate limit.</p><p>Elasticsearch: busca textual e agregações em bilhões.</p><p>ClickHouse: OLAP em escala (analytics).</p><p>MongoDB: documento com schema mutável.</p><p>Neo4j: grafo com travessia pesada.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Polyglot persistence funciona, mas cada tecnologia adicional é custo operacional.</p></div>",
        "quiz": [
          {
            "prompt": "Redis ideal para:",
            "options": [
              "Contabilidade",
              "Cache/sessão/fila",
              "Relatórios financeiros",
              "BI"
            ],
            "correct": 1,
            "explain": "Chave-valor em memória."
          },
          {
            "prompt": "ClickHouse:",
            "options": [
              "OLTP",
              "OLAP/analytics",
              "Cache",
              "Grafo"
            ],
            "correct": 1,
            "explain": "Column store."
          },
          {
            "prompt": "Elasticsearch:",
            "options": [
              "ACID completo",
              "Busca textual em escala",
              "Queue",
              "JSON store"
            ],
            "correct": 1,
            "explain": "Search engine."
          }
        ]
      },
      {
        "id": "sa18",
        "title": "Trilha de engenharia de dados",
        "summary": "Do SQL avançado para data engineering.",
        "content": "<p>Próximos passos: DBA/SRE mindset, pipelines (Airflow/Dagster), modelagem dimensional (Kimball), dbt, streaming (Kafka/Flink), data lakehouse (Iceberg).</p><h2>Aprofundando</h2><p>Engenheiros que entendem profundo do banco valem ouro.</p><p>Livro essencial: Designing Data-Intensive Applications (Kleppmann).</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Dados são produto. Tratar com o mesmo rigor que código.</p></div>",
        "quiz": [
          {
            "prompt": "dbt foca em:",
            "options": [
              "DB admin",
              "Transformações em warehouse com SQL",
              "ETL full-stack",
              "Dashboard"
            ],
            "correct": 1,
            "explain": "Modelagem moderna."
          },
          {
            "prompt": "Airflow:",
            "options": [
              "DB",
              "Orquestração de pipelines",
              "Lib JS",
              "Cache"
            ],
            "correct": 1,
            "explain": "Workflows."
          },
          {
            "prompt": "Data lake:",
            "options": [
              "DB relacional puro",
              "Armazenamento columnar + engine",
              "OLTP",
              "Cache"
            ],
            "correct": 1,
            "explain": "Iceberg/Delta."
          },
          {
            "prompt": "Livro referência:",
            "options": [
              "Clean Code",
              "Designing Data-Intensive Applications",
              "GoF",
              "Refactoring"
            ],
            "correct": 1,
            "explain": "Indispensável."
          }
        ]
      }
    ]
  },
  {
    "id": "react-avancado",
    "title": "React Avançado",
    "tagline": "Hooks avançados, performance, Suspense, RSC e arquitetura.",
    "description": "Hooks avançados, performance real, Suspense, React Server Components, estratégias de estado global, testes, a11y e arquitetura de apps escaláveis.",
    "level": "Avançado",
    "duration": "12h",
    "theme": "theme-js",
    "cover": "React+",
    "vip": true,
    "instructor": "Pedro Ferraz",
    "lessons": [
      {
        "id": "rea1",
        "title": "Reconciliation e commit phase",
        "summary": "Como o React decide o que atualizar.",
        "content": "<p>React divide trabalho em render (puro, interruptível) e commit (DOM, síncrono). Concurrent Features permitem adiar e pular renders.</p><h2>Aprofundando</h2><p>Entender isso evita otimizações inúteis — a maioria dos useMemo/useCallback não muda nada.</p><p>Fiber é a estrutura interna de trabalho do render phase.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Meça antes de memoizar. Profiler > intuição.</p></div>",
        "quiz": [
          {
            "prompt": "Render phase:",
            "options": [
              "Side-effects",
              "Pura, pode repetir",
              "Commit",
              "Deleta"
            ],
            "correct": 1,
            "explain": "Idempotente."
          },
          {
            "prompt": "Commit:",
            "options": [
              "Pura",
              "DOM + effects",
              "Lenta sempre",
              "Opcional"
            ],
            "correct": 1,
            "explain": "Side-effects."
          },
          {
            "prompt": "Concurrent:",
            "options": [
              "Threads",
              "Pausa/retoma render",
              "Só SSR",
              "Só teste"
            ],
            "correct": 1,
            "explain": "Interrompível."
          }
        ]
      },
      {
        "id": "rea2",
        "title": "memo/useMemo/useCallback — quando importam",
        "summary": "Desmistificando memoização.",
        "content": "<p>React.memo evita re-render se props iguais (shallow). useMemo cacheia resultado caro. useCallback cacheia função.</p><h2>Aprofundando</h2><p>Premature memoization deixa código complexo sem ganho.</p><p>Use quando: lista grande, árvore cara, prop de filho memoizado.</p><h2>Exemplo prático</h2><pre><code>const fn = useCallback(() =&gt; doX(id), [id]);\nconst data = useMemo(() =&gt; compute(x), [x]);\nconst Filho = memo(Filho);</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Comece sem memo. Adicione só quando profiling pedir.</p></div>",
        "quiz": [
          {
            "prompt": "React.memo evita:",
            "options": [
              "Montagem",
              "Re-render se props iguais",
              "Fetch",
              "Tudo"
            ],
            "correct": 1,
            "explain": "Shallow compare."
          },
          {
            "prompt": "useCallback deps erradas:",
            "options": [
              "OK",
              "Stale closures",
              "Nada",
              "Rápido"
            ],
            "correct": 1,
            "explain": "Bugs."
          },
          {
            "prompt": "Premature memo:",
            "options": [
              "Sempre bom",
              "Código pior sem ganho",
              "Gratuito",
              "Fix universal"
            ],
            "correct": 1,
            "explain": "Meça."
          }
        ]
      },
      {
        "id": "rea3",
        "title": "useEffect avançado",
        "summary": "Cleanup, deps, race conditions.",
        "content": "<p>Effects causam bugs quando: deps omitidas, cleanup ausente, race em fetch.</p><h2>Aprofundando</h2><p>Use AbortController para fetch.</p><p>Considere data libs (TanStack Query) em vez de fetch em effect.</p><h2>Exemplo prático</h2><pre><code>useEffect(() =&gt; {\n  const ctrl = new AbortController();\n  fetch(url, { signal: ctrl.signal }).then(ok).catch(err);\n  return () =&gt; ctrl.abort();\n}, [url]);</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Se o effect é complexo, provavelmente não deveria ser um effect.</p></div>",
        "quiz": [
          {
            "prompt": "Race em fetch:",
            "options": [
              "Use AbortController/flag",
              "Nada",
              "Só timer",
              "Resolve só"
            ],
            "correct": 0,
            "explain": "Padrão."
          },
          {
            "prompt": "Deps incompletas:",
            "options": [
              "OK",
              "Stale closures",
              "Rápido",
              "Sem impacto"
            ],
            "correct": 1,
            "explain": "Bugs."
          },
          {
            "prompt": "TanStack Query:",
            "options": [
              "DB",
              "Fetch/cache/invalidação",
              "CSS",
              "Lint"
            ],
            "correct": 1,
            "explain": "Reduz boilerplate."
          }
        ]
      },
      {
        "id": "rea4",
        "title": "Custom hooks",
        "summary": "Reuso de lógica, não visual.",
        "content": "<p>Hooks customizados extraem comportamento (não JSX). Nome com prefixo use, chamam outros hooks, retornam API coerente.</p><h2>Aprofundando</h2><p>Bom para debounce, form, permissões, WebSocket.</p><p>Substituem HoC e render props antigos.</p><h2>Exemplo prático</h2><pre><code>function useDebounced(value, delay=300) {\n  const [v, setV] = useState(value);\n  useEffect(() =&gt; {\n    const id = setTimeout(() =&gt; setV(value), delay);\n    return () =&gt; clearTimeout(id);\n  }, [value, delay]);\n  return v;\n}</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Hooks reutilizáveis viram biblioteca interna do time.</p></div>",
        "quiz": [
          {
            "prompt": "Custom hook começa com:",
            "options": [
              "hook_",
              "use",
              "h_",
              "$"
            ],
            "correct": 1,
            "explain": "Convenção."
          },
          {
            "prompt": "Hook em if:",
            "options": [
              "OK",
              "Proibido (rules of hooks)",
              "Prod only",
              "Depende"
            ],
            "correct": 1,
            "explain": "Ordem constante."
          },
          {
            "prompt": "HoC hoje:",
            "options": [
              "Padrão",
              "Substituído por hooks",
              "Proibido",
              "Redux-only"
            ],
            "correct": 1,
            "explain": "Hooks venceram."
          }
        ]
      },
      {
        "id": "rea5",
        "title": "Context API — usos e antipadrões",
        "summary": "Estado global leve, pegadinhas.",
        "content": "<p>Context propaga valor sem prop drilling. Mas passa valor novo a cada render do provider → re-render em massa.</p><h2>Aprofundando</h2><p>Memoize o value provido.</p><p>Para estado quente, use lib dedicada (Zustand).</p><h2>Exemplo prático</h2><pre><code>const value = useMemo(() =&gt; ({ user, setUser }), [user]);\nreturn &lt;AuthContext.Provider value={value}&gt;{children}&lt;/AuthContext.Provider&gt;;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Context é para dados raros e amplos (theme, user), não para carrinho que muda 10x/s.</p></div>",
        "quiz": [
          {
            "prompt": "Context sem memo:",
            "options": [
              "Rápido",
              "Re-render ampla",
              "Neutro",
              "OK"
            ],
            "correct": 1,
            "explain": "Valor novo sempre."
          },
          {
            "prompt": "Estado frequente:",
            "options": [
              "Context só",
              "Zustand/Jotai/Redux",
              "localStorage",
              "Cookie"
            ],
            "correct": 1,
            "explain": "Store dedicada."
          },
          {
            "prompt": "Vários contexts vs um:",
            "options": [
              "Um só",
              "Múltiplos reduzem re-render",
              "Irrelevante",
              "Bug"
            ],
            "correct": 1,
            "explain": "Granularidade."
          }
        ]
      },
      {
        "id": "rea6",
        "title": "Zustand, Jotai, Redux Toolkit",
        "summary": "Escolhendo ferramenta certa.",
        "content": "<p>Zustand: simples e performático. Jotai: atom-based. Redux Toolkit: robusto com DevTools.</p><h2>Aprofundando</h2><p>Zustand cobre 90% dos apps médios.</p><p>RTK brilha em apps grandes com muito middleware.</p><p>Jotai tem modelo reativo granular.</p><h2>Exemplo prático</h2><pre><code>const useStore = create((set) =&gt; ({\n  count: 0,\n  inc: () =&gt; set((s) =&gt; ({ count: s.count + 1 }))\n}));</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Escolha pelo requisito, não pela moda.</p></div>",
        "quiz": [
          {
            "prompt": "Zustand:",
            "options": [
              "SQL",
              "Store simples performática",
              "UI",
              "Test"
            ],
            "correct": 1,
            "explain": "Popular e leve."
          },
          {
            "prompt": "RTK:",
            "options": [
              "Redux moderno",
              "Substituto React",
              "Só SSR",
              "Antiquário"
            ],
            "correct": 0,
            "explain": "Boilerplate reduzido."
          },
          {
            "prompt": "Jotai:",
            "options": [
              "Imperativo",
              "Atom-based reativo",
              "DB",
              "Build"
            ],
            "correct": 1,
            "explain": "Inspirado em Recoil."
          }
        ]
      },
      {
        "id": "rea7",
        "title": "Suspense e Concurrent UI",
        "summary": "Loading states declarativos.",
        "content": "<p>Suspense permite componentes 'suspenderem' enquanto esperam. Combinado com streaming SSR, muda percepção de velocidade.</p><h2>Aprofundando</h2><p>Code-splitting com React.lazy é o caso fácil.</p><p>Data fetching com Suspense exige lib compatível (Relay, TanStack Query v5).</p><h2>Exemplo prático</h2><pre><code>const Lazy = React.lazy(() =&gt; import('./Pesada'));\n&lt;Suspense fallback={&lt;Spinner/&gt;}&gt;&lt;Lazy/&gt;&lt;/Suspense&gt;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Não quebre UX com Suspense em tudo — navegação cheia de spinners é pior.</p></div>",
        "quiz": [
          {
            "prompt": "Suspense:",
            "options": [
              "Função",
              "Boundary de loading",
              "Store",
              "Router"
            ],
            "correct": 1,
            "explain": "Declarativo."
          },
          {
            "prompt": "React.lazy:",
            "options": [
              "Loader manual",
              "Code-split com import()",
              "HoC",
              "Hook"
            ],
            "correct": 1,
            "explain": "Sob demanda."
          },
          {
            "prompt": "Streaming SSR:",
            "options": [
              "Tudo antes",
              "HTML gradual",
              "CSR só",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Primeiros bytes rápidos."
          }
        ]
      },
      {
        "id": "rea8",
        "title": "React Server Components",
        "summary": "O paradigma do Next 13+.",
        "content": "<p>RSCs rodam no servidor; não vão pro client. Permitem acesso direto a DB/FS e mandam HTML + instruções pro client renderizar 'ilhas' interativas.</p><h2>Aprofundando</h2><p>Marque 'use client' quando precisa de useState/effects.</p><p>Ganho: bundle JS bem menor.</p><h2>Exemplo prático</h2><pre><code>// page.tsx (server)\nexport default async function Page() {\n  const posts = await db.posts.findMany();\n  return &lt;PostList posts={posts}/&gt;;\n}</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>RSC é o futuro do React, na prática via Next/Remix.</p></div>",
        "quiz": [
          {
            "prompt": "RSC roda em:",
            "options": [
              "Client",
              "Server",
              "Ambos",
              "Edge só"
            ],
            "correct": 1,
            "explain": "Servidor."
          },
          {
            "prompt": "Ganho principal:",
            "options": [
              "Pior perf",
              "Menos JS + DB direto",
              "Pior SEO",
              "Nada"
            ],
            "correct": 1,
            "explain": "Bundle menor."
          },
          {
            "prompt": "'use client':",
            "options": [
              "Ignora",
              "Marca interativo",
              "Deleta",
              "Só em test"
            ],
            "correct": 1,
            "explain": "Força bundle client."
          }
        ]
      },
      {
        "id": "rea9",
        "title": "Formulários sérios — RHF + zod",
        "summary": "Padrão de produção.",
        "content": "<p>React Hook Form minimiza renders e integra com qualquer UI. Zod descreve schema + infere tipos. Forms complexos viram declarativos.</p><h2>Aprofundando</h2><p>Esquema zod é fonte da verdade.</p><p>Integre com mutations (TanStack Query) para optimistic updates.</p><h2>Exemplo prático</h2><pre><code>const schema = z.object({ email: z.string().email(), senha: z.string().min(8) });\nconst { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Código de form é onde mais tempo se perde — RHF+zod tem ROI enorme.</p></div>",
        "quiz": [
          {
            "prompt": "RHF reduz:",
            "options": [
              "Renders",
              "Type safety",
              "DB",
              "Backend"
            ],
            "correct": 0,
            "explain": "Apenas re-renders necessários."
          },
          {
            "prompt": "Zod:",
            "options": [
              "Só runtime",
              "Valida + infere tipos",
              "Só tipos",
              "Só dev"
            ],
            "correct": 1,
            "explain": "Infer TS."
          },
          {
            "prompt": "Optimistic:",
            "options": [
              "Após servidor",
              "Antes, reverte em erro",
              "Sem UX",
              "SSR só"
            ],
            "correct": 1,
            "explain": "UX rápida."
          }
        ]
      },
      {
        "id": "rea10",
        "title": "Testando React — o que importa",
        "summary": "RTL + Vitest + Playwright.",
        "content": "<p>Teste pelo comportamento, não implementação. RTL força query por papéis acessíveis — se passa, sua UI é inclusiva.</p><h2>Aprofundando</h2><p>Unit: lógica e hooks.</p><p>Component: RTL + Vitest.</p><p>E2E: Playwright em fluxos-chave.</p><h2>Exemplo prático</h2><pre><code>test('login', async () =&gt; {\n  render(&lt;Login/&gt;);\n  await userEvent.type(screen.getByLabelText(/email/i), 'a@b.com');\n  await userEvent.click(screen.getByRole('button', { name: /entrar/i }));\n  expect(await screen.findByText(/bem-vindo/i)).toBeInTheDocument();\n});</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Se o teste quebra ao renomear interno, o teste está errado.</p></div>",
        "quiz": [
          {
            "prompt": "RTL prioriza:",
            "options": [
              "getByTestId",
              "getByRole (acessível)",
              "class",
              "xpath"
            ],
            "correct": 1,
            "explain": "Acessibilidade."
          },
          {
            "prompt": "Playwright:",
            "options": [
              "Unit",
              "E2E browser real",
              "Lint",
              "DB"
            ],
            "correct": 1,
            "explain": "Cenário real."
          },
          {
            "prompt": "Testar implementação:",
            "options": [
              "Robusto",
              "Frágil a refactor",
              "Padrão",
              "Rápido"
            ],
            "correct": 1,
            "explain": "Evite."
          }
        ]
      },
      {
        "id": "rea11",
        "title": "Performance budget",
        "summary": "Web Vitals — LCP, INP, CLS.",
        "content": "<p>LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Core Web Vitals impactam SEO e conversão.</p><h2>Aprofundando</h2><p>Ferramentas: Lighthouse, PageSpeed, web-vitals em prod.</p><p>Bundle budget, code split, imagens modernas, prefetch inteligente.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Use dados reais, não impressões. Medições são negociáveis; opiniões, não.</p></div>",
        "quiz": [
          {
            "prompt": "LCP mede:",
            "options": [
              "Primeiro byte",
              "Maior elemento visível",
              "Cliques",
              "Scroll"
            ],
            "correct": 1,
            "explain": "Conteúdo principal."
          },
          {
            "prompt": "INP:",
            "options": [
              "Input atraso",
              "Response time próxima interação",
              "DB lag",
              "SSR time"
            ],
            "correct": 1,
            "explain": "Responsividade."
          },
          {
            "prompt": "CLS:",
            "options": [
              "Layout shift cumulativo",
              "CPU load",
              "Bundle",
              "Routing"
            ],
            "correct": 0,
            "explain": "Estabilidade visual."
          }
        ]
      },
      {
        "id": "rea12",
        "title": "Acessibilidade de verdade",
        "summary": "WCAG, ARIA, teclado, leitor de tela.",
        "content": "<p>A11y é feature. Componentes acessíveis: foco visível, navegação por teclado, roles/labels ARIA, contraste.</p><h2>Aprofundando</h2><p>Semântica HTML primeiro; ARIA só quando HTML não resolve.</p><p>Radix UI/React Aria cuidam dos detalhes difíceis.</p><p>Teste com axe, navegação só teclado, leitor de tela.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>A11y beneficia todos — forms mais claros, navegação melhor.</p></div>",
        "quiz": [
          {
            "prompt": "ARIA primeiro:",
            "options": [
              "Sempre",
              "HTML nativo não resolve",
              "Nunca",
              "Só leitor"
            ],
            "correct": 1,
            "explain": "HTML antes."
          },
          {
            "prompt": "Radix UI:",
            "options": [
              "Só visual",
              "Primitivos acessíveis unstyled",
              "Framework",
              "CSS"
            ],
            "correct": 1,
            "explain": "Base acessível."
          },
          {
            "prompt": "Teste a11y:",
            "options": [
              "Só ver",
              "axe + teclado + leitor",
              "Lint só",
              "Dispensável"
            ],
            "correct": 1,
            "explain": "Múltiplas camadas."
          }
        ]
      },
      {
        "id": "rea13",
        "title": "CSR/SSR/SSG/ISR/Streaming",
        "summary": "Escolhendo estratégia certa.",
        "content": "<p>Não há resposta universal. Blog estático? SSG. Dashboard auth? CSR/SSR. E-commerce? ISR + streaming. Next App Router mistura tudo granularmente.</p><h2>Aprofundando</h2><p>Escolha pela frequência de atualização, SEO, latência.</p><p>Next com Server Components + streaming é default sólido em 2025.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Entenda cada modelo antes de escolher — custo/benefício varia muito.</p></div>",
        "quiz": [
          {
            "prompt": "Blog raramente atualizado:",
            "options": [
              "CSR",
              "SSG",
              "SSR",
              "Stream"
            ],
            "correct": 1,
            "explain": "Gerar uma vez."
          },
          {
            "prompt": "ISR:",
            "options": [
              "Incremental Static Regeneration",
              "Só SSR",
              "Streaming",
              "Edge"
            ],
            "correct": 0,
            "explain": "SSG + revalidate."
          },
          {
            "prompt": "Melhor SEO:",
            "options": [
              "CSR puro",
              "SSR/SSG",
              "Nenhum",
              "Só mobile"
            ],
            "correct": 1,
            "explain": "HTML server."
          }
        ]
      },
      {
        "id": "rea14",
        "title": "Error Boundaries",
        "summary": "Resiliência de UI.",
        "content": "<p>Errors em render derrubam a árvore. Error Boundary captura e renderiza fallback.</p><h2>Aprofundando</h2><p>Um EB por seção independente.</p><p>Log em Sentry.</p><p>Fallback oferece ação (recarregar, voltar).</p><h2>Exemplo prático</h2><pre><code>import { ErrorBoundary } from 'react-error-boundary';\n&lt;ErrorBoundary FallbackComponent={Fallback} onError={log}&gt;\n  &lt;Painel/&gt;\n&lt;/ErrorBoundary&gt;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>EBs não capturam erros async — trate esses com try/catch.</p></div>",
        "quiz": [
          {
            "prompt": "Error Boundary:",
            "options": [
              "JS errors em render",
              "Async",
              "Todos",
              "Nenhum"
            ],
            "correct": 0,
            "explain": "Síncronos."
          },
          {
            "prompt": "onError:",
            "options": [
              "Inútil",
              "Ideal para log em Sentry",
              "Dev only",
              "Server"
            ],
            "correct": 1,
            "explain": "Observabilidade."
          },
          {
            "prompt": "Sem EB:",
            "options": [
              "Seguro",
              "Erro deixa UI em branco",
              "Recupera só",
              "Reload"
            ],
            "correct": 1,
            "explain": "Catastrófico."
          }
        ]
      },
      {
        "id": "rea15",
        "title": "Segurança no client",
        "summary": "XSS, tokens, CSP.",
        "content": "<p>Frontend: escape adequado, evite innerHTML com externo, CSP estrita, tokens em HttpOnly cookies, cuidado com libs terceiras.</p><h2>Aprofundando</h2><p>React escapa por default — não use dangerouslySetInnerHTML sem sanitizar.</p><p>Token em HttpOnly cookie > localStorage (XSS).</p><p>CSP headers no servidor.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Segurança no front não substitui no back, mas é camada obrigatória.</p></div>",
        "quiz": [
          {
            "prompt": "dangerouslySetInnerHTML:",
            "options": [
              "Seguro",
              "Perigoso sem sanitizar",
              "Padrão",
              "Rápido"
            ],
            "correct": 1,
            "explain": "Cuidado extremo."
          },
          {
            "prompt": "Token ideal:",
            "options": [
              "localStorage",
              "HttpOnly cookie",
              "sessionStorage",
              "URL"
            ],
            "correct": 1,
            "explain": "Resistente a XSS."
          },
          {
            "prompt": "CSP:",
            "options": [
              "CSS",
              "Content Security Policy header",
              "Auth",
              "Cache"
            ],
            "correct": 1,
            "explain": "Defense in depth."
          }
        ]
      },
      {
        "id": "rea16",
        "title": "Arquitetura de apps grandes",
        "summary": "Estrutura que escala com o time.",
        "content": "<p>Domínios separados, boundaries claros, dependency direction (UI → domain → infra), lazy loading de rotas.</p><h2>Aprofundando</h2><p>features/ (vertical slice).</p><p>screens/pages (UI entry).</p><p>libs/ (reuso).</p><p>Consistência no time > 'melhor arquitetura'.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Ler código > escrever. Pense no próximo dev.</p></div>",
        "quiz": [
          {
            "prompt": "Dependency direction:",
            "options": [
              "Random",
              "UI → domain → infra",
              "UI ↔ tudo",
              "infra → UI"
            ],
            "correct": 1,
            "explain": "Evita acoplamento invertido."
          },
          {
            "prompt": "Consistência:",
            "options": [
              "Secundária",
              "Crucial em time",
              "Só no fim de semana",
              "Só lint"
            ],
            "correct": 1,
            "explain": "Escala o time."
          },
          {
            "prompt": "Refactor:",
            "options": [
              "Antes do problema",
              "Quando doer",
              "Nunca",
              "Sempre"
            ],
            "correct": 1,
            "explain": "Responde à dor."
          }
        ]
      },
      {
        "id": "rea17",
        "title": "Migrando legacy React",
        "summary": "Classes→hooks, CRA→Vite.",
        "content": "<p>Migração em etapas: TS incremental, classes→funções, CRA→Vite/Next, state libs, testes.</p><h2>Aprofundando</h2><p>Nunca big bang.</p><p>Lint rules que empurram pro novo estilo.</p><p>Testes cobrindo áreas migradas.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Migração sem testes é apostar a reputação.</p></div>",
        "quiz": [
          {
            "prompt": "Migração ideal:",
            "options": [
              "Big bang",
              "Iterativa",
              "Sem plano",
              "Só CSS"
            ],
            "correct": 1,
            "explain": "Passo a passo."
          },
          {
            "prompt": "CRA:",
            "options": [
              "Atual",
              "Obsoleto, migrar para Vite/Next",
              "Único",
              "Rápido"
            ],
            "correct": 1,
            "explain": "Deprecated."
          },
          {
            "prompt": "Testes:",
            "options": [
              "Após",
              "Essenciais durante",
              "Nunca",
              "Depois tudo pronto"
            ],
            "correct": 1,
            "explain": "Segurança."
          }
        ]
      },
      {
        "id": "rea18",
        "title": "Trilha React engineer",
        "summary": "Senior não é só código.",
        "content": "<p>Áreas: performance profunda, SSR (Next), design systems, arquitetura de estado, a11y avançada, DevEx.</p><h2>Aprofundando</h2><p>OSS + falar em meetups + escrever.</p><p>Senior é 50% técnico + 50% comunicação.</p><p>Saiba quando NÃO usar React (sites estáticos simples → Astro/11ty).</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Aprenda também back-end sério. Full-stack real.</p></div>",
        "quiz": [
          {
            "prompt": "Senior é:",
            "options": [
              "Só código",
              "Técnico + comunicação + mentoria",
              "Só liderança",
              "Planner"
            ],
            "correct": 1,
            "explain": "Múltiplas dimensões."
          },
          {
            "prompt": "Para evoluir:",
            "options": [
              "Código só",
              "Escrever, ensinar, contribuir",
              "Só leitura",
              "Nada"
            ],
            "correct": 1,
            "explain": "Saídas múltiplas."
          },
          {
            "prompt": "Full-stack:",
            "options": [
              "Dispensa back",
              "Envolve back real",
              "Só front",
              "Só DB"
            ],
            "correct": 1,
            "explain": "Duas pontas."
          },
          {
            "prompt": "Quando não React:",
            "options": [
              "Sempre",
              "Sites simples → Astro",
              "Só Angular",
              "Nunca pensa"
            ],
            "correct": 1,
            "explain": "Ferramenta certa."
          }
        ]
      }
    ]
  },
  {
    "id": "node-avancado",
    "title": "Node.js Avançado",
    "tagline": "Streams, clustering, performance, arquitetura e backends que escalam.",
    "description": "Event loop profundo, streams eficientes, worker threads, cluster, profiling, arquitetura hexagonal, queues, WebSockets e deployment resiliente.",
    "level": "Avançado",
    "duration": "12h",
    "theme": "theme-js",
    "cover": "Node+",
    "vip": true,
    "instructor": "Bruno Alencar",
    "lessons": [
      {
        "id": "nod1",
        "title": "Event loop em profundidade",
        "summary": "Phases, microtasks, nextTick.",
        "content": "<p>Microtasks (nextTick, Promise callbacks) rodam entre fases. nextTick tem prioridade maior que Promises. Abuso bloqueia o loop.</p><h2>Aprofundando</h2><p>Medir: --inspect, perf_hooks, clinic.js.</p><p>CPU-bound trava todo o loop — use worker threads.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Se o loop trava por segundos, você precisa de worker threads ou fila externa.</p></div>",
        "quiz": [
          {
            "prompt": "nextTick vs Promise:",
            "options": [
              "Iguais",
              "nextTick maior prioridade",
              "Promise maior",
              "Randômico"
            ],
            "correct": 1,
            "explain": "Ordem diferente."
          },
          {
            "prompt": "CPU pesado:",
            "options": [
              "Só request",
              "Todo o loop",
              "Sem impacto",
              "Só Promises"
            ],
            "correct": 1,
            "explain": "Single-thread."
          },
          {
            "prompt": "Profiler:",
            "options": [
              "clinic.js / --inspect",
              "Nada",
              "npm audit",
              "Cron"
            ],
            "correct": 0,
            "explain": "Medir antes."
          }
        ]
      },
      {
        "id": "nod2",
        "title": "Streams — o segredo do throughput",
        "summary": "Readable, Writable, Duplex, Transform.",
        "content": "<p>Streams processam dados em chunks, sem carregar tudo em memória. Fundamental para arquivos grandes, HTTP, proxies, pipelines.</p><h2>Aprofundando</h2><p>pipeline do core lida com erros melhor que .pipe().</p><p>Backpressure evita producer rápido demais.</p><p>async iterables casam com streams.</p><h2>Exemplo prático</h2><pre><code>import { pipeline } from 'node:stream/promises';\nimport { createReadStream, createWriteStream } from 'node:fs';\nimport { createGzip } from 'node:zlib';\nawait pipeline(createReadStream('in.txt'), createGzip(), createWriteStream('in.txt.gz'));</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Memória constante, mesmo processando GBs. É assim que servidores escalam.</p></div>",
        "quiz": [
          {
            "prompt": "Stream processa:",
            "options": [
              "Tudo uma vez",
              "Em chunks",
              "Buffer único",
              "Impossível"
            ],
            "correct": 1,
            "explain": "Throughput."
          },
          {
            "prompt": "pipeline vs pipe:",
            "options": [
              "Iguais",
              "pipeline trata erros",
              "pipe sempre",
              "Nenhum"
            ],
            "correct": 1,
            "explain": "Use pipeline."
          },
          {
            "prompt": "Transform:",
            "options": [
              "Só lê",
              "Transforma em trânsito",
              "Só grava",
              "Só zip"
            ],
            "correct": 1,
            "explain": "Output modificado."
          }
        ]
      },
      {
        "id": "nod3",
        "title": "Worker threads e cluster",
        "summary": "Paralelismo real.",
        "content": "<p>Worker threads executam JS em threads separados (CPU-bound sem bloquear loop). Cluster forka processos.</p><h2>Aprofundando</h2><p>Workers compartilham ArrayBuffer via transferList.</p><p>Cluster balanceia conexões entre procs.</p><p>PM2 gerencia procs em prod.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Processos > threads quando isolamento e segurança importam.</p></div>",
        "quiz": [
          {
            "prompt": "Worker thread:",
            "options": [
              "Mesmo loop",
              "Thread separada JS",
              "Process child",
              "Fake"
            ],
            "correct": 1,
            "explain": "Real."
          },
          {
            "prompt": "Cluster:",
            "options": [
              "1 proc",
              "Múltiplos via fork",
              "Thread pool",
              "Sem uso"
            ],
            "correct": 1,
            "explain": "Escala CPU."
          },
          {
            "prompt": "PM2:",
            "options": [
              "Banco",
              "Process manager Node",
              "Linter",
              "Test"
            ],
            "correct": 1,
            "explain": "Procs gerenciados."
          }
        ]
      },
      {
        "id": "nod4",
        "title": "Fastify — alternativa moderna",
        "summary": "~2-3x Express com schemas.",
        "content": "<p>Fastify é mais rápido que Express, com schemas validados automaticamente e plugin system encapsulado.</p><h2>Aprofundando</h2><p>JSON schema valida req/res.</p><p>Plugins oficiais para auth, CORS, rate limit, OpenAPI.</p><p>Para novas APIs, considere Fastify por default.</p><h2>Exemplo prático</h2><pre><code>import Fastify from 'fastify';\nconst app = Fastify({ logger: true });\napp.get('/u/:id', { schema: { params: { type:'object', properties: { id: { type:'string' } } } } }, async (req) =&gt; ({ id: req.params.id }));\napp.listen({ port: 3000 });</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Schema built-in elimina validação manual e gera docs.</p></div>",
        "quiz": [
          {
            "prompt": "Fastify:",
            "options": [
              "Fork Express",
              "Framework com foco em perf/schemas",
              "DB",
              "Banco"
            ],
            "correct": 1,
            "explain": "Projeto próprio."
          },
          {
            "prompt": "Schema em Fastify:",
            "options": [
              "Manual",
              "Validação + serialização auto",
              "UI só",
              "TS só"
            ],
            "correct": 1,
            "explain": "Performante."
          },
          {
            "prompt": "Plugin system:",
            "options": [
              "Global",
              "Encapsulado",
              "Inexistente",
              "CSS"
            ],
            "correct": 1,
            "explain": "Isolamento."
          }
        ]
      },
      {
        "id": "nod5",
        "title": "Arquitetura hexagonal",
        "summary": "Domínio isolado da infra.",
        "content": "<p>Separar domínio (regras de negócio puras) de infra (DB, HTTP, filas). Testes do domínio não dependem de containers.</p><h2>Aprofundando</h2><p>Portas são interfaces; adaptadores implementam.</p><p>Domínio não importa infra.</p><p>Cuidado com overengineering em apps pequenos.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Hexagonal brilha em domínios complexos — overkill em CRUDs simples.</p></div>",
        "quiz": [
          {
            "prompt": "Domínio:",
            "options": [
              "Depende DB",
              "Puro, sem infra",
              "É infra",
              "Mistura"
            ],
            "correct": 1,
            "explain": "Alvo hexagonal."
          },
          {
            "prompt": "Portas:",
            "options": [
              "Concretas",
              "Interfaces abstratas",
              "DB",
              "Framework"
            ],
            "correct": 1,
            "explain": "Abstrações."
          },
          {
            "prompt": "Benefício:",
            "options": [
              "Testes rápidos, troca infra fácil",
              "Zero",
              "Só perf",
              "Só seg"
            ],
            "correct": 0,
            "explain": "Flexibilidade."
          }
        ]
      },
      {
        "id": "nod6",
        "title": "Queues e jobs",
        "summary": "BullMQ, SQS.",
        "content": "<p>Não processe e-mails, pagamentos, webhooks na request. Enfileire jobs e processe em worker separado.</p><h2>Aprofundando</h2><p>BullMQ (Redis) é padrão Node.</p><p>Retries, delays, prioridades, cron.</p><p>Deadletter + idempotência para robustez.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Worker resiliente + idempotência = fluxos assíncronos robustos.</p></div>",
        "quiz": [
          {
            "prompt": "BullMQ:",
            "options": [
              "PG",
              "Redis-backed",
              "S3",
              "Kafka"
            ],
            "correct": 1,
            "explain": "Redis."
          },
          {
            "prompt": "Deadletter:",
            "options": [
              "Sucesso",
              "Falharam múltiplas vezes",
              "Extras",
              "Pendente"
            ],
            "correct": 1,
            "explain": "Análise/replay."
          },
          {
            "prompt": "Idempotência:",
            "options": [
              "Impossível",
              "Chave para retries seguros",
              "Anti-pattern",
              "Só leitura"
            ],
            "correct": 1,
            "explain": "Retry sem duplicar."
          }
        ]
      },
      {
        "id": "nod7",
        "title": "WebSockets e realtime",
        "summary": "Socket.io, ws, canais.",
        "content": "<p>WebSockets dão comunicação full-duplex. Útil para chat, notificações, dashboards live.</p><h2>Aprofundando</h2><p>Socket.io: reconnect, rooms, namespaces.</p><p>ws: mais baixo nível.</p><p>Escalar requer Redis adapter em cluster.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>SSE é alternativa leve quando só precisa server→client.</p></div>",
        "quiz": [
          {
            "prompt": "Socket.io:",
            "options": [
              "HTTP só",
              "WS + fallbacks + rooms/reconnect",
              "SQL",
              "Editor"
            ],
            "correct": 1,
            "explain": "Abstração."
          },
          {
            "prompt": "Escalar WS:",
            "options": [
              "Natural",
              "Requer adapter (Redis)",
              "Impossível",
              "CDN"
            ],
            "correct": 1,
            "explain": "Sync entre procs."
          },
          {
            "prompt": "SSE:",
            "options": [
              "Symmetric",
              "Server → Client unidirecional",
              "Igual WS",
              "Só browser"
            ],
            "correct": 1,
            "explain": "Leve."
          }
        ]
      },
      {
        "id": "nod8",
        "title": "Observabilidade avançada",
        "summary": "Logs + métricas + traces + erros.",
        "content": "<p>Prod séria: logs estruturados (pino), métricas (Prometheus), traces (OpenTelemetry), erros (Sentry).</p><h2>Aprofundando</h2><p>Trace ID correlaciona logs/métricas/traces.</p><p>RED: Rate/Errors/Duration por endpoint.</p><p>USE: Utilization/Saturation/Errors para infra.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Sem observabilidade, debug em prod é adivinhação.</p></div>",
        "quiz": [
          {
            "prompt": "OpenTelemetry:",
            "options": [
              "Fila",
              "Spec/impl de traces/métricas/logs",
              "Banco",
              "UI"
            ],
            "correct": 1,
            "explain": "Cross-vendor."
          },
          {
            "prompt": "Trace ID:",
            "options": [
              "Random",
              "Correlaciona em request",
              "Bug",
              "Sem uso"
            ],
            "correct": 1,
            "explain": "Debug distribuído."
          },
          {
            "prompt": "RED:",
            "options": [
              "3 métricas",
              "Cor",
              "Logo",
              "Editor"
            ],
            "correct": 0,
            "explain": "Rate/Errors/Duration."
          }
        ]
      },
      {
        "id": "nod9",
        "title": "Performance — profiling real",
        "summary": "Flamegraphs, heap snapshots.",
        "content": "<p>Clinic.js gera flamegraphs. DevTools + --inspect dá profiles CPU/heap. Memory leaks aparecem em heap diffs.</p><h2>Aprofundando</h2><p>Medir em carga realista.</p><p>Caminho quente vs cold path.</p><p>Memory leaks: retenção sem uso.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Premature optimization ainda é raiz do mal. Meça primeiro.</p></div>",
        "quiz": [
          {
            "prompt": "Flamegraph:",
            "options": [
              "CSS",
              "Tempo em call stack",
              "DB",
              "Logs"
            ],
            "correct": 1,
            "explain": "Profiling visual."
          },
          {
            "prompt": "Heap snapshot:",
            "options": [
              "CPU só",
              "Objetos em memória",
              "Fila",
              "Conexões"
            ],
            "correct": 1,
            "explain": "Diff revela leak."
          },
          {
            "prompt": "Clinic.js:",
            "options": [
              "DB",
              "Suite de profiling Node",
              "CI",
              "Editor"
            ],
            "correct": 1,
            "explain": "Doctor/Bubbleprof/Flame."
          }
        ]
      },
      {
        "id": "nod10",
        "title": "Segurança em APIs Node",
        "summary": "Helmet, validação, secrets.",
        "content": "<p>Helmet para headers, zod/Joi para validar, rate limiting, CORS preciso, secret manager, deps auditadas.</p><h2>Aprofundando</h2><p>Evite eval/new Function com input externo.</p><p>Princípio do menor privilégio no DB.</p><p>Token rotation; audit regular.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Segurança é checklist constante, não one-shot.</p></div>",
        "quiz": [
          {
            "prompt": "Helmet:",
            "options": [
              "Testa",
              "Headers de seg prontos",
              "DB",
              "UI"
            ],
            "correct": 1,
            "explain": "Middleware."
          },
          {
            "prompt": "Input validation:",
            "options": [
              "Só TS basta",
              "Obrigatória runtime",
              "Só front",
              "Só DB"
            ],
            "correct": 1,
            "explain": "TS some em runtime."
          },
          {
            "prompt": "Secret manager:",
            "options": [
              "No código",
              "Vault/Secrets Manager/ENV externo",
              "Email",
              "Repo"
            ],
            "correct": 1,
            "explain": "Centraliza."
          }
        ]
      },
      {
        "id": "nod11",
        "title": "Micro vs monolito",
        "summary": "Não entre em moda cedo.",
        "content": "<p>Microsserviços resolvem problemas organizacionais, não só técnicos. Comece monolito modular; extraia serviços quando a dor pedir.</p><h2>Aprofundando</h2><p>REST, gRPC, eventos — trade-offs.</p><p>Eventos assíncronos desacoplam.</p><p>Observabilidade vira mais crítica.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Microsserviços prematuros são a nova otimização prematura.</p></div>",
        "quiz": [
          {
            "prompt": "Quando micro:",
            "options": [
              "Dia 1",
              "Quando complexidade/time exigem",
              "Nunca",
              "Só Java"
            ],
            "correct": 1,
            "explain": "Pela dor."
          },
          {
            "prompt": "Comunicação:",
            "options": [
              "Sempre REST",
              "REST/gRPC/eventos",
              "Só eventos",
              "Só gRPC"
            ],
            "correct": 1,
            "explain": "Trade-offs."
          },
          {
            "prompt": "Eventual consistency:",
            "options": [
              "Evitável em distribuído",
              "Inerente ao distribuído",
              "Erro",
              "SQL só"
            ],
            "correct": 1,
            "explain": "Trade-offs."
          }
        ]
      },
      {
        "id": "nod12",
        "title": "GraphQL no Node",
        "summary": "Apollo, Yoga, Mercurius.",
        "content": "<p>GraphQL dá cliente controle de query. Evita over/under-fetching; custo: complexidade no server.</p><h2>Aprofundando</h2><p>DataLoader para batch/cache (evita N+1).</p><p>Limit depth/complexity para proteger server.</p><p>Brilha com múltiplos clients.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>GraphQL é poderoso — mas REST bem feito ainda é suficiente em muitos casos.</p></div>",
        "quiz": [
          {
            "prompt": "N+1 em GQL:",
            "options": [
              "Ignorável",
              "Risco; use DataLoader",
              "Impossível",
              "CSS"
            ],
            "correct": 1,
            "explain": "Clássico."
          },
          {
            "prompt": "Schema:",
            "options": [
              "Runtime",
              "Contrato server/client",
              "Backup",
              "UI"
            ],
            "correct": 1,
            "explain": "Tipo do grafo."
          },
          {
            "prompt": "DataLoader:",
            "options": [
              "Cache/batch por request",
              "DB",
              "UI",
              "CDN"
            ],
            "correct": 0,
            "explain": "Loader popular."
          }
        ]
      },
      {
        "id": "nod13",
        "title": "Serverless com Node",
        "summary": "Functions, cold start, limites.",
        "content": "<p>Lambda, Vercel, Cloudflare Workers. Paga por execução. Bom para bursty ou event-driven.</p><h2>Aprofundando</h2><p>Cold start é o gotcha — bundle pequeno, minimize deps.</p><p>Sem estado — use DB/cache externo.</p><p>Edge functions (V8 isolates) têm cold start quase zero.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Medir custo por request importa — serverless não é sempre barato.</p></div>",
        "quiz": [
          {
            "prompt": "Cold start:",
            "options": [
              "Inexistente",
              "Latência inicial de função ociosa",
              "CSS",
              "Bug"
            ],
            "correct": 1,
            "explain": "Importante em UX."
          },
          {
            "prompt": "Edge:",
            "options": [
              "Python only",
              "V8 isolates globalmente",
              "AWS só",
              "Sem limite"
            ],
            "correct": 1,
            "explain": "Latência geográfica baixa."
          },
          {
            "prompt": "Stateful serverless:",
            "options": [
              "Natural",
              "Anti-pattern",
              "Obrigatório",
              "Padrão"
            ],
            "correct": 1,
            "explain": "Externo."
          }
        ]
      },
      {
        "id": "nod14",
        "title": "Testes em Node sério",
        "summary": "Integration, contract, load.",
        "content": "<p>Além de unit: integration (API + DB real), contract (Pact), load (k6, autocannon).</p><h2>Aprofundando</h2><p>Testcontainers sobem infra efêmera.</p><p>Pact garante contrato entre serviços.</p><p>Pirâmide: muitos unit, médio integration, pouco E2E.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Não inverta a pirâmide — E2E em excesso é lento e frágil.</p></div>",
        "quiz": [
          {
            "prompt": "k6:",
            "options": [
              "Monitor",
              "Load testing",
              "Linter",
              "UI"
            ],
            "correct": 1,
            "explain": "Script JS-like."
          },
          {
            "prompt": "Pact:",
            "options": [
              "DB",
              "Contract testing",
              "Proxy",
              "Log"
            ],
            "correct": 1,
            "explain": "Consumer-driven."
          },
          {
            "prompt": "Pirâmide:",
            "options": [
              "Muitos E2E",
              "Mais unit que integration",
              "Iguais",
              "Aleatória"
            ],
            "correct": 1,
            "explain": "Custos diferentes."
          }
        ]
      },
      {
        "id": "nod15",
        "title": "Deploy resiliente",
        "summary": "Docker, k8s, rolling, graceful shutdown.",
        "content": "<p>Dockerfile multi-stage, health checks, graceful shutdown, rolling deploy evitam downtime.</p><h2>Aprofundando</h2><p>SIGTERM → pare de aceitar, termine ativas, encerre.</p><p>Non-root user, imagem mínima.</p><p>Multi-stage separa build de runtime.</p><h2>Exemplo prático</h2><pre><code>process.on('SIGTERM', async () =&gt; {\n  await server.close();\n  process.exit(0);\n});</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Deploy bom é invisível. Deploy ruim faz clientes ligarem.</p></div>",
        "quiz": [
          {
            "prompt": "Multi-stage:",
            "options": [
              "Única gigante",
              "Separa build de runtime",
              "CI só",
              "Nenhum"
            ],
            "correct": 1,
            "explain": "Imagem menor."
          },
          {
            "prompt": "Rolling deploy:",
            "options": [
              "Tudo uma vez",
              "Gradual",
              "Fim de semana só",
              "Aleatório"
            ],
            "correct": 1,
            "explain": "Zero downtime."
          },
          {
            "prompt": "SIGTERM:",
            "options": [
              "Matar imediatamente",
              "Encerrar gracefully",
              "Ignorar",
              "Reiniciar"
            ],
            "correct": 1,
            "explain": "Fechamento limpo."
          }
        ]
      },
      {
        "id": "nod16",
        "title": "Event-driven backend",
        "summary": "Kafka, NATS, event sourcing.",
        "content": "<p>Desacopla serviços. Kafka para pipelines analíticos; NATS lightweight para micros internos.</p><h2>Aprofundando</h2><p>At-least-once exige idempotência.</p><p>Schema registry evita drift.</p><p>Event sourcing: eventos são source of truth.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Eventos não são mágica — exigem disciplina em schemas e contratos.</p></div>",
        "quiz": [
          {
            "prompt": "Kafka:",
            "options": [
              "Queue simples",
              "Log distribuído com partições",
              "DB",
              "UI"
            ],
            "correct": 1,
            "explain": "Backbone."
          },
          {
            "prompt": "Event sourcing:",
            "options": [
              "Estado mutável",
              "Eventos são source of truth",
              "Cache",
              "Query"
            ],
            "correct": 1,
            "explain": "State = fold(events)."
          },
          {
            "prompt": "At-least-once:",
            "options": [
              "Duplicatas possíveis",
              "Nunca duplica",
              "Mágica",
              "Sem impacto"
            ],
            "correct": 0,
            "explain": "Idempotência cuida."
          }
        ]
      },
      {
        "id": "nod17",
        "title": "SRE mindset — SLI/SLO/SLA",
        "summary": "Confiabilidade como produto.",
        "content": "<p>SLI mede (latência p95). SLO é meta (p95 &lt; 300ms em 99% do mês). SLA é contrato externo.</p><h2>Aprofundando</h2><p>Error budget: se passar do SLO, pause features e foque em estabilidade.</p><p>Alertas baseados em SLO, não métricas aleatórias.</p><p>Postmortems blameless.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>SRE traduz confiabilidade em números objetivos e negociáveis.</p></div>",
        "quiz": [
          {
            "prompt": "SLO:",
            "options": [
              "Contrato",
              "Meta interna de confiabilidade",
              "Logger",
              "UI"
            ],
            "correct": 1,
            "explain": "Alvo do time."
          },
          {
            "prompt": "Error budget:",
            "options": [
              "Trivial",
              "Orçamento de downtime tolerável",
              "Opcional",
              "Para QA"
            ],
            "correct": 1,
            "explain": "Equilibra features/estabilidade."
          },
          {
            "prompt": "Postmortem:",
            "options": [
              "Culpar",
              "Blameless — aprender",
              "Punitivo",
              "Secreto"
            ],
            "correct": 1,
            "explain": "Cultura."
          }
        ]
      },
      {
        "id": "nod18",
        "title": "Trilha Node engineer",
        "summary": "De meio a principal.",
        "content": "<p>Aprofundar: system programming, design distribuído, data engineering, DevEx interno.</p><h2>Aprofundando</h2><p>Contribua para libs OSS.</p><p>Escreva sobre o que aprende.</p><p>Domine Node + uma especialidade profunda (DB/redes/distribuído).</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Ensinar solidifica — blog, talks, mentoria.</p></div>",
        "quiz": [
          {
            "prompt": "Para evoluir:",
            "options": [
              "Tutoriais",
              "OSS + escrever + ler real",
              "Cursos só",
              "YouTube só"
            ],
            "correct": 1,
            "explain": "Múltiplas saídas."
          },
          {
            "prompt": "Diferencial senior:",
            "options": [
              "JS isolado",
              "Node + DB/redes/distribuído",
              "Só front",
              "Só DB"
            ],
            "correct": 1,
            "explain": "Full picture."
          },
          {
            "prompt": "SRE:",
            "options": [
              "Irrelevante",
              "Fundamental em dev moderno",
              "Só ops",
              "Só Java"
            ],
            "correct": 1,
            "explain": "Confiabilidade é feature."
          },
          {
            "prompt": "Ensinar:",
            "options": [
              "Perda de tempo",
              "Solidifica aprendizado",
              "Só junior",
              "Só empresa"
            ],
            "correct": 1,
            "explain": "Ativo."
          }
        ]
      }
    ]
  },
  {
    "id": "typescript-avancado",
    "title": "TypeScript Avançado",
    "tagline": "Conditional types, inferência, template literals e segurança tipada em sistemas reais.",
    "description": "Sistema de tipos profundo: conditional types, infer, template literals, branded types, mapped types, variance e integração com libs modernas (zod, tRPC, NestJS).",
    "level": "Avançado",
    "duration": "10h",
    "theme": "theme-js",
    "cover": "TS+",
    "vip": true,
    "instructor": "Letícia Queiroz",
    "lessons": [
      {
        "id": "typ1",
        "title": "Infer e conditional types",
        "summary": "Extraindo tipos dentro de tipos.",
        "content": "<p>T extends U ? A : B é o ramo condicional. Dentro, infer X captura parte do tipo.</p><h2>Aprofundando</h2><p>ReturnType, Parameters, Awaited são todos conditional + infer.</p><p>Ferramenta nuclear — use com parcimônia.</p><h2>Exemplo prático</h2><pre><code>type MyReturn&lt;T&gt; = T extends (...a:any[]) =&gt; infer R ? R : never;\ntype X = MyReturn&lt;() =&gt; number&gt;; // number</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Tipos complexos podem ficar ilegíveis. Documente.</p></div>",
        "quiz": [
          {
            "prompt": "infer:",
            "options": [
              "Runtime",
              "Captura tipo em conditional",
              "JS feature",
              "Class"
            ],
            "correct": 1,
            "explain": "Só conditional types."
          },
          {
            "prompt": "ReturnType:",
            "options": [
              "Hook",
              "Utility que infere retorno",
              "CSS",
              "Build"
            ],
            "correct": 1,
            "explain": "Built-in."
          },
          {
            "prompt": "Readability:",
            "options": [
              "Nada importa",
              "Cuidado — pode ficar obscuro",
              "Sempre clara",
              "any só"
            ],
            "correct": 1,
            "explain": "Trade-off."
          }
        ]
      },
      {
        "id": "typ2",
        "title": "Mapped types",
        "summary": "Transformar todos os campos.",
        "content": "<p>Iteram keys e transformam. Utility types (Partial, Required, Readonly, Record) são todos mapped.</p><h2>Aprofundando</h2><p>Modificadores: +?, -?, +readonly, -readonly.</p><p>as renomeia keys.</p><p>Combine com conditional para filtrar.</p><h2>Exemplo prático</h2><pre><code>type ReadOnly&lt;T&gt; = { readonly [K in keyof T]: T[K] };\ntype Nullable&lt;T&gt; = { [K in keyof T]: T[K] | null };</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Mapped + conditional = 99% da type-level programming.</p></div>",
        "quiz": [
          {
            "prompt": "keyof T:",
            "options": [
              "Valor",
              "União das keys",
              "Bug",
              "Runtime"
            ],
            "correct": 1,
            "explain": "String literals."
          },
          {
            "prompt": "Modifier -?:",
            "options": [
              "Torna opcional",
              "Remove opcional",
              "Ignora",
              "Remove key"
            ],
            "correct": 1,
            "explain": "Oposto de +?."
          },
          {
            "prompt": "Partial é:",
            "options": [
              "Mapped type",
              "Class",
              "Enum",
              "Nada"
            ],
            "correct": 0,
            "explain": "Via mapped."
          }
        ]
      },
      {
        "id": "typ3",
        "title": "Template literal types",
        "summary": "Strings tipadas.",
        "content": "<p>Literal types com backticks + interpolação. Poderoso para APIs: derive eventos, rotas, keys automaticamente.</p><h2>Aprofundando</h2><p>Uppercase/Lowercase/Capitalize nativos.</p><p>Composição com union explode combinações.</p><p>Permite até parser de rotas.</p><h2>Exemplo prático</h2><pre><code>type Evento&lt;T extends string&gt; = `on${Capitalize&lt;T&gt;}`;\ntype E = Evento&lt;'click' | 'hover'&gt;; // 'onClick' | 'onHover'</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Use para estreitar APIs em tempo de compilação.</p></div>",
        "quiz": [
          {
            "prompt": "Template literal types:",
            "options": [
              "Runtime",
              "Compile-time strings tipadas",
              "JSX",
              "lit"
            ],
            "correct": 1,
            "explain": "TS feature."
          },
          {
            "prompt": "Capitalize<'x'>:",
            "options": [
              "'X'",
              "'x'",
              "never",
              "string"
            ],
            "correct": 0,
            "explain": "Primeira maiúscula."
          },
          {
            "prompt": "Com union:",
            "options": [
              "Ignora",
              "Produto cartesiano",
              "Bug",
              "Vazio"
            ],
            "correct": 1,
            "explain": "Explode."
          }
        ]
      },
      {
        "id": "typ4",
        "title": "Branded types",
        "summary": "IDs fortemente tipados.",
        "content": "<p>TS é estrutural — UserId e OrderId (ambos string) são intercambiáveis. Branded types fingem nominal typing.</p><h2>Aprofundando</h2><p>Padrão: type UserId = string & { __brand: 'UserId' }.</p><p>Zero custo runtime.</p><p>Evita classe inteira de bugs.</p><h2>Exemplo prático</h2><pre><code>type UserId = string & { __brand: 'UserId' };\nfunction userId(s: string): UserId { return s as UserId; }\nfunction findUser(id: UserId) {}</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Branded types valem ouro em domínios com muitos IDs similares.</p></div>",
        "quiz": [
          {
            "prompt": "TS é:",
            "options": [
              "Nominal",
              "Estrutural",
              "Duck runtime",
              "Híbrido"
            ],
            "correct": 1,
            "explain": "Estrutura bate."
          },
          {
            "prompt": "Branded:",
            "options": [
              "Runtime",
              "Truque zero-cost para nominal",
              "DB",
              "UI"
            ],
            "correct": 1,
            "explain": "Fantasma tag."
          },
          {
            "prompt": "Evita:",
            "options": [
              "Nada",
              "Trocar IDs por engano",
              "Runtime error",
              "CSS"
            ],
            "correct": 1,
            "explain": "Tipa domínio."
          }
        ]
      },
      {
        "id": "typ5",
        "title": "Generics com constraints",
        "summary": "Limitando o universo.",
        "content": "<p>T extends U diz 'T é subtipo de U'. Permite operar sobre partes seguras do tipo.</p><h2>Aprofundando</h2><p>K extends keyof T é clássico — acessar props dinamicamente.</p><p>Default types: <T = X>.</p><p>Constraints evitam abuso de any.</p><h2>Exemplo prático</h2><pre><code>function prop&lt;T, K extends keyof T&gt;(obj: T, k: K): T[K] {\n  return obj[k];\n}</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Constraints são o caminho entre flexibilidade e segurança.</p></div>",
        "quiz": [
          {
            "prompt": "K extends keyof T:",
            "options": [
              "Número",
              "Chave de T",
              "String",
              "Bug"
            ],
            "correct": 1,
            "explain": "Acesso seguro."
          },
          {
            "prompt": "Default types:",
            "options": [
              "Não existem",
              "<T = X>",
              "Só class",
              "Proibido"
            ],
            "correct": 1,
            "explain": "Fallback."
          },
          {
            "prompt": "Constraint elimina:",
            "options": [
              "Safety",
              "any casts descontrolados",
              "Generics",
              "Union"
            ],
            "correct": 1,
            "explain": "Safety."
          }
        ]
      },
      {
        "id": "typ6",
        "title": "Variância — covariante, contravariante",
        "summary": "Por que funções se comportam estranho.",
        "content": "<p>Parâmetros são contravariantes (aceita super-tipo), retorno covariante (sub-tipo). TS relaxa isso em alguns contextos.</p><h2>Aprofundando</h2><p>strictFunctionTypes liga checagem correta em callbacks.</p><p>Classes/interfaces ajudam declarar variance.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Entender variance evita bugs obscuros em APIs genéricas.</p></div>",
        "quiz": [
          {
            "prompt": "Param function:",
            "options": [
              "Co",
              "Contra",
              "Imutável",
              "Não checa"
            ],
            "correct": 1,
            "explain": "Super types."
          },
          {
            "prompt": "Return:",
            "options": [
              "Contra",
              "Co",
              "Nenhum",
              "Varia"
            ],
            "correct": 1,
            "explain": "Sub."
          },
          {
            "prompt": "strictFunctionTypes:",
            "options": [
              "Relaxa",
              "Liga checagem",
              "Quebra",
              "Class só"
            ],
            "correct": 1,
            "explain": "Quase sempre on."
          }
        ]
      },
      {
        "id": "typ7",
        "title": "Tipando I/O com zod",
        "summary": "Runtime + compile-time.",
        "content": "<p>TS some em runtime. Dados externos precisam de validação. Zod é schema + inferência — um único source of truth.</p><h2>Aprofundando</h2><p>z.infer deriva tipo estático.</p><p>safeParse retorna union Result.</p><p>Integra com RHF, tRPC, OpenAPI.</p><h2>Exemplo prático</h2><pre><code>const User = z.object({ id: z.number(), name: z.string() });\ntype User = z.infer&lt;typeof User&gt;;</code></pre><div class=\"callout\"><div class=\"ico\">💡</div><p>Qualquer entrada externa (API, env, file) merece validação.</p></div>",
        "quiz": [
          {
            "prompt": "z.infer:",
            "options": [
              "Runtime",
              "Deriva tipo TS do schema",
              "CSS",
              "Extra"
            ],
            "correct": 1,
            "explain": "DRY."
          },
          {
            "prompt": "safeParse:",
            "options": [
              "Throw",
              "Result discriminado",
              "Ignora",
              "Sempre ok"
            ],
            "correct": 1,
            "explain": "Control flow."
          },
          {
            "prompt": "Entrada externa:",
            "options": [
              "Confiar",
              "Validar",
              "Depende",
              "Ignorar"
            ],
            "correct": 1,
            "explain": "Sempre."
          }
        ]
      },
      {
        "id": "typ8",
        "title": "tRPC — API tipada end-to-end",
        "summary": "Sem REST, sem GraphQL.",
        "content": "<p>tRPC compartilha tipos entre server e client dentro do monorepo — sem codegen.</p><h2>Aprofundando</h2><p>Ideal para apps internos com TS em toda stack.</p><p>Procedures: query/mutation/subscription.</p><p>Middleware tipado.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Se cliente e servidor são TS, tRPC elimina classe de bugs de contrato.</p></div>",
        "quiz": [
          {
            "prompt": "tRPC precisa:",
            "options": [
              "Codegen",
              "Nada — tipos TS diretos",
              "Protobuf",
              "GraphQL"
            ],
            "correct": 1,
            "explain": "Direto."
          },
          {
            "prompt": "Bom para:",
            "options": [
              "REST público",
              "Apps TS end-to-end",
              "REST só",
              "Legacy"
            ],
            "correct": 1,
            "explain": "Same-stack."
          },
          {
            "prompt": "Procedure:",
            "options": [
              "Query/Mutation/Subscription",
              "Só GET",
              "Só POST",
              "Só WS"
            ],
            "correct": 0,
            "explain": "Três tipos."
          }
        ]
      },
      {
        "id": "typ9",
        "title": "Decorators",
        "summary": "OO avançado em TS.",
        "content": "<p>Decorators oficiais (Stage 3) agora suportados. Popular em NestJS, TypeORM.</p><h2>Aprofundando</h2><p>Anotam classes/métodos/props com lógica cross-cutting.</p><p>Reflect metadata permite introspection.</p><p>Escondem comportamento — use com cuidado.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Decoradores resolvem cross-cutting elegantemente, mas escondem fluxo.</p></div>",
        "quiz": [
          {
            "prompt": "Decorator:",
            "options": [
              "Runtime meta",
              "Função que anota declaração",
              "Class só",
              "CSS"
            ],
            "correct": 1,
            "explain": "Modifica."
          },
          {
            "prompt": "NestJS:",
            "options": [
              "JSX",
              "Decorators como base",
              "HTML",
              "Ninguém"
            ],
            "correct": 1,
            "explain": "Essencial."
          },
          {
            "prompt": "Runtime:",
            "options": [
              "Só tipos",
              "Decorators rodam em runtime",
              "Só compile",
              "Ignorado"
            ],
            "correct": 1,
            "explain": "Ambos."
          }
        ]
      },
      {
        "id": "typ10",
        "title": "Lint rules para TS de elite",
        "summary": "typescript-eslint com regras que importam.",
        "content": "<p>Além do padrão: no-explicit-any, consistent-type-imports, prefer-nullish-coalescing, import ordering.</p><h2>Aprofundando</h2><p>Custom rules para padrões internos.</p><p>CI falha quando lint quebra.</p><p>Centralize configs em preset.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Lint consistente > decisões ad-hoc por PR. Automatize opiniões.</p></div>",
        "quiz": [
          {
            "prompt": "typescript-eslint:",
            "options": [
              "Lint geral",
              "Plugin ESLint para TS",
              "TS strict",
              "Ignorar"
            ],
            "correct": 1,
            "explain": "TS-aware."
          },
          {
            "prompt": "no-explicit-any:",
            "options": [
              "Permite any",
              "Proíbe any explícito",
              "Silent",
              "Nada"
            ],
            "correct": 1,
            "explain": "Força segurança."
          },
          {
            "prompt": "Custom rules:",
            "options": [
              "Impossíveis",
              "Aplicam padrões internos",
              "Via Prettier só",
              "Frágeis"
            ],
            "correct": 1,
            "explain": "Valem ouro."
          }
        ]
      },
      {
        "id": "typ11",
        "title": "Performance de compilação",
        "summary": "Quando tsc demora minutos.",
        "content": "<p>Projetos grandes sofrem: tipos profundos, generics encadeados explodem checagem.</p><h2>Aprofundando</h2><p>tsc --extendedDiagnostics mostra onde gasta.</p><p>Projects (references) dividem compilação.</p><p>Evite type gymnastics em hot path.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Type perf é eixo real em apps grandes. Medir é a chave.</p></div>",
        "quiz": [
          {
            "prompt": "Monorepo grande:",
            "options": [
              "tsc rápido",
              "Pode ficar lento; projects ajudam",
              "Impossível",
              "Sem solução"
            ],
            "correct": 1,
            "explain": "Incremental."
          },
          {
            "prompt": "extendedDiagnostics:",
            "options": [
              "Menos info",
              "Onde tsc gasta tempo",
              "Desabilita strict",
              "Nenhum"
            ],
            "correct": 1,
            "explain": "Debug perf."
          },
          {
            "prompt": "Type gymnastics:",
            "options": [
              "Sempre",
              "Com moderação",
              "Impossível",
              "Lib só"
            ],
            "correct": 1,
            "explain": "Custa."
          }
        ]
      },
      {
        "id": "typ12",
        "title": "Construindo libs TS",
        "summary": "dts, peer deps, exports.",
        "content": "<p>Publicar lib TS exige .d.ts, exports field moderno, dual ESM/CJS quando faz sentido.</p><h2>Aprofundando</h2><p>tsup/unbuild/tshy simplificam bundling.</p><p>Evite shipar source TS.</p><p>peerDependencies corretas.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Teste como consumidor real antes de npm publish.</p></div>",
        "quiz": [
          {
            "prompt": ".d.ts:",
            "options": [
              "Runtime",
              "Declaração de tipos",
              "HTML",
              "Bug"
            ],
            "correct": 1,
            "explain": "Autocomplete."
          },
          {
            "prompt": "Dual ESM/CJS:",
            "options": [
              "Legacy",
              "Ambos formatos",
              "ESM só",
              "CJS só"
            ],
            "correct": 1,
            "explain": "Compat."
          },
          {
            "prompt": "peerDeps:",
            "options": [
              "Instala junto",
              "Consumidor fornece",
              "Ignora",
              "Nenhum"
            ],
            "correct": 1,
            "explain": "Evita duplicatas."
          }
        ]
      },
      {
        "id": "typ13",
        "title": "Refatorando JS legado",
        "summary": "Strict sem big bang.",
        "content": "<p>Passos: allowJs+checkJs, renomear .ts, noImplicitAny, strict em grupos, codemods.</p><h2>Aprofundando</h2><p>ts-migrate (Airbnb) e jscodeshift automatizam.</p><p>Priorize código de negócio.</p><p>@ts-ignore vira ticket.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Migração tem custo mas economiza em bugs futuros.</p></div>",
        "quiz": [
          {
            "prompt": "ts-migrate:",
            "options": [
              "DB",
              "Automatiza migração JS→TS",
              "Linter",
              "Backup"
            ],
            "correct": 1,
            "explain": "Airbnb."
          },
          {
            "prompt": "strict de uma vez:",
            "options": [
              "Fácil",
              "Big bang — alto custo",
              "Silent",
              "Sempre"
            ],
            "correct": 1,
            "explain": "Passo a passo."
          },
          {
            "prompt": "@ts-ignore:",
            "options": [
              "Permanente OK",
              "Tem custo",
              "Impossível",
              "Sem impacto"
            ],
            "correct": 1,
            "explain": "Dívida."
          }
        ]
      },
      {
        "id": "typ14",
        "title": "Testando tipos",
        "summary": "tsd, expect-type.",
        "content": "<p>Tipos são lógica — libs podem testar tipos como testam código.</p><h2>Aprofundando</h2><p>tsd e expect-type fazem asserções em tipos.</p><p>Integra com CI.</p><p>Ótimo para libs de tipos complexos.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Teste de tipos = contrato fiel da API.</p></div>",
        "quiz": [
          {
            "prompt": "tsd:",
            "options": [
              "Runtime test",
              "Testa assinaturas de tipo",
              "CSS",
              "Runner"
            ],
            "correct": 1,
            "explain": "Type tests."
          },
          {
            "prompt": "expect-type:",
            "options": [
              "Assertions em valores",
              "Em tipos",
              "UI",
              "Bug"
            ],
            "correct": 1,
            "explain": "Type-only."
          },
          {
            "prompt": "Test de tipo:",
            "options": [
              "Inútil",
              "Protege consumidores",
              "Runtime",
              "Dev só"
            ],
            "correct": 1,
            "explain": "Regressões."
          }
        ]
      },
      {
        "id": "typ15",
        "title": "Utility types avançados",
        "summary": "Deriva tudo do tipo-fonte.",
        "content": "<p>Padrões: DeepPartial, DeepReadonly, NonNullable, ConstructorParameters, Merge.</p><h2>Aprofundando</h2><p>type-fest traz dezenas prontos.</p><p>Crie suas próprias conforme padrões do time.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Muitas vezes o tipo perfeito existe se combinar os utilities certos.</p></div>",
        "quiz": [
          {
            "prompt": "type-fest:",
            "options": [
              "Runtime lib",
              "Coleção de utility types",
              "Builder",
              "Lint"
            ],
            "correct": 1,
            "explain": "Referência."
          },
          {
            "prompt": "DeepPartial:",
            "options": [
              "Top-level",
              "Recursivo",
              "No-op",
              "Reverso"
            ],
            "correct": 1,
            "explain": "Todo nível opcional."
          },
          {
            "prompt": "NonNullable:",
            "options": [
              "Adiciona null",
              "Remove null/undefined",
              "Ignora",
              "Runtime check"
            ],
            "correct": 1,
            "explain": "Exclude."
          }
        ]
      },
      {
        "id": "typ16",
        "title": "Edge cases do TS",
        "summary": "Armadilhas que pegam devs bons.",
        "content": "<p>Excess property check, narrowing perdido em funções, as const vs mutable, intersections que viram never.</p><h2>Aprofundando</h2><p>Leia erros com atenção.</p><p>Playground para reproduzir.</p><p>Issues do TS são ouro em casos obscuros.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>O sistema de tipos tem sutilezas — dominá-las leva tempo.</p></div>",
        "quiz": [
          {
            "prompt": "as const:",
            "options": [
              "Mutable literal",
              "Readonly literal estreito",
              "Runtime só",
              "Nada"
            ],
            "correct": 1,
            "explain": "Literal inference."
          },
          {
            "prompt": "Excess property check:",
            "options": [
              "Sempre",
              "Object literais passando",
              "Desligado",
              "Bug"
            ],
            "correct": 1,
            "explain": "Específico."
          },
          {
            "prompt": "{} extends T:",
            "options": [
              "true sempre",
              "Quase nunca o esperado",
              "False",
              "Erro"
            ],
            "correct": 1,
            "explain": "Counterintuitivo."
          }
        ]
      },
      {
        "id": "typ17",
        "title": "Integração com ecossistema",
        "summary": "ESLint, Prettier, tsc, tools.",
        "content": "<p>Consistência: ESLint aplica regras, Prettier formata, tsc valida. Husky no pre-commit.</p><h2>Aprofundando</h2><p>Path aliases exigem sync entre tsconfig e bundler.</p><p>Configs em preset reutilizável.</p><p>CI obrigatório com tsc + lint + test.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Integração bem feita = onboarding rápido.</p></div>",
        "quiz": [
          {
            "prompt": "tsc + lint + test:",
            "options": [
              "Sozinhos",
              "Integrados no CI",
              "Irrelevante",
              "Local só"
            ],
            "correct": 1,
            "explain": "Camadas."
          },
          {
            "prompt": "Path aliases:",
            "options": [
              "Grátis",
              "Requerem sync tsconfig/bundler",
              "TS só",
              "Vite só"
            ],
            "correct": 1,
            "explain": "Configuração."
          },
          {
            "prompt": "Config preset:",
            "options": [
              "Duplicar",
              "Centralizar reusável",
              "Opcional",
              "NPM só"
            ],
            "correct": 1,
            "explain": "Reuso."
          }
        ]
      },
      {
        "id": "typ18",
        "title": "Trilha TS engineer",
        "summary": "O que estudar depois.",
        "content": "<p>Estude o TS compiler, contribua, aprenda outras linguagens de tipos fortes (Rust, Scala, Haskell).</p><h2>Aprofundando</h2><p>Matt Pocock / Total TypeScript.</p><p>Type Challenges.</p><p>Acompanhe novas features (5.x).</p><div class=\"callout\"><div class=\"ico\">💡</div><p>TS evolui rápido — acompanhar é parte do ofício.</p></div>",
        "quiz": [
          {
            "prompt": "Type Challenges:",
            "options": [
              "Inúteis",
              "Ótimos para treinar",
              "Só jr",
              "Desafio UI"
            ],
            "correct": 1,
            "explain": "Gym."
          },
          {
            "prompt": "Matt Pocock:",
            "options": [
              "Random",
              "Referência em TS",
              "Product",
              "Designer"
            ],
            "correct": 1,
            "explain": "Recomendado."
          },
          {
            "prompt": "Evolução TS:",
            "options": [
              "Parou",
              "Novas features cada versão",
              "Fechar olhos",
              "Só major"
            ],
            "correct": 1,
            "explain": "Mudança constante."
          },
          {
            "prompt": "Outras linguagens:",
            "options": [
              "Inúteis",
              "Ampliam vocabulário",
              "TS só basta",
              "JS só basta"
            ],
            "correct": 1,
            "explain": "Perspectivas."
          }
        ]
      }
    ]
  },
  {
    "id": "devops-avancado",
    "title": "DevOps Profissional",
    "tagline": "Kubernetes, GitOps, IaC, observabilidade e arquitetura cloud-native.",
    "description": "Aprofunda Kubernetes, IaC (Terraform/Pulumi), GitOps (ArgoCD/Flux), observabilidade, segurança de infra, multi-região e FinOps.",
    "level": "Avançado",
    "duration": "14h",
    "theme": "theme-py",
    "cover": "DevOps+",
    "vip": true,
    "instructor": "Vitor Gomes",
    "lessons": [
      {
        "id": "dev1",
        "title": "Kubernetes — conceitos centrais",
        "summary": "Pods, Deployments, Services, Ingress.",
        "content": "<p>K8s orquestra containers. Unidade: Pod (1+ containers). Deployment gerencia réplicas. Service expõe Pods. Ingress roteia HTTP.</p><h2>Aprofundando</h2><p>Entender declaratividade é chave — você declara estado desejado; control plane converge.</p><p>ConfigMap/Secret gerenciam config. Namespace separa recursos.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>kubectl é só cliente. O poder está no control plane.</p></div>",
        "quiz": [
          {
            "prompt": "Pod:",
            "options": [
              "VM",
              "Unidade mínima (1+ containers)",
              "Host",
              "Classe"
            ],
            "correct": 1,
            "explain": "Abstração."
          },
          {
            "prompt": "Deployment:",
            "options": [
              "Pod único",
              "Réplicas com rolling",
              "Ingress",
              "CRD"
            ],
            "correct": 1,
            "explain": "Declarativo."
          },
          {
            "prompt": "Service:",
            "options": [
              "IP público",
              "Abstração estável sobre Pods",
              "DNS externo",
              "Certificado"
            ],
            "correct": 1,
            "explain": "Load balance interno."
          }
        ]
      },
      {
        "id": "dev2",
        "title": "ConfigMaps, Secrets, Resources",
        "summary": "Config fora do código.",
        "content": "<p>ConfigMap: config não sensível. Secret: base64 (não criptografia real). Requests/limits de CPU/RAM protegem vizinhança.</p><h2>Aprofundando</h2><p>External Secrets Operator sincroniza vaults.</p><p>Limits evitam OOM; requests reservam capacidade.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Nunca commite Secret real. Use SealedSecrets ou External Secrets.</p></div>",
        "quiz": [
          {
            "prompt": "Secret é:",
            "options": [
              "Criptografado em repouso default",
              "Base64, precisa proteção extra",
              "Aleatório",
              "Texto"
            ],
            "correct": 1,
            "explain": "Mítico."
          },
          {
            "prompt": "CPU request:",
            "options": [
              "Limite absoluto",
              "Garantido para pod",
              "Sem efeito",
              "Só monitor"
            ],
            "correct": 1,
            "explain": "Reserva."
          },
          {
            "prompt": "Limit atingido:",
            "options": [
              "Nada",
              "CPU throttling / OOM kill",
              "Bug",
              "Reinicia sempre"
            ],
            "correct": 1,
            "explain": "Contenção."
          }
        ]
      },
      {
        "id": "dev3",
        "title": "Helm e Kustomize",
        "summary": "Empacotando apps para K8s.",
        "content": "<p>Helm: charts + templates para apps parametrizáveis. Kustomize: patches declarativos sobre manifestos base.</p><h2>Aprofundando</h2><p>Helm repos públicos aceleram stack comum.</p><p>Kustomize built-in em kubectl.</p><p>Ambos convivem.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Charts oficiais nem sempre seguem boas práticas — revise antes de prod.</p></div>",
        "quiz": [
          {
            "prompt": "Helm:",
            "options": [
              "Service mesh",
              "Package manager K8s",
              "CNI",
              "CI"
            ],
            "correct": 1,
            "explain": "Charts + releases."
          },
          {
            "prompt": "Kustomize:",
            "options": [
              "Template engine",
              "Overlay sobre manifestos",
              "Backup",
              "Linter"
            ],
            "correct": 1,
            "explain": "Patches."
          },
          {
            "prompt": "Charts oficiais:",
            "options": [
              "Perfeitos",
              "Revisar antes de prod",
              "Irrelevantes",
              "Deletar"
            ],
            "correct": 1,
            "explain": "Qualidade varia."
          }
        ]
      },
      {
        "id": "dev4",
        "title": "Ingress e service mesh",
        "summary": "Roteamento e tráfego interno.",
        "content": "<p>Ingress controller (NGINX, Traefik) expõe HTTP. Service mesh (Istio, Linkerd) gerencia tráfego inter-serviço.</p><h2>Aprofundando</h2><p>TLS automático via cert-manager.</p><p>Canary e traffic split com service mesh.</p><p>Em apps pequenos, service mesh é overhead.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Não use service mesh antes de precisar. É engrenagem cara.</p></div>",
        "quiz": [
          {
            "prompt": "Ingress:",
            "options": [
              "HTTP externo",
              "DNS",
              "Backup",
              "SSL só"
            ],
            "correct": 0,
            "explain": "L7 entrada."
          },
          {
            "prompt": "Service mesh:",
            "options": [
              "Rede física",
              "Controle inter-serviço",
              "Deploy",
              "CI"
            ],
            "correct": 1,
            "explain": "mTLS, retries."
          },
          {
            "prompt": "cert-manager:",
            "options": [
              "CSS",
              "Gera/renova TLS",
              "Deploy",
              "Cache"
            ],
            "correct": 1,
            "explain": "Let's Encrypt auto."
          }
        ]
      },
      {
        "id": "dev5",
        "title": "GitOps com ArgoCD/Flux",
        "summary": "Git como source of truth.",
        "content": "<p>Estado desejado em Git. Ferramenta reconcilia continuamente. Deploy = merge.</p><h2>Aprofundando</h2><p>Audit trail, rollback = revert, multi-cluster fácil.</p><p>Separe config por env.</p><p>ArgoCD tem UI rica.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>GitOps é a prática mais mudadora de jogo em ops moderno.</p></div>",
        "quiz": [
          {
            "prompt": "GitOps:",
            "options": [
              "CI/CD sem git",
              "Git é source of truth",
              "CD manual",
              "Só secrets"
            ],
            "correct": 1,
            "explain": "Declarativo + pull."
          },
          {
            "prompt": "Rollback:",
            "options": [
              "Impossível",
              "git revert",
              "Deploy manual só",
              "UI banco"
            ],
            "correct": 1,
            "explain": "Trivial."
          },
          {
            "prompt": "ArgoCD:",
            "options": [
              "CI",
              "Reconcilia repo↔cluster",
              "DB",
              "UI React"
            ],
            "correct": 1,
            "explain": "GitOps popular."
          }
        ]
      },
      {
        "id": "dev6",
        "title": "Terraform avançado",
        "summary": "Modules, workspaces, state remoto.",
        "content": "<p>State remoto (S3+Dynamo, TF Cloud) permite time. Modules = infra reutilizável. Workspaces = envs.</p><h2>Aprofundando</h2><p>tflint, tfsec, Checkov para segurança.</p><p>Plan em CI como gate antes do apply.</p><p>Import para recursos pré-existentes.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>TF é idempotente se você não foge do modelo. Cuidado com scripts externos.</p></div>",
        "quiz": [
          {
            "prompt": "State remoto:",
            "options": [
              "Local só",
              "Time + lock",
              "Inseguro",
              "Inútil"
            ],
            "correct": 1,
            "explain": "Padrão."
          },
          {
            "prompt": "Modules:",
            "options": [
              "Pastas random",
              "Unidades reutilizáveis",
              "Pipeline",
              "Secret"
            ],
            "correct": 1,
            "explain": "Abstração."
          },
          {
            "prompt": "tfsec:",
            "options": [
              "DB",
              "Scan de segurança TF",
              "Lint syntax",
              "Deploy"
            ],
            "correct": 1,
            "explain": "Security."
          }
        ]
      },
      {
        "id": "dev7",
        "title": "Pulumi — IaC com linguagens reais",
        "summary": "Alternativa ao HCL.",
        "content": "<p>Usa TS/Python/Go/C# para IaC. Loops, classes, testes unitários em infra.</p><h2>Aprofundando</h2><p>Perfeito para times com linguagem forte.</p><p>Inputs e Outputs são core.</p><p>Pode importar TF state.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>HCL vs linguagem real — ambas funcionam em escala.</p></div>",
        "quiz": [
          {
            "prompt": "Pulumi:",
            "options": [
              "HCL obrigatório",
              "IaC em linguagem geral",
              "CI",
              "Cache"
            ],
            "correct": 1,
            "explain": "Real languages."
          },
          {
            "prompt": "Outputs:",
            "options": [
              "Nada",
              "Só após apply",
              "Sinônimo vars",
              "String sempre"
            ],
            "correct": 1,
            "explain": "Async."
          },
          {
            "prompt": "Importar TF:",
            "options": [
              "Impossível",
              "Suportado",
              "Manual só",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Migração."
          }
        ]
      },
      {
        "id": "dev8",
        "title": "Observabilidade madura",
        "summary": "Prometheus, Grafana, Loki, Tempo.",
        "content": "<p>Stack open source: Prometheus (métricas), Grafana (dashboards), Loki (logs), Tempo/Jaeger (traces), Sentry (erros).</p><h2>Aprofundando</h2><p>Correlate trace id.</p><p>Alertas acionáveis, não ruído.</p><p>SLO dashboards por serviço.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Observabilidade é feature — não adicione depois.</p></div>",
        "quiz": [
          {
            "prompt": "Prometheus:",
            "options": [
              "Logs",
              "Métricas time-series (pull)",
              "Trace",
              "Secret"
            ],
            "correct": 1,
            "explain": "Pull-based."
          },
          {
            "prompt": "Grafana:",
            "options": [
              "DB",
              "Dashboard/alertas",
              "Collector",
              "ML"
            ],
            "correct": 1,
            "explain": "Frontend."
          },
          {
            "prompt": "Tempo:",
            "options": [
              "Log",
              "Traces distribuídos",
              "Alerta",
              "Backup"
            ],
            "correct": 1,
            "explain": "Distributed tracing."
          }
        ]
      },
      {
        "id": "dev9",
        "title": "Security — imagem, pipeline, runtime",
        "summary": "Scan, SBOM, policies.",
        "content": "<p>Trivy escaneia imagens. SBOM lista componentes. OPA/Kyverno impõem policies. Falco detecta anomalias runtime.</p><h2>Aprofundando</h2><p>Assine imagens (cosign).</p><p>Zero-trust defaults.</p><p>Segurança como código.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Pipeline seguro + runtime monitorado = defesa em camadas.</p></div>",
        "quiz": [
          {
            "prompt": "Trivy:",
            "options": [
              "Orquestrador",
              "Scanner de vulnerabilidades",
              "DB",
              "Cron"
            ],
            "correct": 1,
            "explain": "Popular."
          },
          {
            "prompt": "Kyverno/OPA:",
            "options": [
              "Deploy",
              "Policy engine K8s",
              "CDN",
              "CI"
            ],
            "correct": 1,
            "explain": "Governança."
          },
          {
            "prompt": "Falco:",
            "options": [
              "CDN",
              "Detecta runtime anômalo",
              "CI",
              "Backup"
            ],
            "correct": 1,
            "explain": "eBPF."
          }
        ]
      },
      {
        "id": "dev10",
        "title": "Networking cloud-native",
        "summary": "VPC, NAT, LB.",
        "content": "<p>VPC isola, subnets públicas/privadas, NAT para egress, peering entre VPCs, VPN para on-prem.</p><h2>Aprofundando</h2><p>Nunca DB em subnet pública.</p><p>Egress control em prod.</p><p>Private endpoints para serviços internos.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Networking é o tropeço clássico em cloud. Tire tempo para aprender.</p></div>",
        "quiz": [
          {
            "prompt": "VPC:",
            "options": [
              "DNS",
              "Rede virtual isolada",
              "Identidade",
              "Secret"
            ],
            "correct": 1,
            "explain": "Rede privada."
          },
          {
            "prompt": "DB subnet pública:",
            "options": [
              "OK",
              "Nunca em prod",
              "Obrigatório",
              "IPv6 só"
            ],
            "correct": 1,
            "explain": "Exposição."
          },
          {
            "prompt": "NAT gateway:",
            "options": [
              "Entrada",
              "Saída segura de privadas",
              "Balance",
              "Secret"
            ],
            "correct": 1,
            "explain": "Egress."
          }
        ]
      },
      {
        "id": "dev11",
        "title": "FinOps — custo em cloud",
        "summary": "Cloud barato é mito.",
        "content": "<p>Sem governança, bills explodem. Tagging, budgets, alertas, reserved/savings plans.</p><h2>Aprofundando</h2><p>Rightsizing, delete idle.</p><p>Spot/preemptible para batch.</p><p>S3 lifecycle para tiers mais baratos.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Custo cloud é feature. Não esqueça.</p></div>",
        "quiz": [
          {
            "prompt": "Spot:",
            "options": [
              "Premium",
              "Bem mais barato, revocável",
              "Sem uso",
              "IPv6 só"
            ],
            "correct": 1,
            "explain": "Descontos altos."
          },
          {
            "prompt": "S3 lifecycle:",
            "options": [
              "Delete manual",
              "Move automático para tiers baratos",
              "Backup só",
              "CDN"
            ],
            "correct": 1,
            "explain": "Economia."
          },
          {
            "prompt": "FinOps:",
            "options": [
              "Finance só",
              "Integra finance + ops",
              "Eng só",
              "CEO só"
            ],
            "correct": 1,
            "explain": "Cross-functional."
          }
        ]
      },
      {
        "id": "dev12",
        "title": "Multi-região e DR",
        "summary": "Quando uma região cai.",
        "content": "<p>HA exige multi-AZ. Multi-região eleva — caro, complexo, necessário em SaaS críticos.</p><h2>Aprofundando</h2><p>Estratégias: active-passive, active-active.</p><p>RPO/RTO guiam investimento.</p><p>Failover testado, não só documentado.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Multi-região custa. Garanta que a dor justifica.</p></div>",
        "quiz": [
          {
            "prompt": "RTO:",
            "options": [
              "Perda de dados",
              "Tempo de recuperação",
              "Aleatório",
              "Cache"
            ],
            "correct": 1,
            "explain": "Recovery Time."
          },
          {
            "prompt": "Active-active:",
            "options": [
              "Um atende outro espera",
              "Ambos atendem, mais complexo",
              "Zero-trust",
              "Backup"
            ],
            "correct": 1,
            "explain": "Complexidade maior."
          },
          {
            "prompt": "Failover:",
            "options": [
              "Teoria só",
              "Testar é obrigatório",
              "Automático sempre",
              "On-prem só"
            ],
            "correct": 1,
            "explain": "Teste de fogo."
          }
        ]
      },
      {
        "id": "dev13",
        "title": "Edge computing",
        "summary": "Compute perto do usuário.",
        "content": "<p>CDN cacheia estáticos. Edge compute (Workers, Vercel Edge) roda código na borda — latência &lt;50ms quase global.</p><h2>Aprofundando</h2><p>V8 isolates não são Node — APIs faltam.</p><p>Cache strategies: static, stale-while-revalidate.</p><p>Não coloque lógica pesada na edge.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Edge amplia UX global. Use para rotas rápidas ou geo-aware.</p></div>",
        "quiz": [
          {
            "prompt": "V8 isolates:",
            "options": [
              "Node clone",
              "Runtime limitado, sem Node APIs",
              "Chrome só",
              "Sem uso"
            ],
            "correct": 1,
            "explain": "Sandbox."
          },
          {
            "prompt": "CDN cacheia:",
            "options": [
              "Sempre tudo",
              "Configurável",
              "Imagens só",
              "DNS só"
            ],
            "correct": 1,
            "explain": "Config."
          },
          {
            "prompt": "Edge compute:",
            "options": [
              "Rápido sempre",
              "Menos latência global",
              "AWS só",
              "DB completo"
            ],
            "correct": 1,
            "explain": "Geográfico."
          }
        ]
      },
      {
        "id": "dev14",
        "title": "Platform Engineering — IDPs",
        "summary": "Dev deve ter plataforma interna.",
        "content": "<p>Internal Developer Platform abstrai infra para devs. Backstage é o framework popular.</p><h2>Aprofundando</h2><p>Self-service + guardrails.</p><p>Scorecards para padrões.</p><p>Reduce cognitive load.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Platform Engineering é a evolução natural de DevOps em empresas maduras.</p></div>",
        "quiz": [
          {
            "prompt": "Backstage:",
            "options": [
              "Lib",
              "Portal IDP OSS (Spotify)",
              "CI",
              "DB"
            ],
            "correct": 1,
            "explain": "Catálogo + scaffolding."
          },
          {
            "prompt": "IDP serve:",
            "options": [
              "Designer",
              "Dev self-service com guardrails",
              "QA",
              "CEO"
            ],
            "correct": 1,
            "explain": "DevEx."
          },
          {
            "prompt": "Self-service:",
            "options": [
              "Sem ops",
              "Dev escolhe em guardrails",
              "Sem gov",
              "Caos"
            ],
            "correct": 1,
            "explain": "Limites."
          }
        ]
      },
      {
        "id": "dev15",
        "title": "Supply chain security",
        "summary": "SolarWinds, Log4shell.",
        "content": "<p>Defesa: SBOM, assinatura (cosign/sigstore), SLSA framework, verificações em CI.</p><h2>Aprofundando</h2><p>Dependabot/Renovate atualizam.</p><p>SLSA níveis 1-4.</p><p>Pipelines hermetic.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Uma dep compromete tudo depois. Cheque a cadeia toda.</p></div>",
        "quiz": [
          {
            "prompt": "SLSA:",
            "options": [
              "Libs",
              "Framework supply chain",
              "DB",
              "UI"
            ],
            "correct": 1,
            "explain": "Níveis."
          },
          {
            "prompt": "cosign:",
            "options": [
              "CSS",
              "Assinatura de artefatos",
              "Deploy",
              "Log"
            ],
            "correct": 1,
            "explain": "Sigstore."
          },
          {
            "prompt": "SBOM:",
            "options": [
              "Lista de componentes",
              "Shell",
              "Backup",
              "UI"
            ],
            "correct": 0,
            "explain": "Ingrediente."
          }
        ]
      },
      {
        "id": "dev16",
        "title": "DataOps",
        "summary": "ETL moderno.",
        "content": "<p>ELT com warehouse. Extract+Load, Transform com dbt. Airflow/Dagster orquestra.</p><h2>Aprofundando</h2><p>Schema evolution real.</p><p>DQ (Great Expectations).</p><p>Streaming: Kafka + Flink.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Dados são produto. Cuide como um.</p></div>",
        "quiz": [
          {
            "prompt": "dbt:",
            "options": [
              "Banco",
              "SQL transformation em warehouse",
              "Orquestrador",
              "CDN"
            ],
            "correct": 1,
            "explain": "Modelagem."
          },
          {
            "prompt": "Airflow/Dagster:",
            "options": [
              "Iguais",
              "Orquestradores; Dagster foco em dados",
              "Kafka",
              "Redis"
            ],
            "correct": 1,
            "explain": "Ambos populares."
          },
          {
            "prompt": "ELT vs ETL:",
            "options": [
              "ETL moderno",
              "ELT moderno: load raw, transforma no WH",
              "Sinônimos",
              "MLOps só"
            ],
            "correct": 1,
            "explain": "Tendência."
          }
        ]
      },
      {
        "id": "dev17",
        "title": "Reliability engineering",
        "summary": "Tornar o serviço boring.",
        "content": "<p>Canary, feature flags, circuit breakers, bulkheads, timeouts. Game days testam reação.</p><h2>Aprofundando</h2><p>Chaos Engineering valida resiliência.</p><p>Timeouts em todas chamadas externas.</p><p>Bulkheads isolam falhas.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Boring is good. Surpresas em prod são ruim.</p></div>",
        "quiz": [
          {
            "prompt": "Circuit breaker:",
            "options": [
              "Só BR",
              "Pausa calls a serviço doente",
              "UI só",
              "Test só"
            ],
            "correct": 1,
            "explain": "Evita cascading."
          },
          {
            "prompt": "Chaos eng:",
            "options": [
              "Crash aleatório",
              "Experimentos para resiliência",
              "Bugs",
              "CSS"
            ],
            "correct": 1,
            "explain": "Hypothesis."
          },
          {
            "prompt": "Game day:",
            "options": [
              "Feriado",
              "Exercício deliberado de incidente",
              "Release",
              "QA"
            ],
            "correct": 1,
            "explain": "Preparação."
          }
        ]
      },
      {
        "id": "dev18",
        "title": "Trilha DevOps/Platform engineer",
        "summary": "Certificações e especialização.",
        "content": "<p>CKA, CKAD, CKS (K8s), AWS SAA/SAP, GCP CE, TF Associate. Especialize-se.</p><h2>Aprofundando</h2><p>CNCF, KubeCon, DevOpsDays.</p><p>Portfolio: labs públicos no GitHub.</p><p>Blog sobre incidentes reais atrai oportunidades.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Ops e dev são uma coisa só em times modernos.</p></div>",
        "quiz": [
          {
            "prompt": "CKA:",
            "options": [
              "DB cert",
              "K8s administrator",
              "Rust",
              "AWS só"
            ],
            "correct": 1,
            "explain": "Kubernetes."
          },
          {
            "prompt": "CNCF:",
            "options": [
              "Bitcoin",
              "Cloud Native Computing Foundation",
              "Linux só",
              "Empresa"
            ],
            "correct": 1,
            "explain": "K8s home."
          },
          {
            "prompt": "Platform engineer:",
            "options": [
              "Inexistente",
              "Papel em alta",
              "Legacy",
              "Senior só"
            ],
            "correct": 1,
            "explain": "Crescente."
          },
          {
            "prompt": "Blog incidentes:",
            "options": [
              "Perigoso",
              "Ouro — ensina e atrai",
              "Confidencial sempre",
              "Interno só"
            ],
            "correct": 1,
            "explain": "Postmortems públicos."
          }
        ]
      }
    ]
  },
  {
    "id": "seguranca-web-avancada",
    "title": "Segurança Web Avançada",
    "tagline": "Pentest prático, OWASP profundo, bug bounty e arquitetura zero-trust.",
    "description": "Do básico do OWASP para prática real: exploração de vulnerabilidades, CTFs, bug bounty ético, threat modeling, defesa em profundidade e zero-trust.",
    "level": "Avançado",
    "duration": "13h",
    "theme": "theme-js",
    "cover": "🔒+",
    "vip": true,
    "instructor": "Diego Martins",
    "lessons": [
      {
        "id": "seg1",
        "title": "Reconhecimento",
        "summary": "Primeiro passo do atacante.",
        "content": "<p>Recon levanta alvo: subdomínios, tech stack, endpoints. Ferramentas: subfinder, amass, httpx, nuclei.</p><h2>Aprofundando</h2><p>Shodan/Censys mostram serviços expostos.</p><p>Arquivos .git/.env expostos são clássicos.</p><p>Defesa: reduzir superfície pública.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>O que você não sabe que tem exposto é o que vai te machucar.</p></div>",
        "quiz": [
          {
            "prompt": "Recon é:",
            "options": [
              "Exploração",
              "Levantamento do alvo",
              "DoS",
              "SQLi"
            ],
            "correct": 1,
            "explain": "Fase inicial."
          },
          {
            "prompt": "Shodan:",
            "options": [
              "Buscador Google",
              "Search engine de serviços expostos",
              "Lib",
              "CDN"
            ],
            "correct": 1,
            "explain": "IoT/serviços."
          },
          {
            "prompt": ".git exposto:",
            "options": [
              "OK",
              "Grave — histórico completo",
              "Lento",
              "Imagem só"
            ],
            "correct": 1,
            "explain": "Dumpster diving."
          }
        ]
      },
      {
        "id": "seg2",
        "title": "XSS avançado",
        "summary": "Além do alert('xss').",
        "content": "<p>XSS: reflected, stored, DOM-based, blind. Payloads modernos exfiltram cookies e chaves via fetch.</p><h2>Aprofundando</h2><p>Defesa: escape contextual, CSP restritiva, Trusted Types.</p><p>DOM XSS via location.hash, postMessage.</p><p>CSP com nonce é defesa efetiva.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>CSP com nonce é o único CSP eficaz contra XSS inline.</p></div>",
        "quiz": [
          {
            "prompt": "XSS stored:",
            "options": [
              "URL só",
              "Persiste no server",
              "GET só",
              "CSS"
            ],
            "correct": 1,
            "explain": "Mais perigoso."
          },
          {
            "prompt": "DOM XSS:",
            "options": [
              "Server",
              "Só no JS do cliente",
              "DB",
              "Não existe"
            ],
            "correct": 1,
            "explain": "Client."
          },
          {
            "prompt": "CSP nonce:",
            "options": [
              "Obsoleto",
              "Melhor defesa contra inline",
              "Ignorado",
              "IE só"
            ],
            "correct": 1,
            "explain": "Cada render novo."
          }
        ]
      },
      {
        "id": "seg3",
        "title": "CSRF e SameSite",
        "summary": "Casos avançados.",
        "content": "<p>SameSite=Lax protege muitos GETs mutating. POST formulário ainda vaza. JSON API + CORS quebra CSRF simples.</p><h2>Aprofundando</h2><p>SameSite=Strict pode bloquear UX cross-site.</p><p>CSRF tokens em forms clássicos.</p><p>Endpoints mutating via GET são bug em si.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>GET mutating é anti-RESTful e vulnerável — evite.</p></div>",
        "quiz": [
          {
            "prompt": "SameSite=Strict:",
            "options": [
              "Permissivo",
              "Mais restritivo",
              "Ignorado",
              "SSR só"
            ],
            "correct": 1,
            "explain": "Tolerância zero."
          },
          {
            "prompt": "CSRF via JSON API:",
            "options": [
              "Trivial",
              "Difícil — preflight",
              "Sempre fácil",
              "GET só"
            ],
            "correct": 1,
            "explain": "Proteção natural."
          },
          {
            "prompt": "GET mutating:",
            "options": [
              "OK",
              "Anti-REST + vulnerável",
              "Rápido",
              "Sempre OK"
            ],
            "correct": 1,
            "explain": "Viola semântica."
          }
        ]
      },
      {
        "id": "seg4",
        "title": "SQLi avançado",
        "summary": "Blind, time-based, NoSQL.",
        "content": "<p>Blind SQLi infere via diferenças. Time-based usa SLEEP. NoSQL injection via operators malformados ($ne, $regex).</p><h2>Aprofundando</h2><p>sqlmap automatiza exploração.</p><p>Defesa: parametrizar sempre; whitelist de operadores em ODMs.</p><p>Princípio do menor privilégio no DB user.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Leaked DB dumps passam de escândalo em escândalo. Não seja o próximo.</p></div>",
        "quiz": [
          {
            "prompt": "Blind SQLi:",
            "options": [
              "Erros visíveis",
              "Inferência via diferenças",
              "GET só",
              "PG só"
            ],
            "correct": 1,
            "explain": "Silencioso."
          },
          {
            "prompt": "NoSQL injection:",
            "options": [
              "Impossível",
              "Via operadores",
              "SQL só",
              "Mongo old só"
            ],
            "correct": 1,
            "explain": "Mesmo conceito."
          },
          {
            "prompt": "sqlmap:",
            "options": [
              "Banco",
              "Auto-exploração SQLi",
              "DB",
              "IDE"
            ],
            "correct": 1,
            "explain": "Poderosa."
          }
        ]
      },
      {
        "id": "seg5",
        "title": "SSRF em cloud",
        "summary": "IAM via metadata endpoint.",
        "content": "<p>169.254.169.254 expõe credenciais IAM temporárias em AWS. SSRF + metadata = compromisso total.</p><h2>Aprofundando</h2><p>IMDSv2 exige token.</p><p>Bloquear 169.254.0.0/16 no egress.</p><p>GCP/Azure têm suas versões.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>IMDSv2 deveria ser default obrigatório em toda stack AWS.</p></div>",
        "quiz": [
          {
            "prompt": "Metadata AWS:",
            "options": [
              "Pública",
              "Acessível só via instância; creds IAM",
              "Segura sempre",
              "Não existe"
            ],
            "correct": 1,
            "explain": "Vetor clássico."
          },
          {
            "prompt": "IMDSv2:",
            "options": [
              "Default",
              "Token-based, bloqueia SSRF simples",
              "Obsoleta",
              "GCP só"
            ],
            "correct": 1,
            "explain": "Opt-in em AWS."
          },
          {
            "prompt": "Defesa SSRF:",
            "options": [
              "Whitelist de domínios + bloquear IPs internos",
              "HTTPS só",
              "GET só",
              "Nada"
            ],
            "correct": 0,
            "explain": "Camadas."
          }
        ]
      },
      {
        "id": "seg6",
        "title": "OAuth, OIDC, SAML",
        "summary": "SSO bem e mal feito.",
        "content": "<p>OAuth: autorização. OIDC: identidade. Ataques: redirect URI mal validado, PKCE ausente, code leak, JWT alg=none.</p><h2>Aprofundando</h2><p>PKCE obrigatório em SPA/mobile.</p><p>JWT: valide algoritmo + sig.</p><p>Token rotation.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>OIDC é padrão atual para login federado. SAML persiste em enterprise.</p></div>",
        "quiz": [
          {
            "prompt": "OIDC:",
            "options": [
              "Auth só",
              "Identidade sobre OAuth",
              "Igual SAML",
              "HTTP só"
            ],
            "correct": 1,
            "explain": "ID token JWT."
          },
          {
            "prompt": "PKCE:",
            "options": [
              "Inútil",
              "Proteção para public clients",
              "Server-side só",
              "AES"
            ],
            "correct": 1,
            "explain": "Protege code."
          },
          {
            "prompt": "JWT alg=none:",
            "options": [
              "Seguro",
              "Tentativa de bypass",
              "Default",
              "Fine"
            ],
            "correct": 1,
            "explain": "Rejeite sempre."
          }
        ]
      },
      {
        "id": "seg7",
        "title": "Session management",
        "summary": "Fixation, hijacking, concurrent.",
        "content": "<p>Bugs clássicos: fixation (ID conhecido), não rotacionar após login, não invalidar em logout, cookies sem HttpOnly/Secure.</p><h2>Aprofundando</h2><p>Multi-device session list + revoke.</p><p>Rotacione ID no login.</p><p>Denylist tokens ao logout.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Session é 80% da segurança de auth no dia a dia.</p></div>",
        "quiz": [
          {
            "prompt": "Session fixation:",
            "options": [
              "Forçar ID do atacante",
              "Ignorar session",
              "POST só",
              "Impossível"
            ],
            "correct": 0,
            "explain": "Clássico."
          },
          {
            "prompt": "Post-login:",
            "options": [
              "Mesmo session",
              "Rotacionar ID",
              "Ignorar",
              "Mobile só"
            ],
            "correct": 1,
            "explain": "Prevenção."
          },
          {
            "prompt": "Revogação:",
            "options": [
              "Impossível",
              "Lista + check",
              "JWT none só",
              "OAuth só"
            ],
            "correct": 1,
            "explain": "Invalidar."
          }
        ]
      },
      {
        "id": "seg8",
        "title": "Criptografia aplicada",
        "summary": "Pouco brincar, muito errar.",
        "content": "<p>Use libs auditadas (libsodium, noble). Nunca MD5/SHA1 para senha — argon2/scrypt/bcrypt.</p><h2>Aprofundando</h2><p>AES-GCM para simétrica autenticada.</p><p>Nunca criptografe sem autenticar.</p><p>Key management > algoritmo.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Se está inventando protocolo cripto, pare.</p></div>",
        "quiz": [
          {
            "prompt": "Hash de senha:",
            "options": [
              "SHA256",
              "argon2/bcrypt/scrypt",
              "MD5",
              "Plain"
            ],
            "correct": 1,
            "explain": "Slow hash + salt."
          },
          {
            "prompt": "Cripto sem autenticar:",
            "options": [
              "OK",
              "Vulnerável a tampering",
              "Padrão",
              "AES só"
            ],
            "correct": 1,
            "explain": "AEAD necessário."
          },
          {
            "prompt": "Libsodium:",
            "options": [
              "Banco",
              "Lib cripto auditada",
              "Ataque",
              "Linter"
            ],
            "correct": 1,
            "explain": "Easy to use right."
          }
        ]
      },
      {
        "id": "seg9",
        "title": "Business logic flaws",
        "summary": "Quando o bug não é técnico.",
        "content": "<p>Vulnerabilidade na regra: cupom múltiplas vezes, IDOR por tenant, preço manipulado, race em saldo.</p><h2>Aprofundando</h2><p>Idempotência protege race conditions.</p><p>Valide regras no server sempre.</p><p>Threat modeling por feature.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Scanner não pega lógica. Só revisão humana + threat model.</p></div>",
        "quiz": [
          {
            "prompt": "IDOR:",
            "options": [
              "Insecure Direct Object Reference",
              "XSS",
              "CSRF",
              "Random"
            ],
            "correct": 0,
            "explain": "Acesso a objeto alheio."
          },
          {
            "prompt": "Race em saldo:",
            "options": [
              "Imune",
              "Bug comum; locks/idempotência",
              "NoSQL só",
              "CSS"
            ],
            "correct": 1,
            "explain": "Concorrência."
          },
          {
            "prompt": "Scanner detecta:",
            "options": [
              "Tudo",
              "Bugs técnicos, não lógica",
              "Lógica",
              "Humor"
            ],
            "correct": 1,
            "explain": "Humano essencial."
          }
        ]
      },
      {
        "id": "seg10",
        "title": "Metodologia de pentest",
        "summary": "OWASP WSTG na prática.",
        "content": "<p>Fases: recon → mapping → discovery → exploit → post-exploit → reporting.</p><h2>Aprofundando</h2><p>Pentest caixa preta/cinza/branca.</p><p>Report com CVSS e reprodução.</p><p>Retest após fix.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Pentest sem escrito é ilegal ou inútil — geralmente ambos.</p></div>",
        "quiz": [
          {
            "prompt": "WSTG:",
            "options": [
              "Ferramenta",
              "Testing Guide OWASP",
              "Certif",
              "DB"
            ],
            "correct": 1,
            "explain": "Guia."
          },
          {
            "prompt": "CVSS:",
            "options": [
              "Métrica",
              "Score padrão de CVE",
              "DoS só",
              "Linter"
            ],
            "correct": 1,
            "explain": "Comunica risco."
          },
          {
            "prompt": "Retest:",
            "options": [
              "Desnecessário",
              "Verifica fix real",
              "Demo só",
              "Redundante"
            ],
            "correct": 1,
            "explain": "Obrigatório."
          }
        ]
      },
      {
        "id": "seg11",
        "title": "Bug bounty — ético e rentável",
        "summary": "HackerOne, Bugcrowd.",
        "content": "<p>Programas pagam por reports. Comece em programas iniciantes, leia escopo, report qualidade > quantidade.</p><h2>Aprofundando</h2><p>Relatórios bons = recompensas altas.</p><p>Respeite escopo sempre.</p><p>Disclosure só após fix + permissão.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Bug bounty é tempo + sorte + metodologia. Paciência.</p></div>",
        "quiz": [
          {
            "prompt": "Bug bounty:",
            "options": [
              "Pentest ilegal",
              "Pentest autorizado com recompensa",
              "Só grandes",
              "CTF"
            ],
            "correct": 1,
            "explain": "Ética."
          },
          {
            "prompt": "Escopo:",
            "options": [
              "Opcional",
              "Diz o que pode testar",
              "Server só",
              "IP só"
            ],
            "correct": 1,
            "explain": "Lei + regras."
          },
          {
            "prompt": "Report qualidade:",
            "options": [
              "Sem impacto",
              "Determinante na paga",
              "Quantidade só",
              "Irrelevante"
            ],
            "correct": 1,
            "explain": "Clareza."
          }
        ]
      },
      {
        "id": "seg12",
        "title": "CTFs — academia prática",
        "summary": "HTB, TryHackMe, picoCTF.",
        "content": "<p>CTFs treinam em ambiente isolado. Categorias: web, crypto, reversing, forensics, pwn.</p><h2>Aprofundando</h2><p>Write-ups ensinam soluções.</p><p>Regular > esporádico.</p><p>OSCP tem CTF prático.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Pratique como atleta. Consistência bate esporadicamente.</p></div>",
        "quiz": [
          {
            "prompt": "CTF:",
            "options": [
              "Crime",
              "Competição legal de segurança",
              "DB",
              "Framework"
            ],
            "correct": 1,
            "explain": "Educativo."
          },
          {
            "prompt": "HTB:",
            "options": [
              "DB",
              "Plataforma de labs",
              "Banco",
              "CI"
            ],
            "correct": 1,
            "explain": "Hack The Box."
          },
          {
            "prompt": "Write-up:",
            "options": [
              "Solução documentada",
              "Bug inline",
              "Code review",
              "CI"
            ],
            "correct": 0,
            "explain": "Formal."
          }
        ]
      },
      {
        "id": "seg13",
        "title": "Zero trust",
        "summary": "Nunca confie, sempre verifique.",
        "content": "<p>Zero trust abandona perímetro. Cada request autenticado independente da origem. BeyondCorp (Google) popularizou.</p><h2>Aprofundando</h2><p>mTLS, SSO+MFA, acesso baseado em identidade+contexto.</p><p>Identidade é o novo perímetro.</p><p>Service mesh viabiliza internamente.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>VPN + firewall borda = passado. Zero trust é presente.</p></div>",
        "quiz": [
          {
            "prompt": "Zero trust:",
            "options": [
              "Confiar rede interna",
              "Verificar sempre, mesmo interno",
              "Perímetro só",
              "Legacy"
            ],
            "correct": 1,
            "explain": "Mudança de mindset."
          },
          {
            "prompt": "BeyondCorp:",
            "options": [
              "VPN",
              "Implementação referência ZT",
              "CI",
              "DB"
            ],
            "correct": 1,
            "explain": "Google."
          },
          {
            "prompt": "Identidade:",
            "options": [
              "Secundária",
              "Novo perímetro",
              "Inútil",
              "SSO só"
            ],
            "correct": 1,
            "explain": "Foco principal."
          }
        ]
      },
      {
        "id": "seg14",
        "title": "Threat modeling",
        "summary": "STRIDE e DREAD.",
        "content": "<p>Exercício antecipado: para cada componente, quais ameaças? STRIDE estrutura.</p><h2>Aprofundando</h2><p>Data flow diagram é ponto de partida.</p><p>Documentar mitigações.</p><p>Revisar a cada mudança grande.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Uma hora de threat modeling economiza semanas de IR.</p></div>",
        "quiz": [
          {
            "prompt": "STRIDE:",
            "options": [
              "Algoritmo",
              "Framework de categorias de ameaças",
              "DB",
              "CDN"
            ],
            "correct": 1,
            "explain": "MS."
          },
          {
            "prompt": "Quando fazer:",
            "options": [
              "Post-incidente",
              "Fase de design",
              "Nunca",
              "Prod só"
            ],
            "correct": 1,
            "explain": "Antes."
          },
          {
            "prompt": "Saída:",
            "options": [
              "Certificado",
              "Lista priorizada de ameaças + mitigações",
              "Logs só",
              "Dashboard"
            ],
            "correct": 1,
            "explain": "Ação clara."
          }
        ]
      },
      {
        "id": "seg15",
        "title": "Incident response",
        "summary": "Quando o pior acontece.",
        "content": "<p>NIST: Prepare → Detect → Contain → Eradicate → Recover → Learn.</p><h2>Aprofundando</h2><p>Runbooks, papéis, comunicação.</p><p>Postmortem blameless.</p><p>Cadeia de custódia de evidências.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Estresse zero diminui erros. Treine com drills.</p></div>",
        "quiz": [
          {
            "prompt": "Primeiro passo:",
            "options": [
              "Publicar",
              "Contain + avaliar escopo",
              "Blame",
              "Desligar"
            ],
            "correct": 1,
            "explain": "Limitar dano."
          },
          {
            "prompt": "Postmortem:",
            "options": [
              "Culpar",
              "Blameless",
              "Opcional",
              "Senior só"
            ],
            "correct": 1,
            "explain": "Cultura."
          },
          {
            "prompt": "Runbook:",
            "options": [
              "Opcional",
              "Essencial",
              "Dev só",
              "CI"
            ],
            "correct": 1,
            "explain": "Padronizar."
          }
        ]
      },
      {
        "id": "seg16",
        "title": "Privacy engineering",
        "summary": "Além do checklist LGPD.",
        "content": "<p>Privacy by design: minimização, propósito, retenção, consent. DSAR workflows, pseudonymization, DPIA.</p><h2>Aprofundando</h2><p>Dados pessoais são risco — trate como radioativo.</p><p>Opt-in default.</p><p>Time legal + eng juntos.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Privacidade é feature regulatória, competitiva e ética.</p></div>",
        "quiz": [
          {
            "prompt": "DSAR:",
            "options": [
              "Backup",
              "Data Subject Access Request",
              "Rede",
              "Nada"
            ],
            "correct": 1,
            "explain": "Direito do titular."
          },
          {
            "prompt": "Data minimization:",
            "options": [
              "Coletar tudo",
              "Só o necessário",
              "Ignorar",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Menor superfície."
          },
          {
            "prompt": "Pseudonimização:",
            "options": [
              "Zero privacy",
              "Reduz link a pessoa",
              "Anônimo total",
              "LGPD só"
            ],
            "correct": 1,
            "explain": "Trade-off."
          }
        ]
      },
      {
        "id": "seg17",
        "title": "Security DevEx",
        "summary": "Embedado no fluxo.",
        "content": "<p>Secret scanning pre-commit, SAST (CodeQL/Semgrep) no CI, DAST (ZAP) em staging, SBOM em build.</p><h2>Aprofundando</h2><p>Semgrep permite regras custom.</p><p>Pre-commit é free win.</p><p>Adaptar severidade por contexto.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Melhor ferramenta é a que dev usa. Integre onde ele já trabalha.</p></div>",
        "quiz": [
          {
            "prompt": "SAST:",
            "options": [
              "Static Application Security Testing",
              "DAST",
              "Runtime",
              "Arquitetura"
            ],
            "correct": 0,
            "explain": "Análise estática."
          },
          {
            "prompt": "Semgrep:",
            "options": [
              "DB",
              "SAST rápido pattern-based",
              "Build",
              "Monitor"
            ],
            "correct": 1,
            "explain": "Regras simples."
          },
          {
            "prompt": "Pre-commit:",
            "options": [
              "Impossível",
              "Bloqueia secrets/anti-patterns",
              "Prod só",
              "Rust só"
            ],
            "correct": 1,
            "explain": "Fail fast."
          }
        ]
      },
      {
        "id": "seg18",
        "title": "Trilha segurança",
        "summary": "Onde ir.",
        "content": "<p>Trilhas: AppSec, CloudSec, Red Team, Blue Team, DFIR, GRC. Certs: OSCP, OSCE, CISSP, AWS Security, CKS.</p><h2>Aprofundando</h2><p>Mercado aquecido, salários altos.</p><p>Comunidade: DEF CON, OWASP, BSides.</p><p>Ética é não-negociável.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Segurança exige aprendizado eterno.</p></div>",
        "quiz": [
          {
            "prompt": "OSCP:",
            "options": [
              "Defensiva",
              "Ofensiva prática",
              "DB",
              "Empresa"
            ],
            "correct": 1,
            "explain": "Offensive Security."
          },
          {
            "prompt": "GRC:",
            "options": [
              "Lib",
              "Governance, Risk, Compliance",
              "Ferramenta",
              "CTF só"
            ],
            "correct": 1,
            "explain": "Área inteira."
          },
          {
            "prompt": "Ética:",
            "options": [
              "Negociável",
              "Não negociável",
              "Tempo só",
              "Pentest só"
            ],
            "correct": 1,
            "explain": "Base."
          },
          {
            "prompt": "Mercado:",
            "options": [
              "Estagnado",
              "Aquecido e crescente",
              "Grandes só",
              "EUA só"
            ],
            "correct": 1,
            "explain": "Promissora."
          }
        ]
      }
    ]
  },
  {
    "id": "mobile-avancado",
    "title": "Mobile Avançado — RN Pro",
    "tagline": "Performance nativa, arquitetura, publicação séria.",
    "description": "Além do básico de RN: new architecture (Fabric/TurboModules), performance em listas gigantes, offline-first, push, monetização, deep linking, CI/CD mobile.",
    "level": "Avançado",
    "duration": "13h",
    "theme": "theme-html",
    "cover": "📱+",
    "vip": true,
    "instructor": "Camila Rocha",
    "lessons": [
      {
        "id": "mob1",
        "title": "New Architecture: Fabric + TurboModules",
        "summary": "O RN de 2024+.",
        "content": "<p>Nova arquitetura elimina bridge JSON. Fabric (UI) e TurboModules (módulos) usam JSI para chamadas síncronas tipadas.</p><h2>Aprofundando</h2><p>Adoção gradual; Expo SDK 50+ tem opt-in amigável.</p><p>Menos skipped frames.</p><p>Tipagem forte via codegen.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Migre para new arch quando sua stack estiver pronta — ganhos reais de performance.</p></div>",
        "quiz": [
          {
            "prompt": "Fabric substitui:",
            "options": [
              "Metro",
              "Renderer antigo (bridge)",
              "Hermes",
              "npm"
            ],
            "correct": 1,
            "explain": "UI layer."
          },
          {
            "prompt": "JSI:",
            "options": [
              "JSON­bridge",
              "Interface direta JS↔Native",
              "Lib",
              "React"
            ],
            "correct": 1,
            "explain": "Sync calls."
          },
          {
            "prompt": "Codegen:",
            "options": [
              "Random",
              "Gera bindings tipados",
              "JSX",
              "CSS"
            ],
            "correct": 1,
            "explain": "Tipagem end-to-end."
          }
        ]
      },
      {
        "id": "mob2",
        "title": "FlatList e listas grandes",
        "summary": "60 FPS em 10k itens.",
        "content": "<p>FlatList virtualiza. Mas 60fps em listas grandes exige: getItemLayout, windowSize, removeClippedSubviews, memoizar renderItem.</p><h2>Aprofundando</h2><p>FlashList (Shopify) é substituto mais performante.</p><p>Keys estáveis obrigatórias.</p><p>Separate os itens em memo.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Benchmark com Profiler — 'parece rápido' não conta.</p></div>",
        "quiz": [
          {
            "prompt": "FlatList:",
            "options": [
              "Renderiza tudo",
              "Virtualiza",
              "Busca DB",
              "Sem scroll"
            ],
            "correct": 1,
            "explain": "Janelas."
          },
          {
            "prompt": "FlashList:",
            "options": [
              "Lib Netflix",
              "FlatList faster (Shopify)",
              "Animação",
              "CSS"
            ],
            "correct": 1,
            "explain": "Drop-in."
          },
          {
            "prompt": "renderItem:",
            "options": [
              "Inline OK",
              "Memoize para perf",
              "Nunca",
              "Só list pequena"
            ],
            "correct": 1,
            "explain": "Evita re-render."
          }
        ]
      },
      {
        "id": "mob3",
        "title": "Offline-first",
        "summary": "Watermelon, Realm, SQLite.",
        "content": "<p>Apps mobile perdem conexão. Offline-first sincroniza local ↔ remoto com merge resolution.</p><h2>Aprofundando</h2><p>WatermelonDB: reativo, rápido, bom com RN.</p><p>Realm: NoSQL sync do Atlas.</p><p>SQLite bruto via expo-sqlite.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Sync robusto exige conflict resolution — pense desde o design.</p></div>",
        "quiz": [
          {
            "prompt": "Offline-first:",
            "options": [
              "Falha sem rede",
              "Funciona sem rede, sync depois",
              "HTTP só",
              "Cache apenas"
            ],
            "correct": 1,
            "explain": "Local-first."
          },
          {
            "prompt": "WatermelonDB:",
            "options": [
              "SQL puro",
              "Reativo sobre SQLite",
              "JSON",
              "Firebase"
            ],
            "correct": 1,
            "explain": "React-friendly."
          },
          {
            "prompt": "Conflict resolution:",
            "options": [
              "Automágico",
              "Requer estratégia (CRDT, last-write)",
              "Nunca",
              "Só server"
            ],
            "correct": 1,
            "explain": "Design cedo."
          }
        ]
      },
      {
        "id": "mob4",
        "title": "Push notifications sérias",
        "summary": "APNs, FCM, Expo.",
        "content": "<p>Push via APNs (iOS) e FCM (Android). Expo Push simplifica. Tokens expiram — rotacione.</p><h2>Aprofundando</h2><p>Silent push para data sync.</p><p>Rich push com imagens/ações.</p><p>Opt-in obrigatório no iOS.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Push mal feito afasta — mande valor, não spam.</p></div>",
        "quiz": [
          {
            "prompt": "APNs:",
            "options": [
              "Android",
              "iOS push service",
              "Expo",
              "Firebase"
            ],
            "correct": 1,
            "explain": "Apple."
          },
          {
            "prompt": "FCM:",
            "options": [
              "iOS",
              "Google push service",
              "Expo only",
              "AWS"
            ],
            "correct": 1,
            "explain": "Firebase Cloud Messaging."
          },
          {
            "prompt": "Silent push:",
            "options": [
              "Ignorável",
              "Acorda app para sync",
              "Som só",
              "Bloqueado"
            ],
            "correct": 1,
            "explain": "Background."
          }
        ]
      },
      {
        "id": "mob5",
        "title": "Deep linking e universal links",
        "summary": "Abrir telas via URL.",
        "content": "<p>Deep links abrem tela específica do app. Universal links (iOS) / App Links (Android) validam propriedade do domínio.</p><h2>Aprofundando</h2><p>apple-app-site-association e assetlinks.json.</p><p>React Navigation deepLinks config.</p><p>Handle params defensivamente.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Deep links são canal de marketing e UX poderoso. Teste todos os fluxos.</p></div>",
        "quiz": [
          {
            "prompt": "Universal link:",
            "options": [
              "HTTP só",
              "Valida domínio via AASA",
              "Expo só",
              "Bug"
            ],
            "correct": 1,
            "explain": "iOS seguro."
          },
          {
            "prompt": "Deep link esquema:",
            "options": [
              "http",
              "Custom: meuapp://tela",
              "Nunca",
              "Firebase"
            ],
            "correct": 1,
            "explain": "URL scheme."
          },
          {
            "prompt": "React Navigation:",
            "options": [
              "Sem deep link",
              "Config deepLinks",
              "Redux só",
              "UI kit"
            ],
            "correct": 1,
            "explain": "Integra."
          }
        ]
      },
      {
        "id": "mob6",
        "title": "Autenticação mobile",
        "summary": "Tokens, biometria, secure storage.",
        "content": "<p>Tokens em SecureStore/Keychain. Biometria via expo-local-authentication ou react-native-biometrics.</p><h2>Aprofundando</h2><p>PKCE obrigatório em OAuth mobile.</p><p>Token rotation + refresh.</p><p>Nunca cliente_secret no app.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Secret em bundle mobile = secret público. Engine-se.</p></div>",
        "quiz": [
          {
            "prompt": "Token mobile:",
            "options": [
              "AsyncStorage",
              "SecureStore/Keychain",
              "Memória só",
              "Print"
            ],
            "correct": 1,
            "explain": "Criptografado."
          },
          {
            "prompt": "PKCE mobile:",
            "options": [
              "Opcional",
              "Obrigatório em OAuth",
              "Só web",
              "Só Android"
            ],
            "correct": 1,
            "explain": "Public client."
          },
          {
            "prompt": "client_secret no app:",
            "options": [
              "Seguro",
              "Exposto — nunca",
              "Criptografado",
              "OK se obfusc"
            ],
            "correct": 1,
            "explain": "Bundle extraível."
          }
        ]
      },
      {
        "id": "mob7",
        "title": "Gestos e animações",
        "summary": "Reanimated, Gesture Handler.",
        "content": "<p>Reanimated 3 roda animações no UI thread (60/120fps). Gesture Handler integra gestos com animações fluidas.</p><h2>Aprofundando</h2><p>worklets rodam em JS thread separada.</p><p>useSharedValue, useAnimatedStyle.</p><p>Moti abstrai para declarativo.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Animações no JS thread travam em cenas pesadas. Use Reanimated.</p></div>",
        "quiz": [
          {
            "prompt": "Reanimated:",
            "options": [
              "JS thread",
              "UI thread com worklets",
              "Backend",
              "CSS"
            ],
            "correct": 1,
            "explain": "Performance."
          },
          {
            "prompt": "Worklet:",
            "options": [
              "JSX",
              "Função que roda em UI thread",
              "Server",
              "CSS"
            ],
            "correct": 1,
            "explain": "Isolada."
          },
          {
            "prompt": "Gesture Handler:",
            "options": [
              "Touch básico",
              "Gestos nativos complexos",
              "Animação só",
              "Layout"
            ],
            "correct": 1,
            "explain": "Complementa Reanimated."
          }
        ]
      },
      {
        "id": "mob8",
        "title": "Expo vs bare workflow",
        "summary": "Quando usar cada.",
        "content": "<p>Expo managed acelera — sem Xcode/Android Studio para dev. Bare/Prebuild dá controle nativo total.</p><h2>Aprofundando</h2><p>EAS Build compila na nuvem.</p><p>Config plugins injetam código nativo.</p><p>Eject é último recurso — prefer prebuild.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Expo hoje cobre 95% dos casos. Só saia quando precisar.</p></div>",
        "quiz": [
          {
            "prompt": "Expo managed:",
            "options": [
              "Sem JS",
              "Sem Xcode/AS para dev",
              "Backend",
              "CLI só"
            ],
            "correct": 1,
            "explain": "Simplicidade."
          },
          {
            "prompt": "EAS Build:",
            "options": [
              "Local",
              "Cloud build + assinatura",
              "Editor",
              "Lint"
            ],
            "correct": 1,
            "explain": "Managed."
          },
          {
            "prompt": "Eject:",
            "options": [
              "Primeira opção",
              "Último recurso; prefer prebuild",
              "Automático",
              "Free"
            ],
            "correct": 1,
            "explain": "Mudança irreversível."
          }
        ]
      },
      {
        "id": "mob9",
        "title": "Nativo quando precisar",
        "summary": "Modules próprios.",
        "content": "<p>Quando uma API nativa (Bluetooth específico, SDK fabricante) não tem lib, você escreve módulo. Expo Modules API simplifica.</p><h2>Aprofundando</h2><p>Kotlin + Swift.</p><p>Config plugin para Expo.</p><p>TurboModules para ganhos de perf.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Não recrie o nativo — escreva módulo fino que exponha o que precisa.</p></div>",
        "quiz": [
          {
            "prompt": "Native module:",
            "options": [
              "JSX só",
              "Ponte JS↔código nativo",
              "HTTP",
              "Animação"
            ],
            "correct": 1,
            "explain": "Capacidades nativas."
          },
          {
            "prompt": "Expo Modules API:",
            "options": [
              "CLI",
              "Framework para módulos nativos",
              "DB",
              "CSS"
            ],
            "correct": 1,
            "explain": "Moderno."
          },
          {
            "prompt": "Kotlin + Swift:",
            "options": [
              "Obsoleto",
              "Linguagens nativas de Android/iOS",
              "Web",
              "Ruby"
            ],
            "correct": 1,
            "explain": "Padrão."
          }
        ]
      },
      {
        "id": "mob10",
        "title": "Arquitetura de apps RN grandes",
        "summary": "Estrutura escalável.",
        "content": "<p>Domínios por feature, state isolado, navigation stack por fluxo, design system próprio.</p><h2>Aprofundando</h2><p>React Navigation com linking config.</p><p>State: Zustand/Redux/Legend State.</p><p>Feature flags para rollout.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Arquitetura previne o inferno que apps mobile viram após 2 anos.</p></div>",
        "quiz": [
          {
            "prompt": "Por feature:",
            "options": [
              "Anti-pattern",
              "Separação natural",
              "Ruim em RN",
              "Só em web"
            ],
            "correct": 1,
            "explain": "Modular."
          },
          {
            "prompt": "Feature flags:",
            "options": [
              "Só server",
              "Permitem rollout gradual no mobile",
              "Hack",
              "QA só"
            ],
            "correct": 1,
            "explain": "Rollout controlado."
          },
          {
            "prompt": "Navigation:",
            "options": [
              "Manual",
              "React Navigation padrão",
              "Só Expo",
              "Só iOS"
            ],
            "correct": 1,
            "explain": "Lib padrão."
          }
        ]
      },
      {
        "id": "mob11",
        "title": "Testes em mobile",
        "summary": "Jest + Detox + Maestro.",
        "content": "<p>Jest para unit. Detox ou Maestro para E2E mobile real.</p><h2>Aprofundando</h2><p>Maestro: flows em YAML.</p><p>Detox: gray-box, rápido.</p><p>Record videos em CI.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>E2E de fluxo crítico vale investimento — previne regressões caras.</p></div>",
        "quiz": [
          {
            "prompt": "Maestro:",
            "options": [
              "DB",
              "E2E mobile com YAML",
              "Lint",
              "Build"
            ],
            "correct": 1,
            "explain": "Simples."
          },
          {
            "prompt": "Detox:",
            "options": [
              "Unit",
              "E2E gray-box",
              "Linter",
              "DB"
            ],
            "correct": 1,
            "explain": "Wix."
          },
          {
            "prompt": "E2E mobile:",
            "options": [
              "Só manual",
              "Vale investimento em fluxos críticos",
              "Impossível",
              "Só Android"
            ],
            "correct": 1,
            "explain": "Crítico."
          }
        ]
      },
      {
        "id": "mob12",
        "title": "CI/CD mobile",
        "summary": "EAS, Fastlane, GitHub Actions.",
        "content": "<p>Build em cada commit, deploy para TestFlight/Play Internal. EAS Submit publica. Fastlane é o padrão mais antigo.</p><h2>Aprofundando</h2><p>Signing secrets em secret manager.</p><p>Over-the-air updates (EAS Update) para JS.</p><p>Release channels: staging/prod.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>OTA updates permitem fix rápido em JS sem passar por review.</p></div>",
        "quiz": [
          {
            "prompt": "EAS:",
            "options": [
              "Android only",
              "Expo Application Services — build/submit/update",
              "CI só web",
              "DB"
            ],
            "correct": 1,
            "explain": "Managed mobile ops."
          },
          {
            "prompt": "OTA update:",
            "options": [
              "Só native code",
              "JS/assets sem review",
              "Bloqueado por Apple",
              "Só Android"
            ],
            "correct": 1,
            "explain": "Dinâmico."
          },
          {
            "prompt": "Fastlane:",
            "options": [
              "Novo",
              "Ferramenta clássica de automação mobile",
              "UI",
              "DB"
            ],
            "correct": 1,
            "explain": "Ruby-based."
          }
        ]
      },
      {
        "id": "mob13",
        "title": "Performance — profiling",
        "summary": "Flipper, Perf Monitor, Hermes.",
        "content": "<p>Flipper (ou React Native DevTools) traceia perf. Hermes engine melhora startup e RAM.</p><h2>Aprofundando</h2><p>Ative Hermes (default em RN novo).</p><p>Measure com Perf Monitor.</p><p>Bundle size importa — cheque com source-map-explorer.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Startup lento afasta usuários — meça tempo até tela principal.</p></div>",
        "quiz": [
          {
            "prompt": "Hermes:",
            "options": [
              "Linter",
              "JS engine para RN",
              "Banco",
              "UI"
            ],
            "correct": 1,
            "explain": "Facebook/Meta."
          },
          {
            "prompt": "Flipper:",
            "options": [
              "Backend",
              "Dev tool para RN",
              "UI só",
              "Build"
            ],
            "correct": 1,
            "explain": "Debug."
          },
          {
            "prompt": "Bundle size:",
            "options": [
              "Irrelevante em mobile",
              "Importa — afeta download/startup",
              "Só web",
              "Infinito"
            ],
            "correct": 1,
            "explain": "Meça."
          }
        ]
      },
      {
        "id": "mob14",
        "title": "Assets e imagens",
        "summary": "FastImage, responsive, SVG.",
        "content": "<p>FastImage (bare) ou expo-image acelera caching. SVG via react-native-svg. Screens densities diferentes.</p><h2>Aprofundando</h2><p>@2x, @3x para iOS.</p><p>Placeholders e blurhash.</p><p>Resize no server reduz download.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Imagens são o gargalo mais comum em listas — invista.</p></div>",
        "quiz": [
          {
            "prompt": "expo-image:",
            "options": [
              "Backend",
              "Componente de imagem com cache",
              "Linter",
              "CSS"
            ],
            "correct": 1,
            "explain": "Cache built-in."
          },
          {
            "prompt": "@2x, @3x:",
            "options": [
              "Nada",
              "Densidades para diferentes telas",
              "Só Android",
              "Obsoleto"
            ],
            "correct": 1,
            "explain": "Retina+."
          },
          {
            "prompt": "Placeholder:",
            "options": [
              "Sem uso",
              "Blurhash/cor enquanto carrega",
              "Só splash",
              "Proibido"
            ],
            "correct": 1,
            "explain": "UX melhor."
          }
        ]
      },
      {
        "id": "mob15",
        "title": "Publicação e review",
        "summary": "App Store + Play Store.",
        "content": "<p>App Store: review manual humano, pode levar dias. Play: mais rápido, review automatizado.</p><h2>Aprofundando</h2><p>Metadata, screenshots, descrição localizada.</p><p>Rejeições comuns: privacy manifest, IAP compliance.</p><p>Staged rollout no Play.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Ler as guidelines antes de submeter economiza semanas.</p></div>",
        "quiz": [
          {
            "prompt": "App Store review:",
            "options": [
              "Automático",
              "Manual humano",
              "Só algoritmo",
              "24h sempre"
            ],
            "correct": 1,
            "explain": "Mais rigoroso."
          },
          {
            "prompt": "Staged rollout:",
            "options": [
              "Só Play",
              "Libera gradualmente para % de users",
              "iOS só",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Risco controlado."
          },
          {
            "prompt": "Privacy manifest:",
            "options": [
              "Opcional",
              "Obrigatório em iOS novos",
              "Android só",
              "Ignorado"
            ],
            "correct": 1,
            "explain": "Nova exigência Apple."
          }
        ]
      },
      {
        "id": "mob16",
        "title": "Monetização",
        "summary": "IAP, assinaturas, ads.",
        "content": "<p>Apple/Google exigem usar IAP para bens digitais (30% fee, ou 15% para small devs). RevenueCat simplifica.</p><h2>Aprofundando</h2><p>Ads: AdMob, AppLovin.</p><p>Paywall estratégia: freemium, trial.</p><p>Server-side validation de receipts.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Não cobre via web para fugir de fee — pode ter app banido.</p></div>",
        "quiz": [
          {
            "prompt": "IAP para bens digitais:",
            "options": [
              "Opcional",
              "Obrigatório (Apple/Google)",
              "Só pro",
              "Só Android"
            ],
            "correct": 1,
            "explain": "Regra das lojas."
          },
          {
            "prompt": "RevenueCat:",
            "options": [
              "Analytics",
              "Abstrai IAP multi-plataforma",
              "Auth",
              "DB"
            ],
            "correct": 1,
            "explain": "Padrão."
          },
          {
            "prompt": "Server validation:",
            "options": [
              "Opcional",
              "Essencial para evitar fraude",
              "Só iOS",
              "QA só"
            ],
            "correct": 1,
            "explain": "Receipts."
          }
        ]
      },
      {
        "id": "mob17",
        "title": "Analytics e crash reporting",
        "summary": "Amplitude, Sentry, Firebase.",
        "content": "<p>Amplitude/Mixpanel para produto. Sentry/Bugsnag para crashes. Firebase Analytics como base grátis.</p><h2>Aprofundando</h2><p>Eventos padronizados com schema.</p><p>Crashes com stack trace + breadcrumbs.</p><p>Privacy-aware — LGPD/GDPR.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Sem analytics, você voa cego. Sem crash reporting, o app pode estar quebrando sem você saber.</p></div>",
        "quiz": [
          {
            "prompt": "Sentry:",
            "options": [
              "Feature flags",
              "Crash reporting",
              "Auth",
              "UI"
            ],
            "correct": 1,
            "explain": "Errors."
          },
          {
            "prompt": "Amplitude/Mixpanel:",
            "options": [
              "Backend",
              "Product analytics",
              "Cache",
              "CI"
            ],
            "correct": 1,
            "explain": "Eventos."
          },
          {
            "prompt": "LGPD em mobile:",
            "options": [
              "Irrelevante",
              "Aplica a dados pessoais",
              "Só web",
              "Android só"
            ],
            "correct": 1,
            "explain": "Sempre."
          }
        ]
      },
      {
        "id": "mob18",
        "title": "Trilha mobile engineer",
        "summary": "Além de RN.",
        "content": "<p>Explore: Kotlin Multiplatform, Flutter, Swift nativo. Entenda cada plataforma em profundidade.</p><h2>Aprofundando</h2><p>Mobile exige atenção a bateria, rede flaky, memória limitada.</p><p>Contribua para libs RN.</p><p>Liste apps que publicou no portfolio.</p><div class=\"callout\"><div class=\"ico\">💡</div><p>Um app publicado vale 10 side projects. Apps reais ensinam o que tutoriais escondem.</p></div>",
        "quiz": [
          {
            "prompt": "Mobile specifics:",
            "options": [
              "Iguais ao web",
              "Bateria/rede/memória restritas",
              "Ignoráveis",
              "Só Android"
            ],
            "correct": 1,
            "explain": "Ambiente único."
          },
          {
            "prompt": "Portfolio:",
            "options": [
              "Só GitHub",
              "App publicado vale muito",
              "Só TestFlight",
              "Nada"
            ],
            "correct": 1,
            "explain": "Prova real."
          },
          {
            "prompt": "Multiplatform:",
            "options": [
              "Só RN",
              "RN/Flutter/KMP — diferentes trade-offs",
              "iOS só",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Várias opções."
          },
          {
            "prompt": "Tutoriais:",
            "options": [
              "Bastam",
              "Escondem problemas reais",
              "Superam apps reais",
              "Nunca"
            ],
            "correct": 1,
            "explain": "Práticar."
          }
        ]
      }
    ]
  }
];

  if (window.DevstartCourses) {
    window.DevstartCourses = window.DevstartCourses.concat(DATA);
  } else {
    window.DevstartCourses = DATA;
  }
  window.DevstartCoursesVIPExtra = DATA;
})();
