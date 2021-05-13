---
title: WEEK2.2.3 特征缩放法
mathjax: true
date: 2021-05-12 11:27:48
tags: ML
categories: ML
filename: 特征缩放法
type: ML
---
# 特征缩放法

特征缩放法（Feature Scaling）是梯度下降中的一个实用技巧,可以使梯度下降算法更快地收敛。

![image-20210512121453251](3-Gradient%20Descent%20in%20Practice%20I%20-%20Feature%20Scaling/image-20210512121453251.png)

<!--more -->

通常如果多个特征范围之间与-1到1范围相差不大也是可以接受的，不是必须将特征缩放到-1到1之间。但是也别太大或太小。不用过分担心特征是否在完全相同的范围或区间内，只要他们足够接近的话，梯度下降算法就能正常工作。

![image-20210512122239063](3-Gradient%20Descent%20in%20Practice%20I%20-%20Feature%20Scaling/image-20210512122239063.png)

均值归一化（mean normalization）

![image-20210512124000803](3-Gradient%20Descent%20in%20Practice%20I%20-%20Feature%20Scaling/image-20210512124000803.png)

如果有一个特征xi，就用$$x_i - \mu_i$$替换，其中$$\mu_i$$为训练集中特征$$x_i$$的均值，通过这样能够让你的特征值具有为0的平均值。特征缩放不需要太精确，只是为了让梯度下降算法更快收敛，即让梯度下降所需的循环次数更少。

## 阅读材料

https://www.coursera.org/learn/machine-learning/supplement/CTA0D/gradient-descent-in-practice-i-feature-scaling