---
lang: zh-CN
title: TypeScript 配置
description:
article: false
date: 2023-12-21
order: 2
---

命令行执行 `tsc --init` 会自动创建 `tsconfig.json` 文件。它的配置项有很多（详见[官网 tsconfig](https://aka.ms/tsconfig)。），这篇文章将介绍那些我们需要熟知的一小部分。

## 1. 基本配置

下面的选项推荐在所有的项目都进行配置：

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "es2022",
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",
    "isolatedModules": true,
    "verbatimModuleSyntax": true
  }
}
```

- [esModuleInterop](https://www.typescriptlang.org/tsconfig/#esModuleInterop)：设置为 `true`，可以实现对 CommonJS 模块的支持（修复 CommonJS 和 ES Modules 的默认行为引起的错误）。

  ::::details 默认为 false 情况下的问题
  常用的 JS 模块系统有三个：CommonJS (cjs), ES Module (esm), UMD。

  我们编写代码时采用 esm，但是引入三方库可能是 cjs，二者之间有行为上的区别。具体见下：

  :::code-tabs
  @tab 导入默认

  ```ts
  // 源代码
  import React from "react";
  console.log(React);
  // 转译后
  // 由于 React 的 module.exports 中没有 default 属性，所以代码报错
  const React = require("react");
  console.log(React.default);
  ```

  @tab import \*

  ```ts
  // 源代码
  import * as React from "react";
  console.log(React);
  // 转译后
  const React = require("react");
  console.log(React);
  ```

  ::::

- [skipLibCheck](https://www.typescriptlang.org/tsconfig/#skipLibCheck)：设置为 `true`，可以跳过对所有 `.d.ts` 文件的类型检查，节省编译时间。否则会检查所有 `node_modules` 中的 `.d.ts` 文件，这是十分耗时的。

- [target](https://www.typescriptlang.org/tsconfig/#target)：指定 TypeScript 编译器应该将 TypeScript 代码编译成的 JavaScript 版本。`esnext` 指最新的 ECMA 提案和特性，出于稳定性的考虑，我们可以使用 `es2022` 而非 `esnext`。

- [allowJs](https://www.typescriptlang.org/tsconfig/#allowJs)：设置为 `true` 允许引入 JavaScript 文件（TypeScript 默认只允许引入 `.ts` 和 `.tsx`）。

- [resolveJsonModule](https://www.typescriptlang.org/tsconfig/#resolveJsonModule)：设置为 `true`，允许引入 `.json` 文件。

- [moduleDetection](https://www.typescriptlang.org/tsconfig/#moduleDetection)：

  - `"auto"`（默认值）：如果文件中包含 import 或 export、`import.meta`，则认为是模块；当 `module` 设置为 `node16` 或 `nodenext` 时，检查 `package.json` 中的 `"type"` 是否为 "module"；当 `jsx` 设置为 `react-jsx` 时，JSX 文件也会被视为模块。
  - `"legacy"`：根据是否使用了 import 和 export 来确定是不是模块。
  - `"force"`：每个非声明文件（即 `.ts` 和 `.tsx`，但不包括 `.d.ts`）都被视为模块。

- [isolatedModules](https://www.typescriptlang.org/tsconfig/#isolatedModules)：设置为 `true`，每个文件会被独立编译。

- [verbatimModuleSyntax](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax)：设置为 `true`，强制使用 `import type` 和 `export type` 来导入、导出类型。

## 2. 严格性检查

关于严格性检查推荐的配置：

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}
```

