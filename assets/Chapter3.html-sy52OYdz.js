import { c as createElementBlock, f as createBaseVNode, g as createTextVNode, b as createStaticVNode, o as openBlock } from "./app-BO1sXcn2.js";
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
  width: "11.592ex",
  height: "2.072ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 5123.7 915.9",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("本系列文章是对"),
        createBaseVNode("a", {
          href: "https://www.zhihu.com/column/paogenjiudi",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "知乎专栏「刨根问底字符编码」"),
        createTextVNode(" 的学习记录。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createBaseVNode(
      "h2",
      {
        id: "_1-概述",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_1-概述"
        }, [
          createBaseVNode("span", null, "1. 概述")
        ])
      ],
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "p",
      null,
      "Unicode字符集的目标是涵盖目前人类使用的所有字符，并为每个字符分配一个唯一的字符编号（即码点编号、码点值）一一对应于编号空间（Code Space，即代码空间、码空间、码点空间）里的码点（Code Point，即代码点）。",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode("目前，Unicode字符集将所有字符按照使用上的频繁度，被划分为了17个平面（Plane），每个平面上的编号空间有 ")),
      createBaseVNode("mjx-container", _hoisted_1, [
        (openBlock(), createElementBlock("svg", _hoisted_2, _cache[0] || (_cache[0] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(500,0)"></path></g></g></g><g data-mml-node="mo" transform="translate(1567.9,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(2623.7,0)"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(500,0)"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(1000,0)"></path><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" transform="translate(1500,0)"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(2000,0)"></path></g></g></g>', 1)
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
                  createBaseVNode("mn", null, "16")
                ])
              ]),
              createBaseVNode("mo", null, "="),
              createBaseVNode("mn", null, "65536")
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      _cache[3] || (_cache[3] = createTextVNode(" 个码点。将来根据需要，还可扩展为更多平面。"))
    ]),
    _cache[7] || (_cache[7] = createStaticVNode('<h3 id="_1-1-bmp、sp" tabindex="-1"><a class="header-anchor" href="#_1-1-bmp、sp"><span>1.1 BMP、SP</span></a></h3><p>第 0 个平面称为基本多语言平面（BMP, Basic Multilingual Plane），简称为基本平面，平面 0，覆盖当今世界上正在使用中的常用字符。</p><p>我们平常用到的大多数常见字符，一般都是位于 BMP 平面上的。</p><p>BMP 以外的其他平面为增补平面（SP, Supplementary Plane），也称辅助平面，目前共 16 个增补平面 SP。</p><p>增补平面要么用来表示一些非常特殊的字符（比如不常用的象形文字、远古时期的文字等），多半只有专家在历史和科学领域里才会用到它们；要么被留作扩展之用，尚未被分配字符，称之为保留区。目前Unicode字符集的17个平面中尚有大量的保留区编号空间未被使用。</p><p>另外，BMP 平面中有一个私用区，也称为专用区（PUA：Private Use Area，或PUZ：Private Use Zone）：0xE000~0xF8FF（十进制 57344~63743），共6400个码点，被保留为私用，Unicode 官方未将之分配给任何 Unicode 字符，因而可根据需要由合作者之间私下协商将其分配给私有字符。</p><blockquote><p>注：Unicode 标准到目前为止实际上共定义了三个私用区：一个为如上所述的BMP中的 U+E000~U+F8FF，另外两个几乎包含了整个第 15 平面和第 16 平面，分别为 U+F0000~U+FFFFD 和 U+100000~U+10FFFD；私用区相当于是可以由 Unicode 官方之外的个人和机构自由定义字符的特殊区域，因此私用区中的同一个码点，可被分配给不同的字符，具体是哪个字符，取决于用户使用的字体文件，从而导致不同的用户由于安装了不同的字体文件，有可能所看到的私有字符也不同。</p></blockquote><div class="hint-container info"><p class="hint-container-title">代理区</p><p>BMP 中还有一个被称为代理区（Surrogate Zone）的特殊区域：0xD800-0xDFFF（十进制55296~57343），共 2048 个码点，这些码点被称之为代理码点，目的是用基本平面BMP中的两个码点“代理”表示 BMP 以外的其他增补平面 SP 中的字符。</p></div><h3 id="_1-2-码点名称" tabindex="-1"><a class="header-anchor" href="#_1-2-码点名称"><span>1.2 码点名称</span></a></h3><p>Unicode 字符集为每个字符根据其所在的码点分配了唯一的码点值（即码点编号）。同时为每个码点赋予了一个正式的名称，用 <code>U+</code> 后接十六进制数字表示，称为<strong>码点名称</strong>或<strong>字符名称</strong>。（U+0041 表示英文大写字母 A，可在<a href="https://home.unicode.org/" target="_blank" rel="noopener noreferrer">这里</a>查询</p><blockquote><p>Unicode字符集中的 U+0000~U+007F（即十进制的 0~127），跟ASCII字符集（即 ISO/IEC 646 标准）是一致的；U+0000~U+00FF（即十进制的 0~255），跟 ISO/IEC 8859-1 字符集（即Latin-1字符集）也是一致的。</p></blockquote><h2 id="_2-utf-16" tabindex="-1"><a class="header-anchor" href="#_2-utf-16"><span>2 UTF-16</span></a></h2><p>Unicode字符集的字符编码方式一开始规定，使用两个字节的码元（即16位码元）来统一表示所有的字符（即 UTF-16）。</p><p>UTF-16 是变长编码方式，每个字符编码为 16 位或 32 位（代理对）。</p><p>无论是半角的英文字母还是全角的汉字，它们都表示“1个字符”，其编码也都是“2个字节”。</p><p>Unicode 在制订 UTF-16 字符编码之处，没有考虑与任何一种现有的字符编码保持完全兼容。例如要将文本内容在 UTF-16 和 GBK 之间进行转换，只能通过查表这样低效率的办法。即便是 ASCII 字符，也属于是不完全的间接兼容或半兼容，因为 UTF-16 是两个字节表示的，不同于 ASCII 的单字节编码。于是后来又设计了 UTF-8 字符编码方式，从而实现了与 ASCII 编码的完全兼容。</p><h3 id="_2-1-代理对-surrogate-pairs" tabindex="-1"><a class="header-anchor" href="#_2-1-代理对-surrogate-pairs"><span>2.1 代理对（Surrogate Pairs）</span></a></h3><p>代理（Surrogate）是专属于 UTF-16 的机制，UTF-8 和 UTF-32 是没有代理的。</p><p>所谓代理对，就是用两个基本平面 BMP 代理区的码点（0xD800-0xDFFF）来表示一个增补平面 SP 的码点。即所有大于 0xFFFF 的码点值用 UTF-16 来编码时就会使用代理对。</p><p>第一个代理码点的取值范围为 0xD800 ~ 0xDB00，第二个代理码点的取值范围为 0xDC00 ~ 0xDFFF。</p><table><thead><tr><th style="text-align:left;">代理码元 1</th><th style="text-align:left;">代理码元 2</th></tr></thead><tbody><tr><td style="text-align:left;">1101 10pp ppxx xxxx</td><td style="text-align:left;">1101 11xx xxxx xxxx</td></tr></tbody></table><p>代理码元的前六位是固定的，将后面非固定的部分拼接起来，就是 <code>pppp xxxx xxxx xxxx xxxx</code> 共 20 位（2^20），刚好对应了 16 个增补平面中的全部码点（<code>0x1,0000 ~ 0x10,0000</code>，16 * 2^16）</p>', 22))
  ]);
}
const Chapter3_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Chapter3.html.vue"]]);
const data = JSON.parse('{"path":"/basic/character-encoding/Chapter3.html","title":"3. Unicode 编码方案","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"3. Unicode 编码方案","description":null,"article":false,"order":3},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[{"level":3,"title":"1.1 BMP、SP","slug":"_1-1-bmp、sp","link":"#_1-1-bmp、sp","children":[]},{"level":3,"title":"1.2 码点名称","slug":"_1-2-码点名称","link":"#_1-2-码点名称","children":[]}]},{"level":2,"title":"2 UTF-16","slug":"_2-utf-16","link":"#_2-utf-16","children":[{"level":3,"title":"2.1 代理对（Surrogate Pairs）","slug":"_2-1-代理对-surrogate-pairs","link":"#_2-1-代理对-surrogate-pairs","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":4.47,"words":1340},"filePathRelative":"basic/character-encoding/Chapter3.md","localizedDate":"2024年12月24日","excerpt":"<p>本系列文章是对<a href=\\"https://www.zhihu.com/column/paogenjiudi\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">知乎专栏「刨根问底字符编码」</a> 的学习记录。</p>\\n<h2>1. 概述</h2>\\n<p>Unicode字符集的目标是涵盖目前人类使用的所有字符，并为每个字符分配一个唯一的字符编号（即码点编号、码点值）一一对应于编号空间（Code Space，即代码空间、码空间、码点空间）里的码点（Code Point，即代码点）。</p>\\n<p>目前，Unicode字符集将所有字符按照使用上的频繁度，被划分为了17个平面（Plane），每个平面上的编号空间有  个码点。将来根据需要，还可扩展为更多平面。</p>"}');
export {
  Chapter3_html as comp,
  data
};
