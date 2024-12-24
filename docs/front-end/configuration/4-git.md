---
lang: zh-CN
title: Git 工作流
description:
article: false
date: 2024-02-01
order: 4
---

## 1 功能分支工作流

功能分支工作流适合开发团队相对固定、规模较小的项目。

开发新功能时，基于 master 分支新建一个功能分支，开发完之后合并到 master 分支。

在合并到 master 分支时，需要提交 PR（Pull Request），而非直接将代码 merge 到 master 分支。这样可以把分支代码提供给团队开发人员进行 CR（Code Review）。

github 的 Merge pull request 提供了三种 Merge 方法：1）Create a merge commit：相当于 `git merge --no-ff`，生成一个 merge commit；2）Squash and merge：相当于 `git merge --squash`，使该 pull request 上的所有 commit 都合并成一个 commit；3）Rebase and merge：底层是 `git rebase`，会将 pull request 上的所有提交历史按照原有顺序依次添加到 master 分支的 Head。

## 2 Git Flow 工作流

Git Flow 工作流比较适合开发团队相对固定，规模较大的项目。

Git Flow 定义了 5 种分支：master, develop, feature, release, hotfix。

| 分支名  | 描述                                                                                                                                                                                                                                                                                                                                                                         |
| :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| master  | 该分支上的最新代码永远是发布状态，不能直接在该分支上发布。master 分支每合并一个 hotfix 或 release 分支，都会打一个版本标签。                                                                                                                                                                                                                                                 |
| develop | 开发中的最新代码。该分支只做合并操作，不能直接在该分支上开发。                                                                                                                                                                                                                                                                                                               |
| feature | 新功能开发。基于 develop 分支新建 feature 分支，名称建议为 feature/xxx-xxx。功能开发完之后，合并到 develop 并删除分支。<br><br>注意：申请合并之前，先 pull 一下 develop 分支解决冲突后，再申请合并。                                                                                                                                                                         |
| release | 发布阶段的预发布分支。基于 develop 分支创建，名称建议为 release/xxx-xxx。<br><br>流程：v1.0.0 版本的功能全部开发测试完后，提交到 develop 分支；基于 develop 分支创建 release/1.0.0 分支，并提交测试，测试中遇到的问题在 release 分支上修改；通过最终测试后，再讲 release 分支合并到 master 和 develop，并在 master 分支打上 v1.0.0 的版本标签，最后删除 release/1.0.0 分支。 |
| hotfix  | 维护阶段的紧急修复分支。基于 master 分支创建，修复完成后合并到 master。名称建议为 hotfix/xxx-xxx。<br><br>流程：线上某个版本出现 Bug 后，从 master 检出对应版本的代码，创建 hotfix 分支，并在 hotfix 分支上修复问题；问题修复后，将 hotfix 合并到 master 和 develop 分支，并在 master 分支打上修复后的版本标签，最后删除 hotfix 分支。                                       |

如果在当前开发阶段，线上突发 bug，我们要停下手中的工作，修复线上的 bug。假设现在的版本是 `0.9.0`，步骤：

```shell
$ git stash  # 1. 目前在分支 feature/a。开发只完成了一部分，不想提交，可以将修改暂存
$ git checkout -b hotfix/print-error master # 2. 基于 master 建立 hotfix 分支
# ... 编辑器中修复 bug
$ git commit -a -m 'fix: fix print message error bug' # 3. 提交修复

$ git checkout development
$ git merge --no-ff hotfix/print-error # 4.1 合并到 develop 分支
$ git checkout master
$ git merge --no-ff hotfix/print-error # 4.2 合并到 master 分支

$ git tag -a v0.9.1 -m 'fix log bug' # 5. master 分支打 tag
# ... 6. 编译代码，将编译好的二进制更新到生产环境中
$ git branch -d hotfix/print-error # 7. 删除 hotfix 分支

$ git checkout feature/a      # 8. 切换到原开发分支
$ git merge --no-off develop  # 9. develop 有更新，同步一下
$ git stash pop               # 10. 恢复修复前的工作状态
```

## 3 Forking 工作流

Forking 工作流适合开源项目，或者开发者不固定的项目。

开发者 A 拥有一个远程仓库，开发者 B 也想参与该项目，B 就可以 fork 一份 A 的远程仓库到自己的 Github 账号下。B 在自己的项目中进行开发，开发完成后，B 给 A 提交一个 PR。这时，A 会收到通知有新的 PR，A 查看 PR 并进行 code review。如果有问题，A 直接在 PR 页面进行评论，B 根据评论做进一步修改。最后 A 通过 B 的 PR 请求，将代码合并进了 A 的仓库。

B fork 项目后，在本地对项目做修改，步骤：

```shell
$ git clone <fork 后自己的代码仓库地址>
$ cd <project-dir>
$ git remote add upstream <A 的代码仓库地址地址>
$ git remote set-url --push upstream no_push # 不向 upstream master 进行 push

$ git remote -v # 确认设置的 remotes 有效
origin <fork 后自己的代码仓库地址> (fetch)
origin <fork 后自己的代码仓库地址> (push)
upstream <A 代码仓库地址> (fetch)
upstream <A 代码仓库地址> (push)
```

创建功能分支之前，要同步本地仓库的 master 分支为最新状态。

```shell
$ git fetch upstream
$ git checkout master
$ git rebase upstream/master

$ git checkout -b feature/add-function
```

开发完代码之后，commit 之前还要再次同步 feature 跟 upstream/master

```shell
$ git fetch upstream
$ git rebase upstream/master

$ git add .
$ git commit
```

合并到 master 中时，可能有好几个 commit，我们往往只希望有一个，可以用 `git rebase` 进行合并

```shell
$ git rebase -i origin/master
```

开发完成后要讲功能分支 push 到个人远程代码仓库。在个人远程仓库页面创建 pull request。

> 原文：[工作流设计](https://time.geekbang.com/column/article/382342?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search)
