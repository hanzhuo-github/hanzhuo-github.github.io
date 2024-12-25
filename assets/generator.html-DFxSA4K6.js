import { r as resolveComponent, c as createElementBlock, f as createBaseVNode, g as createTextVNode, d as createVNode, e as withCtx, a as createCommentVNode, b as createStaticVNode, o as openBlock } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[12] || (_cache[12] = createBaseVNode(
      "p",
      null,
      "正常的函数只能返回一次值（或者没有返回），而 Generator 可以一个接一个地多次返回（“yield”）。",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("Generator 可以和")),
      createVNode(_component_RouteLink, { to: "/front-end/js/grammar/iterables.html" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("可迭代对象（iterables）")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[2] || (_cache[2] = createTextVNode("配合来创建数据流。"))
    ]),
    createCommentVNode(" more "),
    _cache[13] || (_cache[13] = createStaticVNode('<h2 id="_1-创建与使用" tabindex="-1"><a class="header-anchor" href="#_1-创建与使用"><span>1. 创建与使用</span></a></h2><p>创建 Generator Function 要使用语法 <code>function*</code>。</p><p>调用 Generator Function 不会运行对应的代码，而是返回一个 Generator Object，下面就将其称为 Generator。</p><p>Generator 是可迭代对象，主要方法是 <code>next()</code>。调用 <code>next()</code> 之后，代码会执行到最近的 <code>yield &lt;value&gt;</code> 语句，函数就暂停了，被 yield 的 <code>value</code> 会被返回。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>generator<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object Generator]</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> one <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>one<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;value&quot;:1,&quot;done&quot;:false}</span></span>\n<span class="line"><span class="token keyword">const</span> two <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>two<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;value&quot;:2,&quot;done&quot;:false}</span></span>\n<span class="line"><span class="token keyword">const</span> three <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>three<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;value&quot;:3,&quot;done&quot;:true}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// done: true 之后再调用 `next()`，会得到 {&quot;done&quot;:true}</span></span>\n<span class="line"><span class="token keyword">const</span> four <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>four<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;done&quot;:true}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然 Generator 是可迭代对象，那么它自然可以使用 <code>for...of</code> 来遍历</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> generator<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1, 然后是 2</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>for...of</code> 会将 <code>done: true</code> 的结果忽略，所以上面的结果只有 <code>1</code>, <code>2</code>。如果想得到 <code>1</code>, <code>2</code>, <code>3</code>，可以将 <code>return 3</code> 换成 <code>yield 3</code>：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> generator<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 1, 2, 3</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以在 generator 上应用 spread 语法：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0, 1, 2, 3</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用-generator-创建可迭代对象" tabindex="-1"><a class="header-anchor" href="#_2-使用-generator-创建可迭代对象"><span>2. 使用 generator 创建可迭代对象</span></a></h2>', 12)),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("在")),
      createVNode(_component_RouteLink, { to: "/front-end/js/grammar/iterables.html" }, {
        default: withCtx(() => _cache[3] || (_cache[3] = [
          createTextVNode("可迭代对象（iterables）")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[5] || (_cache[5] = createTextVNode("中实现过一个可迭代对象 ")),
      _cache[6] || (_cache[6] = createBaseVNode(
        "code",
        null,
        "range",
        -1
        /* HOISTED */
      )),
      _cache[7] || (_cache[7] = createTextVNode("，现在我们可以用 generator 来实现。"))
    ]),
    createVNode(_component_CodeTabs, {
      id: "38",
      data: [{ "id": "iterables" }, { "id": "generator&iterable" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[8] || (_cache[8] = [
        createTextVNode("iterables")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[9] || (_cache[9] = [
        createTextVNode("generator&iterable")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[10] || (_cache[10] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" range "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "from"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "to"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "5"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("Symbol"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("iterator"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token literal-property property" }, "current"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("from"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token literal-property property" }, "to"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("to"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "next"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("current "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("to"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "done"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "false"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "value"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("current"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("          "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "done"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token boolean" }, "true"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token operator" }, "..."),
                  createTextVNode("range"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 1,2,3,4,5")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
      tab1: withCtx(({ value, isActive }) => _cache[11] || (_cache[11] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" range "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "from"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token literal-property property" }, "to"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "5"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token operator" }, "*"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("Symbol"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("iterator"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "for"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" value "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("from"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" value "),
                  createBaseVNode("span", { class: "token operator" }, "<="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("to"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(" value"),
                  createBaseVNode("span", { class: "token operator" }, "++"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "yield"),
                  createTextVNode(" value"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token operator" }, "..."),
                  createTextVNode("range"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// 1,2,3,4,5")
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
    _cache[14] || (_cache[14] = createStaticVNode('<h2 id="_3-generator-composition" tabindex="-1"><a class="header-anchor" href="#_3-generator-composition"><span>3. Generator Composition</span></a></h2><p>使用 <code>yield*</code> 可以将 generator 嵌套在另一个 generator 中。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token keyword">yield</span> i<span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generateCodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">57</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0...9</span></span>\n<span class="line">  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A...Z</span></span>\n<span class="line">  <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token number">47</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a...z</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 相当于</span></span>\n<span class="line">  <span class="token comment">// for (let i = 48; i &lt;= 57; i++) yield i;</span></span>\n<span class="line">  <span class="token comment">// for (let i = 65; i &lt;= 90; i++) yield i;</span></span>\n<span class="line">  <span class="token comment">// for (let i = 97; i &lt;= 122; i++) yield i;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> code <span class="token keyword">of</span> <span class="token function">generateCodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  str <span class="token operator">+=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0..9A..Za..z</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-generator-方法" tabindex="-1"><a class="header-anchor" href="#_4-generator-方法"><span>4. generator 方法</span></a></h2><h3 id="_4-1-generator-next-arg-向内部传参" tabindex="-1"><a class="header-anchor" href="#_4-1-generator-next-arg-向内部传参"><span>4.1 <code>generator.next(arg)</code> 向内部传参</span></a></h3><p><code>yield</code> 不仅可以向外返回结果，还可以将外部的值传递到 generator 内部，只需调用 <code>generator.next(arg)</code> 即可将 <code>arg</code> 传递到内部成为 <code>yield</code> 的结果。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">genQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> q1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">&quot;2 + 2 = ?&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">const</span> q2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">&quot;3 + 3 = ?&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span>q2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token function">genQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 + 2 = ?</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3 + 3 = ?</span></span>\n<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果第一次调用 <code>next()</code> 传了参，该参数会被忽略。</p><p>第一次调用 <code>next()</code>，执行到 <code>yield &quot;2 + 2 = ?&quot;</code>，打印 <code>yield</code> 的值。 第二次调用 <code>next(4)</code>，将 4 传回去，即 <code>const q1 = 4;</code>，接着打印 q1，执行到 <code>yield &quot;3 + 3 = ?&quot;</code>，打印 <code>yield</code> 值：<code>3 + 3 = ?</code>。 第三次嗲用 <code>next(6)</code>，将 4 传回去，即 <code>const q2 = 6;</code>，接着打印 q2，此时的 <code>done</code> 值为 true。</p><h3 id="_4-2-generator-throw-抛出错误" tabindex="-1"><a class="header-anchor" href="#_4-2-generator-throw-抛出错误"><span>4.2 <code>generator.throw</code> 抛出错误</span></a></h3><p>上面使用 <code>generator.next(arg)</code> 将结果传递回内部作为 <code>yield</code> 的结果。如果想让 <code>yield</code> 的结果为 Error，可以使用 <code>generator.throw</code> 抛出错误。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">genQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token string">&quot;2 + 2 = ?&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;执行不到这里，外部抛出了错误传递到 yield&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印这个 error</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">genQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> q <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>\n<span class="line">generator<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;我不会算啊&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-generator-return-完成-generator" tabindex="-1"><a class="header-anchor" href="#_4-3-generator-return-完成-generator"><span>4.3 <code>generator.return</code> 完成 generator</span></a></h3><p><code>generator.return</code> 完成 generator，可以通过传参指定 <code>value</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span></span>\n<span class="line">generator<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: &#39;hello&#39;, done: true }</span></span>\n<span class="line">generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-异步-generator" tabindex="-1"><a class="header-anchor" href="#_5-异步-generator"><span>5. 异步 generator</span></a></h2><p>在同步 generator function 的 <code>function*</code> 前面加上 <code>async</code> 就可以获得异步 generator function。然后就可以使用 <code>for await (...)</code> 来遍历它了。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">await</span> nwe <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">yield</span> i<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">generateSequence</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> g<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 1, 2, 3, 4, 5</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，异步可迭代对象 <code>range</code> 用 generator 实现如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> range <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>\n<span class="line"></span>\n<span class="line">  async <span class="token operator">*</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>asyncIterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>from<span class="token punctuation">;</span> value <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to<span class="token punctuation">;</span> value<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">yield</span> value<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> range<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1, 2, 3, 4, 5</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 20))
  ]);
}
const generator_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "generator.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/grammar/generator.html","title":"Generator","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Generator","description":null,"article":false,"date":"2023-12-10T00:00:00.000Z"},"headers":[{"level":2,"title":"1. 创建与使用","slug":"_1-创建与使用","link":"#_1-创建与使用","children":[]},{"level":2,"title":"2. 使用 generator 创建可迭代对象","slug":"_2-使用-generator-创建可迭代对象","link":"#_2-使用-generator-创建可迭代对象","children":[]},{"level":2,"title":"3. Generator Composition","slug":"_3-generator-composition","link":"#_3-generator-composition","children":[]},{"level":2,"title":"4. generator 方法","slug":"_4-generator-方法","link":"#_4-generator-方法","children":[{"level":3,"title":"4.1 generator.next(arg) 向内部传参","slug":"_4-1-generator-next-arg-向内部传参","link":"#_4-1-generator-next-arg-向内部传参","children":[]},{"level":3,"title":"4.2 generator.throw 抛出错误","slug":"_4-2-generator-throw-抛出错误","link":"#_4-2-generator-throw-抛出错误","children":[]},{"level":3,"title":"4.3 generator.return 完成 generator","slug":"_4-3-generator-return-完成-generator","link":"#_4-3-generator-return-完成-generator","children":[]}]},{"level":2,"title":"5. 异步 generator","slug":"_5-异步-generator","link":"#_5-异步-generator","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":3.54,"words":1062},"filePathRelative":"front-end/js/grammar/generator.md","localizedDate":"2023年12月10日","excerpt":"<p>正常的函数只能返回一次值（或者没有返回），而 Generator 可以一个接一个地多次返回（“yield”）。</p>\\n<p>Generator 可以和<a href=\\"/front-end/js/grammar/iterables.html\\" target=\\"_blank\\">可迭代对象（iterables）</a>配合来创建数据流。</p>\\n"}');
export {
  generator_html as comp,
  data
};
