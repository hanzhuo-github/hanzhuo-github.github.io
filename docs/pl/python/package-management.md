---
lang: zh-CN
title: Package Management
description:
article: false
date: 2025-01-17
order: 2
---

## 1 Modules & Packages

每个文件对应一个 Module（A Python module is a file that contains Python code）。文件名和 Module 名对应，例如，一个名为 hello.py 的文件，它的 Module 名为 hello。

在 Module 中，你可以定义多个函数。在其他文件使用该 Module 中的函数时，使用 `import` 语句。

### 1.1 import 语句

- `import <module_name>`

  引入 module 后，Python 会执行该 module 文件中的所有代码。同时，Python 将该 Module name 添加到当前模块中。

  ```python
  import module_name

  module_name.function_name()
  ```

- `import <module_name> as new_name`

  当我们不想使用 module_name 作为标识符时，就利用这个语句重命名模块。

  ```python
  import module_name as my_name

  my_name.function_name()
  ```

- `from <module_name> import <name>`

  当我们不想使用 module_name 作为前缀来访问 objects。

  ```python
  from module_name import fn1, fn2

  fn1()
  fn2()
  ```

- `from <module_name> import <name> as <new_name>`

- `from <module_name> import *`

  - Import all objects from a module。这样会引入 public identifiers，包括 variables, constants, functions, classes, etc..

  - Not a good practice: 如果被引入的模块有同名的 object, 那么后引入的 module 中的 object 会覆盖掉其他同名 object。

### 1.2 Module Search Path

运行 `import module` 时，Python 将从以下路径寻找 `module.py` 文件。

- 程序执行的当前文件夹
- 如果设置了 PYTHONPATH 环境变量，就从 PYTHONPATH 指定的文件夹列表中寻找
- 安装 Python 时配置的文件夹的安装列表（installation-dependent list of folders）

Python 将搜索路径存在 `sys.path` 变量中。

```python
import sys

for path in sys.path:
    print(path)
```

所以，请确保模块出现在以上路径。

当然，也有办法能够让任意位置的模块被找到。既然 `sys.path` 是一个列表，我们可以在该列表中增加一个 search-path。

```python
import sys

sys.path.append('/your/folder')
```

### 1.3 `__name__`

`__name__` 被称为 **dunder name** (**d**ouble **under**scores)。

- 当直接执行该脚本时，Python 将 `__name__` 变量设置为 `__main__`
- 当作为模块来引入该文件时，Python 将 `__name__` 变量设置为 Module Name

```python
if __name__ == '__main__':
    main()
```

### 1.4 Packages

一个文件夹对应一个 Package。

创建 Package 的步骤：

1. 创建一个文件夹，并将相关的 Module（文件）放在该文件夹下，这个文件夹就是一个 Package。
2. 要让 Python 将这个文件夹作为 package 处理，我们还需要在该文件夹下创建一个 `__init__.py` 文件。

> 注：implicit namespace packages feature —— 从 Python 3.3 开始，没有 `__init__.py` Python 也会将该文件夹当做 package。

#### 1.4.1 import packages

:::code-tabs

@tab import package.module

```python
import package.module

package.module.fn()
```

@tab from ... import

```python
from package.module import fn

fn()
```

@tab from ... import ... as

```python
from package.module import fn as my_fn

my_fn()
```

:::

#### 1.4.2 初始化 package

当引入 package 时，Python 会执行该 package 下的 `__init__.py`。所以，我们可以在 `__init__.py` 中来初始化 package-level data。

```python
# __init__.py
# sales package

# initiate package-level data
TAX_RATE = 0.07
```

```python
# main.py
from sales import TAX_RATE

print(TAX_RATE)
```

另外，可以利用 `__init__.py` 来自动引入 module

```python
# __init__.py
# sales package

# # import the order module automatically
from sales.order import create_sales_order
# import sales.order   # 可
# import sales         # 不可

# initiate package-level data
TAX_RATE = 0.07
```

```python
# main.py
import sales

sales.order.create_sales_order()
```

#### 1.4.3 `from package import *`

当执行 `from package import *` 时，Python 会在该文件夹下找 `__init__.py`，如果有该文件，就会加载所有在 `__all__` 这个 list 变量中的全部模块。

```python
# __init__.py in sales package

__all__ = [
  'order',
  'delivery',
]
```

```python
# main.py
from sales import *

order.create_sales_order()
delivery.create_delivery()
```

### 1.5 Private Functions

如何在 module 中创建 private function 呢？——使用 `__all__` 变量。

:::tabs

@tab 无 private

