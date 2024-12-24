---
lang: zh-CN
title: 类型
description:
article: false
date: 2023-08-10
order: 1
---

## 七种类型

- Undefined
- Null
- Boolean
- String
- Number
- Symbol
- Object

## 1. Undefined、Null

- Null 类型只有一个特殊值 `null`，它是一个空指针对象，所以用 `typeof null` 得到的结果是 `'object'`。

- Undefined 类型只有一个特殊值 `undefined`，它由 `null` 派生而来，所以 `null == undefined` 的结果为 `true`。未赋值为 `undefined`，或者用 `void` 来把任意表达式变为 `undefined`。

> **Q**：为什么有的编程规范要求用 `void 0` 代替 `undefined`？
>
> **A**：`undefined` 是一个变量，而不是一个关键字，这是 JavaScript 语言公认的设计失误之一。局部变量中的 `undefined` 可以修改（注：ES5 之后全局变量下的 `undefined` 只读），为了避免它在无意中被修改，建议使用 `void 0` 来获取 `undefined` 值。

## 2. Boolean

| 数据类型  | true                  | false     |
| --------- | --------------------- | --------- |
| String    | 非空字符串            | ""        |
| Number    | 非 0 数值（包括无穷） | 0, NaN    |
| Object    | 非 null 对象          | null      |
| Undefined | 无                    | undefined |

## 3. [String](https://javascript.info/string)

- JavaScrip 中的 String 永远无法变更，即字符串具有值类型的特征。

> **Q**：字符串是否有最大长度？
>
> **A**：String 的最大长度是 $2^{53}-1$。
>
> String 的长度并直观理解的长度。String 并非“字符串”，而是是字符串的 UTF16 编码，对 String 的各种操作如 charAt、charCodeAt、length 等，针对的都是 UTF-16 编码，每个 UTF-16 单元被认为是 1 个字符（处理 SP 平面的字符时要注意，SP 上的每个字符对应 4 字节。BMP 是指 `U+0000 - U+FFFF` 范围内的码点）。所以字符串的最大长度实际上是受字符串的编码长度影响的。详见[Unicode 编码方案](/basic/character-encoding/Chapter3.md)。

## 4. Number

可以用十进制、二进制（`0b` 开头）、八进制（`0` 或 `0o` 开头）、十六进制（`0x` 开头）表示。可以使用科学计数法（`e`）。`NaN` 表示不是数值。

- Number 共有 18437736874454810627（即 $2^{64}-2^{53}+3$）个值。

:::tip
Number 用 64 位表示。

JavaScript 中的 Number 类型基本符合 IEEE 754-2008 规定的双精度浮点数规则。但是 JavaScript 为了表达几个额外的语言场景（比如不让除以 0 出错，而引入了无穷大的概念），规定了几个例外情况。

IEEE 754 标准：
s（符号位，1）+ e（指数位，11）+ f（尾数，52）

e 全 1 时的特殊值减掉（即 64 - 11 = 53），+3 是指三个特殊值：NaN、Infinity、-Infinity

- NaN：e 全 1，f 非 0。（占用了 9007199254740990，这原本是符合 IEEE 规则的数字）
- Infinity/-Infinity：e 全 1，f = 0，正无穷（S 为 0），负无穷（S 为 1）
  :::

- 整数范围：-0x1f ffff ffff ffff 至 0x1f ffff ffff ffff

- JavaScript 中有 +0 和 -0，区分他们的方法是检验 1/x 是 Infinity 还是 -Infinity

> 浮点数精度问题：0.1 + 0.2 != 0.3
>
> 正确的比较方法应该是使用 JavaScript 提供的最小精度：
>
> ```js
> Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON; // true
> ```

## 5. [Symbol](./grammar/Symbol.md)

对象的 key 只能是 String 类型或 Symbol 类型。使用字符串做 key 容易造成属性名的冲突，ES6 引入 Symbol 正是为了防止属性名冲突的。

