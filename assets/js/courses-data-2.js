/* =============================================================
   Devstart UP — Courses data (part 2)
   Appends: Python Basic, Advanced JS, Python Developer,
            Fullstack, UI/UX Design.
   ============================================================= */
(function () {
  const q = (prompt, options, correct, explain) => ({ prompt, options, correct, explain });
  const L = (id, title, summary, content, quiz) => ({ id, title, summary, content, quiz });

  const more = [
    // =================================================================
    // 4. Python Basic (FREE)
    // =================================================================
    {
      id: "python-basic",
      title: "Python Basic",
      tagline: "The friendliest language for beginners — and a production powerhouse.",
      description: "Install Python, write your first scripts, and master the core syntax you'll use in data science, web apps, automation, and AI.",
      level: "Beginner",
      duration: "5h",
      theme: "theme-python",
      cover: "Python",
      vip: false,
      instructor: "Lucas Pereira",
      lessons: [
        L("meet-python", "Meet Python",
          "Why Python is the world's most popular language.",
          `<p>Python was created by Guido van Rossum in 1991. Today it's the #1 language in data science, machine learning, scientific computing, automation, and is a serious contender for backend web development (Django, Flask, FastAPI).</p>
<p>Why is it so loved? <strong>Readability.</strong> Python reads almost like English and avoids punctuation clutter. It uses indentation to structure code, forcing a clean visual style.</p>
<pre><code># A Python program that actually looks like English
def greet(name):
    print(f"Hello, {name}!")

greet("Devstart")</code></pre>
<h2>Where you'll use Python</h2>
<ul>
  <li>Data analysis &amp; visualization (pandas, matplotlib)</li>
  <li>Machine learning (scikit-learn, PyTorch, TensorFlow)</li>
  <li>Web backends (Django, Flask, FastAPI)</li>
  <li>Automation, scripting, dev tooling</li>
  <li>Finance, bioinformatics, game scripting</li>
</ul>`,
          [
            q("Who created Python?", ["Brendan Eich", "Guido van Rossum", "James Gosling", "Dennis Ritchie"], 1, "Guido, 1991."),
            q("Python uses what to mark code blocks?", ["Braces", "Indentation", "Keywords begin/end", "Semicolons"], 1, "Indentation is syntactic."),
            q("Which is a Python web framework?", ["Spring", "Express", "Flask", "Rails"], 2, "Flask, Django, FastAPI are Pythonic."),
          ]
        ),
        L("setup-hello", "Setup & Hello World",
          "Get Python running and write your first line.",
          `<p>Download Python from <code>python.org</code> (or use the one your OS includes — macOS and Linux usually do). Verify:</p>
<pre><code>$ python --version
Python 3.12.1</code></pre>
<h2>Running code</h2>
<p>Two modes:</p>
<ol>
  <li><strong>Interactive</strong> — type <code>python</code> in your terminal for a REPL where every line runs immediately.</li>
  <li><strong>Scripts</strong> — save code to a <code>.py</code> file and run <code>python file.py</code>.</li>
</ol>
<pre><code># hello.py
print("Hello, world!")
print("I am a Python developer.")</code></pre>
<h2>Editors</h2>
<p>Use VS Code with the official Python extension. You'll get auto-complete, formatting, linting, and a built-in terminal.</p>
<div class="callout"><div class="ico">🐍</div><p>Pin yourself to Python 3 — Python 2 is dead. Never write new code for Python 2.</p></div>`,
          [
            q("Which Python is alive today?", ["2.7", "3.x", "Python 1", "Python 5"], 1, "Python 3.x is the modern version."),
            q("Command to see Python version?", ["python -v", "python --version", "python info", "py -version"], 1, "python --version."),
            q("Most popular editor for Python?", ["Notepad", "Vim only", "VS Code", "Word"], 2, "VS Code + Python extension."),
          ]
        ),
        L("variables-input", "Variables & Input",
          "Store values and talk to users.",
          `<p>Python variables are untyped — you assign with <code>=</code> and the type comes from the value:</p>
<pre><code>name = "Ana"
age = 25
is_vip = False
balance = 3.14</code></pre>
<h2>Input and output</h2>
<pre><code>name = input("Your name: ")
print(f"Hi, {name}!")</code></pre>
<p><code>input()</code> always returns a string. If you need a number, convert:</p>
<pre><code>age = int(input("Your age: "))
price = float(input("Price: "))</code></pre>
<h2>Naming convention</h2>
<p>Python uses <code>snake_case</code> for variables and functions, <code>PascalCase</code> for classes, <code>UPPER_SNAKE</code> for constants. Follow this — it's non-negotiable in the Python world.</p>`,
          [
            q("input() returns what type?", ["int", "float", "str", "bool"], 2, "Always a string."),
            q("Python variable naming convention?", ["camelCase", "PascalCase", "snake_case", "kebab-case"], 2, "snake_case for variables."),
            q("f-string syntax?", ["\"hi $name\"", "\"hi {name}\"", "f\"hi {name}\"", "%(name)s"], 2, "f\"hi {name}\"."),
          ]
        ),
        L("strings-numbers", "Strings & Numbers",
          "The two workhorses of every program.",
          `<p>Strings in Python are very powerful. Some essentials:</p>
<pre><code>s = "Devstart UP"
s.upper()          # "DEVSTART UP"
s.lower()
s.replace("UP", "LEVEL")
"start" in s       # True
len(s)             # 11
s.split(" ")       # ["Devstart", "UP"]
",".join(["a","b"])# "a,b"</code></pre>
<h2>Numbers</h2>
<pre><code>3 + 4     # 7
7 / 2     # 3.5  (float division)
7 // 2    # 3    (integer division)
7 % 2     # 1    (modulo)
2 ** 10   # 1024 (exponent)
round(3.7)# 4
abs(-9)   # 9</code></pre>
<h2>f-strings</h2>
<p>The preferred way to format text:</p>
<pre><code>price = 19.99
print(f"Total: \${price:.2f}")  # "Total: $19.99"</code></pre>`,
          [
            q("What does 7 // 2 return?", ["3.5", "3", "4", "2"], 1, "Integer division."),
            q("Which checks membership?", ["has()", "in", "contains()", "find()"], 1, "Use 'in' operator."),
            q("Format 3.14159 with 2 decimals?", ["{:.2}", "{:.2f}", "{:2f}", "{2.f}"], 1, ":.2f inside f-string."),
          ]
        ),
        L("lists", "Lists",
          "Ordered, mutable sequences.",
          `<p>A Python list is an ordered collection you can modify:</p>
<pre><code>fruits = ["apple", "banana", "pear"]
fruits[0]            # "apple"
fruits[-1]           # "pear" (last)
fruits[1:3]          # ["banana", "pear"]  (slice)
fruits.append("kiwi")
fruits.remove("banana")
len(fruits)          # 3
sorted(fruits)       # new sorted list</code></pre>
<h2>List comprehensions</h2>
<p>A concise way to transform or filter lists:</p>
<pre><code>numbers = [1, 2, 3, 4, 5]
squares = [n ** 2 for n in numbers]           # [1,4,9,16,25]
evens = [n for n in numbers if n % 2 == 0]    # [2, 4]</code></pre>
<p>Comprehensions are more idiomatic (and often faster) than for-loop + append.</p>`,
          [
            q("fruits[-1] gives…", ["Error", "First item", "Last item", "Reversed list"], 2, "Negative indexes count from the end."),
            q("Slice syntax [1:3] includes…", ["Index 1, 2, 3", "Index 1, 2", "Index 1 only", "Index 3 only"], 1, "End is exclusive."),
            q("Comprehension is…", ["Reading docs", "Concise list/filter syntax", "A class", "A decorator"], 1, "Powerful expression-based builder."),
          ]
        ),
        L("dictionaries", "Dictionaries & Tuples",
          "Key-value maps and immutable tuples.",
          `<p>Dictionaries store key-value pairs:</p>
<pre><code>user = {
    "username": "ana",
    "vip": False,
    "age": 25,
}
user["username"]         # "ana"
user["vip"] = True       # mutate
user.get("email", "n/a") # safe lookup with default
"age" in user            # True
user.keys(), user.values(), user.items()</code></pre>
<h2>Tuples</h2>
<p>Tuples are immutable sequences. Common for returning multiple values:</p>
<pre><code>point = (3, 4)
x, y = point    # unpack
def minmax(xs): return (min(xs), max(xs))
lo, hi = minmax([3, 1, 5])</code></pre>
<h2>Sets</h2>
<pre><code>tags = {"python", "web", "python"}  # {"python", "web"} — duplicates removed
tags.add("ai")
"web" in tags</code></pre>`,
          [
            q("Tuples are…", ["Mutable", "Immutable", "Unordered", "Keyed"], 1, "Can't modify after creation."),
            q("Safe dict lookup with default?", ["dict.safe()", "dict.get(key, default)", "dict.try(key)", "dict[key or default]"], 1, ".get(key, default)."),
            q("Sets remove…", ["Order", "Duplicates", "Keys", "Types"], 1, "Duplicate elements are dropped."),
          ]
        ),
        L("if-else", "If / Elif / Else",
          "Decision-making the Pythonic way.",
          `<p>Python uses indentation — no braces. The <code>elif</code> keyword handles chained conditions:</p>
<pre><code>score = 87
if score &gt;= 90:
    grade = "A"
elif score &gt;= 80:
    grade = "B"
elif score &gt;= 70:
    grade = "C"
else:
    grade = "F"
print(grade)</code></pre>
<h2>Truthiness</h2>
<p>Empty containers are falsy. Use this idiom:</p>
<pre><code>names = []
if not names:
    print("No names yet.")</code></pre>
<h2>Ternary</h2>
<pre><code>label = "Adult" if age &gt;= 18 else "Minor"</code></pre>
<h2>Comparison chaining</h2>
<pre><code>if 0 &lt; score &lt; 100: ...  # Pythonic, works like math</code></pre>`,
          [
            q("Multi-branch keyword?", ["elseif", "elif", "elsif", "else if"], 1, "elif."),
            q("Empty list is…", ["Truthy", "Falsy", "Error", "None"], 1, "Empty containers are falsy."),
            q("Python comparison chaining?", ["Not supported", "a < b < c works", "Needs parentheses", "Only for ints"], 1, "a < b < c is idiomatic."),
          ]
        ),
        L("loops", "For & While Loops",
          "Iterate like a Pythonista.",
          `<p>Python's <code>for</code> loop is always a <em>for-each</em>. You iterate a sequence directly:</p>
<pre><code>for fruit in ["apple", "banana"]:
    print(fruit)

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
<pre><code>for x in items:
    if x &lt; 0:
        break        # stop the loop
    if x == 0:
        continue     # skip this iteration
else:
    print("completed without break")</code></pre>
<p>That <code>else</code> on a for-loop is a rare but powerful Python feature: it runs only if the loop finished without hitting <code>break</code>.</p>`,
          [
            q("range(5) produces…", ["1..5", "0..4", "0..5", "1..4"], 1, "0 up to but not including 5."),
            q("Which gets index and value?", ["zip", "enumerate", "range", "items"], 1, "enumerate(iterable) yields (i, v)."),
            q("for...else runs when?", ["Always", "If loop finished without break", "If break used", "Never"], 1, "Only when no break triggered."),
          ]
        ),
        L("functions", "Functions",
          "Define behavior once, use it anywhere.",
          `<p>Define a function with <code>def</code>:</p>
<pre><code>def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

greet("Ana")                    # "Hello, Ana!"
greet("Ana", "Hi")              # "Hi, Ana!"
greet(greeting="Hey", name="Ana")  # keyword args</code></pre>
<h2>*args and **kwargs</h2>
<p>Accept variable numbers of positional and keyword arguments:</p>
<pre><code>def log(*args, **kwargs):
    print(args, kwargs)

log(1, 2, user="ana")   # (1, 2) {"user": "ana"}</code></pre>
<h2>Type hints (optional but recommended)</h2>
<pre><code>def add(a: int, b: int) -&gt; int:
    return a + b</code></pre>
<h2>Docstrings</h2>
<pre><code>def area(r: float) -&gt; float:
    """Return the area of a circle with radius r."""
    return 3.14159 * r * r</code></pre>`,
          [
            q("Keyword to define a function?", ["function", "fn", "def", "func"], 2, "def."),
            q("**kwargs captures…", ["Positional args", "Keyword args as dict", "Errors", "Return values"], 1, "Keyword args become a dict."),
            q("Docstring goes where?", ["After def", "First line of function body (in quotes)", "In comments", "Outside the file"], 1, "Triple-quoted string as first line."),
          ]
        ),
        L("quiz-project", "Mini Project: Quiz Game",
          "Apply everything into a working game.",
          `<p>Let's build a small terminal quiz:</p>
<pre><code>questions = [
    {"q": "Capital of France?", "a": "paris"},
    {"q": "2 + 2?", "a": "4"},
    {"q": "Language created by Guido?", "a": "python"},
]

def run_quiz(questions):
    score = 0
    for i, item in enumerate(questions, start=1):
        ans = input(f"Q{i}. {item['q']}\\n&gt; ").strip().lower()
        if ans == item["a"]:
            print("✓ Correct!")
            score += 1
        else:
            print(f"✗ Wrong. Answer: {item['a']}")
    pct = round(100 * score / len(questions))
    print(f"\\nScore: {score}/{len(questions)} ({pct}%)")

if __name__ == "__main__":
    run_quiz(questions)</code></pre>
<h2>What you learned</h2>
<ul>
  <li>Data modeling with dictionaries and lists.</li>
  <li>Iteration with <code>enumerate</code>.</li>
  <li>Reading input and comparing strings.</li>
  <li>Basic arithmetic for scoring.</li>
  <li>The <code>if __name__ == "__main__"</code> idiom — the standard Python entry point.</li>
</ul>
<div class="callout"><div class="ico">🏆</div><p>Nice work. Next step: the Python Developer (VIP) course for OOP, decorators, testing, and APIs.</p></div>`,
          [
            q("What does if __name__ == '__main__' do?", ["Runs only when imported", "Runs only when executed directly", "Runs always", "Defines a main variable"], 1, "Only when executed as a script."),
            q(".strip().lower() does what?", ["Uppercases", "Trims and lowercases", "Reverses", "Splits"], 1, "Remove whitespace and lowercase."),
            q("enumerate(items, start=1) starts index at…", ["0", "1", "items[0]", "Can't change start"], 1, "start= sets the initial index."),
          ]
        ),
      ],
    },

    // =================================================================
    // 5. Advanced JavaScript (VIP)
    // =================================================================
    {
      id: "advanced-js",
      title: "Advanced JavaScript",
      tagline: "Closures, async, classes, modules — go from junior to senior.",
      description: "Level-up the hard parts: scope and closures, prototypes and classes, promises and async/await, modules, and modern patterns.",
      level: "Intermediate",
      duration: "10h",
      theme: "theme-advjs",
      cover: "Advanced JS",
      vip: true,
      instructor: "Caio Mendes",
      lessons: [
        L("scope-closures", "Scope & Closures",
          "Why closures are JS's superpower.",
          `<p>Scope is the region of code where a variable is visible. JavaScript has three kinds: global, function, and block (introduced with <code>let</code>/<code>const</code> in ES2015). <code>var</code> only respects function scope — one reason to avoid it.</p>
<pre><code>{
  let x = 1;       // block-scoped
  const y = 2;
}
console.log(x);   // ReferenceError</code></pre>
<h2>Closures</h2>
<p>A closure is a function that <em>remembers</em> the variables from the scope where it was created, even after that scope has ended:</p>
<pre><code>function counter() {
  let count = 0;
  return () =&gt; ++count;
}

const next = counter();
next();  // 1
next();  // 2</code></pre>
<p>That inner arrow function "closes over" <code>count</code>. Closures power private state, memoization, event handlers, and currying.</p>`,
          [
            q("Which keywords are block-scoped?", ["var", "let & const", "All three", "function"], 1, "let and const. var is function-scoped."),
            q("A closure is…", ["A try/catch", "A function that remembers its defining scope", "A loop", "A class"], 1, "Functions retain outer variables."),
            q("Closures are useful for…", ["Private state", "Currying", "Memoization", "All of the above"], 3, "All of these."),
          ]
        ),
        L("this", "The 'this' Keyword",
          "The most-debated feature in JavaScript — demystified.",
          `<p><code>this</code> depends on <em>how</em> a function is called, not where it's defined. There are four binding rules, in priority order:</p>
<ol>
  <li><strong>new binding</strong> — <code>new Foo()</code> sets <code>this</code> to the new object.</li>
  <li><strong>Explicit binding</strong> — <code>.call(ctx)</code>, <code>.apply(ctx, args)</code>, <code>.bind(ctx)</code>.</li>
  <li><strong>Method call</strong> — <code>obj.method()</code> sets <code>this</code> to <code>obj</code>.</li>
  <li><strong>Default</strong> — otherwise <code>this</code> is the global object (or <code>undefined</code> in strict mode).</li>
</ol>
<h2>Arrow functions are different</h2>
<p>Arrow functions don't have their own <code>this</code>. They inherit it from the enclosing scope. This is why they're perfect for callbacks where you want to preserve <code>this</code>:</p>
<pre><code>class Timer {
  constructor() { this.count = 0; }
  start() {
    setInterval(() =&gt; { this.count++; }, 1000);
    //          ^ arrow preserves this
  }
}</code></pre>`,
          [
            q("Arrow functions bind their own this?", ["Yes", "No — they inherit from outer scope", "Only in classes", "Only as methods"], 1, "Arrows don't have their own this."),
            q("new Foo() — this is…", ["global", "undefined", "the new instance", "the prototype"], 2, "The newly created instance."),
            q("To force this to a specific value when calling?", [".call / .apply / .bind", "this=", "use new", "Not possible"], 0, "Those are the explicit binding methods."),
          ]
        ),
        L("proto-classes", "Prototypes & Classes",
          "JS's inheritance model, and the class syntax that sits on top.",
          `<p>JavaScript is a <em>prototype-based</em> language. Every object has a hidden link (<code>__proto__</code>) to another object, its prototype. Property lookups walk up the prototype chain.</p>
<pre><code>class User {
  constructor(username) {
    this.username = username;
    this.vip = false;
  }
  greet() { return \`Hi, \${this.username}\`; }
}

class VipUser extends User {
  constructor(username) {
    super(username);
    this.vip = true;
  }
  perk() { return "Access to all courses!"; }
}

const u = new VipUser("ana");
u.greet();  // "Hi, ana"
u.perk();</code></pre>
<h2>Under the hood</h2>
<p>Classes are syntactic sugar over functions and prototypes. <code>class Foo {}</code> + <code>extends Bar</code> sets up the prototype chain for you.</p>`,
          [
            q("class is syntactic sugar over…", ["Objects only", "Prototypes and constructor functions", "JSON", "Interfaces"], 1, "Prototypes."),
            q("Keyword to inherit?", ["inherits", "extends", "implements", "super"], 1, "extends."),
            q("super() is used to…", ["Make something super fast", "Call parent constructor", "Define a static method", "Add a getter"], 1, "Invoke the parent constructor."),
          ]
        ),
        L("async-callbacks", "Async: Callbacks",
          "The old way — and why we moved on.",
          `<p>JavaScript is single-threaded. Anything that takes time (network, disk, timers) is handled by the runtime and the result comes back <em>later</em>. For years, the way to handle "later" was a callback:</p>
<pre><code>function fetchUser(id, callback) {
  setTimeout(() =&gt; callback({ id, name: "Ana" }), 500);
}

fetchUser(1, (user) =&gt; {
  fetchUser(2, (user2) =&gt; {
    fetchUser(3, (user3) =&gt; {
      // callback hell 🪜
    });
  });
});</code></pre>
<h2>The problems</h2>
<ul>
  <li>Nested callbacks become unreadable ("callback hell").</li>
  <li>Error handling is duplicated in every callback.</li>
  <li>No way to compose parallel async work cleanly.</li>
</ul>
<p>These pain points led to Promises, introduced in ES2015.</p>`,
          [
            q("JS is single- or multi-threaded?", ["Multi", "Single (with async runtime)", "Depends on browser", "Always 2 threads"], 1, "Single-threaded event loop."),
            q("Callback hell is…", ["A library", "Deep nesting of callbacks", "A syntax error", "Slow execution"], 1, "Pyramid of doom."),
            q("What year did Promises land officially?", ["ES5", "ES2015", "ES2018", "ES2022"], 1, "ES2015 a.k.a. ES6."),
          ]
        ),
        L("promises", "Promises",
          "A better abstraction for 'a value later.'",
          `<p>A Promise is an object representing an async operation. It starts <em>pending</em> and eventually becomes <em>fulfilled</em> (with a value) or <em>rejected</em> (with an error).</p>
<pre><code>const p = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve("done"), 500);
});

p.then(value =&gt; console.log(value))
 .catch(err =&gt; console.error(err))
 .finally(() =&gt; console.log("cleanup"));</code></pre>
<h2>Composition</h2>
<pre><code>Promise.all([p1, p2, p3])      // wait for all (fail-fast)
Promise.allSettled([p1, p2])   // wait for all, no short-circuit
Promise.race([p1, p2])          // first to settle wins</code></pre>
<p>Promises compose with <code>.then</code> chains — each <code>.then</code> returns a new promise.</p>`,
          [
            q("Promise states?", ["open/closed", "pending/fulfilled/rejected", "start/end", "success/fail"], 1, "Three states."),
            q("Promise.all fails when?", ["Any promise rejects", "All reject", "First resolves", "Never"], 0, "One rejection rejects the whole."),
            q("What runs regardless of outcome?", [".then", ".catch", ".finally", ".end"], 2, ".finally always runs."),
          ]
        ),
        L("async-await", "Async / Await",
          "Write async code that reads synchronously.",
          `<p><code>async</code>/<code>await</code> is syntactic sugar over promises — but it transforms how async code looks:</p>
<pre><code>async function loadUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    if (!res.ok) throw new Error("Not found");
    const user = await res.json();
    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}</code></pre>
<h2>Rules</h2>
<ul>
  <li><code>await</code> works only inside <code>async</code> functions (or top-level in modules).</li>
  <li>An <code>async</code> function always returns a Promise.</li>
  <li>Use <code>try/catch</code> for errors — cleaner than <code>.catch</code>.</li>
</ul>
<h2>Parallelism</h2>
<pre><code>// Sequential (slow)
const a = await fetch("/a");
const b = await fetch("/b");

// Parallel (fast)
const [a2, b2] = await Promise.all([fetch("/a"), fetch("/b")]);</code></pre>`,
          [
            q("async functions return…", ["A raw value", "A Promise", "undefined", "null"], 1, "Always a Promise."),
            q("To run two fetches in parallel?", ["await both", "await Promise.all([...])", "fetch.parallel()", "Promise.race"], 1, "Promise.all lets them run concurrently."),
            q("Error handling with async/await uses…", ["try/catch", ".catch", "onError event", "throw only"], 0, "try/catch is idiomatic."),
          ]
        ),
        L("fetch", "The Fetch API",
          "Make HTTP requests from the browser.",
          `<p><code>fetch</code> is the standard way to talk to HTTP servers from JavaScript.</p>
<pre><code>const res = await fetch("https://api.example.com/users");
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
const users = await res.json();</code></pre>
<h2>POST with a body</h2>
<pre><code>await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "ana", password: "secret" }),
});</code></pre>
<h2>AbortController — cancel a request</h2>
<pre><code>const controller = new AbortController();
fetch("/slow", { signal: controller.signal });
controller.abort();  // cancel</code></pre>
<div class="callout"><div class="ico">⚠️</div><p><code>fetch</code> only rejects on network failure. A 404 or 500 still resolves — you must check <code>res.ok</code>.</p></div>`,
          [
            q("fetch rejects on HTTP 500?", ["Yes", "No — check res.ok", "Only if status > 500", "Sometimes"], 1, "It resolves; you must check res.ok."),
            q("How to send JSON?", ["JSON.parse body", "body: JSON.stringify(...)", "headers only", "Use XML"], 1, "Stringify the body; set header."),
            q("How to cancel a fetch?", ["fetch.cancel()", "AbortController", "signal.kill()", "Not possible"], 1, "AbortController + signal."),
          ]
        ),
        L("modules", "ES Modules",
          "Split your code into files the right way.",
          `<p>Since ES2015, JavaScript has a standard module system. Split each piece of functionality into its own file:</p>
<pre><code>// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;
export default function area(r) { return PI * r * r; }

// app.js
import area, { add, PI } from "./math.js";
console.log(add(1, 2));  // 3</code></pre>
<h2>Named vs default exports</h2>
<p>Use named exports for most things — they keep names consistent across the codebase. Reserve default for a module's "main" export.</p>
<h2>Browsers and Node</h2>
<p>In the browser, load a module with <code>&lt;script type="module" src="app.js"&gt;</code>. In Node.js, use <code>"type": "module"</code> in <code>package.json</code>.</p>`,
          [
            q("Keyword to expose a function?", ["share", "export", "public", "emit"], 1, "export."),
            q("How to mark a script as a module in HTML?", ["<script module>", "<script type=\"module\">", "<module>", "<script lang=\"esm\">"], 1, "type=\"module\" attribute."),
            q("Import with {} uses…", ["default imports", "named imports", "CommonJS", "Types"], 1, "Named imports use braces."),
          ]
        ),
        L("array-methods", "Higher-Order Array Methods",
          ".map, .filter, .reduce — mastery level.",
          `<p>These three methods are the foundation of functional JavaScript. Mastering them replaces countless for-loops.</p>
<pre><code>const users = [
  { name: "Ana", vip: true, spent: 1200 },
  { name: "Bob", vip: false, spent: 50 },
  { name: "Cleo", vip: true, spent: 500 },
];

// map — transform each
const names = users.map(u =&gt; u.name);

// filter — keep matching
const vipOnly = users.filter(u =&gt; u.vip);

// reduce — aggregate to a single value
const totalSpent = users.reduce((sum, u) =&gt; sum + u.spent, 0);

// chain them
const totalVipSpend = users
  .filter(u =&gt; u.vip)
  .reduce((s, u) =&gt; s + u.spent, 0);</code></pre>
<h2>Other essential methods</h2>
<ul>
  <li><code>.find</code>, <code>.findIndex</code> — first match.</li>
  <li><code>.some</code>, <code>.every</code> — boolean checks.</li>
  <li><code>.flat</code>, <code>.flatMap</code> — flatten nested arrays.</li>
  <li><code>.sort((a,b) =&gt; a - b)</code> — always pass a comparator.</li>
</ul>`,
          [
            q(".reduce's second arg is…", ["The length", "The initial accumulator", "A filter", "A step"], 1, "The initial value of the accumulator."),
            q("Default .sort compares how?", ["Numerically", "As strings", "By length", "Randomly"], 1, "As strings — always pass a comparator for numbers."),
            q("Which returns a boolean?", [".map", ".filter", ".every", ".reduce"], 2, ".every / .some return booleans."),
          ]
        ),
        L("destructuring", "Destructuring & Spread",
          "Modern syntax for extracting and combining values.",
          `<p>Destructuring unpacks values from arrays and objects into variables:</p>
<pre><code>const user = { name: "Ana", age: 25, role: "admin" };
const { name, age } = user;

const [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]

// Defaults + rename
const { title = "Untitled", meta: metadata = {} } = post;</code></pre>
<h2>Spread in arrays</h2>
<pre><code>const all = [...group1, ...group2];
const copy = [...original];
Math.max(...[1, 8, 3]);   // 8</code></pre>
<h2>Spread in objects</h2>
<pre><code>const updated = { ...user, role: "owner" };   // override role
const merged = { ...defaults, ...overrides };</code></pre>
<h2>Rest parameters</h2>
<pre><code>function sum(...nums) {
  return nums.reduce((s, n) =&gt; s + n, 0);
}
sum(1, 2, 3);  // 6</code></pre>`,
          [
            q("{ ...a, x: 1 } gives?", ["Mutates a", "Copy of a with x overridden", "A new array", "Error"], 1, "Non-mutating merge."),
            q("Rest parameters syntax?", ["function f(rest...)", "function f(...args)", "function f(args*)", "function f(#args)"], 1, "function f(...args)."),
            q("Rename on destructure?", ["{ name = rename }", "{ name: newName }", "{ name as newName }", "Not possible"], 1, "{ name: newName } renames."),
          ]
        ),
        L("error-handling", "Error Handling",
          "Fail gracefully and recover.",
          `<p>Every real program must handle errors. The basic shape:</p>
<pre><code>try {
  const data = JSON.parse(text);
  return data;
} catch (err) {
  console.error("Parse failed:", err.message);
  return null;
} finally {
  // cleanup that always runs
}</code></pre>
<h2>Custom errors</h2>
<pre><code>class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.field = field;
    this.name = "ValidationError";
  }
}

throw new ValidationError("email", "Invalid format");</code></pre>
<h2>Async errors</h2>
<pre><code>async function run() {
  try {
    const res = await fetch("/api");
    if (!res.ok) throw new Error(res.statusText);
  } catch (err) {
    notifyUser("Something went wrong");
  }
}</code></pre>
<div class="callout"><div class="ico">🛡️</div><p>Never silently swallow errors. At minimum, log them. Real users hit every edge case.</p></div>`,
          [
            q("finally block runs…", ["Only on success", "Only on error", "Always", "Never"], 2, "Always — great for cleanup."),
            q("To throw your own error?", ["raise", "throw", "error()", "fail"], 1, "throw new Error(...)."),
            q("Custom errors extend?", ["Exception", "Error", "Throw", "Failure"], 1, "extends Error."),
          ]
        ),
        L("perf", "Performance Tips",
          "Small techniques that keep apps snappy.",
          `<p>Most performance wins come from a few basic habits:</p>
<ul>
  <li><strong>Debounce</strong> rapid events (input, scroll). Fire your handler only after the user pauses.</li>
  <li><strong>Throttle</strong> — cap how often a function can run.</li>
  <li><strong>Cache</strong> expensive computations with memoization.</li>
  <li><strong>Avoid layout thrashing</strong> — batch DOM reads and writes.</li>
  <li><strong>Use <code>requestAnimationFrame</code></strong> for visual updates.</li>
  <li><strong>Ship less JavaScript</strong> — lazy-load, code-split, drop unused libraries.</li>
</ul>
<h2>Debounce example</h2>
<pre><code>function debounce(fn, ms = 250) {
  let t;
  return (...args) =&gt; {
    clearTimeout(t);
    t = setTimeout(() =&gt; fn(...args), ms);
  };
}

input.addEventListener("input", debounce(search, 300));</code></pre>
<h2>Measure, don't guess</h2>
<p>Use the Performance tab in DevTools. Trust numbers over intuition.</p>`,
          [
            q("Debounce vs throttle — debounce fires…", ["On every event", "Only once per interval", "Once after the last event + pause", "Never"], 2, "After user stops firing events."),
            q("Best place to measure JS perf?", ["GPU", "Performance DevTools tab", "Browser history", "Printer"], 1, "The Performance tab."),
            q("Smooth animation callback?", ["setInterval", "setTimeout", "requestAnimationFrame", "setImmediate"], 2, "rAF aligns with the browser's repaint."),
          ]
        ),
      ],
    },

    // =================================================================
    // 6. Python Developer (VIP)
    // =================================================================
    {
      id: "python-developer",
      title: "Python Developer",
      tagline: "Go from scripts to production systems.",
      description: "OOP, decorators, generators, testing, packaging, and building real APIs with Flask and FastAPI. The roadmap from script kid to senior.",
      level: "Intermediate",
      duration: "12h",
      theme: "theme-python",
      cover: "PyDev",
      vip: true,
      instructor: "Lucas Pereira",
      lessons: [
        L("toolchain", "Toolchain & Virtual Environments",
          "Professional Python starts with isolated environments.",
          `<p>A real Python project isolates its dependencies. Never install project libraries globally. Use virtual environments.</p>
<pre><code>$ python -m venv .venv
$ source .venv/bin/activate       # or .venv\\Scripts\\activate on Windows
(.venv) $ pip install requests flask pytest
(.venv) $ pip freeze &gt; requirements.txt
(.venv) $ deactivate</code></pre>
<h2>Modern alternatives</h2>
<ul>
  <li><strong>uv</strong> — ultra-fast package manager (Rust-based).</li>
  <li><strong>Poetry</strong> — dependency management + packaging, with a lock file.</li>
  <li><strong>Hatch</strong> — modern project manager.</li>
</ul>
<h2>pyproject.toml</h2>
<p>The new standard for project configuration. Replaces <code>setup.py</code> + <code>requirements.txt</code> for most projects. Declare dependencies, version, entry points — all in one TOML file.</p>`,
          [
            q("Why use a venv?", ["Faster install", "Isolate per-project dependencies", "Required by Python", "Looks cool"], 1, "Each project gets its own libs."),
            q("File to pin dependencies?", ["requirements.txt", "deps.py", "pip.ini", "libs.json"], 0, "requirements.txt (or pyproject.toml)."),
            q("Modern standard project file?", ["setup.py", "pyproject.toml", "Pipfile", "package.json"], 1, "pyproject.toml."),
          ]
        ),
        L("data-structures", "Advanced Data Structures",
          "collections, dataclasses, typing.",
          `<p>Beyond lists and dicts, Python's standard library has huge wins:</p>
<h2>collections</h2>
<pre><code>from collections import Counter, defaultdict, deque, namedtuple

Counter("mississippi")          # {'i': 4, 's': 4, ...}

dd = defaultdict(list)
dd["users"].append("ana")       # no KeyError

q = deque([1,2,3])              # O(1) append/pop on both ends
q.appendleft(0)

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)</code></pre>
<h2>dataclasses</h2>
<pre><code>from dataclasses import dataclass, field

@dataclass
class User:
    username: str
    vip: bool = False
    tags: list[str] = field(default_factory=list)

u = User("ana")
print(u)  # User(username='ana', vip=False, tags=[])</code></pre>
<p>dataclasses auto-generate <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code>. Perfect for value objects.</p>`,
          [
            q("Best for counting occurrences?", ["dict", "list", "Counter", "set"], 2, "collections.Counter."),
            q("Mutable default arg trap — fix with?", ["None guard", "field(default_factory=...)", "tuple", "Both 1 and 2"], 3, "Both work; factory is idiomatic for dataclasses."),
            q("@dataclass auto-generates what?", ["sql", "__init__, __repr__, __eq__", "tests", "docstrings"], 1, "Init, repr, eq."),
          ]
        ),
        L("comprehensions", "Comprehensions & Generators",
          "Pythonic data pipelines.",
          `<p>Python's list / dict / set comprehensions are terse data pipelines:</p>
<pre><code>squares = [n*n for n in range(10)]
index = {u.id: u for u in users}
unique = {c.strip().lower() for c in words}</code></pre>
<h2>Generator expressions</h2>
<p>Swap <code>[]</code> for <code>()</code> to get a lazy sequence that doesn't build a full list in memory:</p>
<pre><code>total = sum(n*n for n in range(10_000_000))   # no giant list created</code></pre>
<h2>Generator functions with yield</h2>
<pre><code>def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

from itertools import islice
list(islice(fibonacci(), 10))  # [0,1,1,2,3,5,8,13,21,34]</code></pre>
<p>Generators are the right tool when your data is huge or infinite — they stream one value at a time.</p>`,
          [
            q("Generator expression uses?", ["[...]", "(...)", "{...}", "<...>"], 1, "Parentheses."),
            q("yield pauses the function and…", ["Returns but discards state", "Keeps state for next call", "Throws an error", "Closes the file"], 1, "Preserves local state."),
            q("Best for streaming huge data?", ["List comprehension", "Generator", "Dict", "Counter"], 1, "Generators don't materialize all values."),
          ]
        ),
        L("oop", "Object-Oriented Python",
          "Classes, inheritance, dunder methods.",
          `<pre><code>class Course:
    def __init__(self, title, vip=False):
        self.title = title
        self.vip = vip
        self._lessons = []

    def add_lesson(self, lesson):
        self._lessons.append(lesson)

    def __len__(self):          # len(course)
        return len(self._lessons)

    def __repr__(self):
        return f"Course({self.title!r}, vip={self.vip})"

class VipCourse(Course):
    def __init__(self, title):
        super().__init__(title, vip=True)</code></pre>
<h2>Key ideas</h2>
<ul>
  <li><code>self</code> is the instance. Always the first parameter of instance methods.</li>
  <li>Dunder methods (<code>__init__</code>, <code>__len__</code>, <code>__eq__</code>, <code>__iter__</code>) hook into built-in syntax.</li>
  <li>Name with a leading underscore (<code>_private</code>) to signal "implementation detail."</li>
  <li>Prefer composition over inheritance when possible.</li>
</ul>`,
          [
            q("First parameter of instance method?", ["this", "self", "cls", "instance"], 1, "self by convention."),
            q("__len__ customizes…", ["Print", "len(obj)", "Iteration", "Equality"], 1, "len() delegates to __len__."),
            q("Access parent's method?", ["this.parent", "super().method()", "Class.method()", "All but 1"], 3, "super() and explicit Class.method() both work."),
          ]
        ),
        L("decorators", "Decorators",
          "Functions that wrap functions.",
          `<p>A decorator is a function that takes a function and returns a new function. It's how Python adds logging, caching, auth, and more to existing code without changing it.</p>
<pre><code>import time
from functools import wraps

def timed(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = fn(*args, **kwargs)
        print(f"{fn.__name__} took {time.time() - start:.3f}s")
        return result
    return wrapper

@timed
def slow():
    time.sleep(1)
    return "done"

slow()  # slow took 1.001s</code></pre>
<h2>Decorators with arguments</h2>
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
def fetch(): ...</code></pre>`,
          [
            q("What does @wraps do?", ["Optimizes speed", "Preserves name/docstring of wrapped fn", "Adds logging", "Caches"], 1, "Preserves metadata."),
            q("Decorator is…", ["A class", "A function that wraps a function", "A module", "A test"], 1, "Higher-order function."),
            q("Decorator with args needs…", ["1 level", "2 nested closures", "3 nested closures", "Not possible"], 2, "Outer factory + decorator + wrapper."),
          ]
        ),
        L("iter-gen", "Iterators & Generators",
          "How `for` works under the hood.",
          `<p>Any object with <code>__iter__</code> (returning an iterator) and <code>__next__</code> (returning the next value or raising <code>StopIteration</code>) can be used in a <code>for</code> loop.</p>
<pre><code>class Counter:
    def __init__(self, stop): self.n, self.stop = 0, stop
    def __iter__(self): return self
    def __next__(self):
        if self.n &gt;= self.stop: raise StopIteration
        self.n += 1
        return self.n

for x in Counter(3): print(x)  # 1, 2, 3</code></pre>
<h2>Generators make this simpler</h2>
<pre><code>def counter(stop):
    n = 0
    while n &lt; stop:
        n += 1
        yield n</code></pre>
<h2>itertools</h2>
<p>Python's <code>itertools</code> is a combinator library: <code>chain</code>, <code>cycle</code>, <code>islice</code>, <code>takewhile</code>, <code>groupby</code>, <code>product</code>, <code>permutations</code>. Master them and your data code shrinks dramatically.</p>`,
          [
            q("When an iterator is exhausted it raises…", ["EndOfInput", "StopIteration", "Exhausted", "None"], 1, "StopIteration."),
            q("Simplest way to build an iterator?", ["Class with dunders", "Generator function", "Both work", "Built-in only"], 2, "Generators are concise."),
            q("itertools.chain does?", ["Concatenates iterables", "Sorts", "Filters", "Reverses"], 0, "Joins multiple iterables."),
          ]
        ),
        L("files-json", "File I/O & JSON",
          "Read, write, serialize.",
          `<pre><code># Text
with open("notes.txt", "r", encoding="utf-8") as f:
    text = f.read()

with open("out.txt", "w") as f:
    f.write("Hello")

# JSON
import json
data = {"users": [{"name": "Ana"}]}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)
with open("data.json") as f:
    data = json.load(f)</code></pre>
<h2>Why 'with'?</h2>
<p>The <code>with</code> statement uses a context manager. It guarantees the file is closed, even if an exception is thrown. Always use it for files, locks, DB connections.</p>
<h2>Paths</h2>
<pre><code>from pathlib import Path
p = Path.home() / ".config" / "app.json"
p.parent.mkdir(exist_ok=True)
p.write_text("{}", encoding="utf-8")</code></pre>
<p><code>pathlib</code> is the modern replacement for <code>os.path</code>. Use it.</p>`,
          [
            q("Safest way to open a file?", ["open()", "with open() as f:", "file()", "os.open()"], 1, "Context manager auto-closes."),
            q("Modern path module?", ["os.path", "pathlib", "glob", "fs"], 1, "pathlib.Path."),
            q("JSON roundtrip uses…", ["json.dump / json.load", "pickle", "yaml", "csv"], 0, "dump writes; load reads."),
          ]
        ),
        L("modules-packages", "Modules & Packages",
          "Structure real codebases.",
          `<p>A <strong>module</strong> is a .py file. A <strong>package</strong> is a folder with an <code>__init__.py</code> (or PEP 420 namespace).</p>
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

def authenticate(u, p): ...

# devstart/cli.py
from devstart.auth.login import authenticate</code></pre>
<h2>__init__.py</h2>
<p>Can be empty, or can re-export things for a nice public API:</p>
<pre><code># devstart/auth/__init__.py
from .login import authenticate
from .models import User
__all__ = ["authenticate", "User"]</code></pre>
<h2>Absolute vs relative imports</h2>
<p>Inside a package, prefer relative imports (<code>from .models import User</code>) for internal siblings, and absolute imports for anything the user types.</p>`,
          [
            q("Package is…", ["A zip file", "A folder with __init__.py", "A class", "A function"], 1, "Directory of modules."),
            q("Relative import syntax?", ["from . import x", "from ~ import x", "import :x", "imp x"], 0, "Dots indicate relative location."),
            q("__all__ is used for…", ["Errors", "Controlling * imports and public API", "Tests", "Types"], 1, "Declares the module's public names."),
          ]
        ),
        L("pytest", "Testing with pytest",
          "Tests are what lets you sleep at night.",
          `<p>Install pytest: <code>pip install pytest</code>. Create <code>tests/test_math.py</code>:</p>
<pre><code>from myapp.math import add

def test_add_positive():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-1, -2) == -3

import pytest

def test_div_by_zero():
    with pytest.raises(ZeroDivisionError):
        1 / 0</code></pre>
<h2>Fixtures</h2>
<pre><code>@pytest.fixture
def user():
    return {"username": "ana", "vip": False}

def test_vip_flag(user):
    assert user["vip"] is False</code></pre>
<h2>Parametrize</h2>
<pre><code>@pytest.mark.parametrize("a,b,sum", [(1,1,2), (2,3,5), (0,0,0)])
def test_add(a, b, sum):
    assert add(a, b) == sum</code></pre>
<p>Write tests <em>as you go</em>, not at the end. Aim for fast, focused, deterministic tests.</p>`,
          [
            q("Test files named?", ["*.test.py", "test_*.py or *_test.py", "tests.py only", "Anywhere"], 1, "pytest convention."),
            q("@pytest.fixture provides…", ["A random value", "Reusable setup for tests", "A logger", "A config"], 1, "Injected dependencies."),
            q("Check exception is raised?", ["try/except", "with pytest.raises(...)", "assert raises", "Both 1 and 2"], 1, "pytest.raises is idiomatic."),
          ]
        ),
        L("requests-apis", "Working with APIs",
          "Consume HTTP services with requests.",
          `<pre><code>import requests

res = requests.get("https://api.example.com/users", timeout=5)
res.raise_for_status()
users = res.json()

res = requests.post(
    "https://api.example.com/login",
    json={"username": "ana", "password": "secret"},
    headers={"Accept": "application/json"},
)</code></pre>
<h2>Sessions, retries, and pagination</h2>
<pre><code>with requests.Session() as s:
    s.headers["Authorization"] = "Bearer ..."
    while url:
        r = s.get(url, timeout=5)
        r.raise_for_status()
        data = r.json()
        yield from data["items"]
        url = data.get("next")</code></pre>
<h2>httpx — the async alternative</h2>
<p><code>httpx</code> is a modern client with async support. Use it when you need concurrency or modern HTTP/2.</p>`,
          [
            q("Raise on 4xx/5xx?", ["res.ok()", "res.raise_for_status()", "res.error()", "res.check()"], 1, "raise_for_status()."),
            q("Send JSON body cleanly?", ["data=...", "json=...", "body=...", "payload=..."], 1, "json= serializes + sets header."),
            q("Async HTTP client?", ["requests", "httpx", "urllib3", "urllib"], 1, "httpx supports async."),
          ]
        ),
        L("flask", "Intro to Flask",
          "Build a minimal web API.",
          `<pre><code># app.py
from flask import Flask, jsonify, request

app = Flask(__name__)
courses = []

@app.get("/courses")
def list_courses():
    return jsonify(courses)

@app.post("/courses")
def create_course():
    body = request.get_json()
    courses.append(body)
    return jsonify(body), 201

if __name__ == "__main__":
    app.run(debug=True)</code></pre>
<p>Run: <code>flask --app app run</code>. Visit <code>http://localhost:5000/courses</code>.</p>
<h2>Flask philosophy</h2>
<p>Flask is a micro-framework: small core, lots of extensions (Flask-Login, Flask-SQLAlchemy, Flask-Migrate). You assemble the stack you want.</p>
<h2>When to use Flask</h2>
<p>Great for learning, small APIs, admin dashboards, and when you want fine-grained control. For a larger app consider Django; for a modern typed API, see the next lesson on FastAPI.</p>`,
          [
            q("Decorator for a GET route?", ["@app.get(...)", "@app.route(..., method='GET')", "Both work", "@route"], 2, "Both; .get is newer/clearer."),
            q("What does jsonify do?", ["Parses JSON", "Serializes to JSON response with right headers", "Makes JSONP", "Minifies JSON"], 1, "Wraps a dict/list into a Response."),
            q("Flask is described as…", ["Full-stack framework", "Micro-framework", "ORM", "Web server"], 1, "Micro: small core, many extensions."),
          ]
        ),
        L("fastapi", "Intro to FastAPI",
          "Typed, async, production-ready APIs.",
          `<pre><code># main.py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Course(BaseModel):
    title: str
    vip: bool = False

db: list[Course] = []

@app.get("/courses", response_model=list[Course])
def list_courses():
    return db

@app.post("/courses", response_model=Course, status_code=201)
def create_course(course: Course):
    db.append(course)
    return course</code></pre>
<p>Run: <code>uvicorn main:app --reload</code>. Get automatic docs at <code>/docs</code> — a full Swagger UI generated from your types.</p>
<h2>Why FastAPI wins</h2>
<ul>
  <li>Type hints double as validation (via Pydantic).</li>
  <li>Automatic OpenAPI + interactive docs.</li>
  <li>Native <code>async</code> for fast I/O.</li>
  <li>Dependency injection for auth, DB sessions, etc.</li>
</ul>
<div class="callout"><div class="ico">🚀</div><p>For new Python APIs in 2025, FastAPI is usually the best default.</p></div>`,
          [
            q("Validation in FastAPI comes from?", ["Django", "Pydantic", "Marshmallow", "Zod"], 1, "Pydantic models."),
            q("Auto-docs URL by default?", ["/api", "/docs", "/swagger", "/help"], 1, "/docs (Swagger UI)."),
            q("Server to run FastAPI?", ["gunicorn only", "uvicorn", "apache", "iis"], 1, "uvicorn is the standard ASGI server."),
          ]
        ),
      ],
    },

    // =================================================================
    // 7. Fullstack Web Development (VIP)
    // =================================================================
    {
      id: "fullstack",
      title: "Fullstack Web Development",
      tagline: "Everything to build and ship a modern web app.",
      description: "From HTTP basics to React frontends, Node/Express backends, databases, auth, and deployment. The complete map of a web product.",
      level: "Advanced",
      duration: "16h",
      theme: "theme-fullstack",
      cover: "Fullstack",
      vip: true,
      instructor: "Marina Costa",
      lessons: [
        L("how-web-works", "How the Web Works",
          "HTTP, DNS, TCP, the browser rendering pipeline.",
          `<p>Before writing code, understand the plumbing. A single page load involves:</p>
<ol>
  <li><strong>DNS</strong> — your browser resolves <code>devstart.up</code> to an IP.</li>
  <li><strong>TCP + TLS</strong> — a secure connection is opened.</li>
  <li><strong>HTTP request</strong> — <code>GET /</code> with headers (cookies, user-agent, etc.).</li>
  <li><strong>Server</strong> — routes the request, runs your code, queries databases.</li>
  <li><strong>Response</strong> — HTML, JSON, or a redirect, with headers.</li>
  <li><strong>Browser parses</strong> HTML, fetches CSS/JS, builds the DOM and CSSOM, and paints.</li>
</ol>
<h2>Status codes</h2>
<ul>
  <li>2xx — success (200 OK, 201 Created, 204 No Content).</li>
  <li>3xx — redirects (301 permanent, 302 found).</li>
  <li>4xx — client errors (400, 401, 403, 404, 409, 422, 429).</li>
  <li>5xx — server errors (500, 502, 503).</li>
</ul>`,
          [
            q("DNS translates?", ["HTML", "Domain → IP", "JS", "URLs"], 1, "Names to IP addresses."),
            q("404 means?", ["OK", "Server error", "Not found", "Forbidden"], 2, "Resource not found."),
            q("Which is a redirect?", ["200", "301", "404", "500"], 1, "301 permanent redirect."),
          ]
        ),
        L("frontend-backend", "Frontend vs Backend",
          "Two worlds, one product.",
          `<p>A web app has two halves:</p>
<h2>Frontend</h2>
<p>Runs in the browser. Built with HTML/CSS/JS (often through frameworks like React, Vue, Svelte). Handles: rendering, user interaction, calling APIs, UI state.</p>
<h2>Backend</h2>
<p>Runs on a server. Built with Node, Python, Go, Ruby, Rust, etc. Handles: authentication, business logic, persistence, external integrations, security.</p>
<h2>The API boundary</h2>
<p>Between them sits an HTTP API — usually JSON over REST or GraphQL. The frontend asks "what do I show?" and "do this action." The backend answers with data or confirmation.</p>
<div class="callout"><div class="ico">🧩</div><p>As a fullstack dev, you don't need to be equally strong on both sides — but you must understand the boundary so you can design it well.</p></div>`,
          [
            q("Where does business logic usually live?", ["Frontend", "Backend", "Browser", "DNS"], 1, "Backend owns logic and data."),
            q("REST APIs commonly use?", ["XML", "JSON", "CSV", "YAML"], 1, "JSON is the lingua franca."),
            q("Frontend frameworks include?", ["React, Vue, Svelte", "Rails, Django", "Flask, Express", "Postgres"], 0, "Those run in the browser."),
          ]
        ),
        L("semantic-html", "Modern Semantic HTML",
          "Use the right tag for the right meaning.",
          `<p>Modern HTML has dozens of tags for meaning, not just looks:</p>
<pre><code>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;,
&lt;aside&gt;, &lt;footer&gt;, &lt;figure&gt;, &lt;figcaption&gt;,
&lt;time&gt;, &lt;mark&gt;, &lt;details&gt;, &lt;summary&gt;, &lt;dialog&gt;</code></pre>
<h2>Why semantics matter</h2>
<ul>
  <li><strong>Accessibility</strong> — screen readers use semantic landmarks for navigation.</li>
  <li><strong>SEO</strong> — search engines understand structure.</li>
  <li><strong>Browser features</strong> — <code>&lt;dialog&gt;</code> is a real modal; <code>&lt;details&gt;</code> is a real disclosure widget. Free.</li>
  <li><strong>Maintainability</strong> — you can scan a page's outline at a glance.</li>
</ul>
<h2>Divs are fine, too</h2>
<p>Not everything needs a semantic tag. Use <code>&lt;div&gt;</code> when there's no clearer meaning. Just don't use div-soup when a real tag exists.</p>`,
          [
            q("<main> should appear how many times per page?", ["0", "1", "As many as needed", "At least 2"], 1, "Exactly one main per page."),
            q("<details> + <summary> gives you…", ["A modal", "A native expandable widget", "A tooltip", "Nothing"], 1, "Zero-JS disclosure."),
            q("Who benefits from semantic HTML?", ["Screen readers", "Search engines", "Other devs", "All of the above"], 3, "Everyone."),
          ]
        ),
        L("css-architecture", "CSS Architecture",
          "BEM, utility-first, and design tokens.",
          `<p>On small projects, any CSS works. On large products, chaos sets in fast. Three approaches that scale:</p>
<h2>BEM (Block-Element-Modifier)</h2>
<pre><code>.card { }
.card__title { }
.card__title--large { }</code></pre>
<p>Naming conventions give every class a clear meaning and scope. Very readable; can be verbose.</p>
<h2>Utility-first (Tailwind-style)</h2>
<pre><code>&lt;button class="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600"&gt;Buy&lt;/button&gt;</code></pre>
<p>No custom class names — compose small primitives. Extremely fast once you know it.</p>
<h2>CSS Variables (design tokens)</h2>
<pre><code>:root {
  --color-brand: #7c5cff;
  --space-md: 16px;
  --radius: 12px;
}</code></pre>
<p>Define your design system in variables. Every component pulls from them. Changing the brand color is a one-line edit.</p>`,
          [
            q("BEM stands for?", ["Block Element Module", "Block Element Modifier", "Best Enterprise Method", "Brand Element Map"], 1, "Block-Element-Modifier."),
            q("Utility-first framework?", ["Bootstrap", "Tailwind CSS", "Material UI", "Bulma"], 1, "Tailwind."),
            q("Design tokens live in?", ["JS files", "CSS variables (or JSON)", "Tests", "HTML attributes"], 1, "CSS vars are the standard."),
          ]
        ),
        L("js-for-fs", "JavaScript for Fullstack",
          "The dialect of modern JS you'll write daily.",
          `<p>Beyond fundamentals, these features dominate production JS:</p>
<ul>
  <li><strong>Modules</strong> with <code>import</code>/<code>export</code>.</li>
  <li><strong>async/await</strong> everywhere for I/O.</li>
  <li><strong>Destructuring</strong>, <strong>spread</strong>, <strong>rest</strong>.</li>
  <li><strong>Optional chaining</strong> (<code>user?.address?.city</code>) and <strong>nullish coalescing</strong> (<code>x ?? "default"</code>).</li>
  <li><strong>Array/Object methods</strong> — map, filter, reduce, Object.entries.</li>
  <li><strong>Template literals</strong>.</li>
</ul>
<h2>Linting and formatting</h2>
<p>Every team uses ESLint + Prettier. Configure once, commit the config, stop arguing about semicolons.</p>
<h2>TypeScript</h2>
<p>In modern teams, plain JS is rare. TypeScript adds a type system that catches bugs before runtime. The learning curve is small; the payoff is huge. Learn it as soon as you're comfortable with JS.</p>`,
          [
            q("Optional chaining operator?", [".", "?.", "??", "=>"], 1, "?. safely accesses nested properties."),
            q("?? differs from || because…", ["It's faster", "It only triggers on null/undefined", "It's for numbers", "Deprecated"], 1, "|| triggers on any falsy; ?? only null/undefined."),
            q("Typed superset of JS?", ["Flow", "TypeScript", "CoffeeScript", "Dart"], 1, "TypeScript is the industry standard."),
          ]
        ),
        L("react-intro", "Intro to React",
          "Components as the unit of UI.",
          `<p>React is a library for building UIs out of components. Each component is a function that returns JSX (HTML-like syntax in JS):</p>
<pre><code>function Button({ label, onClick }) {
  return (
    &lt;button className="btn primary" onClick={onClick}&gt;
      {label}
    &lt;/button&gt;
  );
}

function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello&lt;/h1&gt;
      &lt;Button label="Click me" onClick={() =&gt; alert("!")} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
<h2>Why React?</h2>
<ul>
  <li>Huge ecosystem (Next.js, Remix, countless component libs).</li>
  <li>Industry standard — nearly every frontend job lists it.</li>
  <li>Declarative: describe what the UI should look like for a given state, React updates the DOM efficiently.</li>
</ul>`,
          [
            q("React components are…", ["Classes only", "Functions (or classes)", "Templates", "CSS files"], 1, "Modern React uses function components."),
            q("JSX is…", ["An image format", "HTML-like syntax inside JS", "A compiler", "A runtime"], 1, "Transpiled to React.createElement calls."),
            q("Most popular React meta-framework?", ["Gatsby", "Next.js", "Nuxt", "Svelte"], 1, "Next.js."),
          ]
        ),
        L("react-state", "Components, Props & State",
          "Props go down, state lives in components.",
          `<p><strong>Props</strong> are inputs to a component. <strong>State</strong> is internal, changeable data managed by hooks.</p>
<pre><code>import { useState, useEffect } from "react";

function Counter({ start = 0 }) {
  const [count, setCount] = useState(start);

  useEffect(() =&gt; {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+1&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
<h2>Key hooks</h2>
<ul>
  <li><code>useState</code> — local state.</li>
  <li><code>useEffect</code> — side effects (fetching, subscriptions).</li>
  <li><code>useMemo</code> — memoize expensive computations.</li>
  <li><code>useCallback</code> — stable function identity.</li>
  <li><code>useRef</code> — persist a mutable value or DOM reference.</li>
</ul>`,
          [
            q("Props flow…", ["Up from child", "Down from parent", "Sideways", "Nowhere"], 1, "Parent → child."),
            q("Hook for side effects?", ["useState", "useEffect", "useCallback", "useRef"], 1, "useEffect runs on render/deps."),
            q("State setter from useState?", ["The value itself", "A function you call to update state", "A ref", "A dispatcher"], 1, "setState(newValue)."),
          ]
        ),
        L("routing", "Routing in SPAs",
          "Make single-page apps feel multi-page.",
          `<p>A Single-Page App loads one HTML file, then JavaScript swaps the view as the URL changes — without a full page reload. This needs a router.</p>
<h2>React Router</h2>
<pre><code>import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

&lt;BrowserRouter&gt;
  &lt;nav&gt;
    &lt;Link to="/"&gt;Home&lt;/Link&gt;
    &lt;Link to="/courses"&gt;Courses&lt;/Link&gt;
  &lt;/nav&gt;
  &lt;Routes&gt;
    &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
    &lt;Route path="/courses/:id" element={&lt;CoursePage /&gt;} /&gt;
    &lt;Route path="*" element={&lt;NotFound /&gt;} /&gt;
  &lt;/Routes&gt;
&lt;/BrowserRouter&gt;</code></pre>
<h2>File-based routing</h2>
<p>Next.js, Remix, SvelteKit, and Nuxt use folders. <code>pages/courses/[id].jsx</code> automatically becomes <code>/courses/123</code>. Less boilerplate.</p>`,
          [
            q("SPA stands for?", ["Static Page App", "Single-Page Application", "Server Page App", "Simple Page Admin"], 1, "One HTML; JS swaps views."),
            q("Next.js uses what routing style?", ["Manual config", "File-based", "XML config", "Database-driven"], 1, "File-system routing."),
            q("Catch-all route?", ["/:any", "/*", "*", "/..."], 2, "Wildcard `*`."),
          ]
        ),
        L("node-basics", "Node.js Basics",
          "JavaScript on the server.",
          `<p>Node.js runs JavaScript outside the browser. It ships with a standard library for files, HTTP, streams, and has the largest package registry in the world (npm).</p>
<pre><code>$ node --version
v20.10.0
$ npm init -y
$ npm install express
$ node server.js</code></pre>
<h2>Hello world HTTP server</h2>
<pre><code>import http from "node:http";

const server = http.createServer((req, res) =&gt; {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ hello: "world" }));
});

server.listen(3000);</code></pre>
<h2>npm</h2>
<ul>
  <li><code>npm install x</code> — add a dependency.</li>
  <li><code>npm run dev</code> — run a script from <code>package.json</code>.</li>
  <li><code>package-lock.json</code> — exact versions pinned for reproducible installs.</li>
</ul>`,
          [
            q("Node.js runs what language?", ["Python", "JavaScript", "Go", "Java"], 1, "JS on the server."),
            q("npm installs packages into?", ["./lib/", "./node_modules/", "system-wide", "./packages/"], 1, "node_modules."),
            q("Lock file ensures?", ["Security scans", "Reproducible installs", "Minification", "Faster runtime"], 1, "Exact version pinning."),
          ]
        ),
        L("express", "REST APIs with Express",
          "The classic Node API framework.",
          `<pre><code>import express from "express";
const app = express();
app.use(express.json());

const courses = [];

app.get("/courses", (req, res) =&gt; res.json(courses));

app.post("/courses", (req, res) =&gt; {
  const course = { id: Date.now(), ...req.body };
  courses.push(course);
  res.status(201).json(course);
});

app.use((err, req, res, next) =&gt; {
  console.error(err);
  res.status(500).json({ error: "Internal" });
});

app.listen(3000);</code></pre>
<h2>Middleware</h2>
<p>Express is built around middleware — functions that run before your handlers. Auth, logging, CORS, body parsing, rate limiting — all implemented as middleware.</p>
<pre><code>app.use((req, res, next) =&gt; {
  console.log(req.method, req.url);
  next();
});</code></pre>`,
          [
            q("Express middleware signature?", ["(req, res)", "(req, res, next)", "(ctx)", "() => {}"], 1, "(req, res, next)."),
            q("Return JSON response?", ["res.send({...})", "res.json({...})", "res.body", "res.out()"], 1, "res.json sets content-type."),
            q("To parse JSON request bodies?", ["Built-in", "app.use(express.json())", "Middleware 'bodyParser'", "Both 2 and 3"], 3, "Both work; express.json is built-in."),
          ]
        ),
        L("databases", "Databases: SQL vs NoSQL",
          "Pick the right tool for your data.",
          `<h2>SQL (relational)</h2>
<p>Postgres, MySQL, SQLite. Tables with strict schemas. Joins. ACID transactions. Great for: most apps, anything with relationships, anything you can't afford to lose.</p>
<pre><code>SELECT u.username, COUNT(p.id) AS progress_count
FROM users u
LEFT JOIN progress p ON p.user_id = u.id
GROUP BY u.username;</code></pre>
<h2>NoSQL</h2>
<p>MongoDB (document), Redis (key-value), DynamoDB, Firestore. Flexible schemas, different tradeoffs. Great for: high-write workloads, caching, unstructured data.</p>
<pre><code>db.users.find({ vip: true }).sort({ createdAt: -1 })</code></pre>
<h2>Default recommendation</h2>
<p>Start with Postgres. It's free, rock-solid, has JSON columns (so you can mix relational and document), and scales further than most startups ever need.</p>
<h2>ORMs</h2>
<p>Prisma (TS), Drizzle (TS), TypeORM, SQLAlchemy (Python). They translate code into SQL and back, and keep your schema in source control.</p>`,
          [
            q("Default DB for most apps?", ["Mongo", "Postgres", "Cassandra", "SQLite only"], 1, "Postgres is the safe default."),
            q("ACID stands for?", ["A flavor of SQL", "Atomic, Consistent, Isolated, Durable", "A NoSQL feature", "An ORM"], 1, "Transaction guarantees."),
            q("ORM translates?", ["CSS to JS", "Code to SQL and back", "SQL to HTML", "Nothing"], 1, "Object-Relational Mapping."),
          ]
        ),
        L("auth-jwt", "Authentication & JWT",
          "Who is this user, and what can they do?",
          `<p>Two pieces: <strong>authentication</strong> (who are you) and <strong>authorization</strong> (what can you do).</p>
<h2>Password storage</h2>
<p><strong>Never</strong> store plain passwords. Use <code>bcrypt</code>, <code>argon2</code>, or <code>scrypt</code>. These are slow hashing functions designed to resist brute-force.</p>
<pre><code>import bcrypt from "bcryptjs";
const hash = await bcrypt.hash(password, 12);
const ok = await bcrypt.compare(password, user.hash);</code></pre>
<h2>Sessions vs JWT</h2>
<ul>
  <li><strong>Sessions</strong> (server-side): a cookie holds a random ID. Server stores user data. Simple, revocable, works great.</li>
  <li><strong>JWT</strong>: a signed token carries the user's claims. Stateless, great for APIs across services. Careful: hard to revoke mid-session.</li>
</ul>
<pre><code>import jwt from "jsonwebtoken";
const token = jwt.sign({ userId: 42 }, process.env.JWT_SECRET, { expiresIn: "1h" });
const payload = jwt.verify(token, process.env.JWT_SECRET);</code></pre>
<div class="callout"><div class="ico">🔒</div><p>Store JWTs in HttpOnly, Secure cookies — not in localStorage. localStorage is readable by any JS on the page, including injected scripts.</p></div>`,
          [
            q("Safe password hashing?", ["SHA-256", "bcrypt or argon2", "MD5", "Plain text"], 1, "Slow hashes resist brute force."),
            q("JWT stands for?", ["JSON Web Token", "Java Web Tool", "JavaScript Wrap Type", "JSON Wizard"], 0, "JSON Web Token."),
            q("Safe place to store a JWT?", ["localStorage", "HttpOnly cookie", "URL query", "Local variable"], 1, "HttpOnly, Secure cookie."),
          ]
        ),
        L("deploy", "Deployment",
          "Put it on the internet.",
          `<h2>Static frontends</h2>
<p>Vercel, Netlify, Cloudflare Pages — push to Git, get a production URL with HTTPS and a CDN. Free tiers are enough for many projects.</p>
<h2>Backend services</h2>
<p>Fly.io, Render, Railway, AWS, GCP. Docker-based deploys are the standard.</p>
<h2>Minimal Dockerfile</h2>
<pre><code>FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD ["node", "server.js"]</code></pre>
<h2>Environment variables</h2>
<p>Never commit secrets. Use <code>.env</code> locally (gitignored) and your platform's secret manager in production.</p>
<h2>CI/CD</h2>
<p>GitHub Actions is the default. Every PR: lint, test, type-check, preview deploy. Every merge to main: production deploy.</p>`,
          [
            q("Never commit…", ["Tests", "Secrets / API keys", "Docs", "Code"], 1, "Secrets belong in env/secret managers."),
            q("Static frontend hosts?", ["Vercel, Netlify, Cloudflare", "Postgres, Redis", "Kubernetes", "SSH only"], 0, "Those are static hosts with CDN."),
            q("CI/CD typically runs on?", ["Every push / PR", "Once per year", "Never", "Only on main"], 0, "Every PR or push."),
          ]
        ),
        L("capstone", "Capstone: Building a SaaS",
          "Putting it all together — and what comes next.",
          `<p>A real SaaS product pulls together every skill in this course:</p>
<ul>
  <li>A landing page (this very site!) — semantic HTML, responsive CSS, animations.</li>
  <li>Authentication — sign up, sign in, hashed passwords, sessions or JWTs.</li>
  <li>A dashboard — per-user data, progress, settings.</li>
  <li>An API — typed endpoints, validation, error handling.</li>
  <li>A database — users, courses, progress. Migrations tracked in git.</li>
  <li>Billing — Stripe Checkout + webhooks, or manual VIP unlocks via admin.</li>
  <li>Admin panel — users, search, permissions.</li>
  <li>Deployment — CI/CD, environment variables, monitoring.</li>
  <li>Observability — logs, error tracking (Sentry), uptime monitoring.</li>
</ul>
<h2>Your next steps</h2>
<ol>
  <li>Ship a tiny project end-to-end. Don't over-engineer.</li>
  <li>Learn TypeScript — you'll hit a ceiling without it.</li>
  <li>Pick one backend language and go deep (Node + TS, or Python + FastAPI, or Go).</li>
  <li>Contribute to open source. Read other people's code.</li>
  <li>Build in public. Share what you learn.</li>
</ol>
<div class="callout"><div class="ico">🎓</div><p>You now know the full map. The only thing left is to keep shipping.</p></div>`,
          [
            q("Best strategy after finishing a tutorial?", ["Watch 10 more", "Ship a real (small) project", "Memorize docs", "Nothing"], 1, "Shipping teaches what tutorials can't."),
            q("Observability means?", ["UI design", "Monitoring logs/metrics/errors", "A database", "A CSS feature"], 1, "Logs, metrics, traces."),
            q("Stripe is a…", ["Database", "Payments platform", "Framework", "Linter"], 1, "Payment processor."),
          ]
        ),
      ],
    },

    // =================================================================
    // 8. UI/UX Design (VIP)
    // =================================================================
    {
      id: "ui-ux",
      title: "UI/UX Design",
      tagline: "Design products that feel effortless and look beautiful.",
      description: "Principles of user experience, information architecture, visual design, color, typography, and how to build a design system that scales.",
      level: "Intermediate",
      duration: "8h",
      theme: "theme-uiux",
      cover: "UI/UX",
      vip: true,
      instructor: "Ana Ribeiro",
      lessons: [
        L("what-is-ux", "What is UX?",
          "Experience is everything the user sees, feels, and remembers.",
          `<p>UX (User Experience) is the sum of every interaction a person has with your product — before, during, and after use. It's not just the visual design; it's the signup flow, the error messages, the loading time, the email receipts, the tone of voice.</p>
<h2>UX vs UI</h2>
<ul>
  <li><strong>UX</strong> — how does this <em>work</em> and <em>feel</em>?</li>
  <li><strong>UI</strong> — what does it <em>look like</em> on screen?</li>
</ul>
<p>Great UI without UX is a beautiful app no one can use. Great UX without UI is a well-designed flow that looks like a 1998 intranet. You need both.</p>
<h2>Five pillars of good UX (Nielsen)</h2>
<ol>
  <li><strong>Useful</strong> — solves a real problem.</li>
  <li><strong>Usable</strong> — people can figure it out.</li>
  <li><strong>Findable</strong> — things are where they should be.</li>
  <li><strong>Credible</strong> — trustworthy, polished.</li>
  <li><strong>Accessible</strong> — works for everyone.</li>
</ol>`,
          [
            q("UX differs from UI because…", ["UX is only visual", "UX covers the whole experience; UI is visual layer", "They're the same", "UI is broader"], 1, "UX = the whole experience."),
            q("Accessibility means…", ["Fast loading", "Works for everyone, including people with disabilities", "Mobile only", "Cheap"], 1, "Inclusive design."),
            q("Findable refers to…", ["Hiring", "Being able to locate information", "SEO only", "Search results"], 1, "Can users find what they need?"),
          ]
        ),
        L("user-research", "User Research",
          "Design for real people — not imaginary ones.",
          `<p>Before you design anything, understand who will use it. Research methods fall into two camps:</p>
<h2>Qualitative (the why)</h2>
<ul>
  <li><strong>Interviews</strong> — open-ended conversations with 5–8 users.</li>
  <li><strong>Usability tests</strong> — watch users attempt tasks with your prototype.</li>
  <li><strong>Diary studies</strong> — users record moments over days/weeks.</li>
</ul>
<h2>Quantitative (the what)</h2>
<ul>
  <li><strong>Surveys</strong> — large samples, statistical significance.</li>
  <li><strong>Analytics</strong> — what users actually do.</li>
  <li><strong>A/B tests</strong> — two versions, measure which wins.</li>
</ul>
<h2>Personas and jobs-to-be-done</h2>
<p>Turn findings into lightweight representations: "Alex, 24, self-taught dev, learning at night after work, frustrated by courses that don't go deep." JTBD reframes it as: "When I get home tired, I want to learn a tangible skill in 30 minutes so I feel like I made progress."</p>`,
          [
            q("A/B testing is…", ["Qualitative", "Quantitative", "Art", "Usability testing"], 1, "Two variants, measured numerically."),
            q("How many users for good qualitative insight?", ["1", "5–8", "500+", "100"], 1, "5 uncover 85% of usability issues (Nielsen)."),
            q("Personas are…", ["Real single users", "Composite representations of user groups", "Bots", "Stakeholders"], 1, "Distilled patterns from research."),
          ]
        ),
        L("ia", "Information Architecture",
          "How content is organized determines how it's used.",
          `<p>Information Architecture (IA) is the structure of your product: what goes where, how it's grouped, what you name things. Strong IA makes navigation invisible. Weak IA turns every task into a scavenger hunt.</p>
<h2>Techniques</h2>
<ul>
  <li><strong>Card sorting</strong> — users group items into categories that make sense to them.</li>
  <li><strong>Tree testing</strong> — validate that users can find specific items in your proposed hierarchy.</li>
  <li><strong>Sitemaps</strong> — visual diagram of every page and its relationships.</li>
</ul>
<h2>Naming matters</h2>
<p>"Settings" vs "Preferences" vs "Configuration" — each sends a different signal. Use the language your users already use. When in doubt, test.</p>
<h2>Progressive disclosure</h2>
<p>Show the essentials first. Reveal complexity on demand. A good settings page has three tabs, not seventy toggles.</p>`,
          [
            q("IA stands for?", ["Interactive Architecture", "Information Architecture", "Internal API", "Interface Animation"], 1, "Information Architecture."),
            q("Card sorting helps discover…", ["Colors", "User mental models for grouping", "Typography", "Load times"], 1, "How users group and label content."),
            q("Progressive disclosure means…", ["Show everything", "Reveal complexity as needed", "Hide everything", "Use dropdowns"], 1, "Essentials first, details on demand."),
          ]
        ),
        L("wireframes", "Wireframing & Prototyping",
          "Low-fi first, high-fi later.",
          `<p>Start with wireframes — deliberately low-fidelity layouts using boxes and labels. The point is to design structure without getting distracted by colors and fonts.</p>
<h2>Fidelity spectrum</h2>
<ol>
  <li><strong>Sketches</strong> — pencil and paper, minutes per screen.</li>
  <li><strong>Wireframes</strong> — grayscale boxes in Figma. Focus on layout and content.</li>
  <li><strong>Mockups</strong> — visual design applied. Pixel-accurate.</li>
  <li><strong>Prototypes</strong> — clickable, to test real flows.</li>
</ol>
<h2>Tools</h2>
<p>Figma is the industry default. Others: Sketch (macOS), Adobe XD, Framer (great for interactive prototypes).</p>
<h2>When to move up</h2>
<p>Only when the current fidelity isn't revealing new questions. Jumping to high-fi too early means redesigning when you find a flow problem.</p>`,
          [
            q("Best fidelity to start at?", ["Pixel-perfect", "Sketches or wireframes", "Final UI", "3D renders"], 1, "Low-fi exposes structure fastest."),
            q("Industry-standard design tool?", ["Photoshop", "Figma", "InDesign", "MS Paint"], 1, "Figma dominates in 2025."),
            q("Prototype's main purpose?", ["Look pretty", "Test real flows", "Replace dev", "Print brochures"], 1, "Interactivity for validation."),
          ]
        ),
        L("visual-design", "Visual Design Principles",
          "Contrast, hierarchy, rhythm, balance.",
          `<p>Four principles show up in every good interface:</p>
<h2>Contrast</h2>
<p>Make important things stand out. Differ in size, color, or weight. A primary button should look obviously different from a secondary one.</p>
<h2>Hierarchy</h2>
<p>Arrange elements so the eye knows what to read first, second, third. Typography size and color do most of the work.</p>
<h2>Rhythm &amp; spacing</h2>
<p>Consistent spacing makes layouts feel calm. Pick a spacing scale (4, 8, 12, 16, 24, 32, 48, 64) and stick to it. Never eyeball pixels.</p>
<h2>Balance</h2>
<p>Distribute visual weight. Symmetry is formal; asymmetry is dynamic. Both are valid — just be intentional.</p>
<h2>The 60-30-10 rule</h2>
<p>60% neutral (background), 30% supporting (content), 10% accent (CTAs and highlights). Works every time.</p>`,
          [
            q("Spacing scale should be…", ["Random", "Consistent (e.g. 4/8/16/24)", "Only even", "Prime numbers"], 1, "A consistent scale feels intentional."),
            q("60/30/10 rule ratios are?", ["Background/support/accent", "Header/body/footer", "Mobile/tablet/desktop", "Red/green/blue"], 0, "Neutral/support/accent."),
            q("Hierarchy is best established by?", ["Underlines", "Size + weight + color", "Animations", "Sound"], 1, "Typography does the heavy lifting."),
          ]
        ),
        L("typography", "Typography",
          "90% of your design is type.",
          `<h2>Pairing fonts</h2>
<p>Most designs use one or two typefaces. A popular pattern: a distinctive display font for headings + a neutral sans-serif for body. Don't mix three or more unless you really know what you're doing.</p>
<h2>Sizing and rhythm</h2>
<p>Define a type scale: e.g. 12, 14, 16, 18, 24, 32, 48, 64. Use rem/em so everything scales with root size. Body text: 16px minimum. Line-height 1.5–1.7. Measure (characters per line) between 45–80 for comfortable reading.</p>
<h2>Hierarchy knobs</h2>
<ul>
  <li><strong>Size</strong> — biggest lever.</li>
  <li><strong>Weight</strong> — 400/500 for body, 600/700/800 for headings.</li>
  <li><strong>Color / contrast</strong> — dimmer text recedes; brighter text advances.</li>
  <li><strong>Letter-spacing</strong> — tighten display; loosen small caps.</li>
</ul>
<div class="callout"><div class="ico">🔤</div><p>Accessible contrast: WCAG requires 4.5:1 for body text, 3:1 for large text. Always check.</p></div>`,
          [
            q("Minimum body text size?", ["12px", "14px", "16px", "20px"], 2, "16px is the web convention."),
            q("Ideal measure (chars per line)?", ["20", "45–80", "120+", "Unlimited"], 1, "Comfort reading range."),
            q("Accessible contrast for body text?", ["2:1", "3:1", "4.5:1", "7:1"], 2, "WCAG AA requires 4.5:1."),
          ]
        ),
        L("color", "Color Theory",
          "Hue, saturation, lightness — and intentional palettes.",
          `<h2>HSL is your friend</h2>
<p>Instead of picking random hex values, think in HSL (Hue / Saturation / Lightness). Fixing the hue and varying lightness gives you a naturally cohesive shade scale.</p>
<pre><code>/* Tailwind-style scale */
50:  hsl(252 100% 97%);
100: hsl(252 100% 93%);
500: hsl(252 100% 65%);  /* brand */
900: hsl(252 80%  20%);</code></pre>
<h2>Semantic color roles</h2>
<ul>
  <li><strong>Primary</strong> — brand color.</li>
  <li><strong>Secondary / accent</strong> — support and variety.</li>
  <li><strong>Neutrals</strong> — text, background, borders.</li>
  <li><strong>Semantic</strong> — success (green), warning (yellow/orange), danger (red), info (blue).</li>
</ul>
<h2>Dark mode</h2>
<p>Dark backgrounds demand desaturated colors. Pure #FFFFFF text on #000000 vibrates; use soft whites and not-quite-black backgrounds. Keep brand hues the same but lower saturation.</p>`,
          [
            q("Best color model for building scales?", ["RGB", "CMYK", "HSL", "Hex"], 2, "HSL makes lightness variations intuitive."),
            q("Pure white on pure black causes?", ["Clarity", "Visual vibration / fatigue", "Better SEO", "Speed"], 1, "Too much contrast strains eyes."),
            q("Semantic color for destructive action?", ["Green", "Red", "Yellow", "Gray"], 1, "Red signals danger."),
          ]
        ),
        L("components", "Component Systems",
          "Design once, use everywhere.",
          `<p>A component is a reusable UI pattern: button, input, card, modal, toast. A <strong>design system</strong> is the documented collection of all components, plus rules for how to use them.</p>
<h2>Benefits</h2>
<ul>
  <li>Consistency across the product.</li>
  <li>Faster design and development.</li>
  <li>Accessibility and edge cases solved once.</li>
  <li>Easy rebranding — change tokens, not components.</li>
</ul>
<h2>Famous examples</h2>
<p>Shopify Polaris, IBM Carbon, Atlassian, GitHub Primer, Salesforce Lightning. Study them — they're free lessons in shipping at scale.</p>
<h2>Levels of a system</h2>
<ol>
  <li><strong>Tokens</strong> — colors, spacing, typography.</li>
  <li><strong>Primitives</strong> — button, input, icon.</li>
  <li><strong>Patterns</strong> — form, list, modal, page header.</li>
  <li><strong>Templates</strong> — full layouts for common screens.</li>
</ol>`,
          [
            q("Design tokens are the…", ["Top layer", "Foundation layer (colors, spacing)", "Prototype", "Final app"], 1, "Tokens → components → patterns → templates."),
            q("Why systems scale design?", ["They add features", "Consistency, speed, accessibility solved once", "They reduce files", "They look nicer"], 1, "Reuse at every level."),
            q("Example of a public design system?", ["Polaris", "Carbon", "Material", "All of the above"], 3, "All are famous public systems."),
          ]
        ),
        L("usability", "Usability Testing",
          "Watch people use your product. Every time.",
          `<p>Usability testing is the single highest-ROI activity in product development. You sit a real user in front of your product and ask them to complete a task. You shut up and watch.</p>
<h2>How to run one</h2>
<ol>
  <li>Define tasks matching real goals ("Sign up and complete your first lesson").</li>
  <li>Recruit 5 users from your target audience.</li>
  <li>Ask them to think aloud. Don't interrupt. Don't explain.</li>
  <li>Record screen + audio if allowed.</li>
  <li>Note every moment of hesitation, confusion, or misuse.</li>
</ol>
<h2>What to measure</h2>
<ul>
  <li><strong>Task success</strong> — did they finish without help?</li>
  <li><strong>Time on task</strong> — how long?</li>
  <li><strong>Error count</strong> — how often did they go the wrong way?</li>
  <li><strong>Satisfaction</strong> — SUS score, or simple 1–5.</li>
</ul>
<h2>Nielsen's 10 heuristics</h2>
<p>Quick checklist for heuristic evaluation: visibility of system status, match with real world, user control, consistency, error prevention, recognition over recall, flexibility, aesthetic and minimalist design, help users recognize errors, help and documentation.</p>`,
          [
            q("Most valuable user research activity?", ["Surveys", "Usability testing", "Focus groups", "Analytics"], 1, "Watching real users is unbeatable."),
            q("During a test, the facilitator should…", ["Help them", "Stay quiet and observe", "Point at the right button", "Do it for them"], 1, "Silence reveals the truth."),
            q("Nielsen's heuristics count?", ["5", "10", "20", "3"], 1, "Ten classic heuristics."),
          ]
        ),
        L("portfolio", "Building a Design Portfolio",
          "Show the thinking, not just the pixels.",
          `<p>A design portfolio gets you hired. But not the way most beginners build one. Recruiters don't want dribbble posters — they want case studies.</p>
<h2>Anatomy of a case study</h2>
<ol>
  <li><strong>Problem</strong> — who were you helping and what was broken?</li>
  <li><strong>Research</strong> — what did you learn?</li>
  <li><strong>Exploration</strong> — alternatives you considered, with sketches.</li>
  <li><strong>Decision</strong> — what you shipped and why.</li>
  <li><strong>Impact</strong> — metrics, before/after, user quotes.</li>
</ol>
<h2>Quantity vs quality</h2>
<p>Three deep case studies beat ten shallow screenshots. Hiring managers scan portfolios in under a minute — make the first 15 seconds count.</p>
<h2>Ship real work</h2>
<p>If you're new, design for real (small) projects: a local business, an open-source project, a weekend hackathon. Real constraints produce real portfolios.</p>
<div class="callout"><div class="ico">🎯</div><p>You now have a full mental map of design. Pair it with a bit of front-end code and you're genuinely dangerous. Welcome to the field.</p></div>`,
          [
            q("Strongest portfolio piece?", ["Random dribbble shot", "Case study with problem → decisions → impact", "Many pretty images", "Wireframes only"], 1, "Thinking + decisions win."),
            q("How many deep case studies are enough?", ["10+", "3 strong ones", "1", "None — just show pixels"], 1, "Three is the magic number."),
            q("Best way to build a real portfolio as a beginner?", ["Only copy famous apps", "Design for real small projects with constraints", "Just take a course", "Wait for a job"], 1, "Real constraints produce real work."),
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
