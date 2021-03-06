---
title: 2.1.2 数据集的类型
filename: 数据集的类型
mathjax: false
tags: DM
categories: DM
date: 2021-05-12 11:26:15
type: DM
---
# 2.1.2 数据集的类型

数据集类型分组可以分为三组:记录数据、基于图形的数据和有序数据。这些分类不涵盖所有可能性，也有其他类型的分组。

## 数据集的一般性

适用于许多数据集并对所使用的数据挖掘技术有重要影响的三个特征:维度（dimensionality）、分布（distribution）和分辨率（resolution）。

### 维度

**数据集的维度是数据集中对象具有的属性数目。**分析具有少量维度的数据往往与分析中等或高维数据有质的区别。分析高维数据有时会陷入所谓的**维灾难（curse of dimensionality）**。因此预处理的一个重要动机是**维归约（dimensionality reduction）**。

<!--more -->

### 分布

**数据集的分布是指组成数据对象的属性的各种值或值集出现的频率。**例如常见的高斯（正态）分布。但很多数据集的分布不能正好被描述为这些标准的分布。因此许多数据挖掘算法并不为所分析的数据假定具体的统计分布。然而，分布的某些方面会产生很大的影响。例如，假设一个类别属性用作类变量，其中一个类别出现的几率为95%，而其他类别一起出现的几率仅为5%。如前所述，分布中的这种偏态（skewness）会使分类变得困难。

偏态数据的一种特殊情况是稀疏性。对于稀疏二进制、计数或连续数据，对象的大多数属性值为0。在许多情况下，不到1%的值是非零的。实际上稀疏性具有优势，因为通常只需要记录和操作非零值。这节省了存储空间和时间。一些挖掘算法只适用于稀疏数据，例如关联规则挖掘算法。	

### 分辨率

**不同的数据性质在不同的分辨率下往往是不同的**。例如地球表面在几米的分辨率下看起来非常不平坦，但在几十公里的分辨率下就相对平坦。数据的模式也依赖于分辨率的级别。如果分辨率太高，模式可能看不出或被噪声掩盖;如果分辨率太低，那么模式可能就不出现。例如，以小时为单位的气压变化反映了风暴和其他天气系统的运动。而以月为单位，这种现象就检测不到。

## 记录型数据

![image-20210512180651261](2-Types%20of%20Data%20Sets/image-20210512180651261.png)

- 记录型数据（Record data）。记录之间或数据字段之间没有明显的联系，并且每个记录（对象）具有相同的属性集。记录型数据通常存储在平展文件或关系数据库中，关系数据库虽然不仅仅是记录的集合，但是数据挖掘通常不使用关系数据库中任何可用的附加信息。相反，数据库只是一个方便查找记录的地方。

- 事务数据（Transaction data）或购物篮（market basket data）数据，其中每个产品都是一个项（item）,一组产品构成了一个购物篮。事务数据是一组项的集合，但可以将其视为一组记录，其字段是非对称属性的。大多数情况这些属性是二进制的，表示是否购买。但属性也可以是离散的或连续的，如表示购买数量和金额。

- 数据矩阵（The Data Matrix）。如果一个数据集合中的**所有数据对象都具有相同的固定的数值属性集**，那么可以将这些数据对象视为多维空间中的点(向量)，其中每个维代表描述该对象的不同属性。这样的数据集可以表示为m*n的矩阵，**m表示数据对象数量，n表示属性个数（或者相反）**。这个矩阵称为数据矩阵（data matrix）或模式矩阵(pattern matrix)。数据矩阵可以使用矩阵操作来进行变换和操作数据，因此数据矩阵是大多数统计数据的标准数据格式。
- 稀疏数据矩阵（The Sparse Data Matrix）是数据矩阵的特殊情况，其中属性的类型相同并且是非对称的，即只有非零值才是重要的，只存储稀疏数据矩阵的非零项。数据结构中有详细讲解过，不再赘述。
  - 其例子是文档数据，如图2.2（d）。如果忽略文档中词（术语）的次序，则文档可以用词向量表示，其中的每个词是向量的一个分量（属性），而每个分量的值是对应词在文档中出现的次数。文档集合的这种表示通常称为文档-词矩阵（Document-term matrix）。

## 基于图形的数据

图可以很方便表示数据，考虑两种情况：1.用图形捕获数据对象之间的关系。2.数据对象本身是用图形进行表示的。

### 带有对象之间联系的数据

这种情况，数据通常使用图进行表示的，每一个数据对象被映射为图中的一个节点，对象之间的联系用链进行连接（可以有权重或方向）。例如：

- 网页数据，每个网页包含了文字和链接，当搜索引擎进行查询和收集时，不仅仅是收集和处理当前网页的数据内容。引用该链接网页和其链接到的网页都具有很重要的相关内容。如图2.3（a）.
- 这种数据的另一个重要例子是社交网络，其中数据对象是人，他们之间的关系是他们通过社交媒体的互动。