```python
# 模块 mail：mail.py

def send(email, message):
    print(f'Sending "{message}" to {email}')

def attach_file(filename):
    print(f'Attach {filename} to the message')
```

```python
# main.py
from mail import *

send('a@a.com', 'hello')
attach_file('file_name')
```

@tab function name 以下划线开头

```python{6}
# 模块 mail：mail.py

def send(email, message):
    print(f'Sending "{message}" to {email}')

def _attach_file(filename):
    print(f'Attach {filename} to the message')
```

```python{5}
# main.py
from mail import *

send('a@a.com', 'hello')
_attach_file('file_name')  # NameError: name '_attach_file' is not defined
```

@tab `__all__` 变量

```python{2}
# 模块 mail：mail.py
__all__ = ['send']

def send(email, message):
    print(f'Sending "{message}" to {email}')

def attach_file(filename):
    print(f'Attach {filename} to the message')
```

```python{5}
# main.py
from mail import *

send('a@a.com', 'hello')
attach_file('file_name')  # NameError: name 'attach_file' is not defined
```

:::

:::details 使用 package 来实现 private function

目录结构如下

```
├── mail
|  ├── email.py
|  └── __init__.py
└── main.py
```

```python
# email.py 同上

__all__ = ['send']

def send(email, message):
    print(f'Sending "{message}" to {email}')

def attach_file(filename):
    print(f'Attach {filename} to the message')
```

```python
# __init__.py

from .email import *

__all__ = email.__all__
print(email.__all__)    # ['send']
```

```python
# main.py

import mail

mail.send('a@a.com', 'hello')
mail.attach_file('file_name')    # AttributeError: module 'mail' has no attribute 'attach_file'
```

:::

## 2 Third-party Packages, PIP, and Virtual Environments

### 2.1 Python pip

如果在标准库中没有对应的包，可以到 [Python package index (PyPI)](https://pypi.org/) 找找看。

Python Package Index (PyPI) 是最大的 Python repository. 这当中有很多由 Python community 开发和维护的 Python packages。

pip is the package installer for Python。它能让你安装来自 PyPI（或其他 repositories）的 packages。

```shell
pip install <package_name>
pip install <package_name>==<version>

pip list
pip list --outdated

pip uninstall <package_name>

pip show <package_name>  # List dependencies of a package
```

:::details package 存储路径

system packages 一般都存放在 `sys.prefix` 的 subfolders 中。

```python
import sys

print(sys.prefix)
```

使用 pip 安装的 package 都存在路径 `site.getsitepackages()` 中

```python
import site
print(site.getsitepackages())
```

:::

### 2.2 Virtual environment

Python 使用 virtual environment 为每个 project 提供独立的环境，每个项目都有单独的文件夹存储第三方 packages。

从 Python3.3 开始，virtual environment module (`venv`) 就包含在 Python 标准库当中了。

```shell{1,2,4,13,20,21,29,42,52}
mkdir <project_dir>   # 1. 创建目录，存储 project 和 virtual environment:
cd project_dir

python -m venv project_env  # 2. 创建 virtual Environment，虚拟环境名称为 project_env
                            # 执行之后，会在 project 目录下创建一个叫做 project_env 的新目录
                            # 该目录下有运行 Python 所需的全部 tools 和 libraries
                            # 自动安装了 pip 和 setuptools

# where python
############# 结果 #################
# /opt/anaconda3/envs/tf/bin/python

source ./project_env/bin/activate   # 3. 激活虚拟环境

# where python
##################### 结果 ####################
# /Users/han/Desktop/demo_p/tf0121/bin/python
# /opt/anaconda3/envs/tf/bin/python

mkdir web_crawler                   # 4. 创建项目的实际目录
cd web_crawler
pip list   # 将会展示 project_env 目录下的 packages
####### 结果 #########
# Package    Version
# ---------- -------
# pip        23.0.1
# setuptools 65.5.0

pip install request                 # 5. pip 安装所需的库
pip list
############ 结果 ############
# Package            Version
# ------------------ ----------
# certifi            2024.12.14
# charset-normalizer 3.4.1
# idna               3.10
# pip                23.0.1
# requests           2.32.3
# setuptools         65.5.0
# urllib3            2.3.0

pip freeze > requirements.txt       # 6. 创建 requirements.txt

# cat requirements.txt
###### 结果 #########
# certifi==2024.12.14
# charset-normalizer==3.4.1
# idna==3.10
# requests==2.32.3
# urllib3==2.3.0

deactivate                          # 7. 退出虚拟环境
```

在其他环境上运行时，使用 `pip install` 安装 requirements.txt 中的包即可。
