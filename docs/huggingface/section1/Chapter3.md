---
lang: zh-CN
title: 微调预训练模型
description:
---

上一篇文章中介绍了如何使用 tokenizer 和预训练模型来进行推理。接下来我们将介绍如何在自己的数据集上进行微调（Fine-tuning）。在本篇文章中，你将了解到：

- 如何从 Hub 中准备大型数据集
- 如何使用 high-level API 微调模型
- 如何使用自定义训练过程
- 如何利用 🤗 Accelerate 库在任何分布式设备上轻松运行自定义训练过程

## 1. 处理数据

Hub 中不仅有 models，还有很多 [datasets](https://huggingface.co/datasets).

我们将使用 [MRPC（Microsoft Research Paraphrase Corpus）数据集](https://aclanthology.org/I05-5002.pdf)，它是 [GLUE benchmark](https://gluebenchmark.com/) 的十个数据集之一，该 benchmark 用来衡量 ML 模型在 10 个不同文本分类任务中的性能。MRPC 数据集有 5801 个句子对，每个句子对有一个标签来指明两个句子是否同义。

### 1.1 从 Hub 中加载数据集
🤗 Datasets 库提供了简单易用的命令来下载并缓存 Hub 中的数据集
```python
from datasets import load_dataset

raw_datasets = load_dataset("glue", "mrpc")
raw_datasets
```
```python:no-line-numbers
DatasetDict({
    train: Dataset({
        features: ['sentence1', 'sentence2', 'label', 'idx'],
        num_rows: 3668
    })
    validation: Dataset({
        features: ['sentence1', 'sentence2', 'label', 'idx'],
        num_rows: 408
    })
    test: Dataset({
        features: ['sentence1', 'sentence2', 'label', 'idx'],
        num_rows: 1725
    })
})
```

我们得到了一个 `DatasetDict` 对象，它有 training set, validation set, 和 test set。每一个集合中包含这样几列：sentence1、sentence2、label、idx，以及行数（即数据数量）。

:::tip
缓存路径为 ~/.cache/huggingface/datasets 你可以通过设置 `HF_HOME` 环境变量来自定义缓存路径。
:::

你可以先看看数据：
```python
raw_train_dataset = raw_datasets["train"]
raw_train_dataset[0]
```
```python:no-line-numbers
{'sentence1': 'Amrozi accused his brother , whom he called " the witness " , of deliberately distorting his evidence .',
 'sentence2': 'Referring to him as only " the witness " , Amrozi accused his brother of deliberately distorting his evidence .',
 'label': 1,
 'idx': 0}
```

可以通过查看 raw_train_dataset 的 `features` 来查看 label 的含义。0 是 not_equivalent，1 是 equivalent。
```python
raw_train_dataset.features
```
```
{'sentence1': Value(dtype='string', id=None),
 'sentence2': Value(dtype='string', id=None),
 'label': ClassLabel(names=['not_equivalent', 'equivalent'], id=None),
 'idx': Value(dtype='int32', id=None)}
```

### 1.2 数据集预处理

我们需要将文本转化成数字表示，这样模型才能进行处理。

```python
from transformers import AutoTokenizer

checkpoint = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
tokenized_sentences_1 = tokenizer(raw_datasets["train"]["sentence1"])
tokenized_sentences_2 = tokenizer(raw_datasets["train"]["sentence2"])
```

上面的代码确实将文本转化成了数字表示，但是我们需要传入句子对
```python
inputs = tokenizer("This is the first sentence.", "This is the second one.")
print(inputs)

print(tokenizer.convert_ids_to_tokens(inputs["input_ids"]))
```

```python:no-line-numebrs
{'input_ids': [101, 2023, 2003, 1996, 2034, 6251, 1012, 102, 2023, 2003, 1996, 2117, 2028, 1012, 102], 
  'token_type_ids': [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 
  'attention_mask': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
['[CLS]', 'this', 'is', 'the', 'first', 'sentence', '.', '[SEP]', 'this', 'is', 'the', 'second', 'one', '.', '[SEP]']
```

我们在上一篇文章中介绍了 input_ids 和 attention_mask。在这个例子中，token_type_ids 表示输入的哪部分是第一个句子，哪一个是第二个句子。


我们可以看到模型需要的输入形式是 [CLS] sentence1 [SEP] sentence2 [SEP]（使用不同的 checkpoints 时该结构会不一样），所以 token_type_ids（使用其他的 checkpoints 时，可能不会有 token_type_ids） 的值是
```python
['[CLS]', 'this', 'is', 'the', 'first', 'sentence', '.', '[SEP]', 'this', 'is', 'the', 'second', 'one', '.', '[SEP]']
[      0,      0,    0,     0,       0,          0,   0,       0,      1,    1,     1,        1,     1,   1,       1]
```

我们可以为 tokenizer 提供句子对列表
```python
tokenized_dataset = tokenizer(
    raw_datasets["train"]["sentence1"],
    raw_datasets["train"]["sentence2"],
    padding=True,
    truncation=True,
)
```

这是有用的，但是也有一些不足。tokenization 过程中需要在 RAM 中保存整个数据集，如果你的 RAM 空间不足将会有问题。

我们使用 `Dataset.map()` 方法来构建数据集。首先创建函数来 tokenize 输入：

```python
def tokenize_function(example):
    return tokenizer(example["sentence1"], example["sentence2"], truncation=True)
```

我们将 padding 参数去掉了，因为将所有的数据 padding 到最大长度效率不高，更好的做法是当我们构建一个 batch 时 pad 该 batch 中的数据，这样我们只需要将长度填充为该 batch 中的最大长度。

```python
# 设置 batched 为 True，使得同时对数据集中的多个元素同时做处理，加速了预处理
tokenized_datasets = raw_datasets.map(tokenized_function, batched=True)
tokenized_datasets
```
```python:no-line-numbers
DatasetDict({
    train: Dataset({
        features: ['sentence1', 'sentence2', 'label', 'idx', 'input_ids', 'token_type_ids', 'attention_mask'],
        num_rows: 3668
    })
    validation: Dataset({
        features: ['sentence1', 'sentence2', 'label', 'idx', 'input_ids', 'token_type_ids', 'attention_mask'],
        num_rows: 408
    })
    test: Dataset({
        features: ['sentence1', 'sentence2', 'label', 'idx', 'input_ids', 'token_type_ids', 'attention_mask'],
        num_rows: 1725
    })
})
```

🤗 Datasets 库用 map() 函数的处理方式是想数据集中添加新的字段，新的字段即预处理函数返回的字典中的每个键。

可以通过传递 `num_proc` 参数给 map() 以启动多进程。🤗 Tokenizers 库已经使用了多线程，于是这里我们没有启用多进程。

最后一项任务就是在每个 batch 进行 padding，即 dynamic padding.

### 1.3 动态填充（Dynamic Padding）

在批处理中这将数据整理到一个 batch 的函数称为 collate function. 它是构建 DataLoader 时的一个参数，默认是一个函数，它把你的数据集转化为 Pytorch tensors，并将它们拼接起来。

🤗 Transformers 库通过 `DataCollatorWithPadding` 提供了 collate function。它接收一个 tokenizer (以获取 padding token、确定是在输入的左侧还是右侧进行 padding)，然后它会将一切完成。

```python
from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer=tokenizer)
```

:::details 我们可以验证一下 data_collator 是否能在 batch 上进行正确的 padding
```python
samples = tokenized_datasets["train"][:8]
samples = {k: v for k, v in samples.items() if k not in ["idx", "sentence1", "sentence2"]}
[len(x) for x in samples["input_ids"]]
# [50, 59, 47, 67, 59, 50, 62, 32]
```
我们取了 train set 中前 8 个作为一个 batch，去掉了 idx、sentence1、sentence2 字段。

input_ids 的最大长度为 67，则这个 batch 经过 padding 之后将会被填充到 67

```python
batch = data_collator(samples)
{k: v.shape for k, v in batch.items()}
```
```python:no-line-numbers
{'attention_mask': torch.Size([8, 67]),
 'input_ids': torch.Size([8, 67]),
 'token_type_ids': torch.Size([8, 67]),
 'labels': torch.Size([8])}
```
:::

现在，我们已经将原数数据转化成模型可处理的 batches，下面我们要进行微调了。

## 2. 使用 Trainer API 或 Keras 进行微调

🤗 Transformers 提供了 `Trainer` 类来微调各种预训练模型。最难的步骤大概是为 `Trainer.train()` 配置运行环境。

我们快速回顾一下上一部分的预处理：
```python
from datasets import load_dataset
from transformers import AutoTokenizer, DataCollatorWithPadding

raw_dataset = load_dataset("glue", "mrpc")
checkpoint = "bert-base-uncased"
tokenizer = AutoTokenizer(checkpoint)

def tokenize_function(example):
    return tokenizer(example["sentence1"], example["sentence2"], truncation=True)

tokenized_datasets = raw_dataset.map(tokenize_function, batched=True)
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)
```

### 2.1 训练（Training）

第一步，在我们定义 `Trainer` 之前我们要先定义 `TrainingArguments` 类，它包含 `Trainer` 训练和评估时所用的全部超参。必须提供的唯一参数是训练模型的存储路径，也是 checkpoints 的路径。其余的参数都可以设置为默认值，对于基础的微调来说表现得也很不错。

```python
from transformers import TrainingArguments

training_args = TrainingArguments("test-trainer")
```

:::tip
如果你想在训练过程中自动上传你的模型到 Hub 上，可以在 TrainingArguments 中传递 push_to_hub=True。我们将在 [Chapter 4](Chapter.md) 中详细介绍。
:::details 🤗 官方示例 accelerate 版本错误解决方案
在 CoLab 上运行 🤗 官方示例时，如果遇到下面的错误，
```:no-line-numbers
ImportError: Using the `Trainer` with `PyTorch` requires `accelerate>=0.20.1`: Please run `pip install transformers[torch]` or `pip install accelerate -U`
```

可以尝试下面方法，首先更新 accelerate 和 transformers
```
!pip install -U accelerate
!pip install -U transformers
```
然后 Restart runtime
:::


第二步，定义模型。
```python
from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
```

在实例化 model 时你会看到 warning，这是因为 BERT 没有对句子对进行过预训练，于是预训练模型的 head 被替换成了做 sequence classification 的 head。


现在我们可以定义 `Trainer` 了，将我们之前构造的对象（model, training_args, training & validation datasets, data_collator 以及 tokenizer）作为参数传递。

```python
from transformers import Trainer

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    data_collator=data_collator,
    tokenizer=tokenizer,
)
```

:::tip 注意
当在 Trainer 中传递 tokenizer 时，Trainer 使用的默认 data_collator 和我们之前使用 DataCollatorWithPadding 定义的是一样的。所以我们可以不传递 data_collator。
:::

调用 Trainer 的 `train()` 方法，我们就可以在自己的数据集上微调模型了。
```python
trainer.train()
```

运行上面代码后，我们将开始微调，每 500 steps 会输出一次 training loss。但是它不会告诉你这个模型表现得怎么样，因为：
- 我们没有配置 Trainer 让它在训练时进行评估。想要进行评估可以通过设置 `evaluation_strategy` 为 “steps”（每eval_steps 进行评估） 或 “epoch”（在每个 epoch 之后进行评估）。
- 我们没有为 Trainer 提供评估的方法。我们可以传递通过 `compute_metrics()` 函数提供计算模型性能的方法。没有提供该方法的话，评估时会直接输出 loss，并不直观。

### 2.2 评估（Evaluation）

我们来看一下如何构建 `compute_metrics()` 函数并在训练时使用它。

可以使用 `Trainer.predict()` 方法进行预测。
```python
predictions = trainer.predict(tokenized_datasets["validation"])
print(predictions.predictions.shape, predictions.label_ids.shape)
# (408, 2) (408,)

import numpy as np
# predictions.predictions 的输出是 logits，为了获得预测结果，可以将 logits 的最大的取出
preds = np.argmax(predictions.predictions, axis=-1)
```

`Trainer.predict()` 的输出是一个命名元祖，有三个字段：predictions, label_ids, 和 metrics。metrics 字段包含 loss、时间 metrics（预测用了多长时间，总计时长、平均时长）。如果我们自定义了 compute_metrics() 函数并传递给了 Trainer，那么该字段还会包括 compute_metrics() 函数返回的 metrics。

构建 compute_metrics() 需要用到 [🤗 Evaluate 库](https://github.com/huggingface/evaluate/)。我们可以使用 `evaluate.load()` 函数加载与 MRPC 数据集有关的 metrics，它返回的对象有 `compute()` 方法，可以用来进行 metric calculation。

```python
import evaluate

metric = evaluate.load("glue", "mrpc")
metric.compute(predictions=preds, references=predictions.label_ids)
```
```python:no-line-numbers
{'accuracy': 0.8578431372549019, 'f1': 0.8996539792387542}
```

```python
def compute_metrics(eval_preds):
    metric = evaluate.load("glue", "mrpc")
    logits, labels = eval_preds
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)
```


