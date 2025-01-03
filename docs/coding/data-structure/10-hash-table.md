---
lang: zh-CN
title: 散列表/哈希表
description:
article: false
date: 2023-09-06
order: 10
---

我们也称散列表为哈希表或 hash 表。它利用数组支持按照下标随机访问数据的特性，是数组的一种扩展。

键（key）、散列函数（hash 函数、哈希函数）、散列值（hash 值、哈希值）

hash 函数设计的基本要求：

1. hash 函数计算得到的 hash 值是一个非负整数
2. 如果 key1 = key2，那么 hash(key1) = hash(key2)
3. 如果 key1 ≠ key2，那么 hash(key1) ≠ hash(key2)

但是在实际中，无法完全避免散列冲突。

## 1. 解决散列冲突的方法

### 1.1 开放寻址法（open addressing）

核心思想：如果出现了冲突，就重新探测一个空闲位置将元素插入。

如何探测？

#### 1.1.1 线性探测（Linear Probing）

核心思想：经过散列函数得到的散列值对应的位置已经被占用了，那么就从当前位置开始，依次向后查找，直到找到空闲位置。

查找元素时，比较下标为散列值的元素和要查找的元素。如果相等，则说明该元素就是要找的元素；否则就依次往后找。如果遍历到数组中的空闲位置仍然没找到，就说明要查找的元素没有在散列表中。

删除操作时，不能简单地只把要删除的元素设置为空。如果简单地设置为空，那么在下次查找某个元素时，可能查到该位置时，就判定该元素不在散列表里（实际上这个空的位置是我们后来删除的）。我们可以将删除的元素，特殊标记为 `deleted`。当线性探测查找时，遇到标记为 `deleted` 不要停下来，继续向下探测。

线性探测的缺点：当散列表中插入的数据越来越多时，散列冲突发生的可能性就会越来越大，空闲位置越来越少，线性探测的时间就会越来越久。极端情况下需要探测整个散列表，即最坏情况下的时间复杂度为 $O(n)$。

#### 1.1.2 二次探测（Quadratic probing）

二次探测，跟线性探测很像，线性探测每次探测的步长是 1，那它探测的下标序列就是 $hash(key)+0$，$hash(key)+1$，$hash(key)+2$，...。而二次探测探测的步长就变成了原来的“二次方”，也就是说，它探测的下标序列就是 $hash(key)+0$，$hash(key)+1^{2}$，$hash(key)+2^{2}$，...。

#### 1.1.3 双重散列（Double hashing）

使用一组 hash 函数 hash1(key)，hash2(key)，hash3(key), ...。我们先用第一个散列函数，如果计算得到的存储位置已经被占用，再用第二个散列函数，依次类推，直到找到空闲的存储位置。

---

不管采用哪种探测方法，当散列表中空闲位置不多的时候，散列冲突的概率就会大大提高。为了尽可能保证散列表的操作效率，一般情况下，我们会尽可能保证散列表中有一定比例的空闲槽位。我们用**装载因子**（load factor）来反映空位的多少。

```:no-line-numbers
散列表的装载因子 = 填入表中的元素个数/散列表的长度
```

装载因子越大，说明空闲位置越少，冲突越多，散列表的性能会下降。

### 1.2 链表法（chaining）

更常用的散列冲突解决办法，相比开放寻址法更简单。

如下图，每个“桶”（bucket）或“槽”（slot）都对应一条链表，所有散列值相同的元素都放到相同槽所对应的链表中。

<div align=center>
    <img src=/images/code/ds/chaining.png width=50%/>
</div>

插入 $O(1)$。查找、删除的时间复杂度跟链表的长度 k 成正比，即 $O(k)$。对于散列表叫均匀的散列函数，理论上来讲 $k=n/m$，n 表示散列中数据的个数，m 表示散列表中“槽”的个数。

## 2. 打造一个工业级水平的散列表

### 2.1 如何设计？

- 散列函数不能太复杂 -> 计算复杂 -> 间接影响散列表的性能
- 散列函数生成的值要尽可能随机且均匀分布 -> 避免或最小化散列冲突。即便出现冲突，散列到每个槽里的数据也会比较平均。

