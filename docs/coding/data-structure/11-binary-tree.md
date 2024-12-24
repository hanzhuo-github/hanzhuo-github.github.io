---
lang: zh-CN
title: 树
description:
article: false
date: 2023-09-12
order: 11
---

## 1 树的相关概念

父节点、子节点、兄弟节点、根节点、叶子节点/叶节点

高度（Height）、深度（Depth）、层数（Level，层数 = 深度 + 1）

<div align=center>
    <img src=/images/code/ds/tree.webp width=60%/>
</div>

## 2 二叉树（Binary Tree）

左子结点、右子节点

- 满二叉树：除了叶子结点，每个节点都有左右两个节点
- 完全二叉树：除了最后一层，其他层的节点都有左右两个节点（即最后一层没满）

二叉树可以使用二叉链表（指针 left 和指针 right）或数组存储。

对于数组存放的二叉树，如果根节点在下标 1 处，对于下标 i，其左子节点的下标为 `2*i`，右子节点的下标为 `2*i+1`。反过来，父节点下标为 `Math.floor(i/2)`。

上述的存储方式会浪费下标为 0 的位置。如果是非完全二叉树，没有数据的位置也会被空出来，会浪费较多的存储空间。

> 堆就是一种完全二叉树，最常用的存储方式就是数组。

### 2.1 二叉树的遍历

二叉树的前、中、后序遍历就是一个递归的过程。递推公式如下：

- 前序遍历：根、左、右。`preOrder(r) = r -> preOrder(r.left) -> preOrder(r.right)`
- 中序遍历：左、根、右。`inOrder(r) = preOrder(r.left) -> r ->  -> preOrder(r.right)`
- 后序遍历：左、右、根。`postOrder(r) = preOrder(r.left) -> preOrder(r.right) -> r`

时间复杂度：$O(n)$

:::code-tabs

@tab 前序

```c
void preOrder(Node *root) {
  if (root == null) return;
  print root  // 伪代码
  preOrder(root->left)
  preOrder(root->right)
}
```

@tab 中序

```c
void inOrder(Node *root) {
  if (root == null) return;
  inOrder(root->left)
  print root  // 伪代码
  inOrder(root->right)
}
```

@tab 后序

```c
void postOrder(Node *root) {
  if (root == null) return;
  postOrder(root->left)
  postOrder(root->right)
  print root  // 伪代码
}
```

:::

### 2.2 二叉查找树（Binary Search Tree）

二叉查找树，也叫二叉搜索树，是为了实现快速查找而生的。除了查找外，还支持快速插入、删除一个数据。

二叉查找树要求：树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值；而右子树中的节点都大于这个节点的值。

中序遍历二叉查找树可以输出有序的数据序列，时间复杂度是 $O(n)$。

1. 查找：取根节点，如果等于就返回结果。如果要找的数小于根节点，则去左子树中递归查找；反之，就去右子树中递归查找。

2. 插入：新插入的数据一般在叶子节点上。从根节点开始，依次根据插入数据和节点的大小关系去左子树或右子树中找位置。如果子节点为空，就直接插入；如果不为空，就遍历子树继续找位置。

3. 删除：
   - 如果要删除的节点没有子节点：只需直接将父节点中指向该节点的指针设置为 null；
   - 如果要删除的节点只有一个结点（左或右）：只需将父节点中指向该节点的指针指向该节点的子节点；
   - 如果要删除的节点有两个子节点：先找到右子树中的最小节点，再把它替换到要删除的节点上（注意最小节点要在树中删掉）

<div align=center>
    <img src=/images/code/ds/binary-tree-delete.webp width=60%/>
</div>

:::code-tabs
@tab Node 类型

```cpp
public class BinarySearchTree {
  public static class Node {
    private int data;
    private Node left;
    private Node right;

    public Node(int data) {
      this.data = data;
    }
  }
}
```

@tab 查找

```java
public class BinarySearchTree {
  private Node tree;

  public Node find(int data) {
    Node p = tree;
    while(p != null) {
      if (data < p.data) p = p.left;
      else if (data > p.data) p = p.right;
      else return p;
    }
    return null;
  }

  // Node 定义，见上一 tab
  ...
}
```

@tab 插入