### 具有图形对象的数据

**如果对象有结构，即对象包含具有联系的子对象，那么这些对象通常用图形表示。**例如，化合物的结构可以用图表表示，其中节点是原子，节点之间的连接是化学键。例如图2.3（b）表示了苯的结构。用图表示可以确定一组化合物中哪些子结构经常出现，并确定这些子结构的存在是否与某些化学性质(如熔点或生成热)的存在有关。

子结构挖掘是数据挖掘中分析这类数据的一个分支。

![image-20210512190316120](2-Types%20of%20Data%20Sets/image-20210512190316120.png)

## 有序数据

有序数据（Ordered Data）大致可以分为以下几种：

### 时序事务数据（Sequential Transaction Data）

**时序事务数据可以看作是事务数据的扩展，其中每个事务都有一个与之关联的时间**。例如一个零售事务数据集，该数据集还存储事务发生的时间。这个时间信息使我们能够找到诸如“万圣节前糖果销售高峰”这样的模式。时间还可以与每个属性相关联。例如，每条记录都可以是一个客户的购买历史，其中列出了在不同时间购买的商品。利用这些信息，我们可以发现一些模式，比如“购买DVD播放器的人倾向于在购买之后的一段时间内购买DVD。如图2.4(a)所示。

### 时间序列数据

时间序列数据（Time Series Data）是一种特殊类型的有序数据，**其中每条记录都是一个时间序列**，也就是说，一段时间内进行的一系列测量。例如，金融数据集可能包含各种股票每日价格的时间序列对象。再如图2.4(c)显示了明尼阿波利斯从1982到1994年的月平均气温的时间序列。

当处理时间数据时，例如时间序列，考虑**时间自相关（temporal autocorrelation）**是很重要的；例如，如果两个测量值在时间上很接近，那么这些测量值通常是非常相似的。

![image-20210512220215949](2-Types%20of%20Data%20Sets/image-20210512220215949.png)

### 序列数据

**序列数据（Sequence Data）**由一个数据集组成，该数据集是单个实体的序列，如单词或字母的序列。它非常类似于顺序数据，除了没有时间戳;但这些位置是按顺序排列的。

例如，动植物的遗传信息可以用被称为基因的核苷酸序列的形式来表示。许多与遗传序列数据相关的问题涉及到从核苷酸序列的相似性来预测基因结构和功能的相似性。上图2.4(b)显示了人类遗传密码的一部分，使用构成所有DNA的四种核苷酸表达:A T G和C。

### 空间和时空数据

一些对象除了其他类型的属性外，还具有空间属性（spatial attributes），如位置或区域。空间数据的一个例子是天气数据（降水，温度，压力）收集的各种地理位置。通常这种测量是随着时间的推移而收集的，因此，**数据由不同位置的时间序列组成，在这种情况下我们将这些数据称为时空数据（spatio-temporal data）。**虽然可以针对每个具体的时间或地点单独进行分析，但更完整的时空数据分析需要同时考虑到这两方面。

空间数据的一个重要方面是空间自相关（spatial autocorrelation）;也就是说物理上接近的物体在其他方面也趋于相似。因此，地球上两个距离很近的点通常具有相似的温度和降雨量。注意，空间自相关类似于[时间自相关](#时间序列数据)。

科学和工程数据集经常属于空间和时空数据，这些数据是在二维或三维网格或网格上的规则或不规则分布点上进行的测量或模型输出的结果。例如，地球科学数据集记录了在不同**分辨率**（resolutions）的经纬度球面网格上的点（网格单元）测得的温度或压力，如上图2.4(d)所示。

## 处理非记录数据

大部分数据挖掘算法都是为记录数据或其变体（如事务数据和数据矩阵）设计的。**面向记录技术（Record-oriented techniques）通过从数据对象中提取特征并使用这些特征创建与每个对象对应的记录**，针对记录数据的技术也可以应用于非记录数据。例如前面描述的化学结构数据。给定一组公共子结构，每个化合物可以表示为一个带有二元属性的记录，该属性指示一个化合物是否包含特定的子结构。这样的表示实际上是一个事务数据集，其中事务是化合物，项是子结构。

**有时很容易用这种方法处理非记录数据，但这种类型的表示不会捕获数据中的所有信息，可能会忽略一些重要信息。**例如上面提到由空间网格上每个点的时间序列组成的时空数据。这些数据通常存储在数据矩阵中，其中每一行表示一个位置，每一列表示一个特定的时间点。这样的表示并没有明确地捕获属性之间的时间联系和对象之间的空间联系。并不是说这样处理数据不对，但是这样忽略了数据中具有的时间自相关和空间自相关的性质。在使用数据挖掘技术时，假定属性之间在统计上是相互独立的并不是一个好主意。

