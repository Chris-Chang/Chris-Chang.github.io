---
title: WEEK2.2.2 多变量的梯度下降
mathjax: true
date: 2021-05-12 11:27:48
tags: ML
categories: ML
filename: 多变量的梯度下降
type: ML
---
# 多变量的梯度下降

本节将讨论如何找到满足前面的假设函数的参数，即如何使用梯度下降法来解决多特征量的线性回归问题。

上节指出了假设函数$$h_\theta(x)$$可以由两个向量相乘表示，即$$h_\theta(x)=\theta^Tx$$ ,其中向量$$\theta$$是由参数$$\theta_0,\theta_1,...,\theta_n$$组成

的n+1维向量，$$x$$是由$$x_0=1$$ 和 n个特征量$$x_1,...,x_n$$组成的n+1维向量。

代价函数(Cost Function)是参数为$$\theta_0,\theta_1,...,\theta_n$$的函数 J，其给出了误差平方和。

使用梯度下降法后，$$\theta_j$$被更新成$$\theta_j$$减去学习率$$\alpha$$与对应导数（代价函数J对参数$$\theta_j$$的**偏导数**）的乘积。<!--more -->

![image-20210505185922275](2-Gradient%20Descent%20for%20Multiple%20Variables/image-20210505185922275.png)

此时梯度下降算法形式如下（一元特征量梯度下降是多特征量梯度下降算法的特例，即令$$x_i=1$$）：

![image-20210505190405468](2-Gradient%20Descent%20for%20Multiple%20Variables/image-20210505190405468.png)

## 阅读材料

https://www.coursera.org/learn/machine-learning/supplement/aEN5G/gradient-descent-for-multiple-variables

