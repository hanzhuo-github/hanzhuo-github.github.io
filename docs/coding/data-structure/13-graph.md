---
lang: zh-CN
title: 图
description:
article: false
date: 2023-10-24
order: 13
---

- 顶点（vertex）
- 边（edge）
- 顶点的度（degree）：与顶点相连接的边的条数
  - 出度（Out-degree）、入度（In-degree）
- 有向图、无向图
- 带权图（weighted graph）：带权图中的每条边都有一个权重（weight）
- 连通图（Connected Graph）：在一个无向图中，任意两个顶点之间都存在至少一条路径（即，从图中的任意一个顶点出发，能够通过边到达图中的其他任意顶点）
  - 无向连通图：如果在无向图中，任意两个顶点都可以通过若干条边直接或间接连通，则称该图为无向连通图
  - 强连通图（Strongly Connected Graph）：在有向图中，若从任意一个顶点都可以通过有向边到达其他顶点，并且其他顶点也可以通过有向边返回到这个顶点，则称该图为强连通图
  - 弱连通图（Weakly Connected Graph）：在有向图中，若将图中所有边的方向忽略后（即视为无向图），任意两个顶点仍然可以连通，则称该图为弱连通图

## 1. 图的存储

### 1.1 邻接矩阵

邻接矩阵（Adjacency Matrix）底层依赖二维数组。

对于无向图，如果顶点 i 和顶点 j 之间有边，那么就将 A[i][j] 标记为 1；对于有向图，如果有一条从顶点 i 指向顶点 j 的边，那么就将 A[i][j] 标记为 1。带权图对应的数组元素值为权重。

优点：存储方式简单直接；方便计算，可以将图的运算转换成矩阵之间的运算，如求最短路径时提到的[Floyd-Warshall 算法](https://zh.wikipedia.org/wiki/Floyd-Warshall%E7%AE%97%E6%B3%95)就是利用矩阵循环相乘若干次得到的结果。

缺点：浪费空间。无向图是对称矩阵，只需一半空间就够了。对于稀疏图（Sparse Matrix），使用邻接矩阵就更浪费空间了。

### 1.2 邻接表

下图是一个有向图的邻接表（Adjacency List）和逆邻接表。每个顶点有一条链表，链表中存储的是与这个顶点相连的其他顶点。

有向图中，链表存储的是指向的顶点；无向图中，链表存储的是与这个顶点有边相连的顶点。

<div align=center>
    <img src=/images/code/ds/AdjacencyList.webp width=70%/>
</div>

优点：节省空间。

缺点：使用起来比较耗时，查询两个顶点之间的关系没有邻接矩阵那么高效（要想判断是否存在某个边，需要到对应顶点的链表中遍历）；链表对缓存不友好。

邻接表长得很像散列。在介绍散列表时提到过，如果是基于链表法解决冲突的散列，链表过长时，为了提高查找效率，可以将链表换成其他更高效的数据结构，如平衡二叉查找树等。可以将邻接表中国的链表改成平衡二叉查找树（实际开发中可以选择红黑树）。

邻接表在使用时可以将链表换成更高效的动态数据结构，如二叉查找树、跳表、散列表等。

## 2. 深度和广度优先搜索

图的表达能力很强，大部分涉及到搜索的场景都可以抽象成图。

广度优先搜索和深度优先搜索是图上的两种最常用、最基本的搜索算法，比起其他高级的搜索算法，比如 A*、IDA* 等，要简单粗暴，没有什么优化，所以，也被叫作暴力搜索算法。所以，这两种搜索算法仅适用于状态空间不大，也就是说图不大的搜索。

它们的时间复杂度都是 $O(E)$，空间复杂度都是 $O(V)$。

下面针对无向图、邻接表展开。

```js
class Graph {
  constructor(v) {
    this.v = v;
    this.adj = Array.from({ length: v }, () => []);
  }

  addEdge(s, t) {
    // 无向图，要存两次
    adj[s].add(t);
    adj[t].add(s);
  }

  // 递归打印从 s->t 的路径，prev 中存放路径
  print(prev, s, t) {
    if (prev[t] !== -1 && t !== s) {
      this.print(prev, s, prev[t]);
    }
    console.log(t + " ");
  }
}
```

### 2.1 广度优先搜索（BFS）

广度优先搜索（Breadth-First-Search）是一层层搜索的。

```js
// 搜索一条从 s 到 t 的路径，BFS 搜索出的路径也是最短路径
bfs(s, t) {
  if (s == t) return;
  const visited = new Array(this.v).fill(false);  // 1. 记录已被访问的顶点
  visited[s] = true;
  const queue = [s];  // 2. 已被访问、但相连顶点尚未被访问的顶点
  const prev = new Array(this.v).fill(-1);  // 3. 记录搜索路径（反向，从2访问3，那么prev[3]=2）

  while (queue.length > 0) {
    const w = queue.shift();
    for (let i = 0; i < this.adj[w]; ++i) {
      const q = this.adj[w][i];
      if (!visited[q]) {
        prev[q] = w;
        if (q === t) {
          this.print(prev, s,t);
          return;
        }
        visited[q] = true;
        queue.push(q);
      }
    }
  }
}
```

- 时间复杂度：最坏情况下，t 距离 s 很远，要遍历整个图才能找到。这时，所有顶点都要进出一遍队列，每个边都会被访问一次。所以广度优先搜索的时间复杂度是 $O(V+E)$。对于连通图，$E \geq V-1$，所以 BFS 的时间复杂度也可以简写为 $O(E)$。

- 空间复杂度：主要存在三个辅助变量，visited 数组、queue 队列、prev 数组，它们的存储空间大小都不会超过顶点个数。所以空间复杂度是 $O(V)$。

### 2.2 深度优先搜索（DFS）

深度优先搜索（Depth-First-Search）是沿着一条路径一直走，直到不能走再退回上一层。

> 回溯思想

```js
found = false;  // 全局变量或者类成员变量

dfs(s, t) {
  this.found = false;
  const visited = new Array(this.v).fill(false);
  const prev = new Array(this.v).fill(-1);
  this.recurDfs(s, t, visited, prev);
  this.print(prev, s, t);
}

recurDfs(w, t, visited, prev) {
  if (this.found) return;
  visited[w] = true;
  if (w === t) {
    this.found = true;
    return;
  }
  for (let i = 0; i < this.adj[w].length; ++i) {
    const q = this.adj[w][i];
    if (!visited[q]) {
      prev[q] = w;
      this.recurDfs(q, t, visited, prev);
    }
  }
}
```

- 时间复杂度：每条边最多被访问两次（一次遍历、一次回退）。所以时间复杂度是 $O(E)$。

- 空间复杂度：主要是 visited 数组、prev 数组、递归调用站。visited 数组和 prev 数组和顶点数成正比，递归调用栈的最大深度不超过顶点个数。所以总的空间复杂度是 $O(V)。
