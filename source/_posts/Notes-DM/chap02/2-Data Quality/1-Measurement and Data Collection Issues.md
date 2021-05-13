---
title: 2.2.1 测量和数据收集问题
filename: 测量和数据收集问题
mathjax: false
tags: DM
categories: DM
date: 2021-05-13 11:26:15
type: DM
---
预防数据质量问题通常不是数据挖掘锁关注的，数据挖掘的重点是

1. 检测和纠正数据质量问题
2. 使用可以容忍低数据质量的算法。

其中第一步，检测和校正，通常被称为数据清理。

下面将讨论数据质量的具体方面。

---

# 测量和数据收集问题

现实情况下期望数据是完美的并不现实。由于人为，测量设备限制等因素收集到的数据往往是有缺陷的。值甚至整个数据对象都可能丢失，也可能存在虚假或重复的对象。

本文将重点关注与数据度量和收集相关的数据质量方面。将从测量和数据收集误差的定义开始，然后考虑涉及测量误差的各种问题:噪声（noise）、人工制品（artifacts）、偏差（bias）、精度(precision)和准确度(accuracy)。最后，会讨论同时涉及测量和数据收集问题的数据质量问题:异常值、缺失和不一致的值以及重复的数据。
<!--more -->

## 测量和数据收集误差

测量误差是指在测量过程中遇到的任何问题。通常的问题是记录的值在某种程度上与真实值不同。对于连续属性，测量值与真值的数值差称为误差。

数据收集误差指的是遗漏数据对象或属性值或不适当地包含数据对象等错误。

测量误差和数据收集误差可以是系统的，也可以是随机的。

在特定的领域中，某些类型的数据错误是常见的，并且存在用于检测和/或纠正这些错误的成熟技术。例如，当手动输入数据时，键盘错误很常见，因此，许多数据输入程序都有技术来检测这些错误，并通过人工干预来纠正这些错误。

## 噪声和工件

**噪声是属于测量的随机误差**。它通常涉及值的失真或虚假的对象。图2.5显示了被随机噪声干扰之前和之后的时间序列。如果在时间序列中加入更多的噪声，它的形状就会丢失，如图2.6所示。

![image-20210513103743260](1-Measurement%20and%20Data%20Collection%20Issues/image-20210513103743260.png)

![image-20210513103807342](1-Measurement%20and%20Data%20Collection%20Issues/image-20210513103807342.png)

噪声通常用于具有空间或时间成分的数据。在这种情况下，信号或图像处理技术可以经常用于减少噪声，从而帮助发现可能“在噪声中丢失”的模式(信号)。尽管如此，消除噪声也是很困难的，数据挖掘中的许多工作都集中在设计鲁棒算法，即使存在噪声也能产生可接受的结果。

数据误差可能是某些确定的现象。如一组照片上同一位置的条纹。这种**确定性的数据失真通常被称为工件。**

## 精度，偏差和准确性

在统计学和实验科学中，测量过程和结果数据的质量是通过精度和偏差来衡量的。以下是标准定义。

> **Precision** : The closeness of repeated measurements (of the same quantity) to one another.
>
> **Bias**: A systematic variation of measurements from the quantity being measured.

**精度通常是通过一组值的标准偏差（$$S$$）来测量的，而偏差是通过取这组值的平均值与被测量量的已知值之间的差（$$X_i - EX$$）来测量的。**

例如：有一个标准重量1g的砝码，被测量物体5次的测量值为{1.015, 0.990, 1.013, 1.001, 0.986}。均值为$$EX = 1.001$$，因此偏差为1.001 - 1 = 0.001。以样本标准偏差衡量，其精度为 $$S = \sqrt(\frac{\sum_{i=0}^n(X_i-EX)}{n-1}) = 0.013$$。

精度一般用来指数据中的测量误差的程度。

### 

> **Accuracy: **The closeness of measurements to the true value of the quantity being measured.

准确性取决于精度和偏差，但没有关于这两个量的准确度的具体公式

准确性的一个重要方面是有效数字的使用。即仅使用与数据精度相符的数字来表示测量或计算的结果。例如，如果一个物体的长度是用一根最小标记为毫米的米尺测量的，那么我们应该只记录数据的长度到最近的毫米。这种测量的精度为$$\pm5mm$$

## 离群值

离群值（Outliers）是:

1. 在某种意义上具有不同于数据集中大多数其他数据对象的特征的数据对象
2. 或与该属性的典型值不同的属性值。

或者，离群值可以被称为异常（anomalous）对象或值。

**与噪声不同，离群值可以是我们感兴趣检测的合法数据对象或值。**例如，在欺诈和网络入侵检测中，目标是从大量正常对象或事件中发现异常对象或事件。

## 缺失值

缺失值（Missing Values）：对象可能丢失的部分属性值，

- 在某些情况下，没有收集该属性信息。例如有些人拒绝透露他们的年龄和体重。
- 另一些情况下，一些属性可能并不适用于该对象，例如男性和女性所填写的信息不同，在有条件填写的部分信息中，可能为了方便，会将所有字段都存储。

### 处理缺失值的几种策略

- 删除缺失值的数据对象或属性。如果一个数据集只有几个缺少值的对象，那么可以删除他们。但是如果缺失的对象过多，删除的话可能对影响分析的准确性。消除缺失值的属性时同样要谨慎，因为某些属性的值可能对分析至关重要。
- 估计缺失值。例如有许多相似数据点的数据集。这种情况下，通常使用离缺失值最近的点的属性值来估计缺失值。如果属性时连续的，则使用最近邻的评价属性值。
- 忽略分析过程中缺失的值。可以修改许多数据挖掘方法来忽略缺失的值。例如，假设正在对对象进行聚类，需要计算数据对象对之间的相似性。如果一对对象中的一个或两个对象缺少某些属性的值，那么可以通过仅使用没有缺少值的属性来计算相似性。

## 不一致的数据

例如输入的邮政编码和城市地址不一致。有些一致性是常识，比如身高不能是负数；有些一致性问题需要参考其他外源数据，比如从其他数据库中调取个人信息进行参考。因此纠正不一致需要额外的冗余信息。

## 重复的数据

为了检测和消除这种重复，必须解决两个主要问题。

- 如果有两个对象实际上代表一个对象，那么对应属性的一个或多个值通常是不同的，必须解析这些不一致的值。
- 需要注意避免意外地将相似但不重复的数据对象组合在一起，比如两个有着相同名字的不同的人。
- 在某些情况下，两个或多个对象相对于数据库测量的属性是相同的，但它们仍然代表不同的对象。这种情况重复是合法的，但需要注意修改设计的算法，否则可能会造成问题。

## 


