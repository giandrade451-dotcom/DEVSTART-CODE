/* =============================================================
   Devstart UP — Dados dos cursos (parte 2)
   Adiciona: Python Básico, JavaScript Avançado, Desenvolvedor Python,
             Fullstack, Design UI/UX.
   ============================================================= */
(function () {
  const q = (prompt, options, correct, explain) => ({ prompt, options, correct, explain });
  const L = (id, title, summary, content, quiz) => ({ id, title, summary, content, quiz });

  const more = [
    // =================================================================
    // 4. Python Básico (GRÁTIS)
    // =================================================================
    {
      id: "python-basic",
      title: "Python Básico",
      tagline: "A linguagem mais amigável para iniciantes — e uma potência em produção.",
      description: "Instale o Python, escreva seus primeiros scripts e domine a sintaxe essencial usada em ciência de dados, apps web, automação e IA.",
      level: "Iniciante",
      duration: "5h",
      theme: "theme-python",
      cover: "Python",
      vip: false,
      instructor: "Lucas Pereira",
      lessons: [
        L("meet-python", "Conheça o Python",
          "Por que Python é a linguagem mais popular do mundo.",
          `<p>O Python foi criado por Guido van Rossum em 1991. Hoje é a linguagem número 1 em ciência de dados, machine learning, computação científica, automação e é uma forte candidata para backend web (Django, Flask, FastAPI).</p>
<p>Por que é tão amada? <strong>Legibilidade.</strong> Python lê quase como inglês e evita excesso de pontuação. A indentação faz parte da sintaxe, o que força um estilo visual limpo.</p>
<pre><code># Um programa Python que realmente parece texto
def saudacao(nome):
    print(f"Olá, {nome}!")

saudacao("Devstart")</code></pre>
<h2>Onde você vai usar Python</h2>
<ul>
  <li>Análise e visualização de dados (pandas, matplotlib)</li>
  <li>Machine learning (scikit-learn, PyTorch, TensorFlow)</li>
  <li>Backends web (Django, Flask, FastAPI)</li>
  <li>Automação, scripting, ferramentas de dev</li>
  <li>Finanças, bioinformática, scripts de games</li>
</ul>`,
          [
            q("Quem criou o Python?", ["Brendan Eich", "Guido van Rossum", "James Gosling", "Dennis Ritchie"], 1, "Guido, 1991."),
            q("Python usa o quê para marcar blocos de código?", ["Chaves", "Indentação", "Palavras begin/end", "Ponto e vírgula"], 1, "A indentação é sintática."),
            q("Qual é um framework web Python?", ["Spring", "Express", "Flask", "Rails"], 2, "Flask, Django e FastAPI são pythônicos."),
          ]
        ),
        L("setup-hello", "Setup e Hello World",
          "Deixe o Python rodando e escreva sua primeira linha.",
          `<p>Baixe o Python em <code>python.org</code> (ou use o que seu sistema já traz — macOS e Linux geralmente têm). Verifique:</p>
<pre><code>$ python --version
Python 3.12.1</code></pre>
<h2>Rodando código</h2>
<p>Dois modos:</p>
<ol>
  <li><strong>Interativo</strong> — digite <code>python</code> no terminal para um REPL onde cada linha roda na hora.</li>
  <li><strong>Scripts</strong> — salve o código num arquivo <code>.py</code> e rode <code>python arquivo.py</code>.</li>
</ol>
<pre><code># hello.py
print("Olá, mundo!")
print("Sou um dev Python.")</code></pre>
<h2>Editores</h2>
<p>Use o VS Code com a extensão oficial de Python. Você ganha auto-complete, formatação, lint e terminal integrado.</p>
<div class="callout"><div class="ico">🐍</div><p>Fixe no Python 3 — o Python 2 está morto. Nunca escreva código novo para Python 2.</p></div>`,
          [
            q("Qual Python está vivo hoje?", ["2.7", "3.x", "Python 1", "Python 5"], 1, "Python 3.x é a versão moderna."),
            q("Comando para ver a versão do Python?", ["python -v", "python --version", "python info", "py -version"], 1, "python --version."),
            q("Editor mais popular para Python?", ["Notepad", "Só Vim", "VS Code", "Word"], 2, "VS Code + extensão Python."),
          ]
        ),
        L("variables-input", "Variáveis e entrada",
          "Guarde valores e converse com o usuário.",
          `<p>Variáveis em Python não têm tipagem explícita — você atribui com <code>=</code> e o tipo vem do valor:</p>
<pre><code>nome = "Ana"
idade = 25
ehVip = False
saldo = 3.14</code></pre>
<h2>Entrada e saída</h2>
<pre><code>nome = input("Seu nome: ")
print(f"Oi, {nome}!")</code></pre>
<p><code>input()</code> sempre devolve uma string. Se precisar de número, converta:</p>
<pre><code>idade = int(input("Sua idade: "))
preco = float(input("Preço: "))</code></pre>
<h2>Convenção de nomes</h2>
<p>Python usa <code>snake_case</code> para variáveis e funções, <code>PascalCase</code> para classes e <code>UPPER_SNAKE</code> para constantes. Siga isso — é inegociável no mundo Python.</p>`,
          [
            q("input() retorna qual tipo?", ["int", "float", "str", "bool"], 2, "Sempre uma string."),
            q("Convenção de nomes em Python?", ["camelCase", "PascalCase", "snake_case", "kebab-case"], 2, "snake_case para variáveis."),
            q("Sintaxe de f-string?", ["\"oi $nome\"", "\"oi {nome}\"", "f\"oi {nome}\"", "%(nome)s"], 2, "f\"oi {nome}\"."),
          ]
        ),
        L("strings-numbers", "Strings e números",
          "Os dois burros de carga de todo programa.",
          `<p>Strings em Python são muito poderosas. Alguns essenciais:</p>
<pre><code>s = "Devstart UP"
s.upper()          # "DEVSTART UP"
s.lower()
s.replace("UP", "LEVEL")
"start" in s       # True
len(s)             # 11
s.split(" ")       # ["Devstart", "UP"]
",".join(["a","b"])# "a,b"</code></pre>
<h2>Números</h2>
<pre><code>3 + 4     # 7
7 / 2     # 3.5  (divisão float)
7 // 2    # 3    (divisão inteira)
7 % 2     # 1    (módulo)
2 ** 10   # 1024 (exponenciação)
round(3.7)# 4
abs(-9)   # 9</code></pre>
<h2>f-strings</h2>
<p>A forma preferida de formatar texto:</p>
<pre><code>preco = 19.99
print(f"Total: R\${preco:.2f}")  # "Total: R$19.99"</code></pre>`,
          [
            q("Quanto vale 7 // 2?", ["3.5", "3", "4", "2"], 1, "Divisão inteira."),
            q("Qual verifica pertencimento?", ["has()", "in", "contains()", "find()"], 1, "Use o operador 'in'."),
            q("Formatar 3.14159 com 2 decimais?", ["{:.2}", "{:.2f}", "{:2f}", "{2.f}"], 1, ":.2f dentro da f-string."),
          ]
        ),
        L("lists", "Listas",
          "Sequências ordenadas e mutáveis.",
          `<p>Uma lista em Python é uma coleção ordenada que você pode modificar:</p>
<pre><code>frutas = ["maçã", "banana", "pera"]
frutas[0]            # "maçã"
frutas[-1]           # "pera" (última)
frutas[1:3]          # ["banana", "pera"]  (fatia)
frutas.append("kiwi")
frutas.remove("banana")
len(frutas)          # 3
sorted(frutas)       # nova lista ordenada</code></pre>
<h2>Compreensões de lista</h2>
<p>Um jeito conciso de transformar ou filtrar listas:</p>
<pre><code>numeros = [1, 2, 3, 4, 5]
quadrados = [n ** 2 for n in numeros]         # [1,4,9,16,25]
pares = [n for n in numeros if n % 2 == 0]    # [2, 4]</code></pre>
<p>Compreensões são mais idiomáticas (e muitas vezes mais rápidas) que laços com append.</p>`,
          [
            q("frutas[-1] dá…", ["Erro", "Primeiro item", "Último item", "Lista invertida"], 2, "Índices negativos contam do fim."),
            q("Fatia [1:3] inclui…", ["Índices 1, 2, 3", "Índices 1 e 2", "Apenas o 1", "Apenas o 3"], 1, "O fim é exclusivo."),
            q("Compreensão é…", ["Ler docs", "Sintaxe concisa para listar/filtrar", "Uma classe", "Um decorator"], 1, "Construtor baseado em expressões."),
          ]
        ),
        L("dictionaries", "Dicionários e tuplas",
          "Mapas chave-valor e tuplas imutáveis.",
          `<p>Dicionários guardam pares chave-valor:</p>
<pre><code>usuario = {
    "username": "ana",
    "vip": False,
    "idade": 25,
}
usuario["username"]           # "ana"
usuario["vip"] = True         # mutar
usuario.get("email", "n/d")   # lookup seguro com default
"idade" in usuario            # True
usuario.keys(), usuario.values(), usuario.items()</code></pre>
<h2>Tuplas</h2>
<p>Tuplas são sequências imutáveis. Comuns para retornar múltiplos valores:</p>
<pre><code>ponto = (3, 4)
x, y = ponto    # unpack
def minmax(xs): return (min(xs), max(xs))
lo, hi = minmax([3, 1, 5])</code></pre>
<h2>Sets</h2>
<pre><code>tags = {"python", "web", "python"}  # {"python", "web"} — duplicatas removidas
tags.add("ai")
"web" in tags</code></pre>`,
          [
            q("Tuplas são…", ["Mutáveis", "Imutáveis", "Sem ordem", "Com chave"], 1, "Não podem ser modificadas após a criação."),
            q("Lookup seguro em dict com default?", ["dict.safe()", "dict.get(chave, default)", "dict.try(chave)", "dict[chave or default]"], 1, ".get(chave, default)."),
            q("Sets removem…", ["Ordem", "Duplicatas", "Chaves", "Tipos"], 1, "Elementos duplicados são descartados."),
          ]
        ),
        L("if-else", "If / Elif / Else",
          "Decisão no estilo Pythonista.",
          `<p>Python usa indentação — sem chaves. A palavra <code>elif</code> cuida de condições encadeadas:</p>
<pre><code>nota = 87
if nota &gt;= 90:
    conceito = "A"
elif nota &gt;= 80:
    conceito = "B"
elif nota &gt;= 70:
    conceito = "C"
else:
    conceito = "F"
print(conceito)</code></pre>
<h2>Truthiness</h2>
<p>Coleções vazias são falsy. Use esta forma idiomática:</p>
<pre><code>nomes = []
if not nomes:
    print("Sem nomes ainda.")</code></pre>
<h2>Ternário</h2>
<pre><code>rotulo = "Adulto" if idade &gt;= 18 else "Menor"</code></pre>
<h2>Comparação em cadeia</h2>
<pre><code>if 0 &lt; nota &lt; 100: ...  # pythônico, funciona como matemática</code></pre>`,
          [
            q("Palavra para múltiplos ramos?", ["elseif", "elif", "elsif", "else if"], 1, "elif."),
            q("Lista vazia é…", ["Truthy", "Falsy", "Erro", "None"], 1, "Coleções vazias são falsy."),
            q("Python suporta comparação em cadeia?", ["Não", "Sim, a < b < c funciona", "Só com parênteses", "Só para ints"], 1, "a < b < c é idiomático."),
          ]
        ),
        L("loops", "Laços for e while",
          "Itere como uma Pythonista.",
          `<p>O <code>for</code> em Python é sempre <em>for-each</em>. Você itera uma sequência diretamente:</p>
<pre><code>for fruta in ["maçã", "banana"]:
    print(fruta)

for i in range(5):       # 0..4
    print(i)

for i, v in enumerate(["a","b","c"]):
    print(i, v)

for k, v in {"a":1, "b":2}.items():
    print(k, v)</code></pre>
<h2>While</h2>
<pre><code>n = 10
while n &gt; 0:
    print(n)
    n -= 1</code></pre>
<h2>break / continue / else</h2>
<pre><code>for x in itens:
    if x &lt; 0:
        break        # para o loop
    if x == 0:
        continue     # pula esta iteração
else:
    print("completou sem break")</code></pre>
<p>Esse <code>else</code> num for é raro mas poderoso: só roda se o laço terminou sem acionar <code>break</code>.</p>`,
          [
            q("range(5) produz…", ["1..5", "0..4", "0..5", "1..4"], 1, "Vai de 0 até, mas sem incluir, 5."),
            q("Qual dá índice e valor?", ["zip", "enumerate", "range", "items"], 1, "enumerate(iter) devolve (i, v)."),
            q("for...else roda quando?", ["Sempre", "Quando o loop termina sem break", "Se usa break", "Nunca"], 1, "Só quando nenhum break dispara."),
          ]
        ),
        L("functions", "Funções",
          "Defina comportamento uma vez, use em qualquer lugar.",
          `<p>Defina uma função com <code>def</code>:</p>
<pre><code>def saudacao(nome, cumprimento="Olá"):
    return f"{cumprimento}, {nome}!"

saudacao("Ana")                       # "Olá, Ana!"
saudacao("Ana", "Oi")                 # "Oi, Ana!"
saudacao(cumprimento="Eaí", nome="Ana")  # keyword args</code></pre>
<h2>*args e **kwargs</h2>
<p>Aceitam quantidade variável de argumentos posicionais e nomeados:</p>
<pre><code>def log(*args, **kwargs):
    print(args, kwargs)

log(1, 2, user="ana")   # (1, 2) {"user": "ana"}</code></pre>
<h2>Type hints (opcionais, mas recomendadas)</h2>
<pre><code>def soma(a: int, b: int) -&gt; int:
    return a + b</code></pre>
<h2>Docstrings</h2>
<pre><code>def area(r: float) -&gt; float:
    """Retorna a área de um círculo de raio r."""
    return 3.14159 * r * r</code></pre>`,
          [
            q("Palavra para definir função?", ["function", "fn", "def", "func"], 2, "def."),
            q("**kwargs captura…", ["Argumentos posicionais", "Keyword args como dict", "Erros", "Retornos"], 1, "Keyword args viram um dict."),
            q("Docstring vai onde?", ["Depois do def, fora", "Primeira linha do corpo (em aspas)", "Em comentários", "Fora do arquivo"], 1, "String com aspas triplas na primeira linha."),
          ]
        ),
        L("quiz-project", "Mini projeto: jogo de quiz",
          "Aplique tudo num jogo de verdade.",
          `<p>Vamos montar um quiz simples no terminal:</p>
<pre><code>perguntas = [
    {"q": "Capital da França?", "a": "paris"},
    {"q": "2 + 2?", "a": "4"},
    {"q": "Linguagem criada por Guido?", "a": "python"},
]

def rodar_quiz(perguntas):
    pontos = 0
    for i, item in enumerate(perguntas, start=1):
        resp = input(f"Q{i}. {item['q']}\\n&gt; ").strip().lower()
        if resp == item["a"]:
            print("✓ Correto!")
            pontos += 1
        else:
            print(f"✗ Errou. Resposta: {item['a']}")
    pct = round(100 * pontos / len(perguntas))
    print(f"\\nPontos: {pontos}/{len(perguntas)} ({pct}%)")

if __name__ == "__main__":
    rodar_quiz(perguntas)</code></pre>
<h2>O que você aprendeu</h2>
<ul>
  <li>Modelagem de dados com dicionários e listas.</li>
  <li>Iteração com <code>enumerate</code>.</li>
  <li>Ler input e comparar strings.</li>
  <li>Aritmética básica para pontuação.</li>
  <li>O idiom <code>if __name__ == "__main__"</code> — o entry point padrão em Python.</li>
</ul>
<div class="callout"><div class="ico">🏆</div><p>Mandou bem. Próximo passo: o curso Desenvolvedor Python (VIP) para POO, decorators, testes e APIs.</p></div>`,
          [
            q("O que if __name__ == '__main__' faz?", ["Roda só quando importado", "Roda só quando executado direto", "Roda sempre", "Define uma variável main"], 1, "Só quando executado como script."),
            q(".strip().lower() faz o quê?", ["Maiúsculas", "Tira espaços e deixa minúsculo", "Inverte", "Divide"], 1, "Remove espaços e coloca em minúsculas."),
            q("enumerate(itens, start=1) começa o índice em…", ["0", "1", "itens[0]", "Não dá para mudar"], 1, "start= define o índice inicial."),
          ]
        ),
      ],
    },

    // =================================================================
    // 5. JavaScript Avançado (VIP)
    // =================================================================
    {
      id: "advanced-js",
      title: "JavaScript Avançado",
      tagline: "Closures, async, classes, módulos — saia de júnior para sênior.",
      description: "Destrave as partes difíceis: escopo e closures, protótipos e classes, promises e async/await, módulos e padrões modernos.",
      level: "Intermediário",
      duration: "10h",
      theme: "theme-advjs",
      cover: "JS Avançado",
      vip: true,
      instructor: "Caio Mendes",
      lessons: [
        L("scope-closures", "Escopo e closures",
          "Por que closures são o superpoder do JS.",
          `<p>Escopo é a região de código onde uma variável é visível. O JavaScript tem três tipos: global, de função e de bloco (introduzido com <code>let</code>/<code>const</code> no ES2015). <code>var</code> só respeita escopo de função — um dos motivos para evitar.</p>
<pre><code>{
  let x = 1;       // escopo de bloco
  const y = 2;
}
console.log(x);   // ReferenceError</code></pre>
<h2>Closures</h2>
<p>Uma closure é uma função que <em>lembra</em> das variáveis do escopo em que foi criada, mesmo depois que esse escopo terminou:</p>
<pre><code>function contador() {
  let count = 0;
  return () =&gt; ++count;
}

const proximo = contador();
proximo();  // 1
proximo();  // 2</code></pre>
<p>Aquela arrow function interna "fecha sobre" <code>count</code>. Closures alimentam estado privado, memoização, event handlers e currying.</p>`,
          [
            q("Quais palavras-chave têm escopo de bloco?", ["var", "let e const", "As três", "function"], 1, "let e const. var é escopo de função."),
            q("Uma closure é…", ["Um try/catch", "Uma função que lembra do escopo onde nasceu", "Um loop", "Uma classe"], 1, "Funções mantêm as variáveis externas."),
            q("Closures são úteis para…", ["Estado privado", "Currying", "Memoização", "Todas as anteriores"], 3, "Tudo isso."),
          ]
        ),
        L("this", "A palavra-chave 'this'",
          "O recurso mais debatido do JavaScript — desmistificado.",
          `<p>O <code>this</code> depende de <em>como</em> uma função é chamada, não onde foi definida. Há quatro regras de binding, em ordem de prioridade:</p>
<ol>
  <li><strong>new binding</strong> — <code>new Foo()</code> seta <code>this</code> para o novo objeto.</li>
  <li><strong>Binding explícito</strong> — <code>.call(ctx)</code>, <code>.apply(ctx, args)</code>, <code>.bind(ctx)</code>.</li>
  <li><strong>Chamada de método</strong> — <code>obj.metodo()</code> seta <code>this</code> para <code>obj</code>.</li>
  <li><strong>Padrão</strong> — senão, <code>this</code> é o objeto global (ou <code>undefined</code> em modo estrito).</li>
</ol>
<h2>Arrow functions são diferentes</h2>
<p>Arrow functions não têm <code>this</code> próprio. Elas herdam do escopo onde foram definidas. Por isso são perfeitas para callbacks que precisam preservar <code>this</code>:</p>
<pre><code>class Timer {
  constructor() { this.count = 0; }
  start() {
    setInterval(() =&gt; { this.count++; }, 1000);
    //          ^ arrow preserva o this
  }
}</code></pre>`,
          [
            q("Arrow functions criam o próprio this?", ["Sim", "Não — herdam do escopo externo", "Só em classes", "Só como métodos"], 1, "Arrows não têm this próprio."),
            q("new Foo() — o this é…", ["global", "undefined", "a nova instância", "o protótipo"], 2, "A instância recém-criada."),
            q("Para forçar o this num valor específico ao chamar?", [".call / .apply / .bind", "this=", "usar new", "Impossível"], 0, "Esses são os métodos de binding explícito."),
          ]
        ),
        L("proto-classes", "Protótipos e classes",
          "O modelo de herança do JS e a sintaxe de classes por cima.",
          `<p>JavaScript é uma linguagem <em>baseada em protótipos</em>. Todo objeto tem um link oculto (<code>__proto__</code>) para outro objeto, o protótipo. A busca de propriedades sobe essa cadeia.</p>
<pre><code>class User {
  constructor(username) {
    this.username = username;
    this.vip = false;
  }
  saudar() { return \`Oi, \${this.username}\`; }
}

class VipUser extends User {
  constructor(username) {
    super(username);
    this.vip = true;
  }
  beneficio() { return "Acesso a todos os cursos!"; }
}

const u = new VipUser("ana");
u.saudar();    // "Oi, ana"
u.beneficio();</code></pre>
<h2>Por baixo do capô</h2>
<p>Classes são açúcar sintático sobre funções e protótipos. <code>class Foo {}</code> + <code>extends Bar</code> monta a cadeia de protótipos para você.</p>`,
          [
            q("class é açúcar sintático sobre…", ["Só objetos", "Protótipos e funções construtoras", "JSON", "Interfaces"], 1, "Protótipos."),
            q("Palavra para herdar?", ["inherits", "extends", "implements", "super"], 1, "extends."),
            q("super() serve para…", ["Fazer algo super rápido", "Chamar o construtor pai", "Definir método estático", "Adicionar getter"], 1, "Invocar o construtor pai."),
          ]
        ),
        L("async-callbacks", "Async: callbacks",
          "O jeito antigo — e por que evoluímos.",
          `<p>JavaScript é single-threaded. Qualquer coisa demorada (rede, disco, timers) é gerenciada pelo runtime e o resultado volta <em>depois</em>. Por anos, o jeito de lidar com "depois" era callback:</p>
<pre><code>function buscarUsuario(id, callback) {
  setTimeout(() =&gt; callback({ id, nome: "Ana" }), 500);
}

buscarUsuario(1, (u1) =&gt; {
  buscarUsuario(2, (u2) =&gt; {
    buscarUsuario(3, (u3) =&gt; {
      // callback hell 🪜
    });
  });
});</code></pre>
<h2>Os problemas</h2>
<ul>
  <li>Callbacks aninhados viram ilegíveis ("callback hell").</li>
  <li>Tratamento de erro se duplica em cada callback.</li>
  <li>Sem jeito limpo de compor trabalho assíncrono em paralelo.</li>
</ul>
<p>Essas dores levaram às Promises, no ES2015.</p>`,
          [
            q("JS é mono ou multi-thread?", ["Multi", "Single (com runtime assíncrono)", "Depende do navegador", "Sempre 2 threads"], 1, "Event loop single-threaded."),
            q("Callback hell é…", ["Uma biblioteca", "Aninhamento profundo de callbacks", "Erro de sintaxe", "Execução lenta"], 1, "Pirâmide do terror."),
            q("Em que ano as Promises entraram oficialmente?", ["ES5", "ES2015", "ES2018", "ES2022"], 1, "ES2015 alias ES6."),
          ]
        ),
        L("promises", "Promises",
          "Uma abstração melhor para 'um valor depois'.",
          `<p>Uma Promise é um objeto que representa uma operação assíncrona. Começa <em>pendente</em> e eventualmente vira <em>fulfilled</em> (com um valor) ou <em>rejected</em> (com um erro).</p>
<pre><code>const p = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve("pronto"), 500);
});

p.then(valor =&gt; console.log(valor))
 .catch(err =&gt; console.error(err))
 .finally(() =&gt; console.log("limpeza"));</code></pre>
<h2>Composição</h2>
<pre><code>Promise.all([p1, p2, p3])       // espera todas (falha rápido)
Promise.allSettled([p1, p2])    // espera todas, sem curto-circuito
Promise.race([p1, p2])          // primeira a resolver vence</code></pre>
<p>Promises se compõem em cadeias de <code>.then</code> — cada <code>.then</code> retorna uma nova promise.</p>`,
          [
            q("Estados de uma Promise?", ["aberto/fechado", "pending/fulfilled/rejected", "start/end", "success/fail"], 1, "Três estados."),
            q("Promise.all falha quando?", ["Qualquer rejeita", "Todas rejeitam", "Primeira resolve", "Nunca"], 0, "Uma rejeição rejeita o todo."),
            q("O que roda independente do resultado?", [".then", ".catch", ".finally", ".end"], 2, ".finally sempre roda."),
          ]
        ),
        L("async-await", "Async / Await",
          "Escreva código assíncrono que lê como síncrono.",
          `<p><code>async</code>/<code>await</code> é açúcar sobre promises — mas transforma a aparência do código async:</p>
<pre><code>async function carregarUsuario(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    if (!res.ok) throw new Error("Não encontrado");
    const user = await res.json();
    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}</code></pre>
<h2>Regras</h2>
<ul>
  <li><code>await</code> só funciona dentro de funções <code>async</code> (ou no topo de módulos).</li>
  <li>Uma função <code>async</code> sempre retorna uma Promise.</li>
  <li>Use <code>try/catch</code> para erros — mais limpo que <code>.catch</code>.</li>
</ul>
<h2>Paralelismo</h2>
<pre><code>// Sequencial (lento)
const a = await fetch("/a");
const b = await fetch("/b");

// Paralelo (rápido)
const [a2, b2] = await Promise.all([fetch("/a"), fetch("/b")]);</code></pre>`,
          [
            q("Funções async retornam…", ["Valor cru", "Uma Promise", "undefined", "null"], 1, "Sempre uma Promise."),
            q("Para rodar dois fetch em paralelo?", ["await nos dois", "await Promise.all([...])", "fetch.parallel()", "Promise.race"], 1, "Promise.all roda em paralelo."),
            q("Tratamento de erro com async/await usa…", ["try/catch", ".catch", "onError event", "só throw"], 0, "try/catch é idiomático."),
          ]
        ),
        L("fetch", "A API Fetch",
          "Fazer requisições HTTP pelo navegador.",
          `<p><code>fetch</code> é a forma padrão de falar com servidores HTTP no JavaScript.</p>
<pre><code>const res = await fetch("https://api.exemplo.com/users");
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
const users = await res.json();</code></pre>
<h2>POST com corpo</h2>
<pre><code>await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "ana", password: "segredo" }),
});</code></pre>
<h2>AbortController — cancelar requisição</h2>
<pre><code>const controller = new AbortController();
fetch("/lento", { signal: controller.signal });
controller.abort();  // cancela</code></pre>
<div class="callout"><div class="ico">⚠️</div><p><code>fetch</code> só rejeita em falha de rede. Um 404 ou 500 continua resolvendo — sempre cheque <code>res.ok</code>.</p></div>`,
          [
            q("fetch rejeita em HTTP 500?", ["Sim", "Não — cheque res.ok", "Só se status > 500", "Às vezes"], 1, "Ele resolve; você precisa checar res.ok."),
            q("Como enviar JSON?", ["JSON.parse no body", "body: JSON.stringify(...)", "só headers", "Usar XML"], 1, "Stringify no body; setar header."),
            q("Como cancelar um fetch?", ["fetch.cancel()", "AbortController", "signal.kill()", "Impossível"], 1, "AbortController + signal."),
          ]
        ),
        L("modules", "Módulos ES",
          "Divida seu código em arquivos do jeito certo.",
          `<p>Desde o ES2015, o JavaScript tem um sistema de módulos padrão. Divida cada funcionalidade no seu próprio arquivo:</p>
<pre><code>// math.js
export function soma(a, b) { return a + b; }
export const PI = 3.14159;
export default function area(r) { return PI * r * r; }

// app.js
import area, { soma, PI } from "./math.js";
console.log(soma(1, 2));  // 3</code></pre>
<h2>Named vs default exports</h2>
<p>Use named exports para a maioria das coisas — eles mantêm os nomes consistentes pelo código. Reserve o default para o export "principal" do módulo.</p>
<h2>Browsers e Node</h2>
<p>No navegador, carregue um módulo com <code>&lt;script type="module" src="app.js"&gt;</code>. No Node.js, coloque <code>"type": "module"</code> no <code>package.json</code>.</p>`,
          [
            q("Palavra para expor uma função?", ["share", "export", "public", "emit"], 1, "export."),
            q("Como marcar um script como módulo no HTML?", ["<script module>", "<script type=\"module\">", "<module>", "<script lang=\"esm\">"], 1, "Atributo type=\"module\"."),
            q("Import com {} usa…", ["default imports", "named imports", "CommonJS", "Tipos"], 1, "Named imports usam chaves."),
          ]
        ),
        L("array-methods", "Métodos de array de alta ordem",
          ".map, .filter, .reduce — nível mestre.",
          `<p>Esses três métodos são a base do JavaScript funcional. Dominá-los substitui incontáveis laços for.</p>
<pre><code>const users = [
  { nome: "Ana", vip: true, gasto: 1200 },
  { nome: "Bob", vip: false, gasto: 50 },
  { nome: "Cleo", vip: true, gasto: 500 },
];

// map — transformar cada item
const nomes = users.map(u =&gt; u.nome);

// filter — manter só o que bate
const soVip = users.filter(u =&gt; u.vip);

// reduce — agregar num valor único
const totalGasto = users.reduce((soma, u) =&gt; soma + u.gasto, 0);

// encadear
const totalVip = users
  .filter(u =&gt; u.vip)
  .reduce((s, u) =&gt; s + u.gasto, 0);</code></pre>
<h2>Outros métodos essenciais</h2>
<ul>
  <li><code>.find</code>, <code>.findIndex</code> — primeiro match.</li>
  <li><code>.some</code>, <code>.every</code> — checagem booleana.</li>
  <li><code>.flat</code>, <code>.flatMap</code> — achatar arrays aninhados.</li>
  <li><code>.sort((a,b) =&gt; a - b)</code> — sempre passe um comparador.</li>
</ul>`,
          [
            q("O segundo argumento do .reduce é…", ["O tamanho", "O valor inicial do acumulador", "Um filtro", "Um passo"], 1, "Valor inicial do acumulador."),
            q(".sort padrão compara como?", ["Numericamente", "Como strings", "Por tamanho", "Aleatório"], 1, "Como strings — sempre passe comparador para números."),
            q("Qual retorna booleano?", [".map", ".filter", ".every", ".reduce"], 2, ".every / .some retornam booleanos."),
          ]
        ),
        L("destructuring", "Destructuring e spread",
          "Sintaxe moderna para extrair e combinar valores.",
          `<p>Destructuring desempacota valores de arrays e objetos em variáveis:</p>
<pre><code>const user = { nome: "Ana", idade: 25, papel: "admin" };
const { nome, idade } = user;

const [primeiro, ...resto] = [1, 2, 3, 4];
// primeiro = 1, resto = [2, 3, 4]

// Defaults + renomear
const { titulo = "Sem título", meta: metadados = {} } = post;</code></pre>
<h2>Spread em arrays</h2>
<pre><code>const todos = [...grupo1, ...grupo2];
const copia = [...original];
Math.max(...[1, 8, 3]);   // 8</code></pre>
<h2>Spread em objetos</h2>
<pre><code>const atualizado = { ...user, papel: "dono" };  // sobrescreve papel
const unido = { ...defaults, ...overrides };</code></pre>
<h2>Parâmetros rest</h2>
<pre><code>function soma(...nums) {
  return nums.reduce((s, n) =&gt; s + n, 0);
}
soma(1, 2, 3);  // 6</code></pre>`,
          [
            q("{ ...a, x: 1 } resulta em?", ["Muta a", "Cópia de a com x sobrescrito", "Um novo array", "Erro"], 1, "Merge sem mutar."),
            q("Sintaxe de parâmetros rest?", ["function f(rest...)", "function f(...args)", "function f(args*)", "function f(#args)"], 1, "function f(...args)."),
            q("Renomear no destructuring?", ["{ nome = novoNome }", "{ nome: novoNome }", "{ nome as novoNome }", "Impossível"], 1, "{ nome: novoNome } renomeia."),
          ]
        ),
        L("error-handling", "Tratamento de erros",
          "Falhe com elegância e se recupere.",
          `<p>Todo programa real precisa tratar erros. A forma básica:</p>
<pre><code>try {
  const data = JSON.parse(texto);
  return data;
} catch (err) {
  console.error("Falha no parse:", err.message);
  return null;
} finally {
  // limpeza que sempre roda
}</code></pre>
<h2>Erros customizados</h2>
<pre><code>class ValidationError extends Error {
  constructor(campo, message) {
    super(message);
    this.campo = campo;
    this.name = "ValidationError";
  }
}

throw new ValidationError("email", "Formato inválido");</code></pre>
<h2>Erros em async</h2>
<pre><code>async function rodar() {
  try {
    const res = await fetch("/api");
    if (!res.ok) throw new Error(res.statusText);
  } catch (err) {
    notificarUsuario("Algo deu errado");
  }
}</code></pre>
<div class="callout"><div class="ico">🛡️</div><p>Nunca engula erros em silêncio. No mínimo, faça log. Usuários reais batem em todo caso de borda.</p></div>`,
          [
            q("O bloco finally roda…", ["Só em sucesso", "Só em erro", "Sempre", "Nunca"], 2, "Sempre — ótimo para limpeza."),
            q("Para lançar um erro próprio?", ["raise", "throw", "error()", "fail"], 1, "throw new Error(...)."),
            q("Erros customizados estendem?", ["Exception", "Error", "Throw", "Failure"], 1, "extends Error."),
          ]
        ),
        L("perf", "Dicas de performance",
          "Pequenas técnicas que mantêm o app rápido.",
          `<p>A maioria dos ganhos de performance vem de alguns hábitos básicos:</p>
<ul>
  <li><strong>Debounce</strong> eventos rápidos (input, scroll). Execute o handler só depois que o usuário pausa.</li>
  <li><strong>Throttle</strong> — limita a frequência de execução.</li>
  <li><strong>Cache</strong> cálculos caros com memoização.</li>
  <li><strong>Evite layout thrashing</strong> — agrupe leituras e escritas no DOM.</li>
  <li><strong>Use <code>requestAnimationFrame</code></strong> para atualizações visuais.</li>
  <li><strong>Mande menos JavaScript</strong> — lazy-load, code-split, remova libs sem uso.</li>
</ul>
<h2>Exemplo de debounce</h2>
<pre><code>function debounce(fn, ms = 250) {
  let t;
  return (...args) =&gt; {
    clearTimeout(t);
    t = setTimeout(() =&gt; fn(...args), ms);
  };
}

input.addEventListener("input", debounce(buscar, 300));</code></pre>
<h2>Meça, não chute</h2>
<p>Use a aba Performance do DevTools. Confie em números, não em intuição.</p>`,
          [
            q("Debounce vs throttle — debounce dispara…", ["A cada evento", "Uma vez por intervalo", "Uma vez após o último evento + pausa", "Nunca"], 2, "Depois que o usuário para de disparar."),
            q("Melhor lugar para medir performance de JS?", ["GPU", "Aba Performance do DevTools", "Histórico do navegador", "Impressora"], 1, "A aba Performance."),
            q("Callback para animação suave?", ["setInterval", "setTimeout", "requestAnimationFrame", "setImmediate"], 2, "rAF se alinha ao repaint do navegador."),
          ]
        ),
      ],
    },

    // =================================================================
    // 6. Desenvolvedor Python (VIP)
    // =================================================================
    {
      id: "python-developer",
      title: "Desenvolvedor Python",
      tagline: "Vá de scripts a sistemas em produção.",
      description: "POO, decorators, generators, testes, empacotamento e construção de APIs reais com Flask e FastAPI. O caminho de script kid a sênior.",
      level: "Intermediário",
      duration: "12h",
      theme: "theme-python",
      cover: "PyDev",
      vip: true,
      instructor: "Lucas Pereira",
      lessons: [
        L("toolchain", "Toolchain e ambientes virtuais",
          "Python profissional começa com ambientes isolados.",
          `<p>Um projeto Python sério isola suas dependências. Nunca instale bibliotecas do projeto globalmente. Use ambientes virtuais.</p>
<pre><code>$ python -m venv .venv
$ source .venv/bin/activate       # ou .venv\\Scripts\\activate no Windows
(.venv) $ pip install requests flask pytest
(.venv) $ pip freeze &gt; requirements.txt
(.venv) $ deactivate</code></pre>
<h2>Alternativas modernas</h2>
<ul>
  <li><strong>uv</strong> — gerenciador de pacotes ultra-rápido (em Rust).</li>
  <li><strong>Poetry</strong> — gerenciamento de dependências + empacotamento, com lock file.</li>
  <li><strong>Hatch</strong> — gerenciador moderno de projetos.</li>
</ul>
<h2>pyproject.toml</h2>
<p>O novo padrão para configurar projetos. Substitui <code>setup.py</code> + <code>requirements.txt</code> para a maioria dos projetos. Declare dependências, versão, entry points — tudo num TOML só.</p>`,
          [
            q("Por que usar venv?", ["Instalação mais rápida", "Isolar dependências por projeto", "Obrigatório no Python", "Fica bonito"], 1, "Cada projeto com suas próprias libs."),
            q("Arquivo para fixar dependências?", ["requirements.txt", "deps.py", "pip.ini", "libs.json"], 0, "requirements.txt (ou pyproject.toml)."),
            q("Arquivo de projeto padrão moderno?", ["setup.py", "pyproject.toml", "Pipfile", "package.json"], 1, "pyproject.toml."),
          ]
        ),
        L("data-structures", "Estruturas de dados avançadas",
          "collections, dataclasses, typing.",
          `<p>Além de listas e dicts, a biblioteca padrão do Python tem ganhos enormes:</p>
<h2>collections</h2>
<pre><code>from collections import Counter, defaultdict, deque, namedtuple

Counter("mississippi")          # {'i': 4, 's': 4, ...}

dd = defaultdict(list)
dd["users"].append("ana")       # sem KeyError

q = deque([1,2,3])              # append/pop O(1) nas duas pontas
q.appendleft(0)

Ponto = namedtuple("Ponto", ["x", "y"])
p = Ponto(3, 4)</code></pre>
<h2>dataclasses</h2>
<pre><code>from dataclasses import dataclass, field

@dataclass
class User:
    username: str
    vip: bool = False
    tags: list[str] = field(default_factory=list)

u = User("ana")
print(u)  # User(username='ana', vip=False, tags=[])</code></pre>
<p>dataclasses geram <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code> automaticamente. Perfeito para value objects.</p>`,
          [
            q("Melhor para contar ocorrências?", ["dict", "list", "Counter", "set"], 2, "collections.Counter."),
            q("Armadilha de default mutável — como corrigir?", ["Guard com None", "field(default_factory=...)", "tupla", "As opções 1 e 2"], 3, "Ambas funcionam; factory é idiomático em dataclasses."),
            q("@dataclass gera o quê?", ["sql", "__init__, __repr__, __eq__", "testes", "docstrings"], 1, "Init, repr, eq."),
          ]
        ),
        L("comprehensions", "Compreensões e generators",
          "Pipelines de dados pythônicos.",
          `<p>Compreensões de lista / dict / set são pipelines de dados concisos:</p>
<pre><code>quadrados = [n*n for n in range(10)]
indice = {u.id: u for u in users}
unicos = {c.strip().lower() for c in palavras}</code></pre>
<h2>Expressões geradoras</h2>
<p>Troque <code>[]</code> por <code>()</code> para obter uma sequência preguiçosa que não monta a lista inteira na memória:</p>
<pre><code>total = sum(n*n for n in range(10_000_000))   # sem lista gigante na memória</code></pre>
<h2>Funções geradoras com yield</h2>
<pre><code>def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

from itertools import islice
list(islice(fibonacci(), 10))  # [0,1,1,2,3,5,8,13,21,34]</code></pre>
<p>Generators são a ferramenta certa quando seu dado é enorme ou infinito — eles entregam um valor por vez.</p>`,
          [
            q("Expressão geradora usa?", ["[...]", "(...)", "{...}", "<...>"], 1, "Parênteses."),
            q("yield pausa a função e…", ["Retorna e descarta o estado", "Mantém o estado para a próxima chamada", "Lança erro", "Fecha arquivo"], 1, "Preserva o estado local."),
            q("Melhor para streaming de dados grandes?", ["Compreensão de lista", "Generator", "Dict", "Counter"], 1, "Generators não materializam todos os valores."),
          ]
        ),
        L("oop", "Python orientado a objetos",
          "Classes, herança, métodos dunder.",
          `<pre><code>class Curso:
    def __init__(self, titulo, vip=False):
        self.titulo = titulo
        self.vip = vip
        self._aulas = []

    def add_aula(self, aula):
        self._aulas.append(aula)

    def __len__(self):          # len(curso)
        return len(self._aulas)

    def __repr__(self):
        return f"Curso({self.titulo!r}, vip={self.vip})"

class CursoVip(Curso):
    def __init__(self, titulo):
        super().__init__(titulo, vip=True)</code></pre>
<h2>Ideias-chave</h2>
<ul>
  <li><code>self</code> é a instância. Sempre o primeiro parâmetro de métodos de instância.</li>
  <li>Métodos dunder (<code>__init__</code>, <code>__len__</code>, <code>__eq__</code>, <code>__iter__</code>) encaixam na sintaxe embutida.</li>
  <li>Nomear com underscore inicial (<code>_privado</code>) sinaliza "detalhe de implementação".</li>
  <li>Prefira composição a herança quando der.</li>
</ul>`,
          [
            q("Primeiro parâmetro de método de instância?", ["this", "self", "cls", "instance"], 1, "self por convenção."),
            q("__len__ customiza…", ["Print", "len(obj)", "Iteração", "Igualdade"], 1, "len() delega para __len__."),
            q("Acessar método do pai?", ["this.parent", "super().metodo()", "Classe.metodo()", "Todas menos a 1"], 3, "super() e Classe.metodo() funcionam."),
          ]
        ),
        L("decorators", "Decorators",
          "Funções que envelopam funções.",
          `<p>Um decorator é uma função que recebe uma função e devolve uma nova função. É como o Python adiciona logging, cache, auth e mais a código existente sem alterá-lo.</p>
<pre><code>import time
from functools import wraps

def timed(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = fn(*args, **kwargs)
        print(f"{fn.__name__} demorou {time.time() - inicio:.3f}s")
        return resultado
    return wrapper

@timed
def lento():
    time.sleep(1)
    return "pronto"

lento()  # lento demorou 1.001s</code></pre>
<h2>Decorators com argumentos</h2>
<pre><code>def retry(n=3):
    def deco(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            for i in range(n):
                try: return fn(*args, **kwargs)
                except Exception as e:
                    if i == n - 1: raise
        return wrapper
    return deco

@retry(n=5)
def buscar(): ...</code></pre>`,
          [
            q("O que o @wraps faz?", ["Otimiza velocidade", "Preserva nome/docstring da função envelopada", "Adiciona log", "Faz cache"], 1, "Preserva metadados."),
            q("Decorator é…", ["Uma classe", "Uma função que envelopa outra", "Um módulo", "Um teste"], 1, "Função de alta ordem."),
            q("Decorator com args precisa de…", ["1 nível", "2 closures aninhadas", "3 closures aninhadas", "Impossível"], 2, "Factory + decorator + wrapper."),
          ]
        ),
        L("iter-gen", "Iteradores e generators",
          "Como o `for` funciona por baixo.",
          `<p>Qualquer objeto com <code>__iter__</code> (que retorna um iterador) e <code>__next__</code> (que devolve o próximo valor ou lança <code>StopIteration</code>) pode ir num <code>for</code>.</p>
<pre><code>class Contador:
    def __init__(self, ate): self.n, self.ate = 0, ate
    def __iter__(self): return self
    def __next__(self):
        if self.n &gt;= self.ate: raise StopIteration
        self.n += 1
        return self.n

for x in Contador(3): print(x)  # 1, 2, 3</code></pre>
<h2>Generators simplificam isso</h2>
<pre><code>def contador(ate):
    n = 0
    while n &lt; ate:
        n += 1
        yield n</code></pre>
<h2>itertools</h2>
<p>O <code>itertools</code> do Python é uma biblioteca de combinadores: <code>chain</code>, <code>cycle</code>, <code>islice</code>, <code>takewhile</code>, <code>groupby</code>, <code>product</code>, <code>permutations</code>. Domine e seu código de dados encolhe muito.</p>`,
          [
            q("Quando um iterador esgota, ele lança…", ["EndOfInput", "StopIteration", "Exhausted", "None"], 1, "StopIteration."),
            q("Forma mais simples de construir um iterador?", ["Classe com dunders", "Função geradora", "As duas", "Só as embutidas"], 2, "Generators são concisos."),
            q("itertools.chain faz?", ["Concatena iteráveis", "Ordena", "Filtra", "Inverte"], 0, "Junta vários iteráveis."),
          ]
        ),
        L("files-json", "I/O de arquivo e JSON",
          "Ler, escrever, serializar.",
          `<pre><code># Texto
with open("notas.txt", "r", encoding="utf-8") as f:
    texto = f.read()

with open("out.txt", "w") as f:
    f.write("Olá")

# JSON
import json
dados = {"users": [{"nome": "Ana"}]}
with open("dados.json", "w") as f:
    json.dump(dados, f, indent=2)
with open("dados.json") as f:
    dados = json.load(f)</code></pre>
<h2>Por que 'with'?</h2>
<p>O <code>with</code> usa um gerenciador de contexto. Garante que o arquivo feche, mesmo se der exceção. Sempre use para arquivos, locks, conexões de banco.</p>
<h2>Paths</h2>
<pre><code>from pathlib import Path
p = Path.home() / ".config" / "app.json"
p.parent.mkdir(exist_ok=True)
p.write_text("{}", encoding="utf-8")</code></pre>
<p><code>pathlib</code> é o substituto moderno de <code>os.path</code>. Use.</p>`,
          [
            q("Jeito mais seguro de abrir arquivo?", ["open()", "with open() as f:", "file()", "os.open()"], 1, "O context manager fecha sozinho."),
            q("Módulo moderno de caminhos?", ["os.path", "pathlib", "glob", "fs"], 1, "pathlib.Path."),
            q("Round-trip de JSON usa…", ["json.dump / json.load", "pickle", "yaml", "csv"], 0, "dump escreve; load lê."),
          ]
        ),
        L("modules-packages", "Módulos e pacotes",
          "Estruture codebases reais.",
          `<p>Um <strong>módulo</strong> é um arquivo .py. Um <strong>pacote</strong> é uma pasta com <code>__init__.py</code> (ou namespace PEP 420).</p>
<pre><code>devstart/
  __init__.py
  auth/
    __init__.py
    login.py
    models.py
  courses/
    __init__.py
    data.py
  cli.py</code></pre>
<pre><code># devstart/auth/login.py
from .models import User

def autenticar(u, p): ...

# devstart/cli.py
from devstart.auth.login import autenticar</code></pre>
<h2>__init__.py</h2>
<p>Pode ser vazio, ou pode reexportar coisas para uma API pública bonita:</p>
<pre><code># devstart/auth/__init__.py
from .login import autenticar
from .models import User
__all__ = ["autenticar", "User"]</code></pre>
<h2>Absolutos vs relativos</h2>
<p>Dentro de um pacote, prefira imports relativos (<code>from .models import User</code>) para irmãos internos e absolutos para o que o usuário digita.</p>`,
          [
            q("Pacote é…", ["Um zip", "Uma pasta com __init__.py", "Uma classe", "Uma função"], 1, "Diretório de módulos."),
            q("Sintaxe de import relativo?", ["from . import x", "from ~ import x", "import :x", "imp x"], 0, "Os pontos indicam localização relativa."),
            q("__all__ é usado para…", ["Erros", "Controlar imports com * e API pública", "Testes", "Tipos"], 1, "Declara os nomes públicos do módulo."),
          ]
        ),
        L("pytest", "Testes com pytest",
          "Testes são o que deixa você dormir em paz.",
          `<p>Instale o pytest: <code>pip install pytest</code>. Crie <code>tests/test_math.py</code>:</p>
<pre><code>from meuapp.math import soma

def test_soma_positivo():
    assert soma(2, 3) == 5

def test_soma_negativo():
    assert soma(-1, -2) == -3

import pytest

def test_div_zero():
    with pytest.raises(ZeroDivisionError):
        1 / 0</code></pre>
<h2>Fixtures</h2>
<pre><code>@pytest.fixture
def user():
    return {"username": "ana", "vip": False}

def test_vip_flag(user):
    assert user["vip"] is False</code></pre>
<h2>Parametrize</h2>
<pre><code>@pytest.mark.parametrize("a,b,total", [(1,1,2), (2,3,5), (0,0,0)])
def test_soma(a, b, total):
    assert soma(a, b) == total</code></pre>
<p>Escreva testes <em>conforme codifica</em>, não só no fim. Mire em testes rápidos, focados e determinísticos.</p>`,
          [
            q("Arquivos de teste são nomeados?", ["*.test.py", "test_*.py ou *_test.py", "só tests.py", "Qualquer um"], 1, "Convenção do pytest."),
            q("@pytest.fixture fornece…", ["Um valor aleatório", "Setup reutilizável para testes", "Um logger", "Uma config"], 1, "Dependências injetadas."),
            q("Checar que uma exceção é lançada?", ["try/except", "with pytest.raises(...)", "assert raises", "1 e 2"], 1, "pytest.raises é o idiomático."),
          ]
        ),
        L("requests-apis", "Trabalhando com APIs",
          "Consuma serviços HTTP com requests.",
          `<pre><code>import requests

res = requests.get("https://api.exemplo.com/users", timeout=5)
res.raise_for_status()
users = res.json()

res = requests.post(
    "https://api.exemplo.com/login",
    json={"username": "ana", "password": "segredo"},
    headers={"Accept": "application/json"},
)</code></pre>
<h2>Sessions, retries e paginação</h2>
<pre><code>with requests.Session() as s:
    s.headers["Authorization"] = "Bearer ..."
    while url:
        r = s.get(url, timeout=5)
        r.raise_for_status()
        data = r.json()
        yield from data["items"]
        url = data.get("next")</code></pre>
<h2>httpx — a alternativa async</h2>
<p><code>httpx</code> é um cliente moderno com suporte async. Use quando precisar de concorrência ou HTTP/2.</p>`,
          [
            q("Disparar erro em 4xx/5xx?", ["res.ok()", "res.raise_for_status()", "res.error()", "res.check()"], 1, "raise_for_status()."),
            q("Enviar corpo JSON direto?", ["data=...", "json=...", "body=...", "payload=..."], 1, "json= serializa e seta header."),
            q("Cliente HTTP async?", ["requests", "httpx", "urllib3", "urllib"], 1, "httpx suporta async."),
          ]
        ),
        L("flask", "Introdução ao Flask",
          "Monte uma API web mínima.",
          `<pre><code># app.py
from flask import Flask, jsonify, request

app = Flask(__name__)
cursos = []

@app.get("/cursos")
def listar_cursos():
    return jsonify(cursos)

@app.post("/cursos")
def criar_curso():
    body = request.get_json()
    cursos.append(body)
    return jsonify(body), 201

if __name__ == "__main__":
    app.run(debug=True)</code></pre>
<p>Rode: <code>flask --app app run</code>. Acesse <code>http://localhost:5000/cursos</code>.</p>
<h2>Filosofia do Flask</h2>
<p>Flask é um micro-framework: core pequeno, muitas extensões (Flask-Login, Flask-SQLAlchemy, Flask-Migrate). Você monta o stack que quer.</p>
<h2>Quando usar Flask</h2>
<p>Ótimo para aprender, APIs pequenas, painéis admin e quando você quer controle fino. Para app maior, considere Django; para API moderna tipada, veja a próxima aula sobre FastAPI.</p>`,
          [
            q("Decorator para rota GET?", ["@app.get(...)", "@app.route(..., method='GET')", "Ambos funcionam", "@route"], 2, "Ambos; .get é mais novo/claro."),
            q("O que jsonify faz?", ["Parseia JSON", "Serializa em Response com headers corretos", "Faz JSONP", "Minifica JSON"], 1, "Empacota dict/list numa Response."),
            q("Flask é descrito como…", ["Framework full-stack", "Micro-framework", "ORM", "Servidor web"], 1, "Micro: core pequeno, muitas extensões."),
          ]
        ),
        L("fastapi", "Introdução ao FastAPI",
          "APIs tipadas, assíncronas e prontas para produção.",
          `<pre><code># main.py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Curso(BaseModel):
    titulo: str
    vip: bool = False

db: list[Curso] = []

@app.get("/cursos", response_model=list[Curso])
def listar_cursos():
    return db

@app.post("/cursos", response_model=Curso, status_code=201)
def criar_curso(curso: Curso):
    db.append(curso)
    return curso</code></pre>
<p>Rode: <code>uvicorn main:app --reload</code>. Documentação automática em <code>/docs</code> — uma Swagger UI gerada a partir dos seus tipos.</p>
<h2>Por que o FastAPI vence</h2>
<ul>
  <li>Type hints fazem validação (via Pydantic).</li>
  <li>OpenAPI + docs interativas automáticas.</li>
  <li><code>async</code> nativo para I/O rápido.</li>
  <li>Injeção de dependência para auth, sessão de banco etc.</li>
</ul>
<div class="callout"><div class="ico">🚀</div><p>Para novas APIs Python em 2025, FastAPI costuma ser o padrão certo.</p></div>`,
          [
            q("Validação no FastAPI vem de?", ["Django", "Pydantic", "Marshmallow", "Zod"], 1, "Modelos Pydantic."),
            q("URL padrão das auto-docs?", ["/api", "/docs", "/swagger", "/help"], 1, "/docs (Swagger UI)."),
            q("Servidor para rodar FastAPI?", ["só gunicorn", "uvicorn", "apache", "iis"], 1, "uvicorn é o ASGI padrão."),
          ]
        ),
      ],
    },

    // =================================================================
    // 7. Desenvolvimento Web Fullstack (VIP)
    // =================================================================
    {
      id: "fullstack",
      title: "Desenvolvimento Web Fullstack",
      tagline: "Tudo para construir e lançar um app web moderno.",
      description: "Do básico de HTTP a frontends em React, backends Node/Express, bancos de dados, auth e deploy. O mapa completo de um produto web.",
      level: "Avançado",
      duration: "16h",
      theme: "theme-fullstack",
      cover: "Fullstack",
      vip: true,
      instructor: "Marina Costa",
      lessons: [
        L("how-web-works", "Como a web funciona",
          "HTTP, DNS, TCP, o pipeline de renderização do navegador.",
          `<p>Antes de escrever código, entenda o encanamento. Uma carga de página envolve:</p>
<ol>
  <li><strong>DNS</strong> — seu navegador resolve <code>devstart.up</code> para um IP.</li>
  <li><strong>TCP + TLS</strong> — uma conexão segura é aberta.</li>
  <li><strong>Requisição HTTP</strong> — <code>GET /</code> com headers (cookies, user-agent etc.).</li>
  <li><strong>Servidor</strong> — roteia, roda seu código, consulta bancos.</li>
  <li><strong>Resposta</strong> — HTML, JSON ou redirect, com headers.</li>
  <li><strong>Parsing pelo navegador</strong> — monta DOM e CSSOM, busca CSS/JS, renderiza.</li>
</ol>
<h2>Códigos de status</h2>
<ul>
  <li>2xx — sucesso (200 OK, 201 Created, 204 No Content).</li>
  <li>3xx — redirect (301 permanente, 302 encontrado).</li>
  <li>4xx — erros de cliente (400, 401, 403, 404, 409, 422, 429).</li>
  <li>5xx — erros de servidor (500, 502, 503).</li>
</ul>`,
          [
            q("DNS traduz?", ["HTML", "Domínio → IP", "JS", "URLs"], 1, "Nomes em endereços IP."),
            q("404 significa?", ["OK", "Erro de servidor", "Não encontrado", "Proibido"], 2, "Recurso não encontrado."),
            q("Qual é um redirect?", ["200", "301", "404", "500"], 1, "301 redireciona permanentemente."),
          ]
        ),
        L("frontend-backend", "Frontend vs backend",
          "Dois mundos, um produto.",
          `<p>Um app web tem duas metades:</p>
<h2>Frontend</h2>
<p>Roda no navegador. Feito com HTML/CSS/JS (geralmente com frameworks como React, Vue, Svelte). Cuida de: renderização, interação, chamadas a APIs, estado de UI.</p>
<h2>Backend</h2>
<p>Roda num servidor. Node, Python, Go, Ruby, Rust etc. Cuida de: autenticação, regras de negócio, persistência, integrações externas, segurança.</p>
<h2>A fronteira da API</h2>
<p>Entre os dois fica uma API HTTP — normalmente JSON sobre REST ou GraphQL. O frontend pergunta "o que mostro?" e "faça isso". O backend responde com dados ou confirmação.</p>
<div class="callout"><div class="ico">🧩</div><p>Como dev fullstack você não precisa ser igualmente forte nos dois lados — mas precisa entender a fronteira para projetar bem.</p></div>`,
          [
            q("Onde a regra de negócio normalmente mora?", ["Frontend", "Backend", "Navegador", "DNS"], 1, "Backend é dono da lógica e dos dados."),
            q("APIs REST geralmente usam?", ["XML", "JSON", "CSV", "YAML"], 1, "JSON é a língua franca."),
            q("Frameworks de frontend incluem?", ["React, Vue, Svelte", "Rails, Django", "Flask, Express", "Postgres"], 0, "Esses rodam no navegador."),
          ]
        ),
        L("semantic-html", "HTML semântico moderno",
          "Use a tag certa para cada significado.",
          `<p>O HTML moderno tem dezenas de tags para significado, não só visual:</p>
<pre><code>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;,
&lt;aside&gt;, &lt;footer&gt;, &lt;figure&gt;, &lt;figcaption&gt;,
&lt;time&gt;, &lt;mark&gt;, &lt;details&gt;, &lt;summary&gt;, &lt;dialog&gt;</code></pre>
<h2>Por que semântica importa</h2>
<ul>
  <li><strong>Acessibilidade</strong> — screen readers usam landmarks para navegar.</li>
  <li><strong>SEO</strong> — buscadores entendem a estrutura.</li>
  <li><strong>Recursos do navegador</strong> — <code>&lt;dialog&gt;</code> é um modal nativo; <code>&lt;details&gt;</code> é um widget de expansão. Grátis.</li>
  <li><strong>Manutenção</strong> — dá para ler o esqueleto da página num relance.</li>
</ul>
<h2>Divs também são ok</h2>
<p>Nem tudo precisa de uma tag semântica. Use <code>&lt;div&gt;</code> quando não existir significado mais claro. Só não faça sopa de divs quando há tag certa.</p>`,
          [
            q("Quantas vezes <main> deve aparecer por página?", ["0", "1", "Quantas precisar", "No mínimo 2"], 1, "Exatamente um main por página."),
            q("<details> + <summary> te dá…", ["Um modal", "Widget expansível nativo", "Tooltip", "Nada"], 1, "Expansão sem JS."),
            q("Quem se beneficia de HTML semântico?", ["Screen readers", "Buscadores", "Outros devs", "Todos"], 3, "Todo mundo."),
          ]
        ),
        L("css-architecture", "Arquitetura de CSS",
          "BEM, utility-first e design tokens.",
          `<p>Em projetos pequenos, qualquer CSS resolve. Em produtos grandes, o caos se instala. Três abordagens que escalam:</p>
<h2>BEM (Block-Element-Modifier)</h2>
<pre><code>.card { }
.card__titulo { }
.card__titulo--grande { }</code></pre>
<p>Convenções de nomenclatura dão sentido e escopo claros. Muito legível; pode ficar verboso.</p>
<h2>Utility-first (estilo Tailwind)</h2>
<pre><code>&lt;button class="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600"&gt;Comprar&lt;/button&gt;</code></pre>
<p>Sem classes customizadas — compõe primitivas pequenas. Muito ágil depois que se acostuma.</p>
<h2>Variáveis CSS (design tokens)</h2>
<pre><code>:root {
  --cor-marca: #7c5cff;
  --space-md: 16px;
  --radius: 12px;
}</code></pre>
<p>Defina seu design system em variáveis. Todo componente puxa delas. Trocar a cor da marca é uma linha.</p>`,
          [
            q("BEM significa?", ["Block Element Module", "Block Element Modifier", "Best Enterprise Method", "Brand Element Map"], 1, "Block-Element-Modifier."),
            q("Framework utility-first?", ["Bootstrap", "Tailwind CSS", "Material UI", "Bulma"], 1, "Tailwind."),
            q("Design tokens moram em?", ["Arquivos JS", "Variáveis CSS (ou JSON)", "Testes", "Atributos HTML"], 1, "Variáveis CSS são o padrão."),
          ]
        ),
        L("js-for-fs", "JavaScript para fullstack",
          "O dialeto de JS que você vai escrever todo dia.",
          `<p>Além dos fundamentos, esses recursos dominam JS em produção:</p>
<ul>
  <li><strong>Módulos</strong> com <code>import</code>/<code>export</code>.</li>
  <li><strong>async/await</strong> em todo I/O.</li>
  <li><strong>Destructuring</strong>, <strong>spread</strong>, <strong>rest</strong>.</li>
  <li><strong>Optional chaining</strong> (<code>user?.endereco?.cidade</code>) e <strong>nullish coalescing</strong> (<code>x ?? "padrão"</code>).</li>
  <li><strong>Métodos de Array/Object</strong> — map, filter, reduce, Object.entries.</li>
  <li><strong>Template literals</strong>.</li>
</ul>
<h2>Lint e formatação</h2>
<p>Todo time usa ESLint + Prettier. Configure uma vez, comite a config, pare de discutir sobre ponto e vírgula.</p>
<h2>TypeScript</h2>
<p>Em times modernos, JS puro é raro. TypeScript adiciona um sistema de tipos que pega bugs antes do runtime. A curva é pequena; o retorno é enorme. Aprenda assim que estiver confortável com JS.</p>`,
          [
            q("Operador optional chaining?", [".", "?.", "??", "=>"], 1, "?. acessa propriedades aninhadas com segurança."),
            q("?? difere de || porque…", ["É mais rápido", "Só dispara em null/undefined", "É para números", "Deprecado"], 1, "|| dispara em qualquer falsy; ?? só em null/undefined."),
            q("Superset tipado de JS?", ["Flow", "TypeScript", "CoffeeScript", "Dart"], 1, "TypeScript é o padrão da indústria."),
          ]
        ),
        L("react-intro", "Introdução ao React",
          "Componentes como unidade de UI.",
          `<p>React é uma biblioteca para construir UIs a partir de componentes. Cada componente é uma função que retorna JSX (sintaxe parecida com HTML dentro do JS):</p>
<pre><code>function Botao({ label, onClick }) {
  return (
    &lt;button className="btn primary" onClick={onClick}&gt;
      {label}
    &lt;/button&gt;
  );
}

function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Olá&lt;/h1&gt;
      &lt;Botao label="Clique" onClick={() =&gt; alert("!")} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
<h2>Por que React?</h2>
<ul>
  <li>Ecosistema gigante (Next.js, Remix, inúmeras libs de componente).</li>
  <li>Padrão da indústria — quase toda vaga frontend exige.</li>
  <li>Declarativo: você diz como a UI deve ficar para um estado; o React atualiza o DOM com eficiência.</li>
</ul>`,
          [
            q("Componentes React são…", ["Só classes", "Funções (ou classes)", "Templates", "Arquivos CSS"], 1, "React moderno usa componentes de função."),
            q("JSX é…", ["Formato de imagem", "Sintaxe parecida com HTML dentro do JS", "Um compilador", "Um runtime"], 1, "Transpila para chamadas React.createElement."),
            q("Meta-framework React mais popular?", ["Gatsby", "Next.js", "Nuxt", "Svelte"], 1, "Next.js."),
          ]
        ),
        L("react-state", "Componentes, props e state",
          "Props descem, state vive nos componentes.",
          `<p><strong>Props</strong> são entradas de um componente. <strong>State</strong> é dado interno, mutável, gerenciado por hooks.</p>
<pre><code>import { useState, useEffect } from "react";

function Contador({ inicio = 0 }) {
  const [count, setCount] = useState(inicio);

  useEffect(() =&gt; {
    document.title = \`Contador: \${count}\`;
  }, [count]);

  return (
    &lt;div&gt;
      &lt;p&gt;Contador: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+1&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
<h2>Hooks chave</h2>
<ul>
  <li><code>useState</code> — estado local.</li>
  <li><code>useEffect</code> — efeitos colaterais (fetch, subscriptions).</li>
  <li><code>useMemo</code> — memoiza cálculos caros.</li>
  <li><code>useCallback</code> — identidade estável de função.</li>
  <li><code>useRef</code> — mantém valor mutável ou referência ao DOM.</li>
</ul>`,
          [
            q("Props fluem…", ["De cima pra baixo a partir do filho", "Do pai para o filho", "De lado", "Em lugar nenhum"], 1, "Pai → filho."),
            q("Hook para efeitos colaterais?", ["useState", "useEffect", "useCallback", "useRef"], 1, "useEffect roda no render/deps."),
            q("Setter de useState?", ["O valor em si", "Uma função que atualiza o estado", "Uma ref", "Um dispatcher"], 1, "setState(novoValor)."),
          ]
        ),
        L("routing", "Roteamento em SPAs",
          "Faça single-page apps parecerem multi-páginas.",
          `<p>Um Single-Page App carrega um HTML e o JavaScript troca a tela conforme a URL muda — sem reload completo. Para isso precisa de um router.</p>
<h2>React Router</h2>
<pre><code>import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

&lt;BrowserRouter&gt;
  &lt;nav&gt;
    &lt;Link to="/"&gt;Início&lt;/Link&gt;
    &lt;Link to="/cursos"&gt;Cursos&lt;/Link&gt;
  &lt;/nav&gt;
  &lt;Routes&gt;
    &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
    &lt;Route path="/cursos/:id" element={&lt;CoursePage /&gt;} /&gt;
    &lt;Route path="*" element={&lt;NotFound /&gt;} /&gt;
  &lt;/Routes&gt;
&lt;/BrowserRouter&gt;</code></pre>
<h2>Roteamento baseado em arquivos</h2>
<p>Next.js, Remix, SvelteKit e Nuxt usam pastas. <code>pages/cursos/[id].jsx</code> automaticamente vira <code>/cursos/123</code>. Menos boilerplate.</p>`,
          [
            q("SPA significa?", ["Static Page App", "Single-Page Application", "Server Page App", "Simple Page Admin"], 1, "Um HTML; JS troca as telas."),
            q("Next.js usa qual estilo de roteamento?", ["Config manual", "Baseado em arquivos", "Config em XML", "Driven por banco"], 1, "Roteamento por sistema de arquivos."),
            q("Rota catch-all?", ["/:any", "/*", "*", "/..."], 2, "Curinga `*`."),
          ]
        ),
        L("node-basics", "Básico de Node.js",
          "JavaScript no servidor.",
          `<p>Node.js roda JavaScript fora do navegador. Vem com uma lib padrão para arquivos, HTTP, streams, e tem o maior registro de pacotes do mundo (npm).</p>
<pre><code>$ node --version
v20.10.0
$ npm init -y
$ npm install express
$ node server.js</code></pre>
<h2>Servidor HTTP hello world</h2>
<pre><code>import http from "node:http";

const server = http.createServer((req, res) =&gt; {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ola: "mundo" }));
});

server.listen(3000);</code></pre>
<h2>npm</h2>
<ul>
  <li><code>npm install x</code> — adiciona dependência.</li>
  <li><code>npm run dev</code> — roda script do <code>package.json</code>.</li>
  <li><code>package-lock.json</code> — trava versões para instalações reprodutíveis.</li>
</ul>`,
          [
            q("Node.js roda qual linguagem?", ["Python", "JavaScript", "Go", "Java"], 1, "JS no servidor."),
            q("npm instala pacotes em?", ["./lib/", "./node_modules/", "global", "./packages/"], 1, "node_modules."),
            q("O lock file garante?", ["Scans de segurança", "Instalações reprodutíveis", "Minificação", "Runtime mais rápido"], 1, "Versões exatas fixadas."),
          ]
        ),
        L("express", "APIs REST com Express",
          "O clássico framework de API em Node.",
          `<pre><code>import express from "express";
const app = express();
app.use(express.json());

const cursos = [];

app.get("/cursos", (req, res) =&gt; res.json(cursos));

app.post("/cursos", (req, res) =&gt; {
  const curso = { id: Date.now(), ...req.body };
  cursos.push(curso);
  res.status(201).json(curso);
});

app.use((err, req, res, next) =&gt; {
  console.error(err);
  res.status(500).json({ error: "Interno" });
});

app.listen(3000);</code></pre>
<h2>Middleware</h2>
<p>O Express é construído em torno de middleware — funções que rodam antes dos handlers. Auth, log, CORS, parse de body, rate limit — tudo é middleware.</p>
<pre><code>app.use((req, res, next) =&gt; {
  console.log(req.method, req.url);
  next();
});</code></pre>`,
          [
            q("Assinatura de middleware Express?", ["(req, res)", "(req, res, next)", "(ctx)", "() => {}"], 1, "(req, res, next)."),
            q("Retornar JSON?", ["res.send({...})", "res.json({...})", "res.body", "res.out()"], 1, "res.json seta o content-type."),
            q("Parsear JSON do body?", ["Built-in", "app.use(express.json())", "Middleware 'bodyParser'", "As duas 2 e 3"], 3, "Ambos funcionam; express.json é built-in."),
          ]
        ),
        L("databases", "Bancos: SQL vs NoSQL",
          "Escolha a ferramenta certa para seus dados.",
          `<h2>SQL (relacional)</h2>
<p>Postgres, MySQL, SQLite. Tabelas com schemas estritos. Joins. Transações ACID. Ótimo para: a maioria dos apps, qualquer coisa com relacionamentos, qualquer coisa que você não pode perder.</p>
<pre><code>SELECT u.username, COUNT(p.id) AS progress_count
FROM users u
LEFT JOIN progress p ON p.user_id = u.id
GROUP BY u.username;</code></pre>
<h2>NoSQL</h2>
<p>MongoDB (documento), Redis (chave-valor), DynamoDB, Firestore. Schemas flexíveis, tradeoffs diferentes. Ótimo para: carga alta de escrita, cache, dados não estruturados.</p>
<pre><code>db.users.find({ vip: true }).sort({ createdAt: -1 })</code></pre>
<h2>Recomendação padrão</h2>
<p>Comece com Postgres. É grátis, sólido, tem colunas JSON (dá para misturar relacional e documento) e escala além do que a maioria das startups precisa.</p>
<h2>ORMs</h2>
<p>Prisma (TS), Drizzle (TS), TypeORM, SQLAlchemy (Python). Traduzem código em SQL e vice-versa, e mantêm seu schema versionado.</p>`,
          [
            q("Banco padrão para a maioria dos apps?", ["Mongo", "Postgres", "Cassandra", "Só SQLite"], 1, "Postgres é o padrão seguro."),
            q("ACID significa?", ["Um sabor de SQL", "Atomic, Consistent, Isolated, Durable", "Um recurso NoSQL", "Um ORM"], 1, "Garantias de transação."),
            q("ORM traduz?", ["CSS em JS", "Código em SQL e vice-versa", "SQL em HTML", "Nada"], 1, "Object-Relational Mapping."),
          ]
        ),
        L("auth-jwt", "Autenticação e JWT",
          "Quem é esse usuário e o que ele pode fazer?",
          `<p>Duas peças: <strong>autenticação</strong> (quem é você) e <strong>autorização</strong> (o que você pode fazer).</p>
<h2>Guarda de senhas</h2>
<p><strong>Nunca</strong> guarde senhas em texto puro. Use <code>bcrypt</code>, <code>argon2</code> ou <code>scrypt</code>. São funções lentas feitas para resistir a brute force.</p>
<pre><code>import bcrypt from "bcryptjs";
const hash = await bcrypt.hash(password, 12);
const ok = await bcrypt.compare(password, user.hash);</code></pre>
<h2>Sessions vs JWT</h2>
<ul>
  <li><strong>Sessions</strong> (no servidor): um cookie guarda um ID aleatório. O servidor guarda os dados. Simples, revogável, funciona muito bem.</li>
  <li><strong>JWT</strong>: um token assinado carrega as claims do usuário. Stateless, ótimo para APIs entre serviços. Cuidado: difícil revogar no meio.</li>
</ul>
<pre><code>import jwt from "jsonwebtoken";
const token = jwt.sign({ userId: 42 }, process.env.JWT_SECRET, { expiresIn: "1h" });
const payload = jwt.verify(token, process.env.JWT_SECRET);</code></pre>
<div class="callout"><div class="ico">🔒</div><p>Guarde JWTs em cookies HttpOnly e Secure — não no localStorage. O localStorage é lido por qualquer JS na página, incluindo scripts injetados.</p></div>`,
          [
            q("Hash seguro para senha?", ["SHA-256", "bcrypt ou argon2", "MD5", "Texto puro"], 1, "Hashes lentos resistem a brute force."),
            q("JWT significa?", ["JSON Web Token", "Java Web Tool", "JavaScript Wrap Type", "JSON Wizard"], 0, "JSON Web Token."),
            q("Lugar seguro para guardar JWT?", ["localStorage", "Cookie HttpOnly", "Query da URL", "Variável local"], 1, "Cookie HttpOnly e Secure."),
          ]
        ),
        L("deploy", "Deploy",
          "Coloque na internet.",
          `<h2>Frontends estáticos</h2>
<p>Vercel, Netlify, Cloudflare Pages — push no Git, URL de produção com HTTPS e CDN. Planos gratuitos dão conta de muita coisa.</p>
<h2>Backends</h2>
<p>Fly.io, Render, Railway, AWS, GCP. Deploys em Docker são o padrão.</p>
<h2>Dockerfile mínimo</h2>
<pre><code>FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD ["node", "server.js"]</code></pre>
<h2>Variáveis de ambiente</h2>
<p>Nunca comite segredos. Use <code>.env</code> local (no gitignore) e o secret manager da plataforma em produção.</p>
<h2>CI/CD</h2>
<p>GitHub Actions é o padrão. Cada PR: lint, testes, type-check, preview deploy. Cada merge na main: deploy de produção.</p>`,
          [
            q("Nunca comite…", ["Testes", "Segredos / API keys", "Docs", "Código"], 1, "Segredos moram em .env / secret manager."),
            q("Hosts de frontend estático?", ["Vercel, Netlify, Cloudflare", "Postgres, Redis", "Kubernetes", "Só SSH"], 0, "Hosts estáticos com CDN."),
            q("CI/CD geralmente roda em?", ["Cada push / PR", "Uma vez por ano", "Nunca", "Só na main"], 0, "Em cada PR ou push."),
          ]
        ),
        L("capstone", "Projeto final: construindo um SaaS",
          "Juntando tudo — e o que vem depois.",
          `<p>Um produto SaaS real reúne todas as habilidades do curso:</p>
<ul>
  <li>Uma landing page (como este site!) — HTML semântico, CSS responsivo, animações.</li>
  <li>Autenticação — cadastro, login, senhas hasheadas, sessions ou JWTs.</li>
  <li>Um painel — dados por usuário, progresso, configurações.</li>
  <li>Uma API — endpoints tipados, validação, tratamento de erro.</li>
  <li>Um banco — users, cursos, progresso. Migrations versionadas no git.</li>
  <li>Pagamentos — Stripe Checkout + webhooks, ou VIP manual via admin.</li>
  <li>Painel admin — usuários, busca, permissões.</li>
  <li>Deploy — CI/CD, variáveis de ambiente, monitoramento.</li>
  <li>Observabilidade — logs, erros (Sentry), monitor de uptime.</li>
</ul>
<h2>Próximos passos</h2>
<ol>
  <li>Entregue um projeto pequeno de ponta a ponta. Não engenheire demais.</li>
  <li>Aprenda TypeScript — o teto chega sem ele.</li>
  <li>Escolha uma linguagem de backend e aprofunde (Node + TS, ou Python + FastAPI, ou Go).</li>
  <li>Contribua com open source. Leia código dos outros.</li>
  <li>Construa em público. Compartilhe o que aprende.</li>
</ol>
<div class="callout"><div class="ico">🎓</div><p>Agora você tem o mapa completo. O que resta é continuar entregando.</p></div>`,
          [
            q("Melhor estratégia depois de um tutorial?", ["Ver mais 10", "Entregar um projeto real (pequeno)", "Decorar docs", "Nada"], 1, "Entregar ensina o que tutorial não consegue."),
            q("Observabilidade significa?", ["Design de UI", "Monitorar logs/métricas/erros", "Um banco", "Um recurso de CSS"], 1, "Logs, métricas, traces."),
            q("Stripe é um…", ["Banco de dados", "Plataforma de pagamentos", "Framework", "Linter"], 1, "Processador de pagamentos."),
          ]
        ),
      ],
    },

    // =================================================================
    // 8. Design UI/UX (VIP)
    // =================================================================
    {
      id: "ui-ux",
      title: "Design UI/UX",
      tagline: "Desenhe produtos que parecem fáceis e ficam lindos.",
      description: "Princípios de experiência do usuário, arquitetura da informação, design visual, cor, tipografia e como construir um design system que escala.",
      level: "Intermediário",
      duration: "8h",
      theme: "theme-uiux",
      cover: "UI/UX",
      vip: true,
      instructor: "Ana Ribeiro",
      lessons: [
        L("what-is-ux", "O que é UX?",
          "Experiência é tudo que o usuário vê, sente e lembra.",
          `<p>UX (User Experience / Experiência do Usuário) é a soma de toda interação que uma pessoa tem com o seu produto — antes, durante e depois do uso. Não é só o visual; é o fluxo de cadastro, as mensagens de erro, o tempo de carregamento, o e-mail de confirmação, o tom de voz.</p>
<h2>UX vs UI</h2>
<ul>
  <li><strong>UX</strong> — como isso <em>funciona</em> e <em>parece usar</em>?</li>
  <li><strong>UI</strong> — como isso <em>fica na tela</em>?</li>
</ul>
<p>UI boa sem UX é um app bonito que ninguém consegue usar. UX boa sem UI é um fluxo bem desenhado que parece uma intranet de 1998. Precisa dos dois.</p>
<h2>Cinco pilares de boa UX (Nielsen)</h2>
<ol>
  <li><strong>Útil</strong> — resolve um problema real.</li>
  <li><strong>Usável</strong> — a pessoa consegue entender.</li>
  <li><strong>Encontrável</strong> — as coisas estão onde deveriam estar.</li>
  <li><strong>Confiável</strong> — inspira credibilidade, parece polido.</li>
  <li><strong>Acessível</strong> — funciona para todo mundo.</li>
</ol>`,
          [
            q("UX difere de UI porque…", ["UX é só visual", "UX cobre toda a experiência; UI é a camada visual", "São iguais", "UI é mais amplo"], 1, "UX = experiência inteira."),
            q("Acessibilidade significa…", ["Carregamento rápido", "Funciona para todos, inclusive pessoas com deficiência", "Só mobile", "Barato"], 1, "Design inclusivo."),
            q("Encontrável se refere a…", ["Contratação", "Conseguir localizar informação", "Só SEO", "Resultados de busca"], 1, "A pessoa consegue achar o que precisa?"),
          ]
        ),
        L("user-research", "Pesquisa com usuários",
          "Desenhe para pessoas reais — não imaginárias.",
          `<p>Antes de desenhar qualquer coisa, entenda quem vai usar. Métodos de pesquisa caem em dois campos:</p>
<h2>Qualitativa (o porquê)</h2>
<ul>
  <li><strong>Entrevistas</strong> — conversas abertas com 5 a 8 pessoas.</li>
  <li><strong>Testes de usabilidade</strong> — ver pessoas tentando tarefas no seu protótipo.</li>
  <li><strong>Diários</strong> — pessoas registram momentos ao longo de dias/semanas.</li>
</ul>
<h2>Quantitativa (o quê)</h2>
<ul>
  <li><strong>Pesquisas</strong> — amostras grandes, significância estatística.</li>
  <li><strong>Analytics</strong> — o que as pessoas de fato fazem.</li>
  <li><strong>Testes A/B</strong> — duas versões, mede qual vence.</li>
</ul>
<h2>Personas e jobs-to-be-done</h2>
<p>Transforme os achados em representações leves: "Alex, 24, autodidata em dev, estuda à noite depois do trabalho, cansa de cursos que não aprofundam." JTBD reformula assim: "Quando chego cansado em casa, quero aprender uma habilidade palpável em 30 minutos para sentir que progredi."</p>`,
          [
            q("Teste A/B é…", ["Qualitativo", "Quantitativo", "Arte", "Teste de usabilidade"], 1, "Duas variantes, medida numérica."),
            q("Quantas pessoas para boa insight qualitativa?", ["1", "5–8", "500+", "100"], 1, "5 expõem 85% dos problemas (Nielsen)."),
            q("Personas são…", ["Usuários reais específicos", "Representações compostas de grupos", "Bots", "Stakeholders"], 1, "Padrões destilados da pesquisa."),
          ]
        ),
        L("ia", "Arquitetura da informação",
          "Como o conteúdo está organizado define como ele é usado.",
          `<p>Arquitetura da Informação (AI) é a estrutura do seu produto: o que vai onde, como é agrupado, como você nomeia as coisas. Boa AI torna a navegação invisível. AI fraca transforma cada tarefa numa caça ao tesouro.</p>
<h2>Técnicas</h2>
<ul>
  <li><strong>Card sorting</strong> — pessoas agrupam itens em categorias que fazem sentido para elas.</li>
  <li><strong>Tree testing</strong> — valida se as pessoas acham itens específicos na hierarquia proposta.</li>
  <li><strong>Sitemaps</strong> — diagrama visual de cada página e relações.</li>
</ul>
<h2>Nomes importam</h2>
<p>"Ajustes" vs "Preferências" vs "Configurações" — cada um manda um sinal diferente. Use a linguagem que seus usuários já usam. Na dúvida, teste.</p>
<h2>Divulgação progressiva</h2>
<p>Mostre o essencial primeiro. Revele complexidade sob demanda. Uma boa tela de configurações tem três abas, não setenta switches.</p>`,
          [
            q("AI significa?", ["Arquitetura Interativa", "Arquitetura da Informação", "API Interna", "Animação de Interface"], 1, "Arquitetura da Informação."),
            q("Card sorting ajuda a descobrir…", ["Cores", "Modelos mentais de agrupamento", "Tipografia", "Tempo de load"], 1, "Como as pessoas agrupam e nomeiam conteúdo."),
            q("Divulgação progressiva significa…", ["Mostrar tudo", "Revelar complexidade conforme necessário", "Esconder tudo", "Usar dropdowns"], 1, "Essencial primeiro, detalhes sob demanda."),
          ]
        ),
        L("wireframes", "Wireframing e prototipagem",
          "Baixa fidelidade primeiro, alta fidelidade depois.",
          `<p>Comece com wireframes — layouts deliberadamente em baixa fidelidade, com caixas e rótulos. O ponto é desenhar a estrutura sem se distrair com cores e fontes.</p>
<h2>Espectro de fidelidade</h2>
<ol>
  <li><strong>Esboços</strong> — lápis e papel, minutos por tela.</li>
  <li><strong>Wireframes</strong> — caixas em tons de cinza no Figma. Foco em layout e conteúdo.</li>
  <li><strong>Mockups</strong> — design visual aplicado. Pixel-perfect.</li>
  <li><strong>Protótipos</strong> — clicáveis, para testar fluxos reais.</li>
</ol>
<h2>Ferramentas</h2>
<p>Figma é o padrão da indústria. Outras: Sketch (macOS), Adobe XD, Framer (ótimo para protótipos interativos).</p>
<h2>Quando subir de fidelidade</h2>
<p>Só quando o nível atual não revela mais novas perguntas. Pular para alta fidelidade cedo demais leva a redesigns quando aparece um problema de fluxo.</p>`,
          [
            q("Melhor fidelidade para começar?", ["Pixel-perfect", "Esboços ou wireframes", "UI final", "Renders 3D"], 1, "Baixa fidelidade expõe a estrutura mais rápido."),
            q("Ferramenta de design padrão da indústria?", ["Photoshop", "Figma", "InDesign", "MS Paint"], 1, "Figma domina em 2025."),
            q("Propósito principal do protótipo?", ["Ficar bonito", "Testar fluxos reais", "Substituir o dev", "Imprimir panfletos"], 1, "Interatividade para validar."),
          ]
        ),
        L("visual-design", "Princípios de design visual",
          "Contraste, hierarquia, ritmo, equilíbrio.",
          `<p>Quatro princípios aparecem em toda boa interface:</p>
<h2>Contraste</h2>
<p>Faça o importante se destacar. Varie em tamanho, cor ou peso. Um botão primário tem que parecer obviamente diferente de um secundário.</p>
<h2>Hierarquia</h2>
<p>Arrume os elementos para o olho saber o que ler primeiro, segundo, terceiro. Tamanho e cor de tipografia fazem o grosso do trabalho.</p>
<h2>Ritmo e espaçamento</h2>
<p>Espaçamento consistente deixa layouts calmos. Escolha uma escala (4, 8, 12, 16, 24, 32, 48, 64) e siga. Nunca chute pixels.</p>
<h2>Equilíbrio</h2>
<p>Distribua o peso visual. Simetria é formal; assimetria é dinâmica. Os dois funcionam — só seja intencional.</p>
<h2>Regra 60-30-10</h2>
<p>60% neutro (fundo), 30% suporte (conteúdo), 10% destaque (CTAs). Funciona sempre.</p>`,
          [
            q("A escala de espaçamento deve ser…", ["Aleatória", "Consistente (ex. 4/8/16/24)", "Só par", "Números primos"], 1, "Escala consistente parece intencional."),
            q("Proporção 60/30/10 representa?", ["Fundo/suporte/destaque", "Cabeçalho/corpo/rodapé", "Mobile/tablet/desktop", "Vermelho/verde/azul"], 0, "Neutro/suporte/destaque."),
            q("Hierarquia é melhor estabelecida por?", ["Sublinhados", "Tamanho + peso + cor", "Animações", "Som"], 1, "Tipografia faz o trabalho pesado."),
          ]
        ),
        L("typography", "Tipografia",
          "90% do seu design é tipo.",
          `<h2>Combinando fontes</h2>
<p>A maioria dos designs usa uma ou duas tipografias. Padrão clássico: uma display distintiva para títulos + uma sans-serif neutra para texto. Não misture três ou mais a não ser que saiba bem o que está fazendo.</p>
<h2>Tamanho e ritmo</h2>
<p>Defina uma escala tipográfica: ex. 12, 14, 16, 18, 24, 32, 48, 64. Use rem/em para tudo escalar a partir do tamanho raiz. Corpo: mínimo 16px. Altura de linha 1.5–1.7. Largura de linha (caracteres por linha) entre 45 e 80 para leitura confortável.</p>
<h2>Alavancas da hierarquia</h2>
<ul>
  <li><strong>Tamanho</strong> — maior alavanca.</li>
  <li><strong>Peso</strong> — 400/500 no corpo, 600/700/800 em títulos.</li>
  <li><strong>Cor / contraste</strong> — texto apagado recua; texto forte avança.</li>
  <li><strong>Espaçamento entre letras</strong> — aperte em display; solte em caps pequenos.</li>
</ul>
<div class="callout"><div class="ico">🔤</div><p>Contraste acessível: WCAG exige 4.5:1 para texto normal, 3:1 para texto grande. Cheque sempre.</p></div>`,
          [
            q("Tamanho mínimo do texto corrido?", ["12px", "14px", "16px", "20px"], 2, "16px é a convenção da web."),
            q("Largura ideal (caracteres por linha)?", ["20", "45–80", "120+", "Ilimitado"], 1, "Faixa confortável de leitura."),
            q("Contraste acessível para texto corrido?", ["2:1", "3:1", "4.5:1", "7:1"], 2, "WCAG AA exige 4.5:1."),
          ]
        ),
        L("color", "Teoria de cor",
          "Matiz, saturação, luminosidade — e paletas intencionais.",
          `<h2>HSL é seu amigo</h2>
<p>Em vez de escolher hex aleatório, pense em HSL (Hue / Saturation / Lightness). Fixando o hue e variando a lightness você ganha uma escala de tons naturalmente coesa.</p>
<pre><code>/* Escala estilo Tailwind */
50:  hsl(252 100% 97%);
100: hsl(252 100% 93%);
500: hsl(252 100% 65%);  /* marca */
900: hsl(252 80%  20%);</code></pre>
<h2>Papéis semânticos de cor</h2>
<ul>
  <li><strong>Primária</strong> — cor da marca.</li>
  <li><strong>Secundária / acento</strong> — suporte e variedade.</li>
  <li><strong>Neutros</strong> — texto, fundo, bordas.</li>
  <li><strong>Semânticas</strong> — sucesso (verde), alerta (amarelo/laranja), perigo (vermelho), info (azul).</li>
</ul>
<h2>Modo escuro</h2>
<p>Fundos escuros pedem cores dessaturadas. #FFFFFF puro em #000000 puro vibra; use brancos suaves e fundos quase-pretos. Mantenha o matiz da marca, mas abaixe a saturação.</p>`,
          [
            q("Melhor modelo de cor para escalas?", ["RGB", "CMYK", "HSL", "Hex"], 2, "HSL torna variações de lightness intuitivas."),
            q("Branco puro em preto puro causa?", ["Clareza", "Vibração / fadiga visual", "Melhor SEO", "Velocidade"], 1, "Contraste excessivo cansa os olhos."),
            q("Cor semântica para ação destrutiva?", ["Verde", "Vermelho", "Amarelo", "Cinza"], 1, "Vermelho sinaliza perigo."),
          ]
        ),
        L("components", "Sistemas de componentes",
          "Desenhe uma vez, use em todo lugar.",
          `<p>Um componente é um padrão de UI reutilizável: botão, input, card, modal, toast. Um <strong>design system</strong> é a coleção documentada de todos os componentes, mais regras de uso.</p>
<h2>Benefícios</h2>
<ul>
  <li>Consistência em todo o produto.</li>
  <li>Design e desenvolvimento mais rápidos.</li>
  <li>Acessibilidade e edge cases resolvidos uma só vez.</li>
  <li>Rebrand fácil — muda tokens, não componentes.</li>
</ul>
<h2>Exemplos famosos</h2>
<p>Shopify Polaris, IBM Carbon, Atlassian, GitHub Primer, Salesforce Lightning. Estude — são aulas grátis sobre entregar em escala.</p>
<h2>Camadas de um system</h2>
<ol>
  <li><strong>Tokens</strong> — cores, espaçamento, tipografia.</li>
  <li><strong>Primitivas</strong> — botão, input, ícone.</li>
  <li><strong>Padrões</strong> — form, lista, modal, cabeçalho de página.</li>
  <li><strong>Templates</strong> — layouts completos para telas comuns.</li>
</ol>`,
          [
            q("Design tokens são a…", ["Camada do topo", "Camada de base (cores, espaçamento)", "Protótipo", "App final"], 1, "Tokens → componentes → padrões → templates."),
            q("Por que design systems escalam?", ["Adicionam features", "Consistência, velocidade e acessibilidade resolvidos de uma vez", "Reduzem arquivos", "Ficam mais bonitos"], 1, "Reuso em todas as camadas."),
            q("Exemplo de design system público?", ["Polaris", "Carbon", "Material", "Todos os anteriores"], 3, "Todos são sistemas públicos famosos."),
          ]
        ),
        L("usability", "Testes de usabilidade",
          "Veja pessoas usarem seu produto. Toda vez.",
          `<p>Teste de usabilidade é a atividade de maior ROI em produto. Você coloca uma pessoa real na frente do produto e pede para completar uma tarefa. Aí você fica em silêncio e observa.</p>
<h2>Como rodar</h2>
<ol>
  <li>Defina tarefas que correspondam a objetivos reais ("Cadastre-se e complete sua primeira aula").</li>
  <li>Recrute 5 pessoas do público-alvo.</li>
  <li>Peça para pensarem em voz alta. Não interrompa. Não explique.</li>
  <li>Grave tela + áudio se permitido.</li>
  <li>Anote cada hesitação, confusão ou uso incorreto.</li>
</ol>
<h2>O que medir</h2>
<ul>
  <li><strong>Sucesso na tarefa</strong> — terminou sem ajuda?</li>
  <li><strong>Tempo na tarefa</strong> — quanto demorou?</li>
  <li><strong>Contagem de erros</strong> — quantas vezes seguiu o caminho errado?</li>
  <li><strong>Satisfação</strong> — SUS score ou simples 1–5.</li>
</ul>
<h2>As 10 heurísticas de Nielsen</h2>
<p>Checklist rápido para avaliação heurística: visibilidade do estado, correspondência com o mundo real, controle do usuário, consistência, prevenção de erro, reconhecimento em vez de memória, flexibilidade, design estético e minimalista, ajudar a reconhecer erros, ajuda e documentação.</p>`,
          [
            q("Atividade mais valiosa em pesquisa?", ["Pesquisas", "Teste de usabilidade", "Focus groups", "Analytics"], 1, "Ver pessoas reais usando é imbatível."),
            q("Durante um teste, quem facilita deve…", ["Ajudar", "Ficar quieto e observar", "Apontar o botão certo", "Fazer no lugar"], 1, "O silêncio revela a verdade."),
            q("Quantas heurísticas de Nielsen?", ["5", "10", "20", "3"], 1, "Dez heurísticas clássicas."),
          ]
        ),
        L("portfolio", "Construindo um portfólio de design",
          "Mostre o raciocínio, não só os pixels.",
          `<p>Um portfólio de design gera contratações. Mas não do jeito que a maioria monta. Recrutadores não querem posters de Dribbble — querem case studies.</p>
<h2>Anatomia de um case study</h2>
<ol>
  <li><strong>Problema</strong> — quem você estava ajudando e o que estava quebrado?</li>
  <li><strong>Pesquisa</strong> — o que você descobriu?</li>
  <li><strong>Exploração</strong> — alternativas consideradas, com esboços.</li>
  <li><strong>Decisão</strong> — o que você entregou e por quê.</li>
  <li><strong>Impacto</strong> — métricas, antes/depois, citações de usuários.</li>
</ol>
<h2>Quantidade vs qualidade</h2>
<p>Três case studies profundos batem dez prints superficiais. Recrutadores varrem um portfólio em menos de um minuto — faça os primeiros 15 segundos valerem.</p>
<h2>Entregue trabalho real</h2>
<p>Se está começando, desenhe para projetos reais (pequenos): um comércio local, um projeto open source, um hackathon de fim de semana. Restrições reais produzem portfólios reais.</p>
<div class="callout"><div class="ico">🎯</div><p>Agora você tem um mapa completo de design. Junte com um pouco de código front-end e você está de fato perigoso. Seja bem-vindo(a) à área.</p></div>`,
          [
            q("Peça mais forte do portfólio?", ["Shot aleatório do Dribbble", "Case study com problema → decisões → impacto", "Muitas imagens bonitas", "Só wireframes"], 1, "Raciocínio + decisões vencem."),
            q("Quantos case studies profundos são suficientes?", ["10+", "3 fortes", "1", "Nenhum — só pixels"], 1, "Três é o número mágico."),
            q("Melhor jeito de montar portfólio como iniciante?", ["Só copiar apps famosos", "Desenhar para projetos reais pequenos com restrições", "Só fazer curso", "Esperar emprego"], 1, "Restrições reais produzem trabalho real."),
          ]
        ),
      ],
    },
  ];

  if (window.DevstartCourses) {
    window.DevstartCourses = window.DevstartCourses.concat(more);
  } else {
    window.DevstartCourses = more;
  }
})();
