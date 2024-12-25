import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, f as createBaseVNode, g as createTextVNode, d as createVNode, e as withCtx, o as openBlock } from "./app-BhCVjEdW.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/images/go/go-tools.webp";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouteLink = resolveComponent("RouteLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createStaticVNode('<blockquote><p>原文：<a href="https://time.geekbang.com/column/article/384648?utm_campaign=geektime_search&amp;utm_content=geektime_search&amp;utm_medium=geektime_search&amp;utm_source=geektime_search&amp;utm_term=geektime_search" target="_blank" rel="noopener noreferrer">设计方法：如何写出优雅的 Go 项目</a></p></blockquote><h2 id="_1-语义化版本规范-semver-semantic-versioning" tabindex="-1"><a class="header-anchor" href="#_1-语义化版本规范-semver-semantic-versioning"><span>1 语义化版本规范（SemVer, Semantic Versioning）</span></a></h2><p>格式为：<code>主版本号.次版本号.修订号</code></p><ul><li>主版本号（Major）：做了不兼容的 API 修改。带有 BREAKING CHANGE 的 commit 可以将主版本号 +1。</li><li>次版本号（Minor）：做了向下兼容的功能性新增及修改。一般偶数为稳定版本，奇数为开发版本。feat 类型的 commit 可将次版本号 +1。</li><li>修订号（Patch）：当做了向下兼容的问题修正。fix 类型的 commit，可将修订号 +1。</li></ul><h2 id="_2-commit-message-规范" tabindex="-1"><a class="header-anchor" href="#_2-commit-message-规范"><span>2 Commit Message 规范</span></a></h2>', 5)),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("参考 ")),
      createVNode(_component_RouteLink, { to: "/front-end/configuration/3-commit-message.html" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("Commit Message")
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _cache[8] || (_cache[8] = createStaticVNode('<p>Commit Message 规范自动化的工具：</p><ul><li><a href="https://github.com/lintingzhen/commitizen-go" target="_blank" rel="noopener noreferrer">commitizen-go</a>：使你进入交互模式，并根据提示生成 Commit Message，然后提交。</li><li>commit-msg：githooks，在 commit-msg 中，指定检查的规则，commit-msg 是个脚本，可以根据需要自己写脚本实现。</li><li><a href="https://github.com/llorllale/go-gitlint" target="_blank" rel="noopener noreferrer">go-gitlint</a>：检查历史提交的 Commit Message 是否符合 Angular 规范，可以将该工具添加在 CI 流程中，确保 Commit Message 都是符合规范的。</li><li><a href="https://github.com/arnaud-deprez/gsemver" target="_blank" rel="noopener noreferrer">gsemver</a>：语义化版本自动生成工具。</li><li><a href="https://github.com/git-chglog/git-chglog" target="_blank" rel="noopener noreferrer">git-chglog</a>：根据 Commit Message 生成 CHANGELOG。</li></ul><h2 id="_3-目录结构" tabindex="-1"><a class="header-anchor" href="#_3-目录结构"><span>3 目录结构</span></a></h2><p>Go 社区推荐的结构化目录结构是 <a href="https://github.com/golang-standards/project-layout/blob/master/README_zh.md" target="_blank" rel="noopener noreferrer">project-layout</a>。</p><h2 id="_4-代码规范" tabindex="-1"><a class="header-anchor" href="#_4-代码规范"><span>4 代码规范</span></a></h2><p><a href="https://github.com/xxjwxc/uber_go_guide_cn" target="_blank" rel="noopener noreferrer">Uber Go 语言编码规范</a></p><p>Go 语言静态代码检查工具：<a href="https://github.com/golangci/golangci-lint" target="_blank" rel="noopener noreferrer">golangci-lint</a></p><p>Go 语言最佳实践：</p><ul><li><a href="https://go.dev/doc/effective_go" target="_blank" rel="noopener noreferrer">Effective Go</a></li><li><a href="https://go.dev/wiki/CodeReviewComments" target="_blank" rel="noopener noreferrer">Go Code Review Comments</a></li><li><a href="https://rakyll.org/style-packages/" target="_blank" rel="noopener noreferrer">Styling guideline for Go packages</a></li></ul><h2 id="_5-单元测试" tabindex="-1"><a class="header-anchor" href="#_5-单元测试"><span>5 单元测试</span></a></h2><p>单元测试环境：1）可能无法连接数据库；2）可能无法访问第三方服务。如果要测试的函数依赖数据库或第三方服务，那么在单元测试环境下就不可测了。解决方法也很简单，将依赖的数据库或第三方服务抽象成接口，在被测代码中调用接口的方法，测试时传入 mock 类型，从而将数据库、第三方服务等依赖从具体的被测函数中解耦出去。</p><p>常用的 Mock 工具：</p><ul><li><a href="https://github.com/golang/mock" target="_blank" rel="noopener noreferrer">golang/mock</a>：官方 Mock 框架。提供了 mockgen 工具来生成 interface 对应的 Mock 源文件。</li><li><a href="https://github.com/DATA-DOG/go-sqlmock" target="_blank" rel="noopener noreferrer">sqlmock</a>：模拟数据库连接。</li><li><a href="https://github.com/jarcoal/httpmock" target="_blank" rel="noopener noreferrer">httpmock</a></li><li><a href="https://github.com/bouk/monkey" target="_blank" rel="noopener noreferrer">bouk/monkey</a>：能够通过替换函数指针的方式来修改任意函数的实现。</li></ul><p>建议使用 gotests 工具自动生成单元测试代码，定期检查单元测试覆盖率：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-race</span> <span class="token parameter variable">-cover</span>  <span class="token parameter variable">-coverprofile</span><span class="token operator">=</span>./coverage.out <span class="token parameter variable">-timeout</span><span class="token operator">=</span>10m <span class="token parameter variable">-short</span> <span class="token parameter variable">-v</span> ./<span class="token punctuation">..</span>.</span>\n<span class="line">$ go tool cover <span class="token parameter variable">-func</span> ./coverage.out</span>\n<span class="line"></span></code></pre></div><h2 id="_6-编程哲学" tabindex="-1"><a class="header-anchor" href="#_6-编程哲学"><span>6 编程哲学</span></a></h2>', 16)),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode("面向接口编程（")),
      createVNode(_component_RouteLink, { to: "/coding/design-pattern/interface.html" }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode("参考")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[4] || (_cache[4] = createTextVNode("）。"))
    ]),
    _cache[9] || (_cache[9] = createStaticVNode('<p>Go 不支持面向对象编程，但可以通过语言级的特性来实现类似效果。</p><p>面相对象编程中的几个核心特性：类、实例、抽象、封装、继承、多态、构造函数、析构函数、方法重载、this 指针。在 Go 中通过一下方式来实现类似效果：</p><ul><li>类、抽象、封装：结构体 <code>struct</code>。</li><li>实例：结构体变量。</li><li>继承：组合（一个结构体嵌到另一个结构体），一个结构体包含了一个匿名结构体。</li><li>多态：接口。</li><li>构造函数、析构函数、方法重载、this 指针等：Go 为了保持语言的简洁性去掉了这些特性。</li></ul><h2 id="_7-软件设计原则" tabindex="-1"><a class="header-anchor" href="#_7-软件设计原则"><span>7 软件设计原则</span></a></h2>', 4)),
    createBaseVNode("p", null, [
      createVNode(_component_RouteLink, { to: "/coding/design-pattern/#solid-%E5%8E%9F%E5%88%99" }, {
        default: withCtx(() => _cache[5] || (_cache[5] = [
          createTextVNode("SOLID 原则")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[6] || (_cache[6] = createTextVNode("。"))
    ]),
    _cache[10] || (_cache[10] = createStaticVNode('<blockquote><p><a href="https://github.com/marmotedu/geekbang-go/blob/master/SOLID%E5%8E%9F%E5%88%99%E4%BB%8B%E7%BB%8D.md" target="_blank" rel="noopener noreferrer">SOLID 原则介绍</a></p></blockquote><h2 id="_8-高效管理项目" tabindex="-1"><a class="header-anchor" href="#_8-高效管理项目"><span>8 高效管理项目</span></a></h2><ul><li><p>使用 Makefile 管理项目</p></li><li><p>自动生成代码：</p><ul><li>错误码、错误码说明文档</li><li>自动生成缺失的 doc.go</li><li>利用 gotests 工具，自动生成单元测试用例</li><li>使用 Swagger 工具，自动生成 Swagger 文档</li><li>使用 Mock 工具，自动生成接口的 Mock 实例</li></ul></li></ul><p>Go 项目中的工具：</p><figure><img src="' + _imports_0 + '" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_9-设计模式" tabindex="-1"><a class="header-anchor" href="#_9-设计模式"><span>9 设计模式</span></a></h2><p><a href="https://time.geekbang.com/column/article/386238?utm_campaign=geektime_search&amp;utm_content=geektime_search&amp;utm_medium=geektime_search&amp;utm_source=geektime_search&amp;utm_term=geektime_search" target="_blank" rel="noopener noreferrer">Go 常用设计模式</a></p>', 7))
  ]);
}
const _1Specification_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1-specification.html.vue"]]);
const data = JSON.parse('{"path":"/pl/go/1-specification.html","title":"规范设计","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"规范设计","description":null,"article":false,"date":"2024-02-07T00:00:00.000Z","order":1},"headers":[{"level":2,"title":"1 语义化版本规范（SemVer, Semantic Versioning）","slug":"_1-语义化版本规范-semver-semantic-versioning","link":"#_1-语义化版本规范-semver-semantic-versioning","children":[]},{"level":2,"title":"2 Commit Message 规范","slug":"_2-commit-message-规范","link":"#_2-commit-message-规范","children":[]},{"level":2,"title":"3 目录结构","slug":"_3-目录结构","link":"#_3-目录结构","children":[]},{"level":2,"title":"4 代码规范","slug":"_4-代码规范","link":"#_4-代码规范","children":[]},{"level":2,"title":"5 单元测试","slug":"_5-单元测试","link":"#_5-单元测试","children":[]},{"level":2,"title":"6 编程哲学","slug":"_6-编程哲学","link":"#_6-编程哲学","children":[]},{"level":2,"title":"7 软件设计原则","slug":"_7-软件设计原则","link":"#_7-软件设计原则","children":[]},{"level":2,"title":"8 高效管理项目","slug":"_8-高效管理项目","link":"#_8-高效管理项目","children":[]},{"level":2,"title":"9 设计模式","slug":"_9-设计模式","link":"#_9-设计模式","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":3.34,"words":1002},"filePathRelative":"pl/go/1-specification.md","localizedDate":"2024年2月7日","excerpt":"<blockquote>\\n<p>原文：<a href=\\"https://time.geekbang.com/column/article/384648?utm_campaign=geektime_search&amp;utm_content=geektime_search&amp;utm_medium=geektime_search&amp;utm_source=geektime_search&amp;utm_term=geektime_search\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">设计方法：如何写出优雅的 Go 项目</a></p>\\n</blockquote>"}');
export {
  _1Specification_html as comp,
  data
};
