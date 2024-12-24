import { c as createElementBlock, b as createStaticVNode, o as openBlock } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _cache[0] || (_cache[0] = [
    createStaticVNode('<p>常见的权限模型有：</p><ul><li>权限控制列表（ACL，Access Control List）</li><li>自主访问控制（DAC，Discretionary Access Control）：基于 ACL</li><li>强制访问控制（MAC，Mandatory Access Control）：基于 ACL</li><li>基于角色的访问控制（RBAC，Role-Based Access Control）：最普及</li><li>基于属性的权限验证（ABAC，Attribute-Based Access Control）：更动态</li></ul><h2 id="_1-权限控制列表-acl" tabindex="-1"><a class="header-anchor" href="#_1-权限控制列表-acl"><span>1 权限控制列表（ACL）</span></a></h2><p>ACL 是一种传统的权限控制模型，为每个资源对象维护一个权限列表，列出了哪些用户或者用户组对该对象拥有哪些操作权限。每次访问资源时，系统会根据资源的 ACL 来检查请求用户是否有相应的权限。</p><p>优点：精细控制，每个资源都有其专属的权限列表。</p><p>缺点：随着系统用户和资源数量的增长，维护 ACL 变得复杂。</p><h2 id="_2-自主访问控制-dac" tabindex="-1"><a class="header-anchor" href="#_2-自主访问控制-dac"><span>2 自主访问控制（DAC）</span></a></h2><p>DAC 是 ACL 的扩展模型，更具灵活性。在 DAC 中，资源的所有者可以自主决定哪些用户或用户组能够访问自己的资源。它基于所有权概念，资源的创建者通常自动拥有该资源的权限，并可以自由地分配这些权限。</p><p>优点：灵活，资源所有者可以随时调整权限。</p><p>缺点：容易导致权限滥用，安全性依赖于资源所有者的判断。</p><h2 id="_3-强制访问控制-mac" tabindex="-1"><a class="header-anchor" href="#_3-强制访问控制-mac"><span>3 强制访问控制（MAC）</span></a></h2><p>MAC 也是 ACL 的扩展模型，它更加严格，安全性更高，由系统根据预定义的安全策略和数据分类自动决定用户对资源的访问权限。<strong>用户和资源</strong>都被分配不同的安全标签，系统根据标签的等级和规则控制访问权限。</p><p>优点：高安全性，防止未经授权的访问。</p><p>缺点：灵活性较差，通常难以由用户自主调整。</p><h2 id="_4-基于角色的访问控制-rbac" tabindex="-1"><a class="header-anchor" href="#_4-基于角色的访问控制-rbac"><span>4 基于角色的访问控制（RBAC）</span></a></h2><p>ACL、DAC 和 MAC 都是旧时代的权限控制模型，无法满足现代应用对权限控制的需求，于是诞生了新时代的权限模型：RBAC 和 ABAC。</p><p>RBAC 引入了角色（role）的概念，根据用户的角色分配权限。用户被赋予一个或多个角色，而每个角色都与一组预定义的权限相关联。这种模型通过简化权限管理，大幅减少了权限分配的复杂度。</p><p>优点：简化管理，特别适合大型组织。</p><p>缺点：难以应对非常精细化的权限需求。</p><p>RBAC 又分为 RBAC0、RBAC1、RBAC2、RBAC3。</p><ul><li><p>RBAC0：基础模型，只包含核心的四要素：用户（User）、角色（Role）、权限（Permission：Objects-Operations）、会话（Session）。用户和角色是多对多关系，权限和角色也是多对多关系。</p></li><li><p>RBAC1：在 RBAC0 的基础上添加了角色继承。角色可以继承自其它角色，在拥有其他角色权限的同事，还可以关联额外的权限。</p></li><li><p>RBAC2：包括 RBAC0，添加了约束，有一下特性：</p><ul><li>互斥约束：包括互斥用户、互斥角色、互斥权限。同一个用户不能拥有相互排斥的角色，两个互斥角色不能分配一样的权限集，互斥的权限不能分配给同一个角色，在 Session 中，同一个角色不能拥有互斥权限。</li><li>基数约束：一个角色被分配的用户数量受限。</li><li>先决条件角色：想要获得较高的权限，要先拥有低一级的权限。</li><li>静态职责分离：用户无法同时被赋予有冲突的角色。</li><li>动态职责分离：用户会话中，无法同时激活有冲突的角色。</li></ul></li><li><p>RBAC3：合并了 RBAC0、RBAC1、RBAC2</p></li></ul><h2 id="_5-基于属性的权限验证-abac" tabindex="-1"><a class="header-anchor" href="#_5-基于属性的权限验证-abac"><span>5 基于属性的权限验证（ABAC）</span></a></h2><p>ABAC 也被称为 PBAC（Policy-Based Access Control）、CBAC（Claims-Based Access Control），是最强大的权限模型，它根据用户、资源和环境的属性来动态决定权限，每次访问请求都根据策略引擎来评估相关属性，例如用户的身份、请求的时间、地理位置等，来确定是否授予访问权限。</p><p>它对权限的控制粒度更细：</p><ul><li>用户属性，例如性别、年龄、工作等</li><li>资源属性，例如创建时间、所属位置等</li><li>操作属性，例如创建、修改等</li><li>环境属性，例如来源 IP、当前时间等</li></ul><h2 id="_6-开源项目" tabindex="-1"><a class="header-anchor" href="#_6-开源项目"><span>6 开源项目</span></a></h2><p><a href="https://github.com/casbin/casbin" target="_blank" rel="noopener noreferrer">Casbin</a>：Go 语言编写的访问控制框架。功能强大，支持 ACL、RBAC、ABAC 等访问模型，很多优秀的权限管理系统都是基于 Casbin 来构建的。Casbin 的核心功能都是围绕着访问控制来构建的，不负责身份认证。如果以后老板让你实现一个权限管理系统，Casbin 是一定要好好研究的开源项目。Casbin 目前有近万的 GitHub star 数，处于活跃的开发状态。有很多项目在使用 Casbin，例如 go-admin、 gin-admin 、 gin-vue-admin 等。</p><p><a href="https://github.com/ory/keto" target="_blank" rel="noopener noreferrer">keto</a>：类似于 Casbin，主要通过 Go 包的方式，对外提供授权能力。云原生权限控制服务，通过提供 REST API 进行授权，支持 RBAC、ABAC、ACL、AWS IAM 策略、Kubernetes Roles 等权限模型，可以解决下面这些问题：</p><ul><li>是否允许某些用户修改此博客文章？</li><li>是否允许某个服务打印该文档？</li><li>是否允许 ACME 组织的成员修改其租户中的数据？</li><li>是否允许在星期一的下午 4 点到下午 5 点，从 IP 10.0.0.2 发出的请求执行某个 Job？</li></ul><p><a href="https://github.com/go-admin-team/go-admin" target="_blank" rel="noopener noreferrer">go-admin</a>：基于 Gin + Vue + Element UI 的前后端分离权限管理系统脚手架，它的访问控制模型采用了 Casbin 的 RBAC 访问控制模型，功能强大，包含了基础用户管理功能；JWT 鉴权；代码生成器；RBAC 权限控制；表单构建；等。该项目还支持 RESTful API 设计规范、Swagger 文档、GORM 库等。go-admin 不仅是一个优秀的权限管理系统，也是一个优秀的、功能齐全的 Go 开源项目。</p><p><a href="https://github.com/LyricTian/gin-admin" target="_blank" rel="noopener noreferrer">gin-admin</a>：类似于 go-admin，是一个基于 Gin+Gorm+Casbin+Wire 实现的权限管理脚手架，并自带前端，在做权限管理系统调研时，也非常值得参考。gin-admin 大量采用了 Go 后端开发常用的技术，比如 Gin、GORM、JWT 认证、RESTful API、Logrus 日志包、Swagger 文档等。因此，你在做 Go 后端服务开发时，也可以学习该项目的构建方法。</p><p><a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">gin-vue-admin</a>：基于 Gin 和 Vue 开发的全栈前后端分离的后台管理系统，集成了 JWT 鉴权、动态路由、动态菜单、Casbin 鉴权、表单生成器、代码生成器等功能。gin-vue-admin 集成了 RBAC 权限管理模型。</p><blockquote><p>原文：<a href="https://time.geekbang.com/column/article/400213?utm_campaign=geektime_search&amp;utm_content=geektime_search&amp;utm_medium=geektime_search&amp;utm_source=geektime_search&amp;utm_term=geektime_search" target="_blank" rel="noopener noreferrer">5 大权限模型</a></p></blockquote>', 33)
  ]));
}
const accessModel_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "access-model.html.vue"]]);
const data = JSON.parse('{"path":"/dev/access-model.html","title":"权限模型","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"权限模型","description":null,"article":false,"date":"2024-03-19T00:00:00.000Z","order":2},"headers":[{"level":2,"title":"1 权限控制列表（ACL）","slug":"_1-权限控制列表-acl","link":"#_1-权限控制列表-acl","children":[]},{"level":2,"title":"2 自主访问控制（DAC）","slug":"_2-自主访问控制-dac","link":"#_2-自主访问控制-dac","children":[]},{"level":2,"title":"3 强制访问控制（MAC）","slug":"_3-强制访问控制-mac","link":"#_3-强制访问控制-mac","children":[]},{"level":2,"title":"4 基于角色的访问控制（RBAC）","slug":"_4-基于角色的访问控制-rbac","link":"#_4-基于角色的访问控制-rbac","children":[]},{"level":2,"title":"5 基于属性的权限验证（ABAC）","slug":"_5-基于属性的权限验证-abac","link":"#_5-基于属性的权限验证-abac","children":[]},{"level":2,"title":"6 开源项目","slug":"_6-开源项目","link":"#_6-开源项目","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":5.83,"words":1748},"filePathRelative":"dev/access-model.md","localizedDate":"2024年3月19日","excerpt":"<p>常见的权限模型有：</p>\\n<ul>\\n<li>权限控制列表（ACL，Access Control List）</li>\\n<li>自主访问控制（DAC，Discretionary Access Control）：基于 ACL</li>\\n<li>强制访问控制（MAC，Mandatory Access Control）：基于 ACL</li>\\n<li>基于角色的访问控制（RBAC，Role-Based Access Control）：最普及</li>\\n<li>基于属性的权限验证（ABAC，Attribute-Based Access Control）：更动态</li>\\n</ul>\\n<h2>1 权限控制列表（ACL）</h2>"}');
export {
  accessModel_html as comp,
  data
};
