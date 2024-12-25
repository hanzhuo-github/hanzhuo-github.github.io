import { c as createElementBlock, b as createStaticVNode, f as createBaseVNode, g as createTextVNode, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_2 = {
  style: { "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.169ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2284.7 1000",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_4 = {
  style: { "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.009ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 888 683",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_6 = {
  style: { "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "8.53ex",
  height: "2.072ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 3770.1 915.9",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_8 = {
  style: { "vertical-align": "-0.023ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.197ex",
  height: "2.656ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1164 529 1174",
  "aria-hidden": "true"
};
const _hoisted_9 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_10 = {
  style: { "vertical-align": "-0.023ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.197ex",
  height: "1.02ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -441 529 451",
  "aria-hidden": "true"
};
const _hoisted_11 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_12 = {
  style: { "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.036ex",
  height: "2.633ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1164 16 1164",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _cache[26] || (_cache[26] = createStaticVNode('<p><a href="https://www.zhihu.com/column/paogenjiudi" target="_blank" rel="noopener noreferrer">知乎专栏「刨根问底字符编码」</a> 的学习记录。</p><h2 id="_1-基本术语" tabindex="-1"><a class="header-anchor" href="#_1-基本术语"><span>1. 基本术语</span></a></h2><ul><li><p><strong>位（bit, binary digit）</strong>，表示为 <code>b</code>，亦称二进制位、比特位、位元，指二进制数中的一位。</p><ul><li>位串（bit string）：一连串的位</li></ul></li><li><p><strong>字节（byte）</strong>，表示为 <code>B</code>，又称位元组：</p><ul><li>半字节（nibble）：4个 bit</li><li>字节（byte）：8个 bit。有时用 8 位组（Octet）来强调 8 比特串</li><li>字（word）、双字（Dword, double word）、四字（Qword, Quad word）、十字（Tbyte, Ten byte）</li></ul><blockquote><p>现代 PC 一般以字节为单位，称为按字节编址，因此字节一般也是存储器的最小存取单位以及处理器的最小寻址单位。 这与字符编码关系密切，比如码元的单字节与多字节、字节序的大端序与小端序等，都与以字节为基础的基本数据类型密切相关。</p></blockquote></li><li><p><strong>字与字长</strong></p><ul><li>字（word）：作为一整个整体来处理或运算的一串比特位，通常分为若干字节</li><li>字长：字的长度（位数），决定了 CPU 一次操作实际处理的比特位数量。字长由 CPU 对外数据通路的数据总线宽度决定。</li></ul><blockquote><p>一般来说，计算机可以最高效处理的数据大小应该与其字长相同。 桌面平台的处理器字长基本是 64 位，嵌入式平台 32 位，在某些专业领域（高端显卡等）64位甚至高达128位、256位。</p></blockquote></li><li><p><strong>编码（encode）</strong>：信息从一种形式转换为另一种形式的过程</p></li><li><p><strong>解码（decode）</strong>：编码的逆过程</p></li><li><p><strong>字符集（character set、charset）</strong></p></li><li><p><strong>字符编码（character encoding）</strong>：将字符集中的字符按一定方式编码为某指定集合中的某一对象的过程。</p></li><li><p><strong>字符编码模型（character encoding model）</strong>：反应字符编码系统的构成特点和构成部分之间相互关系的模型框架。</p><ul><li>ASCII：传统字符编码模型。将字符集中的字符进行编号，编号就是该字符的编码</li><li>统一码（Unicode）、通用字符集（UCS）：现代字符编码模型</li></ul><blockquote><p>现代字符编码模型：</p><ol><li>有哪些字符</li><li>这些字符的编号是什么</li><li>这些编号如何编码成一系列逻辑层面有限大小的数字，即<strong>码元序列</strong></li><li>这些逻辑层面的码元序列如何转换为（即映射为）物理层面的<strong>字节序列（即字节流）</strong></li><li>在某些特殊的传输环境中（比如Email中），再进一步将字节序列进行适应性编码处理</li></ol><p> </p><p>核心思想：创建一个能够用<strong>不同方式</strong>来编码的<strong>通用</strong>字符集</p></blockquote></li></ul><h2 id="_2-现代字符编码模型" tabindex="-1"><a class="header-anchor" href="#_2-现代字符编码模型"><span>2. 现代字符编码模型</span></a></h2><p>现代字符编码模型分为了5个层次：</p><h3 id="_2-1-抽象字符表-acr-abstract-character-repertoire" tabindex="-1"><a class="header-anchor" href="#_2-1-抽象字符表-acr-abstract-character-repertoire"><span>2.1 抽象字符表（ACR, Abstract Character Repertoire）</span></a></h3><blockquote><p>明确字符的范围（即确定支持哪些字符）</p></blockquote><ul><li><p>无序</p></li><li><p>不同于具有特定字型的“具体”字符，“抽象”字符不具有特定的字形。</p></li><li><p>字符表可以是封闭的（如ASCII字符表、ISO/IEC 8859系列），也可以是开放的（如 Unicode、Code Page 代码页）</p></li></ul><h3 id="_2-2-编号字符集-ccs-coded-character-set" tabindex="-1"><a class="header-anchor" href="#_2-2-编号字符集-ccs-coded-character-set"><span>2.2 编号字符集（CCS, Coded Character Set）</span></a></h3><blockquote><p>用数字编号表示字符（即用数字给抽象字符表ACR中的字符进行编号），CCS 常简称为字符集</p></blockquote>', 10)),
    createBaseVNode("ul", null, [
      _cache[13] || (_cache[13] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "将抽象字符表 SCR 中的每个抽象字符表示为 1 个非负整数 N 或者映射到 1 个坐标（非负整数值对 x, y），映射的结果就是编号字符集 CCS。")
        ],
        -1
        /* HOISTED */
      )),
      createBaseVNode("li", null, [
        _cache[11] || (_cache[11] = createBaseVNode(
          "p",
          null,
          [
            createTextVNode("由此产生了"),
            createBaseVNode("strong", null, "编号空间（code space）"),
            createTextVNode("，一般翻译为"),
            createBaseVNode("strong", null, "代码空间"),
            createTextVNode("、"),
            createBaseVNode("strong", null, "码空间"),
            createTextVNode("、"),
            createBaseVNode("strong", null, "码点空间")
          ],
          -1
          /* HOISTED */
        )),
        _cache[12] || (_cache[12] = createBaseVNode(
          "p",
          null,
          "编号空间可以用以下方式进行描述",
          -1
          /* HOISTED */
        )),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("mjx-container", _hoisted_1, [
              (openBlock(), createElementBlock("svg", _hoisted_2, _cache[0] || (_cache[0] = [
                createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(389,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g data-mml-node="mo" transform="translate(961,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path></g><g data-mml-node="mi" transform="translate(1405.7,0)"><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mo" transform="translate(1895.7,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g>', 1)
              ]))),
              _cache[1] || (_cache[1] = createBaseVNode(
                "mjx-assistive-mml",
                {
                  unselectable: "on",
                  display: "inline"
                },
                [
                  createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, ","),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", { stretchy: "false" }, ")")
                  ])
                ],
                -1
                /* HOISTED */
              ))
            ]),
            _cache[2] || (_cache[2] = createTextVNode("：GB2312的汉字编号空间是94 x 94"))
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("mjx-container", _hoisted_3, [
              (openBlock(), createElementBlock("svg", _hoisted_4, _cache[3] || (_cache[3] = [
                createBaseVNode(
                  "g",
                  {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  },
                  [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D441",
                          d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"
                        })
                      ])
                    ])
                  ],
                  -1
                  /* HOISTED */
                )
              ]))),
              _cache[4] || (_cache[4] = createBaseVNode(
                "mjx-assistive-mml",
                {
                  unselectable: "on",
                  display: "inline"
                },
                [
                  createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                    createBaseVNode("mi", null, "N")
                  ])
                ],
                -1
                /* HOISTED */
              ))
            ]),
            _cache[5] || (_cache[5] = createTextVNode("：ISO-8859-1的编号空间是256"))
          ]),
          createBaseVNode("li", null, [
            _cache[8] || (_cache[8] = createTextVNode("存储单元尺寸：ISO-8859-1是一个8比特的编号空间（")),
            createBaseVNode("mjx-container", _hoisted_5, [
              (openBlock(), createElementBlock("svg", _hoisted_6, _cache[6] || (_cache[6] = [
                createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z"></path></g></g></g><g data-mml-node="mo" transform="translate(1214.3,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(2270.1,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(500,0)"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(1000,0)"></path></g></g></g>', 1)
              ]))),
              _cache[7] || (_cache[7] = createBaseVNode(
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
                        createBaseVNode("mn", null, "8")
                      ])
                    ]),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mn", null, "256")
                  ])
                ],
                -1
                /* HOISTED */
              ))
            ]),
            _cache[9] || (_cache[9] = createTextVNode("）"))
          ]),
          _cache[10] || (_cache[10] = createBaseVNode(
            "li",
            null,
            "子集：如行、列、面（Plane平面、层面）等等",
            -1
            /* HOISTED */
          ))
        ])
      ]),
      _cache[14] || (_cache[14] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createBaseVNode("strong", null, "码点（code point 或 code position）"),
            createTextVNode("：码点空间中的位置")
          ]),
          createBaseVNode("p", null, "还经常会用“码点”来指代“码点值”，需要根据上下文进行判断")
        ],
        -1
        /* HOISTED */
      )),
      _cache[15] || (_cache[15] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, [
            createBaseVNode("strong", null, "码点值（或码点编号）"),
            createTextVNode("：一个字符占用的码点所在的坐标或非负整数，即该字符的编号")
          ]),
          createBaseVNode("p", null, [
            createTextVNode("在 Unicode 编码方案中，字符码点又称为 "),
            createBaseVNode("strong", null, "Unicode 标量值（Unicode Scalar Value）")
          ])
        ],
        -1
        /* HOISTED */
      ))
    ]),
    _cache[27] || (_cache[27] = createBaseVNode(
      "div",
      { class: "hint-container info" },
      [
        createBaseVNode("p", { class: "hint-container-title" }, "字符编号不完全等同于码点编号（即码点值）"),
        createBaseVNode("p", null, "一般编号字符集 CCS 里的码点数量要大于抽象字符表 ACR 中的字符数量。 在编号字符集中，除了字符码点之外，还有非字符码点和保留码点")
      ],
      -1
      /* HOISTED */
    )),
    _cache[28] || (_cache[28] = createBaseVNode(
      "p",
      null,
      "在 Unicode 标准中，一个抽象字符可能对应多个码点，也可能使用多个码点组成的序列来表示。",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[22] || (_cache[22] = createTextVNode("如码点编号为U+51C9与U+F979的这两个码点实际上是同一个字符“凉”，这是为了兼容韩国字符集标准KS X 1001:1998。再如 ")),
      createBaseVNode("mjx-container", _hoisted_7, [
        (openBlock(), createElementBlock("svg", _hoisted_8, _cache[16] || (_cache[16] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mo" transform="translate(264.5,504) translate(-137.5 0)"><path data-c="2035" d="M12 501Q12 527 31 542T63 558Q73 560 77 560Q114 560 128 528Q133 518 188 293T244 61Q244 56 223 50T195 43Q192 43 190 45T102 263T14 486Q12 496 12 501Z"></path></g></g></g></g></g>', 1)
        ]))),
        _cache[17] || (_cache[17] = createBaseVNode(
          "mjx-assistive-mml",
          {
            unselectable: "on",
            display: "inline"
          },
          [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                createBaseVNode("mover", null, [
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", { "data-mjx-pseudoscript": "true" }, "`")
                ])
              ])
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      _cache[23] || (_cache[23] = createTextVNode("，由码点编号为U+0061的基本字符字母 ")),
      createBaseVNode("mjx-container", _hoisted_9, [
        (openBlock(), createElementBlock("svg", _hoisted_10, _cache[18] || (_cache[18] = [
          createBaseVNode(
            "g",
            {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            },
            [
              createBaseVNode("g", { "data-mml-node": "math" }, [
                createBaseVNode("g", { "data-mml-node": "mi" }, [
                  createBaseVNode("path", {
                    "data-c": "1D44E",
                    d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
                  })
                ])
              ])
            ],
            -1
            /* HOISTED */
          )
        ]))),
        _cache[19] || (_cache[19] = createBaseVNode(
          "mjx-assistive-mml",
          {
            unselectable: "on",
            display: "inline"
          },
          [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "a")
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      _cache[24] || (_cache[24] = createTextVNode(" 和码点编号为U+0300的组合字符读音符号 ")),
      createBaseVNode("mjx-container", _hoisted_11, [
        (openBlock(), createElementBlock("svg", _hoisted_12, _cache[20] || (_cache[20] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mover"><g data-mml-node="mrow"></g><g data-mml-node="mo" transform="translate(0,504) translate(-137.5 0)"><path data-c="2035" d="M12 501Q12 527 31 542T63 558Q73 560 77 560Q114 560 128 528Q133 518 188 293T244 61Q244 56 223 50T195 43Q192 43 190 45T102 263T14 486Q12 496 12 501Z"></path></g></g></g></g></g>', 1)
        ]))),
        _cache[21] || (_cache[21] = createBaseVNode(
          "mjx-assistive-mml",
          {
            unselectable: "on",
            display: "inline"
          },
          [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                createBaseVNode("mover", null, [
                  createBaseVNode("mrow"),
                  createBaseVNode("mo", { "data-mjx-pseudoscript": "true" }, "`")
                ])
              ])
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      _cache[25] || (_cache[25] = createTextVNode(" 所共同组成。"))
    ]),
    _cache[29] || (_cache[29] = createStaticVNode('<h3 id="_2-3-字符编码方式-形式-格式-规则-cef-character-encoding-form" tabindex="-1"><a class="header-anchor" href="#_2-3-字符编码方式-形式-格式-规则-cef-character-encoding-form"><span>2.3 字符编码方式/形式/格式/规则（CEF, Character Encoding Form）</span></a></h3><blockquote><p>将字符编号编码为逻辑上的码元序列（即逻辑字符编码）</p><p>也被称为<strong>存储格式（Storage Format）</strong></p></blockquote><ul><li><p>以 Unicode 为例，它的 CCS 所需的码点数量赎回不断增加的，而计算机所能表示的整数范围却是有限的。如何通过相对有限的整型数来可扩展地表示可能会无限增长的字符数量？对于 ASCII 字符编码等早期广泛应用的编码方案，如何做兼容？这就是 CEF 要解决的问题。</p><p>CEF 就是将 CCS 中的<strong>码点值（码点编号、字符编号）<strong>转化成有限比特长度的</strong>编码值（字符编码）</strong>。</p></li><li><p>这个<strong>编码值</strong>是码元的序列（code unit sequence）。</p><p><strong>码元（code unit）</strong></p></li><li><p>CEF 虽然也被称为存储格式，但是它只涉及逻辑层面、与特定的计算机系统平台无关的编码方式，尚未涉及到物理层面上、与特定计算机系统平台有关的存储方式</p><p>UTF-8、UTF-16、UTF-32 等，都是 Unicode 字符集（编号字符集 CCS）常用的字符编码方式（CEF）</p></li></ul><h3 id="_2-4-字符编码模式ces-ces-character-encoding-scheme" tabindex="-1"><a class="header-anchor" href="#_2-4-字符编码模式ces-ces-character-encoding-scheme"><span>2.4 字符编码模式CES（CES, Character Encoding Scheme）</span></a></h3><blockquote><p>将逻辑上的码元序列映射为物理上的字节序列（字节流，即物理字符编码）</p><p>也称作<strong>序列化模式（Serialization Format）</strong></p><p>经过编码后的字符能在计算机中进行处理、存储和传输</p></blockquote><ul><li><p>CEF 是跟特定计算机系统平台无关的<strong>逻辑意义</strong>上的编码过程，而 CES 就属于跟特定计算机系统平台有关的<strong>物理意义</strong>上的编码过程。</p></li><li><p>由于硬件平台与操作系统设计上的历史原因，对于U TF-16、UTF-32 等采用多字节码元的编码方式而言，必须使用一个原先称之为**零宽度不中断空格(ZERO WIDTH NO-BREAK SPACE)**的字符（Unicode字符编号为 0xFEFF，用来指定字节序 （Byte-Order 或 Endianness，也称字节顺序、位元组顺序），是大端序还是小端序），计算机才能够正确地进行处理、存储和传输。</p><p>对于 UTF-8 这种采用单字节码元的编码方式来说，并不存在字节序问题，无需指明字节序。所以在各种计算机系统平台中，UTF-8 编码的码元序列与字节序列都是相同的。</p></li><li><p>编码（encode）可能指 CEF 也可能是指 CES，解码（decode）也存在对应的两种可能。</p><p>编码（encoding）就相应的可能指<strong>码元序列</strong>，也可能指<strong>字节序列</strong>。</p></li><li><p>程序员更多接触到的是 CES 将码元序列进一步编码所形成的 <strong>字节序列</strong>，这是物理意义上的最终编码</p><p>通过 CEF 编码后得到的码元序列，更多的是逻辑意义上的中间编码，一般不和它直接打交道。</p><p>第五层的 TES 所形成的编码用于某些特殊的传输环境，打交道机会也比较少。</p></li></ul><h3 id="_2-5-传输编码语法-tes-transfer-encoding-syntax" tabindex="-1"><a class="header-anchor" href="#_2-5-传输编码语法-tes-transfer-encoding-syntax"><span>2.5 传输编码语法（TES, Transfer Encoding Syntax）</span></a></h3><blockquote><p>用将字节序列作进一步的适应性编码处理</p></blockquote><p>在某些特殊传输环境中，需要对 CES 所提供的字节序列（字节流）进一步进行<strong>适应性编码</strong>。一般有两种处理方式：</p><ol><li><p>把字节序列映射到一套更受限制的值域内，以满足该特殊环境的限制。</p><p>如用于 Email 传输的 Base64 编码或者 quoted-printable 编码（即可打印字符引用编码），都是把8位的字节映射为7位长的数据。</p><blockquote><p>Email 协议的设计仅能传输 7 位 ASCII 字符。</p></blockquote></li><li><p>压缩字节序列的值</p><p>如 LZW 或者进程长度编码等无损压缩技术。</p></li></ol><h3 id="_2-6-小结" tabindex="-1"><a class="header-anchor" href="#_2-6-小结"><span>2.6 小结</span></a></h3><p>同一个字符，因多个不同的字符编码方式 CEF（如 UTF-8、UTF-16、UTF-32 等），会有不同的<strong>码元序列（Code Unit Sequence）</strong></p><p>同一个码元序列，因 2 个不同的字符编码模式 CES（大端、小端），可能具有 2 个不同的<strong>字节序列（Byte Sequence）</strong></p><p>不同的<strong>码元序列</strong>或是<strong>字节序列</strong>，只要表示的是同一个字符，name对应的**码点值（码点编号、字符编号）**一般都是相同的（在Unicode标准中，为了与其它标准兼容，有少数字符可能与多个码点对应）</p>', 14))
  ]);
}
const Chapter1_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Chapter1.html.vue"]]);
const data = JSON.parse('{"path":"/basic/character-encoding/Chapter1.html","title":"1. 术语","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"1. 术语","description":null,"article":false,"order":1},"headers":[{"level":2,"title":"1. 基本术语","slug":"_1-基本术语","link":"#_1-基本术语","children":[]},{"level":2,"title":"2. 现代字符编码模型","slug":"_2-现代字符编码模型","link":"#_2-现代字符编码模型","children":[{"level":3,"title":"2.1 抽象字符表（ACR, Abstract Character Repertoire）","slug":"_2-1-抽象字符表-acr-abstract-character-repertoire","link":"#_2-1-抽象字符表-acr-abstract-character-repertoire","children":[]},{"level":3,"title":"2.2 编号字符集（CCS, Coded Character Set）","slug":"_2-2-编号字符集-ccs-coded-character-set","link":"#_2-2-编号字符集-ccs-coded-character-set","children":[]},{"level":3,"title":"2.3 字符编码方式/形式/格式/规则（CEF, Character Encoding Form）","slug":"_2-3-字符编码方式-形式-格式-规则-cef-character-encoding-form","link":"#_2-3-字符编码方式-形式-格式-规则-cef-character-encoding-form","children":[]},{"level":3,"title":"2.4 字符编码模式CES（CES, Character Encoding Scheme）","slug":"_2-4-字符编码模式ces-ces-character-encoding-scheme","link":"#_2-4-字符编码模式ces-ces-character-encoding-scheme","children":[]},{"level":3,"title":"2.5 传输编码语法（TES, Transfer Encoding Syntax）","slug":"_2-5-传输编码语法-tes-transfer-encoding-syntax","link":"#_2-5-传输编码语法-tes-transfer-encoding-syntax","children":[]},{"level":3,"title":"2.6 小结","slug":"_2-6-小结","link":"#_2-6-小结","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":8.05,"words":2414},"filePathRelative":"basic/character-encoding/Chapter1.md","localizedDate":"2024年12月24日","excerpt":"<p><a href=\\"https://www.zhihu.com/column/paogenjiudi\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">知乎专栏「刨根问底字符编码」</a> 的学习记录。</p>\\n<h2>1. 基本术语</h2>\\n<ul>\\n<li>\\n<p><strong>位（bit, binary digit）</strong>，表示为 <code>b</code>，亦称二进制位、比特位、位元，指二进制数中的一位。</p>\\n<ul>\\n<li>位串（bit string）：一连串的位</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>字节（byte）</strong>，表示为 <code>B</code>，又称位元组：</p>\\n<ul>\\n<li>半字节（nibble）：4个 bit</li>\\n<li>字节（byte）：8个 bit。有时用 8 位组（Octet）来强调 8 比特串</li>\\n<li>字（word）、双字（Dword, double word）、四字（Qword, Quad word）、十字（Tbyte, Ten byte）</li>\\n</ul>\\n<blockquote>\\n<p>现代 PC 一般以字节为单位，称为按字节编址，因此字节一般也是存储器的最小存取单位以及处理器的最小寻址单位。\\n这与字符编码关系密切，比如码元的单字节与多字节、字节序的大端序与小端序等，都与以字节为基础的基本数据类型密切相关。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p><strong>字与字长</strong></p>\\n<ul>\\n<li>字（word）：作为一整个整体来处理或运算的一串比特位，通常分为若干字节</li>\\n<li>字长：字的长度（位数），决定了 CPU 一次操作实际处理的比特位数量。字长由 CPU 对外数据通路的数据总线宽度决定。</li>\\n</ul>\\n<blockquote>\\n<p>一般来说，计算机可以最高效处理的数据大小应该与其字长相同。\\n桌面平台的处理器字长基本是 64 位，嵌入式平台 32 位，在某些专业领域（高端显卡等）64位甚至高达128位、256位。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p><strong>编码（encode）</strong>：信息从一种形式转换为另一种形式的过程</p>\\n</li>\\n<li>\\n<p><strong>解码（decode）</strong>：编码的逆过程</p>\\n</li>\\n<li>\\n<p><strong>字符集（character set、charset）</strong></p>\\n</li>\\n<li>\\n<p><strong>字符编码（character encoding）</strong>：将字符集中的字符按一定方式编码为某指定集合中的某一对象的过程。</p>\\n</li>\\n<li>\\n<p><strong>字符编码模型（character encoding model）</strong>：反应字符编码系统的构成特点和构成部分之间相互关系的模型框架。</p>\\n<ul>\\n<li>ASCII：传统字符编码模型。将字符集中的字符进行编号，编号就是该字符的编码</li>\\n<li>统一码（Unicode）、通用字符集（UCS）：现代字符编码模型</li>\\n</ul>\\n<blockquote>\\n<p>现代字符编码模型：</p>\\n<ol>\\n<li>有哪些字符</li>\\n<li>这些字符的编号是什么</li>\\n<li>这些编号如何编码成一系列逻辑层面有限大小的数字，即<strong>码元序列</strong></li>\\n<li>这些逻辑层面的码元序列如何转换为（即映射为）物理层面的<strong>字节序列（即字节流）</strong></li>\\n<li>在某些特殊的传输环境中（比如Email中），再进一步将字节序列进行适应性编码处理</li>\\n</ol>\\n<p>&nbsp;</p>\\n<p>核心思想：创建一个能够用<strong>不同方式</strong>来编码的<strong>通用</strong>字符集</p>\\n</blockquote>\\n</li>\\n</ul>"}');
export {
  Chapter1_html as comp,
  data
};
