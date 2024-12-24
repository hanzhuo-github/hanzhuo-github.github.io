import { r as resolveComponent, c as createElementBlock, f as createBaseVNode, g as createTextVNode, d as createVNode, e as withCtx, b as createStaticVNode, o as openBlock } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[16] || (_cache[16] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("a", {
          href: "https://huggingface.co/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Hugging Face Hub"),
        createTextVNode(" 是主网站，我们可以在里面找到各种最新的模型和数据集，也可以上传自己的模型和数据集。")
      ],
      -1
      /* HOISTED */
    )),
    _cache[17] || (_cache[17] = createBaseVNode(
      "p",
      null,
      "其中的模型不局限于 🤗 Transformers 或者 NLP。你可以自己去探索。",
      -1
      /* HOISTED */
    )),
    _cache[18] || (_cache[18] = createBaseVNode(
      "p",
      null,
      "模型都用 Git 进行托管，允许版本控制和重现。另外，在 Hub 上共享模型会自动为该模型部署托管的推理 API。",
      -1
      /* HOISTED */
    )),
    _cache[19] || (_cache[19] = createBaseVNode(
      "h2",
      {
        id: "_1-使用预训练模型",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_1-使用预训练模型"
        }, [
          createBaseVNode("span", null, "1. 使用预训练模型")
        ])
      ],
      -1
      /* HOISTED */
    )),
    _cache[20] || (_cache[20] = createBaseVNode(
      "p",
      null,
      "如我们要使用 camembert-base checkpoints.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_CodeTabs, {
      id: "15",
      data: [{ "id": "pipeline" }, { "id": "model architecture" }, { "id": "Auto* Class" }],
      "tab-id": "python"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("pipeline")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("model architecture")
      ])),
      title2: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
        createTextVNode("Auto* Class")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
        createBaseVNode(
          "div",
          {
            class: "language-python",
            "data-highlighter": "prismjs",
            "data-ext": "py",
            "data-title": "py"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "# 使用 pipeline")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(" transformers "),
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(" pipeline")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("camembert_fill_mask "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" pipeline"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"fill-mask"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" model"),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createBaseVNode("span", { class: "token string" }, '"camembert-base"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("results "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" camembert_fill_mask"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"Le camembert est <mask> :)"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
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
      tab1: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
        createBaseVNode(
          "div",
          {
            class: "language-python",
            "data-highlighter": "prismjs",
            "data-ext": "py",
            "data-title": "py"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "# 直接使用 model architecture")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(" transformers "),
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(" CamembertTokenizer"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" CamembertForMaskedLM")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("tokenizer "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" CamembertTokenizer"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("from_pretrained"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"camembert-base"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("model "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" CamembertForMaskedLM"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("from_pretrained"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"camembert-base"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
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
      tab2: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
        createBaseVNode(
          "div",
          {
            class: "language-python",
            "data-highlighter": "prismjs",
            "data-ext": "py",
            "data-title": "py"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token comment" }, "# 推荐使用 Auto* Class，因为这种实现与 architecture 无关")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(" transformers "),
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(" AutoTokenizer"),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(" AutoModelForMaskedLM")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("tokenizer "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" AutoTokenizer"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("from_pretrained"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"camembert-base"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("model "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" AutoModelForMaskedLM"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("from_pretrained"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token string" }, '"camembert-base"'),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
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
    _cache[21] || (_cache[21] = createStaticVNode('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用预训练模型时，可以在 model card 中查看它是如何训练的，在哪些数据集上训练的，局限性和 bias 。</p></div><h2 id="_2-共享预训练模型" tabindex="-1"><a class="header-anchor" href="#_2-共享预训练模型"><span>2. 共享预训练模型</span></a></h2><p>创建模型仓库的三种方法：</p><ul><li>使用 <code>push_to_hub</code> API</li><li>使用 <code>huggingface_hub</code> python 库</li><li>在 web 页面上创建</li></ul><p>创建好仓库后，就可以通过 git 或者 git-lfs 上传文件了。</p><h3 id="_2-1-创建模型仓库" tabindex="-1"><a class="header-anchor" href="#_2-1-创建模型仓库"><span>2.1 创建模型仓库</span></a></h3><h4 id="_2-1-1-使用-push-to-hub-api" tabindex="-1"><a class="header-anchor" href="#_2-1-1-使用-push-to-hub-api"><span>2.1.1 使用 <code>push_to_hub</code> API</span></a></h4><p>你需要身份令牌一遍 huggingface_hub 知道你的权限。</p>', 8)),
    createVNode(_component_CodeTabs, {
      id: "66",
      data: [{ "id": "Notebook" }, { "id": "Terminal" }]
    }, {
      title0: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
        createTextVNode("Notebook")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
        createTextVNode("Terminal")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[8] || (_cache[8] = [
        createBaseVNode(
          "div",
          {
            class: "language-python",
            "data-highlighter": "prismjs",
            "data-ext": "py",
            "data-title": "py"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createBaseVNode("span", { class: "token keyword" }, "from"),
                  createTextVNode(" huggingface_hub "),
                  createBaseVNode("span", { class: "token keyword" }, "import"),
                  createTextVNode(" notebook_login")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("notebook_login"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token punctuation" }, ")")
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
      tab1: withCtx(({ value, isActive }) => _cache[9] || (_cache[9] = [
        createBaseVNode(
          "div",
          {
            class: "language-python",
            "data-highlighter": "prismjs",
            "data-ext": "py",
            "data-title": "py"
          },
          [
            createBaseVNode("pre", null, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("huggingface"),
                  createBaseVNode("span", { class: "token operator" }, "-"),
                  createTextVNode("cli login")
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
    _cache[22] || (_cache[22] = createStaticVNode('<p>如果你使用 Trainer API 训练模型，将模型上传至 Hub 最简单的方式就是在定义 TrainerArguments 时配置 <code>push_to_hub=True</code></p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> transformers <span class="token keyword">import</span> TrainerArguments</span>\n<span class="line"></span>\n<span class="line">training_args <span class="token operator">=</span> TrainerArguments<span class="token punctuation">(</span></span>\n<span class="line">    <span class="token string">&quot;bert-finetuned-mrpc&quot;</span><span class="token punctuation">,</span> save_strategy<span class="token operator">=</span><span class="token string">&quot;epoch&quot;</span><span class="token punctuation">,</span> push_to_hub<span class="token operator">=</span><span class="token boolean">True</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>当你调用 <code>trainer.train()</code> 时，Trainer 会在每次保存 model 时（按照上面的配置，是每个 epoch）将你的 model 上传到 Hub 中对应的仓库上。仓库名称为你选择的输出路径（如上面的 bert-finetuned-mrpc），你也可以用 <code>hub_model_id=&quot;a_different_name&quot;</code> 来设置不同的名称。如果要将 model 上传到你所在的组织下，你可以使用 <code>hub_model_id=&quot;my_organization/mu_repo_name&quot;</code>。</p><p>训练结束后，使用 <code>trainer.push_to_hub()</code> 上传最后一版 model。它会生成 model card。</p><p>在较低层的实现中，我们可以直接通过 models、tokenizers、configuration 对象的 <code>push_to_hub()</code> 方法来访问 Model Hub。这种方式既可以创建仓库，又能将 model 和 tokenizer 文件直接推到仓库中。</p><p>首先创建 model 和 tokenizer。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForMaskedLM<span class="token punctuation">,</span> AutoTokenizer</span>\n<span class="line"></span>\n<span class="line">checkpoint <span class="token operator">=</span> <span class="token string">&quot;camembert-base&quot;</span></span>\n<span class="line"></span>\n<span class="line">model <span class="token operator">=</span> AutoModelForMaskedLM<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span></span>\n<span class="line">tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以训练模型、对模型进行微调、向 tokenizer 中增加 tokens。做完你想做的事情时候，你可以使用 <code>push_to_hub()</code> 将 model 推到仓库中</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">model<span class="token punctuation">.</span>push_to_hub<span class="token punctuation">(</span><span class="token string">&quot;dummy-model&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>这将会创建名为 dummy-model 的仓库，其中会填上你的 model 文件。</p><p>同样，对 tokenizer 也可做同样的操作。现在你的仓库中有了全部所需的文件。</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">tokenizer<span class="token punctuation">.</span>push_to_hub<span class="token punctuation">(</span><span class="token string">&quot;dummy-model&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>如果你想将仓库放到组织下：</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">tokenizer<span class="token punctuation">.</span>push_to_hub<span class="token punctuation">(</span><span class="token string">&quot;dummy-model&quot;</span><span class="token punctuation">,</span> organization<span class="token operator">=</span><span class="token string">&quot;huggingface&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>如果你想使用某个特定的 Hugging Face token：</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">tokenizer<span class="token punctuation">.</span>push_to_hub<span class="token punctuation">(</span><span class="token string">&quot;dummy-model&quot;</span><span class="token punctuation">,</span> organization<span class="token operator">=</span><span class="token string">&quot;huggingface&quot;</span><span class="token punctuation">,</span> use_auth_token<span class="token operator">=</span><span class="token string">&quot;&lt;TOKEN&gt;&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><h4 id="_2-1-2-使用-huggingface-hub-python-库" tabindex="-1"><a class="header-anchor" href="#_2-1-2-使用-huggingface-hub-python-库"><span>2.1.2 使用 <code>huggingface_hub</code> python 库</span></a></h4><p>你需要使用 CLI 的登录命令</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">huggingface-cli login</span>\n<span class="line"></span></code></pre></div><p>huggingface_hub 库提供了很多方法和类。下面是和仓库创建、删除等有关的方法</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> huggingface_hub <span class="token keyword">import</span> <span class="token punctuation">(</span></span>\n<span class="line">    <span class="token comment"># User management</span></span>\n<span class="line">    login<span class="token punctuation">,</span></span>\n<span class="line">    logout<span class="token punctuation">,</span></span>\n<span class="line">    whoami<span class="token punctuation">,</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token comment"># Repository creation and management</span></span>\n<span class="line">    create_repo<span class="token punctuation">,</span></span>\n<span class="line">    delete_repo<span class="token punctuation">,</span></span>\n<span class="line">    update_repo_visibility<span class="token punctuation">,</span></span>\n<span class="line"></span>\n<span class="line">    <span class="token comment"># And some methods to retrieve/change information about the content</span></span>\n<span class="line">    list_models<span class="token punctuation">,</span></span>\n<span class="line">    list_datasets<span class="token punctuation">,</span></span>\n<span class="line">    list_metrics<span class="token punctuation">,</span></span>\n<span class="line">    list_repo_files<span class="token punctuation">,</span></span>\n<span class="line">    upload_file<span class="token punctuation">,</span></span>\n<span class="line">    delete_file<span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 创建仓库</span></span>\n<span class="line"><span class="token keyword">from</span> huggingface_hub <span class="token keyword">import</span> create_repo</span>\n<span class="line"></span>\n<span class="line">create_repo<span class="token punctuation">(</span><span class="token string">&quot;dummy-model&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token comment"># 可以指定 organization</span></span>\n<span class="line"><span class="token comment"># create_repo(&quot;dummy-model&quot;, organization=&quot;huggingface&quot;)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了可以指定 organization，还有一些参数：</p><ul><li>private: 是否对其他人可见</li><li>token: 是否想用给定的 token 覆盖缓存中的 token</li><li>repo_type: 是都要创建 dataset 或 space（而非创建 model）。接受的值可以是 “dataset” 或 “space”</li></ul><h4 id="_2-1-3-使用-web-页面" tabindex="-1"><a class="header-anchor" href="#_2-1-3-使用-web-页面"><span>2.1.3 使用 web 页面</span></a></h4><p>这里不展开介绍，按照页面提示进行即可。</p><h3 id="_2-2-上传-model-files" tabindex="-1"><a class="header-anchor" href="#_2-2-上传-model-files"><span>2.2 上传 model files</span></a></h3><p>Hugging Face Hub 的文件管理系统基于 git（对于 regular files）和 git-lfs（对于大文件，large file storage）。</p><p>下面我们将介绍三种上传文件到 Hub 的方法。</p><h4 id="_2-3-1-upload-file-方法" tabindex="-1"><a class="header-anchor" href="#_2-3-1-upload-file-方法"><span>2.3.1 <code>upload_file</code> 方法</span></a></h4><p>使用 <code>upload_file()</code> 不需要 git 或 git-lfs，它使用 http post 请求将文件直接传到 🤗 Hub。但是它没有办法处理 5GB 以上的文件。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> huggingface_hub <span class="token keyword">import</span> upload_file</span>\n<span class="line"></span>\n<span class="line">upload_file<span class="token punctuation">(</span></span>\n<span class="line">    <span class="token string">&quot;&lt;path_to_file&gt;/config.json&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    path_in_repo<span class="token operator">=</span><span class="token string">&quot;config.json&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    repo_id<span class="token operator">=</span><span class="token string">&quot;&lt;namespace&gt;/dummy-model&quot;</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一些其他的参数：</p><ul><li>token</li><li>repo_type</li></ul><h4 id="_2-3-2-repository-类" tabindex="-1"><a class="header-anchor" href="#_2-3-2-repository-类"><span>2.3.2 <code>Repository</code> 类</span></a></h4><p><code>Repository</code> 类以于 git 的方式管理本地仓库。使用该类需要安装 git 和 git-lfs</p>', 36)),
    createBaseVNode("details", _hoisted_1, [
      _cache[14] || (_cache[14] = createBaseVNode(
        "summary",
        null,
        "安装 git-lfs",
        -1
        /* HOISTED */
      )),
      _cache[15] || (_cache[15] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("参考 "),
          createBaseVNode("a", {
            href: "https://git-lfs.com/",
            target: "_blank",
            rel: "noopener noreferrer"
          }, "Git Large File Storage")
        ],
        -1
        /* HOISTED */
      )),
      createVNode(_component_CodeTabs, {
        id: "189",
        data: [{ "id": "Ubuntu" }, { "id": "Mac" }],
        "tab-id": "shell"
      }, {
        title0: withCtx(({ value, isActive }) => _cache[10] || (_cache[10] = [
          createTextVNode("Ubuntu")
        ])),
        title1: withCtx(({ value, isActive }) => _cache[11] || (_cache[11] = [
          createTextVNode("Mac")
        ])),
        tab0: withCtx(({ value, isActive }) => _cache[12] || (_cache[12] = [
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
                    createBaseVNode("span", { class: "token function" }, "curl"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token parameter variable" }, "-s"),
                    createTextVNode(" https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh "),
                    createBaseVNode("span", { class: "token operator" }, "|"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "sudo"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "bash")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token function" }, "sudo"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "apt-get"),
                    createTextVNode(),
                    createBaseVNode("span", { class: "token function" }, "install"),
                    createTextVNode(" git-lfs")
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
        tab1: withCtx(({ value, isActive }) => _cache[13] || (_cache[13] = [
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
                    createTextVNode("brew "),
                    createBaseVNode("span", { class: "token function" }, "install"),
                    createTextVNode(" git-lfs")
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
      })
    ]),
    _cache[23] || (_cache[23] = createStaticVNode('<p>:::</p><p>我们使用刚刚建好的仓库。首先我们克隆远端仓库：</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> huggingface_hub <span class="token keyword">import</span> Repository</span>\n<span class="line"></span>\n<span class="line">repo <span class="token operator">=</span> Repository<span class="token punctuation">(</span><span class="token string">&quot;&lt;path_to_dummy_folder&gt;&quot;</span><span class="token punctuation">,</span> clone_from<span class="token operator">=</span><span class="token string">&quot;&lt;namespace&gt;/dummy-model&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>这将在本地创建文件夹&lt;path_to_dummy_folder&gt;。该文件夹中包含 .gitattributes 文件。</p><p>我们还会使用一些传统的 git 方法，参考<a href="https://github.com/huggingface/huggingface_hub/tree/main/src/huggingface_hub#advanced-programmatic-repository-management" target="_blank" rel="noopener noreferrer">文档</a>：</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">repo<span class="token punctuation">.</span>git_pull<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">repo<span class="token punctuation">.</span>git_add<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">repo<span class="token punctuation">.</span>git_commit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">repo<span class="token punctuation">.</span>git_push<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">repo<span class="token punctuation">.</span>git_tag<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>现在我们有想要推到 Hub 上的 model 和 tokenizer，并成功 clone 了仓库。</p><p>首先，确保我们本地 clone 的版本是最新的：</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">repo<span class="token punctuation">.</span>git_pull<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>然后我们就可以保存 model 和 tokenizer files 了：</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">model<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span><span class="token string">&quot;&lt;path_to_dummy_folder&gt;&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">tokenizer<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span><span class="token string">&quot;&lt;path_to_dummy_folder&gt;&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p>目前，&lt;path_to_dummy_folder&gt; 中包含了全部的 model 和 tokenizer files。接下来可以使用传统的 git 工作流将他们推到远端 hub：</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">repo<span class="token punctuation">.</span>git_add<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">repo<span class="token punctuation">.</span>git_commit<span class="token punctuation">(</span><span class="token string">&quot;Add model and tokenizer files&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">repo<span class="token punctuation">.</span>git_push<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><h4 id="_2-3-3-git-based-方法" tabindex="-1"><a class="header-anchor" href="#_2-3-3-git-based-方法"><span>2.3.3 <code>git-based</code> 方法</span></a></h4><p>直接使用 git 和 git-lfs 来上传文件。请确保安装了 git 和 git-lfs。</p><p>首先，初始化 git-lfs</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> lfs <span class="token function">install</span></span>\n<span class="line"></span></code></pre></div><p>接下来，第一步是克隆 model 仓库：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://huggingface.co/<span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>your-model-id<span class="token operator">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>例如，我的 username 是 hanzhuo，使用的 model name 是 dummy-model</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://huggingface.co/hanzhuo/dummy-model</span>\n<span class="line"></span></code></pre></div><p>现在我的工作路径中有一个 dummy-model 文件夹，</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> dummy-model <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span></span>\n<span class="line"></span></code></pre></div><p>可以使用 git 来添加小文件，对于大文件，需要使用 git-lfs。</p><p>回顾一下之前获得 model 和 tokenizer 的方式：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoModelForMaskedLM<span class="token punctuation">,</span> AutoTokenizer</span>\n<span class="line"></span>\n<span class="line">checkpoint <span class="token operator">=</span> <span class="token string">&quot;camembert-base&quot;</span></span>\n<span class="line"></span>\n<span class="line">model <span class="token operator">=</span> AutoModelForMaskedLM<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span></span>\n<span class="line">tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Do whatever with the model, train it, fine-tune it...</span></span>\n<span class="line"></span>\n<span class="line">model<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span><span class="token string">&quot;&lt;path_to_dummy_folder&gt;&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">tokenizer<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span><span class="token string">&quot;&lt;path_to_dummy_folder&gt;&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看一下 dummy-model 下的文件目录：</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">config.json  pytorch_model.bin  README.md  sentencepiece.bpe.model  special_tokens_map.json tokenizer_config.json  tokenizer.json</span>\n<span class="line"></span></code></pre></div><p>如果使用 <code>ls -lh</code> 命令，可以发现 pytorch_model.bin 的大小超过了 400MB。</p><p>接下来使用常规的 git 命令：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>\n<span class="line"><span class="token function">git</span> status</span>\n<span class="line"></span></code></pre></div><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">On branch main</span>\n<span class="line">Your branch is up to date with &#39;origin/main&#39;.</span>\n<span class="line"></span>\n<span class="line">Changes to be committed:</span>\n<span class="line">  (use &quot;git restore --staged &lt;file&gt;...&quot; to unstage)</span>\n<span class="line">  modified:   .gitattributes</span>\n<span class="line">	new file:   config.json</span>\n<span class="line">	new file:   pytorch_model.bin</span>\n<span class="line">	new file:   sentencepiece.bpe.model</span>\n<span class="line">	new file:   special_tokens_map.json</span>\n<span class="line">	new file:   tokenizer.json</span>\n<span class="line">	new file:   tokenizer_config.json</span>\n<span class="line"></span></code></pre></div><p>再看一下 git-lfs ：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> lfs status</span>\n<span class="line"></span></code></pre></div><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">On branch main</span>\n<span class="line">Objects to be pushed to origin/main:</span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line">Objects to be committed:</span>\n<span class="line"></span>\n<span class="line">	config.json (Git: bc20ff2)</span>\n<span class="line">	pytorch_model.bin (LFS: 35686c2)</span>\n<span class="line">	sentencepiece.bpe.model (LFS: 988bc5a)</span>\n<span class="line">	special_tokens_map.json (Git: cb23931)</span>\n<span class="line">	tokenizer.json (Git: 851ff3e)</span>\n<span class="line">	tokenizer_config.json (Git: f0f7783)</span>\n<span class="line"></span>\n<span class="line">Objects not staged for commit:</span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><p>可以观察到 <em>pytorch_model.bin</em> 和 <em>sentencepiece.bpe.model</em> 使用的 LFS，其余的都是 Git。</p><p>最后，commit 并 push</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;First model version&quot;</span></span>\n<span class="line"><span class="token function">git</span> push</span>\n<span class="line"></span></code></pre></div><h2 id="_3-建立-model-card" tabindex="-1"><a class="header-anchor" href="#_3-建立-model-card"><span>3. 建立 model card</span></a></h2><p>建立 model card 是通过 <em>README.md</em> 来完成的。为了理解 model card 的重要作用，你可以阅读 <a href="https://arxiv.org/abs/1810.03993" target="_blank" rel="noopener noreferrer">Model Cards for Model Reporting</a>。</p><p>model card 通常开篇为简短的概述说明其用途，然后是以下几部分：</p><ul><li>Model description 描述</li><li>Intended uses &amp; limitations 预期用途和限制</li><li>How to use 如何使用</li><li>Limitations and bias 局限性和偏见</li><li>Training data 训练数据</li><li>Training procedure 训练过程</li><li>Variable &amp; metrics 评估指标</li><li>Evaluation results 评估结果</li></ul><h3 id="model-card-metadata" tabindex="-1"><a class="header-anchor" href="#model-card-metadata"><span>Model card metadata</span></a></h3><p>在 Hugging Face Hub 中，有的 model 属于特定的类型，你可以通过 tasks, languages, libraries 等等来筛选。</p><p>请查看 <a href="https://huggingface.co/camembert-base/blob/main/README.md" target="_blank" rel="noopener noreferrer">camembert-base model card</a>，你能看到在 model card header 中有如下信息：</p><div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>\n<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">language</span><span class="token punctuation">:</span> fr</span>\n<span class="line"><span class="token key atrule">license</span><span class="token punctuation">:</span> mit</span>\n<span class="line"><span class="token key atrule">datasets</span><span class="token punctuation">:</span></span>\n<span class="line"><span class="token punctuation">-</span> oscar</span></span>\n<span class="line"><span class="token punctuation">---</span></span></span>\n<span class="line"></span></code></pre></div><p>具体配置可查看 <a href="https://github.com/huggingface/hub-docs/blame/main/modelcard.md" target="_blank" rel="noopener noreferrer">full model card specification</a>。</p>', 47))
  ]);
}
const Chapter4_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Chapter4.html.vue"]]);
const data = JSON.parse('{"path":"/ai/huggingface-nlp/section1/Chapter4.html","title":"4. 共享 Models 和 Tokenizers","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"4. 共享 Models 和 Tokenizers","description":null,"article":false},"headers":[{"level":2,"title":"1. 使用预训练模型","slug":"_1-使用预训练模型","link":"#_1-使用预训练模型","children":[]},{"level":2,"title":"2. 共享预训练模型","slug":"_2-共享预训练模型","link":"#_2-共享预训练模型","children":[{"level":3,"title":"2.1 创建模型仓库","slug":"_2-1-创建模型仓库","link":"#_2-1-创建模型仓库","children":[{"level":4,"title":"2.1.1 使用 push_to_hub API","slug":"_2-1-1-使用-push-to-hub-api","link":"#_2-1-1-使用-push-to-hub-api","children":[]},{"level":4,"title":"2.1.2 使用 huggingface_hub python 库","slug":"_2-1-2-使用-huggingface-hub-python-库","link":"#_2-1-2-使用-huggingface-hub-python-库","children":[]},{"level":4,"title":"2.1.3 使用 web 页面","slug":"_2-1-3-使用-web-页面","link":"#_2-1-3-使用-web-页面","children":[]}]},{"level":3,"title":"2.2 上传 model files","slug":"_2-2-上传-model-files","link":"#_2-2-上传-model-files","children":[{"level":4,"title":"2.3.1 upload_file 方法","slug":"_2-3-1-upload-file-方法","link":"#_2-3-1-upload-file-方法","children":[]},{"level":4,"title":"2.3.2 Repository 类","slug":"_2-3-2-repository-类","link":"#_2-3-2-repository-类","children":[]},{"level":4,"title":"2.3.3 git-based 方法","slug":"_2-3-3-git-based-方法","link":"#_2-3-3-git-based-方法","children":[]}]}]},{"level":2,"title":"3. 建立 model card","slug":"_3-建立-model-card","link":"#_3-建立-model-card","children":[{"level":3,"title":"Model card metadata","slug":"model-card-metadata","link":"#model-card-metadata","children":[]}]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":6.28,"words":1884},"filePathRelative":"ai/huggingface-nlp/section1/Chapter4.md","localizedDate":"2024年12月24日","excerpt":"<p><a href=\\"https://huggingface.co/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hugging Face Hub</a> 是主网站，我们可以在里面找到各种最新的模型和数据集，也可以上传自己的模型和数据集。</p>\\n<p>其中的模型不局限于  🤗 Transformers 或者 NLP。你可以自己去探索。</p>\\n<p>模型都用 Git 进行托管，允许版本控制和重现。另外，在 Hub 上共享模型会自动为该模型部署托管的推理 API。</p>\\n<h2>1. 使用预训练模型</h2>\\n<p>如我们要使用 camembert-base checkpoints.</p>"}');
export {
  Chapter4_html as comp,
  data
};