- 动态扩容 & 动态缩容

  - 动态扩容

    当装载因子过大时，也可以进行**动态扩容**，重新申请一个更大的散列表，将数据搬移到新的散列表中。如果每次扩容都申请一个原来散列表大小两倍的空间，原来装载因子为 0.8，则扩容之后的装载因子就下降为原来的一半，变成了 0.4。

    插入一个数据，最好情况下，不需要扩容，最好时间复杂度是 $O(1)$。最坏情况下，散列表装载因子过高，启动扩容，我们需要重新申请内存空间，重新计算哈希位置，并且搬移数据，所以时间复杂度是 $O(n)$。用摊还分析法，均摊情况下，时间复杂度接近最好情况，就是 $O(1)$。

  - 动态缩容
    实际上，对于动态散列表，随着数据的删除，散列表中的数据会越来越少，空闲空间会越来越多。如果我们对空间消耗非常敏感，我们可以在装载因子小于某个值之后，启动**动态缩容**。当然，如果我们更加在意执行效率，能够容忍多消耗一点内存空间，那就可以不用费劲来缩容了。

  - “一次性”扩容？
    有时，“一次性”扩容的开销会让用户崩溃，这时我们可以将扩容操作穿插在插入操作的过程中。

- 如何选择冲突解决方法？

  Java 中 LinkedHashMap 采用的是链表法解决冲突，ThreadLocalMap 通过线性探测的开放寻址法来结局冲突。

  - 开放寻址法

    - 优点：
      - 数据都存在数组中，可以有效利用 CPU 缓存加快查询进度。
      - 序列化比较简单。链表法包含指针，序列化起来没那么容易。
    - 缺点：
      - 删除数据时比较麻烦，需要特殊标记已经删除的数据
      - 由于所有数据都存储在一个数组中，于是相比链表法，其冲突的代价更高 -> 装载因子的上限不能太大 -> 更浪费内存空间
    - 应用：当数据量比较小、装载因子小时，适合采用开放寻址法。

  - 链表法
    - 优点：
      - 对内存的利用率比开放寻址法要高。
      - 对大装载因子的容忍度更高。开放寻址法只适用装载因子小于 1 的情况。
    - 缺点：
      - 链表要存指针，所以对于比较小的对象的存储，比较消耗内存，还有可能让内存的消耗翻倍。
      - 链表中的结点是零散分布在内存中的（非连续），所以对 CPU 缓存不友好。
    - 应用
      - 实际上，我们对链表法稍加改造，可以实现一个更加高效的散列表。那就是，我们将链表法中的链表改造为其他高效的动态数据结构，比如跳表、红黑树。这样，即便出现散列冲突，极端情况下，所有的数据都散列到同一个桶内，那最终退化成的散列表的查找时间也只不过是 O(logn)。这样也就有效避免了前面讲到的散列碰撞攻击。
      - 比较适合存储大对象、大数据量的散列表，而且，比起开放寻址法，它更加灵活，支持更多的优化策略，比如用红黑树代替链表。

### 2.2 工业级散列表

Java 中的 HashMap。

#### 2.2.1 初始大小

HashMap 默认的初始的大小是 16。

这个默认值是可以设置的，如果事先知道大概的数据量有多大，可以通过修改默认初始大小，减少动态扩容的次数，这样会大大提高 HashMap 的性能。

#### 2.2.2 装在因子和动态扩容

最大装载因子默认是 0.75，当 HashMap 中元素个数超过 0.75 \* capacity 时，就会扩容，每次扩容为原来的两倍大小。

#### 2.2.3 散列冲突解决方法

HashMap 底层采用链表法来解决冲突。即使负载因子和散列函数设计得再合理，也免不了会出现拉链过长的情况，一旦出现拉链过长，则会严重影响 HashMap 的性能。

于是，在 JDK1.8 版本中，为了对 HashMap 做进一步优化，引入了红黑树。当链表长度太长（默认超过 8）时，链表就转换为红黑树。我们可以利用红黑树快速增删改查的特点，提高 HashMap 的性能。当红黑树结点个数少于 8 个的时候，又会将红黑树转化为链表。因为在数据量较小的情况下，红黑树要维护平衡，比起链表来，性能上的优势并不明显。

#### 2.2.4 散列函数

```java
int hash(Object key) {
    int h = key.hashCode()；
    return (h ^ (h >>> 16)) & (capicity -1); //capicity表示散列表的大小
}
```

其中，hashCode() 返回的是 Java 对象的 hash code。比如 String 类型的对象的 hashCode() 就是下面这样：

```java
public int hashCode() {
  int var1 = this.hash;
  if(var1 == 0 && this.value.length > 0) {
    char[] var2 = this.value;
    for(int var3 = 0; var3 < this.value.length; ++var3) {
      var1 = 31 * var1 + var2[var3];
    }
    this.hash = var1;
  }
  return var1;
}
```

## 3. 散列表+链表

