import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, f as createBaseVNode, g as createTextVNode, d as createVNode, e as withCtx, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createStaticVNode('<p>命令行执行 <code>tsc --init</code> 会自动创建 <code>tsconfig.json</code> 文件。它的配置项有很多（详见<a href="https://aka.ms/tsconfig" target="_blank" rel="noopener noreferrer">官网 tsconfig</a>。），这篇文章将介绍那些我们需要熟知的一小部分。</p><h2 id="_1-基本配置" tabindex="-1"><a class="header-anchor" href="#_1-基本配置"><span>1. 基本配置</span></a></h2><p>下面的选项推荐在所有的项目都进行配置：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2022&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;moduleDetection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;force&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;verbatimModuleSyntax&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 4)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[7] || (_cache[7] = createBaseVNode(
          "p",
          null,
          [
            createBaseVNode("a", {
              href: "https://www.typescriptlang.org/tsconfig/#esModuleInterop",
              target: "_blank",
              rel: "noopener noreferrer"
            }, "esModuleInterop"),
            createTextVNode("：设置为 "),
            createBaseVNode("code", null, "true"),
            createTextVNode("，可以实现对 CommonJS 模块的支持（修复 CommonJS 和 ES Modules 的默认行为引起的错误）。")
          ],
          -1
          /* HOISTED */
        )),
        createBaseVNode("details", _hoisted_1, [
          _cache[4] || (_cache[4] = createBaseVNode(
            "summary",
            null,
            "默认为 false 情况下的问题",
            -1
            /* HOISTED */
          )),
          _cache[5] || (_cache[5] = createBaseVNode(
            "p",
            null,
            "常用的 JS 模块系统有三个：CommonJS (cjs), ES Module (esm), UMD。",
            -1
            /* HOISTED */
          )),
          _cache[6] || (_cache[6] = createBaseVNode(
            "p",
            null,
            "我们编写代码时采用 esm，但是引入三方库可能是 cjs，二者之间有行为上的区别。具体见下：",
            -1
            /* HOISTED */
          )),
          createVNode(_component_CodeTabs, {
            id: "22",
            data: [{ "id": "导入默认" }, { "id": "import *" }]
          }, {
            title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
              createTextVNode("导入默认")
            ])),
            title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
              createTextVNode("import *")
            ])),
            tab0: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
              createBaseVNode(
                "div",
                {
                  class: "language-typescript line-numbers-mode",
                  "data-highlighter": "prismjs",
                  "data-ext": "ts",
                  "data-title": "ts"
                },
                [
                  createBaseVNode("pre", null, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token comment" }, "// 源代码")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token keyword" }, "import"),
                        createTextVNode(" React "),
                        createBaseVNode("span", { class: "token keyword" }, "from"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token string" }, '"react"'),
                        createBaseVNode("span", { class: "token punctuation" }, ";")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token builtin" }, "console"),
                        createBaseVNode("span", { class: "token punctuation" }, "."),
                        createBaseVNode("span", { class: "token function" }, "log"),
                        createBaseVNode("span", { class: "token punctuation" }, "("),
                        createTextVNode("React"),
                        createBaseVNode("span", { class: "token punctuation" }, ")"),
                        createBaseVNode("span", { class: "token punctuation" }, ";")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token comment" }, "// 转译后")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token comment" }, "// 由于 React 的 module.exports 中没有 default 属性，所以代码报错")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token keyword" }, "const"),
                        createTextVNode(" React "),
                        createBaseVNode("span", { class: "token operator" }, "="),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token keyword" }, "require"),
                        createBaseVNode("span", { class: "token punctuation" }, "("),
                        createBaseVNode("span", { class: "token string" }, '"react"'),
                        createBaseVNode("span", { class: "token punctuation" }, ")"),
                        createBaseVNode("span", { class: "token punctuation" }, ";")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token builtin" }, "console"),
                        createBaseVNode("span", { class: "token punctuation" }, "."),
                        createBaseVNode("span", { class: "token function" }, "log"),
                        createBaseVNode("span", { class: "token punctuation" }, "("),
                        createTextVNode("React"),
                        createBaseVNode("span", { class: "token punctuation" }, "."),
                        createTextVNode("default"),
                        createBaseVNode("span", { class: "token punctuation" }, ")"),
                        createBaseVNode("span", { class: "token punctuation" }, ";")
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
                  class: "language-typescript line-numbers-mode",
                  "data-highlighter": "prismjs",
                  "data-ext": "ts",
                  "data-title": "ts"
                },
                [
                  createBaseVNode("pre", null, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token comment" }, "// 源代码")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token keyword" }, "import"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token operator" }, "*"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token keyword" }, "as"),
                        createTextVNode(" React "),
                        createBaseVNode("span", { class: "token keyword" }, "from"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token string" }, '"react"'),
                        createBaseVNode("span", { class: "token punctuation" }, ";")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token builtin" }, "console"),
                        createBaseVNode("span", { class: "token punctuation" }, "."),
                        createBaseVNode("span", { class: "token function" }, "log"),
                        createBaseVNode("span", { class: "token punctuation" }, "("),
                        createTextVNode("React"),
                        createBaseVNode("span", { class: "token punctuation" }, ")"),
                        createBaseVNode("span", { class: "token punctuation" }, ";")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token comment" }, "// 转译后")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token keyword" }, "const"),
                        createTextVNode(" React "),
                        createBaseVNode("span", { class: "token operator" }, "="),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token keyword" }, "require"),
                        createBaseVNode("span", { class: "token punctuation" }, "("),
                        createBaseVNode("span", { class: "token string" }, '"react"'),
                        createBaseVNode("span", { class: "token punctuation" }, ")"),
                        createBaseVNode("span", { class: "token punctuation" }, ";")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "line" }, [
                        createBaseVNode("span", { class: "token builtin" }, "console"),
                        createBaseVNode("span", { class: "token punctuation" }, "."),
                        createBaseVNode("span", { class: "token function" }, "log"),
                        createBaseVNode("span", { class: "token punctuation" }, "("),
                        createTextVNode("React"),
                        createBaseVNode("span", { class: "token punctuation" }, ")"),
                        createBaseVNode("span", { class: "token punctuation" }, ";")
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
          })
        ])
      ]),
      _cache[8] || (_cache[8] = createStaticVNode('<li><p><a href="https://www.typescriptlang.org/tsconfig/#skipLibCheck" target="_blank" rel="noopener noreferrer">skipLibCheck</a>：设置为 <code>true</code>，可以跳过对所有 <code>.d.ts</code> 文件的类型检查，节省编译时间。否则会检查所有 <code>node_modules</code> 中的 <code>.d.ts</code> 文件，这是十分耗时的。</p></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#target" target="_blank" rel="noopener noreferrer">target</a>：指定 TypeScript 编译器应该将 TypeScript 代码编译成的 JavaScript 版本。<code>esnext</code> 指最新的 ECMA 提案和特性，出于稳定性的考虑，我们可以使用 <code>es2022</code> 而非 <code>esnext</code>。</p></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#allowJs" target="_blank" rel="noopener noreferrer">allowJs</a>：设置为 <code>true</code> 允许引入 JavaScript 文件（TypeScript 默认只允许引入 <code>.ts</code> 和 <code>.tsx</code>）。</p></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#resolveJsonModule" target="_blank" rel="noopener noreferrer">resolveJsonModule</a>：设置为 <code>true</code>，允许引入 <code>.json</code> 文件。</p></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#moduleDetection" target="_blank" rel="noopener noreferrer">moduleDetection</a>：</p><ul><li><code>&quot;auto&quot;</code>（默认值）：如果文件中包含 import 或 export、<code>import.meta</code>，则认为是模块；当 <code>module</code> 设置为 <code>node16</code> 或 <code>nodenext</code> 时，检查 <code>package.json</code> 中的 <code>&quot;type&quot;</code> 是否为 &quot;module&quot;；当 <code>jsx</code> 设置为 <code>react-jsx</code> 时，JSX 文件也会被视为模块。</li><li><code>&quot;legacy&quot;</code>：根据是否使用了 import 和 export 来确定是不是模块。</li><li><code>&quot;force&quot;</code>：每个非声明文件（即 <code>.ts</code> 和 <code>.tsx</code>，但不包括 <code>.d.ts</code>）都被视为模块。</li></ul></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#isolatedModules" target="_blank" rel="noopener noreferrer">isolatedModules</a>：设置为 <code>true</code>，每个文件会被独立编译。</p></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax" target="_blank" rel="noopener noreferrer">verbatimModuleSyntax</a>：设置为 <code>true</code>，强制使用 <code>import type</code> 和 <code>export type</code> 来导入、导出类型。</p></li>', 7))
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="_2-严格性检查" tabindex="-1"><a class="header-anchor" href="#_2-严格性检查"><span>2. 严格性检查</span></a></h2><p>关于严格性检查推荐的配置：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;noUncheckedIndexedAccess&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;noImplicitOverride&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><a href="https://www.typescriptlang.org/tsconfig/#strict" target="_blank" rel="noopener noreferrer">strict</a>：设置为 <code>true</code>，表示开启了下面一系列的类型检查规则：</p><ul><li><p><code>strictNullChecks</code>：如果为 <code>false</code>，<code>null</code> 和 <code>undefined</code> 可以被赋值给其他任意类型。</p></li><li><p><code>strictPropertyInitialization</code>：是否要求类的属性必须被初始化，开启此属性需要一并开启 <code>strictNullChecks</code>.</p></li><li><p><code>strictFunctionTypes</code>：如果为 <code>false</code>，传参时 <code>string</code> 类型可以赋值给 <code>string|number</code>。</p><details class="hint-container details"><summary>设置为 true 之后报错</summary><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// Argument of type &#39;(a: string) =&gt; void&#39; is not assignable to parameter of type &#39;(x: string | number) =&gt; void&#39;.</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::detail</p></details></li><li><p><code>strictBindCallApply</code>：在 <code>bind</code>, <code>call</code>, <code>apply</code> 时是否进行参数检查。</p></li><li><p><code>noImplicitAny</code>：设置为 <code>true</code>，不允许有隐式的 <code>any</code>，如果 TypeScript 将某个变量推断为 <code>any</code> 类型就会报错。</p></li><li><p><code>noImplicitThis</code>：是否允许出现隐式 <code>any</code> 类型的 <code>this</code>。</p></li><li><p><code>alwaysStrict</code>：是否开启严格模式，开启的话编译后的 JavaScript 代码就会带上 <code>&quot;use strict&quot;</code>。</p></li></ul></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess" target="_blank" rel="noopener noreferrer">noUncheckedIndexedAccess</a>：启用它会在「使用索引访问的属性（比如 object，array）」上加上 <code>undefined</code>。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">AType</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> a<span class="token operator">:</span> AType<span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> a<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// TypeScript 检测出 `const data: string`</span></span>\n<span class="line"><span class="token comment">// 启用 noUncheckedIndexedAccess 后 `const data: string | undefined`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没启用这个字段，那么 <code>a.xxx</code> 都被认为是 string 类型，TypeScript 编译器就不会提示我们它可能是 <code>undefined</code>。所以，启用它，避免没有检查该属性是否被定义。</p></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#noImplicitOverride" target="_blank" rel="noopener noreferrer">noImplicitOverride</a>：使类中的 <code>override</code> 关键字生效。子类复写基类中的方法时，必须使用关键字 <code>override</code>。</p></li></ul><p>很多人也推荐使用 <a href="https://github.com/tsconfig/bases/blob/031273b815ff7f672c7c9057fb7d19ef363054b1/bases/strictest.json" target="_blank" rel="noopener noreferrer">tsconfig/bases</a> 中的严格性选项。像 <a href="https://www.typescriptlang.org/tsconfig/#noImplicitReturns" target="_blank" rel="noopener noreferrer"><code>noImplicitReturns</code></a>, <a href="https://www.typescriptlang.org/tsconfig/#noUnusedLocals" target="_blank" rel="noopener noreferrer"><code>noUnusedLocals</code></a>, <a href="https://www.typescriptlang.org/tsconfig/#noUnusedParameters" target="_blank" rel="noopener noreferrer"><code>noUnusedParameters</code></a>, <a href="https://www.typescriptlang.org/tsconfig/#noFallthroughCasesInSwitch" target="_blank" rel="noopener noreferrer"><code>noFallthroughCasesInSwitch</code></a> 等选项可以在确实需要的时候再进行配置。</p><details class="hint-container details"><summary>选项介绍</summary><ul><li><a href="https://www.typescriptlang.org/tsconfig/#noImplicitReturns" target="_blank" rel="noopener noreferrer"><code>noImplicitReturns</code></a>：如果为 <code>true</code>，TypeScript 将检查函数中的所有路径，确保都有返回值。</li><li><a href="https://www.typescriptlang.org/tsconfig/#noUnusedLocals" target="_blank" rel="noopener noreferrer"><code>noUnusedLocals</code></a>：如果为 <code>true</code>，那么不允许有「没被使用的局部变量」。</li><li><a href="https://www.typescriptlang.org/tsconfig/#noUnusedParameters" target="_blank" rel="noopener noreferrer"><code>noUnusedParameters</code></a>：如果为 <code>true</code>，那么不允许函数中有没被使用的参数。</li><li><a href="https://www.typescriptlang.org/tsconfig/#noFallthroughCasesInSwitch" target="_blank" rel="noopener noreferrer"><code>noFallthroughCasesInSwitch</code></a>：如果为 <code>true</code>，则不允许 fallthrough，即如果 switch 中的非空 case 必须有 <code>break</code>, <code>return</code>, <code>throw</code> 中的一个`。</li></ul></details><h2 id="_3-使用-tsc-进行编译" tabindex="-1"><a class="header-anchor" href="#_3-使用-tsc-进行编译"><span>3. 使用 tsc 进行编译</span></a></h2><p>如果使用 TypeScript 编译器进行编译，需要进行的配置有：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NodeNext&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><a href="https://www.typescriptlang.org/tsconfig/#module" target="_blank" rel="noopener noreferrer">module</a>：指定生成的 JavaScript 代码要遵循哪种模块化规范。Node 环境最好用 <code>&quot;nodenext&quot;</code>，此时 <a href="https://www.typescriptlang.org/tsconfig/#moduleResolution" target="_blank" rel="noopener noreferrer"><code>moduleResolution</code></a>（在编译时如何解析模块的依赖关系） 被隐式地设置为了 <code>&quot;nodenext&quot;</code>。</p><ul><li><code>&quot;node16&quot;</code>（同 <code>&quot;nodenext&quot;</code>）：Node.js v16+ 的模块系统，它们支持在同一项目中同时使用 ES 模块和 CommonJS 模块，并提供了特定的互操作性和检测规则。如果你的项目目标是在 Node.js v16+ 环境下运行，并且希望支持 ES 模块和 CommonJS 模块的混合使用，那么选择其中之一将是合适的。nodenext 将会随着 Node.js 模块系统的演进而保持最新状态。</li><li><code>&quot;es2015&quot;</code>/<code>&quot;es6&quot;</code>, <code>&quot;es2020&quot;</code>, <code>&quot;es2022&quot;</code>, <code>&quot;esnext&quot;</code>：基于 ECMAScript 规范的不同版本。如果你希望项目代码能够某个版本 ECMAScript 特性，并且不需要考虑 Node.js 的特定模块系统，则可以选择其中之一。</li><li><code>&quot;commonjs&quot;</code>, <code>&quot;system&quot;</code>, <code>&quot;amd&quot;</code>, <code>&quot;umd&quot;</code>：分别对应了常见的模块系统。但是不推荐在新项目中使用这些，它们已经过时了，不适合现代的 JavaScript 生态系统。</li><li><code>&quot;none&quot;</code>, <code>&quot;preserve&quot;</code>：请跳转到<a href="#_4-%E4%B8%8D%E4%BD%BF%E7%94%A8-tsc-%E7%BC%96%E8%AF%91">不使用 <code>tsc</code> 编译</a>中查看。</li></ul></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#outDir" target="_blank" rel="noopener noreferrer">outDir</a>：TypeScript 编译后的代码放在哪个目录里。一般是 <code>&quot;dist&quot;</code>。</p></li></ul><h2 id="_4-不使用-tsc-编译" tabindex="-1"><a class="header-anchor" href="#_4-不使用-tsc-编译"><span>4. 不使用 tsc 编译</span></a></h2><p>如果你只是把 TypeScript 作为 linter（代码检查器）工具而不是编译器，这种情况下你可能不需要 <code>tsc</code> 来转译代码。这时你需要设置：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><a href="https://www.typescriptlang.org/tsconfig/#module" target="_blank" rel="noopener noreferrer">module: &quot;preserve&quot;</a>：不对模块语法进行转换，即导入导出的格式都没有进行转换或转译。虽然很少需要在同一个文件中混用 import 和 require，但这种模块模式最好地反映了大多数现代打包器以及 Bun 运行时的功能。这时<a href="https://www.typescriptlang.org/tsconfig/#moduleResolution" target="_blank" rel="noopener noreferrer"><code>moduleResolution</code></a>（在编译时如何解析模块的依赖关系） 被隐式地设置为了 <code>&quot;bundler&quot;</code>。</p></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#noEmit" target="_blank" rel="noopener noreferrer">noEmit</a>：设置为 <code>true</code> 告诉 TypeScript 不要生成任何文件。使用场景：可能要使用其他工具（比如 Babel 或 swc）来处理 TypeScript 文件，将其转换成可以在 JavaScript 环境中运行的文件。</p></li></ul><h2 id="_5-库的配置" tabindex="-1"><a class="header-anchor" href="#_5-库的配置"><span>5.库的配置</span></a></h2><p>如果你正在构建一个库时，应该设置 <code>declaration: true</code>。</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre></div><ul><li><a href="https://www.typescriptlang.org/tsconfig/#declaration" target="_blank" rel="noopener noreferrer">declaration</a>：为项目中的每个 ts 或 js 文件生成 <code>.d.ts</code> 文件。</li></ul><p>如果使用 monorepo 来构建库时，应该设置：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;declarationMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><a href="https://www.typescriptlang.org/tsconfig/#composite" target="_blank" rel="noopener noreferrer">composite</a>：启用后，TypeScript 会记录每个文件的依赖关系，并在编译时根据这些依赖关系进行增量式构建（即，当你修改了一个子项目中的文件时，TypeScript 只会重新编译该子项目及其直接或间接以来的文件，而不是重新编译整个项目）。启用后会有如下影响：</p><ul><li><a href="https://www.typescriptlang.org/tsconfig/#rootDir" target="_blank" rel="noopener noreferrer">rootDir</a> 指定了 TypeScript 编译器应该从哪里开始查找源文件。如果没有显式设置，当启用 <code>composite</code> 后，会默认为包含 <code>tsconfig.json</code> 文件的目录。</li><li><code>tsconfig.json</code> 中可以通过 <a href="https://www.typescriptlang.org/tsconfig/#include" target="_blank" rel="noopener noreferrer"><code>include</code></a> 和 <a href="https://www.typescriptlang.org/tsconfig/#files" target="_blank" rel="noopener noreferrer"><code>files</code></a> 两种方式来制定要包含在编译过程的源文件。如果启用了 <code>composite</code>，所有要编译的文件必须在 <code>include</code> 或 <code>files</code> 中显式列出。如果存在一些未包含的实现文件，TypeScript 编译器会发出警告，指出那些文件没有被指定。</li><li><code>declaration</code> 必须是 <code>true</code>。</li></ul></li><li><p><a href="https://www.typescriptlang.org/tsconfig/#sourceMap" target="_blank" rel="noopener noreferrer">sourceMap</a> 和 <a href="https://www.typescriptlang.org/tsconfig/#declarationMap" target="_blank" rel="noopener noreferrer">declarationMap</a>：分别控制是否生成源映射文件（Source Map）和声明映射文件（Declaration Map）。启用这两个选项，库的使用者就可以在调试时使用 “go-to-definition” 跳转到源代码。</p></li></ul><h2 id="_6-在-dom-中运行" tabindex="-1"><a class="header-anchor" href="#_6-在-dom-中运行"><span>6. 在 DOM 中运行</span></a></h2><p>如果代码要在 DOM 中运行，需要以下配置：</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;es2022&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom.iterable&quot;</span><span class="token punctuation">]</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre></div><ul><li><a href="https://www.typescriptlang.org/tsconfig/#lib" target="_blank" rel="noopener noreferrer">lib</a>：告诉 TypeScript 编译器要包含哪些内置类型，这些内置类型通常是指 JavaScript 运行时环境提供的标准库和全局对象的类型定义。当代码运行在 DOM 环境（比如浏览器中运行的前端项目），你可能希望使用 <code>lib</code> 来指定一组内置类型，以确保 TypeScript 编译器能顾提供适当的类型检查和代码补全。 <ul><li><code>&quot;dom&quot;</code>：DOM 相关的内置类型，包括了浏览器环境中常见的全局对象（<code>window</code>, <code>document</code> 等）和 DOM 元素的类型定义。</li><li><code>&quot;dom.iterable&quot;</code>：可迭代的 DOM 集合（<code>NodeList</code>, <code>HTMLCollection</code> 等）。</li></ul></li></ul><p>如果不在 DOM 中运行，就不需要 <code>&quot;dom&quot;</code> 和 <code>&quot;dom.iterable&quot;</code>。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2><p>本文以 <a href="https://www.totaltypescript.com/tsconfig-cheat-sheet" target="_blank" rel="noopener noreferrer">The TSConfig Cheat Sheet</a> 为基准，并参考<a href="https://aka.ms/tsconfig" target="_blank" rel="noopener noreferrer">官网 tsconfig</a>、综合个人理解进行补充完善。</p>', 28))
  ]);
}
const _2Ts_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "2-ts.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/configuration/2-ts.html","title":"TypeScript 配置","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"TypeScript 配置","description":null,"article":false,"date":"2023-12-21T00:00:00.000Z","order":2},"headers":[{"level":2,"title":"1. 基本配置","slug":"_1-基本配置","link":"#_1-基本配置","children":[]},{"level":2,"title":"2. 严格性检查","slug":"_2-严格性检查","link":"#_2-严格性检查","children":[]},{"level":2,"title":"3. 使用 tsc 进行编译","slug":"_3-使用-tsc-进行编译","link":"#_3-使用-tsc-进行编译","children":[]},{"level":2,"title":"4. 不使用 tsc 编译","slug":"_4-不使用-tsc-编译","link":"#_4-不使用-tsc-编译","children":[]},{"level":2,"title":"5.库的配置","slug":"_5-库的配置","link":"#_5-库的配置","children":[]},{"level":2,"title":"6. 在 DOM 中运行","slug":"_6-在-dom-中运行","link":"#_6-在-dom-中运行","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":7.76,"words":2327},"filePathRelative":"front-end/configuration/2-ts.md","localizedDate":"2023年12月21日","excerpt":"<p>命令行执行 <code>tsc --init</code> 会自动创建 <code>tsconfig.json</code> 文件。它的配置项有很多（详见<a href=\\"https://aka.ms/tsconfig\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网 tsconfig</a>。），这篇文章将介绍那些我们需要熟知的一小部分。</p>\\n<h2>1. 基本配置</h2>\\n<p>下面的选项推荐在所有的项目都进行配置：</p>\\n<div class=\\"language-json line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"json\\" data-title=\\"json\\"><pre><code><span class=\\"line\\"><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  <span class=\\"token property\\">\\"compilerOptions\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token property\\">\\"esModuleInterop\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token property\\">\\"skipLibCheck\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token property\\">\\"target\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"es2022\\"</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token property\\">\\"allowJs\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token property\\">\\"resolveJsonModule\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token property\\">\\"moduleDetection\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"force\\"</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token property\\">\\"isolatedModules\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token property\\">\\"verbatimModuleSyntax\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span></span>\\n<span class=\\"line\\">  <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');
export {
  _2Ts_html as comp,
  data
};
