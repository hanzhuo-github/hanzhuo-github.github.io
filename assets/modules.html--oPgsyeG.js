import { r as resolveComponent, c as createElementBlock, f as createBaseVNode, a as createCommentVNode, d as createVNode, e as withCtx, g as createTextVNode, b as createStaticVNode, o as openBlock } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[26] || (_cache[26] = createBaseVNode(
      "p",
      null,
      "export 和 import 的用法",
      -1
      /* HOISTED */
    )),
    createCommentVNode(" more "),
    _cache[27] || (_cache[27] = createBaseVNode(
      "h2",
      {
        id: "基本使用",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#基本使用"
        }, [
          createBaseVNode("span", null, "基本使用")
        ])
      ],
      -1
      /* HOISTED */
    )),
    _cache[28] || (_cache[28] = createBaseVNode(
      "h3",
      {
        id: "_1-export",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_1-export"
        }, [
          createBaseVNode("span", null, "1. export")
        ])
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "10",
      data: [{ "id": "export" }, { "id": "export separately" }],
      "tab-id": "export"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("export")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("export separately")
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
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" weekdays "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "[")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token string" }, '"Monday"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token string" }, '"Tuesday"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token string" }, '"Wednesday"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token string" }, '"Thursday"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token string" }, '"Friday"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token string" }, '"Saturday"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token string" }, '"Sunday"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "const"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token constant" }, "YEAR"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "2023"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "class"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "constructor"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "name"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("name "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" name"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
                  createBaseVNode("span", { class: "token comment" }, "// say.js")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "sayHi"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "user"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token template-string" }, [
                    createBaseVNode("span", { class: "token template-punctuation string" }, "`"),
                    createBaseVNode("span", { class: "token string" }, "Hello, "),
                    createBaseVNode("span", { class: "token interpolation" }, [
                      createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "${"),
                      createTextVNode("user"),
                      createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "}")
                    ]),
                    createBaseVNode("span", { class: "token string" }, "!"),
                    createBaseVNode("span", { class: "token template-punctuation string" }, "`")
                  ]),
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
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "sayBye"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "user"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token template-string" }, [
                    createBaseVNode("span", { class: "token template-punctuation string" }, "`"),
                    createBaseVNode("span", { class: "token string" }, "Bye, "),
                    createBaseVNode("span", { class: "token interpolation" }, [
                      createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "${"),
                      createTextVNode("user"),
                      createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "}")
                    ]),
                    createBaseVNode("span", { class: "token string" }, "!"),
                    createBaseVNode("span", { class: "token template-punctuation string" }, "`")
                  ]),
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
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(" sayHi"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" sayBye "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
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
    _cache[29] || (_cache[29] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("直接在变量、函数、class 前面加 "),
        createBaseVNode("code", null, "export"),
        createTextVNode(" 即可。注：export function 和 class 时，不需要在最后加分号。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[30] || (_cache[30] = createBaseVNode(
      "h3",
      {
        id: "_2-import",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_2-import"
        }, [
          createBaseVNode("span", null, "2. import")
        ])
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "24",
      data: [{ "id": "export" }, { "id": "import as" }, { "id": "import *" }],
      "tab-id": "import"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
        createTextVNode("export")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
        createTextVNode("import as")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
        createTextVNode("import *")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(" sayHi"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" sayBye "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"./say.js"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "sayHi"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "sayBye"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
      tab1: withCtx(({ value, isActive }) => _cache[8] || (_cache[8] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(" sayHi "),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" hi"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" sayBye "),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" bye "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"./say.js"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "hi"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token function" }, "bye"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
      tab2: withCtx(({ value, isActive }) => _cache[9] || (_cache[9] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "*"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" asy "),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"./say.js"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("say"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "sayHi"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("say"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "sayBye"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
    _cache[31] || (_cache[31] = createBaseVNode(
      "div",
      { class: "hint-container tip" },
      [
        createBaseVNode("p", { class: "hint-container-title" }, "不用担心引入得太多"),
        createBaseVNode("p", null, "使用现代构建工具（如 webpack 等）时，它们会将 modules 打包到一起并进行优化以加速 loading。它们也会将没有用到过的引用移除掉。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[32] || (_cache[32] = createBaseVNode(
      "h3",
      {
        id: "_3-export-使用-as",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_3-export-使用-as"
        }, [
          createBaseVNode("span", null, [
            createTextVNode("3. export 使用 "),
            createBaseVNode("code", null, "as")
          ])
        ])
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "43",
      data: [{ "id": "export" }, { "id": "import" }],
      "tab-id": "export as"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[10] || (_cache[10] = [
        createTextVNode("export")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[11] || (_cache[11] = [
        createTextVNode("import")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[12] || (_cache[12] = [
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
                  createBaseVNode("span", { class: "token comment" }, "// say.js")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token operator" }, "...")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(" sayHi "),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" hi"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" sayBye "),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" bye "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
      tab1: withCtx(({ value, isActive }) => _cache[13] || (_cache[13] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "*"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" say "),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"./say.js"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("say"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "hi"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("bye"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "hi"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
    _cache[33] || (_cache[33] = createBaseVNode(
      "h3",
      {
        id: "_4-export-default",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_4-export-default"
        }, [
          createBaseVNode("span", null, "4. export default")
        ])
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "54",
      data: [{ "id": "default" }, { "id": "default name" }],
      "tab-id": "export default"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[14] || (_cache[14] = [
        createTextVNode("default")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[15] || (_cache[15] = [
        createTextVNode("default name")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[16] || (_cache[16] = [
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
                  createBaseVNode("span", { class: "token comment" }, "// user.js")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "default"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "class"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "constructor"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "name"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "this"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("name "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" name"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token punctuation" }, "}")
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
              createBaseVNode("div", { class: "line-number" })
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
                  createBaseVNode("span", { class: "token keyword" }, "function"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "sayHi"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token parameter" }, "name"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function" }, "alert"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token template-string" }, [
                    createBaseVNode("span", { class: "token template-punctuation string" }, "`"),
                    createBaseVNode("span", { class: "token string" }, "Hello, "),
                    createBaseVNode("span", { class: "token interpolation" }, [
                      createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "${"),
                      createTextVNode("user"),
                      createBaseVNode("span", { class: "token interpolation-punctuation punctuation" }, "}")
                    ]),
                    createBaseVNode("span", { class: "token string" }, "!"),
                    createBaseVNode("span", { class: "token template-punctuation string" }, "`")
                  ]),
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
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(" sayHi "),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "default"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
    _cache[34] || (_cache[34] = createStaticVNode('<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&quot;./user.js&quot;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div><h3 id="_5-export-既有-default-又有命名实体" tabindex="-1"><a class="header-anchor" href="#_5-export-既有-default-又有命名实体"><span>5. export 既有 default 又有命名实体</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 📁 user.js</span></span>\n<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>user<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3)),
    createVNode(_component_CodeTabs, {
      id: "67",
      data: [{ "id": "import default" }, { "id": "import *" }],
      "tab-id": "import"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[18] || (_cache[18] = [
        createTextVNode("import default")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[19] || (_cache[19] = [
        createTextVNode("import *")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[20] || (_cache[20] = [
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
                  createBaseVNode("span", { class: "token comment" }, "// 📁 main.js")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "default"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" User"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" sayHi "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"./user.js"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
      tab1: withCtx(({ value, isActive }) => _cache[21] || (_cache[21] = [
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
                  createBaseVNode("span", { class: "token comment" }, "// 📁 main.js")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "*"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" user "),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"./user.js"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" User "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" user"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("default"),
                  createBaseVNode("span", { class: "token punctuation" }, ";"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token comment" }, "// the default export")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "new"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "User"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"John"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
    _cache[35] || (_cache[35] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("使用 default 导出时，import 时不需要加 "),
        createBaseVNode("code", null, "{}"),
        createTextVNode("，且 import 时可以是任何名称（最好和文件同名）。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[36] || (_cache[36] = createBaseVNode(
      "table",
      null,
      [
        createBaseVNode("thead", null, [
          createBaseVNode("tr", null, [
            createBaseVNode("th", { style: { "text-align": "left" } }, "Named export"),
            createBaseVNode("th", { style: { "text-align": "left" } }, "Default Export")
          ])
        ]),
        createBaseVNode("tbody", null, [
          createBaseVNode("tr", { "css-module": "." }, [
            createBaseVNode("td", {
              style: { "text-align": "left" },
              "css-module": "."
            }, "export class User"),
            createBaseVNode("td", { style: { "text-align": "left" } }, "export default class User")
          ]),
          createBaseVNode("tr", null, [
            createBaseVNode("td", { style: { "text-align": "left" } }, "import {User} from ..."),
            createBaseVNode("td", { style: { "text-align": "left" } }, "import User from ...")
          ])
        ])
      ],
      -1
      /* HOISTED */
    )),
    _cache[37] || (_cache[37] = createStaticVNode('<p>使用 export default 时，可以不指定被导出实体的名称：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">// 没有 function name</span></span>\n<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>user<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="_2-re-export" tabindex="-1"><a class="header-anchor" href="#_2-re-export"><span>2. Re-export</span></a></h2><p>语法：<code>export ... from ...</code></p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> sayHi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./say.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// re-export sayHi</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> User <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// re-export default</span></span>\n<span class="line"></span></code></pre></div><p>当我们写 package 的时候，一个文件下面有很多 modules，我们会将所有的功能在统一的位置进行 export。这样其他人在使用该包的时候，可以从统一的位置进行 import。</p><p>现在我们有 auth 这个包，index.js 作为唯一的出口。auth 文件夹下其他的 modules 都从 index.js 的位置进行 export。</p>', 7)),
    createVNode(_component_CodeTabs, {
      id: "125",
      data: [{ "id": "import & export" }, { "id": "export from" }],
      "tab-id": "re-export"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[22] || (_cache[22] = [
        createTextVNode("import & export")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[23] || (_cache[23] = [
        createTextVNode("export from")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[24] || (_cache[24] = [
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
                  createBaseVNode("span", { class: "token comment" }, "// 📁 auth/index.js")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// import login/logout and immediately export them")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode("login"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" logout"),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, "'./helpers.js'"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode("login"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" logout"),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// import default as User and export it")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(" User "),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, "'./user.js'"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode("User"),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token operator" }, "...")
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
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[25] || (_cache[25] = [
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
                  createBaseVNode("span", { class: "token comment" }, "// re-export login/logout")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(" login"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" logout "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"./helpers.js"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// re-export the default export as User")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "export"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "default"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "as"),
                  createTextVNode(" User "),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"./user.js"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
    _cache[38] || (_cache[38] = createStaticVNode('<p>对于 default export，在进行 re-export 时需要进行单独处理。</p><p>对于 user.js 中的 default export:</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token comment">//..</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre></div><ul><li><p>使用 <code>export User from &#39;./user.js&#39;</code> 是不行的。我们应该使用 <code>export { default as User } from &#39;./user.js&#39;</code>.</p></li><li><p>使用 <code>export * from &#39;./user.js&#39;</code> 进行的 re-export 只会导出 named export，会忽略 default export。</p></li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 导出了 named export</span></span>\n<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 导出了 default export</span></span>\n<span class="line"></span></code></pre></div>', 5))
  ]);
}
const modules_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "modules.html.vue"]]);
const data = JSON.parse('{"path":"/front-end/js/grammar/modules.html","title":"Export & Import","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Export & Import","description":null,"date":"2023-08-07T00:00:00.000Z"},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"1. export","slug":"_1-export","link":"#_1-export","children":[]},{"level":3,"title":"2. import","slug":"_2-import","link":"#_2-import","children":[]},{"level":3,"title":"3. export 使用 as","slug":"_3-export-使用-as","link":"#_3-export-使用-as","children":[]},{"level":3,"title":"4. export default","slug":"_4-export-default","link":"#_4-export-default","children":[]},{"level":3,"title":"5. export 既有 default 又有命名实体","slug":"_5-export-既有-default-又有命名实体","link":"#_5-export-既有-default-又有命名实体","children":[]}]},{"level":2,"title":"2. Re-export","slug":"_2-re-export","link":"#_2-re-export","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":2.38,"words":714},"filePathRelative":"front-end/js/grammar/modules.md","localizedDate":"2023年8月7日","excerpt":"<p>export 和 import 的用法</p>\\n"}');
export {
  modules_html as comp,
  data
};
