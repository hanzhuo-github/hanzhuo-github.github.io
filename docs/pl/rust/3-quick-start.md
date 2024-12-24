---
lang: zh-CN
title: 快速开始
description:
article: false
date: 2024-08-03
order: 3
---

## 1 QuickStart

- 使用 [restup.rs](https://rustup.rs/) 中提供的方法进行下载安装。

- 使用 `cargo new file_path` 创建新项目。

  - 项目入口在 src/main.rs
  - Cargo.toml 是 Rust 项目的配置管理文件，符合 [toml](https://toml.io/cn/v1.0.0) 语法

- 在项目目录下运行命令行 `cargo run`，经过编译后，程序开始运行。

## 2 Rust 的基本特点

- 使用名为 `cargo` 的工具管理项目。

- 整体语法偏 C/C++ 风格。

  - 函数体用花括号 `{}` 包裹
  - 表达式之间用分号 `;` 分隔
  - 访问结构体的成员函数或者变量使用点 `.` 运算符
  - 访问命名空间（namespace）或者对象的静态函数使用双冒号 `::` 运算符
  - 如果要简化对命名空间内部的函数或者数据类型的引用，可以使用 `use` 关键字，比如 `use std::fs`
  - 可执行体的入口函数是 main()

- Rust 虽然是一门强类型语言，但编译器支持类型推导。

- Rust 支持宏编程。很多基础功能（如 `println!()`）都被封装成宏，以便写出简洁代码。

- **Rust 的变量默认是不可变的**，如果要修改变量的值，需要显式地使用 `mut` 关键字。

- 除了 let / static / const / fn 等少数语句外，Rust 绝大多数代码都是表达式（expression）。所以 if / while / for / loop 都会返回一个值，函数最后一个表达式就是函数的返回值，这和函数式编程语言一致。

- Rust 支持面向接口编程和泛型编程。

- Rust 有非常丰富的数据类型和强大的标准库。

- Rust 有非常丰富的控制流程，包括模式匹配（pattern match）

## 3 基本语法和基础数据类型

### 3.1 变量和函数

Rust 支持类型推导，所以，在编译器能够推到类型的情况下，变量类型一般可以省略。但要注意，常量（const）和静态变量（static）必须声明类型。

**默认变量不可变**是一个重要特性，但是可以通过使用 `mut` 关键字来让变量是可变的。如果使用了 `mut` 却没有修改变量，Rust 编译器会给出报警提示移除不必要的 `mut`。

默认变量不可变符合最小权限原则（Principle of Least Privilege），有助于帮助开发者写出健壮且正确的代码。

Rust 函数的参数类型和返回值类型都必须显示定义（没有返回值时可以省略，返回 [unit](https://doc.rust-lang.org/std/primitive.unit.html)）。函数中的最后一个表达式就是其返回值（该表达式末尾不应该有 `;`），如果最后一个表达式后添加了分号 `;`，则表示其返回值为 unit；如果函数内部要提前返回，则要用 `return` 关键字。

### 3.2 数据结构

Rust 用 `struct` 定义结构体，用 `enum` 定义标签联合体（Tagged Union），还能像 Python 一样随手定义元祖（Tuple）类型。

定义数据结构时一般会加入修饰，为数据结构引入一些额外的行为。Rust 中通过 trait 来定义数据的行为，trait 定义了数据结构可以实现的接口，类似 Java 中的 interface。

一般用 `impl` 关键字为数据结构实现 trait。Rust 还提供了派生宏（Derive Macro），能够简化一些标准接口的定义。如 `#[derive(Debug)]` 为数据结构实现 [Debug trait](https://doc.rust-lang.org/std/fmt/trait.Debug.html)，提供了 debug 能力，这样才可以通过 `{:?}` 用 `println!` 打印出来。

还有 `Copy`、`Clone` 这两个派生宏，Clone 让数据可以被复制，Copy 让数据结构可以在参数传递的时候自动按字节拷贝。

![](/images/rust/variablefnds.webp =700x)

> [static](https://doc.rust-lang.org/std/keyword.static.html) > [lazy_static](https://github.com/rust-lang-nursery/lazy-static.rs)

## 4 控制流程

- **顺序执行**，即一行行代码往下执行。

- **函数调用**，执行过程中遇到函数就会发生函数调用。

- Rust 的**循环**和大部分语言一致，支持死循环 `loop`、条件循环 `while`，以及对迭代器的循环 `for`。

  - `for` 循环可以用于任何实现了 `IntoIterator` trait 的数据结构。
    - 执行过程中 `IntoIterator` 会生成一个迭代器，for 循环不断从迭代器中取值，直到迭代器返回 None 为止。因而，for 循环实际上只是一个语法糖，编译器会将其展开使用 loop 循环对迭代器进行循环访问，直至返回 None。
    - `2..n` 表示 `2 <= x < n` 的所有值。可以省略 Range 的下标或上标，但是不支持负数。
    ```rust
    let arr = [1, 2, 3];
    assert_eq!(arr[..], [1, 2, 3]);
    assert_eq!(arr[0..=1], [1, 2]);
    ```

- 满足某条件时还会发生**跳转**，Rust 支持分支跳转、模式匹配、错误跳转和异步跳转。

  - 分支跳转：`if/else`；
  - 模式匹配：通过模式匹配表达式或值的某部分内容来进行分支跳转；
  - 错误跳转：当调用的函数返回错误时，Rust 会提前终止当前函数的执行，向上一层返回错误；
  - 异步跳转：当 async 函数执行 await 时，函数当前上下文可能被阻塞，执行流程会跳转到另一个异步任务执行，直至 await 不再阻塞。

![](/images/rust/processcontrol.webp =700x)

## 5 模式匹配

- Rust 的模式匹配吸取了函数式编程语言的优点，强大优雅且效率很高。它可以用于 struct / enum 中匹配部分或者全部内容。

- 模式匹配的关键字是 `match`。也可以使用 `if let`/`while let` 做简单匹配。
- Rust 的模式匹配是一个很重要的语言特性，被广泛应用在状态机处理、消息处理和错误处理中。

:::code-tabs

@tab match

```rust
fn process_event(event: &Event) {
    match event {
        Event::Join((uid, _tid)) => println!("user {:?} joined", uid),
        Event::Leave((uid, tid)) => println!("user {:?} left {:?}", uid, tid),
        Event::Message((_, _, msg)) => println!("broadcast: {}", msg),
    }
}
```

@tab if let

```rust
// 如果只关心 Event::Message
fn process_message(event: &Event) {
    if let Event::Message((_, _, msg)) = event {
        println!("broadcast: {}", msg);
    }
}
```

:::

## 6 错误处理

Rust 没有沿用 C++/Java 等诸多前辈使用的异常处理方式，而是**借鉴 Haskell，把错误封装在 `Result<T, E>` 类型中，同时提供了 `?` 操作符来传播错误**，方便开发。`Result<T, E>` 类型是一个泛型数据结构，T 代表成功执行返回的结果类型，E 代表错误类型。

:::code-tabs
@tab unwrap()

```rust
// 代码中其实使用了错误 Result<T, E> 类型
// 只是我们使用了 unwrap() 方法，只关心成功返回的结果，如果出错，整个程序会终止
fn main() {
    let url = "https://www.rust-lang.org/";
    let output = "rust.md";

    println!("Fetching url: {}", url);
    let body = reqwest::blocking::get(url).unwrap().text().unwrap();

    println!("Converting html to markdown...");
    let md = html2md::parse_html(&body);

    fs::write(output, md.as_bytes()).unwrap();
    println!("Markdown saved to: {}", output);
}
```

@tab 操作符 ?

```rust
// POINT2: 如果想让错误传播，可以把所有的 unwrap() 换成 ? 操作符
// 并让 main() 函数返回一个 Result<T, E>
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "https://www.rust-lang.org/";
    let output = "rust2.md";

    println!("Fetching url: {}", url);
    let body = reqwest::blocking::get(url)?.text()?;

    println!("Converting html to markdown...");
    let md = html2md::parse_html(&body);

    fs::write(output, md.as_bytes())?;
    println!("Markdown saved to: {}", output);

    Ok(())
}
```

:::

## 7 Rust 项目的组织

当 Rust 项目的代码规模越来越大时，我们可以**用 mod 来组织代码**。

具体做法：在项目的入口文件 lib.rs/main.rs 中，用 mod 来生命要加载的其他代码文件。如果模块内容较多，可以放在一个目录下，在该目录下放一个 mod.rs 引入该模块的其他文件。然后，就可以用 `mod <目录名>` 引入这个模块了。

![](/images/rust/mod.webp =500x)

Rust 中，**一个项目也被称为一个 crate**。当 crate 里的代码改变时，这个 crate 需要被重新编译。crate 可以是一个可执行项目，也可以是一个库，我们可以用 `cargo new  <name> -- lib` 来创建一个库。

在一个 crate 下，除了项目的源代码，单元测试和集成测试的代码也会放在 crate 里。

Rust 的单元测试一般放在和被测代码相同的文件中，使用条件编译 `#[cfg(test)]` 来确保测试代码只在测试环境下编译。

```rust
// 单元测试
#[cfg(test)]
mod tests {
  #[test]
  fn it_works() {
    assert_eq!(2 + 2, 4);
  }
}
```

集成测试一般放在 tests 目录下，和 src 平级。和单元测试不同，集成测试只能测试 crate 下的公开接口，编译时编译成单独的可执行文件。

> [How to write tests](https://doc.rust-lang.org/book/ch11-01-writing-tests.html)

在 crate 下，如果要运行测试用例，可以使用 `cargo test`。

当代码规模继续增长，把所有代码放在一个 crate 里就不是一个好主意了，因为任何代码的修改都会导致这个 crate 重新编译，这样效率不高。我们可以**使用 workspace**。

一个 workspace 可以包含一到多个 crates，当代码发生改变时，只有涉及的 crates 才需要重新编译。当我们要构建一个 workspace 时，需要先在某个目录下生成一个如图所示的 Cargo.toml，包含 workspace 里所有的 crates，然后可以 cargo new 生成对应的 crates：

![](/images/rust/workspace.webp =600x)

> [More about cargo and crates.io](https://doc.rust-lang.org/book/ch14-00-more-about-cargo.html)

## 小结

![](/images/rust/quickstart.webp =600x)

> Rust 支持声明宏（declarative macro）和过程宏（procedure macro）
>
> 其中过程宏又包含三种方式：函数宏（function macro），派生宏（derive macro）和属性宏（attribute macro）。
>
> println! 是函数宏，是因为 Rust 是强类型语言，函数的类型需要在编译期敲定，而 println! 接受任意个数的参数，所以只能用宏来表达。
