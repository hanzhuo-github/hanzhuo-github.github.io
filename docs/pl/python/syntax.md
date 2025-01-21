---
lang: zh-CN
title: Syntax
description:
article: false
date: 2025-01-16
order: 1
---

## 1 Fundamentals

- Comments:

  - block comments & inline comments: `#` followed by a single space
  - docstrings: triple-quotes (`"""`), for functions, modules, and classes
    > 注：docstring 不算是 comments，会生成匿名变量来存储，也不会被 Python interpreter 忽略。
    - documentation string 自动生成 code documentation (docstring)
    - 可通过 `obj.__doc__` 获取
    - 分为两种：
      - One-line docstrings
      - Multiline docstrings
  - multiline comments: 不支持

- logical operator: `not`, `and`, `or` (sort by priority)

- Continuation of statements: backlash (`\`)

- Identifiers:

  - case-sensitive;
  - start with a letter or underscore (`_`);
  - contain only letters, numbers, and underscores (`_`).

  ```python
  import keyword

  print(keyword.kwlist)
  ```

- String literals: `'`, `"`, `'''` or `"""`

  - immutable

  - 避免转义: backlash (`\`)

    - 避免对 `\` 的转义

      - raw string：`r'...'` 或 `R'...'`
      - `\\`

      :::details `r'...'` 不能以奇数个 `\` 结尾

      `r'\'`, `r'\\\'` 等以奇数个 `\` 结尾的 raw string 都是有语法错误的。

      原因在于，处理 raw string 时，遇到 `\` 会保留它后面的字符，同时保留反斜杠自身。

      以 `r'\'` 为例，遇到 `\` 后，保留了反斜杠、以及它后面的单引号，所以这个 raw string 没有正确地结束。想要正确结束，需要将引号匹配上，即 `r'\''`，打印出来就是 `\'`。

      :::

  - 将 regular string 转换为 raw string：`repr`

    ```python
    s = '\n'   # regular string：\n 会被转义为换行

    raw_string = repr(s)
    print(raw_string)    # '\n'。输入的 raw string 是有引号包围

    raw_string = repr(s)[1:-1]
    print(raw_string)    # \n。去掉头尾的引号
    ```

  - multiline string: triple-quotes (`'''` or `"""`)

  - `len(string_variable)`

  - slicing strings: `string[start:end]`, start（默认 0）和 end（默认 length）都是可选的

  :::code-tabs
  @tab backlash

  ```python
  message = 'It\'s also a valid string'
  message = r'C:\python\bin'
  ```

  @tab multiline

  ```python
  help_message = '''
  Usage: mysql command
    -h hostname
    -d database name
    -u username
    -p password
  '''
  ```

  @tab string elements

  ```python
  # negative index = index - length
  str = "Python String"
  str_len = len(str)
  print(str[0])   # P
  print(str[-1])  # g = 12 - 13
  print(str[-2])  # n = 11 - 13
  ```

  @tab slice

  ```python
  str = "Python String"
  print(str[0:2])  # Py
  ```

  :::

- format string (f-string):

  [format rule](https://docs.python.org/3/library/string.html#format-specification-mini-language)

  :::code-tabs
  @tab basic

  ```python
  name = 'John'
  message = f'Hi {name}'  # F 也可以
  print(message)  # Hi John

  message = f'Hello, {name.upper()}!'
  print(message)  # Hello, JOHN!
  ```

  @tab format numbers

  ```python
  number = 16
  s = f'{number:x}'  # 10

  number = 0.01
  s = f'{number:e}'  # 1.000000e-02

  number = 200
  s = f'{number:06}'  # 垫0：000200
  s = f'{number: 06}' # ' 00200'
  s = f'{number:.2f}' # 200.00

  number = 400000000000
  s = f'{number:,}'  # 也可用 `_`：400,000,000,000

  number = 0.1259
  s = f'{number: .2%}'  # 12.59%
  s = f'{number: .1%}'  # 12.6%
  ```

  :::

- Numbers

  - exponents: `**`
  - underscores (`_`) in numbers: `count = 10_000_000_000`

- Boolean

  - `bool()`：转换为 boolean
  - falsy values:
    - The number zero (`0`)
    - An empty string `''`
    - `False`
    - `None`
    - An empty list `[]`
    - An empty tuple `()`
    - An empty dictionary `{}`

- Constants: Python doesn’t support constants

  - 使用全大写来表明该变量作为一个 constant 使用

  ```python
  FILE_SIZE_LIMIT = 2000
  ```

- Type Convention

  - `input()`: get input from users
    - 类型是 string（not integer）
  - `type(value)`
  - type convention
    - `int(str)`: string -> integer
    - `float(str)`
    - `bool(val)`
    - `str(val)`

  :::code-tabs
  @tab input()

  ```python
  value = input('Enter a value:')
  print(value)
  ```

  :::

- control flow

  - if
  - ternary operator: `value_if_true if condition else value_if_false`
  - for loop
    - `range(start, stop, step)`：不指定 start 则默认从 0 开始。
    - for ... else：else 语句只有在循环正常执行完才会执行（即，如果 break 了，就不会执行）
  - while, while ... else
  - python 不支持 do ... while，可用 while 模拟实现
  - `break`: exits a loop prematurely (for loop or while loop)
  - `continue`: skips the current iteration and starts the next one
  - `pass`: a placeholder that does nothing

  :::code-tabs

  @tab if

  ```python
  if if-condition:
    if-block
  elif elif-condition1:
      elif-block1
  elif elif-condition2:
      elif-block2
  ...
  else:
      else-block
  ```

  @tab ternary

  ```python
  ticket_price = 20 if int(age) >= 18 else 5
  ```

  @tab for

  ```python
  for index in range(6):
    print(index)  # 0 1 2 3 4 5

  for index in range(1, 6):
    print(index)  # 1 2 3 4 5

  for index in range(0, 11, 2):
    print(index)  # 0 2 4 6 8 10

  for item in iterables:
    # process item
  else:
    # statement
    # 循环正常运行完毕、循环结束后，就会执行这里
    # 即，遇到 break 就不会运行这个
  ```

  @tab for...else 例

  ```python
  people = [{'name': 'John', 'age': 25},
            {'name': 'Jane', 'age': 22},
            {'name': 'Peter', 'age': 30},
            {'name': 'Jenifer', 'age': 28}]

  name = input('Enter a name:')

  for person in people:
    if person['name'] == name:
      print(person)
      break
  else:
    print(f'{name} not found!')
  ```

  @tab 模拟 do ... while

  ```python
  while True:
    # code block

    # break out of the loop
    if condition
      break
  ```

  @tab pass

  ```python
  counter = 1
  max = 10
  if counter <= max:
    counter += 1
  else:
    pass   # use `pass` as a placeholder when you want to implement something later
  ```

  :::

## 2 List: `[]`

- 元素访问（`list[index]`）: index 可正可负
- Tuple：A tuple is an immutable list. `()`。

  - 创建：tuple 是使用逗号 `,` 定义的，而非括号 `()`。使用括号只是为了视觉看起来方便。

    ```python
    empty_tuple = ()
    tuple_numbers = 1,
    tuple_numbers = (1,)

    int_number = (1)  # 没有逗号，作为数学表达式来看，是 int
    ```

  - Unpack

    - 左右两边数目要相同。
    - dummy variable (`_`): 不在意的变量

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

### 2.1 编辑

- 修改：`list[index] = new_value`
- 添加：`list.append(value)`，`list.insert(index, value)`
- 删除：
  - `del list[index]`
  - `pop_elem = list.pop()`，也可以指定弹出哪个位置的元素 `pop_elem = list.pop(index)`
  - `list.remove(value)`：删掉第一个值为 value 的元素

### 2.2 排序

- `list.sort()`: sorts the original list **in place**.

  - 默认使用 `<` 来排序（即升序，小的在前）
  - `list.sort(reverse=True)`：降序
  - tuple 排序

    :::code-tabs
    @tab 传递具名函数

    ```python
    companies = [('Google', 2019, 134.81),
                 ('Apple', 2019, 260.2),
                 ('Facebook', 2019, 70.7)]

    def sort_key(company):
      return company[2]

    companies.sort(key=sort_key, reverse=True)
    print(companies)
    ```

    @tab 传递 lambda

    ```python
    companies = [('Google', 2019, 134.81),
                 ('Apple', 2019, 260.2),
                 ('Facebook', 2019, 70.7)]

    companies.sort(key=lambda company: company[2], reverse=True)
    print(companies)
    ```

    :::

- `sorted(list)`: returns a new list from the original list without changing the original one.

  - `sorted(list, reverse=True)`：默认升序，使用 `reverse=True` 降序。

### 2.3 Slice, Unpack, 寻找 index

- Slice: `sub_list = list[begin: end: step]` 三个参数都是可选的，可正可负
- Unpack a list: 左边变量的数量要等于 list 的元素数量

  ```python
  colors = ['red', 'blue', 'green']

  red, blue, green = colors  # 'red', 'blue', 'green'

  red, blue, *other = colors
  print(red)    #  'red'
  print(blue)   #  'blue'
  print(other)  #  ['green']
  ```

- `list.index(value)`：寻找下标。没有对应值则返回 Error（用 `in` 来修正）

  ```python
  cities = ['New York', 'Beijing', 'Cairo', 'Mumbai', 'Mexico']
  city = 'Osaka'

  if city in cities:
    result = cities.index(city)
    print(f"The {city} has an index of {result}.")
  else:
    print(f"{city} doesn't exist in the list.")
  ```

### 2.4 遍历

#### for

- `for item in list`
- `for item in enumerate(list)`: item 是 tuple `(index, value)`
- `for index, city in enumerate(list)`: unpack 对应的 tuple
- `for index, city in enumerate(list, starting_index)`: `starting_index` 将决定第一个下标的值

#### Iterables

- Iterable: an object that includes zero, one, or many elements。可用 for 进行遍历。
  - `for index in range(3)`
  - `for ch in str`
  - `for item in list`
- Iterator: the agent that performs the iteration

  - `iter(iterable)`: 获取 iterator
  - `next(iterator)`: get the next element from the iterable
  - iterator 也是 iterables

:::code-tabs
@tab 使用 next() 访问元素

```python
colors = ['red', 'green', 'blue']
colors_iter = iter(colors)

color = next(colors_iter)
print(color)  # 'red'

color = next(colors_iter)
print(color)  # 'green'

color = next(colors_iter)
print(color)  # 'blue'

# cause an excpetion
color = next(colors_iter)
print(color)
```

@tab iterator 也是 iterables

```python
colors = ['red', 'green', 'blue']
iterator = iter(colors)

for color in iterator:
  print(color)    # red \n green \n blue

```

:::

#### map, filter, reduce

- map: `iterator = map(fn, list)`

  ```python
  bonuses = [100, 200, 300]
  iterator = map(lambda bonus: bonus*2, bonuses)

  # 可以使用 for 循环来遍历 iterator 了
  # 或者使用 list() 将其转换为 list
  print(list(iterator))
  ```

- filter: `iterator = filter(fn, list)`

- reduce: `reduce(fn,list)`

  - `map()` 和 `filter()` 是 built-in functions；而 `reduce()` 来自 `functools` module.

  ```python
  from functools import reduce

  def sum(a, b):
    print(f"a={a}, b={b}, {a} + {b} ={a+b}")
    return a + b

  scores = [75, 65, 80, 95, 50]
  total = reduce(sum, scores)

  # total = reduce(lambda a, b: a + b, scores)  # 直接用 lambda expression

  print(total)
  ```

  输出：

  ```
  a=75, b=65, 75 + 65 = 140
  a=140, b=80, 140 + 80 = 220
  a=220, b=95, 220 + 95 = 315
  a=315, b=50, 315 + 50 = 365
  365
  ```

### 2.5 list comprehensions

`[output_expression for element in list if condition]`

:::code-tabs
@tab list comprehensions

```python
numbers = [1, 2, 3, 4, 5]
squares = [number**2 for number in numbers]

print(squares)  # [1, 4, 9, 16, 25]
```

@tab if condition

```python
mountains = [
  ['Makalu', 8485],
  ['Lhotse', 8516],
  ['Kanchendzonga', 8586],
  ['K2', 8611],
  ['Everest', 8848]
]

highest_mountains = [m for m in mountains if m[1] > 8600]

print(highest_mountains)
```

:::

## 3 Dictionaries: `{}`

- A dictionary is a collection of **key-value pairs**
  - key must be **immutable**
- Accessing value
  - `dict[key]`: 没有的话会报错 KeyError
  - `dict.get(key[, default_value])`: 没有则返回 default_value（默认为 `None`）

### 3.1 编辑

- 添加：`dict[key] = value`
- 修改：`dict[key] = new_value`
- 删除：`del dict[key]`

### 3.2 遍历

```python
for key, value in dict.items():
  pass

for value in person.values():
  pass

for key in dict.keys():
  pass

# looping through all keys is the default behavior when looping through a dictionary
for key in dict:
  pass
```

### 3.3 Dictionary Comprehension

```python
{key:value for (key,value) in dict.items() if condition}
```

## 4 Set: `{...}`

- A Python set is an **unordered** list of **immutable** elements.

  - Elements in a set are unordered.
  - Elements in a set are **unique**. A set doesn’t allow duplicate elements.
  - Elements in a set cannot be changed. For example, they can be numbers, strings, and tuples, but cannot be lists or dictionaries.

- `len(set)`
- `element in set`, `element not in set`

### 4.1 创建

- `skills = {'Python programming','Databases', 'Software design'}`
- `set(iterables)`
- 创建空 Set：`empty_set = set()`

### 4.2 编辑

- 添加：`set.add(element)`
- 删除：

  - `set.remove(element)`。不存在会报错 KeyError，配合 `in` 进行判断。
  - `set.discard(element)`。不存在不会报错
  - return an element from set: `pop()`，随机 pop

- 清空：`set.clear()`

### 4.3 Frozen a set: `frozenset()`

### 4.4 遍历

每次遍历获取的元素顺序是随机的。

#### for

```python
for item in my_set:
  pass

for index, value in enumerate(my_set):
  pass  # index 从 0 开始

for index, value in enumerate(my_set, 1):
  pass  # index 从 1 开始
```

#### map

```python
tags = {'Django', 'Pandas', 'Numpy'}
lowercase_tags = set(map(lambda tag: tag.lower(), tags))

print(lowercase_tags)
```

### 4.5 Set comprehension

```python
{expression for element in my_set if condition}
```

### 4.6 Set 的并集、交集、差集、子集、超集、不相交

#### 4.6.1 Set Union: `union()`

```python
# 方式 1: union(iterables)
new_set = set1.union(set2, ...)

# 方式 2: `|`，只能用 set
new_set = set1 | set2
```

##### union() v.s. `|`

```python
rates = {1, 2, 3}
ranks = [2, 3, 4]

ratings = rates.union(ranks)
print(ratings)    # {1, 2, 3, 4}

ratings = rates | ranks
# TypeError: unsupported operand type(s) for |: 'set' and 'list'
```

#### 4.6.2 Set Intersection

```python
# 方式 1: intersection(iterables)
new_set = set1.intersection(set2, set3)

# 方式 2: `&`，只能用 set
new_set = set1 & set2 & set3
```

#### 4.6.3 Set Difference

```python
# 方式 1: difference(iterables)
set1.difference(s2, s3, ...)

# 方式 2: `-`，只能用 set
s = s1 - s2
```

- `s = s1.difference(s2)` 和 `s = s2.difference(s1)` 不同

#### 4.6.4 Symmetric Difference

```python
# 方式 1: symmetric_difference(iterables)
new_set = set1.symmetric_difference(set2, set3,...)

# 方式 2: `^`，只能用 set
new_set = set1 ^ set2 ^...
```

#### 4.6.5 Subset: `issubset`

```python
# 方式 1: issubset(iterables)
set_a.issubset(set_b)

# 方式 2: `<=`，只能用 set
set_a <= set_b

# `<`，真子集（proper subset ）
set_a < set_b
```

#### 4.6.6 Superset: `issuperset()`

```python
# 方式 1: issuperset(iterables)
set_a.issuperset(set_b)

# 方式 2: `>=`，只能用 set
set_a >= set_b

# `>`, proper superset
set_a > set_b
```

#### 4.6.7 Disjoint Set: `isdisjoint()`

- Two sets are disjoint when they have no elements in common. (i.e. Two disjoint sets are sets whose intersection is an empty set.)

```python
set_a.isdisjoint(set_b)
```

## 5 Type Hints

Python 使用动态类型（dynamic typing）。不过 Python 提供了 type hints 来进行 static typing。

目前最受欢迎的第三方检查工具是 Mypy。安装：`pip install mypy`。使用：`mypy app.py`。

- `str`, `int`, `float`, `bool`, `None`

  ```python
  def say_hi(name: str) -> str:
    return f'Hi {name}'

  greeting = say_hi('John')
  print(greeting)

  def log(message: str) -> None:
    print(message)
  ```

- Union Types

  - `Union` from `typing` module
  - 从 Python 3.10 开始，可以使用 `X | Y` 来创建 union type

  :::code-tabs
  @tab Union fromm typing module

  ```python
  from typing import Union

  def add(x: Union[int, float], y: Union[int, float]) -> Union[int, float]:
    return x + y
  ```

  @tab X | Y

  ```python
  def add(x: int | float, y: int | float) -> int | float:
    return x + y
  ```

  :::

- Type aliases

  ```python
  from typing import Union

  number = Union[int, float]

  def add(x: number, y: number) -> number:
    return x + y
  ```

- `list`, `dict`, `set`

  - 可以使用 `typing` module 中的 Type Aliases 来指定类型

    | Type Alias | Built-in Type                                                          |
    | :--------- | :--------------------------------------------------------------------- |
    | List       | list                                                                   |
    | Tuple      | tuple                                                                  |
    | Dict       | dict                                                                   |
    | Set        | set                                                                    |
    | Frozenset  | frozenset                                                              |
    | Sequence   | For list, tuple, and any other sequence data type                      |
    | Mapping    | For dictionary (dict), set, frozenset, and any other mapping data type |
    | ByteString | bytes, bytearray, and memoryview types                                 |

    ```python
    from typing import List

    ratings: List[int] = [1, 2, 3]
    ```

## 6 Exception Handling

- Syntax Error
- Exceptions:
  - Reading a file that doesn’t exist.
  - Connecting to a remote server that is offline.
  - Bad

### 6.1 try...except

```python
try:
    # code that may cause error
except:
    # handle errors
```

可以处理特定类型的 exception：

```python
try:
    # code that may cause an exception
except ValueError as error:
    # code to handle the exception
```

可以处理多种 exception：

:::code-tabs
@tab 分别处理

```python{9-10}
try:
    # code that may cause an exception
except Exception1 as e1:
    # handle exception
except Exception2 as e2:
    # handle exception
except Exception3 as e3:
    # handle exception
except Exception as error:
    # catch other general errors
```

@tab group exceptions

```python
try:
    # code that may cause an exception
except (Exception1, Exception2):
    # handle exception
```

:::

### 6.2 try...except...finally

无论是否是否有 exception，finally 中的语句都会在最后执行。

```python
try:
    # code that may cause exceptions
except:
    # code that handle exceptions
finally:
    # code that clean up
```

except 也是可选的。如果你没有办法处理 exceptions，还想 clean up resources。比如你总是想关掉打开的文件。

```python
try:
    # the code that may cause an exception
finally:
    # the code that always executes
```

### 6.3 try...except...else

try 中如果有 exception，则跳到 exception 中；如果没有 exception，则执行 else。

如果还同时写了 finally，那么 else 在 finally 之前执行（finally 正如其名，最后执行）。

```python
try:
    # code that may cause errors
except:
    # code that handle exceptions
else:
    # code that executes when no exception occurs
```
