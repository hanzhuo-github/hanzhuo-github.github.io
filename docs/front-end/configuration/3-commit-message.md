---
lang: zh-CN
title: Commit Message
description:
article: false
date: 2023-12-29
order: 3
---

## 1 Commit Message 规范

格式：包含 Header、Body、Footer 三个部分，Header 为必需的。

```
<type>[(scope)]: <description>

[body]

[footer]
```

### 1.1 type

commit 的 type 主要分为两类：Development（免测发布） 和 Production（慎重，提交前要做好充分测试）。

<table>
    <tbody>
        <tr>
            <td></td>
            <td>类型</td>
            <td>类别</td>
            <td>说明</td>
        </tr>
        <tr>
            <td rowspan="5">代码类</td>
            <td>feat</td>
            <td>Production</td>
            <td>新增功能</td>
        </tr>
        <tr>
            <td>fix</td>
            <td>Production</td>
            <td>Bug 修复</td>
        </tr>
        <tr>
            <td>perf</td>
            <td>Production</td>
            <td>提高代码性能的变更</td>
        </tr>
        <tr>
            <td>style</td>
            <td>Development</td>
            <td>代码格式的变更，比如用 gofmt 格式化代码、删除空行等</td>
        </tr>
        <tr>
            <td>refactor</td>
            <td>Production</td>
            <td>代码重构。例如简化代码、重命名变量、删除冗余代码</td>
        </tr>
        <tr>
            <td rowspan="4">非代码类</td>
            <td>test</td>
            <td>Development</td>
            <td>新增测试用例，或更新现有测试用例</td>
        </tr>
        <tr>
            <td>ci</td>
            <td>Development</td>
            <td>持续集成和部署的相关改动，比如修改 Jenkins、GitLab CI 等 CI 配置文件或者更新 systemd unit 文件</td>
        </tr>
        <tr>
            <td>docs</td>
            <td>Development</td>
            <td>文档类的更新，包括修改用户文档或者开发文档等</td>
        </tr>
        <tr>
            <td>chore</td>
            <td>Development</td>
            <td>其他类型，比如构建流程、依赖管理，或辅助工具的变动等</td>
        </tr>
    </tbody>
</table>

### 1.2 其他字段

scope 可以按照组件名或功能来设置。

subject 是 commit 的简短描述。最好用动词开头，使用现在时。结尾不能加英文句号。

Body 是对本次 commit 的更详细描述。也要以动词开头、使用现在时。它还必须要包括修改的动机、和上一版本相比的改动点。

Footer 用来说明本次 commit 导致的后果。通常用来说明不兼容的改动和关闭的 Issue 列表。格式如下：

```
BREAKING CHANGE: <breaking change summary>

<breaking change description + migration instructions>


Fixes #<issue-number>
```

对于不兼容的改动，需要再 Footer 不分，以 `BREAKING CHANGE` 开头，后面跟上不兼容改动的摘要。还需要说明变动的描述、变动的理由和迁移方法。

关闭 Issue 列表要在 Footer 不分新建一行以 Closes 开头列出，如 `Closes #123, #456`。

### 1.3 Revert

如果当前 commit 还原了先前的 commit，则应以 `revert` 开头，后跟还原的 commit 的 Header。Body 中必须写 `This reverts commit <hash>`。

### 1.4 提交习惯

建议在提交代码时不用 `git commit -m`，而是直接用 `git commit` 或 `git commit -a` 进入交互界面编辑 Commit Message 以更好地格式化 Commit Message。

# 2 合并提交

我们可能在实现一个新功能、修复一个 bug，测试通过后就提交。可能会让代码的 commit 很多。这时，可以使用 `git rebase -i` 合并之前的所有 commit。

步骤：

- 从 main 分支切换到 feature 分支 `git checkout -b feature/user`
- 查看目前的分支信息 `git log`（假设最后一条提交记录是 a38e6b13a9）
- 在 feature/user 分支进行开发测试，遵循规范进行提交（假设新提交了 5 条）
- 要将这 5 条合并为一条，要用这 5 条 commit 中最旧的一条的父 commit ID（即 a38e6b13a9），使用 `git rebase -i a38e6b13a9`
- 进入交互界面，显示了这 5 条 commit 记录，修改变更操作。要注意第一个 commit 是 pick，后面都是 squash 才能将其余 4 个 commit 都合并进去。
- 最后将 feature/user 的改动合并到 main 分支

| 变更操作  | 说明                                                   |
| :-------- | :----------------------------------------------------- |
| p, pick   | 不对该 commit 做任何处理                               |
| r, reword | 保留该 commit，但修改提交信息                          |
| e, edit   | 保留该 commit，但 rebase 时会暂停，允许修改这个 commit |
| s, squash | 保留该 commit，但会将当前 commit 和上一个 commit 合并  |
| f, fixup  | 与 squash 相同，但不会保存当前 commit 的提交信息       |
| x, exec   | 执行其他 shell 命令                                    |
| d, drop   | 删除该 commit                                          |

## 3 Commit Message 规范自动化

相关的工具有 commit-msg。

> 原文：[commit message 如何规范](https://time.geekbang.com/column/article/380989?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search)
