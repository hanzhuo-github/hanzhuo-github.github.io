import { c as createElementBlock, b as createStaticVNode, o as openBlock } from "./app-DERZZvM1.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>First In First Out, FIFO），队尾入队，队首出队</p><p>栈：入栈（push）、出栈（pop）</p><p>队列：入队（enqueue）、出队（dequeue）</p><p>循环队列、阻塞队列、并发队列。比如高性能队列 Disruptor、Linux 环形缓存，都用到了循环并发队列；Java concurrent 并发包利用 ArrayBlockingQueue 来实现公平锁。</p><p>循环队列：</p><ul><li>队空：head == tail</li><li>队满：(tail + 1)%n == head <blockquote><p>循环队列会浪费数组中的一个存储空间</p></blockquote></li></ul><h2 id="_1-阻塞队列" tabindex="-1"><a class="header-anchor" href="#_1-阻塞队列"><span>1. 阻塞队列</span></a></h2><p>阻塞队列是在队列的基础上增加了阻塞操作。在队列为空的时候，从队头取数据会被阻塞，知道队列中有了数据才能返回；如果队列已经满了，那么插入数据的操作会被阻塞，知道队列中有空闲位置后再插入数据，然后再返回。</p><p>这种基于阻塞队列实现的“生产者-消费者”模型，可以有效地协调生产和消费的速度。我们还可以通过协调“生产者”和“消费者”的个数，来提高数据的处理效率。</p><h2 id="_2-并发队列" tabindex="-1"><a class="header-anchor" href="#_2-并发队列"><span>2. 并发队列</span></a></h2><p>在多线程的情况下，会有多个线程同时操作队列，这个时候就会存在线程安全问题。如何实现一个线程安全的队列呢？</p><p>线程安全的队列叫并发队列。最简单的实现方式是直接在 enqueue()、dequeue() 方法上加锁，但是锁粒度大并发度会比较低，同一时刻仅允许一个存或取操作。实际上，基于数组的循环队列（避免数据搬移），利用 CAS（Compare And Swap）原子操作（避免真正去 OS 底层申请锁资源），可以实现非常高效的并发队列。这也是循环队列比链式队列应用更加广泛的原因。</p><h2 id="q-线程池没有空闲线程时-新的任务请求线程资源时-线程池该如何处理" tabindex="-1"><a class="header-anchor" href="#q-线程池没有空闲线程时-新的任务请求线程资源时-线程池该如何处理"><span>Q: 线程池没有空闲线程时，新的任务请求线程资源时，线程池该如何处理</span></a></h2><p>一般有两种策略。第一种是非阻塞的处理方式，直接拒绝任务请求；另一种是阻塞的处理方式，将请求排队，等到有空闲线程时，取出排队的请求继续处理。</p><p>我们希望公平地处理每个排队的需求，先进者先服务，所以队列这种数据结构很适合来存储排队请求。</p><ol><li><p>利用链表实现的队列，我们可以实现一个支持无限排队的无界队列（unbounded queue），但是可能会导致过多的请求排队等待，请求处理的时间过长。针对响应时间比较敏感的系统，基于链表实现的无线排队的线程池是不合适的。</p></li><li><p>利用数组实现的有界队列（bounded queue），队列大小有限，所以线程池中排队的请求超过队列大小时，接下来的请求就会被拒绝，这种方式对响应时间敏感的系统来说，就相对更加合理。不过，设置一个合理的队列大小，也是非常有讲究的。队列太大导致等待的请求太多，队列太小会导致无法充分利用系统资源、发挥最大性能。</p></li></ol><p>除此之外，队列可以应用在任何有限资源池中，用于排队请求，比如数据库连接池等。实际上，对于大部分资源有限的场景，当没有空闲资源时，基本上都可以通过“队列”这种数据结构来实现请求排队。</p>', 18)
  ]));
}
const _5Queue_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "5-queue.html.vue"]]);
const data = JSON.parse('{"path":"/coding/data-structure/5-queue.html","title":"队列","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"队列","description":null,"article":false,"date":"2023-08-21T00:00:00.000Z","order":5},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"1. 阻塞队列","slug":"_1-阻塞队列","link":"#_1-阻塞队列","children":[]},{"level":2,"title":"2. 并发队列","slug":"_2-并发队列","link":"#_2-并发队列","children":[]},{"level":2,"title":"Q: 线程池没有空闲线程时，新的任务请求线程资源时，线程池该如何处理","slug":"q-线程池没有空闲线程时-新的任务请求线程资源时-线程池该如何处理","link":"#q-线程池没有空闲线程时-新的任务请求线程资源时-线程池该如何处理","children":[]}],"git":{"createdTime":1735022911000,"updatedTime":1735022911000,"contributors":[{"name":"Hertz","username":"Hertz","email":"hanzhuosoul@gmail.com","commits":1,"url":"https://github.com/Hertz"}]},"readingTime":{"minutes":3.01,"words":902},"filePathRelative":"coding/data-structure/5-queue.md","localizedDate":"2023年8月21日","excerpt":"<h2>Introduction</h2>\\n<p>First In First Out, FIFO），队尾入队，队首出队</p>\\n<p>栈：入栈（push）、出栈（pop）</p>\\n<p>队列：入队（enqueue）、出队（dequeue）</p>\\n<p>循环队列、阻塞队列、并发队列。比如高性能队列 Disruptor、Linux 环形缓存，都用到了循环并发队列；Java concurrent 并发包利用 ArrayBlockingQueue 来实现公平锁。</p>\\n<p>循环队列：</p>\\n<ul>\\n<li>队空：head == tail</li>\\n<li>队满：(tail + 1)%n == head\\n<blockquote>\\n<p>循环队列会浪费数组中的一个存储空间</p>\\n</blockquote>\\n</li>\\n</ul>"}');
export {
  _5Queue_html as comp,
  data
};