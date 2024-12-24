---
lang: zh-CN
title: API 风格
description:
article: false
date: 2024-02-10
order: 2
---

API 风格主要有三种：

- REST（REpresentational State Transfer，表现层状态转移）
- RPC（Remote Procedure Call，远程过程调用）
- [GraphQL](https://graphql.cn/)。

## 1 RESTful API

| HTTP 方法 | 行为                         | URI             | 说明                         |
| :-------- | :--------------------------- | :-------------- | :--------------------------- |
| GET       | 获取资源列表                 | /users          | 获取用户列表                 |
| GET       | 获取某个具体资源             | /users/zhangsan | 获取 zhangsan 用户的详细信息 |
| POST      | 创建一个新资源               | /users          | 创建一个新用户               |
| PUT       | 以整体的方式更新一个资源     | /users/zhangsan | 更新 zhangsan 用户           |
| PATCH     | 更新一个资源的某个或某些属性 | /users/zhangsan | 更新 zhangsan 用户的某些属性 |
| DELETE    | 删除一个资源                 | /users/zhangsan | 删除 zhangsan 用户           |

注意：

- 对资源进行状态、属性的变更，要用 PUT 方法，POST 方法仅用来创建或者批量删除这两种场景。

- 批量删除：
  - 发起多个 DELETE 请求，
  - 操作路径中带多个 id，中间用分隔符。如 `DELETE /users?ids=1,2,3`，
  - 使用 POST 方式批量删除，body 中传入要删除的资源列表。

### 1.1 URI 映射

- URI 资源名使用名词复数 `域名/资源名复数`，单个特定资源使用 `域名/资源名复数/资源名称`
- URI 结尾不应包含 `/`
- URI 路径用小写
- URI 中不能出现下划线 `_`，必须用中杠线 `-` 代替
- 避免层级过深，超过 2 层可以将其他资源转化为 `?` 参数

```shell
/schools/qinghua/classes/rooma/students/zhangsan  # 不推荐
/students?school=qinghua&class=rooma              # 推荐
```

- 对于操作，可以按照如下方式映射为 REST 资源：
  - 将一个操作变成资源的一个属性。如，禁用某个用户：`/users/zhangsan?active=false`
  - 将操作当成资源的嵌套资源。如，Github 加星：`PUT /gists/:id/star`；Github 取消加星：`DELETE /gists/:id/star`
  - 如果上面的方法不能解决问题，可以打破规范。如，登录不属于任何一个资源，直接设计为 `/login`

> [Github RESTful API 文档](https://docs.github.com/en/rest?apiVersion=2022-11-28)

### 1.2 统一分页、过滤、排序、搜索功能

REST 资源的查询接口，一般都要实现分页、过滤、排序、搜索功能，可以实现为一个公共的 API 组件。

- 分页：`/users?offset=0&limit=20`（limit：返回记录的数量；offset：指定返回记录的开始位置）。

- 过滤：

  - `/users?fields=email,username,address`，指定返回哪些属性，而非返回整个对象。
  - `/users/category/{category}`，返回指定类型的 users。
  - `/users?first_name=Peter`，返回 first_name 为 Peter 的用户。

  - 高级过滤：

    - LHS：`price[lte]=200status[ne]=past`
    - RHS：`price=lte:200`, `status=ne:past`。注：不能解析“或”。
    - Lucene/ElasticSearch：`q=price:<200`, `q=-status:past`

    > equal to (`=`)：`eq`
    >
    > not equal to (`!=`)：`neq`
    >
    > less than (`<`)：`lt`
    >
    > less than or equal to (`<=`)：`lte`
    >
    > greater than (`>`)：`gt`
    >
    > greater than or equal to (`<=`)：`gte`
    >
    > and：`&`，or：`|`

- 排序：

  - `/products?sort=price`，按照 price 升序
  - `/resources?sort=field_name,order`，如：`/products?sort=price,desc`，按照 price 降序
  - `/users?sort=-age`，按照 age 降序排序。

  - 多字段排序：
    - `/resources?sort=field1,order1,field2,order2`，如`/products?sort=price,asc,name,desc`，按 price 升序、再 name 降序。
    - `/products?sort=+price,-name`

搜索：`/users?q=queryString`

## 2 RPC API

如果业务对性能要求比较高，并且需要提供给多种编程语言调用，就可以考虑使用 RPC API。

RPC（Remote Procedure Call，远程过程调用）是一种计算机通信协议，允许程序在不同的计算机上调用彼此的程序或服务，就像在本地系统上调用函数一样。RPC 的目标是简化分布式计算，使得开发者可以像调用本地函数一样，调用远程系统中的功能。

RPC 涉及到以下几个基本过程：

- 客户端调用：客户端程序发起一个调用，如同调用本地过程一样。
- 参数打包：调用信息（包括过程标识、参数等）需要被打包成消息传递给服务器。
- 消息传输：消息通过网络从客户端传送到服务器。
- 服务器端解析：服务器端收到消息后，解析调用信息，定位远程过程。
- 执行远程过程：服务器端执行远程过程。
- 返回结果：执行结果被包装成消息，发送回客户端。

为了在网络中传输，调用参数和返回结果需要被序列化成字节流，在另一端再反序列化成原始数据格式。

目前使用过最多的 RPC 框架是 [gRPC](https://github.com/grpc/grpc-go)。

### 2.1 gRPC
