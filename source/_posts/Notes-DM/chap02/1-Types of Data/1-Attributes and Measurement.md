---
title: 2.1.1 属性和度量
filename: 属性和度量
mathjax: false
tags: DM
categories: DM
date: 2021-05-12 11:26:15
type: DM
---
# 2.1.1 属性和度量

## 数据集与数据对象

数据集通常可以看做数据对象的集合。数据对象的其他名称有记录（record）、点（point）、向量（vector）、模式（pattern）、事件（event）、案例（case）、样本（sample）、实例（instance）、观察（observation）或实体（entity）。

数据对象由其属性（attribute）来描述。属性的其他名称为variable, characteristic, field, feature, or dimension。

<!--more -->

如下表基于记录的数据集用于记录学生信息。

![image-20210511100638503](1-Attributes%20and%20Measurement/image-20210511100638503.png)

## 属性及其度量

### 什么是属性？

> An attribute is a property or characteristic of an object that can
> vary, either from one object to another or from one time to
> another.

属性的定义：**属性是一个对象的属性或特征，可以随对象的不同或时间的不同而变化。**

有很多类型的属性，比如眼睛颜色是一个符号属性，具有少量的可能值{棕色、黑色、蓝色、绿色、淡褐色等}，而温度是一个数值属性，可能具有无限的值。

在最基本的层面上，属性与数字或符号无关。

然而，为了讨论和更准确地分析物体的特性，我们给它们分配数字或符号。为了以一种明确定义的方式做到这一点，我们需要一个**度量尺度**（**measurement scale**）。

> A measurement scale is a rule (function) that associates a numerical or symbolic value with an attribute of an object.

测量过程是对度量尺度的应用，**即将一个值与特定对象的特定属性关联起来**。例如我们通过称重来获得我们的体重值，我们将人类性别分为男性和女性。对象属性的物理值被映射为符号或者数值。

因此引入属性的类型，这个概念对于确定特定数据分析技术是否与特定类型的属性一致非常重要。

### 属性的类型

通常将属性的类型称为度量尺度的类型。前面所讲，属性可以使用不同的度量尺度来描述，而且属性的属性（the properties of an attribute）不必与用于度量它的值的属性相同。也就是，用于表示属性的值可以具有非属性本身的属性，反之亦然。

例如：

- 描述员工的两个属性员工ID和年龄，其都可以用整数表示。员工年龄可用于求平均值，但是员工ID仅用于区分员工，对于员工ID的有效操作就是判断是否相等。但是当用整数表示ID时没有提示这种限制。对于年龄属性，<u>用于表示年龄的整数的属性基本上就是属性的属性</u>。尽管如此，这种对应关系还是不完整的，因为，例如，年龄有一个最大值，而整数没有。

- 用两种不同的方式来描述线段长度。如图2.1，每段线段长度都是第一段线段长度的倍数。如第二段是第一段长度的两倍，第三段是第一段长度的3倍。这一事实可以通过图形右侧的测量值得到，但不能通过左侧的测量值得到。更具体地说，左边的度量尺度仅捕获长度属性的排序，而右边的度量尺度同时捕获排序和可加性属性。因此**，可以以不捕获属性的所有属性的方式度量属性。**
- ![image-20210511104954593](1-Attributes%20and%20Measurement/image-20210511104954593.png)

了解属性的类型很重要，因为它告诉我们测量值的哪些属性与属性的根本属性是一致的，因此，它允许我们避免愚蠢的行为，例如计算平均员工ID。

### 属性的四种类型

明确属性类型的一种有用(且简单)方法是标识与属性的基础性质对应的数值性质。例如，像长度这样的属性具有许多数值的性质。根据长度比较和排序对象，以及讨论长度的差异和比例都是有意义的。加、减、乘、除、比较大小和是否相等等数值的性质(操作)通常用来描述属性。

有了这些性质，我们可以定义**数据挖掘中四种类型的属性:标称（nominal）、序数（ordinal）、区间（interval）和比率（ratio）。**

表2.2给出了这些类型的定义，以及关于每种类型有效的统计操作的信息。每个属性类型都拥有上面属性类型的所有属性和操作。

- **标称和序数属性统称分类的（categorical）或定性的（qualitative）**。顾名思义，定性的属性(如员工ID)缺乏数字的大部分性质。即使它们用数字表示，也就是整数，它们应该和符号一样对待。
- 区间和比率是**数值的（numeric）或定量的（quantitative）**。定量的属性由数值表示，并且具有大部分的数值性质，其可以是数值的或连续的

![image-20210511112624592](1-Attributes%20and%20Measurement/image-20210511112624592.png)

属性的类型可以用不改变其含义的转换来表示。如果长度属性的度量单位是米而不是英尺，则其含义不会改变。对特定类型的属性有意义的统计操作是：当使用保留属性含义的转换来转换属性时，将产生相同的结果。

为了说明，一组物体的平均长度用米而不是英尺来衡量是不同的，但这两种平均长度代表相同的长度。表2.3显示了Table的四种属性类型的保持意义的转换（meaning-preserving transformations）。

![image-20210511123921216](1-Attributes%20and%20Measurement/image-20210511123921216.png)

## 用值的个数来描述属性

区分属性的一种独立方法是通过它们可以接受的值的数量。

**离散的（Discrete）**：一个离散属性有一个有限或可数无限的值集。这些属性可以是分类的，如邮政编码或ID号，也可以是数值的，如计数。离散属性通常用整数变量表示。二进制属性是一种特殊的离散属性。

**连续的（Continuous）**连续属性是其值为实数的属性。例如温度、高度或体重等属性。连续属性通常表示为浮点变量。

> In theory, any of the measurement scale types—nominal, ordinal, interval, and ratio—could be combined with any of the types based on the number of attribute values—binary, discrete, and continuous.

通常，标称和序数属性是二进制或离散的，而区间和比率属性是连续的。然而，计数属性是离散的，也是比率属性。

## 不对称属性

对于不对称属性（Asymmetric Attributes），只有存在(一个非零属性值)被认为是重要的。例如在一个数据集中，其中每个对象都是一个学生，每个属性记录学生是否在大学里学习了特定的课程，1为选修，0为未选。大本分都会是0，而我们往往只关注值为1的情况。只有非零值是重要的二进制属性称为非对称二进制属性（symmetric
binary attributes）。这种类型的属性对于关联分析（association analysis）尤其重要。

## 关于度量水平的讨论

以上关于测量尺度的讨论虽然有用，但并不完整，而且有一些局限性。

- Distinctness, order, and meaningful intervals and ratios are only four properties of data—many others are possible.
  - 例如还有其他性质。有些数据本质上是周期性的，例如地面的位置和时间具有周期性。集值属性，其中每个属性值是一组元素，
- The numbers or symbols used to capture attribute values may not capture all the properties of the attributes or may suggest properties that are not there.
  - 如员工ID属性的平均值和超出范围的年龄
- Data is often transformed for the purpose of analysis
  - 这会使观测变量的分布变为更容易分析的分布，如变为高斯分布（正态分布）（Gaussian (normal) distribution）。通常这种变换仅仅保留了原始数据值的顺序而其他属性将会丢弃
  - 如果期望的结果是差异的统计测试或预测模型（statistical test of differences or a predictive model），那么这种转换是合理的。

- The final evaluation of any data analysis, including operations on attributes, is whether the results make sense from a domain point of view.

总之，在不损害分析的完整性的情况下，确定可以对特定属性或属性集合执行哪些操作是具有挑战性的。通常情况下，已经经过实践检验了的操作往往是可靠的。然而，有时标准做法是错误的或有局限性。

