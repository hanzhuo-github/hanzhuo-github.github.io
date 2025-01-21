---
lang: zh-CN
title: Working with files
description:
article: false
date: 2025-01-17
order: 3
---

## 1 读

```python
with open('readme.txt') as f:
    lines = f.readlines()
```

- `open(file_path, mode, encoding='utf8')` 返回 file object（可迭代对象 iterables）
  - `'r'`: read
  - `'w'`: write
  - `'a'`: append
- file object 提供了三种方法进行读取
  - `read(size)` -> str
  - `readline()` -> str
  - `readlines()` -> list\<str\>
- `f.close()`
  - 在调用 close() 之前，文件一直处于打开的状态
  - 使用 `with` 语句可以自动 close 文件

:::code-tabs
@tab readlines

```python
with open('the-zen-of-python.txt') as f:
    [print(line.strip()) for line in f.readlines()]
```

@tab readline

```python
with open('the-zen-of-python.txt') as f:
    while True:
        line = f.readline()
        if not line:
            break
        print(line.strip())
```

@tab f 是一个可迭代对象

```python
with open('the-zen-of-python.txt') as f:
    for line in f:
        print(line.strip())
```

:::

> 注：上面代码中的 `strip()` 用于去掉源文件中的换行符。

## 2 写

```python
with open('readme.txt', 'w') as f:
    f.write('readme')
```

- `open(file_path, mode)`
  - `'w'`：writing。如果文件存在，则在打开时删除原来的内容；如果文件不存在，就创建一个。
  - `'a'`：Appending。
  - `'+'`：Updating (both reading & writing)
- file object 提供了两种方法进行读取
  - `write(str)`
  - `writelines()` 接收 iterables，如 a list of strings, a tuple of strings, a set of strings, etc.

:::code-tabs
@tab write()

```python
lines = ['Readme', 'How to write text files in Python']
with open('readme.txt', 'w') as f:
    for line in lines:
        f.write(line)
        f.write('\n')
```

@tab writelines()

```python
lines = ['Readme', 'How to write text files in Python']
with open('readme.txt', 'w') as f:
    f.writelines(lines)
```

@tab `'\n'.join()`

```python
lines = ['Readme', 'How to write text files in Python']
with open('readme.txt', 'w') as f:
    f.write('\n'.join(lines))
```

:::

## 3 创建

```python
f = open(file_path, mode)
```

- `'w'`: 如果不存在，则创建一个文件。如果存在，就 overwrite 原来的内容。
- `'x'`: 专门用于创建文件。如果文件存在，那么会报错（FileExistsError）。

## 4 检查文件是否存在：`os.path.exists()` 或 `pathlib.Path('path/to/file').is_file()`

可以使用 `os.path` 中的 `exists()` 函数

Python 3.4 之后也可以使用 `pathlib` module 中的 `Path` 类下的 `is_file()` 方法。

```python
from os.path import exists

file_exists = exists(file_path)   # True or False
```

```python
from pathlib import Path

path = Path(file_path)

path.is_file()    # True or False
```

## 5 CSV 文件

CSV (comma-separated values)，使用逗号作为分割。

CSV 文件有一行或多行，每行是一条数据记录（data record）。每个 data record 包括一个或多个用逗号分隔的值，每个 record 的值的数目是相等的。

### 5.1 读取：`csv.reader(f)`

- `csv.reader(f)` 返回 csv reader object，它是一个 iterable object of lines。每一行是 list of values

:::code-tabs
@tab with

```python
import csv

with open('path/to/csv_file', encoding="UTF8") as f:
    csv_reader = csv.reader(f)
    for line in csv_reader:
        print(line)
        print(line[0])
```

@tab close()

```python
import csv

f = open('path/to/csv_file', encoding='UTF8')
csv_reader = csv.reader(f)

for line in csv_reader:
    print(line)
    print(line[0])

f.close()
```

:::

