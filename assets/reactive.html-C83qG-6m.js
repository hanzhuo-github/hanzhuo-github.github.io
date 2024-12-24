import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, o as openBlock, g as createTextVNode, f as createBaseVNode } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[22] || (_cache[22] = createStaticVNode('<p>本篇文章中 Proxy 和 Reflect 的内部方法、Handler 方法、触发时机，可以参考 <a href="https://zh.javascript.info/proxy" target="_blank" rel="noopener noreferrer">Proxy 和 Reflect</a>。</p><h2 id="_1-代理-object" tabindex="-1"><a class="header-anchor" href="#_1-代理-object"><span>1 代理 Object</span></a></h2><p>在上一篇文章中，我们对“读取”操作做了拦截。对于一个普通的对象，都有哪些操作是“读取”呢？</p><ol><li>访问属性：<code>p.foo</code></li><li>判断 key 是否在对象（或原型）上：<code>key in p</code></li><li>for...in 循环遍历对象：<code>for (const key in p) {}</code></li><li>删除属性：<code>delete p.foo</code>（把 for...in 看完，再看代码 4）</li></ol>', 4)),
    createVNode(_component_CodeTabs, {
      id: "31",
      data: [{ "id": "1. 访问属性 get" }, { "id": "2. key in obj" }, { "id": "3. for...in" }, { "id": "4. 删除属性 deleteProperty" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("1. 访问属性 get")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("2. key in obj")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createTextVNode("3. for...in")
      ])),
      title3: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
        createTextVNode("4. 删除属性 deleteProperty")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" obj "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "foo"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" p "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Proxy"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "track"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" Reflect"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
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
      tab1: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" obj "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "foo"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" p "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Proxy"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "has"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("target"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" key")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "track"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" Reflect"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "has"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
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
      tab2: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" obj "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token literal-property property" }, "foo"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "1"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token constant" }, "ITERATE_KEY"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "Symbol"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" p "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Proxy"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "ownKeys"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "target"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "track"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token constant" }, "ITERATE_KEY"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode("   "),
                  createBaseVNode("span", { class: "token comment" }, "// 将副作用函数与 ITERATE_KEY 关联")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" Reflect"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "ownKeys"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab3: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" p "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Proxy"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "deleteProperty"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("target"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" key")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" hadKey "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Object"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("prototype"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "hasOwnProperty"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "call"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" Reflect"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "deleteProperty"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// 被删除的属性是对象自己的属性 且 删除成功，才触发更新")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("res "),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" hadKey"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "trigger"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, "'DELETE'"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" res")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
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
    _cache[23] || (_cache[23] = createStaticVNode('<h3 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in"><span>for...in</span></a></h3><p>对于 for...in 的情况，如果我们给响应式数据再添加一个新的属性，副作用函数理应重新执行（因为循环当中多了一个属性），所以需要触发 track(target, ITERATE_KEY) 重新执行。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><p>当前的 set 拦截如 1 所示，当添加新属性（假设这个新属性叫 bar）时，会触发 set 拦截。trigger 时触发的事与 bar 相关的副作用函数的重新执行。在之前，我们使用 for...in 循环，建立了副作用函数与 ITERATE_KEY 之间的联系，但这个 bar 完全没有关系。所以这个 trigger 并不会触发正确触发副作用函数。</p><p>解决方法也很简单，当添加新属性时，讲那些与 ITERATE_KEY 相关的副作用函数也取出来执行。见 2。</p><p>但是，如果仅仅是对已有属性的值进行修改，比如 <code>p.foo = 2</code>，不应该触发副作用函数的执行。添加新属性和修改已有属性都是 set，所以，要在 set 拦截中分辨是添加新属性、还是设置原有属性。见 3。</p><p>和添加新属性一样，在删除一个已有属性之后，副作用函数也应该重新执行，即操作类型为 &quot;ADD&quot; 或者 &quot;DELETE&quot; 时都应该触发与 ITERATE_KEY 相关联的副作用函数。见 3。</p>', 7)),
    createVNode(_component_CodeTabs, {
      id: "64",
      data: [{ "id": "1. 原 set（不变）" }, { "id": "2. 添加新属性时触发 ITERATE_KEY 相关联的副作用函数" }, { "id": "3. 修改 set" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[8] || (_cache[8] = [
        createTextVNode("1. 原 set（不变）")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[9] || (_cache[9] = [
        createTextVNode("2. 添加新属性时触发 ITERATE_KEY 相关联的副作用函数")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[10] || (_cache[10] = [
        createTextVNode("3. 修改 set")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[11] || (_cache[11] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" p "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Proxy"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "set"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" value"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" Reflect"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "set"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" value"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "trigger"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" res"),
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
      tab1: withCtx(({ value, isActive }) => _cache[12] || (_cache[12] = [
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
                  createBaseVNode("span", { class: "token function" }, "trigger"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("target"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" key")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" depsMap "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" bucket"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "!"),
                  createTextVNode("depsMap"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" effects "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" depsMap"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" effectsToRun "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Set"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  effects "),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" effects"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "forEach"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "effectFn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(" activeEffect"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      effectsToRun"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "add"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// 将与 ITERATE_KEY 关联的副作用函数也添加到 effectsToRun")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" iterateEffects "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" depsMap"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token constant" }, "ITERATE_KEY"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  iterateEffects "),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" iterateEffects"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "forEach"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "effectFn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(" activeEffect"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      effectsToRun"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "add"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  effectsToRun"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "forEach"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "effectFn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("options"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("scheduler"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("options"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "scheduler"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
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
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
      tab2: withCtx(({ value, isActive }) => _cache[13] || (_cache[13] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" p "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Proxy"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "set"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVal"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" type "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Object"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("prototype"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "hasOwnProperty"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "call"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token operator" }, "?"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"SET"')
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"ADD"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" Reflect"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "set"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVal"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "trigger"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" type"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode("   "),
                  createBaseVNode("span", { class: "token comment" }, "// 将 type 传递给 trigger")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" res"),
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
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "trigger"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("target"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" key"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" type")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" depsMap "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" bucket"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "!"),
                  createTextVNode("depsMap"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" effects "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" depsMap"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" effectsToRun "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Set"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  effects "),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" effects"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "forEach"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "effectFn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(" activeEffect"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      effectsToRun"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "add"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
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
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// type 为 ADD 或 DELETE，才将与 ITERATE_KEY 关联的副作用函数也添加到 effectsToRun")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("type "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, "'ADD'"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "||"),
                  createTextVNode(" type "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, "'DELETE'"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" iterateEffects "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" depsMap"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token constant" }, "ITERATE_KEY"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    iterateEffects "),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" iterateEffects"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "forEach"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "effectFn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(" activeEffect"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        effectsToRun"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "add"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  effectsToRun"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "forEach"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "effectFn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("options"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("scheduler"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("options"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "scheduler"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "else"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "effectFn"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
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
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
    _cache[24] || (_cache[24] = createStaticVNode('<h2 id="_2-合理地触发响应" tabindex="-1"><a class="header-anchor" href="#_2-合理地触发响应"><span>2 合理地触发响应</span></a></h2><p>设置值时，如果值没变化时，不应该触发响应</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">    <span class="token keyword">const</span> oldVal <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">getOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span></span>\n<span class="line">      <span class="token operator">?</span> <span class="token string">&quot;SET&quot;</span></span>\n<span class="line">      <span class="token operator">:</span> <span class="token string">&quot;ADD&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line highlighted">    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>oldVal <span class="token operator">===</span> oldVal <span class="token operator">||</span> newVal <span class="token operator">==</span> newVal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">    <span class="token punctuation">}</span></span>\n<span class="line highlighted"></span>\n<span class="line">    <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第 10 行代码中的 <code>(oldVal === oldVal || newVal == newVal)</code> 是对 NaN 的处理</p></blockquote><h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive"><span>reactive</span></a></h3><p>我们封装一个 reactive 函数，它接收一个对象，返回为其创建的响应式数据。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 各种拦截函数</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// parent 做 child 的原型</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 修改 child.bar</span></span>\n<span class="line">child<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行代码观察到，修改 child.bar 之后，副作用函数重新执行了 2 次，即造成了不必要的更新。</p><p>为什么会触发两次呢？当副作用函数执行时，读取 child.bar，会触发 child 代理对象的 get 拦截。拦截内部使用 <code>Reflect.get(obj, &#39;bar&#39;, receiver)</code>，即引擎内部通过调用 obj 对象的 <code>[[GET]]</code> 内部方法获得结果。而 obj 对象自身没有 bar 属性，于是它就到其原型（即 parent）中找，最终得到的就是 parent.bar。在访问 parent.bar 时，也会导致副作用函数被收集。所以，child.bar 和 parent.bar 都与副作用函数建立了响应联系。</p><p>当设置 child.bar 时，会调用 child 代理对象的 set 拦截，<code>Reflect.set(target, key, newVal, receiver)</code>，即引擎内部调用 obj 对象的 <code>[[SET]]</code> 内部方法。而设置的属性不在这个对象上，于是就调用其原型（即 parent）的 <code>[[SET]]</code> 内部方法。parent 是代理对象，这就相当于执行了其 set 拦截函数。也就是说，设置的是 child.bar，会导致 child 和 parent 的 set 拦截，而二者都与副作用函数建立了联系，于是最终副作用函数重新执行了两次。</p><p>解决方案就是屏蔽其中的一次执行，把 parent.bar 触发的副作用函数的重新执行屏蔽掉。是由 set 拦截函数被触发两次导致的，那么只有能在 set 拦截函数内分辨这两次更新就行。</p><p>我们看一下 child 和 parent 的 set 拦截函数的具体信息。设置 child.bar 时，会执行 child 代理对象的 set 拦截函数，此时的 target 是原始对象 obj，receiver 是代理对象 child（即 target 的代理对象）。但由于 obj 上不存在 bar 属性，所以会用 obj 的原型 parent，并执行 parent 代理对象的 set 拦截函数。此时 target 是原始对象 proto，但 receiver 仍然是代理对象 child，不再是 target 的代理对象。</p>', 13)),
    createVNode(_component_CodeTabs, {
      id: "110",
      data: [{ "id": "child 的 set 拦截函数" }, { "id": "parent 的 set 拦截函数" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[14] || (_cache[14] = [
        createTextVNode("child 的 set 拦截函数")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[15] || (_cache[15] = [
        createTextVNode("parent 的 set 拦截函数")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[16] || (_cache[16] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "set"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVal"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// target 是原始对象 obj")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// receiver 是代理对象 child")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[17] || (_cache[17] = [
        createBaseVNode(
          "div",
          {
            class: "language-javascript",
            "data-highlighter": "prismjs",
            "data-ext": "js",
            "data-title": "js"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "set"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" newVal"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// target 是原始对象 proto")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token comment" }, "// receiver 仍然是代理对象 child")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[25] || (_cache[25] = createStaticVNode('<p>receiver 始终是 child，而 target 是变化的。我们只需判断 receiver 是否是 target 的代理对象即可。只有当 receiver 是 target 的代理对象时才触发更新。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token comment">// 代理对象可以通过 raw 访问原始数据</span></span>\n<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;raw&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        <span class="token keyword">return</span> target<span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">const</span> oldVal <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span></span>\n<span class="line">      <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&#39;SET&#39;</span> <span class="token operator">:</span> &#39;<span class="token constant">ADD</span></span>\n<span class="line">      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span>receiver<span class="token punctuation">.</span>raw <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>oldVal <span class="token operator">===</span> oldVal <span class="token operator">||</span> newVal <span class="token operator">===</span> newVal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> type<span class="token punctuation">)</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token keyword">return</span> res</span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token comment">// 省略其他拦截函数</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此，我们通过新增一个判断，只有当 receiver 是 target 的代理对象时，才可以触发更新，这样就屏蔽了由原型引起的不必要的更新。</p><h2 id="_3-浅响应与深响应" tabindex="-1"><a class="header-anchor" href="#_3-浅响应与深响应"><span>3 浅响应与深响应</span></a></h2><p>Vue 中有 reactive 和 shallowReactive。我们之前实现的 reactive 实际上是浅响应的。为了实现深层次的响应，修改代码如 1。</p><p>我们封装一个 createReactive 函数，接收一个参数 isShallow，表示是否为浅响应，默认为 false。见 2。</p>', 6)),
    createVNode(_component_CodeTabs, {
      id: "134",
      data: [{ "id": "1. reactive" }, { "id": "2. 封装 reactive 和 shallowReactive" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[18] || (_cache[18] = [
        createTextVNode("1. reactive")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[19] || (_cache[19] = [
        createTextVNode("2. 封装 reactive 和 shallowReactive")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[20] || (_cache[20] = [
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
                  createBaseVNode("span", { class: "token function" }, "reactive"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Proxy"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"raw"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" target"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "track"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" Reflect"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 得到对象原始值结果（而非代理对象），调用 reactive 将结果也包装成响应式数据并返回")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"object"'),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "null"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "reactive"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("res"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" res"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[21] || (_cache[21] = [
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
                  createBaseVNode("span", { class: "token function" }, "createReactive"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, [
                    createTextVNode("obj"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" isShallow "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token boolean" }, "false")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Proxy"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("key "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"raw"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" target"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" Reflect"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" receiver"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token function" }, "track"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("target"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" key"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("isShallow"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" res"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line highlighted" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token comment" }, "// 得到对象原始值结果（而非代理对象），调用 reactive 将结果也包装成响应式数据并返回")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token keyword" }, "typeof"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "==="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"object"'),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "&&"),
                  createTextVNode(" res "),
                  createBaseVNode("span", { class: "token operator" }, "!=="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "null"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "reactive"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("res"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("      "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(" res"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token comment" }, "// 省略其他拦截函数")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
    _cache[26] || (_cache[26] = createStaticVNode('<p>对应的 reactive 和 shallowReactive 就很简单了</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token function">createReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token function">createReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-只读和浅只读" tabindex="-1"><a class="header-anchor" href="#_4-只读和浅只读"><span>4 只读和浅只读</span></a></h2><h3 id="_4-1-浅只读" tabindex="-1"><a class="header-anchor" href="#_4-1-浅只读"><span>4.1 浅只读</span></a></h3><p>Vue 中提供 readonly 函数，将数据变成只读。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 尝试修改数据，会得到警告</span></span>\n<span class="line"></span></code></pre></div><p>只读本质上也是对数据对象的代理，也可以使用 createReactive 来实现。</p><p>修改数据时，会触发 set 或 deleteProperty，对应的代码增加守卫条件。</p><p>只读的数据不会做任何修改，就没有必要为只读数据建立响应联系，修改 get 拦截如下。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> isShallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> isReadonly <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;raw&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">return</span> target<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>isShallow<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token comment">// 得到对象原始值结果（而非代理对象），调用 reactive 将结果也包装成响应式数据并返回</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> res <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">return</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">属性 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 是只读的</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token keyword">const</span> oldVal <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span></span>\n<span class="line">      <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&#39;SET&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;ADD&#39;</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>receiver<span class="token punctuation">.</span>raw <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>oldVal <span class="token operator">===</span> oldVal <span class="token operator">||</span> newVal <span class="token operator">===</span> newVal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">属性 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 是只读的</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>\n<span class="line highlighted">      <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token keyword">const</span> hadKey <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span></span>\n<span class="line">      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token comment">// 被删除的属性是对象自己的属性 且 删除成功，才触发更新</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">&amp;&amp;</span> hadKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">)</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token keyword">return</span> res</span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token comment">// 省略其他拦截函数</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-深只读" tabindex="-1"><a class="header-anchor" href="#_4-2-深只读"><span>4.2 深只读</span></a></h3><p>上面实现了浅只读，即</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">obj<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 还是可以修改的</span></span>\n<span class="line"></span></code></pre></div><p>实现深只读，只需在 get 拦截函数内递归调用 readonly 即可</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> isShallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> isReadonly <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;raw&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">return</span> target<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>isShallow<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token comment">// 得到对象原始值结果（而非代理对象），调用 reactive 将结果也包装成响应式数据并返回</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> res <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line highlighted">        <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token function">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">      <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token comment">// 省略其他拦截函数</span></span>\n<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此，定义 readonly 和 shallowReadonly 就很简单了。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token function">createReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token function">createReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 17))
  ]);
}
const reactive_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "reactive.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/vue/reactive.html","title":"响应系统（2）reactive","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"响应系统（2）reactive","description":"非原始值的响应式方案","article":false,"date":"2024-10-03T00:00:00.000Z","order":3},"headers":[{"level":2,"title":"1 代理 Object","slug":"_1-代理-object","link":"#_1-代理-object","children":[{"level":3,"title":"for...in","slug":"for-in","link":"#for-in","children":[]}]},{"level":2,"title":"2 合理地触发响应","slug":"_2-合理地触发响应","link":"#_2-合理地触发响应","children":[{"level":3,"title":"reactive","slug":"reactive","link":"#reactive","children":[]}]},{"level":2,"title":"3 浅响应与深响应","slug":"_3-浅响应与深响应","link":"#_3-浅响应与深响应","children":[]},{"level":2,"title":"4 只读和浅只读","slug":"_4-只读和浅只读","link":"#_4-只读和浅只读","children":[{"level":3,"title":"4.1 浅只读","slug":"_4-1-浅只读","link":"#_4-1-浅只读","children":[]},{"level":3,"title":"4.2 深只读","slug":"_4-2-深只读","link":"#_4-2-深只读","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":8.64,"words":2592},"filePathRelative":"front-end/vue/reactive.md","localizedDate":"2024年10月3日","excerpt":"<p>本篇文章中 Proxy 和 Reflect 的内部方法、Handler 方法、触发时机，可以参考 <a href=\\"https://zh.javascript.info/proxy\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Proxy 和 Reflect</a>。</p>\\n<h2>1 代理 Object</h2>\\n<p>在上一篇文章中，我们对“读取”操作做了拦截。对于一个普通的对象，都有哪些操作是“读取”呢？</p>\\n<ol>\\n<li>访问属性：<code>p.foo</code></li>\\n<li>判断 key 是否在对象（或原型）上：<code>key in p</code></li>\\n<li>for...in 循环遍历对象：<code>for (const key in p) {}</code></li>\\n<li>删除属性：<code>delete p.foo</code>（把 for...in 看完，再看代码 4）</li>\\n</ol>"}');
export {
  reactive_html as comp,
  data
};
