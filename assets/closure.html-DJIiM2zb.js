import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, f as createBaseVNode, o as openBlock, g as createTextVNode } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/images/front-end/js/scope.png";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container info" };
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createStaticVNode('<p>在谈论闭包之前，我们有必要先了解什么是词法作用域（scope），弄清楚这个概念之后再谈闭包就容易多了。</p><h2 id="_1-作用域-scope" tabindex="-1"><a class="header-anchor" href="#_1-作用域-scope"><span>1. 作用域（Scope）</span></a></h2><h3 id="_1-1-什么是作用域" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是作用域"><span>1.1 什么是作用域</span></a></h3><p>变量能否被访问，是由<strong>作用域</strong>控制的。在变量的作用域之外，是无法访问该变量的。比如：在函数中定义的变量，只能在函数中被访问到，函数之外的地方没有办法访问该变量。</p><p>在 JavaScript 中，函数和代码块（<code>{}</code>）都可以创建作用域。当然整个 JavaScript 代码中，最外层也是一个作用域，即全局作用域。</p>', 5)),
    createVNode(_component_CodeTabs, {
      id: "15",
      data: [{ "id": "function" }, { "id": "代码块 {}" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("function")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("代码块 {}")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "f"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" cnt "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("cnt"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 0")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("cnt"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// cnt is not defined")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" cnt "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("cnt"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 0")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("cnt"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// cnt is not defined")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true",
              style: { "counter-reset": "line-number 0" }
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[10] || (_cache[10] = createStaticVNode('<p>上面代码中，function 和代码块都各自定义了一个作用域。在函数作用域中定义的变量 <code>cnt</code> 不能在函数作用域之外访问到。</p><figure><img src="' + _imports_0 + '" alt="" width="180" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>正是由于这样的特性，我们可以在不同的作用域中使用相同名称的变量，且这些同名变量之间不会有任何冲突。</p><h3 id="_1-2-作用域嵌套" tabindex="-1"><a class="header-anchor" href="#_1-2-作用域嵌套"><span>1.2 作用域嵌套</span></a></h3><p>作用域是可以嵌套的，且内部的作用域中可以访问外层作用域中的变量。即变量的获取是一层层向外找的。</p><p>看下面这段代码，在 <code>outerFunc</code> 内部又定义了 <code>innerFunc</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> outerVar <span class="token operator">=</span> <span class="token string">&quot;outer&quot;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">let</span> innerVar <span class="token operator">=</span> <span class="token string">&quot;inner&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>innerVar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;inner&#39;</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outerVar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;outer&#39;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>outerFunc()</code> 后，会触发 <code>innerFunc</code> 的执行。<code>innerFunc</code> 执行时，访问了 <code>innerVar</code>，它在当前 <code>innerFunc()</code> 内的作用域，所以可以访问到。当访问 <code>outerVar</code> 时，首先会在当前的 <code>innerFunc()</code> 作用域中找，没有，于是向它外面一层的作用域（即 <code>outerFunc()</code>）中找，找到了，最终打印成功。</p><p>上例中，如果在 <code>outerFunc()</code> 中还没有找到，它会继续向再外一层找（最外层就是 <code>global</code> 环境了），如果 <code>global</code> 中有，那么可以访问，如果没有该变量则抛出 ReferenceError。</p><blockquote><p>注：如果没有 <code>use strict</code>，没有找到变量时，会在全局作用域中创建一个全局变量。</p></blockquote><h3 id="_1-3-词法作用域-静态作用域" tabindex="-1"><a class="header-anchor" href="#_1-3-词法作用域-静态作用域"><span>1.3 词法作用域/静态作用域</span></a></h3><p>JavaScript 使用词法作用域（lexical scope），也叫静态作用域（static scope）。顾名思义，JavaScript 的作用域完全是由代码结构决定的，即变量的可访问性是由变量所在代码的位置决定的。它和函数的执行没有任何关系。</p><p>简单来说就是内部作用域可以访问它外层的作用域中的变量。</p><div class="hint-container info"><p class="hint-container-title">作用域提升（Hoisting） &amp; 暂时性死区（Temporal Dead Zone, TDZ）</p><p>在 JavaScript 中，变量和函数声明会被提升到其作用域的顶部。</p><p>对于 <code>var</code> 声明的变量，变量声明会提升到函数或全局作用域的顶部，但初始化不会提升。</p><p><code>let</code> 和 <code>const</code> 声明的变量也会提升，但它们与 <code>var</code> 不同。虽然声明被提升了，但这些变量在初始化之前不能被访问，访问它们会抛出 ReferenceError。这段时间就是所谓的暂时性死区（TDZ）。</p></div><h2 id="_2-闭包-closure" tabindex="-1"><a class="header-anchor" href="#_2-闭包-closure"><span>2. 闭包（Closure）</span></a></h2><h3 id="_2-1-闭包的定义" tabindex="-1"><a class="header-anchor" href="#_2-1-闭包的定义"><span>2.1 闭包的定义</span></a></h3><p>还以这段代码为例来说明闭包。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> outerVar <span class="token operator">=</span> <span class="token string">&quot;outer&quot;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outerVar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;outer&#39;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们已经知道了，<code>innerFunc()</code> 内部可以访问它外层作用域中的 <code>outerVar</code>。注意这里 <code>innerFunc()</code> 是在它自己的词法作用域中被调用的（<code>innerFunc</code> 在 <code>outerFunc</code> 中被定义，它的词法作用域是 <code>outerFunc()</code>，同时它也在 <code>outerFunc()</code> 作用域中被调用）。</p><p>下面我们让 <code>innerFunc</code> 不在它自己所在的作用域中被调用。注意，<code>outerFunc</code> 此时直接返回了内部函数 <code>innerFunc</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> outerVar <span class="token operator">=</span> <span class="token string">&quot;outer&quot;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outerVar<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">return</span> innerFunc<span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">otherFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 innerFunc</span></span>\n<span class="line">  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在 otherFunc() 内部的作用域中调用 innerFunc</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">otherFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 <code>innerFunc()</code> 不在它自己的作用域中调用，而是在 <code>otherFunc()</code> 内部的作用域中被调用。那么它还能访问到 <code>outerFunc()</code> 内部作用中的变量 <code>outerVar</code> 吗？</p><p>执行后可以观察到，仍然输出了 <code>&quot;outer&quot;</code>，即 <code>innerFunc()</code> 仍然可以访问到它的词法作用域中的变量 <code>outerVar</code>。</p><p>也就是说，<code>innerFunc()</code> <strong>closes over</strong>(捕获) 了来自它的词法作用域中的变量 <code>outerVar</code>。</p><p>所以说 <code>innerFunc()</code> 是一个闭包，因为它<strong>closes over</strong>(捕获/记住) 了来自它的词法作用域中变量 <code>outerVar</code>。</p><div class="hint-container tip"><p class="hint-container-title">闭包的定义</p><p>现在再来看 MDN 上对闭包的定义：</p><ul><li>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). <strong>In other words, a closure gives you access to an outer function&#39;s scope from an inner function.</strong> In JavaScript, closures are created every time a function is created, at function creation time.</li></ul><p>首先它一定得是一个函数（函数都有对应的词法作用域）。即使这个函数在它自己的词法作用域之外被调用，也能访问到它的词法作用域。</p><p>简单来说就是，<strong>记住</strong>了「外部变量」的函数，就是闭包。和这个函数在哪执行，什么时候执行无关。</p></div><h3 id="_2-2-如何判断是不是闭包" tabindex="-1"><a class="header-anchor" href="#_2-2-如何判断是不是闭包"><span>2.2 如何判断是不是闭包</span></a></h3><p>结合上面的含义，我们可以给出一个判断是不是闭包的方法。</p><p>首先得是一个函数。然后，如果这个函数中访问了非函数内部作用域中的变量，基本上就是闭包了。</p><p>比如上面的代码中，<code>innerFunc()</code> 使用了外部定义的变量 <code>outerVar</code>，那 <code>innerFunc()</code> 就是一个闭包。而且，<code>innerFunc()</code> 不在自己所在的作用域中被调用。</p><p>另外，我们常见的闭包的应用有 Event Handler, Callbacks, Curry。</p><h2 id="_3-垃圾收集-选看" tabindex="-1"><a class="header-anchor" href="#_3-垃圾收集-选看"><span>3. 垃圾收集（选看）</span></a></h2><p>如果此前不了解 JavaScript 的拉结收集机制，可以先看<a href="https://javascript.info/garbage-collection" target="_blank" rel="noopener noreferrer">垃圾收集</a>。</p><p>一般函数调用完毕之后，就不存在对词法环境的引用了，于是词法环境和其中的变量会被从内存中删除。</p><p>但是如果有嵌套函数在函数结束后仍然可达，那么词法环境的引用依然存在，垃圾回收就不会回收它。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;outer&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fn 的外层作用域(<code>outer</code>)指向 <code>outerFunc()</code> 内部的作用域。所以，即使 <code>outerFunc()</code> 已经执行完毕，但是它的词法环境对象仍然可达，仍然会保留在内存中。</p><p>它不可达时，比如我们直接给 <code>fn</code> 赋值 <code>fn = null</code>，那么包括 <code>outerFunc()</code> 词法环境以及其内部的变量才会在内存中清除。</p><p>正常来说，只要函数可达，那么它外部的变量也都存在（即所有的函数都天然是闭包）。但是在 V8 中做了优化，如果内部嵌套的函数没有显示的使用外层变量，那么在嵌套函数中该变量就不可达。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 显示引用了 a，显示 10</span></span>\n<span class="line">    <span class="token keyword">debugger</span><span class="token punctuation">;</span> <span class="token comment">// 在 console 中：输入 alert(b);  b is not defined</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">return</span> g<span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-练习" tabindex="-1"><a class="header-anchor" href="#_4-练习"><span>4. 练习</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    cnt<span class="token operator">++</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">let</span> info <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Count is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cnt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span>increment<span class="token punctuation">,</span> log<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> <span class="token punctuation">[</span>increment<span class="token punctuation">,</span> log<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里的输出是什么</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>答案</summary><p>输出的内容为 <code>Count is 0</code>。</p><p>那如何可以获得正常的答案呢？</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">let</span> info <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Count is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cnt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre></div></details>', 43)),
    createBaseVNode("div", _hoisted_1, [
      _cache[8] || (_cache[8] = createStaticVNode('<p class="hint-container-title">了解更多</p><p>访问<a href="https://javascript.info/closure" target="_blank" rel="noopener noreferrer">Variable scope, closure</a>进一步了解相关内容，其中还解释了<a href="https://javascript.info/closure#step-2-function-declarations" target="_blank" rel="noopener noreferrer">函数声明的提升</a>。</p><p>这篇文章中给出的 Closure 定义十分简额明要：</p><ul><li>A closure is a function that remembers its outer variables and can access them.</li><li>In JavaScript, all functions are naturally closures (there is only one exception, to be covered in <a href="https://javascript.info/new-function" target="_blank" rel="noopener noreferrer">The &quot;new Function&quot; syntax</a>).</li></ul><p>这里再多说点，<code>new Function</code> 是在代码运行时根据字符串来创建函数的，它的作用域不是词法作用域，而是全局作用域。</p><p>为什么 <code>new Function</code> 创建的变量不是词法作用域呢？如果 <code>new Function</code> 能够访问词法作用域，试想以下场景。在代码发布到生产环境之前，通常会被 minifier 进行压缩，删掉注释、空格，并且会将局部变量以更短的名字进行重命名。比如一个变量 <code>let localVariable</code> 可能会被重命名为 <code>a</code>。运行代码时 <code>new Function</code> 要访问这个变量（比如从后端取得代码来创建函数执行），它又如何能够确定它现在的名字呢？</p>', 6)),
      createVNode(_component_CodeTabs, {
        id: "196",
        data: [{ "id": "Function Declaration" }, { "id": "new Function" }]
      }, {
        title0: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
          createTextVNode("Function Declaration")
        ])),
        title1: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
          createTextVNode("new Function")
        ])),
        tab0: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
          createBaseVNode(
            "div",
            {
              class: "language-javascript line-numbers-mode",
              "data-highlighter": "prismjs",
              "data-ext": "js",
              "data-title": "js"
            },
            [
              createBaseVNode("pre", null, [
                createBaseVNode("code", null, [
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token keyword" }, "function"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "sumBy"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token parameter" }, "num1"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("  "),
                    createBaseVNode("span", { class: "token keyword" }, "return"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "function"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token parameter" }, "num2"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("    "),
                    createBaseVNode("span", { class: "token keyword" }, "return"),
                    createTextVNode(" num1 "),
                    createBaseVNode("span", { class: "token operator" }, "+"),
                    createTextVNode(" num2"),
                    createBaseVNode("span", { class: "token punctuation" }, ";")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("  "),
                    createBaseVNode("span", { class: "token punctuation" }, "}"),
                    createBaseVNode("span", { class: "token punctuation" }, ";")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "}")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token keyword" }, "const"),
                    createTextVNode(" sumBy2 "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "sumBy"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token number" }, "2"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ";")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("console"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "log"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token function" }, "sumBy2"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token number" }, "10"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ";"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token comment" }, "// 12")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" })
                ])
              ]),
              createBaseVNode("div", {
                class: "line-numbers",
                "aria-hidden": "true",
                style: { "counter-reset": "line-number 0" }
              }, [
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" })
              ])
            ],
            -1
            /* HOISTED */
          )
        ])),
        tab1: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
          createBaseVNode(
            "div",
            {
              class: "language-javascript line-numbers-mode",
              "data-highlighter": "prismjs",
              "data-ext": "js",
              "data-title": "js"
            },
            [
              createBaseVNode("pre", null, [
                createBaseVNode("code", null, [
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token keyword" }, "function"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "sumBy"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token parameter" }, "num1"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token punctuation" }, "{")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("  "),
                    createBaseVNode("span", { class: "token comment" }, "// 这是在运行时通过传入的字符串创建的函数")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("  "),
                    createBaseVNode("span", { class: "token comment" }, "// 全局作用域，而非词法作用域")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("  "),
                    createBaseVNode("span", { class: "token keyword" }, "return"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token keyword" }, "new"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token class-name" }, "Function"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token string" }, '"num2"'),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token string" }, '"return num1+num2"'),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ";")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token punctuation" }, "}")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token keyword" }, "const"),
                    createTextVNode(" sumBy2 "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "sumBy"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token number" }, "2"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ";")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("console"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createBaseVNode("span", { class: "token function" }, "log"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token function" }, "sumBy2"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createBaseVNode("span", { class: "token number" }, "10"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ")"),
                    createBaseVNode("span", { class: "token punctuation" }, ";"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token comment" }, "// num1 is not defined")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" })
                ])
              ]),
              createBaseVNode("div", {
                class: "line-numbers",
                "aria-hidden": "true",
                style: { "counter-reset": "line-number 0" }
              }, [
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" })
              ])
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const closure_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "closure.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/closure.html","title":"闭包","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"闭包","description":null,"article":false,"date":"2023-09-12T00:00:00.000Z","order":3},"headers":[{"level":2,"title":"1. 作用域（Scope）","slug":"_1-作用域-scope","link":"#_1-作用域-scope","children":[{"level":3,"title":"1.1 什么是作用域","slug":"_1-1-什么是作用域","link":"#_1-1-什么是作用域","children":[]},{"level":3,"title":"1.2 作用域嵌套","slug":"_1-2-作用域嵌套","link":"#_1-2-作用域嵌套","children":[]},{"level":3,"title":"1.3 词法作用域/静态作用域","slug":"_1-3-词法作用域-静态作用域","link":"#_1-3-词法作用域-静态作用域","children":[]}]},{"level":2,"title":"2. 闭包（Closure）","slug":"_2-闭包-closure","link":"#_2-闭包-closure","children":[{"level":3,"title":"2.1 闭包的定义","slug":"_2-1-闭包的定义","link":"#_2-1-闭包的定义","children":[]},{"level":3,"title":"2.2 如何判断是不是闭包","slug":"_2-2-如何判断是不是闭包","link":"#_2-2-如何判断是不是闭包","children":[]}]},{"level":2,"title":"3. 垃圾收集（选看）","slug":"_3-垃圾收集-选看","link":"#_3-垃圾收集-选看","children":[]},{"level":2,"title":"4. 练习","slug":"_4-练习","link":"#_4-练习","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":7.44,"words":2232},"filePathRelative":"front-end/js/closure.md","localizedDate":"2023年9月12日","excerpt":"<p>在谈论闭包之前，我们有必要先了解什么是词法作用域（scope），弄清楚这个概念之后再谈闭包就容易多了。</p>\\n<h2>1. 作用域（Scope）</h2>\\n<h3>1.1 什么是作用域</h3>\\n<p>变量能否被访问，是由<strong>作用域</strong>控制的。在变量的作用域之外，是无法访问该变量的。比如：在函数中定义的变量，只能在函数中被访问到，函数之外的地方没有办法访问该变量。</p>\\n<p>在 JavaScript 中，函数和代码块（<code>{}</code>）都可以创建作用域。当然整个 JavaScript 代码中，最外层也是一个作用域，即全局作用域。</p>\\n\\n<p>上面代码中，function 和代码块都各自定义了一个作用域。在函数作用域中定义的变量 <code>cnt</code> 不能在函数作用域之外访问到。</p>"}');
export {
  closure_html as comp,
  data
};
