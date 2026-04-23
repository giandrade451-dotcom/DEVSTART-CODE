/* =============================================================
   Devstart UP — Courses data
   ============================================================= */
(function () {
  const q = (prompt, options, correct, explain) => ({ prompt, options, correct, explain });

  // Helper to wrap lesson HTML content
  const L = (id, title, summary, contentHTML, quiz) => ({ id, title, summary, content: contentHTML, quiz });

  const courses = [
    // =================================================================
    // 1. HTML & CSS Basics (FREE)
    // =================================================================
    {
      id: "html-css-basics",
      title: "HTML & CSS Basics",
      tagline: "Build your first real web pages from scratch.",
      description: "Learn the two core languages of the web. Build clean, accessible pages with modern HTML semantics and style them beautifully with CSS.",
      level: "Beginner",
      duration: "6h",
      theme: "theme-html",
      cover: "HTML/CSS",
      vip: false,
      instructor: "Ana Ribeiro",
      lessons: [
        L("welcome", "Welcome to the Web",
          "How the web works and why HTML + CSS matter.",
          `<p>The web is the largest public network humans have ever built. Every page you visit — a news article, a video site, a banking dashboard — is built on the same foundation: <strong>HTML</strong> for structure, <strong>CSS</strong> for presentation, and <strong>JavaScript</strong> for behavior. Mastering these three technologies is the single most valuable skill in modern software.</p>
<p>In this course we focus on the first two. HTML (HyperText Markup Language) describes <em>what</em> is on a page: headings, paragraphs, lists, images, links, forms. CSS (Cascading Style Sheets) describes <em>how</em> it looks: colors, spacing, typography, layout, animations.</p>
<h2>How a browser renders a page</h2>
<p>When you type a URL, the browser makes an HTTP request to a server. The server responds with an HTML document. The browser parses that HTML into a tree of nodes called the DOM (Document Object Model). Then it loads any CSS the HTML references, applies the styles, and paints pixels on the screen.</p>
<div class="callout"><div class="ico">💡</div><p>Every web page you'll ever build is a combination of these three languages running inside a browser. Your first goal is to read HTML fluently.</p></div>
<h2>What you'll build</h2>
<p>By the end of this course you will be able to build a personal portfolio page from an empty file: semantic HTML, responsive CSS with Flexbox, clean typography, and a polished dark theme. More importantly, you'll understand <em>why</em> each piece is there.</p>`,
          [
            q("What does HTML stand for?", ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlink Machine Language", "High Template Markup Language"], 0, "HTML = HyperText Markup Language."),
            q("Which of the three languages controls how a page looks?", ["HTML", "CSS", "JavaScript", "HTTP"], 1, "CSS handles presentation."),
            q("What tree does a browser build from the HTML document?", ["DOM", "JSON", "SQL", "API"], 0, "DOM = Document Object Model."),
          ]
        ),
        L("structure", "HTML Document Structure",
          "Every web page starts with the same boilerplate.",
          `<p>Every HTML document follows a predictable shape. Understanding this shape lets you start any project in seconds:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, web!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<h2>Head vs body</h2>
<p>The <code>&lt;head&gt;</code> holds metadata — the title shown in the browser tab, character encoding, viewport hints for mobile, links to stylesheets, and SEO tags. Nothing inside <code>&lt;head&gt;</code> appears directly on the page.</p>
<p>The <code>&lt;body&gt;</code> holds every visible element: text, images, buttons, forms. When people say "the page," they usually mean the body.</p>
<h2>Tags, elements, attributes</h2>
<p>A <strong>tag</strong> is a keyword wrapped in angle brackets, like <code>&lt;p&gt;</code>. Most tags come in pairs — an opening <code>&lt;p&gt;</code> and a closing <code>&lt;/p&gt;</code>. The opening tag, content, and closing tag together form an <strong>element</strong>. Elements can carry <strong>attributes</strong> that configure them: <code>&lt;a href="/about"&gt;About&lt;/a&gt;</code>.</p>
<div class="callout"><div class="ico">⚡</div><p>Indent your HTML consistently. Your future self will read it more than anyone else.</p></div>`,
          [
            q("Which tag contains the visible content of a page?", ["<head>", "<body>", "<title>", "<meta>"], 1, "<body> holds all visible content."),
            q("What does the viewport meta tag help with?", ["SEO", "Mobile responsiveness", "Animations", "Security"], 1, "It configures scaling on mobile devices."),
            q("Which of these is an attribute?", ["<a>", "href", "</a>", "body"], 1, "href is an attribute of <a>."),
          ]
        ),
        L("text", "Text, Headings & Paragraphs",
          "Structure content semantically with headings and paragraphs.",
          `<p>Text is the backbone of most web pages. HTML gives you six heading levels (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>) plus the paragraph tag <code>&lt;p&gt;</code>. Use them in order of importance — <code>&lt;h1&gt;</code> for the page's main title, <code>&lt;h2&gt;</code> for major sections, <code>&lt;h3&gt;</code> for subsections.</p>
<h2>Why semantic order matters</h2>
<p>Search engines, screen readers, and developer tools all rely on heading structure to understand your page. Skipping from <code>h1</code> to <code>h4</code> breaks that outline. Treat headings like a table of contents: hierarchical, consistent, meaningful.</p>
<h2>Inline formatting</h2>
<p>Inside a paragraph you can highlight text with <code>&lt;strong&gt;</code> (important), <code>&lt;em&gt;</code> (emphasis), <code>&lt;code&gt;</code> (inline code), and <code>&lt;br&gt;</code> for a line break. Avoid <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> — they used to mean "bold" and "italic" visually; modern HTML wants you to describe meaning, not looks.</p>
<pre><code>&lt;h1&gt;My Portfolio&lt;/h1&gt;
&lt;p&gt;I'm &lt;strong&gt;Alex&lt;/strong&gt;, a &lt;em&gt;self-taught&lt;/em&gt; developer.&lt;/p&gt;</code></pre>`,
          [
            q("What's the highest-level heading?", ["<h6>", "<h1>", "<h0>", "<header>"], 1, "<h1> is the most important."),
            q("Which tag means semantically important text?", ["<b>", "<strong>", "<big>", "<u>"], 1, "<strong> communicates importance."),
            q("How many heading levels does HTML have?", ["3", "5", "6", "9"], 2, "h1 through h6."),
          ]
        ),
        L("links-images", "Links & Images",
          "Connect pages and bring them to life with images.",
          `<p>Links are what make the web a web. The anchor tag <code>&lt;a&gt;</code> takes an <code>href</code> attribute pointing to a URL:</p>
<pre><code>&lt;a href="https://devstart.up"&gt;Visit Devstart&lt;/a&gt;
&lt;a href="/about"&gt;About&lt;/a&gt;
&lt;a href="mailto:hi@devstart.up"&gt;Email us&lt;/a&gt;</code></pre>
<p>Use <code>target="_blank"</code> to open the link in a new tab. Always pair it with <code>rel="noopener"</code> for security.</p>
<h2>Images</h2>
<p>The <code>&lt;img&gt;</code> element is self-closing — no closing tag. It must have a <code>src</code> (the URL) and an <code>alt</code> (short description for accessibility and SEO):</p>
<pre><code>&lt;img src="/logo.svg" alt="Devstart UP logo" width="120" /&gt;</code></pre>
<div class="callout"><div class="ico">♿</div><p><strong>alt text is not optional.</strong> Screen reader users depend on it. If the image is purely decorative, use an empty <code>alt=""</code>.</p></div>`,
          [
            q("Which attribute sets a link's destination?", ["src", "href", "url", "link"], 1, "href = hypertext reference."),
            q("Why is alt text important?", ["SEO", "Accessibility", "Fallback if image fails", "All of the above"], 3, "All three."),
            q("What pairs with target='_blank' for security?", ["rel='external'", "rel='noopener'", "rel='safe'", "defer"], 1, "noopener prevents tab-hijack attacks."),
          ]
        ),
        L("lists-tables", "Lists & Tables",
          "Present structured data with lists and tables.",
          `<p>Three kinds of lists exist:</p>
<ul>
  <li><strong>Unordered</strong> — <code>&lt;ul&gt;</code> with bullets.</li>
  <li><strong>Ordered</strong> — <code>&lt;ol&gt;</code> with numbers.</li>
  <li><strong>Description</strong> — <code>&lt;dl&gt;</code> for term/definition pairs.</li>
</ul>
<pre><code>&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<h2>Tables</h2>
<p>Use tables <em>only for tabular data</em> — not for layout. A table has a <code>&lt;thead&gt;</code>, a <code>&lt;tbody&gt;</code>, rows <code>&lt;tr&gt;</code>, header cells <code>&lt;th&gt;</code>, and data cells <code>&lt;td&gt;</code>:</p>
<pre><code>&lt;table&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Course&lt;/th&gt;&lt;th&gt;Hours&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;HTML&lt;/td&gt;&lt;td&gt;6&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;CSS&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>`,
          [
            q("Which tag makes a numbered list?", ["<ul>", "<ol>", "<li>", "<dl>"], 1, "ol = ordered list."),
            q("What goes inside a <tr>?", ["<section>", "<td> or <th>", "<ul>", "<head>"], 1, "Table cells live inside rows."),
            q("Should you use tables for layout?", ["Yes always", "Only for data", "Only with CSS", "Only in emails"], 1, "Data only. Use CSS for layout."),
          ]
        ),
        L("forms", "Forms & Inputs",
          "Collect input from real users.",
          `<p>Forms are how the web captures user input — sign-ups, searches, checkout flows. A form starts with <code>&lt;form&gt;</code> and wraps a set of <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, and <code>&lt;button&gt;</code> elements.</p>
<pre><code>&lt;form action="/signup" method="post"&gt;
  &lt;label for="u"&gt;Username&lt;/label&gt;
  &lt;input id="u" name="username" type="text" required /&gt;

  &lt;label for="p"&gt;Password&lt;/label&gt;
  &lt;input id="p" name="password" type="password" required /&gt;

  &lt;button type="submit"&gt;Create account&lt;/button&gt;
&lt;/form&gt;</code></pre>
<h2>Input types</h2>
<p>The <code>type</code> attribute unlocks specialized keyboards on mobile and built-in validation: <code>email</code>, <code>number</code>, <code>tel</code>, <code>date</code>, <code>url</code>, <code>password</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>, <code>color</code>.</p>
<h2>Accessibility</h2>
<p>Every input should have a <code>&lt;label&gt;</code> with a matching <code>for</code>/<code>id</code> pair. This lets users tap the label to focus the field and lets screen readers announce the purpose correctly.</p>`,
          [
            q("Which attribute marks a required field?", ["needed", "must", "required", "validate"], 2, "The <code>required</code> attribute."),
            q("What type gives you a calendar picker?", ["text", "date", "time", "day"], 1, "type='date'."),
            q("How do you associate a label with an input?", ["for + id", "href + src", "class + name", "alt + title"], 0, "<label for='x'> + <input id='x'>."),
          ]
        ),
        L("css-intro", "Intro to CSS",
          "The three ways to style a page — and which to use.",
          `<p>CSS takes your raw HTML and makes it beautiful. There are three ways to apply it:</p>
<ol>
  <li><strong>Inline</strong> — <code>style="color:red"</code> on an element. Avoid except for quick debugging.</li>
  <li><strong>Internal</strong> — a <code>&lt;style&gt;</code> block in the <code>&lt;head&gt;</code>. Useful for single-file demos.</li>
  <li><strong>External</strong> — a separate <code>.css</code> file linked in the head. The correct choice for real projects.</li>
</ol>
<pre><code>&lt;link rel="stylesheet" href="/styles.css" /&gt;</code></pre>
<h2>A CSS rule</h2>
<pre><code>h1 {
  color: #7c5cff;
  font-size: 2rem;
  letter-spacing: -0.02em;
}</code></pre>
<p>It has three parts: a <strong>selector</strong> (<code>h1</code>), a brace-wrapped block of <strong>declarations</strong>, and each declaration is a <strong>property: value</strong> pair. Semicolons end each line — forgetting one silently breaks the next rule.</p>`,
          [
            q("Best way to style a real site?", ["Inline styles", "Internal <style>", "External .css file", "Hand-written SVG"], 2, "External files scale."),
            q("What's a selector?", ["A color", "A thing you target", "A property", "An attribute"], 1, "It tells CSS which elements to style."),
            q("What separates declarations?", ["Commas", "Semicolons", "Periods", "Nothing"], 1, "Semicolons end each declaration."),
          ]
        ),
        L("selectors", "Selectors & the Cascade",
          "How CSS decides which rule wins.",
          `<p>CSS is called <em>Cascading</em> Style Sheets because multiple rules can target the same element. When they conflict, specificity and order decide the winner.</p>
<h2>Common selectors</h2>
<ul>
  <li><code>p</code> — every paragraph.</li>
  <li><code>.card</code> — every element with class="card".</li>
  <li><code>#hero</code> — the element with id="hero".</li>
  <li><code>a:hover</code> — links being hovered.</li>
  <li><code>.btn.primary</code> — elements with both classes.</li>
  <li><code>nav a</code> — every link inside a nav.</li>
</ul>
<h2>Specificity cheat sheet</h2>
<p>Inline style &gt; ID &gt; class/attribute/pseudo-class &gt; tag. When two rules tie, the one that appears later in the stylesheet wins.</p>
<div class="callout"><div class="ico">🧠</div><p>Prefer classes over IDs for styling. IDs are too specific and make overrides painful.</p></div>`,
          [
            q("Which selects all .btn elements?", ["#btn", ".btn", "btn", "*btn"], 1, "Dot for class."),
            q("Highest specificity?", ["Tag", "Class", "ID", "Universal"], 2, "IDs are more specific than classes."),
            q("What does 'nav a' mean?", ["nav OR a", "Links inside nav", "An element with id='nav a'", "a nav attribute"], 1, "Descendant selector."),
          ]
        ),
        L("box-model", "The Box Model",
          "Every element is a box — understanding its anatomy unlocks layout.",
          `<p>Every HTML element renders as a rectangular box with four concentric layers:</p>
<ol>
  <li><strong>Content</strong> — the text/images inside.</li>
  <li><strong>Padding</strong> — space between content and border.</li>
  <li><strong>Border</strong> — the visible edge.</li>
  <li><strong>Margin</strong> — space between this box and its neighbors.</li>
</ol>
<h2>Control it with CSS</h2>
<pre><code>.card {
  padding: 24px;
  border: 1px solid #333;
  border-radius: 16px;
  margin: 20px;
}</code></pre>
<h2>Box-sizing — the most important CSS rule you'll ever learn</h2>
<p>By default, <code>width: 300px</code> measures only the content. Add padding and the box overflows. The fix:</p>
<pre><code>* { box-sizing: border-box; }</code></pre>
<p>Now width includes padding and border. Every modern project uses this reset.</p>`,
          [
            q("What's between border and content?", ["Margin", "Padding", "Outline", "Gap"], 1, "Padding is inside the border."),
            q("Which property rounds corners?", ["corner-radius", "border-radius", "round", "radius"], 1, "border-radius."),
            q("box-sizing: border-box makes width include?", ["Just content", "Content + padding + border", "Content + margin", "Everything"], 1, "Padding and border, not margin."),
          ]
        ),
        L("typography", "Colors, Fonts & Typography",
          "Typography is 90% of visual design.",
          `<p>Good typography transforms a plain page into a premium experience. Focus on four things: font family, size, weight, and line height.</p>
<pre><code>body {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #eef1ff;
}</code></pre>
<h2>Webfonts</h2>
<p>Google Fonts is the simplest way to load custom fonts:</p>
<pre><code>&lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"&gt;</code></pre>
<h2>Colors</h2>
<p>Use hex (<code>#7c5cff</code>), rgb (<code>rgb(124 92 255)</code>), or hsl (<code>hsl(252 100% 68%)</code>). Define brand colors as CSS variables so you can change them in one place:</p>
<pre><code>:root { --primary: #7c5cff; }
.btn { background: var(--primary); }</code></pre>`,
          [
            q("Which unit scales with root font-size?", ["px", "rem", "pt", "cm"], 1, "rem = root em."),
            q("Best line-height for body text?", ["1", "1.2", "1.5–1.7", "3"], 2, "Around 1.5–1.7 reads best."),
            q("CSS variables are declared with?", ["@var", "--name", "$name", "var()"], 1, "-- declares, var() reads."),
          ]
        ),
        L("flexbox", "Flexbox Layouts",
          "One-dimensional layout, done right.",
          `<p>Flexbox is the modern way to arrange items in a row or column. Put <code>display: flex</code> on a parent and its children automatically line up.</p>
<pre><code>.nav {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}</code></pre>
<h2>Key properties</h2>
<ul>
  <li><code>flex-direction</code>: <code>row</code> (default) or <code>column</code>.</li>
  <li><code>justify-content</code>: main-axis alignment — <code>flex-start</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>.</li>
  <li><code>align-items</code>: cross-axis — <code>center</code>, <code>stretch</code>, <code>flex-start</code>.</li>
  <li><code>gap</code>: space between items — no more margin hacks.</li>
  <li><code>flex: 1</code> on a child makes it grow to fill remaining space.</li>
</ul>
<div class="callout"><div class="ico">🎯</div><p>Flexbox is for 1D layouts. For grids, use CSS Grid. Both are standard and well-supported.</p></div>`,
          [
            q("Which property turns on Flexbox?", ["flex: on", "display: flex", "layout: flex", "type: flex"], 1, "display: flex on the parent."),
            q("Center items on the main axis?", ["align-items: center", "justify-content: center", "text-align: center", "flex-center"], 1, "justify-content controls main-axis alignment."),
            q("flex: 1 makes a child…", ["shrink", "grow to fill space", "disappear", "rotate"], 1, "It grows to consume available space."),
          ]
        ),
        L("first-website", "Your First Website",
          "Put it all together — build a polished landing page.",
          `<p>Let's combine everything. Create <code>index.html</code>, a <code>styles.css</code> file, and build a one-page portfolio.</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;title&gt;Alex — Web Developer&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;
      &lt;strong&gt;Alex&lt;/strong&gt;
      &lt;div&gt;&lt;a href="#work"&gt;Work&lt;/a&gt; &lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/div&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;section class="hero"&gt;
    &lt;h1&gt;Hi, I'm Alex — I build beautiful web apps.&lt;/h1&gt;
    &lt;a class="btn" href="#work"&gt;See my work&lt;/a&gt;
  &lt;/section&gt;
&lt;/body&gt;&lt;/html&gt;</code></pre>
<h2>Polish it</h2>
<p>Add a dark background, a gradient brand color, generous spacing, and a clean font. The exact same pieces you'll use to build real products for the rest of your career.</p>
<div class="callout"><div class="ico">🚀</div><p>Congrats — you can now read and write HTML + CSS. Next up: bring it to life with JavaScript.</p></div>`,
          [
            q("Where do you link your CSS file?", ["<body>", "<head>", "<footer>", "<script>"], 1, "Inside <head> via <link>."),
            q("What makes a website 'responsive'?", ["Dark mode", "Adapts to screen size", "Uses JavaScript", "Uses Flash"], 1, "Fluid layouts and media queries."),
            q("Best next skill after HTML/CSS?", ["Rust", "JavaScript", "Java", "SQL"], 1, "JavaScript runs in the browser."),
          ]
        ),
      ],
    },

    // =================================================================
    // 2. JavaScript Fundamentals (FREE)
    // =================================================================
    {
      id: "js-fundamentals",
      title: "JavaScript Fundamentals",
      tagline: "The language of the web — from zero to confident.",
      description: "Write your first JavaScript programs. Master variables, functions, arrays, objects, and the DOM so you can make any web page interactive.",
      level: "Beginner",
      duration: "8h",
      theme: "theme-js",
      cover: "JS",
      vip: false,
      instructor: "Caio Mendes",
      lessons: [
        L("what-is-js", "What is JavaScript?",
          "The history and role of the world's most popular language.",
          `<p>JavaScript was invented in 1995 by Brendan Eich in ten days. It was meant to be a simple scripting language for Netscape Navigator. Thirty years later it powers every website on Earth, runs servers (Node.js), builds mobile apps (React Native), and even runs space telescopes.</p>
<h2>Where JavaScript runs</h2>
<ul>
  <li><strong>Browsers</strong> — Chrome, Firefox, Safari. Every site uses it.</li>
  <li><strong>Servers</strong> — via Node.js, handling APIs and databases.</li>
  <li><strong>Desktop apps</strong> — VS Code, Slack, Discord are all JavaScript under the hood.</li>
  <li><strong>Mobile</strong> — React Native, Ionic, Capacitor.</li>
</ul>
<h2>Modern JavaScript (ES2015+)</h2>
<p>The language has evolved enormously. In this course we use modern syntax: <code>let</code>/<code>const</code>, arrow functions, template literals, destructuring. Forget the old <code>var</code> — you won't need it.</p>
<pre><code>const name = "Devstart";
console.log(\`Welcome to \${name} UP!\`);</code></pre>`,
          [
            q("Who invented JavaScript?", ["James Gosling", "Brendan Eich", "Guido van Rossum", "Tim Berners-Lee"], 1, "Brendan Eich, at Netscape in 1995."),
            q("Which runtime lets JS run on servers?", ["Rails", "Node.js", "Flask", "Spring"], 1, "Node.js."),
            q("Modern variable keyword preferred over var?", ["let", "const", "Both let and const", "global"], 2, "Prefer const, use let when you must reassign."),
          ]
        ),
        L("variables", "Variables & Data Types",
          "Name things so your code means something.",
          `<p>A variable is a named box that holds a value. In modern JavaScript there are two keywords to create one:</p>
<pre><code>const age = 25;      // cannot be reassigned
let score = 0;       // can be reassigned
score = score + 10;</code></pre>
<p>Use <code>const</code> by default. Only switch to <code>let</code> when you actually need to change the value.</p>
<h2>Primitive types</h2>
<ul>
  <li><strong>Number</strong> — <code>42</code>, <code>3.14</code>, <code>-1</code>.</li>
  <li><strong>String</strong> — <code>"hello"</code>, <code>'world'</code>, <code>\`template\`</code>.</li>
  <li><strong>Boolean</strong> — <code>true</code> or <code>false</code>.</li>
  <li><strong>null</strong> — "intentionally empty."</li>
  <li><strong>undefined</strong> — "not yet defined."</li>
</ul>
<h2>typeof</h2>
<p>Use <code>typeof</code> to inspect a value's type at runtime:</p>
<pre><code>typeof "hi";     // "string"
typeof 42;       // "number"
typeof true;     // "boolean"</code></pre>`,
          [
            q("Which can't be reassigned?", ["let", "const", "var", "all"], 1, "const — its binding is fixed."),
            q("What does typeof 'hello' return?", ["text", "string", "char", "word"], 1, "'string'."),
            q("Which is NOT a primitive?", ["number", "object", "string", "boolean"], 1, "Object is not a primitive."),
          ]
        ),
        L("operators", "Operators & Expressions",
          "Add, compare, combine.",
          `<p>Operators let you compute new values. The math operators are familiar:</p>
<pre><code>10 + 3   // 13
10 - 3   // 7
10 * 3   // 30
10 / 3   // 3.333...
10 % 3   // 1   (remainder / modulo)
10 ** 3  // 1000 (exponent)</code></pre>
<h2>Comparison</h2>
<pre><code>5 === 5   // true  (strict equality)
5 === "5" // false
5 !== 6   // true
5 &gt; 3    // true</code></pre>
<p>Always use <code>===</code> and <code>!==</code>. The loose versions (<code>==</code>, <code>!=</code>) do type coercion and will eventually bite you.</p>
<h2>Logical</h2>
<pre><code>true &amp;&amp; false   // false (AND)
true || false   // true  (OR)
!true           // false (NOT)</code></pre>`,
          [
            q("What does 13 % 5 return?", ["2", "3", "8", "2.6"], 1, "Remainder of 13 ÷ 5 = 3."),
            q("Which is strict equality?", ["=", "==", "===", "~"], 2, "=== checks value AND type."),
            q("What does ! do?", ["Factorial", "Inverts a boolean", "Shouts", "Increments"], 1, "!true === false."),
          ]
        ),
        L("strings", "Strings & Numbers",
          "The two types you'll work with most.",
          `<p>Strings in JavaScript are text. Use single, double, or backtick quotes:</p>
<pre><code>const a = 'hello';
const b = "hello";
const c = \`hello \${a}\`;  // template literal with interpolation</code></pre>
<h2>Useful string methods</h2>
<pre><code>"Devstart".length           // 8
"Devstart".toUpperCase()    // "DEVSTART"
"Devstart".includes("start")// true
"  hi  ".trim()             // "hi"
"a,b,c".split(",")          // ["a","b","c"]</code></pre>
<h2>Number methods</h2>
<pre><code>Number("42")       // 42
parseInt("42px")   // 42
(3.14159).toFixed(2) // "3.14"
Math.random()      // 0..1
Math.floor(1.9)    // 1</code></pre>
<div class="callout"><div class="ico">💡</div><p>Template literals (backticks) let you embed expressions with <code>\${...}</code>. Prefer them to string concatenation with <code>+</code>.</p></div>`,
          [
            q("Which gives a random number 0–1?", ["Math.floor()", "Math.random()", "random()", "Math.ceil()"], 1, "Math.random() returns [0, 1)."),
            q("How to interpolate a variable in a string?", ["'hi' + name", "`hi ${name}`", "both work, second is preferred", "hi %s name"], 2, "Both work; template literals are cleaner."),
            q("What does .trim() do?", ["Rounds a number", "Removes whitespace from both ends", "Deletes characters", "Splits a string"], 1, "Removes leading/trailing whitespace."),
          ]
        ),
        L("conditionals", "Conditionals (if/else)",
          "Make decisions in your code.",
          `<p>Programs decide what to do next based on conditions. The <code>if</code> statement is your first tool:</p>
<pre><code>const age = 18;
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}</code></pre>
<h2>Truthy and falsy</h2>
<p>Any value can be used as a condition. These are falsy: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Everything else is truthy.</p>
<h2>Ternary expression</h2>
<pre><code>const label = age >= 18 ? "Adult" : "Minor";</code></pre>
<h2>Switch</h2>
<pre><code>switch (day) {
  case "Mon": console.log("Monday"); break;
  case "Fri": console.log("Friday"); break;
  default: console.log("Other");
}</code></pre>`,
          [
            q("Which is falsy?", ["'false'", "'0'", "0", "-1"], 2, "The number 0 is falsy."),
            q("Ternary syntax?", ["cond ? a : b", "cond => a : b", "cond : a ? b", "if cond a b"], 0, "cond ? a : b."),
            q("Missing a break in switch causes…", ["Error", "Fall-through to next case", "Skip", "Nothing"], 1, "Execution continues into the next case."),
          ]
        ),
        L("loops", "Loops",
          "Do something over and over.",
          `<p>Loops repeat a block of code. The most common kinds:</p>
<pre><code>// classic for
for (let i = 0; i &lt; 5; i++) {
  console.log(i);
}

// while
let n = 0;
while (n &lt; 5) { n++; }

// for...of — iterate values
for (const fruit of ["apple", "banana"]) {
  console.log(fruit);
}

// for...in — iterate keys
for (const key in { a: 1, b: 2 }) {
  console.log(key);
}</code></pre>
<h2>break and continue</h2>
<p><code>break</code> exits the loop immediately; <code>continue</code> skips to the next iteration. Use them sparingly — clear conditions are usually better.</p>
<div class="callout"><div class="ico">🔁</div><p>For arrays, prefer <code>.forEach</code>, <code>.map</code>, and <code>.filter</code> (coming up in a later lesson). They're cleaner than manual loops.</p></div>`,
          [
            q("Which iterates values of an array?", ["for...in", "for...of", "while", "do"], 1, "for...of gives values; for...in gives keys."),
            q("break does…", ["Exits loop", "Restarts loop", "Pauses", "Nothing"], 0, "Exits the enclosing loop."),
            q("Classic for has how many parts?", ["2", "3", "4", "1"], 1, "init; condition; update."),
          ]
        ),
        L("functions", "Functions",
          "Package behavior into reusable units.",
          `<p>A function wraps code so you can call it many times with different inputs. Three syntaxes:</p>
<pre><code>// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const greet2 = function(name) { return "Hi " + name; };

// Arrow function (modern, concise)
const greet3 = (name) =&gt; \`Hey, \${name}!\`;

greet("Ana");  // "Hello, Ana!"</code></pre>
<h2>Parameters &amp; defaults</h2>
<pre><code>function total(price, tax = 0.1) {
  return price * (1 + tax);
}</code></pre>
<h2>Return</h2>
<p>A function without <code>return</code> returns <code>undefined</code>. Arrow functions with a single expression can skip the braces and the <code>return</code> keyword.</p>`,
          [
            q("What does a function without return return?", ["null", "0", "undefined", "NaN"], 2, "undefined by default."),
            q("Arrow function syntax?", ["(a) -> a + 1", "(a) => a + 1", "fn(a) a+1", "func a: a+1"], 1, "=> is the fat arrow."),
            q("Default parameters?", ["Not allowed", "Done with = in param list", "Must use if/else", "Only in classes"], 1, "function f(a = 10) { ... }."),
          ]
        ),
        L("arrays", "Arrays",
          "Ordered lists of anything.",
          `<p>An array stores a list of values, indexed from 0:</p>
<pre><code>const fruits = ["apple", "banana", "pear"];
fruits[0];         // "apple"
fruits.length;     // 3
fruits.push("kiwi");           // add to end
fruits.pop();                  // remove from end
fruits.unshift("mango");       // add to start
fruits.shift();                // remove from start</code></pre>
<h2>Iteration methods (the good stuff)</h2>
<pre><code>const nums = [1, 2, 3, 4];
nums.forEach(n =&gt; console.log(n));
nums.map(n =&gt; n * 2);          // [2, 4, 6, 8]
nums.filter(n =&gt; n % 2 === 0); // [2, 4]
nums.reduce((sum, n) =&gt; sum + n, 0); // 10
nums.find(n =&gt; n &gt; 2);          // 3
nums.includes(3);               // true</code></pre>
<p>These methods are the bread and butter of modern JS. Learn them well.</p>`,
          [
            q("Which adds to the END?", ["shift", "unshift", "push", "pop"], 2, "push appends; pop removes from end."),
            q(".map returns what?", ["Same array mutated", "A new array of same length", "A boolean", "A single value"], 1, "A new array with transformed elements."),
            q(".filter keeps elements where the callback returns?", ["anything", "truthy", "falsy", "a number"], 1, "Elements with truthy callback result."),
          ]
        ),
        L("objects", "Objects",
          "Key/value pairs for modeling data.",
          `<p>An object groups related values under named keys:</p>
<pre><code>const user = {
  username: "ana",
  vip: false,
  progress: { htmlCss: 0.4 },
  greet() { return \`Hi, \${this.username}\`; }
};

user.username        // "ana"
user["username"]     // same thing
user.vip = true;     // mutate
delete user.progress;</code></pre>
<h2>Destructuring</h2>
<pre><code>const { username, vip } = user;
console.log(username); // "ana"</code></pre>
<h2>Spread/rest</h2>
<pre><code>const updated = { ...user, vip: true };  // non-mutating copy
const [first, ...rest] = [1, 2, 3, 4];    // first=1, rest=[2,3,4]</code></pre>
<div class="callout"><div class="ico">🧩</div><p>Objects and arrays are <em>reference types</em>. Assigning <code>const b = a</code> points to the same object. Use spread or <code>structuredClone</code> to copy.</p></div>`,
          [
            q("How do you access a property by variable name?", ["obj.name", "obj[name]", "obj->name", "obj::name"], 1, "Bracket notation for dynamic keys."),
            q("What does { ...obj, vip: true } do?", ["Mutates obj", "Creates a new object with overridden vip", "Deletes vip", "Freezes obj"], 1, "Spread creates a new object."),
            q("Destructuring syntax?", ["const [x, y] = obj;", "const { x, y } = obj;", "const x,y = obj;", "const obj.{x,y};"], 1, "Use braces for objects."),
          ]
        ),
        L("dom", "DOM Basics",
          "Read and change the page from JavaScript.",
          `<p>The DOM is a tree of nodes representing your HTML. JavaScript can find and modify any part of it.</p>
<h2>Selecting elements</h2>
<pre><code>document.getElementById("btn");
document.querySelector(".card");        // first match
document.querySelectorAll(".card");     // all matches (NodeList)</code></pre>
<h2>Changing content and style</h2>
<pre><code>const el = document.querySelector("h1");
el.textContent = "New title";
el.innerHTML = "Bold <b>title</b>";
el.classList.add("active");
el.classList.toggle("dark");
el.style.color = "red";
el.setAttribute("data-id", "42");</code></pre>
<h2>Creating elements</h2>
<pre><code>const li = document.createElement("li");
li.textContent = "New item";
document.querySelector("ul").appendChild(li);</code></pre>`,
          [
            q("Which returns ALL matching elements?", ["getElementById", "querySelector", "querySelectorAll", "getElementsByTagName"], 2, "querySelectorAll returns a NodeList."),
            q("Safer than innerHTML for plain text?", ["innerText", "textContent", "value", "nodeValue"], 1, "textContent avoids HTML injection."),
            q("To add a class?", ["el.class += 'x'", "el.addClass('x')", "el.classList.add('x')", "el.class = 'x'"], 2, "classList.add / remove / toggle."),
          ]
        ),
        L("events", "Events",
          "React to user actions — clicks, typing, scrolling.",
          `<p>Events are how your page reacts to the user. Attach a listener with <code>addEventListener</code>:</p>
<pre><code>const btn = document.querySelector("#go");
btn.addEventListener("click", () =&gt; {
  console.log("Clicked!");
});</code></pre>
<h2>The event object</h2>
<pre><code>input.addEventListener("input", (e) =&gt; {
  console.log(e.target.value);
});

form.addEventListener("submit", (e) =&gt; {
  e.preventDefault();   // stop the page from reloading
  // validate and handle
});</code></pre>
<h2>Common event types</h2>
<ul>
  <li>click, dblclick, contextmenu</li>
  <li>mouseenter, mouseleave, mousemove</li>
  <li>keydown, keyup</li>
  <li>input, change, submit</li>
  <li>scroll, resize, load</li>
</ul>`,
          [
            q("Attach a listener with?", ["el.on('click', fn)", "el.click(fn)", "el.addEventListener('click', fn)", "el.subscribe('click', fn)"], 2, "addEventListener is standard."),
            q("Stop a form from reloading the page?", ["e.stopPropagation()", "e.preventDefault()", "return false from handler", "Both 2 and 3"], 3, "preventDefault() is preferred; return false also works in legacy."),
            q("Which event fires as you type?", ["change", "input", "keyup only", "typed"], 1, "The input event fires on every change."),
          ]
        ),
        L("project-todo", "Mini Project: To-Do List",
          "Combine everything into a working app.",
          `<p>Let's build a to-do list. The HTML:</p>
<pre><code>&lt;form id="form"&gt;
  &lt;input id="task" placeholder="New task" /&gt;
  &lt;button&gt;Add&lt;/button&gt;
&lt;/form&gt;
&lt;ul id="list"&gt;&lt;/ul&gt;</code></pre>
<p>The JavaScript:</p>
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
<div class="callout"><div class="ico">🎉</div><p>You just built a persistent to-do app with zero dependencies. Next up: advanced JavaScript (VIP) to level up closures, async, and modules.</p></div>`,
          [
            q("localStorage stores values as…", ["Objects", "Strings", "Numbers", "JSON files"], 1, "Strings only — use JSON.stringify/parse."),
            q("Which prevents the form from reloading?", ["return", "e.preventDefault()", "submit.stop()", "form.cancel()"], 1, "Call preventDefault on the submit event."),
            q("Event delegation binds listeners on…", ["Every child", "The parent", "The window", "The form"], 1, "Listen once on the parent and read e.target."),
          ]
        ),
      ],
    },

    // =================================================================
    // 3. Programming Logic (FREE)
    // =================================================================
    {
      id: "programming-logic",
      title: "Programming Logic",
      tagline: "Think like a programmer — the skill behind every language.",
      description: "Algorithms, variables, conditionals, loops, and problem-solving patterns you'll use in every programming language you ever touch.",
      level: "Beginner",
      duration: "5h",
      theme: "theme-logic",
      cover: "Logic",
      vip: false,
      instructor: "Marina Costa",
      lessons: [
        L("what-is-programming", "What is Programming?",
          "It's not typing — it's thinking.",
          `<p>Programming is the craft of describing a process so precisely that a machine can execute it. The "typing" part — the code — is the last five percent. The real work is figuring out <em>what</em> you want the computer to do and <em>in what order</em>.</p>
<p>A computer is astonishingly dumb. It will happily divide by zero, delete your entire database, or bill a customer twice. Your job as a programmer is to anticipate every case, handle every error, and leave nothing to chance.</p>
<h2>The loop you'll live in</h2>
<ol>
  <li><strong>Understand</strong> the problem.</li>
  <li><strong>Break it down</strong> into smaller steps.</li>
  <li><strong>Write</strong> code.</li>
  <li><strong>Test</strong> it.</li>
  <li><strong>Fix</strong> what's broken. Go back to step 3.</li>
</ol>
<div class="callout"><div class="ico">🧠</div><p>Good programmers are not people who write perfect code the first time. They're people who debug patiently, ask good questions, and break big problems into small ones.</p></div>`,
          [
            q("Most important skill in programming?", ["Typing speed", "Thinking clearly", "Math", "Memorizing syntax"], 1, "Clear thinking beats everything else."),
            q("A computer is…", ["Intelligent", "Dumb but fast", "Creative", "Unreliable"], 1, "Very literal and very fast."),
            q("What does 'debugging' mean?", ["Writing code", "Finding and fixing problems", "Reading docs", "Deleting code"], 1, "Locate a bug; fix it; verify."),
          ]
        ),
        L("algorithms", "Algorithms: Thinking in Steps",
          "Turn a goal into a numbered procedure.",
          `<p>An algorithm is a finite, precise set of steps that produces a desired result. Making coffee is an algorithm. Logging a user in is an algorithm. Sorting a million records is an algorithm.</p>
<h2>Example: finding the largest number in a list</h2>
<ol>
  <li>Start with a variable <code>largest</code> equal to the first item.</li>
  <li>Look at each remaining item in turn.</li>
  <li>If it's larger than <code>largest</code>, replace <code>largest</code> with it.</li>
  <li>When the list is done, <code>largest</code> holds the answer.</li>
</ol>
<p>That's it. No code yet — just a procedure. Once you can write it in English, writing it in any language is mechanical.</p>
<h2>Pseudocode</h2>
<pre><code>FOR each number in list:
  IF number &gt; largest:
    largest = number
RETURN largest</code></pre>
<p>Pseudocode is language-agnostic. Get comfortable in it — it's how you'll plan on a whiteboard in interviews and in real design sessions.</p>`,
          [
            q("An algorithm is…", ["Magic", "A finite set of steps", "A programming language", "Hardware"], 1, "Finite steps producing an output."),
            q("What's pseudocode for?", ["Running on a PC", "Planning logic language-free", "Obfuscation", "Faster execution"], 1, "Planning the logic before you commit to a language."),
            q("Correct approach to a hard problem?", ["Write code immediately", "Break it down first", "Ask AI to write it", "Skip it"], 1, "Decompose it into smaller problems."),
          ]
        ),
        L("variables-memory", "Variables & Memory",
          "Labels for boxes in memory.",
          `<p>A variable is a human-readable label that points to a location in memory holding a value. In pseudocode:</p>
<pre><code>age ← 25
name ← "Ana"
isVip ← false</code></pre>
<p>Variables can change over time (unless the language enforces immutability). The key discipline: <strong>name variables so a stranger can read your code</strong>. <code>x</code> is rarely good. <code>userAge</code> almost always is.</p>
<h2>Scope</h2>
<p>Most languages let you declare variables with different <em>scopes</em> — where they're visible. A variable defined inside a function isn't accessible outside it. This is good: it keeps programs modular.</p>
<div class="callout"><div class="ico">📦</div><p>Rule of thumb: declare variables as late as possible, in the smallest scope that works.</p></div>`,
          [
            q("A variable is best thought of as…", ["A function", "A labeled box holding a value", "A file", "A type"], 1, "Named box with a value inside."),
            q("Good variable name?", ["x", "tmp", "userAge", "a1"], 2, "Descriptive names beat clever ones."),
            q("Scope refers to…", ["Project size", "Where a variable is visible", "A loop", "File location"], 1, "Visibility and lifetime."),
          ]
        ),
        L("data-types", "Data Types Everywhere",
          "Know what kind of value you're holding.",
          `<p>Most languages share the same basic types. Names differ slightly but the ideas are universal:</p>
<ul>
  <li><strong>Integer</strong> — whole numbers: 0, 1, -42.</li>
  <li><strong>Float / Decimal</strong> — numbers with a decimal point: 3.14.</li>
  <li><strong>String</strong> — text: "hello".</li>
  <li><strong>Boolean</strong> — true or false.</li>
  <li><strong>Collection</strong> — lists/arrays, dictionaries/maps, sets.</li>
  <li><strong>Null / None</strong> — the absence of a value.</li>
</ul>
<h2>Type conversion</h2>
<p>Adding a string to a number is ambiguous. Some languages throw an error, some auto-convert. Know your language's rules. Always be explicit when it matters:</p>
<pre><code>age ← to_integer(input("Your age: "))</code></pre>
<div class="callout"><div class="ico">⚠️</div><p>The most common beginner bug: reading a number from input, getting a string, then comparing it to a number. Always convert!</p></div>`,
          [
            q("What type is 'hello'?", ["Integer", "String", "Boolean", "Float"], 1, "Text is a string."),
            q("3.14 is a…", ["Integer", "String", "Float", "Boolean"], 2, "Floating-point decimal."),
            q("Most common bug with input?", ["Typos", "Not converting string to number", "Bad names", "Too short"], 1, "input() returns a string."),
          ]
        ),
        L("conditionals", "Conditionals",
          "Branching — the heart of decision-making.",
          `<p>A conditional is a question your program asks. Based on the answer, a different path runs.</p>
<pre><code>IF age &gt;= 18 THEN
  print "Adult"
ELSE
  print "Minor"
END</code></pre>
<h2>Compound conditions</h2>
<pre><code>IF age &gt;= 18 AND hasLicense THEN ...
IF role == "admin" OR role == "owner" THEN ...
IF NOT isBanned THEN ...</code></pre>
<h2>Guard clauses</h2>
<p>Instead of deeply nesting <code>if</code> statements, return early when a condition fails. This makes code easier to read:</p>
<pre><code>IF user is None: RETURN error
IF user.isBanned: RETURN error
# happy path below</code></pre>`,
          [
            q("Which represents AND in most languages?", ["||", "&&", "??", "=="], 1, "&& or 'and'."),
            q("Guard clauses…", ["Add nesting", "Remove nesting with early returns", "Are loops", "Are classes"], 1, "Return early, reduce depth."),
            q("The ELSE branch runs when…", ["Any time", "The IF is false", "There's an error", "Never"], 1, "Only when the IF condition is false."),
          ]
        ),
        L("loops", "Loops",
          "Repeat until a condition is met.",
          `<p>Loops let you do the same thing to many values. Two common shapes:</p>
<pre><code>FOR i FROM 1 TO 10:
  print i

WHILE balance &gt; 0:
  balance ← balance - 100</code></pre>
<h2>Infinite loop trap</h2>
<p>A <code>WHILE</code> loop whose condition never becomes false runs forever. Always make sure your loop variable changes in a direction that will eventually stop it.</p>
<h2>Counters and accumulators</h2>
<pre><code>total ← 0
FOR each item in cart:
  total ← total + item.price
print total</code></pre>
<p>Loops + conditions + variables = 80% of all programming.</p>`,
          [
            q("Infinite loop occurs when…", ["Counter increases", "Condition never becomes false", "You use FOR", "You use break"], 1, "Condition must eventually fail."),
            q("Accumulator is a variable that…", ["Stores the latest value", "Builds up a total across iterations", "Counts clicks", "Is global"], 1, "Accumulates values across a loop."),
            q("For a known number of repetitions, use…", ["WHILE", "FOR", "IF", "SWITCH"], 1, "FOR is cleanest when count is known."),
          ]
        ),
        L("functions", "Functions & Reusability",
          "Name a block of steps and call it anywhere.",
          `<p>A function is a named, reusable block. Once written, you can call it from anywhere. This is the single biggest productivity multiplier in programming.</p>
<pre><code>FUNCTION greet(name):
  RETURN "Hello, " + name

print greet("Ana")  # "Hello, Ana"</code></pre>
<h2>Parameters vs arguments</h2>
<p><strong>Parameters</strong> are the names in the function definition. <strong>Arguments</strong> are the actual values you pass in. <code>greet(name)</code> has a parameter <code>name</code>; <code>greet("Ana")</code> passes "Ana" as the argument.</p>
<h2>Single responsibility</h2>
<p>A function should do one thing well. If you find yourself writing "and" in its name (<code>loadAndValidateAndSave</code>), split it into smaller functions.</p>
<div class="callout"><div class="ico">🧰</div><p>Good code is a library of small, well-named functions that read like prose.</p></div>`,
          [
            q("A function parameter is…", ["The value you pass", "The name in the definition", "A global variable", "A class"], 1, "Definition name. The value is the argument."),
            q("Best function size?", ["As big as possible", "Does one thing well", "Exactly 10 lines", "No functions"], 1, "Single responsibility."),
            q("Why use functions?", ["Show off", "Reusability and readability", "Required by law", "Speed only"], 1, "Reuse and clarity."),
          ]
        ),
        L("collections", "Collections: Lists & Dictionaries",
          "Group many values together.",
          `<p>Two collection shapes dominate every language:</p>
<h2>List / Array</h2>
<p>An ordered sequence of values, indexed by position:</p>
<pre><code>names ← ["Ana", "Bob", "Cleo"]
names[0]   # "Ana"
names.add("Dan")</code></pre>
<h2>Dictionary / Map</h2>
<p>Key-value pairs for looking up values by name:</p>
<pre><code>user ← { "name": "Ana", "age": 25, "vip": false }
user["name"]  # "Ana"
user["vip"] ← true</code></pre>
<p>Pick the right collection for the job. Use a list when order matters and you iterate in sequence. Use a dictionary when you look things up by a unique key.</p>`,
          [
            q("Best collection to store settings?", ["Array", "Dictionary", "Integer", "String"], 1, "Keyed lookups fit a dictionary."),
            q("Array access is by…", ["Key", "Index", "Hash", "Name"], 1, "0-based index."),
            q("Can a dictionary have duplicate keys?", ["Yes", "No", "Sometimes", "Only strings"], 1, "Keys are unique within a dictionary."),
          ]
        ),
        L("debugging", "The Debugging Mindset",
          "Bugs aren't failures — they're clues.",
          `<p>When your program misbehaves, resist the urge to change random lines. Instead:</p>
<ol>
  <li><strong>Reproduce</strong> the bug reliably.</li>
  <li><strong>Isolate</strong> — find the smallest input that triggers it.</li>
  <li><strong>Print / log</strong> values along the way to see what the program actually believes.</li>
  <li><strong>Form a hypothesis</strong>, test it, confirm or rule out.</li>
  <li><strong>Fix</strong> the root cause, not the symptom.</li>
</ol>
<h2>Rubber duck debugging</h2>
<p>Explain the problem out loud to a rubber duck (or a colleague, or a comment in your file). The act of formulating the problem in words usually reveals the answer.</p>
<h2>Print debugging vs debuggers</h2>
<p>Starting out, <code>print</code> / <code>console.log</code> is fine. As you grow, learn your language's debugger — breakpoints and step-through execution are superpowers.</p>`,
          [
            q("First step when a bug appears?", ["Rewrite everything", "Reproduce it reliably", "Blame the OS", "Ignore it"], 1, "You must reproduce to fix."),
            q("Root cause vs symptom fix?", ["Same thing", "Root cause is preferred", "Symptom is always better", "Doesn't matter"], 1, "Fix root causes or bugs come back."),
            q("Rubber duck debugging is…", ["A library", "Explaining the problem aloud to clarify thinking", "A hardware tool", "An OS"], 1, "Verbalizing exposes assumptions."),
          ]
        ),
        L("problem-solving", "Problem Solving Strategies",
          "Frameworks for tackling anything.",
          `<p>Five techniques that apply to nearly any programming problem:</p>
<ol>
  <li><strong>Decompose</strong> — break the problem into smaller sub-problems and solve each.</li>
  <li><strong>Find a pattern</strong> — is this problem shaped like a known one (sorting, searching, counting)?</li>
  <li><strong>Work backwards</strong> — start from the desired output and figure out what inputs produce it.</li>
  <li><strong>Simplify</strong> — solve a tiny version first (list of 3 items, not a million).</li>
  <li><strong>Write pseudocode</strong> — plan the solution before you commit to a language.</li>
</ol>
<h2>Common categories you'll recognize</h2>
<ul>
  <li>Counting — how many of X?</li>
  <li>Transforming — convert each item from A to B (map).</li>
  <li>Filtering — keep only items matching a rule.</li>
  <li>Aggregating — reduce many values to one (sum, max, join).</li>
  <li>Searching — find the first/last/best match.</li>
</ul>
<div class="callout"><div class="ico">🏁</div><p>Congratulations — you now have the mental toolkit that applies to every language. Next, pick a language and keep practicing.</p></div>`,
          [
            q("Decompose means…", ["Compile", "Break a big problem into small ones", "Delete code", "Recompose"], 1, "Divide and conquer."),
            q("Best way to start solving a new problem?", ["Code immediately", "Solve a tiny version first", "Google a library", "Hire help"], 1, "Simplify to understand the shape."),
            q("Filtering keeps items that…", ["Are new", "Match a rule", "Are sorted", "Are largest"], 1, "Items matching the predicate."),
          ]
        ),
      ],
    },
  ];

  window.DevstartCourses = courses;
})();