- [strict](https://www.typescriptlang.org/tsconfig/#strict)：设置为 `true`，表示开启了下面一系列的类型检查规则：

  - `strictNullChecks`：如果为 `false`，`null` 和 `undefined` 可以被赋值给其他任意类型。
  - `strictPropertyInitialization`：是否要求类的属性必须被初始化，开启此属性需要一并开启 `strictNullChecks`.
  - `strictFunctionTypes`：如果为 `false`，传参时 `string` 类型可以赋值给 `string|number`。
    :::details 设置为 true 之后报错

    ```ts
    function outer(callback: (x: string | number) => void) {
      callback("hello");
    }
    outer((a: string) => {
      console.log(a);
    });
    // Argument of type '(a: string) => void' is not assignable to parameter of type '(x: string | number) => void'.
    ```

    :::detail

  - `strictBindCallApply`：在 `bind`, `call`, `apply` 时是否进行参数检查。
  - `noImplicitAny`：设置为 `true`，不允许有隐式的 `any`，如果 TypeScript 将某个变量推断为 `any` 类型就会报错。
  - `noImplicitThis`：是否允许出现隐式 `any` 类型的 `this`。
  - `alwaysStrict`：是否开启严格模式，开启的话编译后的 JavaScript 代码就会带上 `"use strict"`。

- [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess)：启用它会在「使用索引访问的属性（比如 object，array）」上加上 `undefined`。

  ```ts
  interface AType {
    [key: string]: string;
  }

  const a: AType;
  const data = a.data;
  // TypeScript 检测出 `const data: string`
  // 启用 noUncheckedIndexedAccess 后 `const data: string | undefined`
  ```

  如果没启用这个字段，那么 `a.xxx` 都被认为是 string 类型，TypeScript 编译器就不会提示我们它可能是 `undefined`。所以，启用它，避免没有检查该属性是否被定义。

- [noImplicitOverride](https://www.typescriptlang.org/tsconfig/#noImplicitOverride)：使类中的 `override` 关键字生效。子类复写基类中的方法时，必须使用关键字 `override`。

很多人也推荐使用 [tsconfig/bases](https://github.com/tsconfig/bases/blob/031273b815ff7f672c7c9057fb7d19ef363054b1/bases/strictest.json) 中的严格性选项。像 [`noImplicitReturns`](https://www.typescriptlang.org/tsconfig/#noImplicitReturns), [`noUnusedLocals`](https://www.typescriptlang.org/tsconfig/#noUnusedLocals), [`noUnusedParameters`](https://www.typescriptlang.org/tsconfig/#noUnusedParameters), [`noFallthroughCasesInSwitch`](https://www.typescriptlang.org/tsconfig/#noFallthroughCasesInSwitch) 等选项可以在确实需要的时候再进行配置。
:::details 选项介绍

- [`noImplicitReturns`](https://www.typescriptlang.org/tsconfig/#noImplicitReturns)：如果为 `true`，TypeScript 将检查函数中的所有路径，确保都有返回值。
- [`noUnusedLocals`](https://www.typescriptlang.org/tsconfig/#noUnusedLocals)：如果为 `true`，那么不允许有「没被使用的局部变量」。
- [`noUnusedParameters`](https://www.typescriptlang.org/tsconfig/#noUnusedParameters)：如果为 `true`，那么不允许函数中有没被使用的参数。
- [`noFallthroughCasesInSwitch`](https://www.typescriptlang.org/tsconfig/#noFallthroughCasesInSwitch)：如果为 `true`，则不允许 fallthrough，即如果 switch 中的非空 case 必须有 `break`, `return`, `throw` 中的一个`。

:::

## 3. 使用 tsc 进行编译

如果使用 TypeScript 编译器进行编译，需要进行的配置有：

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "outDir": "dist"
  }
}
```

- [module](https://www.typescriptlang.org/tsconfig/#module)：指定生成的 JavaScript 代码要遵循哪种模块化规范。Node 环境最好用 `"nodenext"`，此时 [`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution)（在编译时如何解析模块的依赖关系） 被隐式地设置为了 `"nodenext"`。

  - `"node16"`（同 `"nodenext"`）：Node.js v16+ 的模块系统，它们支持在同一项目中同时使用 ES 模块和 CommonJS 模块，并提供了特定的互操作性和检测规则。如果你的项目目标是在 Node.js v16+ 环境下运行，并且希望支持 ES 模块和 CommonJS 模块的混合使用，那么选择其中之一将是合适的。nodenext 将会随着 Node.js 模块系统的演进而保持最新状态。
  - `"es2015"`/`"es6"`, `"es2020"`, `"es2022"`, `"esnext"`：基于 ECMAScript 规范的不同版本。如果你希望项目代码能够某个版本 ECMAScript 特性，并且不需要考虑 Node.js 的特定模块系统，则可以选择其中之一。
  - `"commonjs"`, `"system"`, `"amd"`, `"umd"`：分别对应了常见的模块系统。但是不推荐在新项目中使用这些，它们已经过时了，不适合现代的 JavaScript 生态系统。
  - `"none"`, `"preserve"`：请跳转到[不使用 `tsc` 编译](#_4-不使用-tsc-编译)中查看。

- [outDir](https://www.typescriptlang.org/tsconfig/#outDir)：TypeScript 编译后的代码放在哪个目录里。一般是 `"dist"`。

## 4. 不使用 tsc 编译

如果你只是把 TypeScript 作为 linter（代码检查器）工具而不是编译器，这种情况下你可能不需要 `tsc` 来转译代码。这时你需要设置：

```json
{
  "compilerOptions": {
    "module": "preserve",
    "noEmit": true
  }
}
```

- [module: "preserve"](https://www.typescriptlang.org/tsconfig/#module)：不对模块语法进行转换，即导入导出的格式都没有进行转换或转译。虽然很少需要在同一个文件中混用 import 和 require，但这种模块模式最好地反映了大多数现代打包器以及 Bun 运行时的功能。这时[`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution)（在编译时如何解析模块的依赖关系） 被隐式地设置为了 `"bundler"`。

- [noEmit](https://www.typescriptlang.org/tsconfig/#noEmit)：设置为 `true` 告诉 TypeScript 不要生成任何文件。使用场景：可能要使用其他工具（比如 Babel 或 swc）来处理 TypeScript 文件，将其转换成可以在 JavaScript 环境中运行的文件。

## 5.库的配置

如果你正在构建一个库时，应该设置 `declaration: true`。

```json
{
  "compilerOptions": {
    "declaration": true
  }
}
```

- [declaration](https://www.typescriptlang.org/tsconfig/#declaration)：为项目中的每个 ts 或 js 文件生成 `.d.ts` 文件。

如果使用 monorepo 来构建库时，应该设置：

```json
{
  "compilerOptions": {
    "declaration": true,
    "composite": true,
    "sourceMap": true,
    "declarationMap": true
  }
}
```

- [composite](https://www.typescriptlang.org/tsconfig/#composite)：启用后，TypeScript 会记录每个文件的依赖关系，并在编译时根据这些依赖关系进行增量式构建（即，当你修改了一个子项目中的文件时，TypeScript 只会重新编译该子项目及其直接或间接以来的文件，而不是重新编译整个项目）。启用后会有如下影响：

  - [rootDir](https://www.typescriptlang.org/tsconfig/#rootDir) 指定了 TypeScript 编译器应该从哪里开始查找源文件。如果没有显式设置，当启用 `composite` 后，会默认为包含 `tsconfig.json` 文件的目录。
  - `tsconfig.json` 中可以通过 [`include`](https://www.typescriptlang.org/tsconfig/#include) 和 [`files`](https://www.typescriptlang.org/tsconfig/#files) 两种方式来制定要包含在编译过程的源文件。如果启用了 `composite`，所有要编译的文件必须在 `include` 或 `files` 中显式列出。如果存在一些未包含的实现文件，TypeScript 编译器会发出警告，指出那些文件没有被指定。
  - `declaration` 必须是 `true`。

- [sourceMap](https://www.typescriptlang.org/tsconfig/#sourceMap) 和 [declarationMap](https://www.typescriptlang.org/tsconfig/#declarationMap)：分别控制是否生成源映射文件（Source Map）和声明映射文件（Declaration Map）。启用这两个选项，库的使用者就可以在调试时使用 “go-to-definition” 跳转到源代码。

## 6. 在 DOM 中运行

如果代码要在 DOM 中运行，需要以下配置：

```json
{
  "compilerOptions": {
    "lib": ["es2022", "dom", "dom.iterable"]
  }
}
```

- [lib](https://www.typescriptlang.org/tsconfig/#lib)：告诉 TypeScript 编译器要包含哪些内置类型，这些内置类型通常是指 JavaScript 运行时环境提供的标准库和全局对象的类型定义。当代码运行在 DOM 环境（比如浏览器中运行的前端项目），你可能希望使用 `lib` 来指定一组内置类型，以确保 TypeScript 编译器能顾提供适当的类型检查和代码补全。
  - `"dom"`：DOM 相关的内置类型，包括了浏览器环境中常见的全局对象（`window`, `document` 等）和 DOM 元素的类型定义。
  - `"dom.iterable"`：可迭代的 DOM 集合（`NodeList`, `HTMLCollection` 等）。

如果不在 DOM 中运行，就不需要 `"dom"` 和 `"dom.iterable"`。

## 参考文章

本文以 [The TSConfig Cheat Sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet) 为基准，并参考[官网 tsconfig](https://aka.ms/tsconfig)、综合个人理解进行补充完善。
