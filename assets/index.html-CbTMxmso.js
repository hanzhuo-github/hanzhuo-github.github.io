import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, o as openBlock, g as createTextVNode, f as createBaseVNode } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/images/basic/network/dhcp_broadcast.png";
const _imports_1 = "/images/basic/network/DHCP_offer.png";
const _imports_2 = "/images/basic/network/dhcp_request.png";
const _imports_3 = "/images/basic/network/dhcp_ack.png";
const _imports_4 = "/images/basic/network/pxe.png";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createStaticVNode('<p>专栏「<a href="https://time.geekbang.org/column/intro/100007101?tab=catalog" target="_blank" rel="noopener noreferrer">趣谈网络协议</a>」学习记录</p><h2 id="_1-协议三要素-语法、语义、顺序" tabindex="-1"><a class="header-anchor" href="#_1-协议三要素-语法、语义、顺序"><span>1. 协议三要素：语法、语义、顺序</span></a></h2><h2 id="_2-ip-和-cidr" tabindex="-1"><a class="header-anchor" href="#_2-ip-和-cidr"><span>2. IP 和 CIDR</span></a></h2><ul><li><p>IP 分类</p><table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">前缀位</th><th style="text-align:left;">网络地址位数</th><th style="text-align:left;">剩余的位数</th><th style="text-align:left;">网络数</th><th style="text-align:left;">每个网络的主机数</th><th style="text-align:left;">IP 地址范围</th><th style="text-align:left;">私有 IP 地址范围</th></tr></thead><tbody><tr><td style="text-align:left;">A类地址</td><td style="text-align:left;">0</td><td style="text-align:left;">8</td><td style="text-align:left;">24</td><td style="text-align:left;">128</td><td style="text-align:left;">16,777,214</td><td style="text-align:left;">0.0.0.0~127.255.255.255</td><td style="text-align:left;">10.0.0.0~10.255.255.255</td></tr><tr><td style="text-align:left;">B类地址</td><td style="text-align:left;">10</td><td style="text-align:left;">16</td><td style="text-align:left;">16</td><td style="text-align:left;">16,384</td><td style="text-align:left;">65,534</td><td style="text-align:left;">128.0.0.0~191.255.255.255</td><td style="text-align:left;">172.16.0.0~172.31.255.255</td></tr><tr><td style="text-align:left;">C类地址</td><td style="text-align:left;">110</td><td style="text-align:left;">24</td><td style="text-align:left;">8</td><td style="text-align:left;">2,097,152</td><td style="text-align:left;">254</td><td style="text-align:left;">192.0.0.0~223.255.255.255</td><td style="text-align:left;">192.168.0.0~192.168.255.255</td></tr><tr><td style="text-align:left;">D类地址（群播）</td><td style="text-align:left;">1110</td><td style="text-align:left;">未定义</td><td style="text-align:left;">未定义</td><td style="text-align:left;">未定义</td><td style="text-align:left;">未定义</td><td style="text-align:left;">224.0.0.0~239.255.255.255</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">E类地址（保留）</td><td style="text-align:left;">1111</td><td style="text-align:left;">未定义</td><td style="text-align:left;">未定义</td><td style="text-align:left;">未定义</td><td style="text-align:left;">未定义</td><td style="text-align:left;">240.0.0.0~255.255.255.255</td><td style="text-align:left;"></td></tr></tbody></table></li><li><p>无类型域间选路（CIDR）</p><ul><li>打破原来设计的几类地址的做法，将 IP 地址分为两部分：网络号 + 主机号。如 IP 为 10.0.24.16/22，22 指的是前22位是网络号，后 10 位是主机号。</li><li>广播地址：10.0.27.255。当发出一个目的地址为 10.0.27.255 的分组时，它将被分发给该网段上的所有计算机。</li><li>子网掩码：255.255.252.0。</li><li>子网掩码 &amp; IP 地址 = 网路号</li></ul></li><li><p>公有 IP 地址、私有 IP 地址</p></li><li><p>组播地址（之后 VXLAN 协议会涉及到）</p></li></ul><h2 id="_3-ip-addr-ifconfig" tabindex="-1"><a class="header-anchor" href="#_3-ip-addr-ifconfig"><span>3. <code>ip addr</code>/<code>ifconfig</code></span></a></h2><ul><li><p>查看 IP 地址：Windows -&gt; <code>ipconfig</code>, Linux -&gt; <code>ifconfig</code> 或者 <code>ip addr</code></p><ul><li>如果在一个被剪裁的很小的 Linux 系统中没有 <code>ifconfig</code> 或者 <code>ip addr</code>，可以自行安装 net-tools 和 iproute2 这两个工具。</li></ul><blockquote><p>net-tools 起源于 BSD，自 2001 年起，Linux 社区已经对其停止维护，而 iproute2 旨在取代 net-tools，并提供了一些新功能。一些 Linux 发行版已经停止支持 net-tools，只支持 iproute2。 net-tools 通过 procfs(/proc) 和 ioctl 系统调用去访问和改变内核网络配置，而 iproute2 则通过 netlink 套接字接口与内核通讯。 net-tools 中工具的名字比较杂乱，而 iproute2 则相对整齐和直观，基本是 ip 命令加后面的子命令。</p></blockquote><ul><li><p>ip 后面的 <code>scope global eth0</code> 指的是 eth0 这张网卡是 global，是可以对外的，能够接收来自各个地方的包。而<code>scope host lo</code> 这张网卡仅仅可以供本机星湖通信。</p><p>lo -&gt; loopback(环回接口)，往往会被分配到 127.0.0.1 这个地址。这个地址用于本机通信，经过内核处理后直接返回，不会在任何网络中出现。</p></li><li><p>在 IP 地址的上一行是 link/ether fa:16:3e:c7:79:75 brd ff:ff:ff:ff:ff:ff，这个被称为 MAC 地址，是一个网卡的物理地址，用十六进制，6 个 byte 表示。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">MAC 地址全局全局唯一，为什么还要用 IP 呢？</p><p>MAC 地址是唯一的标识，但是要将一个网络包从一个地方传到另一个地方，除了需要确定的地址，还需要定位功能，而 IP 地址次具有远程定位功能（类比身份证 &amp; 地址）。 MAC 地址具有一定定位功能，但是通信范围比较小，局限在一个子网里。一旦跨网，MAC 地址就不行了。</p></div><ul><li>网络设备的状态标识（net_device flags）：<code>&lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc mq state UP group default qlen 1000</code><ul><li>UP: 网卡处于启动状态</li><li>BROADCAST: 该网卡有广播地址，可以发送广播包</li><li>MULTICAST: 网卡可以发送多播包</li><li>LOWER_UP: 表示 L1 是启动的，即网线插着</li><li>MTU500: 最大传输单元 MTU 为 1500，以太网的默认值 MTU 是 MAC 层的概念。以太网规定正文部分不允许超过 1500 字节。正文里有 IP 的头、TCP 的头、HTTP的头。如果放不下，就要分片传输。</li><li>qdisc mq: qdisc(queueing discipline)，排队规则。如果需要通过某个网络接口发送数据包，它都需要按照为这个接口配置的 qdisc（排队规则）把数据包加入队列。 <ul><li>最简单的 qdisc 是 pfifo，不对进入的数据包做任何处理，数据包采用先进先出的方式通过队列</li><li>pfifo_fast 稍微复杂一点，他的队列包括三个波段（band），在每个波段里使用先进先出。 <ul><li>band 0 的优先级最高。</li><li>数据包按照服务类型（Type of Service, TOS）被分配到三个 band 里。TOS 是 IP 头中的一个字段，表示当前的包的优先级。</li></ul></li><li>mq 是多队列。</li></ul></li></ul></li></ul></li></ul><h2 id="_4-ip-地址配置" tabindex="-1"><a class="header-anchor" href="#_4-ip-地址配置"><span>4. IP 地址配置</span></a></h2>', 7)),
    createVNode(_component_CodeTabs, {
      id: "328",
      data: [{ "id": "net-tools" }, { "id": "iproute2" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("net-tools")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("iproute2")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createBaseVNode(
          "div",
          {
            class: "language-bash",
            "data-highlighter": "prismjs",
            "data-ext": "sh",
            "data-title": "sh"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("$ "),
                  createBaseVNode("span", { class: "token function" }, "sudo"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "ifconfig"),
                  createTextVNode(" eth1 "),
                  createBaseVNode("span", { class: "token number" }, "10.0"),
                  createTextVNode(".0.1/24")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("$ "),
                  createBaseVNode("span", { class: "token function" }, "sudo"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "ifconfig"),
                  createTextVNode(" eth1 up")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
        createBaseVNode(
          "div",
          {
            class: "language-bash",
            "data-highlighter": "prismjs",
            "data-ext": "sh",
            "data-title": "sh"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("$ "),
                  createBaseVNode("span", { class: "token function" }, "sudo"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "ip"),
                  createTextVNode(" addr "),
                  createBaseVNode("span", { class: "token function" }, "add"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token number" }, "10.0"),
                  createTextVNode(".0.1/24 dev eth1")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("$ "),
                  createBaseVNode("span", { class: "token function" }, "sudo"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "ip"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "link"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token builtin class-name" }, "set"),
                  createTextVNode(" up eth1")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[5] || (_cache[5] = createStaticVNode('<p>当配置的地址不在同一个网段时，包就无法发送出去了。</p><p>例如，周围的机器都是 192.168.1.x，但是配置的 IP 是 192.2.2.4。现在来 ping 192.168.1.6，在把包发出去之前要先把 MAC 层填好，源 MAC 直接填入，但是目的 MAC 需要费一番功夫。</p><p>Linux 首先会判断，目的 IP 和源 IP 是否在同一网段，或者和我的一个网卡是否在同一个网段。只有是一个网段的，他才会发送 ARP 请求，获取 MAC 地址。</p><p>如果不是一个网段的，那么它会企图把包发送到网关。</p><p>如果你配置了网关，Linux 会获取网关的 MAC 地址，然后将包发出去。对于 192.168.1.6 来说，虽然路过它的这个包 IP 是它，但是 MAC 地址不是它的，所以它的网卡不会把包收进去。</p><p>如果没配网关，那么包完全发不出去。</p><p>如果直接将网关配置成 192.168.1.6 呢？完全不可能，Linux 不会允许配置成功。网关需要和当前的网络至少一个网卡是同一个网段的，192.2.2.4 的网关不可能是 192.168.1.6。</p><p>实际分配的时候，一般都是网络管理员分配 IP 地址，且不会直接用命令，而是放在一个配置文件里面。不同系统的配置文件格式不同，但是无非就是 CIDR、子网掩码、广播地址和网关地址。</p><h2 id="_5-动态主机配置协议-dhcp-dynamic-host-configuration-protocol" tabindex="-1"><a class="header-anchor" href="#_5-动态主机配置协议-dhcp-dynamic-host-configuration-protocol"><span>5. 动态主机配置协议（DHCP, Dynamic Host Configuration Protocol）</span></a></h2><p>我们需要自动配置的协议。使用 DHCP，网络管理员只需要配置一段共享的 IP 地址。每一台新接入的机器都通过 DHCP 协议，来这个 IP 地址里申请，然后自动配置好。等人走了或者用完了，还回去，这样其他的机器也能用。</p><p>所以，如果是数据中心里面的服务器，IP 一旦配置好，基本不会变，这就相当于买房自己装修。</p><h3 id="dhcp-的工作方式" tabindex="-1"><a class="header-anchor" href="#dhcp-的工作方式"><span>DHCP 的工作方式</span></a></h3><p>共 4 次广播，使用 UDP 协议。</p><h4 id="step-1-dhcp-discover" tabindex="-1"><a class="header-anchor" href="#step-1-dhcp-discover"><span>Step 1: DHCP Discover</span></a></h4><p>当一台机器新加入一个网络时，只知道自己的 MAC 地址。这时的沟通基本靠“吼”，我来啦，有人吗？这一步称为 <strong>DHCP Discover</strong>。</p><p>新来的机器使用 IP 地址 0.0.0.0 发送了一个广播包，目的 IP 是 255.255.255.255。广播包封装了 UDP，UDP 封装了 BOOTP。DHCP 是 BOOTP 的增强版，但是抓包后可能看到的名称还是 BOOTP 协议。</p><p>广播包内容如下：我是新来的（boot request），我的 MAC 地址是这个，我没 IP，谁能租给我个 IP 地址！</p><div align="center"><img src="' + _imports_0 + '" width="50%/"></div><h4 id="step-2-dhcp-offer" tabindex="-1"><a class="header-anchor" href="#step-2-dhcp-offer"><span>Step 2: DHCP Offer</span></a></h4><p>如果一个网络管理员在网络里配置了 DHCP Server，它就相当于这些 IP 的管理员。由于 MAC 是唯一的，所以 DHCP Server 知道来了个“新人”，需要租给它一个 IP 地址。这个过程称为 <strong>DHCP Offer</strong>。DHCP Server 会为此客户保留为它提供的 IP 地址，不会为其他客户分配同一个 IP 地址。</p><p>DHCP Offer 的格式如下，里面有给新人分配的地址：</p><div align="center"><img src="' + _imports_1 + '" width="50%/"></div><p>DHCP Server 仍然使用广播地址作为目的地址，因为此时请求分配 IP 的新人还没有自己的 IP。DHCP Server 为它分配了一个可以用的 IP，并发送了子网掩码、网关和 IP 地址租用期等信息。</p><h4 id="step-3-dhcp-request" tabindex="-1"><a class="header-anchor" href="#step-3-dhcp-request"><span>Step 3: DHCP Request</span></a></h4><p>如果有多个 DHCP Server，这台机器会收到多个 IP 地址。他会选择其中一个 DHCP Offer，一般是最先到达的那个，并向网络发送一个 DHCP Request 广播数据包，包中包含客户端的 MAC 地址、接受的租约中的 IP 地址、提供此租约的 DHCP 服务器地址等，并且告诉所有的 DHCP Server 它将接受哪一台服务器提供的 IP 地址，告诉其他 DHCP 服务器，谢谢你们的接纳，并撤销他们提供的 IP 地址，以便提供给下一个 IP 租用请求者。</p><div align="center"><img src="' + _imports_2 + '" width="50%/"></div><p>此时，由于还没有得到 DHCP Server 的最后确认，客户端仍然使用 0.0.0.0 为源 IP 地址、255.255.255.255 为目标地址进行广播。在 BOOTP 里面，接受某个 DHCP Server 分配的 IP。</p><h4 id="step-4-dhcp-ack" tabindex="-1"><a class="header-anchor" href="#step-4-dhcp-ack"><span>Step 4: DHCP ACK</span></a></h4><p>最终租约达成的时候，还是需要广播一下，让大家都知道。</p><p>当 DHCP Server 收到客户机的 DHCP request 之后，会广播返回给客户机一个 DHCP ACK 消息包，表明已经接受客户机的选择，并将这一 IP 地址的合法租用信息和其他的配置信息都放入该广播包，发给客户机，欢迎它加入网络大家庭。</p><div align="center"><img src="' + _imports_3 + '" width="50%/"></div><h2 id="_6-ip-地址回收和续租" tabindex="-1"><a class="header-anchor" href="#_6-ip-地址回收和续租"><span>6. IP 地址回收和续租</span></a></h2><p>客户机在租期过去 50% 的时候，直接向为其提供 IP 的 DHCP Server 发送 DHCP request 消息包。客户机接收到该服务器回应的 DHCP ACK 消息包，会根据包中提供的新租期以及其他更新的 TCP/IP 参数，更新自己的配置。这样，IP 租用期更新就完成了。</p><h2 id="_7-预启动执行环境-pxe-pre-boot-execution-environment" tabindex="-1"><a class="header-anchor" href="#_7-预启动执行环境-pxe-pre-boot-execution-environment"><span>7. 预启动执行环境（PXE, Pre-boot Execution Environment）</span></a></h2><p>DHCP 协议中还有个细节。网络管理员不仅能自动分配 IP 地址，还能帮你自动安装操作系统！</p><p>数据中心的管理员肯呢个一下子拿到几百台控的机器，所以他希望的不仅仅是自动分配 IP 地址，还要自动安装系统。装好系统之后自动分配 IP 地址，直接启动就能用了。</p><p>BIOS 启动之后才能安装操作系统，但是在没安装操作系统之前，是没有启动扇区的，所以这个过程叫<a href="http://www.360doc.com/content/23/0513/05/1080483684_1080483684.shtml" target="_blank" rel="noopener noreferrer">预启动执行环境（PXE）</a>。</p><p>PXE 协议分为客户端和服务器端，由于没有操作系统，只能先把客户端放在 BIOS 里面。计算机启动是，BIOS 把 PXE 客户端调入内存里，就可以连接到服务器做一些操作了。</p><blockquote><p>PXE 客户端（通常也称为 PXE 固件）是网卡固件的一部分，被网卡厂商固化在了网卡的 ROM 中。</p></blockquote><p>PXE 客户端自己需要有 IP 地址。PEX 客户端启动的时候，啥都没有。但是可以发送 DHCP 请求，让 DHCP Server 给它分配一个地址。</p><p>PXE 客户端有了自己的地址，那它怎么知道 PXE 服务器在哪呢？</p><p>DHCP Server 除了分配 IP 地址以外，还可以做一些其他的事情。下面是一个 DHCP Server 的样例配置：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ddns-update-style interim;</span>\n<span class="line">ignore client-updates;</span>\n<span class="line">allow booting;</span>\n<span class="line">allow bootp;</span>\n<span class="line">subnet 192.168.1.0 netmask 255.255.255.0</span>\n<span class="line">{</span>\n<span class="line">option routers 192.168.1.1;</span>\n<span class="line">option subnet-mask 255.255.255.0;</span>\n<span class="line">option time-offset -18000;</span>\n<span class="line">default-lease-time 21600;</span>\n<span class="line">max-lease-time 43200;</span>\n<span class="line">range dynamic-bootp 192.168.1.240 192.168.1.250;</span>\n<span class="line">filename &quot;pxelinux.0&quot;;</span>\n<span class="line">next-server 192.168.1.180;</span>\n<span class="line">}</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想使用 PXE，需要配置 <code>next-server</code>，指向 PXE 服务器的地址，还要配置初始启动文件 <code>filename</code>。</p><p>这样 PXE 客户端启动后，发送 DHCP，除了能得到 IP 地址，还能知道 PXE 服务器在哪。也可以知道如何从 PXE 服务器上下载某个文件，去初始化操作系统。</p><h3 id="pxe-的工作过程" tabindex="-1"><a class="header-anchor" href="#pxe-的工作过程"><span>PXE 的工作过程</span></a></h3><ol><li><p>PXE 客户端启动。通过 DHCP 协议告诉 DHCP Server 我是“新人”，我来了。DHCP Server 租给他一个 IP 地址，同时也给它 PXE 服务器的地址、启动文件 <code>pxelinux.0</code>。</p></li><li><p>PXE 客户端去 PXE 服务器下载启动文件。系在启动文件使用的是 TFTP 协议，所以 PXE 服务器上，还需要有一个 TFTP 服务器。PXE 客户端向 TFTP 服务器请求下载这个文件，TFTP 服务器将文件传给它。</p></li><li><p>PXE 收到了这个文件，开始执行该文件。这个文件会指示 PXE 客户端，向 TFTP 服务器请求计算机的配置信息 <code>pxelinux.cfg</code>。TFTP 服务器会给 PXE 客户端一个配置文件，里面会指明内核在哪里、initramfs 在哪里。PXE 客户端会请求这些文件。</p></li><li><p>启动 Linux 内核。</p></li></ol><div align="center"><img src="' + _imports_4 + '" width="50%/"></div>', 48))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/basic/network/","title":"通信协议综述","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"通信协议综述","description":null,"article":false},"headers":[{"level":2,"title":"1. 协议三要素：语法、语义、顺序","slug":"_1-协议三要素-语法、语义、顺序","link":"#_1-协议三要素-语法、语义、顺序","children":[]},{"level":2,"title":"2. IP 和 CIDR","slug":"_2-ip-和-cidr","link":"#_2-ip-和-cidr","children":[]},{"level":2,"title":"3. ip addr/ifconfig","slug":"_3-ip-addr-ifconfig","link":"#_3-ip-addr-ifconfig","children":[]},{"level":2,"title":"4. IP 地址配置","slug":"_4-ip-地址配置","link":"#_4-ip-地址配置","children":[]},{"level":2,"title":"5. 动态主机配置协议（DHCP, Dynamic Host Configuration Protocol）","slug":"_5-动态主机配置协议-dhcp-dynamic-host-configuration-protocol","link":"#_5-动态主机配置协议-dhcp-dynamic-host-configuration-protocol","children":[{"level":3,"title":"DHCP 的工作方式","slug":"dhcp-的工作方式","link":"#dhcp-的工作方式","children":[{"level":4,"title":"Step 1: DHCP Discover","slug":"step-1-dhcp-discover","link":"#step-1-dhcp-discover","children":[]},{"level":4,"title":"Step 2: DHCP Offer","slug":"step-2-dhcp-offer","link":"#step-2-dhcp-offer","children":[]},{"level":4,"title":"Step 3: DHCP Request","slug":"step-3-dhcp-request","link":"#step-3-dhcp-request","children":[]},{"level":4,"title":"Step 4: DHCP ACK","slug":"step-4-dhcp-ack","link":"#step-4-dhcp-ack","children":[]}]}]},{"level":2,"title":"6. IP 地址回收和续租","slug":"_6-ip-地址回收和续租","link":"#_6-ip-地址回收和续租","children":[]},{"level":2,"title":"7. 预启动执行环境（PXE, Pre-boot Execution Environment）","slug":"_7-预启动执行环境-pxe-pre-boot-execution-environment","link":"#_7-预启动执行环境-pxe-pre-boot-execution-environment","children":[{"level":3,"title":"PXE 的工作过程","slug":"pxe-的工作过程","link":"#pxe-的工作过程","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":10.54,"words":3161},"filePathRelative":"basic/network/index.md","localizedDate":"2024年12月24日","excerpt":"<p>专栏「<a href=\\"https://time.geekbang.org/column/intro/100007101?tab=catalog\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">趣谈网络协议</a>」学习记录</p>\\n<h2>1. 协议三要素：语法、语义、顺序</h2>\\n<h2>2. IP 和 CIDR</h2>\\n<ul>\\n<li>\\n<p>IP 分类</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">Class</th>\\n<th style=\\"text-align:left\\">前缀位</th>\\n<th style=\\"text-align:left\\">网络地址位数</th>\\n<th style=\\"text-align:left\\">剩余的位数</th>\\n<th style=\\"text-align:left\\">网络数</th>\\n<th style=\\"text-align:left\\">每个网络的主机数</th>\\n<th style=\\"text-align:left\\">IP 地址范围</th>\\n<th style=\\"text-align:left\\">私有 IP 地址范围</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">A类地址</td>\\n<td style=\\"text-align:left\\">0</td>\\n<td style=\\"text-align:left\\">8</td>\\n<td style=\\"text-align:left\\">24</td>\\n<td style=\\"text-align:left\\">128</td>\\n<td style=\\"text-align:left\\">16,777,214</td>\\n<td style=\\"text-align:left\\">0.0.0.0~127.255.255.255</td>\\n<td style=\\"text-align:left\\">10.0.0.0~10.255.255.255</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">B类地址</td>\\n<td style=\\"text-align:left\\">10</td>\\n<td style=\\"text-align:left\\">16</td>\\n<td style=\\"text-align:left\\">16</td>\\n<td style=\\"text-align:left\\">16,384</td>\\n<td style=\\"text-align:left\\">65,534</td>\\n<td style=\\"text-align:left\\">128.0.0.0~191.255.255.255</td>\\n<td style=\\"text-align:left\\">172.16.0.0~172.31.255.255</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">C类地址</td>\\n<td style=\\"text-align:left\\">110</td>\\n<td style=\\"text-align:left\\">24</td>\\n<td style=\\"text-align:left\\">8</td>\\n<td style=\\"text-align:left\\">2,097,152</td>\\n<td style=\\"text-align:left\\">254</td>\\n<td style=\\"text-align:left\\">192.0.0.0~223.255.255.255</td>\\n<td style=\\"text-align:left\\">192.168.0.0~192.168.255.255</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">D类地址（群播）</td>\\n<td style=\\"text-align:left\\">1110</td>\\n<td style=\\"text-align:left\\">未定义</td>\\n<td style=\\"text-align:left\\">未定义</td>\\n<td style=\\"text-align:left\\">未定义</td>\\n<td style=\\"text-align:left\\">未定义</td>\\n<td style=\\"text-align:left\\">224.0.0.0~239.255.255.255</td>\\n<td style=\\"text-align:left\\"></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">E类地址（保留）</td>\\n<td style=\\"text-align:left\\">1111</td>\\n<td style=\\"text-align:left\\">未定义</td>\\n<td style=\\"text-align:left\\">未定义</td>\\n<td style=\\"text-align:left\\">未定义</td>\\n<td style=\\"text-align:left\\">未定义</td>\\n<td style=\\"text-align:left\\">240.0.0.0~255.255.255.255</td>\\n<td style=\\"text-align:left\\"></td>\\n</tr>\\n</tbody>\\n</table>\\n</li>\\n<li>\\n<p>无类型域间选路（CIDR）</p>\\n<ul>\\n<li>打破原来设计的几类地址的做法，将 IP 地址分为两部分：网络号 + 主机号。如 IP 为 10.0.24.16/22，22 指的是前22位是网络号，后 10 位是主机号。</li>\\n<li>广播地址：10.0.27.255。当发出一个目的地址为 10.0.27.255 的分组时，它将被分发给该网段上的所有计算机。</li>\\n<li>子网掩码：255.255.252.0。</li>\\n<li>子网掩码 &amp; IP 地址 = 网路号</li>\\n</ul>\\n</li>\\n<li>\\n<p>公有 IP 地址、私有 IP 地址</p>\\n</li>\\n<li>\\n<p>组播地址（之后 VXLAN 协议会涉及到）</p>\\n</li>\\n</ul>"}');
export {
  index_html as comp,
  data
};