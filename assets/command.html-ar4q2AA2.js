import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, f as createBaseVNode, g as createTextVNode, o as openBlock } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
const _hoisted_2 = ["src"];
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[33] || (_cache[33] = createStaticVNode('<h2 id="_1-用户" tabindex="-1"><a class="header-anchor" href="#_1-用户"><span>1. 用户</span></a></h2><ul><li><p>修改密码：<code>passwd</code></p></li><li><p>创建用户：</p><ul><li>创建新用户：<code>useradd user-name</code></li><li>为新用户设置密码：<code>passwd user-name</code></li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以使用 <code>-h</code> 参数查看帮助。如 <code>useradd -h</code>。</p><p>如果想看更详细的文档，可以通过 <code>man useradd</code> 获得。</p></div><p>通过命令创建的用户，放在 /etc/passwd 文件里。组的信息在 /etc/group 中。我们可以通过 <code>cat</code> 命令查看。</p><p>我们在 passwd 文件中看到了新创建的用户（用户名为 test）:</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">test:x:1003:1003::/home/test:/bin/sh</span>\n<span class="line"></span></code></pre></div><p>x 的地方是密码。然后是用户 ID 和组 ID。</p><p>root 用户的主目录为 <code>/root</code>。test 用户的主目录为 <code>/home/test</code>。</p><p><code>/bin/bash</code> 的位置是用于配置登录后的默认交互命令行的</p><h2 id="_2-浏览文件" tabindex="-1"><a class="header-anchor" href="#_2-浏览文件"><span>2. 浏览文件</span></a></h2><ul><li><p><code>cd</code>: change directory</p></li><li><p><code>ls</code>: 列出当前目录下的文件（Windows 中可以用 <code>dir</code>）</p><ul><li><code>-l</code>: 用列表方式列出<div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">drwxr-xr-x  2 root root  4096 Aug  8 11:10 a/</span>\n<span class="line">-rw-r--r--  1 root root   161 Jul  9  2019 b</span>\n<span class="line"></span></code></pre></div><ul><li>第一个字段的第一个字符是<strong>文件类型</strong>。<code>-</code> 表示普通文件，<code>d</code> 表示目录。</li><li>第一个字段的剩下 9 个字段是<strong>模式</strong>，即<strong>权限位</strong>（access permission bits）。3 个一组，每一组 rwx 分别表示“读（read）”、“写（write）”、“执行（execute）”。每一组分别表示文件所属的用户权限、文件所属的组权限、其他用户的权限。</li><li>第二个字段是<strong>硬链接</strong>（hard link）的数目</li><li>第三个字段是<strong>所属用户</strong>，第四个字段是<strong>所属组</strong>。第五个字段是文件的大小。第六个字段是文件被修改的日期。最后是文件名。</li></ul></li></ul></li><li><p><code>chmod 711 a</code>: 修改权限</p></li><li><p><code>chown</code>: 改变所属用户</p></li><li><p><code>chgrp</code>: 改变所属组</p></li><li><p>该文件所属用户可以使用 <code>chmod</code> 修改权限，但是 <code>chown</code>、<code>chgrp</code> 命令只能由 sudoers（在 /etc/sudoers 内查看） 来做。</p></li></ul><h2 id="_3-安装软件" tabindex="-1"><a class="header-anchor" href="#_3-安装软件"><span>3. 安装软件</span></a></h2><h3 id="_3-1-没有软件管家" tabindex="-1"><a class="header-anchor" href="#_3-1-没有软件管家"><span>3.1 没有软件管家</span></a></h3><ul><li>下载：最安全的方式是到官网下载，对于 Linux 可以下载 <code>rpm</code> 或者 <code>deb</code>。</li></ul><blockquote><p>Linux 有两大体系，CentOS 体系使用的是 <code>rpm</code>，Ubuntu 体系用的是 <code>deb</code>。</p></blockquote><ul><li>安装：</li></ul>', 16)),
    createVNode(_component_CodeTabs, {
      id: "141",
      data: [{ "id": "CentOS" }, { "id": "Ubuntu" }],
      "tab-id": "安装"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("CentOS")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("Ubuntu")
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
                  createBaseVNode("span", { class: "token function" }, "rpm"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token parameter variable" }, "-i"),
                  createTextVNode(" jdk-XXX_linux-x64_bin.rpm")
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
                  createTextVNode("dpkg "),
                  createBaseVNode("span", { class: "token parameter variable" }, "-i"),
                  createTextVNode(" jdk-XXX_linux-x64_bin.deb")
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
    _cache[34] || (_cache[34] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "查看软件列表：")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "156",
      data: [{ "id": "CentOS" }, { "id": "Ubuntu" }],
      "tab-id": "查看软件列表"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
        createTextVNode("CentOS")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
        createTextVNode("Ubuntu")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
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
                  createBaseVNode("span", { class: "token function" }, "rpm"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token parameter variable" }, "-qa")
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
      tab1: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
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
                  createTextVNode("dpkg "),
                  createBaseVNode("span", { class: "token parameter variable" }, "-l")
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
    _cache[35] || (_cache[35] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "使用 grep 搜索工具或 more、less")
      ],
      -1
      /* HOISTED */
    )),
    _cache[36] || (_cache[36] = createBaseVNode(
      "p",
      null,
      "这个列表很长，很难找到刚安装的软件。如果知道软件有某个关键词，可以使用搜索工具 grep:",
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "179",
      data: [{ "id": "CentOS" }, { "id": "Ubuntu" }],
      "tab-id": "使用 grep"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[8] || (_cache[8] = [
        createTextVNode("CentOS")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[9] || (_cache[9] = [
        createTextVNode("Ubuntu")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[10] || (_cache[10] = [
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
                  createBaseVNode("span", { class: "token function" }, "rpm"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token parameter variable" }, "-qa"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "|"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "grep"),
                  createTextVNode(" jdk")
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
      tab1: withCtx(({ value, isActive }) => _cache[11] || (_cache[11] = [
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
                  createTextVNode("dpkg "),
                  createBaseVNode("span", { class: "token parameter variable" }, "-l"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "|"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "grep"),
                  createTextVNode(" jdk")
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
    _cache[37] || (_cache[37] = createStaticVNode('<p>如果不知道关键词，可以使用 <code>rpm -qa | more</code> 和 <code>rpm -qa | less</code>（<code>dpkg -l | more</code> 和 <code>dpkg -l | less</code>），可以将很长的结果分页展示。</p><pre><code>`more` 只能向后翻页，到最后一页自动结束；`less` 前后都能翻，输入 q 可以退出。\n</code></pre><ul><li>删除软件：<code>rpm -e</code> 或 <code>dpkg -r</code></li></ul><h3 id="_3-2-有软件管家" tabindex="-1"><a class="header-anchor" href="#_3-2-有软件管家"><span>3.2 有软件管家</span></a></h3><p>CentOS 的软件管家是 <code>yum</code>，Ubuntu 对应的是 <code>apt-get</code>。</p><ul><li>搜索：可以通过管道 grep、more、less 来进行过滤。</li></ul>', 6)),
    createVNode(_component_CodeTabs, {
      id: "216",
      data: [{ "id": "CentOS" }, { "id": "Ubuntu" }],
      "tab-id": "搜索"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[12] || (_cache[12] = [
        createTextVNode("CentOS")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[13] || (_cache[13] = [
        createTextVNode("Ubuntu")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[14] || (_cache[14] = [
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
                createBaseVNode("span", { class: "line" }, "yum search jdk"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[15] || (_cache[15] = [
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
                  createBaseVNode("span", { class: "token function" }, "apt-cache"),
                  createTextVNode(" search jdk")
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
    _cache[38] || (_cache[38] = createBaseVNode(
      "p",
      null,
      "选中对应的版本就可以进行安装了",
      -1
      /* HOISTED */
    )),
    _cache[39] || (_cache[39] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "安装：")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "239",
      data: [{ "id": "CentOS" }, { "id": "Ubuntu" }],
      "tab-id": "安装"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[16] || (_cache[16] = [
        createTextVNode("CentOS")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[17] || (_cache[17] = [
        createTextVNode("Ubuntu")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[18] || (_cache[18] = [
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
                  createTextVNode("yum "),
                  createBaseVNode("span", { class: "token function" }, "install"),
                  createTextVNode(" java-11-openjdk.x86_64")
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
      tab1: withCtx(({ value, isActive }) => _cache[19] || (_cache[19] = [
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
                  createBaseVNode("span", { class: "token function" }, "apt-get"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "install"),
                  createTextVNode(" openjdk-19-jdk")
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
    _cache[40] || (_cache[40] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "卸载：")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "259",
      data: [{ "id": "CentOS" }, { "id": "Ubuntu" }],
      "tab-id": "卸载"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[20] || (_cache[20] = [
        createTextVNode("CentOS")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[21] || (_cache[21] = [
        createTextVNode("Ubuntu")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[22] || (_cache[22] = [
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
                createBaseVNode("span", { class: "line" }, "yum erase java-11-openjdk.x86_64"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" })
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      tab1: withCtx(({ value, isActive }) => _cache[23] || (_cache[23] = [
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
                  createBaseVNode("span", { class: "token function" }, "apt-get"),
                  createTextVNode(" purge openjdk-9-jdk")
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
    _cache[41] || (_cache[41] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "配置源")
      ],
      -1
      /* HOISTED */
    )),
    _cache[42] || (_cache[42] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Linux 允许我们配置从哪里下载这些软件，CentOS 的配置文件在 "),
        createBaseVNode("code", null, "/etc/yum.repos.d/CentOS-Base.repo"),
        createTextVNode(" 里；Ubuntu 的配置文件在 "),
        createBaseVNode("code", null, "/etc/apt/sources.list"),
        createTextVNode(" 里。")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("details", _hoisted_1, [
      _cache[28] || (_cache[28] = createBaseVNode(
        "summary",
        null,
        "源配置文件内容示例",
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeTabs, {
        id: "283",
        data: [{ "id": "CentOS" }, { "id": "Ubuntu" }],
        "tab-id": "源"
      }, {
        title0: withCtx(({ value, isActive }) => _cache[24] || (_cache[24] = [
          createTextVNode("CentOS")
        ])),
        title1: withCtx(({ value, isActive }) => _cache[25] || (_cache[25] = [
          createTextVNode("Ubuntu")
        ])),
        tab0: withCtx(({ value, isActive }) => _cache[26] || (_cache[26] = [
          createBaseVNode(
            "div",
            {
              class: "language-text line-numbers-mode",
              "data-highlighter": "prismjs",
              "data-ext": "text",
              "data-title": "text"
            },
            [
              createBaseVNode("pre", null, [
                createBaseVNode("code", null, [
                  createBaseVNode("span", { class: "line" }, "[base]"),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, "name=CentOS-$releasever - Base - 163.com"),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, "baseurl=http://mirrors.163.com/centos/$releasever/os/$basearch/"),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, "gpgcheck=1"),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, "gpgkey=http://mirrors.163.com/centos/RPM-GPG-KEY-CentOS-7"),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" })
                ])
              ]),
              createBaseVNode("div", {
                class: "line-numbers",
                "aria-hidden": "true",
                style: { "counter-reset": "line-number 0" }
              }, [
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" }),
                createBaseVNode("div", { class: "line-number" })
              ])
            ],
            -1
            /* HOISTED */
          )
        ])),
        tab1: withCtx(({ value, isActive }) => _cache[27] || (_cache[27] = [
          createBaseVNode(
            "div",
            {
              class: "language-text",
              "data-highlighter": "prismjs",
              "data-ext": "text",
              "data-title": "text"
            },
            [
              createBaseVNode("pre", null, [
                createBaseVNode("code", null, [
                  createBaseVNode("span", { class: "line" }, "deb http://mirrors.tencentyun.com/ubuntu jammy main restricted"),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, "deb http://mirrors.tencentyun.com/ubuntu jammy-updates main restricted"),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, "deb http://mirrors.tencentyun.com/ubuntu jammy universe"),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, "deb http://mirrors.tencentyun.com/ubuntu jammy-updates universe"),
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
      })
    ]),
    _cache[43] || (_cache[43] = createBaseVNode(
      "h3",
      {
        id: "_3-3-下载-配置环境",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_3-3-下载-配置环境"
        }, [
          createBaseVNode("span", null, "3.3 下载 + 配置环境")
        ])
      ],
      -1
      /* HOISTED */
    )),
    _cache[44] || (_cache[44] = createBaseVNode(
      "p",
      null,
      "无论是哪种下载方式，最终都是下载文件，存放在某路径下，然后再相应的配置文件中进行配置。主执行文件会存放在 /usr/bin 或 /usr/sbin 下面，其他的库文件会在 /var 下面，配置文件在 /etc 下面。",
      -1
      /* HOISTED */
    )),
    _cache[45] || (_cache[45] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("所以还可以用一种简单粗暴的方法。使用 "),
        createBaseVNode("code", null, "wget"),
        createTextVNode(" 将安装好的文件直接下载下来，然后解压缩。例如在 jdk 官网中的安装目录里，Windows 有 jdk-XXX_Windows-x64_bin.zip，这是 Windows 下常用的压缩模式。Linux 有 jdk-XXX_linux-x64_bin.tar.gz，这是 Linux 下常用的压缩模式。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[46] || (_cache[46] = createBaseVNode(
      "p",
      null,
      "如果要解压 zip，需要先安装 zip 程序：",
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "309",
      data: [{ "id": "CentOS" }, { "id": "Ubuntu" }],
      "tab-id": "安装 zip"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[29] || (_cache[29] = [
        createTextVNode("CentOS")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[30] || (_cache[30] = [
        createTextVNode("Ubuntu")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[31] || (_cache[31] = [
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
                  createTextVNode("yum "),
                  createBaseVNode("span", { class: "token function" }, "install"),
                  createTextVNode(" zip.x86_64 unzip.x86_64")
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
      tab1: withCtx(({ value, isActive }) => _cache[32] || (_cache[32] = [
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
                  createBaseVNode("span", { class: "token function" }, "apt-get"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "install"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "zip"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token function" }, "unzip")
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
    _cache[47] || (_cache[47] = createStaticVNode('<p>如果是 tar.gz，Linux 默认有 tar 程序，使用下面命令就可以解压缩了</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">tar</span> xvzf jdk-XXX_linux-x64_bin.tar.gz</span>\n<span class="line"></span></code></pre></div><p>解压缩之后，需要配置环境变量，可以通过 <code>export</code> 命令来配置。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/root/jdk-XXX_linux-x64</span>\n<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span></span>\n<span class="line"></span></code></pre></div><p>export 命令仅在当前命令行的会话中管用，一旦退出重新登录进来，就不管用了。我们需要一个可以永远起作用的配置。</p><p>在当前用户的默认工作目录（/root 或 /home/test）下，有 <code>.bashrc</code> 文件。每次登录的时候，这个文件都会运行。也可以通过 <code>source .bashrc</code> 手动执行。</p><p>可以使用 vim 文本编辑器来编辑 <code>.bashrc</code> 文件。如果默认没安装，可以使用 <code>yum install vim</code> 或 <code>apt-get install vim</code> 安装。</p><p>在 <code>.bashrc</code> 文件中加入 export 的两行，进行保存。</p><div class="hint-container tip"><p class="hint-container-title">几个配置文件的区别</p><ul><li><p>/etc/profile</p><p>为系统的每个用户设置环境信息，当用户第一次登录时，该文件被执行。并从 /etc/profile.d 目录下的配置文件中收集 shell 的设置。</p><p>修改这个文件需要 source 一下，修改才会生效。此修改对每个用户都生效。</p></li><li><p>/etc/bashrc（Ubuntu 中为 /etc/bash.bashrc ）</p><p>为每一个运行 bash shell 的用户执行此文件。当 bash shell 被打开时，该文件被读取。</p><p>修改这个文件不用重启，重新打开一个 bash 即可生效。</p></li><li><p>~/.bash_profile（Ubuntu 中为 ~/.profile）</p><p>用该文件输入专用于自己使用的 shell 信息，当用户登录时，该文件仅执行一次。它设置一些环境变量，执行用户的 ~/.bashrc 文件。</p><p>修改后需要 source。只对当前用户生效。</p></li><li><p>.bashrc 是个人的配置信息存储文件，只对单用户有效</p><p>包含专属于自己的 bash shell 的 bash 信息。当登录以及每次打开新的 shell 时，该文件被读取。</p><p>不需要重启、只需要重新打开一个 bash 即可生效。</p></li></ul></div><h2 id="_4-运行程序" tabindex="-1"><a class="header-anchor" href="#_4-运行程序"><span>4. 运行程序</span></a></h2><h3 id="_4-1-通过-shell-在交互命令行里运行" tabindex="-1"><a class="header-anchor" href="#_4-1-通过-shell-在交互命令行里运行"><span>4.1 通过 shell 在交互命令行里运行</span></a></h3><p>只要文件有 x 执行权限，都可以在该目录下用 <code>./filename</code> 执行。如果程序在 PATH 中，那么直接调 <code>filename</code> 就可以了。</p><p>在命令行中运行的程序，一旦交互命令行退出，程序就停止运行了。</p><h3 id="_4-2-后台运行" tabindex="-1"><a class="header-anchor" href="#_4-2-后台运行"><span>4.2 后台运行</span></a></h3><p><code>nohup</code>（no hang up, 不挂起），即交互命令行退出时，程序还要在。</p><p>这时程序不能霸占交互命令行，应该在后台运行。最后要加一个 <code>&amp;</code>，表示在后台运行。</p><p>原本可以利用命令行进行输出，现在可以输出到文件。</p><p>最终命令的一般形式是：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">nohup</span> <span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> out.file <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span></span>\n<span class="line"></span></code></pre></div><ul><li><code>1</code>: 文件描述符 1，表示标准输出</li><li><code>2</code>: 文件描述符 2，表示标准错误输出</li><li><code>2&gt;&amp;1</code>: 表示标准输出和错误输出合并了，合并到 out.file 中</li></ul><p>那么如何关闭这个进程呢？</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> 关键字  <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span></span>\n<span class="line"></span></code></pre></div><ul><li><code>ps -ef</code> 可以单独执行，列出所有正在运行的程序，<code>grep</code> 做搜索</li><li><code>awk</code> 可以灵活地对文本进行处理，<code>awk &#39;{print $2}&#39;</code> 是指第二列的内容，是运行的程序 ID</li><li><code>xargs</code> 命令将前面的输入作为后面命令 <code>kill -9</code> 的输入，也就是传左边命令截取的进程号给命令 <code>kill -9</code></li></ul><h3 id="_4-3-以服务的方式运行" tabindex="-1"><a class="header-anchor" href="#_4-3-以服务的方式运行"><span>4.3 以服务的方式运行</span></a></h3><p>Linux 中有服务，比如数据库 MySQL 就可以以服务的方式运行。</p><p>Ubuntu 中，我们可以使用 <code>apt-get install mysql-server</code> 安装 MySQL，调用命令 <code>systemctl start mysql</code> 启动 MySQL，通过 <code>systemctl enable mysql</code> 设置开机启动。对应的，在 /lib/systemd/system 目录下会创建一个 XXX.service 的配置文件，里面定义了如何启动、如何关闭。</p><p>在 CentOS 中有些特殊，MySQL 被 Oracle 收购后，因为担心授权问题，改为使用 MariaDB，它是 MySQL 的一个分支。安装：<code>yum install mariadb-server mariadb</code>。启动：<code>systemctl start mariadb</code>。开机启动：<code>systemctl enable mariadb</code>。同样，会在 /usr/lib/systemd/system 下创建 XXX.service 的配置文件，从而成为一个服务。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>查看更多 <a href="http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html" target="_blank" rel="noopener noreferrer">systemd</a></p></div><h2 id="_5-关机-重启" tabindex="-1"><a class="header-anchor" href="#_5-关机-重启"><span>5. 关机 &amp; 重启</span></a></h2><p><code>shutdown -h now</code> 现在就关机</p><p><code>reboot</code> 重启</p><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结"><span>6. 总结</span></a></h2>', 32)),
    createBaseVNode("iframe", {
      src: _ctx.$withBase("/mind-map/linux-command.html"),
      width: "100%",
      height: "400",
      frameborder: "0",
      scrolling: "No",
      leftmargin: "0",
      topmargin: "0"
    }, null, 8, _hoisted_2)
  ]);
}
const command_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "command.html.vue"]]);
const data = JSON.parse('{"path":"/basic/os/command.html","title":"Linux 命令","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Linux 命令","description":null,"article":false,"date":"2023-08-23T00:00:00.000Z"},"headers":[{"level":2,"title":"1. 用户","slug":"_1-用户","link":"#_1-用户","children":[]},{"level":2,"title":"2. 浏览文件","slug":"_2-浏览文件","link":"#_2-浏览文件","children":[]},{"level":2,"title":"3. 安装软件","slug":"_3-安装软件","link":"#_3-安装软件","children":[{"level":3,"title":"3.1 没有软件管家","slug":"_3-1-没有软件管家","link":"#_3-1-没有软件管家","children":[]},{"level":3,"title":"3.2 有软件管家","slug":"_3-2-有软件管家","link":"#_3-2-有软件管家","children":[]},{"level":3,"title":"3.3 下载 + 配置环境","slug":"_3-3-下载-配置环境","link":"#_3-3-下载-配置环境","children":[]}]},{"level":2,"title":"4. 运行程序","slug":"_4-运行程序","link":"#_4-运行程序","children":[{"level":3,"title":"4.1 通过 shell 在交互命令行里运行","slug":"_4-1-通过-shell-在交互命令行里运行","link":"#_4-1-通过-shell-在交互命令行里运行","children":[]},{"level":3,"title":"4.2 后台运行","slug":"_4-2-后台运行","link":"#_4-2-后台运行","children":[]},{"level":3,"title":"4.3 以服务的方式运行","slug":"_4-3-以服务的方式运行","link":"#_4-3-以服务的方式运行","children":[]}]},{"level":2,"title":"5. 关机 & 重启","slug":"_5-关机-重启","link":"#_5-关机-重启","children":[]},{"level":2,"title":"6. 总结","slug":"_6-总结","link":"#_6-总结","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":7.42,"words":2225},"filePathRelative":"basic/os/command.md","localizedDate":"2023年8月23日","excerpt":"<h2>1. 用户</h2>\\n<ul>\\n<li>\\n<p>修改密码：<code>passwd</code></p>\\n</li>\\n<li>\\n<p>创建用户：</p>\\n<ul>\\n<li>创建新用户：<code>useradd user-name</code></li>\\n<li>为新用户设置密码：<code>passwd user-name</code></li>\\n</ul>\\n</li>\\n</ul>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>可以使用 <code>-h</code> 参数查看帮助。如 <code>useradd -h</code>。</p>\\n<p>如果想看更详细的文档，可以通过 <code>man useradd</code> 获得。</p>\\n</div>"}');
export {
  command_html as comp,
  data
};
