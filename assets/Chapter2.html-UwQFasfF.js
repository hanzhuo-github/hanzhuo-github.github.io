import { c as createElementBlock, b as createStaticVNode, f as createBaseVNode, g as createTextVNode, o as openBlock } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_2 = {
  style: { "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.119ex",
  height: "1.903ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -841 936.6 841",
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
  width: "2.119ex",
  height: "1.887ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 936.6 833.9",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createStaticVNode('<p>本系列文章是对<a href="https://www.zhihu.com/column/paogenjiudi" target="_blank" rel="noopener noreferrer">知乎专栏「刨根问底字符编码」</a> 的学习记录。</p><h2 id="_1-ebcdic-码与-ascii-码" tabindex="-1"><a class="header-anchor" href="#_1-ebcdic-码与-ascii-码"><span>1 EBCDIC 码与 ASCII 码</span></a></h2><h3 id="_1-1-ebcdic-码" tabindex="-1"><a class="header-anchor" href="#_1-1-ebcdic-码"><span>1.1 EBCDIC 码</span></a></h3><p>EBCDIC（Extended Binary Coded Decimal Interchange Code，扩展二进制编码的十进制交换码）：1964 年，IBM 为大型机操作系统而开发设计的。英文字母的排列是不连续的，这带来了一些困扰和麻烦。</p><h3 id="_1-2-ascii-字符编码方案简介" tabindex="-1"><a class="header-anchor" href="#_1-2-ascii-字符编码方案简介"><span>1.2 ASCII 字符编码方案简介</span></a></h3><p>ASCII（American Standard Code for Information Interchange，美国信息交换标准码）：后来 IBM 的个人计算机和工作站操作系统采用了 ASCII 码，后来称为了英文字符编码工业标准。</p><blockquote><p>由美国国家标准学会 ANSI（American National Standard Institute）于 1968 年正式制定</p><p>1972 年被 ISO/IEC 采用，，制定为 ISO/IEC 646 标准</p></blockquote>', 7)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[2] || (_cache[2] = createTextVNode("7 位二进制表示一个字符，总共 128 （")),
          createBaseVNode("mjx-container", _hoisted_1, [
            (openBlock(), createElementBlock("svg", _hoisted_2, _cache[0] || (_cache[0] = [
              createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"></path></g></g></g></g></g>', 1)
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
                      createBaseVNode("mn", null, "7")
                    ])
                  ])
                ])
              ],
              -1
              /* HOISTED */
            ))
          ]),
          _cache[3] || (_cache[3] = createTextVNode("）个字符。"))
        ]),
        _cache[4] || (_cache[4] = createBaseVNode(
          "p",
          null,
          "计算机普遍采用 8 位作为一个字节来进行存取与处理，因此剩下最高位的那 1 比特一般为 0，但有时在一些通讯系统中也被用作奇偶校验位。",
          -1
          /* HOISTED */
        ))
      ]),
      _cache[5] || (_cache[5] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "4 类字符"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "0~31：不可显示不可打印的控制字符或通讯专用字符。如 0x07（BEL 响铃）会让计算机发出哔的一声、0x00（NUL 空，注意不是空格）通常用于指示字符串的结束、0x0D（CR 回车）和 0x0A（LF 换行）用于指示打印机的打印针头退到行首（即回车）并移到下一行（即换行）等")
          ]),
          createBaseVNode("blockquote", null, [
            createBaseVNode("p", null, "注：将这些用于控制或通讯的控制字符或通讯专用字符称之为“字符”，感觉上似乎有点怪，实际上这些所谓的“字符”表示的其实是一种动作或行为，因此才既不可显示也不可能打印。")
          ]),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createBaseVNode("p", null, "32：可显示但不可打印的空格字符")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("p", null, "33~126：可显示可打印字符，其中 48~57 为 0-9 的阿拉伯数字，65~90 为 26 个大写英文字母，97~122 为 26 个小写英文字母，其余的是一些标点符号、运算符号等")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("p", null, "127：不可显示不可打印的控制字符 DEL")
            ])
          ])
        ],
        -1
        /* HOISTED */
      ))
    ]),
    _cache[11] || (_cache[11] = createBaseVNode(
      "h2",
      {
        id: "_2-eascii-及-iso-8859-字符编码方案",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_2-eascii-及-iso-8859-字符编码方案"
        }, [
          createBaseVNode("span", null, "2 EASCII 及 ISO 8859 字符编码方案")
        ])
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[8] || (_cache[8] = createTextVNode("计算出现后，逐渐从美国发展到了欧洲。除了最基本的美国使用的那 128 个 ASCII 码之外，还有很多衍生的拉丁字母等字符。考虑到一个字节能够表示的编码实际上有 256（")),
      createBaseVNode("mjx-container", _hoisted_3, [
        (openBlock(), createElementBlock("svg", _hoisted_4, _cache[6] || (_cache[6] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z"></path></g></g></g></g></g>', 1)
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
              ])
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      _cache[9] || (_cache[9] = createTextVNode("）个，于是欧洲各国纷纷打起了后面 128 个编码的主意。"))
    ]),
    _cache[12] || (_cache[12] = createStaticVNode('<p>各国对于 0x80 ~ 0xFF 的设计各自为政，形成了多个 ANSI 编码方案。为了统一这种混乱局面，又先后设计了两套统一的技能兼容 ASCII 码、又支持各国所使用的那些衍生字段的单字节编码方案：EASCII（Extended ASCII）和 ISO/IEC8859。</p><h3 id="_2-1-eascii" tabindex="-1"><a class="header-anchor" href="#_2-1-eascii"><span>2.1 EASCII</span></a></h3><p>将 ASCII 中闲置的最高位利用起来。当第一个比特位为 0 时，仍然表示之前的 ASCII 字符；当第一个比特位为 1 时，表示补充扩展的其他衍生字符。</p><p>现在 EASCII 码基本上被废弃了，它容纳的字符太少，国际化和标准化程度不够。目前已经被 ISO/IEC 8859 字符编码方案取代了。</p><h3 id="_2-2-iso-iec-8859" tabindex="-1"><a class="header-anchor" href="#_2-2-iso-iec-8859"><span>2.2 ISO/IEC 8859</span></a></h3><p>和 EASCII 一样，ISO/IEC 8859 也是在 ASCII 码的基础上利用了最高位，即扩展剩余的 128 位。但实际上只有 0xA0~0xFF （十进制 160~255）这 96 个编码定义了字符。</p><p>与 ASCII、EASCII 字符编码方案只包括单个独立的字符集不同，ISO/IEC 8859 字符编码方案包括了一组字符集，或者说 ISO/IEC 8859 相当于是一组字符集的总称，其内共包含了 15 个字符集，即 ISO/IEC 8859-n，n=1、2、3...15、16，其中 12 未定义，所以实际上共 15 个。这 15 个字符集大致上包括了欧洲各国所使用到的字符。</p><p>目前使用最为普遍的是 ISO/IEC 8859-1 （也称 Latin-1）字符集，收录了西欧常用字符（包括德法两国的字母）。</p><h2 id="_3-简体汉字编码方案-gbk2312、gbk-等" tabindex="-1"><a class="header-anchor" href="#_3-简体汉字编码方案-gbk2312、gbk-等"><span>3. 简体汉字编码方案（GBK2312、GBK 等）</span></a></h2><h3 id="_3-1-背景" tabindex="-1"><a class="header-anchor" href="#_3-1-背景"><span>3.1 背景</span></a></h3><p>中文汉字多达 10 万+，而一个字节只能表示 256 个字符，所以只能使用多个字节来表示一个字符。</p><p>在 GB（汉语“国标”首字母）系列编码方案中，如果一个字节是 0~127，那么这个字节的含义与 ASCII 码相同，否则，这个字节和下个字节共同组成汉字（或其他字符）。</p><p>GB2312 是最早的 GB 编码方案，收录的汉字不足 1 万，基本满足日常需要，但不包括生僻字，于是后来又进行了扩展。</p><p>GBK 是在 GB2312 上扩展后的字符集，K 指扩展。</p><p>GB18030 是在 GBK 基础上进行进一步扩展得到的，加入了少数民族的文字，一些生僻字被编到了 4 字节。</p><p>上述三个 GB 系列编码方案每次扩展都完全保留之前版本的编码，即每个新版本都向下兼容。</p><p>多字节字符与 ASCII 码混用时，有 2 种处理方式：</p><ul><li>将 ASCII 重新编码为多字节，以便与其他多字节字符统一。如 UTF-16、UTF-32 等。</li><li>保持 ASCII 字符为单字节编码，将其他多字节字符编码中的各个字节的最高位设为 1，以避免与 ASCII 码（首位为 0）冲突。如 GB、UTF-8。</li></ul><p>UTF-16、UTF-32 是多字节编码，采用的是<strong>多字节码元</strong>，UTF-8 虽然也是多字节编码，但采用的是单字节码元。GB 系列虽然除 ASCII 字符外的其余字符位多字节编码，但采用的是<strong>单字节码元</strong>，由于历史原因，又进一步引发了更为麻烦的字节序（Byte-Order）问题。</p><h3 id="_3-2-gb2312" tabindex="-1"><a class="header-anchor" href="#_3-2-gb2312"><span>3.2 GB2312</span></a></h3><p>GB2312 是双字节编码，前一字节为高字节，后面的为低字节。一个汉字的编码（即汉字内码）的字节，其值必须大于 127（即最高位为 1），并且必须是 2 个大于 127 的字节连在一起共同表示一个汉字。</p><p>GB2312 标准共收录 6763 个汉字，其中一级汉字 3755 个，二级汉字 3008 个；同时，除了汉字，GB2312 还收录了包括拉丁字母、希腊字母、日文平假名及片假名字符、俄语西里尔字母在内的 682 个字符。</p><p>可能是出于显示上视觉美观的考虑，这 682 个字符中还包括了 ASCII 里本来就有的数字、标点、字母等字符。即对 ASCII 码中原本就有的单字节编码的字符，又编入了 2 个字节长的 GB2312 编码版本。这些双字符编码字符就是<strong>全角</strong>字符，他们对应的单字节编码的 ASCII 字符就是<strong>半角</strong>字符。</p><h3 id="_3-3-gbk" tabindex="-1"><a class="header-anchor" href="#_3-3-gbk"><span>3.3 GBK</span></a></h3><p>GBK 只要求高字节大于 127 就表示这是一个汉字的开始。向后完全兼容 GB1212，还支持 GB1212-1980 不支持的部分中文简体、中文繁体、日文。共收录汉字 21003 个、符号 883 个，并提供 1894 个 造字码位，简、繁体字融于一体。</p><p>微软的 CP936 通常被视为等同于 GBK。但 GBK 定义的字符较 CP936 多出了 95 个（15 个非汉字及 80 个汉字）。</p><h3 id="_3-4-gb18030" tabindex="-1"><a class="header-anchor" href="#_3-4-gb18030"><span>3.4 GB18030</span></a></h3><p>中国国家质量技术监督局于 2000 年 3 月 17 日推出了 GB18030-2000 标准，以取代 GBK。GB18030-2000 除保留全部 GBK 编码汉字之外，在第二字节再度进行扩展，增加了大约一百个汉字及四位元组编码空间。</p><p>2005 年，GB18030 编码方案在 GB18030-2000 的基础上又进行了扩充，于是又有了 GB18030-2005《信息技术中文编码字符集》。</p><p>GB18030-2000 是 GBK 的升级版本，它的主要特点是在 GBK 基础上增加了 CJK 中日韩统一表意文字扩充 A 的汉字；而 GB18030-2005 的主要特点是在 GB18030-2000 基础上又增加了 CJK 中日韩统一表意文字扩充 B 的汉字。</p><p>微软也为 GB18030 定义了专门的代码页：CP54936，但是这个代码页实际上并没有真正使用。</p><h3 id="_3-5-小结" tabindex="-1"><a class="header-anchor" href="#_3-5-小结"><span>3.5 小结</span></a></h3><p>GB 类字符集均属于双字节字符集 DBCS（Double Byte Character Set）。基于 DBCS 的编码方案里，最大的特点是两字节长的中文字符和一字节长的英文字符（ASCII 字符）完全兼容，可以并存于同一个文件内。</p><p>使用 GB 类编码方案时一般都要时刻记住：一个汉字由两个字节组成（即一个汉字占用的存储空间相当于两个英文字符所占用的存储空间）。</p>', 34))
  ]);
}
const Chapter2_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Chapter2.html.vue"]]);
const data = JSON.parse('{"path":"/basic/character-encoding/Chapter2.html","title":"2. 字符编码","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"2. 字符编码","description":null,"article":false,"order":2},"headers":[{"level":2,"title":"1 EBCDIC 码与 ASCII 码","slug":"_1-ebcdic-码与-ascii-码","link":"#_1-ebcdic-码与-ascii-码","children":[{"level":3,"title":"1.1 EBCDIC 码","slug":"_1-1-ebcdic-码","link":"#_1-1-ebcdic-码","children":[]},{"level":3,"title":"1.2 ASCII 字符编码方案简介","slug":"_1-2-ascii-字符编码方案简介","link":"#_1-2-ascii-字符编码方案简介","children":[]}]},{"level":2,"title":"2 EASCII 及 ISO 8859 字符编码方案","slug":"_2-eascii-及-iso-8859-字符编码方案","link":"#_2-eascii-及-iso-8859-字符编码方案","children":[{"level":3,"title":"2.1 EASCII","slug":"_2-1-eascii","link":"#_2-1-eascii","children":[]},{"level":3,"title":"2.2 ISO/IEC 8859","slug":"_2-2-iso-iec-8859","link":"#_2-2-iso-iec-8859","children":[]}]},{"level":2,"title":"3. 简体汉字编码方案（GBK2312、GBK 等）","slug":"_3-简体汉字编码方案-gbk2312、gbk-等","link":"#_3-简体汉字编码方案-gbk2312、gbk-等","children":[{"level":3,"title":"3.1 背景","slug":"_3-1-背景","link":"#_3-1-背景","children":[]},{"level":3,"title":"3.2 GB2312","slug":"_3-2-gb2312","link":"#_3-2-gb2312","children":[]},{"level":3,"title":"3.3 GBK","slug":"_3-3-gbk","link":"#_3-3-gbk","children":[]},{"level":3,"title":"3.4 GB18030","slug":"_3-4-gb18030","link":"#_3-4-gb18030","children":[]},{"level":3,"title":"3.5 小结","slug":"_3-5-小结","link":"#_3-5-小结","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":7.34,"words":2203},"filePathRelative":"basic/character-encoding/Chapter2.md","localizedDate":"2024年12月24日","excerpt":"<p>本系列文章是对<a href=\\"https://www.zhihu.com/column/paogenjiudi\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">知乎专栏「刨根问底字符编码」</a> 的学习记录。</p>\\n<h2>1 EBCDIC 码与 ASCII 码</h2>\\n<h3>1.1 EBCDIC 码</h3>\\n<p>EBCDIC（Extended Binary Coded Decimal Interchange Code，扩展二进制编码的十进制交换码）：1964 年，IBM 为大型机操作系统而开发设计的。英文字母的排列是不连续的，这带来了一些困扰和麻烦。</p>"}');
export {
  Chapter2_html as comp,
  data
};
