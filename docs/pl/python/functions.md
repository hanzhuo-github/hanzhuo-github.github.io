---
lang: zh-CN
title: Functions
description:
article: false
date: 2025-01-20
order: 4
---

## 1 杂项

- parameters（形参）v.s. arguments（实参）
- default parameter: `=`。==注意，有默认值的形参要写在后面==。
- positional arguments & keyword arguments:
  - positional arguments: `fn(value1, value2)` 分别对应 param1 和 param2
  - keyword arguments: `fn(parameter2=value2, parameter1=value1)`
    - 这样就不必按照 function 定义的顺序指定参数
    - 使用 keyword argument 之后，它后面的 argument 就不能再使用 positional arguments 了。
- lambda expression: define an anonymous function (use it only once) with just one expression.
  - 语法：`lambda parameters: expression`
- `help(fn)`：获取 function 的 documentation。或者 `fn.__doc__`

:::code-tabs
@tab function

```python
def greet(name):
  """ Return a greeting to users """
  return f"Hi {name}"

greeting = greet('John')
print(greeting)
```

@tab default parameter

```python
def function_name(param1, param2=value2, param3=value3, ...):
  pass
```

@tab keyword arguments

```python
fn(10, parameter2=20, 30) # 不能在 keyword arguments 后面用 positional arguments
# SyntaxError: positional argument follows keyword argument
```

@tab recursive function

```python
def fn():
  # ...
  if condition:
      # stop calling itself
  else:
      fn()
  # ...
```

:::

## 2 `*args`

:::details Unpacking tuple

```python
x, y = (1, 2)
x, y ,z = 10, 20, 30

x, y, _ = 10, 20, 30

# other = [100, 0.5] 是一个 list
r, g, *other = (192, 210, 100, 0.5)

# 使用 * 来 merge 多个 tuple
odd_numbers = (1, 3, 5)
even_numbers = (2, 4, 6)
numbers = (*odd_numbers, *even_numbers)
print(numbers)  # (1, 3, 5, 2, 4, 6)

# 利用 unpack 交换两个元素
# Python 先执行右边，然后将值赋给左边
x, y = y, x

```

:::

类似 Unpacking tuple，和其不同之处在于，下面代码中的 args 是 tuple 类型，而 unpacking tuple 则会得到 list 类型。

```python
def add(x, y, *args):
    total = x + y
    print(args)         # (30, 40)
    print(type(args))   # <class 'tuple'>
    for arg in args:
        total += arg

    return total


result = add(10, 20, 30, 40)
print(result)
```

- 使用 `*args` 就不能再在后面使用 positional arguments。==应该使用 keyword argument==。

  ```python
  def add(x, y, *args, z):
    return x + y + sum(args) + z

  add(10, 20, 30, 40, 50)
  # TypeError: add() missing 1 required keyword-only argument: 'z'
  ```

  ```python{4}
  def add(x, y, *args, z):
    return x + y + sum(args) + z

  add(10, 20, 30, 40, z=50)
  ```

- Unpacking arguments

  ```python
  def point(x, y):
    return f'({x},{y})'

  a = (0, 0)
  origin = point(a)
  # TypeError: point() missing 1 required positional argument: 'y'

  # 修正：
  origin = point(*a)
  ```

## 3 `**kwargs`: keyword parameter

### 3.1 基本用法

`**kwargs` 接收 keyword arguments，类型为 Dictionary。

```python
def connect(**kwargs):
  print(type(kwargs))
  print(kwargs)

connect()    # <class 'dict'>  # {}
connect(server='localhost', port=3306, user='root', password='Py1hon!Xt')
# {'server': 'localhost', 'port': 3306, 'user': 'root', 'password': 'Py1hon!Xt'}
```

对应的，如果你向 function 传入 dictionary，使用 `**`。

```python
def connect(**kwargs):
  print(kwargs)


config = {'server': 'localhost',
          'port': 3306,
          'user': 'root',
          'password': 'Py1thon!Xt12'}

connect(**config)
```

- `**kwargs` 要放在最后：`def connect(fn, **kwargs):`, `def fn(*args, **kwargs)`

### 3.2 同时使用 `*args` 和 `**kwargs`

- positional arguments 将被赋给 `args`，类型为 tuple
- keyword arguments 将被赋给 `kwargs`，类型为 dictionary

```python
def fn(*args, **kwargs):
  print(args)
  print(kwargs)

fn(1, 2, x=10, y=20)
# (1, 2)
# {'x': 10, 'y': 20}
```

## 3 Partial Functions

```python
def multiply(a, b):
  return a*b

def double(a):
  return multiply(a, 2)

result = double(10)
print(result)  # 20
```

Python 在 `functools` module 中提供了 `partial()` function。语法如下：

```python
functools.partial(fn, /, *args, **kwargs)
```

- 返回 `partial` object，它 callable。
- 调用 `partial` object 时，Python 调用 `fn` function，使用 positional arguments `args` 和 keyword arguments `kwargs`.

```python
from functools import partial

def multiply(a, b):
  return a*b

double = partial(multiply, b=2)

result = double(10)  # 20
double(10, b=3)  # 30
```

:::details

```python
from functools import partial


def multiply(a, b):
  return a*b

x = 2
f = partial(multiply, x)  # 这里已经计算了 x 的值

result = f(10)  # 20

x = 3
result = f(10)  # 20
```

:::
