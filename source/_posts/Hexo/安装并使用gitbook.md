---
title: 安装并使用gitbook
mathjax: false
toc: true
tags:
  - gitbook
  - hexo
categories: hexo
abbrlink: 6be4e76e
date: 2021-04-17 10:16:57
---

## 1  安装gitbook

### 1.1 安装node.js

推荐nodejs版本为12.18.1，安装过程详见[使用hexo在github搭建博客并绑定域名](https://changzhi.space/hexo/%E4%BD%BF%E7%94%A8hexo%E5%9C%A8github%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2%E5%B9%B6%E7%BB%91%E5%AE%9A%E5%9F%9F%E5%90%8D/#%E5%AE%89%E8%A3%85node.js)

### 1.2 安装gitbook

```
 npm install -g gitbook-cli
```

查看是否安装成功

```
 gitbook -V
```

这时会自动更新。如果出现`Gitbook-cli install error TypeError: cb.apply is not a function inside graceful-fs`,这是由于较老的graceful-fs版本在较高的node.js上执行出错，下载最新的graceful-fs即可。解决方法如下：

<!-- more -->

在nodejs安装目录下找到并进入`gitbook-cli\node_modules\npm`目录，执行（我的是`D:\Tools\nodejs\node_modules\gitbook-cli\node_modules\npm`）

```
npm install graceful-fs@latest --save
```

## 2  使用gitbook

### 2.1 创建github项目

这里我创建了名为NG_ML的仓库。

### 2.2 clone到本地或关联本地仓库

这里本地创建了`F:\Notes\NG_ML`的目录，在该目录下执行`gitbook init`，会生成README.md文件和SUMMARY.md文件。

- README.md文件是介绍文件。
- SUMMARY.md文件是目录文件。官方格式如下：中括号为目录名，后面跟的小括号是对应文件的相对路径。这里先手动创建，后面会介绍插件自动生成。不要使用notepad++编写，这里被坑了，notepad++设置成utf8生成文件后中文也会乱码，不知道什么问题。推荐使用typora书写。

```
# Summary

* [Introduction](README.md)
* [前言](readme.md)
* [第一周](part1/README.md)
    * [第一节](part1/1.md)
    * [第二节](part1/2.md)
    * [第三节](part1/3.md)
    * [第四节](part1/4.md)
* [第二周](part2/README.md)
* [第三周](part3/README.md)
* [第四周](part4/README.md)
```

![image-20210430111257358](%E5%AE%89%E8%A3%85%E5%B9%B6%E4%BD%BF%E7%94%A8gitbook/image-20210430111257358.png)

### 2.3 初始化生成对应文件，并书写

再次执行`gitbook init`后会根据所写的目录生成文件夹和对应文件

- 书写内容

![image-20210430113254530](%E5%AE%89%E8%A3%85%E5%B9%B6%E4%BD%BF%E7%94%A8gitbook/image-20210430113254530.png)

- 
- 
  - `gitbook build`生成目录_book
  - `gitbook serve`生成目录_book，并预览http://localhost:4000

## 3 配置

安装目录生成插件`gitbook-plugin-summary`

- 在笔记文件夹下新建文件为book.json，填写如下内容：

```json
{
  "plugins": ["summary"]
}
```

- 执行`g`

