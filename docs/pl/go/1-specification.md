---
lang: zh-CN
title: 规范设计
description:
article: false
date: 2024-02-07
order: 1
---

> 原文：[设计方法：如何写出优雅的 Go 项目](https://time.geekbang.com/column/article/384648?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search)

## 1 语义化版本规范（SemVer, Semantic Versioning）

格式为：`主版本号.次版本号.修订号`

- 主版本号（Major）：做了不兼容的 API 修改。带有 BREAKING CHANGE 的 commit 可以将主版本号 +1。
- 次版本号（Minor）：做了向下兼容的功能性新增及修改。一般偶数为稳定版本，奇数为开发版本。feat 类型的 commit 可将次版本号 +1。
- 修订号（Patch）：当做了向下兼容的问题修正。fix 类型的 commit，可将修订号 +1。

## 2 Commit Message 规范

参考 [Commit Message](/front-end/configuration/3-commit-message.md)

Commit Message 规范自动化的工具：

- [commitizen-go](https://github.com/lintingzhen/commitizen-go)：使你进入交互模式，并根据提示生成 Commit Message，然后提交。
- commit-msg：githooks，在 commit-msg 中，指定检查的规则，commit-msg 是个脚本，可以根据需要自己写脚本实现。
- [go-gitlint](https://github.com/llorllale/go-gitlint)：检查历史提交的 Commit Message 是否符合 Angular 规范，可以将该工具添加在 CI 流程中，确保 Commit Message 都是符合规范的。
- [gsemver](https://github.com/arnaud-deprez/gsemver)：语义化版本自动生成工具。
- [git-chglog](https://github.com/git-chglog/git-chglog)：根据 Commit Message 生成 CHANGELOG。

## 3 目录结构

Go 社区推荐的结构化目录结构是 [project-layout](https://github.com/golang-standards/project-layout/blob/master/README_zh.md)。

## 4 代码规范

[Uber Go 语言编码规范](https://github.com/xxjwxc/uber_go_guide_cn)

Go 语言静态代码检查工具：[golangci-lint](https://github.com/golangci/golangci-lint)

Go 语言最佳实践：

- [Effective Go](https://go.dev/doc/effective_go)
- [Go Code Review Comments](https://go.dev/wiki/CodeReviewComments)
- [Styling guideline for Go packages](https://rakyll.org/style-packages/)

## 5 单元测试

单元测试环境：1）可能无法连接数据库；2）可能无法访问第三方服务。如果要测试的函数依赖数据库或第三方服务，那么在单元测试环境下就不可测了。解决方法也很简单，将依赖的数据库或第三方服务抽象成接口，在被测代码中调用接口的方法，测试时传入 mock 类型，从而将数据库、第三方服务等依赖从具体的被测函数中解耦出去。

常用的 Mock 工具：

- [golang/mock](https://github.com/golang/mock)：官方 Mock 框架。提供了 mockgen 工具来生成 interface 对应的 Mock 源文件。
- [sqlmock](https://github.com/DATA-DOG/go-sqlmock)：模拟数据库连接。
- [httpmock](https://github.com/jarcoal/httpmock)
- [bouk/monkey](https://github.com/bouk/monkey)：能够通过替换函数指针的方式来修改任意函数的实现。

建议使用 gotests 工具自动生成单元测试代码，定期检查单元测试覆盖率：

```shell
$ go test -race -cover  -coverprofile=./coverage.out -timeout=10m -short -v ./...
$ go tool cover -func ./coverage.out
```

## 6 编程哲学

面向接口编程（[参考](/coding/design-pattern/interface.md)）。

Go 不支持面向对象编程，但可以通过语言级的特性来实现类似效果。

面相对象编程中的几个核心特性：类、实例、抽象、封装、继承、多态、构造函数、析构函数、方法重载、this 指针。在 Go 中通过一下方式来实现类似效果：

- 类、抽象、封装：结构体 `struct`。
- 实例：结构体变量。
- 继承：组合（一个结构体嵌到另一个结构体），一个结构体包含了一个匿名结构体。
- 多态：接口。
- 构造函数、析构函数、方法重载、this 指针等：Go 为了保持语言的简洁性去掉了这些特性。

## 7 软件设计原则

[SOLID 原则](/coding/design-pattern/#solid-原则)。

> [SOLID 原则介绍](https://github.com/marmotedu/geekbang-go/blob/master/SOLID%E5%8E%9F%E5%88%99%E4%BB%8B%E7%BB%8D.md)

## 8 高效管理项目

- 使用 Makefile 管理项目

- 自动生成代码：
  - 错误码、错误码说明文档
  - 自动生成缺失的 doc.go
  - 利用 gotests 工具，自动生成单元测试用例
  - 使用 Swagger 工具，自动生成 Swagger 文档
  - 使用 Mock 工具，自动生成接口的 Mock 实例

Go 项目中的工具：

![](/images/go/go-tools.webp)

## 9 设计模式

[Go 常用设计模式](https://time.geekbang.com/column/article/386238?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search)
