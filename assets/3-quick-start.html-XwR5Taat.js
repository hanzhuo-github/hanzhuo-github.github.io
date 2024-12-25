import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, f as createBaseVNode, g as createTextVNode, o as openBlock } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/images/rust/variablefnds.webp";
const _imports_1 = "/images/rust/processcontrol.webp";
const _imports_2 = "/images/rust/mod.webp";
const _imports_3 = "/images/rust/workspace.webp";
const _imports_4 = "/images/rust/quickstart.webp";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="_1-quickstart" tabindex="-1"><a class="header-anchor" href="#_1-quickstart"><span>1 QuickStart</span></a></h2><ul><li><p>使用 <a href="https://rustup.rs/" target="_blank" rel="noopener noreferrer">restup.rs</a> 中提供的方法进行下载安装。</p></li><li><p>使用 <code>cargo new file_path</code> 创建新项目。</p><ul><li>项目入口在 src/main.rs</li><li>Cargo.toml 是 Rust 项目的配置管理文件，符合 <a href="https://toml.io/cn/v1.0.0" target="_blank" rel="noopener noreferrer">toml</a> 语法</li></ul></li><li><p>在项目目录下运行命令行 <code>cargo run</code>，经过编译后，程序开始运行。</p></li></ul><h2 id="_2-rust-的基本特点" tabindex="-1"><a class="header-anchor" href="#_2-rust-的基本特点"><span>2 Rust 的基本特点</span></a></h2><ul><li><p>使用名为 <code>cargo</code> 的工具管理项目。</p></li><li><p>整体语法偏 C/C++ 风格。</p><ul><li>函数体用花括号 <code>{}</code> 包裹</li><li>表达式之间用分号 <code>;</code> 分隔</li><li>访问结构体的成员函数或者变量使用点 <code>.</code> 运算符</li><li>访问命名空间（namespace）或者对象的静态函数使用双冒号 <code>::</code> 运算符</li><li>如果要简化对命名空间内部的函数或者数据类型的引用，可以使用 <code>use</code> 关键字，比如 <code>use std::fs</code></li><li>可执行体的入口函数是 main()</li></ul></li><li><p>Rust 虽然是一门强类型语言，但编译器支持类型推导。</p></li><li><p>Rust 支持宏编程。很多基础功能（如 <code>println!()</code>）都被封装成宏，以便写出简洁代码。</p></li><li><p><strong>Rust 的变量默认是不可变的</strong>，如果要修改变量的值，需要显式地使用 <code>mut</code> 关键字。</p></li><li><p>除了 let / static / const / fn 等少数语句外，Rust 绝大多数代码都是表达式（expression）。所以 if / while / for / loop 都会返回一个值，函数最后一个表达式就是函数的返回值，这和函数式编程语言一致。</p></li><li><p>Rust 支持面向接口编程和泛型编程。</p></li><li><p>Rust 有非常丰富的数据类型和强大的标准库。</p></li><li><p>Rust 有非常丰富的控制流程，包括模式匹配（pattern match）</p></li></ul><h2 id="_3-基本语法和基础数据类型" tabindex="-1"><a class="header-anchor" href="#_3-基本语法和基础数据类型"><span>3 基本语法和基础数据类型</span></a></h2><h3 id="_3-1-变量和函数" tabindex="-1"><a class="header-anchor" href="#_3-1-变量和函数"><span>3.1 变量和函数</span></a></h3><p>Rust 支持类型推导，所以，在编译器能够推到类型的情况下，变量类型一般可以省略。但要注意，常量（const）和静态变量（static）必须声明类型。</p><p><strong>默认变量不可变</strong>是一个重要特性，但是可以通过使用 <code>mut</code> 关键字来让变量是可变的。如果使用了 <code>mut</code> 却没有修改变量，Rust 编译器会给出报警提示移除不必要的 <code>mut</code>。</p><p>默认变量不可变符合最小权限原则（Principle of Least Privilege），有助于帮助开发者写出健壮且正确的代码。</p><p>Rust 函数的参数类型和返回值类型都必须显示定义（没有返回值时可以省略，返回 <a href="https://doc.rust-lang.org/std/primitive.unit.html" target="_blank" rel="noopener noreferrer">unit</a>）。函数中的最后一个表达式就是其返回值（该表达式末尾不应该有 <code>;</code>），如果最后一个表达式后添加了分号 <code>;</code>，则表示其返回值为 unit；如果函数内部要提前返回，则要用 <code>return</code> 关键字。</p><h3 id="_3-2-数据结构" tabindex="-1"><a class="header-anchor" href="#_3-2-数据结构"><span>3.2 数据结构</span></a></h3><p>Rust 用 <code>struct</code> 定义结构体，用 <code>enum</code> 定义标签联合体（Tagged Union），还能像 Python 一样随手定义元祖（Tuple）类型。</p><p>定义数据结构时一般会加入修饰，为数据结构引入一些额外的行为。Rust 中通过 trait 来定义数据的行为，trait 定义了数据结构可以实现的接口，类似 Java 中的 interface。</p><p>一般用 <code>impl</code> 关键字为数据结构实现 trait。Rust 还提供了派生宏（Derive Macro），能够简化一些标准接口的定义。如 <code>#[derive(Debug)]</code> 为数据结构实现 <a href="https://doc.rust-lang.org/std/fmt/trait.Debug.html" target="_blank" rel="noopener noreferrer">Debug trait</a>，提供了 debug 能力，这样才可以通过 <code>{:?}</code> 用 <code>println!</code> 打印出来。</p><p>还有 <code>Copy</code>、<code>Clone</code> 这两个派生宏，Clone 让数据可以被复制，Copy 让数据结构可以在参数传递的时候自动按字节拷贝。</p><figure><img src="' + _imports_0 + '" alt="" width="700" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><a href="https://doc.rust-lang.org/std/keyword.static.html" target="_blank" rel="noopener noreferrer">static</a> &gt; <a href="https://github.com/rust-lang-nursery/lazy-static.rs" target="_blank" rel="noopener noreferrer">lazy_static</a></p></blockquote><h2 id="_4-控制流程" tabindex="-1"><a class="header-anchor" href="#_4-控制流程"><span>4 控制流程</span></a></h2><ul><li><p><strong>顺序执行</strong>，即一行行代码往下执行。</p></li><li><p><strong>函数调用</strong>，执行过程中遇到函数就会发生函数调用。</p></li><li><p>Rust 的<strong>循环</strong>和大部分语言一致，支持死循环 <code>loop</code>、条件循环 <code>while</code>，以及对迭代器的循环 <code>for</code>。</p><ul><li><code>for</code> 循环可以用于任何实现了 <code>IntoIterator</code> trait 的数据结构。 <ul><li>执行过程中 <code>IntoIterator</code> 会生成一个迭代器，for 循环不断从迭代器中取值，直到迭代器返回 None 为止。因而，for 循环实际上只是一个语法糖，编译器会将其展开使用 loop 循环对迭代器进行循环访问，直至返回 None。</li><li><code>2..n</code> 表示 <code>2 &lt;= x &lt; n</code> 的所有值。可以省略 Range 的下标或上标，但是不支持负数。</li></ul><div class="language-rust" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token macro property">assert_eq!</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">..=</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre></div></li></ul></li><li><p>满足某条件时还会发生<strong>跳转</strong>，Rust 支持分支跳转、模式匹配、错误跳转和异步跳转。</p><ul><li>分支跳转：<code>if/else</code>；</li><li>模式匹配：通过模式匹配表达式或值的某部分内容来进行分支跳转；</li><li>错误跳转：当调用的函数返回错误时，Rust 会提前终止当前函数的执行，向上一层返回错误；</li><li>异步跳转：当 async 函数执行 await 时，函数当前上下文可能被阻塞，执行流程会跳转到另一个异步任务执行，直至 await 不再阻塞。</li></ul></li></ul><figure><img src="' + _imports_1 + '" alt="" width="700" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5-模式匹配" tabindex="-1"><a class="header-anchor" href="#_5-模式匹配"><span>5 模式匹配</span></a></h2><ul><li><p>Rust 的模式匹配吸取了函数式编程语言的优点，强大优雅且效率很高。它可以用于 struct / enum 中匹配部分或者全部内容。</p></li><li><p>模式匹配的关键字是 <code>match</code>。也可以使用 <code>if let</code>/<code>while let</code> 做简单匹配。</p></li><li><p>Rust 的模式匹配是一个很重要的语言特性，被广泛应用在状态机处理、消息处理和错误处理中。</p></li></ul>', 22)),
    createVNode(_component_CodeTabs, {
      id: "245",
      data: [{ "id": "match" }, { "id": "if let" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("match")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("if let")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "div",
          {
            class: "language-rust line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "rs",
            "data-title": "rs"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "fn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function-definition function" }, "process_event"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("event"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "&"),
                  createBaseVNode("span", { class: "token class-name" }, "Event"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "match"),
                  createTextVNode(" event "),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token class-name" }, "Event"),
                  createBaseVNode("span", { class: "token punctuation" }, "::"),
                  createBaseVNode("span", { class: "token class-name" }, "Join"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("uid"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" _tid"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"user {:?} joined"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" uid"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token class-name" }, "Event"),
                  createBaseVNode("span", { class: "token punctuation" }, "::"),
                  createBaseVNode("span", { class: "token class-name" }, "Leave"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("uid"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" tid"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"user {:?} left {:?}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" uid"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" tid"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token class-name" }, "Event"),
                  createBaseVNode("span", { class: "token punctuation" }, "::"),
                  createBaseVNode("span", { class: "token class-name" }, "Message"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("_"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" _"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" msg"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"broadcast: {}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" msg"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
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
            class: "language-rust line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "rs",
            "data-title": "rs"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 如果只关心 Event::Message")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "fn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function-definition function" }, "process_message"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("event"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "&"),
                  createBaseVNode("span", { class: "token class-name" }, "Event"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "if"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Event"),
                  createBaseVNode("span", { class: "token punctuation" }, "::"),
                  createBaseVNode("span", { class: "token class-name" }, "Message"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("_"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" _"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" msg"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" event "),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("        "),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"broadcast: {}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" msg"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
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
      _: 1
      /* STABLE */
    }),
    _cache[9] || (_cache[9] = createBaseVNode(
      "h2",
      {
        id: "_6-错误处理",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_6-错误处理"
        }, [
          createBaseVNode("span", null, "6 错误处理")
        ])
      ],
      -1
      /* HOISTED */
    )),
    _cache[10] || (_cache[10] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Rust 没有沿用 C++/Java 等诸多前辈使用的异常处理方式，而是"),
        createBaseVNode("strong", null, [
          createTextVNode("借鉴 Haskell，把错误封装在 "),
          createBaseVNode("code", null, "Result<T, E>"),
          createTextVNode(" 类型中，同时提供了 "),
          createBaseVNode("code", null, "?"),
          createTextVNode(" 操作符来传播错误")
        ]),
        createTextVNode("，方便开发。"),
        createBaseVNode("code", null, "Result<T, E>"),
        createTextVNode(" 类型是一个泛型数据结构，T 代表成功执行返回的结果类型，E 代表错误类型。")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "259",
      data: [{ "id": "unwrap()" }, { "id": "操作符 ?" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
        createTextVNode("unwrap()")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
        createTextVNode("操作符 ?")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
        createBaseVNode(
          "div",
          {
            class: "language-rust line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "rs",
            "data-title": "rs"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 代码中其实使用了错误 Result<T, E> 类型")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 只是我们使用了 unwrap() 方法，只关心成功返回的结果，如果出错，整个程序会终止")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "fn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function-definition function" }, "main"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" url "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"https://www.rust-lang.org/"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" output "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"rust.md"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Fetching url: {}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" url"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" body "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token namespace" }, [
                    createTextVNode("reqwest"),
                    createBaseVNode("span", { class: "token punctuation" }, "::"),
                    createTextVNode("blocking"),
                    createBaseVNode("span", { class: "token punctuation" }, "::")
                  ]),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("url"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "unwrap"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "text"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "unwrap"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Converting html to markdown..."'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" md "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token namespace" }, [
                    createTextVNode("html2md"),
                    createBaseVNode("span", { class: "token punctuation" }, "::")
                  ]),
                  createBaseVNode("span", { class: "token function" }, "parse_html"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "&"),
                  createTextVNode("body"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token namespace" }, [
                    createTextVNode("fs"),
                    createBaseVNode("span", { class: "token punctuation" }, "::")
                  ]),
                  createBaseVNode("span", { class: "token function" }, "write"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("output"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" md"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "as_bytes"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "unwrap"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Markdown saved to: {}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" output"),
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
            class: "language-rust line-numbers-mode",
            "data-highlighter": "prismjs",
            "data-ext": "rs",
            "data-title": "rs"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// POINT2: 如果想让错误传播，可以把所有的 unwrap() 换成 ? 操作符")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// 并让 main() 函数返回一个 Result<T, E>")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "fn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function-definition function" }, "main"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "->"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Result"),
                  createBaseVNode("span", { class: "token operator" }, "<"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token class-name" }, "Box"),
                  createBaseVNode("span", { class: "token operator" }, "<"),
                  createBaseVNode("span", { class: "token keyword" }, "dyn"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token namespace" }, [
                    createTextVNode("std"),
                    createBaseVNode("span", { class: "token punctuation" }, "::"),
                    createTextVNode("error"),
                    createBaseVNode("span", { class: "token punctuation" }, "::")
                  ]),
                  createBaseVNode("span", { class: "token class-name" }, "Error"),
                  createBaseVNode("span", { class: "token operator" }, ">>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" url "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"https://www.rust-lang.org/"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" output "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"rust2.md"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Fetching url: {}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" url"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" body "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token namespace" }, [
                    createTextVNode("reqwest"),
                    createBaseVNode("span", { class: "token punctuation" }, "::"),
                    createTextVNode("blocking"),
                    createBaseVNode("span", { class: "token punctuation" }, "::")
                  ]),
                  createBaseVNode("span", { class: "token function" }, "get"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("url"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token operator" }, "?"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "text"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token operator" }, "?"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Converting html to markdown..."'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" md "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token namespace" }, [
                    createTextVNode("html2md"),
                    createBaseVNode("span", { class: "token punctuation" }, "::")
                  ]),
                  createBaseVNode("span", { class: "token function" }, "parse_html"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token operator" }, "&"),
                  createTextVNode("body"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token namespace" }, [
                    createTextVNode("fs"),
                    createBaseVNode("span", { class: "token punctuation" }, "::")
                  ]),
                  createBaseVNode("span", { class: "token function" }, "write"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("output"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" md"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "as_bytes"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token operator" }, "?"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token macro property" }, "println!"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Markdown saved to: {}"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" output"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token class-name" }, "Ok"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
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
    _cache[11] || (_cache[11] = createStaticVNode('<h2 id="_7-rust-项目的组织" tabindex="-1"><a class="header-anchor" href="#_7-rust-项目的组织"><span>7 Rust 项目的组织</span></a></h2><p>当 Rust 项目的代码规模越来越大时，我们可以<strong>用 mod 来组织代码</strong>。</p><p>具体做法：在项目的入口文件 lib.rs/main.rs 中，用 mod 来生命要加载的其他代码文件。如果模块内容较多，可以放在一个目录下，在该目录下放一个 mod.rs 引入该模块的其他文件。然后，就可以用 <code>mod &lt;目录名&gt;</code> 引入这个模块了。</p><figure><img src="' + _imports_2 + '" alt="" width="500" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Rust 中，<strong>一个项目也被称为一个 crate</strong>。当 crate 里的代码改变时，这个 crate 需要被重新编译。crate 可以是一个可执行项目，也可以是一个库，我们可以用 <code>cargo new &lt;name&gt; -- lib</code> 来创建一个库。</p><p>在一个 crate 下，除了项目的源代码，单元测试和集成测试的代码也会放在 crate 里。</p><p>Rust 的单元测试一般放在和被测代码相同的文件中，使用条件编译 <code>#[cfg(test)]</code> 来确保测试代码只在测试环境下编译。</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token comment">// 单元测试</span></span>\n<span class="line"><span class="token attribute attr-name">#[cfg(test)]</span></span>\n<span class="line"><span class="token keyword">mod</span> <span class="token module-declaration namespace">tests</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token attribute attr-name">#[test]</span></span>\n<span class="line">  <span class="token keyword">fn</span> <span class="token function-definition function">it_works</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集成测试一般放在 tests 目录下，和 src 平级。和单元测试不同，集成测试只能测试 crate 下的公开接口，编译时编译成单独的可执行文件。</p><blockquote><p><a href="https://doc.rust-lang.org/book/ch11-01-writing-tests.html" target="_blank" rel="noopener noreferrer">How to write tests</a></p></blockquote><p>在 crate 下，如果要运行测试用例，可以使用 <code>cargo test</code>。</p><p>当代码规模继续增长，把所有代码放在一个 crate 里就不是一个好主意了，因为任何代码的修改都会导致这个 crate 重新编译，这样效率不高。我们可以<strong>使用 workspace</strong>。</p><p>一个 workspace 可以包含一到多个 crates，当代码发生改变时，只有涉及的 crates 才需要重新编译。当我们要构建一个 workspace 时，需要先在某个目录下生成一个如图所示的 Cargo.toml，包含 workspace 里所有的 crates，然后可以 cargo new 生成对应的 crates：</p><figure><img src="' + _imports_3 + '" alt="" width="600" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><a href="https://doc.rust-lang.org/book/ch14-00-more-about-cargo.html" target="_blank" rel="noopener noreferrer">More about cargo and crates.io</a></p></blockquote><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><figure><img src="' + _imports_4 + '" alt="" width="600" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Rust 支持声明宏（declarative macro）和过程宏（procedure macro）</p><p>其中过程宏又包含三种方式：函数宏（function macro），派生宏（derive macro）和属性宏（attribute macro）。</p><p>println! 是函数宏，是因为 Rust 是强类型语言，函数的类型需要在编译期敲定，而 println! 接受任意个数的参数，所以只能用宏来表达。</p></blockquote>', 18))
  ]);
}
const _3QuickStart_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "3-quick-start.html.vue"]]);
const data = JSON.parse('{"path":"/pl/rust/3-quick-start.html","title":"快速开始","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"快速开始","description":null,"article":false,"date":"2024-08-03T00:00:00.000Z","order":3},"headers":[{"level":2,"title":"1 QuickStart","slug":"_1-quickstart","link":"#_1-quickstart","children":[]},{"level":2,"title":"2 Rust 的基本特点","slug":"_2-rust-的基本特点","link":"#_2-rust-的基本特点","children":[]},{"level":2,"title":"3 基本语法和基础数据类型","slug":"_3-基本语法和基础数据类型","link":"#_3-基本语法和基础数据类型","children":[{"level":3,"title":"3.1 变量和函数","slug":"_3-1-变量和函数","link":"#_3-1-变量和函数","children":[]},{"level":3,"title":"3.2 数据结构","slug":"_3-2-数据结构","link":"#_3-2-数据结构","children":[]}]},{"level":2,"title":"4 控制流程","slug":"_4-控制流程","link":"#_4-控制流程","children":[]},{"level":2,"title":"5 模式匹配","slug":"_5-模式匹配","link":"#_5-模式匹配","children":[]},{"level":2,"title":"6 错误处理","slug":"_6-错误处理","link":"#_6-错误处理","children":[]},{"level":2,"title":"7 Rust 项目的组织","slug":"_7-rust-项目的组织","link":"#_7-rust-项目的组织","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":7.91,"words":2372},"filePathRelative":"pl/rust/3-quick-start.md","localizedDate":"2024年8月3日","excerpt":"<h2>1 QuickStart</h2>\\n<ul>\\n<li>\\n<p>使用 <a href=\\"https://rustup.rs/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">restup.rs</a> 中提供的方法进行下载安装。</p>\\n</li>\\n<li>\\n<p>使用 <code>cargo new file_path</code> 创建新项目。</p>\\n<ul>\\n<li>项目入口在 src/main.rs</li>\\n<li>Cargo.toml 是 Rust 项目的配置管理文件，符合 <a href=\\"https://toml.io/cn/v1.0.0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">toml</a> 语法</li>\\n</ul>\\n</li>\\n<li>\\n<p>在项目目录下运行命令行 <code>cargo run</code>，经过编译后，程序开始运行。</p>\\n</li>\\n</ul>"}');
export {
  _3QuickStart_html as comp,
  data
};
