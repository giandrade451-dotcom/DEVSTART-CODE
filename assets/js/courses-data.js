/* =============================================================
   Devstart UP — Dados dos cursos
   ============================================================= */
(function () {
  const q = (prompt, options, correct, explain) => ({ prompt, options, correct, explain });
  const L = (id, title, summary, contentHTML, quiz) => ({ id, title, summary, content: contentHTML, quiz });

  const courses = [
    // =================================================================
    // 1. HTML & CSS Básico (GRÁTIS)
    // =================================================================
    {
      id: "html-css-basics",
      title: "HTML & CSS Básico",
      tagline: "Construa suas primeiras páginas web do zero.",
      description: "Aprenda as duas linguagens essenciais da web. Crie páginas acessíveis e organizadas com HTML semântico moderno e estilize tudo com CSS.",
      level: "Iniciante",
      duration: "6h",
      theme: "theme-html",
      cover: "HTML/CSS",
      vip: false,
      instructor: "Ana Ribeiro",
      lessons: [
        L("welcome", "Bem-vindo à Web",
          "Como a web funciona e por que HTML + CSS importam.",
          `<p>A web é a maior rede pública que a humanidade já construiu. Cada página que você visita — uma notícia, um site de vídeos, um internet banking — é feita na mesma base: <strong>HTML</strong> para estrutura, <strong>CSS</strong> para apresentação e <strong>JavaScript</strong> para comportamento. Dominar essas três tecnologias é a habilidade mais valiosa do desenvolvimento moderno.</p>
<p>Neste curso focamos nas duas primeiras. HTML (HyperText Markup Language) descreve <em>o que</em> tem na página: títulos, parágrafos, listas, imagens, links, formulários. CSS (Cascading Style Sheets) descreve <em>como</em> tudo aparece: cores, espaçamentos, tipografia, layout, animações.</p>
<h2>Como o navegador renderiza uma página</h2>
<p>Quando você digita uma URL, o navegador faz uma requisição HTTP para um servidor. O servidor responde com um documento HTML. O navegador monta uma árvore de nós chamada DOM (Document Object Model). Depois ele carrega o CSS, aplica os estilos e pinta os pixels na tela.</p>
<div class="callout"><div class="ico">💡</div><p>Toda página web que você vai construir é uma combinação dessas três linguagens rodando num navegador. Seu primeiro objetivo é ler HTML com fluência.</p></div>
<h2>O que você vai construir</h2>
<p>Ao final deste curso você vai saber montar uma página de portfólio partindo de um arquivo em branco: HTML semântico, CSS responsivo com Flexbox, tipografia limpa e um tema escuro elegante. Mais importante: você vai entender <em>por que</em> cada peça está ali.</p>`,
          [
            q("O que significa HTML?", ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlink Machine Language", "High Template Markup Language"], 0, "HTML = HyperText Markup Language."),
            q("Qual das três linguagens controla a aparência da página?", ["HTML", "CSS", "JavaScript", "HTTP"], 1, "CSS cuida da apresentação."),
            q("Que árvore o navegador monta a partir do HTML?", ["DOM", "JSON", "SQL", "API"], 0, "DOM = Document Object Model."),
          ]
        ),
        L("structure", "Estrutura de um documento HTML",
          "Toda página começa com o mesmo esqueleto.",
          `<p>Todo documento HTML segue um formato previsível. Entender esse formato deixa você começar qualquer projeto em segundos:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;
    &lt;title&gt;Minha página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Olá, web!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<h2>Head vs body</h2>
<p>O <code>&lt;head&gt;</code> guarda metadados — o título da aba, a codificação de caracteres, dicas de viewport para mobile, links para folhas de estilo e tags de SEO. Nada dentro do <code>&lt;head&gt;</code> aparece diretamente na página.</p>
<p>O <code>&lt;body&gt;</code> guarda todos os elementos visíveis: textos, imagens, botões, formulários. Quando as pessoas falam "a página", normalmente estão falando do body.</p>
<h2>Tags, elementos e atributos</h2>
<p>Uma <strong>tag</strong> é uma palavra-chave entre sinais de menor e maior, como <code>&lt;p&gt;</code>. A maioria vem em par — uma tag de abertura <code>&lt;p&gt;</code> e uma de fechamento <code>&lt;/p&gt;</code>. A tag de abertura, o conteúdo e a de fechamento formam juntos um <strong>elemento</strong>. Elementos podem carregar <strong>atributos</strong> que os configuram: <code>&lt;a href="/sobre"&gt;Sobre&lt;/a&gt;</code>.</p>
<div class="callout"><div class="ico">⚡</div><p>Indente seu HTML de forma consistente. Quem mais vai ler esse código é você mesmo, no futuro.</p></div>`,
          [
            q("Qual tag guarda o conteúdo visível da página?", ["<head>", "<body>", "<title>", "<meta>"], 1, "<body> guarda todo o conteúdo visível."),
            q("Onde fica o título da aba?", ["Dentro de <body>", "Dentro de <title> no <head>", "Num arquivo .css", "No rodapé"], 1, "<title> vive dentro do <head>."),
            q("Uma tag de abertura, o conteúdo e a de fechamento formam…", ["Um atributo", "Um elemento", "Um documento", "Uma folha de estilo"], 1, "O conjunto é chamado elemento."),
          ]
        ),
        L("text-elements", "Elementos de texto",
          "Títulos, parágrafos, links e mais.",
          `<p>O HTML tem dezenas de elementos para texto. Os mais usados:</p>
<ul>
  <li><code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code> — títulos, do mais importante ao mais discreto.</li>
  <li><code>&lt;p&gt;</code> — parágrafos.</li>
  <li><code>&lt;a href="..."&gt;</code> — links para outras páginas ou âncoras.</li>
  <li><code>&lt;strong&gt;</code> e <code>&lt;em&gt;</code> — ênfase forte e leve (bold/itálico com semântica).</li>
  <li><code>&lt;br&gt;</code> — quebra de linha (evite abusar).</li>
  <li><code>&lt;hr&gt;</code> — linha horizontal de separação.</li>
</ul>
<h2>HTML semântico</h2>
<p>Prefira tags que descrevem significado em vez de só a aparência. <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> ajudam acessibilidade e SEO. Screen readers e motores de busca entendem melhor uma página semântica.</p>
<h2>Imagens</h2>
<pre><code>&lt;img src="/fotos/perfil.jpg" alt="Foto de perfil do Devin" /&gt;</code></pre>
<p>Sempre escreva um <code>alt</code> descritivo — é o que o leitor de tela vai anunciar, e é o que aparece se a imagem falhar em carregar.</p>`,
          [
            q("Qual é o título de maior prioridade?", ["<h6>", "<h1>", "<title>", "<strong>"], 1, "<h1> é o mais alto; use um por página."),
            q("Para que serve o atributo alt da imagem?", ["Estilo", "Descrição acessível se a imagem falhar", "URL da imagem", "Largura"], 1, "Texto alternativo para acessibilidade."),
            q("Qual tag representa um parágrafo?", ["<para>", "<p>", "<text>", "<span>"], 1, "<p> de paragraph."),
          ]
        ),
        L("lists-tables", "Listas e Tabelas",
          "Organize informação em estrutura.",
          `<p>Listas e tabelas são formas de organizar conteúdo. Quase toda interface web as usa.</p>
<h2>Listas</h2>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Café&lt;/li&gt;
  &lt;li&gt;Chá&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;Primeiro&lt;/li&gt;
  &lt;li&gt;Segundo&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<p><code>&lt;ul&gt;</code> é uma lista não ordenada (bolinhas). <code>&lt;ol&gt;</code> é ordenada (números). Em ambas, <code>&lt;li&gt;</code> é cada item.</p>
<h2>Tabelas</h2>
<pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Nome&lt;/th&gt;&lt;th&gt;Idade&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Ana&lt;/td&gt;&lt;td&gt;30&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>`,
          [
            q("Qual tag cria uma lista numerada?", ["<ul>", "<ol>", "<li>", "<dl>"], 1, "ol = ordered list (ordenada)."),
            q("O que vai dentro de um <tr>?", ["<section>", "<td> ou <th>", "<ul>", "<head>"], 1, "Células ficam dentro de linhas."),
            q("Tabelas servem para layout?", ["Sim, sempre", "Apenas para dados", "Só com CSS", "Só em e-mails"], 1, "Use tabelas só para dados. Layout é com CSS."),
          ]
        ),
        L("forms", "Formulários e inputs",
          "Coletar dados de usuários reais.",
          `<p>Formulários são como a web recebe dados do usuário — cadastros, buscas, checkout. Um formulário começa com <code>&lt;form&gt;</code> e envolve <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> e <code>&lt;button&gt;</code>.</p>
<pre><code>&lt;form action="/cadastro" method="post"&gt;
  &lt;label for="u"&gt;Usuário&lt;/label&gt;
  &lt;input id="u" name="username" type="text" required /&gt;

  &lt;label for="p"&gt;Senha&lt;/label&gt;
  &lt;input id="p" name="password" type="password" required /&gt;

  &lt;button type="submit"&gt;Criar conta&lt;/button&gt;
&lt;/form&gt;</code></pre>
<h2>Tipos de input</h2>
<p>O atributo <code>type</code> libera teclados especializados em mobile e validação embutida: <code>email</code>, <code>number</code>, <code>tel</code>, <code>date</code>, <code>url</code>, <code>password</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>, <code>color</code>.</p>
<h2>Acessibilidade</h2>
<p>Todo input deve ter um <code>&lt;label&gt;</code> com <code>for</code>/<code>id</code> combinando. Isso permite tocar o label para focar o campo e deixa leitores de tela anunciarem o propósito corretamente.</p>`,
          [
            q("Qual atributo marca um campo obrigatório?", ["needed", "must", "required", "validate"], 2, "O atributo <code>required</code>."),
            q("Qual type abre um seletor de data?", ["text", "date", "time", "day"], 1, "type='date'."),
            q("Como associar label a input?", ["for + id", "href + src", "class + name", "alt + title"], 0, "<label for='x'> + <input id='x'>."),
          ]
        ),
        L("css-intro", "Introdução ao CSS",
          "Os três jeitos de estilizar uma página — e qual usar.",
          `<p>O CSS pega seu HTML cru e deixa ele bonito. Existem três formas de aplicar:</p>
<ol>
  <li><strong>Inline</strong> — <code>style="color:red"</code> direto no elemento. Evite, exceto para debug rápido.</li>
  <li><strong>Interno</strong> — um bloco <code>&lt;style&gt;</code> dentro do <code>&lt;head&gt;</code>. Útil em demos de arquivo único.</li>
  <li><strong>Externo</strong> — um arquivo <code>.css</code> separado, linkado no head. A escolha correta para projetos reais.</li>
</ol>
<pre><code>&lt;link rel="stylesheet" href="/styles.css" /&gt;</code></pre>
<h2>Uma regra CSS</h2>
<pre><code>h1 {
  color: #7c5cff;
  font-size: 2rem;
  letter-spacing: -0.02em;
}</code></pre>
<p>Ela tem três partes: um <strong>seletor</strong> (<code>h1</code>), um bloco de <strong>declarações</strong> entre chaves, e cada declaração é um par <strong>propriedade: valor</strong>. Ponto e vírgula termina cada linha — esquecer um quebra silenciosamente a regra seguinte.</p>`,
          [
            q("Melhor forma de estilizar um site real?", ["Inline", "<style> interno", "Arquivo .css externo", "SVG escrito à mão"], 2, "Arquivos externos escalam melhor."),
            q("O que é um seletor?", ["Uma cor", "Aquilo que você mira no HTML", "Uma propriedade", "Um atributo"], 1, "Diz ao CSS quais elementos estilizar."),
            q("O que separa declarações?", ["Vírgulas", "Ponto e vírgula", "Pontos", "Nada"], 1, "Ponto e vírgula termina cada declaração."),
          ]
        ),
        L("selectors", "Seletores e a cascata",
          "Como o CSS decide qual regra vence.",
          `<p>CSS se chama <em>Cascading</em> Style Sheets porque várias regras podem mirar o mesmo elemento. Quando elas conflitam, especificidade e ordem decidem o vencedor.</p>
<h2>Seletores comuns</h2>
<ul>
  <li><code>p</code> — todo parágrafo.</li>
  <li><code>.card</code> — todo elemento com class="card".</li>
  <li><code>#hero</code> — o elemento com id="hero".</li>
  <li><code>a:hover</code> — links com mouse em cima.</li>
  <li><code>.btn.primary</code> — elementos com as duas classes.</li>
  <li><code>nav a</code> — todo link dentro de um nav.</li>
</ul>
<h2>Cola de especificidade</h2>
<p>Estilo inline &gt; ID &gt; classe/atributo/pseudo-classe &gt; tag. Quando duas regras empatam, vence a que aparece depois na folha de estilo.</p>
<div class="callout"><div class="ico">🧠</div><p>Prefira classes a IDs para estilizar. IDs são muito específicos e dificultam sobrescritas.</p></div>`,
          [
            q("Qual seleciona todos os elementos .btn?", ["#btn", ".btn", "btn", "*btn"], 1, "Ponto é para classe."),
            q("Maior especificidade?", ["Tag", "Classe", "ID", "Universal"], 2, "IDs são mais específicos que classes."),
            q("O que significa 'nav a'?", ["nav OU a", "Links dentro de nav", "Elemento com id='nav a'", "Um atributo nav"], 1, "Seletor descendente."),
          ]
        ),
        L("box-model", "Box Model",
          "Todo elemento é uma caixa — entender sua anatomia libera o layout.",
          `<p>Todo elemento HTML renderiza como uma caixa retangular com quatro camadas concêntricas:</p>
<ol>
  <li><strong>Conteúdo</strong> — o texto/imagens dentro.</li>
  <li><strong>Padding</strong> — espaço entre conteúdo e borda.</li>
  <li><strong>Border</strong> — a borda visível.</li>
  <li><strong>Margin</strong> — espaço entre essa caixa e as vizinhas.</li>
</ol>
<h2>Controle com CSS</h2>
<pre><code>.card {
  padding: 24px;
  border: 1px solid #333;
  border-radius: 16px;
  margin: 20px;
}</code></pre>
<h2>Box-sizing — a regra CSS mais importante que você vai aprender</h2>
<p>Por padrão, <code>width: 300px</code> conta só o conteúdo. Adicione padding e a caixa estoura. O reset:</p>
<pre><code>* { box-sizing: border-box; }</code></pre>
<p>Agora a largura inclui padding e borda. Todo projeto moderno usa esse reset.</p>`,
          [
            q("O que fica entre borda e conteúdo?", ["Margin", "Padding", "Outline", "Gap"], 1, "Padding fica dentro da borda."),
            q("Qual propriedade arredonda cantos?", ["corner-radius", "border-radius", "round", "radius"], 1, "border-radius."),
            q("box-sizing: border-box faz a largura incluir?", ["Só o conteúdo", "Conteúdo + padding + borda", "Conteúdo + margin", "Tudo"], 1, "Padding e borda, mas não margin."),
          ]
        ),
        L("typography", "Cores, fontes e tipografia",
          "Tipografia é 90% do design visual.",
          `<p>Boa tipografia transforma uma página comum em uma experiência premium. Foque em quatro coisas: família, tamanho, peso e altura de linha.</p>
<pre><code>body {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #eef1ff;
}</code></pre>
<h2>Webfonts</h2>
<p>Google Fonts é o jeito mais simples de carregar fontes customizadas:</p>
<pre><code>&lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"&gt;</code></pre>
<h2>Cores</h2>
<p>Use hex (<code>#7c5cff</code>), rgb (<code>rgb(124 92 255)</code>) ou hsl (<code>hsl(252 100% 68%)</code>). Defina cores da marca como variáveis CSS para trocar tudo num só lugar:</p>
<pre><code>:root { --primary: #7c5cff; }
.btn { background: var(--primary); }</code></pre>`,
          [
            q("Qual unidade escala com o font-size da raiz?", ["px", "rem", "pt", "cm"], 1, "rem = root em."),
            q("Melhor altura de linha para texto corrido?", ["1", "1.2", "1.5–1.7", "3"], 2, "Entre 1.5 e 1.7 lê melhor."),
            q("Variáveis CSS são declaradas com?", ["@var", "--nome", "$nome", "var()"], 1, "-- declara, var() lê."),
          ]
        ),
        L("flexbox", "Layouts com Flexbox",
          "Layout unidimensional, feito do jeito certo.",
          `<p>Flexbox é o jeito moderno de organizar itens em linha ou coluna. Ponha <code>display: flex</code> no pai e os filhos se alinham automaticamente.</p>
<pre><code>.nav {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}</code></pre>
<h2>Propriedades-chave</h2>
<ul>
  <li><code>flex-direction</code>: <code>row</code> (padrão) ou <code>column</code>.</li>
  <li><code>justify-content</code>: alinhamento no eixo principal — <code>flex-start</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>.</li>
  <li><code>align-items</code>: eixo transversal — <code>center</code>, <code>stretch</code>, <code>flex-start</code>.</li>
  <li><code>gap</code>: espaçamento entre itens — chega de gambiarra com margin.</li>
  <li><code>flex: 1</code> em um filho faz ele crescer para ocupar o espaço livre.</li>
</ul>
<div class="callout"><div class="ico">🎯</div><p>Flexbox é para layout 1D. Para grids, use CSS Grid. Os dois são padrão e têm suporte excelente.</p></div>`,
          [
            q("Qual propriedade liga o Flexbox?", ["flex: on", "display: flex", "layout: flex", "type: flex"], 1, "display: flex no pai."),
            q("Centralizar itens no eixo principal?", ["align-items: center", "justify-content: center", "text-align: center", "flex-center"], 1, "justify-content controla o eixo principal."),
            q("flex: 1 faz o filho…", ["encolher", "crescer para ocupar o espaço", "sumir", "girar"], 1, "Ele cresce para consumir o espaço disponível."),
          ]
        ),
        L("first-website", "Seu primeiro site",
          "Junte tudo — crie uma landing page polida.",
          `<p>Vamos combinar tudo. Crie <code>index.html</code>, um arquivo <code>styles.css</code> e monte um portfólio de uma página.</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;title&gt;Alex — Desenvolvedor Web&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;strong&gt;Alex&lt;/strong&gt;
      &lt;div&gt;&lt;a href="#projetos"&gt;Projetos&lt;/a&gt; &lt;a href="#contato"&gt;Contato&lt;/a&gt;&lt;/div&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;section class="hero"&gt;
    &lt;h1&gt;Oi, sou Alex — crio apps web bonitos.&lt;/h1&gt;
    &lt;a class="btn" href="#projetos"&gt;Ver meus projetos&lt;/a&gt;
  &lt;/section&gt;
&lt;/body&gt;&lt;/html&gt;</code></pre>
<h2>Polir</h2>
<p>Adicione fundo escuro, uma cor de marca em gradiente, espaçamento generoso e uma fonte limpa. Exatamente os mesmos ingredientes que você vai usar para criar produtos reais pelo resto da carreira.</p>
<div class="callout"><div class="ico">🚀</div><p>Parabéns — você já consegue ler e escrever HTML + CSS. Próximo passo: dar vida às páginas com JavaScript.</p></div>`,
          [
            q("Onde você linka seu arquivo CSS?", ["<body>", "<head>", "<footer>", "<script>"], 1, "Dentro do <head> via <link>."),
            q("O que torna um site 'responsivo'?", ["Modo escuro", "Adapta-se ao tamanho da tela", "Usa JavaScript", "Usa Flash"], 1, "Layouts fluidos e media queries."),
            q("Melhor próxima habilidade após HTML/CSS?", ["Rust", "JavaScript", "Java", "SQL"], 1, "JavaScript roda no navegador."),
          ]
        ),
      ],
    },

    // =================================================================
    // 2. Fundamentos de JavaScript (GRÁTIS)
    // =================================================================
    {
      id: "js-fundamentals",
      title: "Fundamentos de JavaScript",
      tagline: "A linguagem da web — do zero ao confiante.",
      description: "Escreva seus primeiros programas em JavaScript. Domine variáveis, funções, arrays, objetos e o DOM para deixar qualquer página interativa.",
      level: "Iniciante",
      duration: "8h",
      theme: "theme-js",
      cover: "JS",
      vip: false,
      instructor: "Caio Mendes",
      lessons: [
        L("what-is-js", "O que é JavaScript?",
          "A história e o papel da linguagem mais popular do mundo.",
          `<p>O JavaScript foi inventado em 1995 por Brendan Eich em dez dias. A ideia era ser uma linguagem de script simples para o Netscape Navigator. Trinta anos depois ela move todo site da Terra, roda servidores (Node.js), monta apps móveis (React Native) e até controla telescópios espaciais.</p>
<h2>Onde o JavaScript roda</h2>
<ul>
  <li><strong>Navegadores</strong> — Chrome, Firefox, Safari. Todo site usa.</li>
  <li><strong>Servidores</strong> — via Node.js, cuidando de APIs e bancos de dados.</li>
  <li><strong>Apps desktop</strong> — VS Code, Slack e Discord são JavaScript por baixo.</li>
  <li><strong>Mobile</strong> — React Native, Ionic, Capacitor.</li>
</ul>
<h2>JavaScript moderno (ES2015+)</h2>
<p>A linguagem evoluiu muito. Neste curso usamos sintaxe moderna: <code>let</code>/<code>const</code>, arrow functions, template literals, desestruturação. Esqueça o velho <code>var</code> — você não vai precisar.</p>
<pre><code>const nome = "Devstart";
console.log(\`Bem-vindo à \${nome} UP!\`);</code></pre>`,
          [
            q("Quem inventou o JavaScript?", ["James Gosling", "Brendan Eich", "Guido van Rossum", "Tim Berners-Lee"], 1, "Brendan Eich, na Netscape em 1995."),
            q("Qual runtime permite rodar JS no servidor?", ["Rails", "Node.js", "Flask", "Spring"], 1, "Node.js."),
            q("Palavra-chave moderna preferida no lugar de var?", ["let", "const", "Tanto let quanto const", "global"], 2, "Prefira const; use let só quando precisar reatribuir."),
          ]
        ),
        L("variables", "Variáveis e tipos de dado",
          "Nomeie as coisas para que seu código faça sentido.",
          `<p>Uma variável é uma caixa nomeada que guarda um valor. Em JavaScript moderno há duas palavras-chave para criar uma:</p>
<pre><code>const idade = 25;    // não pode ser reatribuída
let pontos = 0;      // pode ser reatribuída
pontos = pontos + 10;</code></pre>
<p>Use <code>const</code> por padrão. Só mude para <code>let</code> quando realmente precisar alterar o valor.</p>
<h2>Tipos primitivos</h2>
<ul>
  <li><strong>Number</strong> — <code>42</code>, <code>3.14</code>, <code>-1</code>.</li>
  <li><strong>String</strong> — <code>"olá"</code>, <code>'mundo'</code>, <code>\`template\`</code>.</li>
  <li><strong>Boolean</strong> — <code>true</code> ou <code>false</code>.</li>
  <li><strong>null</strong> — "intencionalmente vazio."</li>
  <li><strong>undefined</strong> — "ainda não definido."</li>
</ul>
<h2>typeof</h2>
<p>Use <code>typeof</code> para inspecionar o tipo de um valor em tempo de execução:</p>
<pre><code>typeof "oi";     // "string"
typeof 42;        // "number"
typeof true;      // "boolean"</code></pre>`,
          [
            q("Qual não pode ser reatribuída?", ["let", "const", "var", "todas"], 1, "const — o vínculo é fixo."),
            q("O que typeof 'olá' retorna?", ["text", "string", "char", "word"], 1, "'string'."),
            q("Qual NÃO é primitivo?", ["number", "object", "string", "boolean"], 1, "Objeto não é primitivo."),
          ]
        ),
        L("operators", "Operadores e expressões",
          "Somar, comparar, combinar.",
          `<p>Operadores permitem calcular novos valores. Os aritméticos são familiares:</p>
<pre><code>10 + 3   // 13
10 - 3   // 7
10 * 3   // 30
10 / 3   // 3.333...
10 % 3   // 1   (resto / módulo)
10 ** 3  // 1000 (exponenciação)</code></pre>
<h2>Comparação</h2>
<pre><code>5 === 5   // true  (igualdade estrita)
5 === "5" // false
5 !== 6   // true
5 &gt; 3    // true</code></pre>
<p>Use sempre <code>===</code> e <code>!==</code>. As versões frouxas (<code>==</code>, <code>!=</code>) fazem conversão de tipo e uma hora vão te morder.</p>
<h2>Lógicos</h2>
<pre><code>true &amp;&amp; false   // false (E)
true || false   // true  (OU)
!true           // false (NÃO)</code></pre>`,
          [
            q("Quanto vale 13 % 5?", ["2", "3", "8", "2.6"], 1, "Resto de 13 ÷ 5 = 3."),
            q("Qual é a igualdade estrita?", ["=", "==", "===", "~"], 2, "=== compara valor E tipo."),
            q("O que ! faz?", ["Fatorial", "Inverte um booleano", "Grita", "Incrementa"], 1, "!true === false."),
          ]
        ),
        L("strings", "Strings e números",
          "Os dois tipos que você mais vai usar.",
          `<p>Strings em JavaScript são texto. Use aspas simples, duplas ou crases:</p>
<pre><code>const a = 'olá';
const b = "olá";
const c = \`olá \${a}\`;  // template literal com interpolação</code></pre>
<h2>Métodos úteis de string</h2>
<pre><code>"Devstart".length           // 8
"Devstart".toUpperCase()    // "DEVSTART"
"Devstart".includes("start")// true
"  oi  ".trim()             // "oi"
"a,b,c".split(",")          // ["a","b","c"]</code></pre>
<h2>Métodos de número</h2>
<pre><code>Number("42")         // 42
parseInt("42px")     // 42
(3.14159).toFixed(2) // "3.14"
Math.random()        // 0..1
Math.floor(1.9)      // 1</code></pre>
<div class="callout"><div class="ico">💡</div><p>Template literals (crases) permitem embutir expressões com <code>\${...}</code>. Prefira eles à concatenação com <code>+</code>.</p></div>`,
          [
            q("Qual devolve um número aleatório entre 0 e 1?", ["Math.floor()", "Math.random()", "random()", "Math.ceil()"], 1, "Math.random() retorna [0, 1)."),
            q("Como interpolar uma variável numa string?", ["'oi' + nome", "`oi ${nome}`", "as duas funcionam; a segunda é preferida", "oi %s nome"], 2, "As duas funcionam; template literals ficam mais limpos."),
            q("O que o .trim() faz?", ["Arredonda um número", "Remove espaços das duas pontas", "Apaga caracteres", "Divide a string"], 1, "Remove espaços no começo e no fim."),
          ]
        ),
        L("conditionals", "Condicionais (if/else)",
          "Tomar decisões no seu código.",
          `<p>Programas decidem o próximo passo com base em condições. O <code>if</code> é sua primeira ferramenta:</p>
<pre><code>const idade = 18;
if (idade >= 18) {
  console.log("Adulto");
} else if (idade >= 13) {
  console.log("Adolescente");
} else {
  console.log("Criança");
}</code></pre>
<h2>Truthy e falsy</h2>
<p>Qualquer valor pode ser usado como condição. Estes são falsy: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Todo o resto é truthy.</p>
<h2>Ternário</h2>
<pre><code>const rotulo = idade >= 18 ? "Adulto" : "Menor";</code></pre>
<h2>Switch</h2>
<pre><code>switch (dia) {
  case "Seg": console.log("Segunda"); break;
  case "Sex": console.log("Sexta"); break;
  default: console.log("Outro");
}</code></pre>`,
          [
            q("Qual é falsy?", ["'false'", "'0'", "0", "-1"], 2, "O número 0 é falsy."),
            q("Sintaxe do ternário?", ["cond ? a : b", "cond => a : b", "cond : a ? b", "if cond a b"], 0, "cond ? a : b."),
            q("Esquecer o break no switch causa…", ["Erro", "Fall-through para o próximo case", "Skip", "Nada"], 1, "A execução continua no próximo case."),
          ]
        ),
        L("loops", "Laços (loops)",
          "Fazer algo várias vezes.",
          `<p>Laços repetem um bloco de código. Os mais comuns:</p>
<pre><code>// for clássico
for (let i = 0; i &lt; 5; i++) {
  console.log(i);
}

// while
let n = 0;
while (n &lt; 5) { n++; }

// for...of — itera valores
for (const fruta of ["maçã", "banana"]) {
  console.log(fruta);
}

// for...in — itera chaves
for (const chave in { a: 1, b: 2 }) {
  console.log(chave);
}</code></pre>
<h2>break e continue</h2>
<p><code>break</code> sai do laço na hora; <code>continue</code> pula para a próxima iteração. Use com moderação — condições claras geralmente são melhores.</p>
<div class="callout"><div class="ico">🔁</div><p>Para arrays, prefira <code>.forEach</code>, <code>.map</code> e <code>.filter</code> (ainda vão aparecer). Ficam mais limpos que laços manuais.</p></div>`,
          [
            q("Qual itera os valores de um array?", ["for...in", "for...of", "while", "do"], 1, "for...of dá valores; for...in dá chaves."),
            q("break faz…", ["Sai do laço", "Reinicia o laço", "Pausa", "Nada"], 0, "Sai do laço que o contém."),
            q("O for clássico tem quantas partes?", ["2", "3", "4", "1"], 1, "inicialização; condição; atualização."),
          ]
        ),
        L("functions", "Funções",
          "Empacotar comportamento em unidades reutilizáveis.",
          `<p>Uma função envelopa código para você chamar várias vezes com entradas diferentes. Três sintaxes:</p>
<pre><code>// Declaração de função
function saudacao(nome) {
  return \`Olá, \${nome}!\`;
}

// Expressão de função
const saudacao2 = function(nome) { return "Oi " + nome; };

// Arrow function (moderna, concisa)
const saudacao3 = (nome) =&gt; \`Eaí, \${nome}!\`;

saudacao("Ana");  // "Olá, Ana!"</code></pre>
<h2>Parâmetros e valores padrão</h2>
<pre><code>function total(preco, imposto = 0.1) {
  return preco * (1 + imposto);
}</code></pre>
<h2>Return</h2>
<p>Uma função sem <code>return</code> retorna <code>undefined</code>. Arrow functions com uma única expressão podem omitir as chaves e o <code>return</code>.</p>`,
          [
            q("O que uma função sem return retorna?", ["null", "0", "undefined", "NaN"], 2, "undefined por padrão."),
            q("Sintaxe de arrow function?", ["(a) -> a + 1", "(a) => a + 1", "fn(a) a+1", "func a: a+1"], 1, "=> é a fat arrow."),
            q("Parâmetros padrão?", ["Não existem", "Usa = na lista de parâmetros", "Precisa usar if/else", "Só em classes"], 1, "function f(a = 10) { ... }."),
          ]
        ),
        L("arrays", "Arrays",
          "Listas ordenadas de qualquer coisa.",
          `<p>Um array guarda uma lista de valores, indexada a partir de 0:</p>
<pre><code>const frutas = ["maçã", "banana", "pera"];
frutas[0];             // "maçã"
frutas.length;         // 3
frutas.push("kiwi");   // adiciona no fim
frutas.pop();          // remove do fim
frutas.unshift("manga"); // adiciona no começo
frutas.shift();        // remove do começo</code></pre>
<h2>Métodos de iteração (o bom)</h2>
<pre><code>const nums = [1, 2, 3, 4];
nums.forEach(n =&gt; console.log(n));
nums.map(n =&gt; n * 2);          // [2, 4, 6, 8]
nums.filter(n =&gt; n % 2 === 0); // [2, 4]
nums.reduce((acc, n) =&gt; acc + n, 0); // 10
nums.find(n =&gt; n &gt; 2);          // 3
nums.includes(3);               // true</code></pre>
<p>Esses métodos são o arroz com feijão do JS moderno. Domine bem.</p>`,
          [
            q("Qual adiciona no FIM?", ["shift", "unshift", "push", "pop"], 2, "push adiciona; pop remove do fim."),
            q(".map retorna o quê?", ["O mesmo array alterado", "Um novo array do mesmo tamanho", "Um booleano", "Um único valor"], 1, "Um novo array com elementos transformados."),
            q(".filter mantém elementos onde o callback retorna?", ["qualquer coisa", "truthy", "falsy", "um número"], 1, "Elementos cujo resultado do callback é truthy."),
          ]
        ),
        L("objects", "Objetos",
          "Pares chave/valor para modelar dados.",
          `<p>Um objeto agrupa valores relacionados em chaves nomeadas:</p>
<pre><code>const usuario = {
  username: "ana",
  vip: false,
  progresso: { htmlCss: 0.4 },
  saudar() { return \`Oi, \${this.username}\`; }
};

usuario.username       // "ana"
usuario["username"]    // mesma coisa
usuario.vip = true;    // mutar
delete usuario.progresso;</code></pre>
<h2>Desestruturação</h2>
<pre><code>const { username, vip } = usuario;
console.log(username); // "ana"</code></pre>
<h2>Spread/rest</h2>
<pre><code>const atualizado = { ...usuario, vip: true };  // cópia sem mutar
const [primeiro, ...resto] = [1, 2, 3, 4];       // primeiro=1, resto=[2,3,4]</code></pre>
<div class="callout"><div class="ico">🧩</div><p>Objetos e arrays são <em>tipos de referência</em>. <code>const b = a</code> aponta para o mesmo objeto. Use spread ou <code>structuredClone</code> para copiar.</p></div>`,
          [
            q("Como acessar uma propriedade por variável?", ["obj.nome", "obj[nome]", "obj->nome", "obj::nome"], 1, "Colchetes para chaves dinâmicas."),
            q("O que { ...obj, vip: true } faz?", ["Muta obj", "Cria um novo objeto com vip sobrescrito", "Apaga vip", "Congela obj"], 1, "Spread cria um novo objeto."),
            q("Sintaxe de desestruturação?", ["const [x, y] = obj;", "const { x, y } = obj;", "const x,y = obj;", "const obj.{x,y};"], 1, "Chaves para objetos."),
          ]
        ),
        L("dom", "DOM básico",
          "Ler e alterar a página a partir do JavaScript.",
          `<p>O DOM é uma árvore de nós que representa seu HTML. O JavaScript pode encontrar e modificar qualquer parte dela.</p>
<h2>Selecionando elementos</h2>
<pre><code>document.getElementById("btn");
document.querySelector(".card");        // primeiro match
document.querySelectorAll(".card");     // todos (NodeList)</code></pre>
<h2>Alterando conteúdo e estilo</h2>
<pre><code>const el = document.querySelector("h1");
el.textContent = "Novo título";
el.innerHTML = "Título em <b>negrito</b>";
el.classList.add("active");
el.classList.toggle("dark");
el.style.color = "red";
el.setAttribute("data-id", "42");</code></pre>
<h2>Criando elementos</h2>
<pre><code>const li = document.createElement("li");
li.textContent = "Novo item";
document.querySelector("ul").appendChild(li);</code></pre>`,
          [
            q("Qual retorna TODOS os elementos que casam?", ["getElementById", "querySelector", "querySelectorAll", "getElementsByTagName"], 2, "querySelectorAll retorna NodeList."),
            q("Mais seguro que innerHTML para texto puro?", ["innerText", "textContent", "value", "nodeValue"], 1, "textContent evita injeção de HTML."),
            q("Para adicionar uma classe?", ["el.class += 'x'", "el.addClass('x')", "el.classList.add('x')", "el.class = 'x'"], 2, "classList.add / remove / toggle."),
          ]
        ),
        L("events", "Eventos",
          "Reagir a ações do usuário — clicks, digitação, scroll.",
          `<p>Eventos são como sua página reage ao usuário. Conecte um listener com <code>addEventListener</code>:</p>
<pre><code>const btn = document.querySelector("#ir");
btn.addEventListener("click", () =&gt; {
  console.log("Clicou!");
});</code></pre>
<h2>O objeto do evento</h2>
<pre><code>input.addEventListener("input", (e) =&gt; {
  console.log(e.target.value);
});

form.addEventListener("submit", (e) =&gt; {
  e.preventDefault();   // evita o reload da página
  // validar e tratar
});</code></pre>
<h2>Tipos comuns de evento</h2>
<ul>
  <li>click, dblclick, contextmenu</li>
  <li>mouseenter, mouseleave, mousemove</li>
  <li>keydown, keyup</li>
  <li>input, change, submit</li>
  <li>scroll, resize, load</li>
</ul>`,
          [
            q("Conectar um listener com?", ["el.on('click', fn)", "el.click(fn)", "el.addEventListener('click', fn)", "el.subscribe('click', fn)"], 2, "addEventListener é o padrão."),
            q("Impedir que um form recarregue a página?", ["e.stopPropagation()", "e.preventDefault()", "return false do handler", "Opções 2 e 3"], 3, "preventDefault() é preferido; return false também funciona em código legado."),
            q("Qual evento dispara enquanto digita?", ["change", "input", "só keyup", "typed"], 1, "O evento input dispara a cada alteração."),
          ]
        ),
        L("project-todo", "Mini projeto: lista de tarefas",
          "Combine tudo em um app funcional.",
          `<p>Vamos montar uma lista de tarefas. O HTML:</p>
<pre><code>&lt;form id="form"&gt;
  &lt;input id="task" placeholder="Nova tarefa" /&gt;
  &lt;button&gt;Adicionar&lt;/button&gt;
&lt;/form&gt;
&lt;ul id="list"&gt;&lt;/ul&gt;</code></pre>
<p>O JavaScript:</p>
<pre><code>const form = document.getElementById("form");
const input = document.getElementById("task");
const list = document.getElementById("list");
let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function render() {
  list.innerHTML = todos.map((t, i) =&gt;
    \`&lt;li data-i="\${i}"&gt;\${t} &lt;button data-del="\${i}"&gt;x&lt;/button&gt;&lt;/li&gt;\`
  ).join("");
  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", (e) =&gt; {
  e.preventDefault();
  if (!input.value.trim()) return;
  todos.push(input.value.trim());
  input.value = "";
  render();
});

list.addEventListener("click", (e) =&gt; {
  const i = e.target.dataset.del;
  if (i != null) { todos.splice(i, 1); render(); }
});

render();</code></pre>
<div class="callout"><div class="ico">🎉</div><p>Você acabou de construir um app de tarefas com persistência e sem dependência nenhuma. A seguir: JavaScript avançado (VIP) para subir de nível em closures, async e módulos.</p></div>`,
          [
            q("localStorage guarda valores como…", ["Objetos", "Strings", "Números", "Arquivos JSON"], 1, "Apenas strings — use JSON.stringify/parse."),
            q("Qual impede o form de recarregar?", ["return", "e.preventDefault()", "submit.stop()", "form.cancel()"], 1, "Chame preventDefault no evento submit."),
            q("Event delegation liga listeners em…", ["Cada filho", "O pai", "A window", "O formulário"], 1, "Escuta uma vez no pai e lê e.target."),
          ]
        ),
      ],
    },

    // =================================================================
    // 3. Lógica de programação (GRÁTIS)
    // =================================================================
    {
      id: "programming-logic",
      title: "Lógica de Programação",
      tagline: "Pense como um programador — a habilidade por trás de toda linguagem.",
      description: "Algoritmos, variáveis, condicionais, loops e padrões de resolução de problemas que você vai usar em qualquer linguagem que encostar.",
      level: "Iniciante",
      duration: "5h",
      theme: "theme-logic",
      cover: "Logic",
      vip: false,
      instructor: "Marina Costa",
      lessons: [
        L("what-is-programming", "O que é programar?",
          "Não é digitar — é pensar.",
          `<p>Programar é o ofício de descrever um processo com tanta precisão que uma máquina consegue executá-lo. A parte "digitar" — o código — é os últimos cinco por cento. O trabalho de verdade é descobrir <em>o que</em> você quer que o computador faça e <em>em que ordem</em>.</p>
<p>Um computador é absurdamente burro. Ele vai dividir por zero, apagar seu banco inteiro ou cobrar o cliente duas vezes sem piscar. Seu papel como pessoa programadora é antecipar cada caso, tratar cada erro e não deixar nada ao acaso.</p>
<h2>O ciclo no qual você vai viver</h2>
<ol>
  <li><strong>Entender</strong> o problema.</li>
  <li><strong>Quebrar</strong> em passos menores.</li>
  <li><strong>Escrever</strong> o código.</li>
  <li><strong>Testar</strong> o que fez.</li>
  <li><strong>Consertar</strong> o que está quebrado. Voltar ao passo 3.</li>
</ol>
<div class="callout"><div class="ico">🧠</div><p>Bons programadores não são pessoas que escrevem código perfeito de primeira. São pessoas que depuram com paciência, fazem boas perguntas e quebram problemas grandes em pequenos.</p></div>`,
          [
            q("Habilidade mais importante na programação?", ["Velocidade de digitação", "Pensar com clareza", "Matemática", "Decorar sintaxe"], 1, "Raciocínio claro vence tudo."),
            q("Um computador é…", ["Inteligente", "Burro, porém rápido", "Criativo", "Não confiável"], 1, "Muito literal e muito rápido."),
            q("O que significa 'depurar'?", ["Escrever código", "Achar e consertar problemas", "Ler docs", "Apagar código"], 1, "Localizar o bug, corrigir, verificar."),
          ]
        ),
        L("algorithms", "Algoritmos: pensar em passos",
          "Transforme um objetivo em um procedimento numerado.",
          `<p>Um algoritmo é um conjunto finito e preciso de passos que produz um resultado desejado. Fazer café é um algoritmo. Logar um usuário é um algoritmo. Ordenar um milhão de registros é um algoritmo.</p>
<h2>Exemplo: achar o maior número de uma lista</h2>
<ol>
  <li>Comece com uma variável <code>maior</code> igual ao primeiro item.</li>
  <li>Olhe cada item seguinte.</li>
  <li>Se for maior que <code>maior</code>, substitua <code>maior</code> por ele.</li>
  <li>Quando acabar a lista, <code>maior</code> tem a resposta.</li>
</ol>
<p>Pronto. Sem código. Só um procedimento. Depois que dá para escrever em português, passar para qualquer linguagem é mecânico.</p>
<h2>Pseudocódigo</h2>
<pre><code>PARA cada numero NA lista:
  SE numero &gt; maior ENTÃO:
    maior = numero
RETORNAR maior</code></pre>
<p>Pseudocódigo é agnóstico de linguagem. Se sinta à vontade com ele — é como você vai planejar numa lousa em entrevistas e em sessões reais de design.</p>`,
          [
            q("Um algoritmo é…", ["Mágica", "Um conjunto finito de passos", "Uma linguagem de programação", "Hardware"], 1, "Passos finitos que produzem uma saída."),
            q("Para que serve o pseudocódigo?", ["Rodar num PC", "Planejar lógica sem linguagem", "Ofuscar", "Executar mais rápido"], 1, "Planejar a lógica antes de escolher a linguagem."),
            q("Abordagem certa para um problema difícil?", ["Sair codando", "Quebrar primeiro", "Pedir para a IA resolver", "Pular"], 1, "Decompor em problemas menores."),
          ]
        ),
        L("variables-memory", "Variáveis e memória",
          "Rótulos para caixas na memória.",
          `<p>Uma variável é um rótulo legível que aponta para uma posição na memória com um valor. Em pseudocódigo:</p>
<pre><code>idade ← 25
nome ← "Ana"
ehVip ← false</code></pre>
<p>Variáveis podem mudar com o tempo (a não ser que a linguagem obrigue imutabilidade). A disciplina chave: <strong>nomeie variáveis para que um estranho leia seu código</strong>. <code>x</code> raramente é bom. <code>idadeUsuario</code> quase sempre é.</p>
<h2>Escopo</h2>
<p>A maioria das linguagens tem <em>escopos</em> — onde uma variável é visível. Uma variável declarada dentro de uma função não é acessível fora dela. Isso é bom: mantém os programas modulares.</p>
<div class="callout"><div class="ico">📦</div><p>Regra prática: declare variáveis o mais tarde possível, no menor escopo que funciona.</p></div>`,
          [
            q("Uma variável é bem descrita como…", ["Uma função", "Uma caixa com nome e um valor dentro", "Um arquivo", "Um tipo"], 1, "Caixa nomeada com um valor."),
            q("Bom nome de variável?", ["x", "tmp", "idadeUsuario", "a1"], 2, "Nomes descritivos vencem clevers."),
            q("Escopo se refere a…", ["Tamanho do projeto", "Onde uma variável é visível", "Um loop", "Localização do arquivo"], 1, "Visibilidade e tempo de vida."),
          ]
        ),
        L("data-types", "Tipos de dados em toda parte",
          "Saiba que tipo de valor você está segurando.",
          `<p>A maioria das linguagens compartilha os mesmos tipos básicos. Nomes variam, ideias são universais:</p>
<ul>
  <li><strong>Integer</strong> — inteiros: 0, 1, -42.</li>
  <li><strong>Float / Decimal</strong> — números com vírgula: 3.14.</li>
  <li><strong>String</strong> — texto: "olá".</li>
  <li><strong>Boolean</strong> — true ou false.</li>
  <li><strong>Coleção</strong> — listas/arrays, dicionários/maps, sets.</li>
  <li><strong>Null / None</strong> — a ausência de valor.</li>
</ul>
<h2>Conversão de tipo</h2>
<p>Somar uma string com um número é ambíguo. Algumas linguagens lançam erro, outras convertem sozinhas. Saiba as regras da sua. Seja explícito quando importa:</p>
<pre><code>idade ← para_inteiro(input("Sua idade: "))</code></pre>
<div class="callout"><div class="ico">⚠️</div><p>Bug clássico de iniciante: ler um número de input, receber uma string e comparar com número. Converta sempre!</p></div>`,
          [
            q("Qual o tipo de 'olá'?", ["Integer", "String", "Boolean", "Float"], 1, "Texto é string."),
            q("3.14 é um…", ["Integer", "String", "Float", "Boolean"], 2, "Decimal de ponto flutuante."),
            q("Bug mais comum com input?", ["Digitação", "Não converter string para número", "Nomes ruins", "Muito curto"], 1, "input() devolve uma string."),
          ]
        ),
        L("conditionals", "Condicionais",
          "Ramificação — o coração da tomada de decisão.",
          `<p>Uma condicional é uma pergunta que seu programa faz. Dependendo da resposta, um caminho diferente roda.</p>
<pre><code>SE idade &gt;= 18 ENTÃO
  imprime "Adulto"
SENÃO
  imprime "Menor"
FIM</code></pre>
<h2>Condições compostas</h2>
<pre><code>SE idade &gt;= 18 E temCarteira ENTÃO ...
SE cargo == "admin" OU cargo == "dono" ENTÃO ...
SE NÃO estaBanido ENTÃO ...</code></pre>
<h2>Cláusulas de guarda</h2>
<p>Em vez de aninhar <code>if</code> fundo, retorne cedo quando uma condição falha. Isso deixa o código mais legível:</p>
<pre><code>SE user é None: RETORNA erro
SE user.estaBanido: RETORNA erro
# caminho feliz abaixo</code></pre>`,
          [
            q("Qual representa E (AND) na maioria das linguagens?", ["||", "&&", "??", "=="], 1, "&& ou 'and'."),
            q("Cláusulas de guarda…", ["Adicionam aninhamento", "Removem aninhamento com returns cedo", "São loops", "São classes"], 1, "Retorne cedo, diminua profundidade."),
            q("O ramo ELSE executa quando…", ["Sempre", "O IF é falso", "Dá erro", "Nunca"], 1, "Apenas quando a condição do IF é falsa."),
          ]
        ),
        L("loops", "Laços",
          "Repita até uma condição ser alcançada.",
          `<p>Laços permitem fazer a mesma coisa com muitos valores. Duas formas comuns:</p>
<pre><code>PARA i DE 1 ATÉ 10:
  imprime i

ENQUANTO saldo &gt; 0:
  saldo ← saldo - 100</code></pre>
<h2>Armadilha do loop infinito</h2>
<p>Um <code>ENQUANTO</code> cuja condição nunca vira falsa roda pra sempre. Garanta que sua variável de controle muda numa direção que vai eventualmente parar.</p>
<h2>Contadores e acumuladores</h2>
<pre><code>total ← 0
PARA cada item EM carrinho:
  total ← total + item.preco
imprime total</code></pre>
<p>Laços + condições + variáveis = 80% de toda programação.</p>`,
          [
            q("Loop infinito acontece quando…", ["Contador cresce", "A condição nunca vira falsa", "Usa FOR", "Usa break"], 1, "A condição precisa eventualmente falhar."),
            q("Acumulador é uma variável que…", ["Guarda o último valor", "Soma valores ao longo do loop", "Conta cliques", "É global"], 1, "Acumula valores ao longo de iterações."),
            q("Para um número conhecido de repetições, use…", ["WHILE", "FOR", "IF", "SWITCH"], 1, "FOR é o mais limpo quando se sabe quantas vezes."),
          ]
        ),
        L("functions", "Funções e reusabilidade",
          "Dê nome a um bloco de passos e chame em qualquer lugar.",
          `<p>Uma função é um bloco nomeado e reutilizável. Depois de escrita, dá para chamar de qualquer lugar. É o maior multiplicador de produtividade em programação.</p>
<pre><code>FUNÇÃO saudacao(nome):
  RETORNA "Olá, " + nome

imprime saudacao("Ana")  # "Olá, Ana"</code></pre>
<h2>Parâmetros vs argumentos</h2>
<p><strong>Parâmetros</strong> são os nomes na definição da função. <strong>Argumentos</strong> são os valores reais que você passa. <code>saudacao(nome)</code> tem um parâmetro <code>nome</code>; <code>saudacao("Ana")</code> passa "Ana" como argumento.</p>
<h2>Responsabilidade única</h2>
<p>Uma função deve fazer uma coisa bem. Se você se pega escrevendo "e" no nome (<code>carregarEValidarESalvar</code>), separe em funções menores.</p>
<div class="callout"><div class="ico">🧰</div><p>Código bom é uma biblioteca de funções pequenas e bem nomeadas que lê como texto corrido.</p></div>`,
          [
            q("Um parâmetro de função é…", ["O valor que você passa", "O nome na definição", "Uma variável global", "Uma classe"], 1, "Nome na definição. O valor é o argumento."),
            q("Melhor tamanho de função?", ["O maior possível", "Faz uma coisa só, bem feita", "Exatamente 10 linhas", "Sem funções"], 1, "Responsabilidade única."),
            q("Por que usar funções?", ["Exibicionismo", "Reuso e legibilidade", "Obrigação legal", "Só velocidade"], 1, "Reuso e clareza."),
          ]
        ),
        L("collections", "Coleções: listas e dicionários",
          "Agrupar muitos valores juntos.",
          `<p>Duas formas de coleção dominam qualquer linguagem:</p>
<h2>Lista / Array</h2>
<p>Sequência ordenada, indexada por posição:</p>
<pre><code>nomes ← ["Ana", "Bob", "Cleo"]
nomes[0]   # "Ana"
nomes.adicionar("Dan")</code></pre>
<h2>Dicionário / Map</h2>
<p>Pares chave-valor para buscar valores pelo nome:</p>
<pre><code>usuario ← { "nome": "Ana", "idade": 25, "vip": false }
usuario["nome"]  # "Ana"
usuario["vip"] ← true</code></pre>
<p>Escolha a coleção certa para a tarefa. Lista quando a ordem importa e a iteração é sequencial. Dicionário quando você busca valores por uma chave única.</p>`,
          [
            q("Melhor coleção para guardar configurações?", ["Array", "Dicionário", "Integer", "String"], 1, "Busca por chave combina com dicionário."),
            q("Acesso de array é por…", ["Chave", "Índice", "Hash", "Nome"], 1, "Índice começando em 0."),
            q("Dicionário pode ter chaves duplicadas?", ["Sim", "Não", "Às vezes", "Só strings"], 1, "Chaves são únicas dentro de um dicionário."),
          ]
        ),
        L("debugging", "Mentalidade de debug",
          "Bugs não são derrota — são pista.",
          `<p>Quando seu programa se comporta mal, resista à vontade de mudar linhas aleatórias. Em vez disso:</p>
<ol>
  <li><strong>Reproduza</strong> o bug com confiabilidade.</li>
  <li><strong>Isole</strong> — ache a menor entrada que dispara o bug.</li>
  <li><strong>Print / log</strong> valores no caminho para ver o que o programa realmente acredita.</li>
  <li><strong>Formule uma hipótese</strong>, teste, confirme ou descarte.</li>
  <li><strong>Conserte</strong> a causa raiz, não o sintoma.</li>
</ol>
<h2>Debug do patinho de borracha</h2>
<p>Explique o problema em voz alta para um patinho (ou colega, ou comentário no arquivo). Só o fato de verbalizar costuma revelar a resposta.</p>
<h2>Print debugging vs debuggers</h2>
<p>No começo, <code>print</code> / <code>console.log</code> resolve. Quando crescer, aprenda o debugger da sua linguagem — breakpoints e execução passo a passo são superpoderes.</p>`,
          [
            q("Primeiro passo quando aparece um bug?", ["Reescrever tudo", "Reproduzir com confiabilidade", "Culpar o SO", "Ignorar"], 1, "Você precisa reproduzir para corrigir."),
            q("Causa raiz vs sintoma?", ["Mesma coisa", "Causa raiz é preferida", "Sintoma é sempre melhor", "Tanto faz"], 1, "Consertar a causa raiz evita o bug voltar."),
            q("Patinho de borracha é…", ["Uma lib", "Explicar o problema em voz alta", "Ferramenta de hardware", "Um SO"], 1, "Verbalizar expõe suposições."),
          ]
        ),
        L("problem-solving", "Estratégias de resolução de problemas",
          "Frameworks para atacar qualquer coisa.",
          `<p>Cinco técnicas que funcionam em quase qualquer problema de programação:</p>
<ol>
  <li><strong>Decompor</strong> — divida o problema em subproblemas e resolva cada.</li>
  <li><strong>Achar um padrão</strong> — esse problema é de algum tipo conhecido (ordenar, buscar, contar)?</li>
  <li><strong>Trabalhar de trás pra frente</strong> — parta da saída desejada e descubra que entradas produzem ela.</li>
  <li><strong>Simplificar</strong> — resolva uma versão pequena primeiro (lista de 3 itens, não um milhão).</li>
  <li><strong>Escrever pseudocódigo</strong> — planeje antes de escolher a linguagem.</li>
</ol>
<h2>Categorias comuns que você vai reconhecer</h2>
<ul>
  <li>Contar — quantos X?</li>
  <li>Transformar — converter cada item de A para B (map).</li>
  <li>Filtrar — manter só os itens que obedecem a uma regra.</li>
  <li>Agregar — reduzir muitos valores a um (soma, máximo, join).</li>
  <li>Buscar — encontrar o primeiro/último/melhor match.</li>
</ul>
<div class="callout"><div class="ico">🏁</div><p>Parabéns — você agora tem o kit mental que serve para toda linguagem. Agora escolha uma e continue praticando.</p></div>`,
          [
            q("Decompor significa…", ["Compilar", "Quebrar um problema grande em pequenos", "Apagar código", "Recompor"], 1, "Dividir para conquistar."),
            q("Melhor jeito de começar um problema novo?", ["Sair codando", "Resolver versão pequena primeiro", "Procurar lib", "Contratar ajuda"], 1, "Simplifique para entender o formato."),
            q("Filtrar mantém itens que…", ["São novos", "Atendem a uma regra", "Estão ordenados", "São os maiores"], 1, "Itens que satisfazem o predicado."),
          ]
        ),
      ],
    },
  ];

  window.DevstartCourses = courses;
})();