csv 文件的第一行一般是列头。使用 `enumerate()` 将每一列的 index 提取出来（下面使用 `enumerate(csv_reader, 1)` 将第一行的 index 指定为 1）。也可以用 `next()` 跨过第一行

:::code-tabs
@tab enumerate()

```python
import csv

with open('country.csv', encoding="utf8") as f:
    csv_reader = csv.reader(f)
    for line_no, line in enumerate(csv_reader, 1):
        if line_no == 1:
            print('Header:')
            print(line)  # header
            print('Data:')
        else:
            print(line)  # data
```

@tab next()

```python
import csv

with open('country.csv', encoding="utf8") as f:
    csv_reader = csv.reader(f)

    # skip the first line
    next(csv_reader)

    for line in csv_reader:
        print(line)  # data
```

:::

### 5.2 读取：`csv.DictReader(f, fieldnames)`

使用 `csv.reader()` 时，可以使用 `line[0]`、`line[1]` 等来访问 values。但是这种方法有如下缺点

1. 访问 value 不够直观。比如 `line[1]` 对应的是商品的价格（表头是 'price'），那么使用 `line['price']` 访问 values 更为直观。
2. csv 列的顺序改变，或增加了新列，需要修改代码。

利用 csv module 中的 DictReader class，我们能够创建一个类似于 csv reader 的对象。不过它会将每一行的数据以 dictionary 的形式存储，对应的 key 就是第一行（表头）的 value。

如果不想用第一行的 value 作为 key，它也支持自定义 key。`csv.DictReader(f, fieldnames)`

```python
import csv

with open('country.csv', encoding="utf8") as f:
    csv_reader = csv.DictReader(f)

    # skip the header
    next(csv_reader)

    # show the data
    for line in csv_reader:
        print(f"The area of {line['name']} is {line['area']} km2")
```

### 5.3 写入：`csv.writer(f)`

:::code-tabs

@tab csv_writer.writerow()

```python
import csv

header = ['name', 'area', 'country_code2', 'country_code3']
data = ['Afghanistan', 652090, 'AF', 'AFG']

with open('path/to/csv_file', 'w', encoding='UTF8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerow(data)
```

@tab csv_writer.writerows()

```python
import csv

header = ['name', 'area', 'country_code2', 'country_code3']
data = [
    ['Albania', 28748, 'AL', 'ALB'],
    ['Algeria', 2381741, 'DZ', 'DZA'],
    ['American Samoa', 199, 'AS', 'ASM'],
    ['Andorra', 468, 'AD', 'AND'],
    ['Angola', 1246700, 'AO', 'AGO']
]

with open('countries.csv', 'w', encoding='UTF8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerows(data)
```

:::

### 5.4 写入：`csv.DictWriter()`

如果数据是 dict，可以用 `csv.DictWriter()` 来进行写入。

```python
import csv

# csv header
fieldnames = ['name', 'area', 'country_code2', 'country_code3']

# csv data
rows = [
    {'name': 'Albania',
    'area': 28748,
    'country_code2': 'AL',
    'country_code3': 'ALB'},
    {'name': 'Algeria',
    'area': 2381741,
    'country_code2': 'DZ',
    'country_code3': 'DZA'},
    {'name': 'American Samoa',
    'area': 199,
    'country_code2': 'AS',
    'country_code3': 'ASM'}
]

with open('countries.csv', 'w', encoding='UTF8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)
```

## 6 删除：`os.remove()`

如果要删除的文件不存在，会报错。所以要先判断文件是否存在，或使用错误处理。

:::code-tabs
@tab exists()

```python
import os

filename = 'readme.txt'
if os.path.exists(filename):
    os.remove(filename)
```

@tab try...except

```python
import os

try:
    os.remove(filename)
except FileNotFoundError as e:
    print(e)
```

:::

## 7 重命名：`os.rename(src, dst)`

src 不存在会报错 FileNotFound，dst 已存在会报错 FileExistsError。

```python
import os

try:
    os.rename('readme.txt', 'notes.txt')
except FileNotFoundError as e:
    print(e)
except FileExistsError as e:
    print(e)
```

