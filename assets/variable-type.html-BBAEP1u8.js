import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, f as createBaseVNode, g as createTextVNode, d as createVNode, e as withCtx, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_2 = {
  style: { "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.816ex",
  height: "2.072ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 3012.6 915.9",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_4 = {
  style: { "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "12.5ex",
  height: "2.09ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -841.7 5525.1 923.7",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  id: "_5-symbol",
  tabindex: "-1"
};
const _hoisted_6 = {
  class: "header-anchor",
  href: "#_5-symbol"
};
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[23] || (_cache[23] = createStaticVNode('<h2 id="七种类型" tabindex="-1"><a class="header-anchor" href="#七种类型"><span>七种类型</span></a></h2><ul><li>Undefined</li><li>Null</li><li>Boolean</li><li>String</li><li>Number</li><li>Symbol</li><li>Object</li></ul><h2 id="_1-undefined、null" tabindex="-1"><a class="header-anchor" href="#_1-undefined、null"><span>1. Undefined、Null</span></a></h2><ul><li><p>Null 类型只有一个特殊值 <code>null</code>，它是一个空指针对象，所以用 <code>typeof null</code> 得到的结果是 <code>&#39;object&#39;</code>。</p></li><li><p>Undefined 类型只有一个特殊值 <code>undefined</code>，它由 <code>null</code> 派生而来，所以 <code>null == undefined</code> 的结果为 <code>true</code>。未赋值为 <code>undefined</code>，或者用 <code>void</code> 来把任意表达式变为 <code>undefined</code>。</p></li></ul><blockquote><p><strong>Q</strong>：为什么有的编程规范要求用 <code>void 0</code> 代替 <code>undefined</code>？</p><p><strong>A</strong>：<code>undefined</code> 是一个变量，而不是一个关键字，这是 JavaScript 语言公认的设计失误之一。局部变量中的 <code>undefined</code> 可以修改（注：ES5 之后全局变量下的 <code>undefined</code> 只读），为了避免它在无意中被修改，建议使用 <code>void 0</code> 来获取 <code>undefined</code> 值。</p></blockquote><h2 id="_2-boolean" tabindex="-1"><a class="header-anchor" href="#_2-boolean"><span>2. Boolean</span></a></h2><table><thead><tr><th>数据类型</th><th>true</th><th>false</th></tr></thead><tbody><tr><td>String</td><td>非空字符串</td><td>&quot;&quot;</td></tr><tr><td>Number</td><td>非 0 数值（包括无穷）</td><td>0, NaN</td></tr><tr><td>Object</td><td>非 null 对象</td><td>null</td></tr><tr><td>Undefined</td><td>无</td><td>undefined</td></tr></tbody></table><h2 id="_3-string" tabindex="-1"><a class="header-anchor" href="#_3-string"><span>3. <a href="https://javascript.info/string" target="_blank" rel="noopener noreferrer">String</a></span></a></h2><ul><li>JavaScrip 中的 String 永远无法变更，即字符串具有值类型的特征。</li></ul>', 9)),
    createBaseVNode("blockquote", null, [
      _cache[10] || (_cache[10] = createBaseVNode(
        "p",
        null,
        [
          createBaseVNode("strong", null, "Q"),
          createTextVNode("：字符串是否有最大长度？")
        ],
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[2] || (_cache[2] = createBaseVNode(
          "strong",
          null,
          "A",
          -1
          /* HOISTED */
        )),
        _cache[3] || (_cache[3] = createTextVNode("：String 的最大长度是 ")),
        createBaseVNode("mjx-container", _hoisted_1, [
          (openBlock(), createElementBlock("svg", _hoisted_2, _cache[0] || (_cache[0] = [
            createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" transform="translate(500,0)"></path></g></g></g><g data-mml-node="mo" transform="translate(1512.3,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g data-mml-node="mn" transform="translate(2512.6,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></g></g>', 1)
          ]))),
          _cache[1] || (_cache[1] = createBaseVNode(
            "mjx-assistive-mml",
            {
              unselectable: "on",
              display: "inline"
            },
            [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("msup", null, [
                  createBaseVNode("mn", null, "2"),
                  createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createBaseVNode("mn", null, "53")
                  ])
                ]),
                createBaseVNode("mo", null, "−"),
                createBaseVNode("mn", null, "1")
              ])
            ],
            -1
            /* HOISTED */
          ))
        ]),
        _cache[4] || (_cache[4] = createTextVNode("。"))
      ]),
      createBaseVNode("p", null, [
        _cache[6] || (_cache[6] = createTextVNode("String 的长度并直观理解的长度。String 并非“字符串”，而是是字符串的 UTF16 编码，对 String 的各种操作如 charAt、charCodeAt、length 等，针对的都是 UTF-16 编码，每个 UTF-16 单元被认为是 1 个字符（处理 SP 平面的字符时要注意，SP 上的每个字符对应 4 字节。BMP 是指 ")),
        _cache[7] || (_cache[7] = createBaseVNode(
          "code",
          null,
          "U+0000 - U+FFFF",
          -1
          /* HOISTED */
        )),
        _cache[8] || (_cache[8] = createTextVNode(" 范围内的码点）。所以字符串的最大长度实际上是受字符串的编码长度影响的。详见")),
        createVNode(_component_RouteLink, { to: "/basic/character-encoding/Chapter3.html" }, {
          default: withCtx(() => _cache[5] || (_cache[5] = [
            createTextVNode("Unicode 编码方案")
          ])),
          _: 1
          /* STABLE */
        }),
        _cache[9] || (_cache[9] = createTextVNode("。"))
      ])
    ]),
    _cache[24] || (_cache[24] = createStaticVNode('<h2 id="_4-number" tabindex="-1"><a class="header-anchor" href="#_4-number"><span>4. Number</span></a></h2><p>可以用十进制、二进制（<code>0b</code> 开头）、八进制（<code>0</code> 或 <code>0o</code> 开头）、十六进制（<code>0x</code> 开头）表示。可以使用科学计数法（<code>e</code>）。<code>NaN</code> 表示不是数值。</p>', 2)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[13] || (_cache[13] = createTextVNode("Number 共有 18437736874454810627（即 ")),
        createBaseVNode("mjx-container", _hoisted_3, [
          (openBlock(), createElementBlock("svg", _hoisted_4, _cache[11] || (_cache[11] = [
            createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(500,0)"></path></g></g></g><g data-mml-node="mo" transform="translate(1512.3,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g data-mml-node="msup" transform="translate(2512.6,0)"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" transform="translate(500,0)"></path></g></g></g><g data-mml-node="mo" transform="translate(4024.9,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path></g><g data-mml-node="mn" transform="translate(5025.1,0)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path></g></g></g>', 1)
          ]))),
          _cache[12] || (_cache[12] = createBaseVNode(
            "mjx-assistive-mml",
            {
              unselectable: "on",
              display: "inline"
            },
            [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("msup", null, [
                  createBaseVNode("mn", null, "2"),
                  createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createBaseVNode("mn", null, "64")
                  ])
                ]),
                createBaseVNode("mo", null, "−"),
                createBaseVNode("msup", null, [
                  createBaseVNode("mn", null, "2"),
                  createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createBaseVNode("mn", null, "53")
                  ])
                ]),
                createBaseVNode("mo", null, "+"),
                createBaseVNode("mn", null, "3")
              ])
            ],
            -1
            /* HOISTED */
          ))
        ]),
        _cache[14] || (_cache[14] = createTextVNode("）个值。"))
      ])
    ]),
    _cache[25] || (_cache[25] = createStaticVNode('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Number 用 64 位表示。</p><p>JavaScript 中的 Number 类型基本符合 IEEE 754-2008 规定的双精度浮点数规则。但是 JavaScript 为了表达几个额外的语言场景（比如不让除以 0 出错，而引入了无穷大的概念），规定了几个例外情况。</p><p>IEEE 754 标准： s（符号位，1）+ e（指数位，11）+ f（尾数，52）</p><p>e 全 1 时的特殊值减掉（即 64 - 11 = 53），+3 是指三个特殊值：NaN、Infinity、-Infinity</p><ul><li>NaN：e 全 1，f 非 0。（占用了 9007199254740990，这原本是符合 IEEE 规则的数字）</li><li>Infinity/-Infinity：e 全 1，f = 0，正无穷（S 为 0），负无穷（S 为 1）</li></ul></div><ul><li><p>整数范围：-0x1f ffff ffff ffff 至 0x1f ffff ffff ffff</p></li><li><p>JavaScript 中有 +0 和 -0，区分他们的方法是检验 1/x 是 Infinity 还是 -Infinity</p></li></ul><blockquote><p>浮点数精度问题：0.1 + 0.2 != 0.3</p><p>正确的比较方法应该是使用 JavaScript 提供的最小精度：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">-</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> Number<span class="token punctuation">.</span><span class="token constant">EPSILON</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line"></span></code></pre></div></blockquote>', 3)),
    createBaseVNode("h2", _hoisted_5, [
      createBaseVNode("a", _hoisted_6, [
        createBaseVNode("span", null, [
          _cache[16] || (_cache[16] = createTextVNode("5. ")),
          createVNode(_component_RouteLink, { to: "/front-end/js/grammar/Symbol.html" }, {
            default: withCtx(() => _cache[15] || (_cache[15] = [
              createTextVNode("Symbol")
            ])),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]),
    _cache[26] || (_cache[26] = createStaticVNode('<p>对象的 key 只能是 String 类型或 Symbol 类型。使用字符串做 key 容易造成属性名的冲突，ES6 引入 Symbol 正是为了防止属性名冲突的。</p><p>即使 description 相同，Symbol 也是不同的。</p><p>使用 JavaScript 内置的 <code>Symbol.*</code> 修改对象的内建行为。</p><h2 id="_6-object" tabindex="-1"><a class="header-anchor" href="#_6-object"><span>6. Object</span></a></h2><p>对于 JavaScript 中的几个基本类型，都在对象类型中有所对应，分别是</p><ul><li>Boolean</li><li>String</li><li>Number</li><li>Symbol</li></ul><p>要注意，<code>new Number(3)</code> 和数字 <code>3</code> 是不同的类型，前者是对象类型，后者是 Number 类型</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line"><span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>\n<span class="line"></span></code></pre></div><ul><li><p>Number、String、Boolean 当跟 new 搭配时，是对应类型的构造器，会产生对象；直接调用表示强制类型转换。</p></li><li><p>Symbol 是 Symbol 对象构造器，但是用 new 调用会抛出错误。</p></li><li><p>对象属性有<a href="https://juejin.cn/blog/6844903828580466702" target="_blank" rel="noopener noreferrer">数据属性和访问器属性</a>。</p></li></ul><blockquote><p><strong>Q</strong>：为什么给对象添加的方法能用在基本类型上？</p><p><strong>A</strong>：<code>.</code> 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。</p></blockquote><h2 id="_7-类型转换" tabindex="-1"><a class="header-anchor" href="#_7-类型转换"><span>7. 类型转换</span></a></h2><p><code>==</code> 运算会进行跨类型的比较，规则复杂。一般被认为是设计失误，很多实践中推荐禁止使用 <code>==</code>，而是要求进行显示转换后用 <code>===</code> 进行比较。</p><p><code>==</code> 的隐式转换规则：</p><ul><li>布尔值与其他类型比较时，布尔值会转换成数字：true -&gt; 1，false -&gt; 0</li><li>数字与字符串比较时，字符串会转换成数字 <ul><li>如果字符串可以被解析为有效数字，就将其转换为对应的数字</li><li>如果不能解析为有效数字，字符串会被转换为 NaN，与任何值比较结果都为 false</li></ul></li><li>对象与原始类型比较时，使用 valueOf() 或 toString() <ul><li>对象（包括数组）优先调用 valueOf()，但如果没有返回原始值，则调用 toString() <ul><li>数组使用 valueOf 返回自身，还是数组，而非原始值，所以会调用 toString()</li></ul></li></ul></li><li>null 和 undefined 在宽松相等下是特殊的，它们只能相等于彼此，不会和其他值相等<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line"><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>\n<span class="line"><span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>\n<span class="line"></span></code></pre></div></li><li>NaN 在任何情况下都不等于任何值，包括它自己</li></ul><table><thead><tr><th></th><th>Null</th><th>Undefined</th><th>Boolean(true)</th><th>Boolean(false)</th><th>Number</th><th>String</th><th>Symbol</th><th>Object</th></tr></thead><tbody><tr><td>Boolean</td><td>FALSE</td><td>FALSE</td><td>-</td><td>-</td><td>0/NaN -&gt; false</td><td>&quot;&quot; -&gt; false</td><td>TRUE</td><td>TRUE</td></tr><tr><td>Number</td><td>0</td><td>NaN</td><td>1</td><td>0</td><td>-</td><td><a href="#_7-1-stringtonumber-number-str">StringToNumber</a></td><td>TypeError</td><td><a href="#_7-3-%E5%AF%B9%E8%B1%A1-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%BD%AC%E6%8D%A2-%E6%8B%86%E7%AE%B1%E8%BD%AC%E6%8D%A2">拆箱转换</a></td></tr><tr><td>String</td><td>&quot;null&quot;</td><td>&quot;undefined&quot;</td><td>&quot;true&quot;</td><td>&quot;false&quot;</td><td><a href="#_7-2-numbertostring-string-num">NumberToString</a></td><td>-</td><td>TypeError</td><td><a href="#_7-3-%E5%AF%B9%E8%B1%A1-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%BD%AC%E6%8D%A2-%E6%8B%86%E7%AE%B1%E8%BD%AC%E6%8D%A2">拆箱转换</a></td></tr><tr><td>Object</td><td>TypeError</td><td>TypeError</td><td><a href="#_7-4-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%BD%AC%E6%8D%A2-%E8%A3%85%E7%AE%B1%E8%BD%AC%E6%8D%A2">装箱转换</a></td><td><a href="#_7-4-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%BD%AC%E6%8D%A2-%E8%A3%85%E7%AE%B1%E8%BD%AC%E6%8D%A2">装箱转换</a></td><td><a href="#_7-4-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%BD%AC%E6%8D%A2-%E8%A3%85%E7%AE%B1%E8%BD%AC%E6%8D%A2">装箱转换</a></td><td><a href="#_7-4-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%BD%AC%E6%8D%A2-%E8%A3%85%E7%AE%B1%E8%BD%AC%E6%8D%A2">装箱转换</a></td><td><a href="#_7-4-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B-%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%BD%AC%E6%8D%A2-%E8%A3%85%E7%AE%B1%E8%BD%AC%E6%8D%A2">装箱转换</a></td><td>-</td></tr></tbody></table><h3 id="_7-1-stringtonumber-number-str" tabindex="-1"><a class="header-anchor" href="#_7-1-stringtonumber-number-str"><span>7.1 StringToNumber: <code>Number(str)</code></span></a></h3><p>数字（十进制、二进制、八进制、十六进制 &amp; 科学计数法 E 或 e）：</p><ul><li>30</li><li>0b111</li><li>0c13</li><li>0xFF</li><li>1e3</li><li>-1e-2</li></ul><div class="hint-container warning"><p class="hint-container-title">使用 <code>Number()</code> 而非 <code>parseInt()</code>、<code>parseFloat</code></p><ul><li><code>parseInt</code> 只支持十六进制前缀“0x”，忽略非数字字符，不支持科学计数法 <ul><li>在比较旧的浏览器中，<code>parseInt</code> 还支持 0 开头的八进制前缀，这会造成错误。所以不论何时，都建议传入 <code>parseInt</code> 的第二个参数</li></ul></li><li><code>parseFloat</code> 直接把字符串作为十进制进行解析，不能处理其他任何进制</li></ul></div><h3 id="_7-2-numbertostring-string-num" tabindex="-1"><a class="header-anchor" href="#_7-2-numbertostring-string-num"><span>7.2 NumberToString: <code>String(num)</code></span></a></h3><ul><li>在较小范围内，数字转字符串完全符合你的直觉</li><li>在 Number 的绝对值较大或较小时，字符串表示是用科学计数法</li></ul><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">10000000000000000</span><span class="token punctuation">;</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10000000000000000</span></span>\n<span class="line"><span class="token keyword">let</span> q <span class="token operator">=</span> <span class="token number">10000000000000000000000000</span><span class="token punctuation">;</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1e+25</span></span>\n<span class="line"></span></code></pre></div><h3 id="_7-3-对象-基本类型的转换-拆箱转换" tabindex="-1"><a class="header-anchor" href="#_7-3-对象-基本类型的转换-拆箱转换"><span>7.3 对象-&gt;基本类型的转换（拆箱转换）</span></a></h3><p>拆箱转换会尝试调用 <code>valueOf</code> 和 <code>toString</code> 来获得拆箱后的基本类型。如果这两个函数都不存在，或没有返回基本类型，就会产生类型错误 TypeError。</p><p>ES6 之后，可以使用 <code>Symbol.toPrimitive</code> 来覆盖原有行为。</p><ul><li>Boolean：没有对应的转换。所有的对象都是 <code>true</code>。</li><li>Number：当进行数学运算时进行数值转换。例如，<code>Date</code> 对象可以相减。优先使用 <code>valueOf</code>。</li><li>String：一般在输出的时候进行。比如 <code>alert(obj)</code>、<code>console.log(obj)</code> 等。优先使用 <code>toString</code>。</li></ul>', 26)),
    createVNode(_component_CodeTabs, {
      id: "592",
      data: [{ "id": "Number" }, { "id": "String" }, { "id": "Symbol.toPrimitive" }],
      "tab-id": "拆箱转换"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[17] || (_cache[17] = [
        createTextVNode("Number")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[18] || (_cache[18] = [
        createTextVNode("String")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[19] || (_cache[19] = [
        createTextVNode("Symbol.toPrimitive")
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
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" obj "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function-variable function" }, "valueof"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"valueOf"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
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
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function-variable function" }, "toString"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"toString"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
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
                  createTextVNode("obj "),
                  createBaseVNode("span", { class: "token operator" }, "+"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "3"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// valueOf")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// toString")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// TypeError")
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
                  createBaseVNode("span", { class: "token keyword" }, "let"),
                  createTextVNode(" obj "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function-variable function" }, "valueof"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"valueOf"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
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
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function-variable function" }, "toString"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"toString"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
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
                  createBaseVNode("span", { class: "token function" }, "String"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// toString")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// valueOf")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// TypeError")
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
      tab2: withCtx(({ value, isActive }) => _cache[22] || (_cache[22] = [
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
                  createTextVNode(" obj "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function-variable function" }, "valueof"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"valueOf"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
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
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token function-variable function" }, "toString"),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"toString"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
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
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("Symbol"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("toPrimitive"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "=>"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "{")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  console"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token function" }, "log"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Symbol.toPrimitive"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("  "),
                  createBaseVNode("span", { class: "token keyword" }, "return"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"hi"'),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
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
                  createBaseVNode("span", { class: "token function" }, "String"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("obj"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, ";")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// Symbol.toPrimitive")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "// hi")
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
    _cache[27] || (_cache[27] = createStaticVNode('<h3 id="_7-4-基本类型-对象的转换-装箱转换" tabindex="-1"><a class="header-anchor" href="#_7-4-基本类型-对象的转换-装箱转换"><span>7.4 基本类型-&gt;对象的转换（装箱转换）</span></a></h3><p>之前提到过，基本类型 Boolean, String, Number, Symbol 在对象中都有对应的类。装箱转换就是把这些基本类型转换为对应的对象。</p><p>可以利用某个函数的 <code>call</code> 来强迫装箱，或者使用内置的 <code>Object()</code> 函数显式调用装箱能力。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">symbolObj</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// 或</span></span>\n<span class="line"><span class="token comment">// let symbolObj = Object(Symbol(&quot;a&quot;));</span></span>\n<span class="line"></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> symbolObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbolObj <span class="token keyword">instanceof</span> <span class="token class-name">Symbol</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbolObj<span class="token punctuation">.</span>constructor <span class="token operator">==</span> Symbol<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>typeof</code> 只能返回 <code>number</code>, <code>boolean</code>, <code>string</code>, <code>function</code>, <code>object</code>（NULL，数组，对象）, <code>undefined</code>。</p><p><code>instanceof</code> 判断一个变量是否是某个对象的实例。</p></blockquote><p>装箱操作会频繁产生临时对象，在一些对性能要求较高的场景下，要尽量避免对基本类型做装箱转换。</p><p>每类装箱对象都有私有的 Class 属性，可以用 <code>Object.prototype.toString</code> 获取：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>symbolObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object symbol]</span></span>\n<span class="line"></span></code></pre></div><h2 id="_8-数据的存储" tabindex="-1"><a class="header-anchor" href="#_8-数据的存储"><span>8. 数据的存储</span></a></h2><p>基本类型直接在栈中存放值，引用类型在栈中存放地址，地址指向堆中的具体值。</p><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h2><p>标准中规定了运行时数据类型，JavaScript 中还提供了 typeof 这样的运算来获取操作数类型。二者之间有很多不一致的地方，我们按照 typeof 来理解就好。</p><table><thead><tr><th>表达式</th><th>typeof 结果</th><th>运行时类型</th></tr></thead><tbody><tr><td>null</td><td>object</td><td>Null</td></tr><tr><td>{}</td><td>object</td><td>Object</td></tr><tr><td>(function(){})</td><td>function</td><td>Object</td></tr><tr><td>100</td><td>number</td><td>Number</td></tr><tr><td>&quot;hi&quot;</td><td>string</td><td>String</td></tr><tr><td>true</td><td>boolean</td><td>Boolean</td></tr><tr><td>void 0</td><td>undefined</td><td>Undefined</td></tr><tr><td>Symbol(&quot;id&quot;)</td><td>symbol</td><td>Symbol</td></tr></tbody></table><ul><li>这里要注意 null 和 function</li></ul>', 14))
  ]);
}
const variableType_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "variable-type.html.vue"]]);
const data = JSON.parse(`{"path":"/front-end/js/variable-type.html","title":"类型","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"类型","description":null,"article":false,"date":"2023-08-10T00:00:00.000Z","order":1},"headers":[{"level":2,"title":"七种类型","slug":"七种类型","link":"#七种类型","children":[]},{"level":2,"title":"1. Undefined、Null","slug":"_1-undefined、null","link":"#_1-undefined、null","children":[]},{"level":2,"title":"2. Boolean","slug":"_2-boolean","link":"#_2-boolean","children":[]},{"level":2,"title":"3. String","slug":"_3-string","link":"#_3-string","children":[]},{"level":2,"title":"4. Number","slug":"_4-number","link":"#_4-number","children":[]},{"level":2,"title":"5. Symbol","slug":"_5-symbol","link":"#_5-symbol","children":[]},{"level":2,"title":"6. Object","slug":"_6-object","link":"#_6-object","children":[]},{"level":2,"title":"7. 类型转换","slug":"_7-类型转换","link":"#_7-类型转换","children":[{"level":3,"title":"7.1 StringToNumber: Number(str)","slug":"_7-1-stringtonumber-number-str","link":"#_7-1-stringtonumber-number-str","children":[]},{"level":3,"title":"7.2 NumberToString: String(num)","slug":"_7-2-numbertostring-string-num","link":"#_7-2-numbertostring-string-num","children":[]},{"level":3,"title":"7.3 对象->基本类型的转换（拆箱转换）","slug":"_7-3-对象-基本类型的转换-拆箱转换","link":"#_7-3-对象-基本类型的转换-拆箱转换","children":[]},{"level":3,"title":"7.4 基本类型->对象的转换（装箱转换）","slug":"_7-4-基本类型-对象的转换-装箱转换","link":"#_7-4-基本类型-对象的转换-装箱转换","children":[]}]},{"level":2,"title":"8. 数据的存储","slug":"_8-数据的存储","link":"#_8-数据的存储","children":[]},{"level":2,"title":"补充","slug":"补充","link":"#补充","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":7.54,"words":2261},"filePathRelative":"front-end/js/variable-type.md","localizedDate":"2023年8月10日","excerpt":"<h2>七种类型</h2>\\n<ul>\\n<li>Undefined</li>\\n<li>Null</li>\\n<li>Boolean</li>\\n<li>String</li>\\n<li>Number</li>\\n<li>Symbol</li>\\n<li>Object</li>\\n</ul>\\n<h2>1. Undefined、Null</h2>\\n<ul>\\n<li>\\n<p>Null 类型只有一个特殊值 <code>null</code>，它是一个空指针对象，所以用 <code>typeof null</code> 得到的结果是 <code>'object'</code>。</p>\\n</li>\\n<li>\\n<p>Undefined 类型只有一个特殊值 <code>undefined</code>，它由 <code>null</code> 派生而来，所以 <code>null == undefined</code> 的结果为 <code>true</code>。未赋值为 <code>undefined</code>，或者用 <code>void</code> 来把任意表达式变为 <code>undefined</code>。</p>\\n</li>\\n</ul>"}`);
export {
  variableType_html as comp,
  data
};