```java
public void insert(int data) {
  if (tree == null) {
    tree = new Node(data);
    return
  }

  Node p = tree;
  while (p != null) {
    if (data > p.data) {
      if (p.right == null) {
        p.right = new Node(data);
        return;
      }
      p = p.right
    } else {
      if (p.left == null) {
        p.left = new Node(data);
        return;
      }
      p = p.left
    }
  }
}
```

@tab 删除

```java
public void delete(int data) {
  Node p = tree;  // 要删除的节点
  Node pp = null; // p 的父节点

  while (p != null && p.data != data) {
    pp = p;
    if (data > p.data) p = p.right;
    else p = p.left;
  }
  if (p == null) return; // 没找到要删除的节点

  // 1. 要删除的节点有两个子节点
  if (p.left != null && p.right != null) {
    Node minP = p.right;
    Node minPP = p;       // minP 父节点
    while (minP.left != null) {
      minPP = minP;
      minP = minP.left;
    }
    p.data = minP.data;   // 将 p 中的数据替换成 pMin
    p = minP;   // 上行代码已经替换号数据了，现在要删除叶子节点了
    pp = minPP;
  }

  // 2. 只有左节点、只有右节点；删除叶子节点
  Node child;   // p 的子节点
  // 只有左节点
  if (p.left != null) child = p.left;
  // 只有右节点
  else if (p.left != null) child = p.right;
  // 上面有左右节点的情况，p 和 pp 已经指向了叶子节点；或没有子节点
  else child = null;

  if (pp == null) tree = child;  // 删除根节点
  else if (pp.left) pp.left = child;
  else pp.right = child;
}
```

:::

对于存在重复数据的二叉查找树，有两种构建方式。

一种是通过链表和支持动态扩容的数组使得每个节点存储多个值相同的数据；

另一种是，把相等数据看做大于该节点的数据进行处理。

- 插入：如果数值等于该节点，就继续到右子树中找位置；
- 查找：遇到值相同的结点，不要直接退出，而是在右子树中继续查找，直到遇到叶子结点；
- 删除：先找到每个要删除的节点，再按照上述的删除操作，依次删除。

### 2.3 时间复杂度分析

不管是插入、删除还是查找，时间复杂度都跟数的高度成正比，即 $O(height)$。

1. 如果左右子树及其不平衡，极端点，只有左子树，那么二叉树就退化为链表，查找的时间复杂度为 $O(n)$。

2. 对于完全二叉树，时间复杂度是 $O(logn)$。我们现在来分析一下他的高度和层数

   :::details 完全二叉树的高度
   第一层有 1 个节点，第二层有 2 个节点，第三层有 4 个节点，...，第 L 层有 $2^{L-1}$ 个节点。

   完全二叉树的节点个数 n 应该满足：

   $$
   \begin{cases}
   \begin{aligned}
   n &\geq 1 + 2 + ... + 2^{L-2} + 1 \\
   n &\leq 1 + 2 + ... + 2^{L-2} + 2^{L-1}
   \end{aligned}
   \end{cases}
   \Rightarrow
   log^{n+1}_2 \leq L \leq log^{n}_2 + 1
   $$

   那么高度 H 应该满足：$log^{n+1}_2 - 1 \leq H \leq log^{n}_2$。

   计算高度：$H = \lfloor log^{n}_2 \rfloor$，计算层数：$L = H + 1 = \lfloor log^{n}_2 \rfloor + 1$。
   :::

为了降低对二叉树操作的时间复杂度，我们可以构建一种特殊的二叉查找树，即**平衡二叉查找树**。不管怎么插入、删除数据，都能保持任意节点的左右子树比较平衡。平衡二叉查找树的高度接近 $logn$，所以时间复杂度比较稳定是 $O(logn)$。

### 2.4 平衡二叉查找树

平衡二叉树要求：二叉树中任意一个节点的左右子树的高度之差不能大于 1。

> 满二叉树、完全二叉树都是平衡二叉树。非完全二叉树也可能是平衡二叉树。

平衡二叉查找树：既是平衡二叉树、又是二叉查找树。

