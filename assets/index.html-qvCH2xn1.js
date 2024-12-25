import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, o as openBlock, f as createBaseVNode, g as createTextVNode } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createStaticVNode('<p>正则是匹配模式，要么匹配字符，要么匹配位置。</p><h2 id="_1-字符匹配" tabindex="-1"><a class="header-anchor" href="#_1-字符匹配"><span>1. 字符匹配</span></a></h2><p>横向模糊匹配：<code>{m,n}</code> 纵向模糊匹配：<code>[abc]</code></p><ul><li><p>字符组：</p><ul><li><p>范围表示法</p><ul><li><code>[123456ancdefGHIJKLM]</code> 可以写成 <code>[1-6a-fG-M]</code></li><li>要表示 <code>a</code>、<code>-</code>、<code>z</code> 三个字符中的一个，可以写成 <code>[-az]</code> 或 <code>[az-]</code> 或 <code>[z\\-z]</code></li></ul></li><li><p>排除字符组</p><ul><li><code>[^abc]</code> 表示除了 <code>a</code>、<code>b</code>、<code>c</code> 之外的任意字符</li></ul></li><li><p>常见简写</p><table><thead><tr><th style="text-align:left;">字符组</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">\\d</td><td style="text-align:left;">表示 [0-9]。</td></tr><tr><td style="text-align:left;">\\D</td><td style="text-align:left;">表示 [^0-9]。表示除数字外的任意字符。</td></tr><tr><td style="text-align:left;">\\w</td><td style="text-align:left;">表示 [0-9a-zA-Z_]。表示数字、大小写字母和下划线。</td></tr><tr><td style="text-align:left;">\\W</td><td style="text-align:left;">表示 [^0-9a-zA-Z_]。非单词字符。</td></tr><tr><td style="text-align:left;">\\s</td><td style="text-align:left;">表示 [ \\t\\v\\n\\r\\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。</td></tr><tr><td style="text-align:left;">\\S</td><td style="text-align:left;">表示 [^ \\t\\v\\n\\r\\f]。 非空白符。</td></tr><tr><td style="text-align:left;">.</td><td style="text-align:left;">表示 [^\\n\\r\\u2028\\u2029]。通配符，几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。</td></tr></tbody></table><ul><li>匹配任意字符：<code>[\\d\\D]</code>、<code>[\\w\\W]</code>、<code>[\\s\\S]</code>、<code>^</code></li></ul></li></ul></li><li><p>量词（惰性）：</p><table><thead><tr><th style="text-align:left;">量词</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;"><code>{m,}</code></td><td style="text-align:left;">表示至少出现 m 次。</td></tr><tr><td style="text-align:left;"><code>{m}</code></td><td style="text-align:left;">等价于 <code>{m,m}</code>，表示出现 m 次。</td></tr><tr><td style="text-align:left;"><code>?</code></td><td style="text-align:left;">等价于 {0,1}，表示出现或者不出现。</td></tr><tr><td style="text-align:left;"><code>+</code></td><td style="text-align:left;">等价于 {1,}，表示出现至少一次。</td></tr><tr><td style="text-align:left;"><code>*</code></td><td style="text-align:left;">等价于 {0,}，表示出现任意次，有可能不出现。</td></tr></tbody></table><ul><li>惰性量词 &amp; 贪婪量词：上面的两次都进行贪婪匹配，在量词后加个 <code>?</code> 可实现惰性匹配</li></ul></li><li><p>多选分支（惰性）：<code>(p1|p2|p3)</code></p></li></ul><h2 id="_2-位置匹配" tabindex="-1"><a class="header-anchor" href="#_2-位置匹配"><span>2. 位置匹配</span></a></h2><p>6 个锚：</p><ul><li><p><code>^</code>：行开头。</p></li><li><p><code>$</code>：行结尾。</p></li><li><p><code>\\b</code>：单词边界，即 <code>\\w</code> 和 <code>\\W</code> 之间的位置，也包括 <code>\\w</code> 和 <code>^</code> 之间的位置，也包括 <code>\\w</code> 与 <code>$</code> 之间的位置。</p></li><li><p><code>\\B</code>：非单词边界。具体说来就是 <code>\\w</code> 与 <code>\\w</code>、 <code>\\W</code> 与 <code>\\W</code>、<code>^</code> 与 <code>\\W</code>，<code>\\W</code> 与 <code>$</code> 之间的位置。</p></li><li><p><code>(?=p)</code>：其中 <code>p</code> 是一个子模式，整体指 <code>p</code> 前面的位置，或者说该位置后面要匹配 <code>p</code>。</p></li><li><p><code>(?!p)</code>：与 <code>(?=p)</code> 相反。</p><blockquote><p><code>(?=p)</code> 和 <code>(?!p)</code> 分别叫 positive lookahead 和 negative lookahead，ES 5 之后还支持 positive lookbehind 和 negative lookbehind，分别为 <code>(?&lt;=p)</code> 和 <code>(?&lt;!p)</code></p></blockquote></li></ul>', 7)),
    createVNode(_component_CodeTabs, {
      id: "243",
      data: [{ "id": "<code v-pre>^</code>和<code v-pre>$</code>" }, { "id": "<code v-pre>\\b</code>" }, { "id": "<code v-pre>\\B</code>" }, { "id": "<code v-pre>(?=p)</code>" }, { "id": "<code v-pre>(?!p)</code>" }],
      "tab-id": "锚"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createBaseVNode(
          "code",
          null,
          "^",
          -1
          /* HOISTED */
        ),
        createTextVNode("和"),
        createBaseVNode(
          "code",
          null,
          "$",
          -1
          /* HOISTED */
        )
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createBaseVNode(
          "code",
          null,
          "\\b",
          -1
          /* HOISTED */
        )
      ])),
      title2: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "code",
          null,
          "\\B",
          -1
          /* HOISTED */
        )
      ])),
      title3: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
        createBaseVNode(
          "code",
          null,
          "(?=p)",
          -1
          /* HOISTED */
        )
      ])),
      title4: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
        createBaseVNode(
          "code",
          null,
          "(?!p)",
          -1
          /* HOISTED */
        )
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
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
                  createTextVNode("result "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"hello"'),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "replace"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token regex" }, [
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-source language-regex" }, "^|$"),
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-flags" }, "g")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"#"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("result"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, '// => "#hello#"')
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
      tab1: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" result "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"[JS] Lesson_01.mp4"'),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "replace"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token regex" }, [
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-source language-regex" }, "\\b"),
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-flags" }, "g")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"#"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("result"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, '// => "[#JS#] #Lesson_01#.#mp4#"')
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
      tab2: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" result "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"[JS] Lesson_01.mp4"'),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "replace"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token regex" }, [
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-source language-regex" }, "\\B"),
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-flags" }, "g")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"#"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("result"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, '// => "#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4"')
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
      tab3: withCtx(({ value, isActive }) => _cache[8] || (_cache[8] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" result "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"hello"'),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "replace"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token regex" }, [
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-source language-regex" }, "(?=l)"),
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-flags" }, "g")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"#"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("result"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, '// => "he#l#lo')
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
      tab4: withCtx(({ value, isActive }) => _cache[9] || (_cache[9] = [
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
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" result "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"hello"'),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "replace"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token regex" }, [
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-source language-regex" }, "(?!l)"),
                    createBaseVNode("span", { class: "token regex-delimiter" }, "/"),
                    createBaseVNode("span", { class: "token regex-flags" }, "g")
                  ]),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"#"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("result"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, '// => "#h#ell#o#"')
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
    })
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/coding/re/","title":"基础","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"基础","description":null,"article":false,"date":"2023-11-07T00:00:00.000Z","order":1},"headers":[{"level":2,"title":"1. 字符匹配","slug":"_1-字符匹配","link":"#_1-字符匹配","children":[]},{"level":2,"title":"2. 位置匹配","slug":"_2-位置匹配","link":"#_2-位置匹配","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":2.04,"words":613},"filePathRelative":"coding/re/index.md","localizedDate":"2023年11月7日","excerpt":"<p>正则是匹配模式，要么匹配字符，要么匹配位置。</p>\\n<h2>1. 字符匹配</h2>\\n<p>横向模糊匹配：<code>{m,n}</code>\\n纵向模糊匹配：<code>[abc]</code></p>\\n<ul>\\n<li>\\n<p>字符组：</p>\\n<ul>\\n<li>\\n<p>范围表示法</p>\\n<ul>\\n<li><code>[123456ancdefGHIJKLM]</code> 可以写成 <code>[1-6a-fG-M]</code></li>\\n<li>要表示 <code>a</code>、<code>-</code>、<code>z</code> 三个字符中的一个，可以写成 <code>[-az]</code> 或 <code>[az-]</code> 或 <code>[z\\\\-z]</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>排除字符组</p>\\n<ul>\\n<li><code>[^abc]</code> 表示除了 <code>a</code>、<code>b</code>、<code>c</code> 之外的任意字符</li>\\n</ul>\\n</li>\\n<li>\\n<p>常见简写</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">字符组</th>\\n<th style=\\"text-align:left\\">含义</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">\\\\d</td>\\n<td style=\\"text-align:left\\">表示 [0-9]。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">\\\\D</td>\\n<td style=\\"text-align:left\\">表示 [^0-9]。表示除数字外的任意字符。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">\\\\w</td>\\n<td style=\\"text-align:left\\">表示 [0-9a-zA-Z_]。表示数字、大小写字母和下划线。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">\\\\W</td>\\n<td style=\\"text-align:left\\">表示 [^0-9a-zA-Z_]。非单词字符。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">\\\\s</td>\\n<td style=\\"text-align:left\\">表示 [ \\\\t\\\\v\\\\n\\\\r\\\\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">\\\\S</td>\\n<td style=\\"text-align:left\\">表示 [^ \\\\t\\\\v\\\\n\\\\r\\\\f]。 非空白符。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">.</td>\\n<td style=\\"text-align:left\\">表示 [^\\\\n\\\\r\\\\u2028\\\\u2029]。通配符，几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。</td>\\n</tr>\\n</tbody>\\n</table>\\n<ul>\\n<li>匹配任意字符：<code>[\\\\d\\\\D]</code>、<code>[\\\\w\\\\W]</code>、<code>[\\\\s\\\\S]</code>、<code>^</code></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>量词（惰性）：</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">量词</th>\\n<th style=\\"text-align:left\\">含义</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\"><code>{m,}</code></td>\\n<td style=\\"text-align:left\\">表示至少出现 m 次。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>{m}</code></td>\\n<td style=\\"text-align:left\\">等价于 <code>{m,m}</code>，表示出现 m 次。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>?</code></td>\\n<td style=\\"text-align:left\\">等价于 {0,1}，表示出现或者不出现。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>+</code></td>\\n<td style=\\"text-align:left\\">等价于 {1,}，表示出现至少一次。</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>*</code></td>\\n<td style=\\"text-align:left\\">等价于 {0,}，表示出现任意次，有可能不出现。</td>\\n</tr>\\n</tbody>\\n</table>\\n<ul>\\n<li>惰性量词 &amp; 贪婪量词：上面的两次都进行贪婪匹配，在量词后加个 <code>?</code> 可实现惰性匹配</li>\\n</ul>\\n</li>\\n<li>\\n<p>多选分支（惰性）：<code>(p1|p2|p3)</code></p>\\n</li>\\n</ul>"}');
export {
  index_html as comp,
  data
};