[用链表实现 LRU](/coding/data-structure/3-linked-list.html#_3-1-实现-lru) 的时间复杂度是 O(n)。但是，如果组合使用散列表和链表，就会将时间复杂度降低到 O(1)。

<div align=center>
    <img src=/images/code/ds/lru.webp width=60%/>
</div>

每个结点除了有前驱指针 `pre` 和后继指针 `next` 外，还有 `hnext` 用于维护散列表的拉链。

## 4 哈希算法的应用

哈希算法的应用非常非常多，如安全加密、唯一标识、数据校验、散列函数、负载均衡、数据分片、分布式存储。

### 4.1 安全加密

最常用于加密的哈希算法是 MD5（MD5 Message-Digest Algorithm，MD5 消息摘要算法）和 SHA（Secret Hash Algorithm，安全散列算法）。另外还有 DES（Data Encryption Standard，数据加密标准）、AES（Advanced Encryption Standard，高级加密标准）。

用户密码不能明文存储，最好选择相对安全的加密算法。

如果用户的信息被“脱库”，黑客虽然拿到的是加密后的密文，但可以通过“猜”的方式破解密码——即**字典攻击**。有些用户的密码设置的很简单，很容易就”猜“出来了。

对于字典攻击，我们可以引入一个盐（salt），跟用户的密码组合在一起增加密码的复杂度。用组合之后的字符串来做哈希算法加密。

### 4.2 唯一标识

需要在海量图片库中搜索图片的情况下，可以给每个图片一个唯一标识，或者说信息摘要。比如，从图片的二进制码串开头取 100 字节、中间取 100 字节、最后取 100 字节，然后将这 300 个字节放到一块，通过哈希算法得到一个哈希字符串，作为秃瓢的唯一标识。

要想继续提高效率，可以把每个图片的唯一标识、图片在文库中的路径，都存储在散列表中。

### 4.3 数据校验

使用 BT 下载时，文件会被拆分成很多小块，等所有文件下载完成后再组装成一个完整的文件，用户就可以正常打开该文件了。

> BT 协议，通常指 BitTorrent 协议，是一种用于点对点文件共享（P2P）的协议。

BT 协议很复杂，校验的方法也很多，下面介绍其中一种思路：

通过哈希算法，对所有的文件块分别取哈希值，并保存在种子文件中。因为哈希算法对数据敏感，内容不同，哈希值不同。于是，当文件块下载完成后，可以通过相同的哈希算法，对下载好的文件块逐一求哈希值，然后跟种子文件中保存的哈希值比对。如果不同，就说明该文件块不完整或者被篡改了，需要重新下载该文件块。

:::details BT 协议的工作原理

1. 种子文件：用户首先下载一个 .torrent 文件，称为“种子文件”，它包含了有关共享文件的信息（文件名、大小、分片数量等），以及追踪器的地址（用于协调用户之间的通信）。
2. 追踪器：追踪器是一个服务器，负责跟踪哪些用户拥有文件的哪些部分，并将这个信息传递给其他用户，从而使他们可以互相连接。
3. Peer（节点）：下载文件的用户称为 peer。每个 peer 既可以从其他用户那里下载文件的部分，也可以将自己下载的部分上传给其他用户。
4. 种子（Seeder）和下载者（Leecher）：当一个 peer 完全下载完文件后，仍然可以继续上传文件部分给其他用户，这时候它就被称为“种子”。尚未下载完文件的用户称为“下载者”或“吸血鬼”。
5. 分片下载：BT 协议将文件分为许多小片段，用户可以从多个其他 peer 那里同时下载不同的片段，极大加快了下载速度。
6. 去中心化：与传统的集中式下载方式不同，BT 协议通过去中心化的方式工作，文件的每个部分来自不同的用户，而不是从一个中心服务器上获取数据。

:::

### 4.4 散列函数

散列函数是设计一个散列表的关键。它直接决定了散列冲突的概率和散列表的性能。

不过，相对哈希算法的其他应用，散列函数对于散列算法冲突的要求要低很多。即便出现个别散列冲突，只要不是过于严重，我们都可以通过开放寻址法或者链表法解决。

不仅如此，散列函数对于散列算法计算得到的值，是否能反向解密也并不关心。散列函数中用到的散列算法，更加关注散列后的值是否能平均分布，也就是，一组数据是否能均匀地散列在各个槽中。

除此之外，散列函数执行的快慢，也会影响散列表的性能，所以，散列函数用的散列算法一般都比较简单，比较追求效率。

### 4.5 负载均衡

负载均衡算法有很多，比如轮询、随机、加权轮询等。那如何才能实现一个会话粘滞（session sticky）的负载均衡算法呢？也就是说，我们需要在同一个客户端上，在一次会话中的所有请求都路由到同一个服务器上。

最直接的方法是，维护一张映射关系表，这张表的内容是客户端 IP 地址或者会话 ID 与服务器编号的映射关系。客户端发出的每次请求，都要先在映射表中查找应该路由到的服务器编号，然后再请求编号对应的服务器。

这种方法简单直观，但也有几个弊端：如果客户端很多，映射表可能会很大，比较浪费内存空间；客户端下线、上线，服务器扩容、缩容都会导致映射失效，这样维护映射表的成本就会很大。

如果借助哈希算法，这些问题都可以非常完美地解决。我们可以通过哈希算法，对客户端 IP 地址或者会话 ID 计算哈希值，将取得的哈希值与服务器列表的大小进行取模运算，最终得到的值就是应该被路由到的服务器编号。 这样，我们就可以把同一个 IP 过来的所有请求，都路由到同一个后端服务器上。

### 4.6 数据分片

1. 如何统计“搜索关键词”出现的次数？

假如我们有 1T 的日志文件，这里面记录了用户的搜索关键词，我们想要快速统计出每个关键词被搜索的次数，该怎么做呢？我们来分析一下。

这个问题有两个难点，第一个是搜索日志很大，没办法放到一台机器的内存中。第二个难点是，如果只用一台机器来处理这么巨大的数据，处理时间会很长。

针对这两个难点，我们可以先对数据进行分片，然后采用多台机器处理的方法，来提高处理速度。

具体的思路是这样的：为了提高处理的速度，我们用 n 台机器并行处理。我们从搜索记录的日志文件中，依次读出每个搜索关键词，并且通过哈希函数计算哈希值，然后再跟 n 取模，最终得到的值，就是应该被分配到的机器编号。这样，哈希值相同的搜索关键词就被分配到了同一个机器上。也就是说，同一个搜索关键词会被分配到同一个机器上。每个机器会分别计算关键词出现的次数，最后合并起来就是最终的结果。

实际上，这里的处理过程也是 MapReduce 的基本设计思想。

2. 如何快速判断图片是否在图库中？

我们同样可以对数据进行分片，然后采用多机处理。我们准备 n 台机器，让每台机器只维护某一部分图片对应的散列表。我们每次从图库中读取一个图片，计算唯一标识，然后与机器个数 n 求余取模，得到的值就对应要分配的机器编号，然后将这个图片的唯一标识和图片路径发往对应的机器构建散列表。

当我们要判断一个图片是否在图库中的时候，我们通过同样的哈希算法，计算这个图片的唯一标识，然后与机器个数 n 求余取模。假设得到的值是 k，那就去编号 k 的机器构建的散列表中查找。

实际上，针对这种海量数据的处理问题，我们都可以采用多机分布式处理。借助这种分片的思路，可以突破单机内存、CPU 等资源的限制。

### 4.7 分布式存储

我们有海量的数据需要缓存，所以一个缓存机器肯定是不够的。于是，我们就需要将数据分布在多台机器上。该如何决定将哪个数据放到哪个机器上呢？

我们可以借用前面数据分片的思想，即通过哈希算法对数据取哈希值，然后对机器个数取模，这个最终值就是应该存储的缓存机器编号。

但是，如果数据增多，原来的 10 个机器已经无法承受了，我们就需要扩容了，比如扩到 11 个机器，这时候麻烦就来了，这里并不是简单地加个机器就可以了。

原来的数据是通过与 10 来取模的，新加了一台机器中，我们对数据按照 11 取模。原来的数据在两次取模下的结果是不一样的，即被分配到了不同的机器上。所以，所有的数据都要重新计算哈希值，然后重新搬到正确的机器上。这就造成了缓存中的数据一下就都失效了，所有的数据请求会穿透缓存，直接去请求数据库，压垮数据库。

为了避免加入新机后要做大量的数据迁移，可以使用**一致性哈希算法**。

假设有 k 个机器，我们将整个数据范围划分为 m 个区间（m 远大于 k），那么每个机器负责 m/k 个小区间。当加入新机器时，就将某几个小区间的数据，从原来的机器搬移到新的机器中。这样，几不用全部重新哈希、搬移数据，也保持了各个机器上数据规模的均衡。

:::tips 区块链中哈希算法的应用

区块链是一个个区块组成的，每个区块链中的区块都有一个独特的哈希值，该哈希值是通过对区块内容（如交易数据、时间戳、前一区块的哈希值等）进行哈希运算生成的。

一旦区块内的任意数据被篡改，重新计算出的哈希值将完全不同，从而检测出数据篡改。
:::
