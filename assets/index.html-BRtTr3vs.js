import { r as resolveComponent, c as createElementBlock, b as createStaticVNode, d as createVNode, e as withCtx, f as createBaseVNode, o as openBlock, g as createTextVNode } from "./app-BO1sXcn2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/images/ml/feature-engineering/k-means.gif";
const _sfc_main = {};
const _hoisted_1 = { class: "hint-container details" };
function _sfc_render(_ctx, _cache) {
  const _component_CodeTabs = resolveComponent("CodeTabs");
  return openBlock(), createElementBlock("div", null, [
    _cache[13] || (_cache[13] = createStaticVNode('<h2 id="_1-introduction" tabindex="-1"><a class="header-anchor" href="#_1-introduction"><span>1. Introduction</span></a></h2><p>特征工程是机器学习模型构建过程中的重要步骤之一。它涉及到选择、创建、转换和优化特征，以改进模型性能。</p><p>特征工程包括以下主要方面：</p><ol><li>特征选择：在原始数据中选择最相关的特征，去除不相关或冗余的特征，以减少数据维度和提高模型训练的速度。</li><li>特征转换：对特征进行数学变换，如标准化、归一化、对数转换等，以确保特征具有相似的尺度和分布，有助于模型更好地理解数据。</li><li>特征组合：将多个特征组合成新的特征，以捕捉特征之间的相互关系。这可以通过加法、乘法或其他方式来实现。</li><li>特征创建：创建新的特征。例如，从文本数据中提取词袋模型或 TF-IDF 特征。</li><li>处理缺失值：处理原始数据中的缺失值，可以通过填充、删除或其他方法来处理缺失值。</li><li>离散化：将连续特征转化为离散特征，以适应某些机器学习算法，如决策树。</li><li>特征缩放：将特征的范围缩放到特定的区间，以确保模型不会被某些特征的值范围所主导。</li></ol><h3 id="_1-1-特征工程的目标" tabindex="-1"><a class="header-anchor" href="#_1-1-特征工程的目标"><span>1.1 特征工程的目标</span></a></h3><p>通过特征工程，我们可以：</p><ol><li>提高模型的预测表现。</li><li>减少数据的使用、减少计算量。</li><li>提高结果的可解释性。</li></ol><h3 id="_1-2-关键原则" tabindex="-1"><a class="header-anchor" href="#_1-2-关键原则"><span>1.2 关键原则</span></a></h3><p>特征（feature）和目标（target）之间的关系必须是我们使用的模型可以学到的。即，如果我们选用线性模型，它只能学线性关系，所以我们使特征和目标具有线性关系。</p><p>这是一个<a href="https://www.kaggle.com/code/ryanholbrook/what-is-feature-engineering" target="_blank" rel="noopener noreferrer">使用特征工程提高准确性的例子</a>。</p><h2 id="_2-互信息-mutual-information-mi" tabindex="-1"><a class="header-anchor" href="#_2-互信息-mutual-information-mi"><span>2. 互信息（Mutual Information, MI）</span></a></h2><p>当拿到一个比较复杂的数据集（比如有成百上千个特征）且没有对应的说明的时候，我们会感觉不知道何从下手。</p><p>实际上，我们可以先用特征效用指标（feature utility metric，衡量每个特征和目标之间的关联程度）来构建一个排名，选择其中最有用的一些特征进行开发。</p><p>我们使用的指标就叫做互信息（mutual information），它和相关性（correlation）很像，也是衡量两个量之间的关系。但是相关性只能检测到线性关系，而互信息可以检测任何类型的关系。</p><p>所以说，当我们刚开始还不知道使用什么模型的时候，互信息就显得非常重要了。</p><h3 id="_2-1-什么是互信息" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是互信息"><span>2.1 什么是互信息</span></a></h3><p>互信息用不确定性（uncertainty）来描述关联性。如果两个变量之间存在关联，那么知道一个变量的取值，将会使我们对另一个变量的取值有更精确的估计，即不确定性降低。互信息（MI）衡量的就是这种关系，即知道一个量后，可以降低多少对另一个量的不确定性。</p><h3 id="_2-2-互信息分数" tabindex="-1"><a class="header-anchor" href="#_2-2-互信息分数"><span>2.2 互信息分数</span></a></h3><p>互信息最小是 0，表示两个量之间是独立的；最大没有上限，但是实际应用中，高于 2.0 的分数也不常见。（MI 是对数量，所以它涨得很慢。）</p><p>在使用 MI 时要了解以下内容：</p><ul><li>MI 是基于自身的评估，它可以帮助我们理解一个特征的潜在预测能力。</li><li>MI 是单变量度量：特征可能在与其他特征的交互时具有信息量，但是每个特征本身却没什么信息量。互信息是无法检测出特征之间的相互作用的。</li><li>一个特征的实际有用性取决于我们使用的模型：一个特征只有在它与目标的关系是我们的模型可以学的范围内才有用。高的 MI 分数并不意味着我们的模型能够有效地利用这些信息。我们可能需要首先对特征进行变换，以使与目标的关联更明显，以便模型能够更好地学习。</li></ul><p>这是一个<a href="https://www.kaggle.com/code/ryanholbrook/mutual-information" target="_blank" rel="noopener noreferrer">使用 MI 的例子</a>。</p><p>主要代码：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>feature_selection <span class="token keyword">import</span> mutual_info_regression</span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">def</span> <span class="token function">make_mi_scores</span><span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> discrete_features<span class="token punctuation">)</span><span class="token punctuation">:</span></span>\n<span class="line">    mi_scores <span class="token operator">=</span> mutual_info_regression<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> discrete_features<span class="token operator">=</span>discrete_features<span class="token punctuation">)</span></span>\n<span class="line">    mi_scores <span class="token operator">=</span> pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span>mi_scores<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;MI Scores&quot;</span><span class="token punctuation">,</span> index<span class="token operator">=</span>X<span class="token punctuation">.</span>columns<span class="token punctuation">)</span></span>\n<span class="line">    mi_scores <span class="token operator">=</span> mi_scores<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>ascending<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>    </span>\n<span class="line">    <span class="token keyword">return</span> mi_scores</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>相关代码</summary><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 获得 MI 分数</span></span>\n<span class="line"><span class="token keyword">def</span> <span class="token function">make_mi_scores</span><span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span></span>\n<span class="line">    X <span class="token operator">=</span> X<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token keyword">for</span> colname <span class="token keyword">in</span> X<span class="token punctuation">.</span>select_dtypes<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>\n<span class="line">        X<span class="token punctuation">[</span>colname<span class="token punctuation">]</span><span class="token punctuation">,</span> _ <span class="token operator">=</span> X<span class="token punctuation">[</span>colname<span class="token punctuation">]</span><span class="token punctuation">.</span>factorize<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token comment"># All discrete features should now have integer dtypes</span></span>\n<span class="line">    discrete_features <span class="token operator">=</span> <span class="token punctuation">[</span>pd<span class="token punctuation">.</span>api<span class="token punctuation">.</span>types<span class="token punctuation">.</span>is_integer_dtype<span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token keyword">for</span> t <span class="token keyword">in</span> X<span class="token punctuation">.</span>dtypes<span class="token punctuation">]</span></span>\n<span class="line">    mi_scores <span class="token operator">=</span> mutual_info_regression<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">,</span> discrete_features<span class="token operator">=</span>discrete_features<span class="token punctuation">,</span> random_state<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span></span>\n<span class="line">    mi_scores <span class="token operator">=</span> pd<span class="token punctuation">.</span>Series<span class="token punctuation">(</span>mi_scores<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;MI Scores&quot;</span><span class="token punctuation">,</span> index<span class="token operator">=</span>X<span class="token punctuation">.</span>columns<span class="token punctuation">)</span></span>\n<span class="line">    mi_scores <span class="token operator">=</span> mi_scores<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>ascending<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token keyword">return</span> mi_scores</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># 绘制 mi_score 横向条形图</span></span>\n<span class="line"><span class="token keyword">def</span> <span class="token function">plot_mi_scores</span><span class="token punctuation">(</span>scores<span class="token punctuation">)</span><span class="token punctuation">:</span></span>\n<span class="line">    scores <span class="token operator">=</span> scores<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>ascending<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>\n<span class="line">    width <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>scores<span class="token punctuation">)</span><span class="token punctuation">)</span></span>\n<span class="line">    ticks <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>scores<span class="token punctuation">.</span>index<span class="token punctuation">)</span></span>\n<span class="line">    plt<span class="token punctuation">.</span>barh<span class="token punctuation">(</span>width<span class="token punctuation">,</span> scores<span class="token punctuation">)</span></span>\n<span class="line">    plt<span class="token punctuation">.</span>yticks<span class="token punctuation">(</span>width<span class="token punctuation">,</span> ticks<span class="token punctuation">)</span></span>\n<span class="line">    plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&quot;Mutual Information Scores&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># 散点图</span></span>\n<span class="line">sns<span class="token punctuation">.</span>relplot<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">&quot;curb_weight&quot;</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span> data<span class="token operator">=</span>df<span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># 用 fuel_type 进行着色</span></span>\n<span class="line">sns<span class="token punctuation">.</span>lmplot<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">&quot;horsepower&quot;</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span> hue<span class="token operator">=</span><span class="token string">&quot;fuel_type&quot;</span><span class="token punctuation">,</span> data<span class="token operator">=</span>df<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 设置Matplotlib的默认样式和属性</span></span>\n<span class="line">plt<span class="token punctuation">.</span>style<span class="token punctuation">.</span>use<span class="token punctuation">(</span><span class="token string">&quot;seaborn-whitegrid&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">plt<span class="token punctuation">.</span>rc<span class="token punctuation">(</span><span class="token string">&quot;figure&quot;</span><span class="token punctuation">,</span> autolayout<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>   <span class="token comment"># 自动布局图形</span></span>\n<span class="line">plt<span class="token punctuation">.</span>rc<span class="token punctuation">(</span></span>\n<span class="line">    <span class="token string">&quot;axes&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    labelweight<span class="token operator">=</span><span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    labelsize<span class="token operator">=</span><span class="token string">&quot;large&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    titleweight<span class="token operator">=</span><span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    titlesize<span class="token operator">=</span><span class="token number">14</span><span class="token punctuation">,</span></span>\n<span class="line">    titlepad<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># 绘制 3 个子图，横坐标分别对应 features</span></span>\n<span class="line">features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;YearBuilt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MoSold&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ScreenPorch&quot;</span><span class="token punctuation">]</span></span>\n<span class="line">sns<span class="token punctuation">.</span>relplot<span class="token punctuation">(</span></span>\n<span class="line">    x<span class="token operator">=</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">&quot;SalePrice&quot;</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token string">&quot;variable&quot;</span><span class="token punctuation">,</span> data<span class="token operator">=</span>df<span class="token punctuation">.</span>melt<span class="token punctuation">(</span>id_vars<span class="token operator">=</span><span class="token string">&quot;SalePrice&quot;</span><span class="token punctuation">,</span> value_vars<span class="token operator">=</span>features<span class="token punctuation">)</span><span class="token punctuation">,</span> facet_kws<span class="token operator">=</span><span class="token builtin">dict</span><span class="token punctuation">(</span>sharex<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># boxen</span></span>\n<span class="line">sns<span class="token punctuation">.</span>catplot<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">&quot;BldgType&quot;</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">&quot;SalePrice&quot;</span><span class="token punctuation">,</span> data<span class="token operator">=</span>df<span class="token punctuation">,</span> kind<span class="token operator">=</span><span class="token string">&quot;boxen&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># 相当于在多个子图中进行 hue</span></span>\n<span class="line">feature <span class="token operator">=</span> <span class="token string">&quot;GrLivArea&quot;</span></span>\n<span class="line">sns<span class="token punctuation">.</span>lmplot<span class="token punctuation">(</span></span>\n<span class="line">    x<span class="token operator">=</span>feature<span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">&quot;SalePrice&quot;</span><span class="token punctuation">,</span> hue<span class="token operator">=</span><span class="token string">&quot;BldgType&quot;</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token string">&quot;BldgType&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    data<span class="token operator">=</span>df<span class="token punctuation">,</span> scatter_kws<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;edgecolor&quot;</span><span class="token punctuation">:</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> col_wrap<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_3-特征创建-creating-features" tabindex="-1"><a class="header-anchor" href="#_3-特征创建-creating-features"><span>3. 特征创建（Creating Features）</span></a></h2><h3 id="_3-1-数学转换" tabindex="-1"><a class="header-anchor" href="#_3-1-数学转换"><span>3.1 数学转换</span></a></h3><p>我们经常使用数学公式来对特征进行处理，它们一般都是领域知识。</p><p>比如我们会使用「冲程比」来描述发动机性能和效率。</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">autos<span class="token punctuation">[</span><span class="token string">&quot;stroke_ratio&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> autos<span class="token punctuation">.</span>stroke <span class="token operator">/</span> autos<span class="token punctuation">.</span>bore</span>\n<span class="line"></span></code></pre></div><p>另外，数据可视化可以帮助我们选择对数据进行重塑的方式（通常是使用幂函数或对数进行）。</p><p>比如，对于高度偏斜分布的数据，即数据分布中存在明显的不对称性，通常是右偏（正偏）或左偏（负偏），使用对数可以压缩数据的范围，减小极端值的影响，并使分布更加接近正态分布。</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># If the feature has 0.0 values, use np.log1p (log(1+x)) instead of np.log</span></span>\n<span class="line">accidents<span class="token punctuation">[</span><span class="token string">&quot;LogWindSpeed&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> accidents<span class="token punctuation">.</span>WindSpeed<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>log1p<span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><h3 id="_3-2-计数-counts" tabindex="-1"><a class="header-anchor" href="#_3-2-计数-counts"><span>3.2 计数（Counts）</span></a></h3><p>表示有无的特征一般用 0-1 或 True-False 来标记。Python 中的 Boolean 类型可以直接相加。</p><p>当我们想要以大于 0 为依据判断是否存在时，可以用 DataFrame 内置的 <code>gt</code>（greater than）方法来进行判断。</p>', 36)),
    createVNode(_component_CodeTabs, {
      id: "165",
      data: [{ "id": "sum" }, { "id": "df 内置的 gt" }],
      "tab-id": "counts"
    }, {
      title0: withCtx(({ value, isActive }) => _cache[0] || (_cache[0] = [
        createTextVNode("sum")
      ])),
      title1: withCtx(({ value, isActive }) => _cache[1] || (_cache[1] = [
        createTextVNode("df 内置的 gt")
      ])),
      tab0: withCtx(({ value, isActive }) => _cache[2] || (_cache[2] = [
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
                  createBaseVNode("span", { class: "token comment" }, "# roadway_features 中的列都是表明事故发生地附近是否有某种设施")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("roadway_features "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token string" }, '"Amenity"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Bump"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Crossing"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"GiveWay"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token string" }, '"Junction"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"NoExit"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Railway"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Roundabout"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Station"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Stop"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("    "),
                  createBaseVNode("span", { class: "token string" }, '"TrafficCalming"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"TrafficSignal"'),
                  createBaseVNode("span", { class: "token punctuation" }, "]")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("accidents"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token string" }, '"RoadwayFeatures"'),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" accidents"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("roadway_features"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token builtin" }, "sum"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("axis"),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createBaseVNode("span", { class: "token number" }, "1"),
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
      tab1: withCtx(({ value, isActive }) => _cache[3] || (_cache[3] = [
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
                  createTextVNode("components "),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Cement"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"BlastFurnaceSlag"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"FlyAsh"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Water"'),
                  createBaseVNode("span", { class: "token punctuation" }, ",")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("               "),
                  createBaseVNode("span", { class: "token string" }, '"Superplasticizer"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"CoarseAggregate"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"FineAggregate"'),
                  createBaseVNode("span", { class: "token punctuation" }, "]")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "line" }, [
                  createTextVNode("concrete"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createBaseVNode("span", { class: "token string" }, '"Components"'),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createTextVNode(" concrete"),
                  createBaseVNode("span", { class: "token punctuation" }, "["),
                  createTextVNode("components"),
                  createBaseVNode("span", { class: "token punctuation" }, "]"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createTextVNode("gt"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createBaseVNode("span", { class: "token number" }, "0"),
                  createBaseVNode("span", { class: "token punctuation" }, ")"),
                  createBaseVNode("span", { class: "token punctuation" }, "."),
                  createBaseVNode("span", { class: "token builtin" }, "sum"),
                  createBaseVNode("span", { class: "token punctuation" }, "("),
                  createTextVNode("axis"),
                  createBaseVNode("span", { class: "token operator" }, "="),
                  createBaseVNode("span", { class: "token number" }, "1"),
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
    _cache[14] || (_cache[14] = createStaticVNode('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>这是一篇关于 Box-Cox Transformation 的内容，<a href="https://www.kaggle.com/code/alexisbcook/scaling-and-normalization/tutorial" target="_blank" rel="noopener noreferrer">Data cleaning</a> 也是个非常常用的 normalizer。</p></div><h3 id="字符串合并与拆分" tabindex="-1"><a class="header-anchor" href="#字符串合并与拆分"><span>字符串合并与拆分</span></a></h3><p>有些字符串中蕴含着某些信息，比如身份证号码（地区、出生日期）、电话号码（区号）等。</p><p>可以使用 <code>str</code> accessor 来对 DataFrame 的列做操作。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 把 Policy 这一列根据空格拆分，形成新的两列 Type 和 Level</span></span>\n<span class="line">customer<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Level&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>  <span class="token comment"># Create two new features</span></span>\n<span class="line">    customer<span class="token punctuation">[</span><span class="token string">&quot;Policy&quot;</span><span class="token punctuation">]</span>           <span class="token comment"># from the Policy feature</span></span>\n<span class="line">    <span class="token punctuation">.</span><span class="token builtin">str</span>                         <span class="token comment"># through the string accessor</span></span>\n<span class="line">    <span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> expand<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>     <span class="token comment"># by splitting on &quot; &quot;</span></span>\n<span class="line">                                 <span class="token comment"># and expanding the result into separate columns</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也可以将多个字段合并。</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 将 make 和 body_style 合并到 make_and_style 列中</span></span>\n<span class="line">autos<span class="token punctuation">[</span><span class="token string">&quot;make_and_style&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> autos<span class="token punctuation">[</span><span class="token string">&quot;make&quot;</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> autos<span class="token punctuation">[</span><span class="token string">&quot;body_style&quot;</span><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>对于其他类型的数据：</p><ul><li>dates and times，请查看 <a href="https://www.kaggle.com/code/alexisbcook/parsing-dates/tutorial" target="_blank" rel="noopener noreferrer">Parsing Dates</a></li><li>Latitudes and longitudes，请查看 <a href="https://www.kaggle.com/learn/geospatial-analysis" target="_blank" rel="noopener noreferrer">Geospatial Analysis</a></li></ul></div><h3 id="_3-3-group-transforms" tabindex="-1"><a class="header-anchor" href="#_3-3-group-transforms"><span>3.3 Group Transforms</span></a></h3><p>我们还可以在分组下聚合多行信息。</p><p>使用聚合函数，Group transform 将两个特征结合起来：一个是提供分组依据的类别特征，另一个是希望聚合的数值特征。例如，对于“按州计算的平均收入”，会选择州（State）作为分组特征，平均值（mean）作为聚合函数，收入（Income）作为聚合特征。在Pandas中使用 <code>groupby</code> 和 <code>transform</code> 方法。</p><p>这种方法允许我们根据某个类别将数据分组，并在每个组中应用聚合函数，然后将聚合的结果返回到原始数据中，以创建新的特征。这对于分析数据中不同类别之间的关系和差异非常有用，因为它可以帮助我们洞察数据的不同方面和模式。</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">customer<span class="token punctuation">[</span><span class="token string">&quot;AverageIncome&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span></span>\n<span class="line">    customer<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&quot;State&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># for each state</span></span>\n<span class="line">    <span class="token punctuation">[</span><span class="token string">&quot;Income&quot;</span><span class="token punctuation">]</span>                 <span class="token comment"># select the income</span></span>\n<span class="line">    <span class="token punctuation">.</span>transform<span class="token punctuation">(</span><span class="token string">&quot;mean&quot;</span><span class="token punctuation">)</span>         <span class="token comment"># and compute its mean</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><p><code>mean</code> 是内置的 DataFrame 方法，除此之外还有：<code>max</code>, <code>min</code>, <code>median</code>, <code>var</code>, <code>std</code>, <code>count</code>。</p><p>例如，如果想要统计非数值特征（categorical feature）的频率：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">customer<span class="token punctuation">[</span><span class="token string">&quot;StateFreq&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span></span>\n<span class="line">    customer<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&quot;State&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token punctuation">[</span><span class="token string">&quot;State&quot;</span><span class="token punctuation">]</span></span>\n<span class="line">    <span class="token punctuation">.</span>transform<span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token operator">/</span> customer<span class="token punctuation">.</span>State<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们进行了训练集和验证集的划分，为了保持各自的独立性，最好在训练集上创建群组特征，然后将其连接到验证集上。我们可以在训练集上使用 <code>drop_duplicates</code> 来创建一个唯一的值集合，然后在验证集上使用 <code>merge</code>方法进行连接。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># Create splits</span></span>\n<span class="line">df_train <span class="token operator">=</span> customer<span class="token punctuation">.</span>sample<span class="token punctuation">(</span>frac<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span>        <span class="token comment"># 从 customer 中取 50% 作为训练集</span></span>\n<span class="line">df_valid <span class="token operator">=</span> customer<span class="token punctuation">.</span>drop<span class="token punctuation">(</span>df_train<span class="token punctuation">.</span>index<span class="token punctuation">)</span>    <span class="token comment"># 去除训练集中的部分作为验证集</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Create the average claim amount by coverage type, on the training set</span></span>\n<span class="line">df_train<span class="token punctuation">[</span><span class="token string">&quot;AverageClaim&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df_train<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&quot;Coverage&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;ClaimAmount&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>transform<span class="token punctuation">(</span><span class="token string">&quot;mean&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Merge the values into the validation set</span></span>\n<span class="line">df_valid <span class="token operator">=</span> df_valid<span class="token punctuation">.</span>merge<span class="token punctuation">(</span></span>\n<span class="line">    df_train<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Coverage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;AverageClaim&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>drop_duplicates<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>       <span class="token comment"># 去掉这两列中重复的行</span></span>\n<span class="line">    on<span class="token operator">=</span><span class="token string">&quot;Coverage&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    how<span class="token operator">=</span><span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line">df_valid<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Coverage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;AverageClaim&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 18)),
    createBaseVNode("details", _hoisted_1, [
      _cache[12] || (_cache[12] = createStaticVNode('<summary>df.merge 方法</summary><p><code>how=&quot;left&quot;</code> 表示左连接，还可以使用 <code>right</code> (右连接), <code>inner</code> (内连接), <code>outer</code> (外连接)。</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df1 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;A0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">                    <span class="token string">&#39;B&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;B0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line">df2 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;A1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">                    <span class="token string">&#39;C&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;C1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div>', 3)),
      createVNode(_component_CodeTabs, {
        id: "238",
        data: [{ "id": "left" }, { "id": "right" }, { "id": "inner" }, { "id": "outer" }],
        "tab-id": "merge"
      }, {
        title0: withCtx(({ value, isActive }) => _cache[4] || (_cache[4] = [
          createTextVNode("left")
        ])),
        title1: withCtx(({ value, isActive }) => _cache[5] || (_cache[5] = [
          createTextVNode("right")
        ])),
        title2: withCtx(({ value, isActive }) => _cache[6] || (_cache[6] = [
          createTextVNode("inner")
        ])),
        title3: withCtx(({ value, isActive }) => _cache[7] || (_cache[7] = [
          createTextVNode("outer")
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
                    createTextVNode("left_join "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" df1"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("merge"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("df2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" on"),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createBaseVNode("span", { class: "token string" }, '"A"'),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" how"),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createBaseVNode("span", { class: "token string" }, '"left"'),
                    createBaseVNode("span", { class: "token punctuation" }, ")")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "#   A   B   C")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 0 A0  B0  NaN")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 1	A1	B1	C1")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 2	A2	B2	C2")
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
                    createTextVNode("right_join "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" df1"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("merge"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("df2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" on"),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createBaseVNode("span", { class: "token string" }, '"A"'),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" how"),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createBaseVNode("span", { class: "token string" }, '"right"'),
                    createBaseVNode("span", { class: "token punctuation" }, ")")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 	A   B   C")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 0	A1	B1	C1")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 1	A2	B2	C2")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 2	A3	NaN	C3")
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
        tab2: withCtx(({ value, isActive }) => _cache[10] || (_cache[10] = [
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
                    createTextVNode("inner_join "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" df1"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("merge"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("df2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" on"),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createBaseVNode("span", { class: "token string" }, '"A"'),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" how"),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createBaseVNode("span", { class: "token string" }, '"inner"'),
                    createBaseVNode("span", { class: "token punctuation" }, ")")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "#   A   B   C")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 0	A1	B1	C1")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 1	A2	B2	C2")
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
        tab3: withCtx(({ value, isActive }) => _cache[11] || (_cache[11] = [
          createBaseVNode(
            "div",
            {
              class: "language-python line-numbers-mode",
              "data-highlighter": "prismjs",
              "data-ext": "py",
              "data-title": "py"
            },
            [
              createBaseVNode("pre", null, [
                createBaseVNode("code", null, [
                  createBaseVNode("span", { class: "line" }, [
                    createTextVNode("outer_join "),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createTextVNode(" df1"),
                    createBaseVNode("span", { class: "token punctuation" }, "."),
                    createTextVNode("merge"),
                    createBaseVNode("span", { class: "token punctuation" }, "("),
                    createTextVNode("df2"),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" on"),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createBaseVNode("span", { class: "token string" }, '"A"'),
                    createBaseVNode("span", { class: "token punctuation" }, ","),
                    createTextVNode(" how"),
                    createBaseVNode("span", { class: "token operator" }, "="),
                    createBaseVNode("span", { class: "token string" }, '"outer"'),
                    createBaseVNode("span", { class: "token punctuation" }, ")")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "#   A   B   C")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 0	A0	B0	NaN")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 1	A1	B1	C1")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 2	A2	B2	C2")
                  ]),
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "line" }, [
                    createBaseVNode("span", { class: "token comment" }, "# 3	A3	NaN	C3")
                  ]),
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
        _: 1
        /* STABLE */
      })
    ]),
    _cache[15] || (_cache[15] = createStaticVNode('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>了解模型本身的优劣对于创建特征尤为重要，以下是一些大家需要知道的内容：</p><ul><li><p>线性模型自然地学习 sums 和 differences，但不能学习更复杂的关系。</p></li><li><p>比率对大多数模型来说通常比较难学习。因此，将特征组合为比率往往可以带来性能的提升。</p></li><li><p>线性模型和神经网络通常更适合使用<strong>标准化</strong>的特征。特别是神经网络需要特征缩放到接近0的值。而树模型（例如随机森林和XGBoost）有时可以从标准化受益，但通常受益较少。</p></li><li><p>树模型可以学习几乎任何特征组合，但当某个组合特别重要时，尤其是在数据有限的情况下，明确创建这个组合特征仍然会有益。树模型通常具有很高的灵活性，但在一些情况下，明确地提供关键特征可以帮助它们更好地捕捉关系。</p></li><li><p>计数特征对于树模型尤其有帮助，因为这些模型没有自然的方式来跨多个特征同时聚合信息。计数特征可以提供有关数据的聚合信息，帮助模型更好地理解数据。</p></li></ul></div><h2 id="_4-使用-k-means-进行聚类" tabindex="-1"><a class="header-anchor" href="#_4-使用-k-means-进行聚类"><span>4. 使用 K-Means 进行聚类</span></a></h2><p>K-means 使用欧氏距离来衡量数据点之间的相似性。它通过在特征空间内放置一些点，称为质心（centroids），来创建聚类（clusters）。数据集中的每个点都被分配到距离它最近的质心所属的聚类。在&quot;K-means&quot;中，&quot;k&quot; 表示要创建的质心（即聚类）的数量。</p><p>简而言之，K均值聚类是一种无监督机器学习方法，旨在将数据分为&quot;k&quot;个紧凑的簇，使得同一簇内的数据点彼此相似，而不同簇之间的数据点差异较大。这个方法的核心思想是通过迭代的方式，不断更新质心的位置，以便最大程度地减小簇内数据点与质心之间的距离。K均值聚类通常需要指定要创建的簇的数量 &quot;k&quot;，这是一个关键参数，需要谨慎选择。</p><p>我们主要关注 <code>scikit-learn</code> 的三个参数：<code>n_clusters</code>, <code>max_iter</code>, <code>n_init</code>。</p><p>K-Means 主要是两步。首先是随机初始化一定数量（<code>n_clusters</code>）的质心（centroids），然后迭代执行下面的两个操作：</p><ol><li>将数据点分配给最近的质心所属的簇；</li><li>移动质心，以减小与其所属簇中数据点之间的距离。</li></ol><p>直到质心不再移动，或迭代到最大次数（<code>max_iter</code>），迭代停止。这两个操作是K均值聚类的核心步骤，它们的目标是不断改进簇的质量，使簇内的数据点更加相似，簇与簇之间的距离更大。</p><p>由于初始质心的随机位置可能导致不理想的聚类结果，因此K均值聚类通常会重复多次（<code>n_init</code>），并返回具有最小总距离的数据点和其质心之间的最佳聚类。这种方式有助于降低随机初始化对聚类结果的影响，提高聚类的稳定性。</p><figure><img src="' + _imports_0 + '" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果想要分成更多的簇，可以使用更大的 <code>max_iter</code>；如果数据比较复杂，可以使用更多的<code>n_clusters</code>。一般来讲，我们确定 <code>n_clusters</code> 就可以了。到底选择多少个簇由我们研究的问题和使用的模型来决定，我们可以使用交叉验证等方法来对这个参数进行调优。</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>cluster <span class="token keyword">import</span> KMeans</span>\n<span class="line"></span>\n<span class="line">kmeans <span class="token operator">=</span> KMeans<span class="token punctuation">(</span>n_clusters<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span></span>\n<span class="line">X<span class="token punctuation">[</span><span class="token string">&quot;Cluster&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> kmeans<span class="token punctuation">.</span>fit_predict<span class="token punctuation">(</span>X<span class="token punctuation">)</span></span>\n<span class="line">X<span class="token punctuation">[</span><span class="token string">&quot;Cluster&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> X<span class="token punctuation">[</span><span class="token string">&quot;Cluster&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token string">&quot;category&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre></div><details class="hint-container details"><summary>可视化</summary><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">sns<span class="token punctuation">.</span>relplot<span class="token punctuation">(</span></span>\n<span class="line">    x<span class="token operator">=</span><span class="token string">&quot;Longitude&quot;</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">&quot;Latitude&quot;</span><span class="token punctuation">,</span> hue<span class="token operator">=</span><span class="token string">&quot;Cluster&quot;</span><span class="token punctuation">,</span> data<span class="token operator">=</span>X<span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># boxen  不同 cluster 上 MedHouseValue 的值分布情况</span></span>\n<span class="line">X<span class="token punctuation">[</span><span class="token string">&quot;MedHouseVal&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&quot;MedHouseVal&quot;</span><span class="token punctuation">]</span></span>\n<span class="line">sns<span class="token punctuation">.</span>catplot<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token string">&quot;MedHouseVal&quot;</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token string">&quot;Cluster&quot;</span><span class="token punctuation">,</span> data<span class="token operator">=</span>X<span class="token punctuation">,</span> kind<span class="token operator">=</span><span class="token string">&quot;boxen&quot;</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><blockquote><p>注：K-means 聚类对数据的尺度（scale）十分敏感，不同特征的 scale 差异可能会影响 K-means 的结果，所以我们最好进行 rescale 或 normalization。</p></blockquote><h2 id="_5" tabindex="-1"><a class="header-anchor" href="#_5"><span>5.</span></a></h2>', 15))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/machine-learning/feature-engineering/","title":"特征工程","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"特征工程","description":null,"article":false},"headers":[{"level":2,"title":"1. Introduction","slug":"_1-introduction","link":"#_1-introduction","children":[{"level":3,"title":"1.1 特征工程的目标","slug":"_1-1-特征工程的目标","link":"#_1-1-特征工程的目标","children":[]},{"level":3,"title":"1.2 关键原则","slug":"_1-2-关键原则","link":"#_1-2-关键原则","children":[]}]},{"level":2,"title":"2. 互信息（Mutual Information, MI）","slug":"_2-互信息-mutual-information-mi","link":"#_2-互信息-mutual-information-mi","children":[{"level":3,"title":"2.1 什么是互信息","slug":"_2-1-什么是互信息","link":"#_2-1-什么是互信息","children":[]},{"level":3,"title":"2.2 互信息分数","slug":"_2-2-互信息分数","link":"#_2-2-互信息分数","children":[]}]},{"level":2,"title":"3. 特征创建（Creating Features）","slug":"_3-特征创建-creating-features","link":"#_3-特征创建-creating-features","children":[{"level":3,"title":"3.1 数学转换","slug":"_3-1-数学转换","link":"#_3-1-数学转换","children":[]},{"level":3,"title":"3.2 计数（Counts）","slug":"_3-2-计数-counts","link":"#_3-2-计数-counts","children":[]},{"level":3,"title":"字符串合并与拆分","slug":"字符串合并与拆分","link":"#字符串合并与拆分","children":[]},{"level":3,"title":"3.3 Group Transforms","slug":"_3-3-group-transforms","link":"#_3-3-group-transforms","children":[]}]},{"level":2,"title":"4. 使用 K-Means 进行聚类","slug":"_4-使用-k-means-进行聚类","link":"#_4-使用-k-means-进行聚类","children":[]},{"level":2,"title":"5.","slug":"_5","link":"#_5","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":11.8,"words":3541},"filePathRelative":"machine-learning/feature-engineering/index.md","localizedDate":"2024年12月24日","excerpt":"<h2>1. Introduction</h2>\\n<p>特征工程是机器学习模型构建过程中的重要步骤之一。它涉及到选择、创建、转换和优化特征，以改进模型性能。</p>\\n<p>特征工程包括以下主要方面：</p>\\n<ol>\\n<li>特征选择：在原始数据中选择最相关的特征，去除不相关或冗余的特征，以减少数据维度和提高模型训练的速度。</li>\\n<li>特征转换：对特征进行数学变换，如标准化、归一化、对数转换等，以确保特征具有相似的尺度和分布，有助于模型更好地理解数据。</li>\\n<li>特征组合：将多个特征组合成新的特征，以捕捉特征之间的相互关系。这可以通过加法、乘法或其他方式来实现。</li>\\n<li>特征创建：创建新的特征。例如，从文本数据中提取词袋模型或 TF-IDF 特征。</li>\\n<li>处理缺失值：处理原始数据中的缺失值，可以通过填充、删除或其他方法来处理缺失值。</li>\\n<li>离散化：将连续特征转化为离散特征，以适应某些机器学习算法，如决策树。</li>\\n<li>特征缩放：将特征的范围缩放到特定的区间，以确保模型不会被某些特征的值范围所主导。</li>\\n</ol>"}');
export {
  index_html as comp,
  data
};
