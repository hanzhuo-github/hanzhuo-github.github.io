import { c as createElementBlock, b as createStaticVNode, f as createBaseVNode, g as createTextVNode, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/images/code/ds/AdjacencyList.webp";
const _sfc_main = {};
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_2 = {
  style: { "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.215ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2305 1000",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_4 = {
  style: { "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.226ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2310 1000",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_6 = {
  style: { "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "9.72ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 4296.4 1000",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_8 = {
  style: { "vertical-align": "-0.312ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "10.382ex",
  height: "1.857ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 4589 821",
  "aria-hidden": "true"
};
const _hoisted_9 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_10 = {
  style: { "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.215ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2305 1000",
  "aria-hidden": "true"
};
const _hoisted_11 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_12 = {
  style: { "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.226ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2310 1000",
  "aria-hidden": "true"
};
const _hoisted_13 = {
  class: "MathJax",
  jax: "SVG",
  style: { "position": "relative" }
};
const _hoisted_14 = {
  style: { "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.215ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2305 1000",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _cache[26] || (_cache[26] = createStaticVNode('<ul><li>顶点（vertex）</li><li>边（edge）</li><li>顶点的度（degree）：与顶点相连接的边的条数 <ul><li>出度（Out-degree）、入度（In-degree）</li></ul></li><li>有向图、无向图</li><li>带权图（weighted graph）：带权图中的每条边都有一个权重（weight）</li><li>连通图（Connected Graph）：在一个无向图中，任意两个顶点之间都存在至少一条路径（即，从图中的任意一个顶点出发，能够通过边到达图中的其他任意顶点） <ul><li>无向连通图：如果在无向图中，任意两个顶点都可以通过若干条边直接或间接连通，则称该图为无向连通图</li><li>强连通图（Strongly Connected Graph）：在有向图中，若从任意一个顶点都可以通过有向边到达其他顶点，并且其他顶点也可以通过有向边返回到这个顶点，则称该图为强连通图</li><li>弱连通图（Weakly Connected Graph）：在有向图中，若将图中所有边的方向忽略后（即视为无向图），任意两个顶点仍然可以连通，则称该图为弱连通图</li></ul></li></ul><h2 id="_1-图的存储" tabindex="-1"><a class="header-anchor" href="#_1-图的存储"><span>1. 图的存储</span></a></h2><h3 id="_1-1-邻接矩阵" tabindex="-1"><a class="header-anchor" href="#_1-1-邻接矩阵"><span>1.1 邻接矩阵</span></a></h3><p>邻接矩阵（Adjacency Matrix）底层依赖二维数组。</p><p>对于无向图，如果顶点 i 和顶点 j 之间有边，那么就将 A[i][j] 标记为 1；对于有向图，如果有一条从顶点 i 指向顶点 j 的边，那么就将 A[i][j] 标记为 1。带权图对应的数组元素值为权重。</p><p>优点：存储方式简单直接；方便计算，可以将图的运算转换成矩阵之间的运算，如求最短路径时提到的<a href="https://zh.wikipedia.org/wiki/Floyd-Warshall%E7%AE%97%E6%B3%95" target="_blank" rel="noopener noreferrer">Floyd-Warshall 算法</a>就是利用矩阵循环相乘若干次得到的结果。</p><p>缺点：浪费空间。无向图是对称矩阵，只需一半空间就够了。对于稀疏图（Sparse Matrix），使用邻接矩阵就更浪费空间了。</p><h3 id="_1-2-邻接表" tabindex="-1"><a class="header-anchor" href="#_1-2-邻接表"><span>1.2 邻接表</span></a></h3><p>下图是一个有向图的邻接表（Adjacency List）和逆邻接表。每个顶点有一条链表，链表中存储的是与这个顶点相连的其他顶点。</p><p>有向图中，链表存储的是指向的顶点；无向图中，链表存储的是与这个顶点有边相连的顶点。</p><div align="center"><img src="' + _imports_0 + '" width="70%/"></div><p>优点：节省空间。</p><p>缺点：使用起来比较耗时，查询两个顶点之间的关系没有邻接矩阵那么高效（要想判断是否存在某个边，需要到对应顶点的链表中遍历）；链表对缓存不友好。</p><p>邻接表长得很像散列。在介绍散列表时提到过，如果是基于链表法解决冲突的散列，链表过长时，为了提高查找效率，可以将链表换成其他更高效的数据结构，如平衡二叉查找树等。可以将邻接表中国的链表改成平衡二叉查找树（实际开发中可以选择红黑树）。</p><p>邻接表在使用时可以将链表换成更高效的动态数据结构，如二叉查找树、跳表、散列表等。</p><h2 id="_2-深度和广度优先搜索" tabindex="-1"><a class="header-anchor" href="#_2-深度和广度优先搜索"><span>2. 深度和广度优先搜索</span></a></h2><p>图的表达能力很强，大部分涉及到搜索的场景都可以抽象成图。</p><p>广度优先搜索和深度优先搜索是图上的两种最常用、最基本的搜索算法，比起其他高级的搜索算法，比如 A*、IDA* 等，要简单粗暴，没有什么优化，所以，也被叫作暴力搜索算法。所以，这两种搜索算法仅适用于状态空间不大，也就是说图不大的搜索。</p>', 18)),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("它们的时间复杂度都是 ")),
      createBaseVNode("mjx-container", _hoisted_1, [
        (openBlock(), createElementBlock("svg", _hoisted_2, _cache[0] || (_cache[0] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g><g data-mml-node="mo" transform="translate(1916,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g>', 1)
        ]))),
        _cache[1] || (_cache[1] = createBaseVNode(
          "mjx-assistive-mml",
          {
            unselectable: "on",
            display: "inline"
          },
          [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "O"),
              createBaseVNode("mo", { stretchy: "false" }, "("),
              createBaseVNode("mi", null, "E"),
              createBaseVNode("mo", { stretchy: "false" }, ")")
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      _cache[5] || (_cache[5] = createTextVNode("，空间复杂度都是 ")),
      createBaseVNode("mjx-container", _hoisted_3, [
        (openBlock(), createElementBlock("svg", _hoisted_4, _cache[2] || (_cache[2] = [
          createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D449" d="M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"></path></g><g data-mml-node="mo" transform="translate(1921,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g>', 1)
        ]))),
        _cache[3] || (_cache[3] = createBaseVNode(
          "mjx-assistive-mml",
          {
            unselectable: "on",
            display: "inline"
          },
          [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mi", null, "O"),
              createBaseVNode("mo", { stretchy: "false" }, "("),
              createBaseVNode("mi", null, "V"),
              createBaseVNode("mo", { stretchy: "false" }, ")")
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      _cache[6] || (_cache[6] = createTextVNode("。"))
    ]),
    _cache[27] || (_cache[27] = createStaticVNode('<p>下面针对无向图、邻接表展开。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Graph</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>v <span class="token operator">=</span> v<span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>adj <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> v <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// 无向图，要存两次</span></span>\n<span class="line">    adj<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    adj<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token comment">// 递归打印从 s-&gt;t 的路径，prev 中存放路径</span></span>\n<span class="line">  <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> t <span class="token operator">!==</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> s<span class="token punctuation">,</span> prev<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-广度优先搜索-bfs" tabindex="-1"><a class="header-anchor" href="#_2-1-广度优先搜索-bfs"><span>2.1 广度优先搜索（BFS）</span></a></h3><p>广度优先搜索（Breadth-First-Search）是一层层搜索的。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 搜索一条从 s 到 t 的路径，BFS 搜索出的路径也是最短路径</span></span>\n<span class="line"><span class="token function">bfs</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> t<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1. 记录已被访问的顶点</span></span>\n<span class="line">  visited<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 2. 已被访问、但相连顶点尚未被访问的顶点</span></span>\n<span class="line">  <span class="token keyword">const</span> prev <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3. 记录搜索路径（反向，从2访问3，那么prev[3]=2）</span></span>\n<span class="line"></span>\n<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> w <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adj<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adj<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>q<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        prev<span class="token punctuation">[</span>q<span class="token punctuation">]</span> <span class="token operator">=</span> w<span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>q <span class="token operator">===</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> s<span class="token punctuation">,</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">          <span class="token keyword">return</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">        visited<span class="token punctuation">[</span>q<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>\n<span class="line">        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 5)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[13] || (_cache[13] = createTextVNode("时间复杂度：最坏情况下，t 距离 s 很远，要遍历整个图才能找到。这时，所有顶点都要进出一遍队列，每个边都会被访问一次。所以广度优先搜索的时间复杂度是 ")),
          createBaseVNode("mjx-container", _hoisted_5, [
            (openBlock(), createElementBlock("svg", _hoisted_6, _cache[7] || (_cache[7] = [
              createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D449" d="M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"></path></g><g data-mml-node="mo" transform="translate(2143.2,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path></g><g data-mml-node="mi" transform="translate(3143.4,0)"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g><g data-mml-node="mo" transform="translate(3907.4,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g>', 1)
            ]))),
            _cache[8] || (_cache[8] = createBaseVNode(
              "mjx-assistive-mml",
              {
                unselectable: "on",
                display: "inline"
              },
              [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ])
              ],
              -1
              /* HOISTED */
            ))
          ]),
          _cache[14] || (_cache[14] = createTextVNode("。对于连通图，")),
          createBaseVNode("mjx-container", _hoisted_7, [
            (openBlock(), createElementBlock("svg", _hoisted_8, _cache[9] || (_cache[9] = [
              createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g><g data-mml-node="mo" transform="translate(1041.8,0)"><path data-c="2265" d="M83 616Q83 624 89 630T99 636Q107 636 253 568T543 431T687 361Q694 356 694 346T687 331Q685 329 395 192L107 56H101Q83 58 83 76Q83 77 83 79Q82 86 98 95Q117 105 248 167Q326 204 378 228L626 346L360 472Q291 505 200 548Q112 589 98 597T83 616ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path></g><g data-mml-node="mi" transform="translate(2097.6,0)"><path data-c="1D449" d="M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"></path></g><g data-mml-node="mo" transform="translate(3088.8,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g data-mml-node="mn" transform="translate(4089,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></g></g>', 1)
            ]))),
            _cache[10] || (_cache[10] = createBaseVNode(
              "mjx-assistive-mml",
              {
                unselectable: "on",
                display: "inline"
              },
              [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mo", null, "≥"),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mn", null, "1")
                ])
              ],
              -1
              /* HOISTED */
            ))
          ]),
          _cache[15] || (_cache[15] = createTextVNode("，所以 BFS 的时间复杂度也可以简写为 ")),
          createBaseVNode("mjx-container", _hoisted_9, [
            (openBlock(), createElementBlock("svg", _hoisted_10, _cache[11] || (_cache[11] = [
              createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g><g data-mml-node="mo" transform="translate(1916,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g>', 1)
            ]))),
            _cache[12] || (_cache[12] = createBaseVNode(
              "mjx-assistive-mml",
              {
                unselectable: "on",
                display: "inline"
              },
              [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ])
              ],
              -1
              /* HOISTED */
            ))
          ]),
          _cache[16] || (_cache[16] = createTextVNode("。"))
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[19] || (_cache[19] = createTextVNode("空间复杂度：主要存在三个辅助变量，visited 数组、queue 队列、prev 数组，它们的存储空间大小都不会超过顶点个数。所以空间复杂度是 ")),
          createBaseVNode("mjx-container", _hoisted_11, [
            (openBlock(), createElementBlock("svg", _hoisted_12, _cache[17] || (_cache[17] = [
              createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D449" d="M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"></path></g><g data-mml-node="mo" transform="translate(1921,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g>', 1)
            ]))),
            _cache[18] || (_cache[18] = createBaseVNode(
              "mjx-assistive-mml",
              {
                unselectable: "on",
                display: "inline"
              },
              [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ])
              ],
              -1
              /* HOISTED */
            ))
          ]),
          _cache[20] || (_cache[20] = createTextVNode("。"))
        ])
      ])
    ]),
    _cache[28] || (_cache[28] = createStaticVNode('<h3 id="_2-2-深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#_2-2-深度优先搜索-dfs"><span>2.2 深度优先搜索（DFS）</span></a></h3><p>深度优先搜索（Depth-First-Search）是沿着一条路径一直走，直到不能走再退回上一层。</p><blockquote><p>回溯思想</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">found <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>  <span class="token comment">// 全局变量或者类成员变量</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>found <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">const</span> prev <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">recurDfs</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> t<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> prev<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> s<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">recurDfs</span><span class="token punctuation">(</span><span class="token parameter">w<span class="token punctuation">,</span> t<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> prev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>found<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>\n<span class="line">  visited<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>w <span class="token operator">===</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>found <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adj<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adj<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>q<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      prev<span class="token punctuation">[</span>q<span class="token punctuation">]</span> <span class="token operator">=</span> w<span class="token punctuation">;</span></span>\n<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">recurDfs</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> t<span class="token punctuation">,</span> visited<span class="token punctuation">,</span> prev<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 4)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _cache[23] || (_cache[23] = createTextVNode("时间复杂度：每条边最多被访问两次（一次遍历、一次回退）。所以时间复杂度是 ")),
          createBaseVNode("mjx-container", _hoisted_13, [
            (openBlock(), createElementBlock("svg", _hoisted_14, _cache[21] || (_cache[21] = [
              createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g><g data-mml-node="mo" transform="translate(1916,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g>', 1)
            ]))),
            _cache[22] || (_cache[22] = createBaseVNode(
              "mjx-assistive-mml",
              {
                unselectable: "on",
                display: "inline"
              },
              [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ])
              ],
              -1
              /* HOISTED */
            ))
          ]),
          _cache[24] || (_cache[24] = createTextVNode("。"))
        ])
      ]),
      _cache[25] || (_cache[25] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("p", null, "空间复杂度：主要是 visited 数组、prev 数组、递归调用站。visited 数组和 prev 数组和顶点数成正比，递归调用栈的最大深度不超过顶点个数。所以总的空间复杂度是 $O(V)。")
        ],
        -1
        /* HOISTED */
      ))
    ])
  ]);
}
const _13Graph_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "13-graph.html.vue"]]);
const data = JSON.parse('{"path":"/coding/data-structure/13-graph.html","title":"图","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"图","description":null,"article":false,"date":"2023-10-24T00:00:00.000Z","order":13},"headers":[{"level":2,"title":"1. 图的存储","slug":"_1-图的存储","link":"#_1-图的存储","children":[{"level":3,"title":"1.1 邻接矩阵","slug":"_1-1-邻接矩阵","link":"#_1-1-邻接矩阵","children":[]},{"level":3,"title":"1.2 邻接表","slug":"_1-2-邻接表","link":"#_1-2-邻接表","children":[]}]},{"level":2,"title":"2. 深度和广度优先搜索","slug":"_2-深度和广度优先搜索","link":"#_2-深度和广度优先搜索","children":[{"level":3,"title":"2.1 广度优先搜索（BFS）","slug":"_2-1-广度优先搜索-bfs","link":"#_2-1-广度优先搜索-bfs","children":[]},{"level":3,"title":"2.2 深度优先搜索（DFS）","slug":"_2-2-深度优先搜索-dfs","link":"#_2-2-深度优先搜索-dfs","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":5.24,"words":1573},"filePathRelative":"coding/data-structure/13-graph.md","localizedDate":"2023年10月24日","excerpt":"<ul>\\n<li>顶点（vertex）</li>\\n<li>边（edge）</li>\\n<li>顶点的度（degree）：与顶点相连接的边的条数\\n<ul>\\n<li>出度（Out-degree）、入度（In-degree）</li>\\n</ul>\\n</li>\\n<li>有向图、无向图</li>\\n<li>带权图（weighted graph）：带权图中的每条边都有一个权重（weight）</li>\\n<li>连通图（Connected Graph）：在一个无向图中，任意两个顶点之间都存在至少一条路径（即，从图中的任意一个顶点出发，能够通过边到达图中的其他任意顶点）\\n<ul>\\n<li>无向连通图：如果在无向图中，任意两个顶点都可以通过若干条边直接或间接连通，则称该图为无向连通图</li>\\n<li>强连通图（Strongly Connected Graph）：在有向图中，若从任意一个顶点都可以通过有向边到达其他顶点，并且其他顶点也可以通过有向边返回到这个顶点，则称该图为强连通图</li>\\n<li>弱连通图（Weakly Connected Graph）：在有向图中，若将图中所有边的方向忽略后（即视为无向图），任意两个顶点仍然可以连通，则称该图为弱连通图</li>\\n</ul>\\n</li>\\n</ul>"}');
export {
  _13Graph_html as comp,
  data
};