## 8 Working with directories

上面介绍了对文件的操作，下面介绍对文件夹的操作。

- `os.getcwd()`：获取当前的工作目录。
- `os.chdir()`：更改当前的工作目录。

`os.path` 提供了很多路径操作。

### 8.1 路径的连接与分隔：`os.path.join()`、`os.path.split()`

```python
import os

fp = os.path.join('temp', 'python')
print(fp)  # temp\python (on Windows)

pc = os.path.split(fp)
print(pc)  # ('temp', 'python')

```

### 8.2 判断路径是否存在、且是一个文件夹：`os.path.exists()` 或 `os.path.isdir()`

```python
import os

dir = os.path.join("C:\\", "temp")
print(dir)

if os.path.exists(dir) or os.path.isdir(dir):
    print(f'The {dir} is a directory')
```

### 8.3 创建：`os.makedir()`

```python
import os

dir = os.path.join("C:\\", "temp", "python")
if not os.path.exists(dir):
    os.mkdir(dir)
```

### 8.4 重命名：`os.rename()`

```python
import os

oldpath = os.path.join("C:\\", "temp", "python")
newpath = os.path.join("C:\\", "temp", "python3")

if os.path.exists(oldpath) and not os.path.exists(newpath):
    os.rename(oldpath, newpath)
    print("'{0}' was renamed to '{1}'".format(oldpath, newpath))
```

### 8.5 删除：`os.rmdir()`

```python
import os

dir = os.path.join("C:\\","temp","python")
if os.path.exists(dir):
    os.rmdir(dir)
    print(dir + ' is removed.')
```

### 8.6 递归遍历：`os.walk()`

`os.walk()` returns the root directory, the sub-directories, and files.

```python
import os

path = "c:\\temp"
for root, dirs, files in os.walk(path):
    print("{0} has {1} files".format(root, len(files)))
```

将某目录下的所有 html 文件（包括子文件夹中的 html 文件）全部列出来。

```python
import os


path = 'D:\\web'

html_files = []

for dirpath, dirnames, filenames in os.walk(path):
    for filename in filenames:
        if filename.endswith('.html'):
            html_files.append(os.path.join(dirpath, filename))

for html_file in html_files:
    print(html_file)
```

::::details reusable list files function

:::code-tabs

@tab list files function

```python
import os

def list_files(path, extentions=None):
    """ List all files in a directory specified by path
    Args:
        path - the root directory path
        extensions - a iterator of file extensions to include, pass None to get all files.
    Returns:
        A list of files specified by extensions
    """
    filepaths = []
    for root, _, files in os.walk(path):
        for file in files:
            if extentions is None:
                filepaths.append(os.path.join(root, file))
            else:
                for ext in extentions:
                    if file.endswith(ext):
                        filepaths.append(os.path.join(root, file))

    return filepaths


if __name__ == '__main__':
    filepaths = list_files(r'D:\web', ('.html', '.css'))
    for filepath in filepaths:
        print(filepath)
```

@tab 用 generator 优化

```python{11,15,19}
import os

def list_files(path, extentions=None):
    """ List all files in a directory specified by path
    Args:
        path - the root directory path
        extensions - a iterator of file extensions to include, pass None to get all files.
    Returns:
        A list of files specified by extensions
    """

    for root, _, files in os.walk(path):
        for file in files:
            if extentions is None:
                yield os.path.join(root, file)
            else:
                for ext in extentions:
                    if file.endswith(ext):
                        yield os.path.join(root, file)

if __name__ == '__main__':
    filepaths = list_files(r'D:\web', ('.html', '.css'))
    for filepath in filepaths:
        print(filepath)
```

:::

::::

### Summary

- `os.getcwd()`: get the current working directory.
- `os.chdir()`: change the current working directory to a new one.
- `os.mkdir()`: make a new directory.
- `os.rename()`: rename a directory.
- `os.rmdir()`: remove a directory.
- `os.walk()`: list the contents of a directory.
