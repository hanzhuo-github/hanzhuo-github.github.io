import { r as resolveComponent, c as createElementBlock, d as createVNode, b as createStaticVNode, o as openBlock } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Catalog = resolveComponent("Catalog");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_Catalog),
    _cache[0] || (_cache[0] = createStaticVNode('<p><a href="https://go.dev/wiki/" target="_blank" rel="noopener noreferrer">Go Wiki</a></p><p>可以通过 <code>go env</code> 命令查看环境变量：</p><table><thead><tr><th style="text-align:left;">环境变量</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">GOROOT</td><td style="text-align:left;">Go 语言编译工具、标准库等的安装路径</td></tr><tr><td style="text-align:left;">GOPATH</td><td style="text-align:left;">Go 的工作目录，即编译后的二进制文件的存放目录和 import 包时的搜索路径</td></tr><tr><td style="text-align:left;">GOPROXY</td><td style="text-align:left;">Go 包下载代理服务器，以便能够使用 <code>go get</code> 下载。direct：当 go 在获得目标 module 遇到 404 错误时，就直接去对应 module 的源头（如 github）获取，而非通过代理服务器。</td></tr><tr><td style="text-align:left;">GOSUMDB</td><td style="text-align:left;">它的值是一个 web 服务器，默认是 sum.golang.org。用老查询依赖包指定版本的哈希值，保证拉取到的模块版本数据未经过篡改。</td></tr></tbody></table>', 3))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/pl/go/","title":"Go","lang":"zh-CN","frontmatter":{"title":"Go","index":false,"article":false},"headers":[],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":0.62,"words":185},"filePathRelative":"pl/go/index.md","localizedDate":"2024年12月24日","excerpt":""}');
export {
  index_html as comp,
  data
};