[AVL 树](https://zh.wikipedia.org/wiki/AVL%E6%A0%91)是最先被发明的平衡二叉查找树，严格符合平衡二叉查找树的定义。由于它的高度平衡，查找效率非常高。但是为了维持这种高度平衡，每次插入、删除都要做调整，比较复杂、耗时。对于有频繁插入、删除操作的数据结合，使用 AVL 的代价就有点高了。

也有很多平衡二叉查找树并没有严格符合「任意一个节点的左右子树的高度之差不能大于 1」，如红黑树，它从根节点到各个叶节点的最长路径，可能会比最短路径大一倍。它是近乎平衡的。红黑树的插入、删除、查找各种操作性能都比较稳定。

## 3 红黑树

在提到平衡二叉查找树时，往往默认就是红黑树。红黑树（Red-Black Tree，简称 R-B Tree）是一种不严格的平衡二叉树。红黑树中的节点，一类被标记为黑色，一类被标记为红色，并满足以下要求：

- 根节点是黑色的；
- 每个叶子结点都是黑色的空节点，即叶子结点不存储数据；
- 任何相邻的节点不能同时为红色，即红色节点被黑色节点隔开；
- 每个节点到达其可达叶子节点的所有路径，都包含相同数目的黑色节点。

> 注：由于第二点要求，画图时往往会将黑色且空的叶子节点省略掉。

:::details 红黑树为什么”近乎平衡“
首先，将红色节点从红黑树中去掉。二叉树就变成了四叉树。而四叉树的高度，比包含项相同节点个数的完全二叉树的高度要小，于是”黑树“的高度不会超过 $log{n}_2$。

现在把红色节点加回去，由于红色节点不能相邻，需要用黑色节点隔开，那么加入红色节点之后，最长路径不会超过$2log{n}_2$。

所以，红黑树（$2log{n}_2$。）相较于 AVL（$log{n}_2$。））树，性能下降得并不多。这样推导出来的结果不够精确，实际上红黑树的性能更好。
:::

插入、删除节点时，第三点、第四点要求可能会被破坏。下面要介绍的”平衡调整“，就是恢复第三点、第四点要求。

首先要了解两种重要的操作：左旋（rotate left）、右旋（rotate right）。

<div align=center>
    <img src=/images/code/ds/rbtree-rotate.webp width=60%/>
</div>

### 3.1 插入操作的平衡调整

**红黑树规定，插入的节点必须是红色的；而且，二叉查找树中新插入的节点都放在叶子结点上。**

不需要进行平衡调整的情况：

- 如果插入节点的父节点是黑色的：什么都不用做，它仍满足红黑树定义；
- 如果插入的节点是根节点：直接改变它的颜色，把插入节点改成黑色就行。

除此之外的情况，都需要调整。调整主要包含两种基本操作：左右旋转、改变颜色。

红黑树的平衡调整过程是一个迭代的过程。我们把正在处理的节点叫做**关注节点**。关注节点会随着不停地迭代处理，而不断发生变化。最开始的关注节点就是新插入的节点。

- Case 1：如果关注节点是 a，叔叔节点 d 是红色：
  - 将父节点 b、叔叔节点 d 的颜色都设置成黑色；
  - 将祖父节点 c 的颜色设置成红色；
  - 关注节点变成祖父节点 c；
  - 跳到 Case 2 或者 Case 3。
- Case 2：如果关注节点是 a，叔叔节点 d 是黑色，关注节点 a 是其父节点 b 的右子节点：
  - 关注节点变成父节点 b；
  - 围绕新的关注节点 b 左旋；
  - 跳到 CASE 3。
- Case 3：如果关注节点是 a，叔叔节点 d 是黑色，关注节点 a 是其父节点 b 的左子节点：
  - 围绕关注祖父节点 c 右旋；
  - 将关注父节点 b、兄弟节点 c 的颜色互换；
  - 调整结束。

:::tabs
@tab Case 1

<div align=center>
    <img src=/images/code/ds/rbtree-insert1.webp width=60%/>
</div>

@tab Case 2

<div align=center>
    <img src=/images/code/ds/rbtree-insert2.webp width=60%/>
</div>

@tab Case 3

<div align=center>
    <img src=/images/code/ds/rbtree-insert3.webp width=60%/>
</div>

:::

### 3.2 删除操作的平衡调整

删除操作的平衡调整分为两步：

- 第一步是针对删除节点的初步调整。保证整棵红黑树在一个节点删除之后，仍然满足「每个节点到达其可达叶子节点的所有路径，都包含相同数目的黑色节点」。
- 第二步是针对关注节点进行二次调整。保证其满足「不存在相邻的两个红色节点」。

1. 针对删除节点的初步调整
   经过初步调整之后，为了保证红黑树满足「每个节点到达其可达叶子节点的所有路径，都包含相同数目的黑色节点」，有些节点会被标记两种颜色（”红-黑“或者”黑-黑“）。如果一个节点被标记成了”黑-黑“，那么计算黑色节点个数时要算成 2 个黑色节点。

   - Case 1：要删除的节点 a 只有一个子节点 b
     - 删除节点 a，把 b 替换到 a 的位置（和普通的二叉查找树的删除操作相同）；
     - 把 b 改为黑色（节点 a 一定是黑色、节点 b 一定是红色）；
     - 调整结束，不需要二次调整。
   - Case 2：要删除的节点 a 有两个非空子节点，并且 a 的后继节点就是它的右子节点 c
     - 删除节点 a，将 c 替换到 a 的位置（和普通的二叉查找树的删除操作相同，c 肯定没有左子树）；
     - 将节点 c 的颜色改为节点 a 的颜色；
     - 如果节点 c 是黑色，那么 c 的右子节点 d 要多加一个黑色，此时 d 就是”红-黑“或”黑-黑“；
     - 关注节点变成 d，进入二次调整。
   - Case 3：要删除的节点 a 有两个非空子节点，并且 a 的后继节点不是它的右子节点
     - 找到后继节点 d，将其删除（d 没有左子树，删除流程参照 Case 1）；
     - 将 a 替换成 d；
     - 将 d 的颜色设置为 a 的颜色；
     - 如果节点 d 是黑色，那么 d 的右子节点 c 要多加一个黑色，此时 c 就是”红-黑“或”黑-黑“；
     - 关注节点变成 c，进入二次调整。

   > 后继节点指的是比它大的最小节点。

   :::tabs
   @tab Case 1

    <div align=center>
        <img src=/images/code/ds/rbtree-delete11.webp width=60%/>
    </div>

   @tab Case 2

    <div align=center>
        <img src=/images/code/ds/rbtree-delete12.webp width=60%/>
    </div>

   @tab Case 3

    <div align=center>
        <img src=/images/code/ds/rbtree-delete13.webp width=60%/>
    </div>

   :::

2. 二次调整
   经过初步调整之后，关注节点变成了“红 - 黑”或者“黑 - 黑”节点。二次调整时为了让红黑树中不存在相邻的红色节点。

   - Case 1：关注节点 a 的兄弟节点 c 是红色
     - 围绕 a 的父节点 b 左旋；
     - 父节点 b 和组父节点 c 交换颜色；
     - 关注节点不变，继续从四种情况选择合适规则来调整。
   - Case 2：关注节点 a 的兄弟节点 c 是黑色，且 c 的左右子节点 d、e 都是黑色
     - 将兄弟节点 c 变成红色；
     - 关注节点 a 去掉一个黑色，于是 a 就是单纯的红色或黑色；
     - 给父节点 b 添加一个黑色，于是 b 就是”红-黑“或”黑黑“；
     - 关注点变为 b，继续从四种情况选择合适规则来调整。
   - Case 3：关注节点 a 的兄弟节点 c 是黑色，c 的左子结点 d 是红色、c 的右子节点 e 是黑色
     - 围绕兄弟节点 c 右旋；
     - c 和 d 交换颜色；
     - 关注节点不变，跳转到 Case 4。
   - Case 4：关注节点 a 的兄弟节点 c 是黑色，且 c 的右子节点 e 是红色
     - 围绕父节点 b 左旋；
     - 将 c 设置为 b 的颜色；
     - 将 b 设置为 黑色；
     - 关注点 a 去掉一个黑色，于是 a 就是单纯的红色或黑色；
     - 将 a 现在的叔叔节点 e 设置成黑色；
     - 调整结束。

   :::tabs
   @tab Case 1

    <div align=center>
        <img src=/images/code/ds/rbtree-delete21.webp width=60%/>
    </div>

   @tab Case 2

    <div align=center>
        <img src=/images/code/ds/rbtree-delete22.webp width=60%/>
    </div>

   @tab Case 3

    <div align=center>
        <img src=/images/code/ds/rbtree-delete23.webp width=60%/>
    </div>

   @tab Case 4

    <div align=center>
        <img src=/images/code/ds/rbtree-delete24.webp width=60%/>
    </div>

   :::

## 4 递归树

在计算递归的时间复杂时，可以使用递推公式进行数学推导。除此之外，还可以借助递归树来分析算法的时间复杂度。