即使 description 相同，Symbol 也是不同的。

使用 JavaScript 内置的 `Symbol.*` 修改对象的内建行为。

## 6. Object

对于 JavaScript 中的几个基本类型，都在对象类型中有所对应，分别是

- Boolean
- String
- Number
- Symbol

要注意，`new Number(3)` 和数字 `3` 是不同的类型，前者是对象类型，后者是 Number 类型

```js
new Number(3) == 3; // true
new Number(3) === 3; // false
```

- Number、String、Boolean 当跟 new 搭配时，是对应类型的构造器，会产生对象；直接调用表示强制类型转换。
- Symbol 是 Symbol 对象构造器，但是用 new 调用会抛出错误。

- 对象属性有[数据属性和访问器属性](https://juejin.cn/blog/6844903828580466702)。

> **Q**：为什么给对象添加的方法能用在基本类型上？
>
> **A**：`.` 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。

## 7. 类型转换

`==` 运算会进行跨类型的比较，规则复杂。一般被认为是设计失误，很多实践中推荐禁止使用 `==`，而是要求进行显示转换后用 `===` 进行比较。

`==` 的隐式转换规则：

- 布尔值与其他类型比较时，布尔值会转换成数字：true -> 1，false -> 0
- 数字与字符串比较时，字符串会转换成数字
  - 如果字符串可以被解析为有效数字，就将其转换为对应的数字
  - 如果不能解析为有效数字，字符串会被转换为 NaN，与任何值比较结果都为 false
- 对象与原始类型比较时，使用 valueOf() 或 toString()
  - 对象（包括数组）优先调用 valueOf()，但如果没有返回原始值，则调用 toString()
    - 数组使用 valueOf 返回自身，还是数组，而非原始值，所以会调用 toString()
- null 和 undefined 在宽松相等下是特殊的，它们只能相等于彼此，不会和其他值相等
  ```js
  null == undefined; // true
  null == 0; // false
  undefined == 0; // false
  ```
- NaN 在任何情况下都不等于任何值，包括它自己

|         | Null      | Undefined   | Boolean(true)                                  | Boolean(false)                                 | Number                                            | String                                            | Symbol                                         | Object                                         |
| ------- | --------- | ----------- | ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| Boolean | FALSE     | FALSE       | -                                              | -                                              | 0/NaN -> false                                    | "" -> false                                       | TRUE                                           | TRUE                                           |
| Number  | 0         | NaN         | 1                                              | 0                                              | -                                                 | [StringToNumber](#_7-1-stringtonumber-number-str) | TypeError                                      | [拆箱转换](#_7-3-对象-基本类型的转换-拆箱转换) |
| String  | "null"    | "undefined" | "true"                                         | "false"                                        | [NumberToString](#_7-2-numbertostring-string-num) | -                                                 | TypeError                                      | [拆箱转换](#_7-3-对象-基本类型的转换-拆箱转换) |
| Object  | TypeError | TypeError   | [装箱转换](#_7-4-基本类型-对象的转换-装箱转换) | [装箱转换](#_7-4-基本类型-对象的转换-装箱转换) | [装箱转换](#_7-4-基本类型-对象的转换-装箱转换)    | [装箱转换](#_7-4-基本类型-对象的转换-装箱转换)    | [装箱转换](#_7-4-基本类型-对象的转换-装箱转换) | -                                              |

### 7.1 StringToNumber: `Number(str)`

数字（十进制、二进制、八进制、十六进制 & 科学计数法 E 或 e）：

- 30
- 0b111
- 0c13
- 0xFF
- 1e3
- -1e-2

:::warning 使用 `Number()` 而非 `parseInt()`、`parseFloat`

- `parseInt` 只支持十六进制前缀“0x”，忽略非数字字符，不支持科学计数法
  - 在比较旧的浏览器中，`parseInt` 还支持 0 开头的八进制前缀，这会造成错误。所以不论何时，都建议传入 `parseInt` 的第二个参数
- `parseFloat` 直接把字符串作为十进制进行解析，不能处理其他任何进制
  :::

### 7.2 NumberToString: `String(num)`

- 在较小范围内，数字转字符串完全符合你的直觉
- 在 Number 的绝对值较大或较小时，字符串表示是用科学计数法

```js
let p = 10000000000000000;
console.log(String(p)); // 10000000000000000
let q = 10000000000000000000000000;
console.log(String(q)); // 1e+25
```

### 7.3 对象->基本类型的转换（拆箱转换）

拆箱转换会尝试调用 `valueOf` 和 `toString` 来获得拆箱后的基本类型。如果这两个函数都不存在，或没有返回基本类型，就会产生类型错误 TypeError。

ES6 之后，可以使用 `Symbol.toPrimitive` 来覆盖原有行为。

- Boolean：没有对应的转换。所有的对象都是 `true`。
- Number：当进行数学运算时进行数值转换。例如，`Date` 对象可以相减。优先使用 `valueOf`。
- String：一般在输出的时候进行。比如 `alert(obj)`、`console.log(obj)` 等。优先使用 `toString`。

:::code-tabs#拆箱转换
@tab Number

```js
let obj = {
  valueof: () => {
    console.log("valueOf");
    return {};
  },
  toString: () => {
    console.log("toString");
    return {};
  },
};

obj + 3;
// valueOf
// toString
// TypeError
```

@tab String

```js
let obj = {
  valueof: () => {
    console.log("valueOf");
    return {};
  },
  toString: () => {
    console.log("toString");
    return {};
  },
};

String(obj);
// toString
// valueOf
// TypeError
```

@tab Symbol.toPrimitive

```js
let obj = {
  valueof: () => {
    console.log("valueOf");
    return {};
  },
  toString: () => {
    console.log("toString");
    return {};
  },
};

obj[Symbol.toPrimitive] = () => {
  console.log("Symbol.toPrimitive");
  return "hi";
};

String(obj);
// Symbol.toPrimitive
// hi
```

:::

### 7.4 基本类型->对象的转换（装箱转换）

之前提到过，基本类型 Boolean, String, Number, Symbol 在对象中都有对应的类。装箱转换就是把这些基本类型转换为对应的对象。

可以利用某个函数的 `call` 来强迫装箱，或者使用内置的 `Object()` 函数显式调用装箱能力。

```js
let symbolObj = function () {
  return this;
}.call(Symbol("a"));
// 或
// let symbolObj = Object(Symbol("a"));

console.log(typeof symbolObj); // object
console.log(symbolObj instanceof Symbol); // true
console.log(symbolObj.constructor == Symbol); // true
```

> `typeof` 只能返回 `number`, `boolean`, `string`, `function`, `object`（NULL，数组，对象）, `undefined`。
>
> `instanceof` 判断一个变量是否是某个对象的实例。

装箱操作会频繁产生临时对象，在一些对性能要求较高的场景下，要尽量避免对基本类型做装箱转换。

每类装箱对象都有私有的 Class 属性，可以用 `Object.prototype.toString` 获取：

```js
Object.prototype.toString.call(symbolObj); // [object symbol]
```

## 8. 数据的存储

基本类型直接在栈中存放值，引用类型在栈中存放地址，地址指向堆中的具体值。

## 补充

标准中规定了运行时数据类型，JavaScript 中还提供了 typeof 这样的运算来获取操作数类型。二者之间有很多不一致的地方，我们按照 typeof 来理解就好。

| 表达式         | typeof 结果 | 运行时类型 |
| -------------- | ----------- | ---------- |
| null           | object      | Null       |
| {}             | object      | Object     |
| (function(){}) | function    | Object     |
| 100            | number      | Number     |
| "hi"           | string      | String     |
| true           | boolean     | Boolean    |
| void 0         | undefined   | Undefined  |
| Symbol("id")   | symbol      | Symbol     |

- 这里要注意 null 和 function
