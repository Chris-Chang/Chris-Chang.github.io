---
title: manjaro 主题安装教程
mathjax: false
toc: true
tags:
  - Linux
  - Manjaro
categories:
  - Linux
abbrlink: 9a1fe7e9
date: 2021-02-16 22:26:40
---

## 安装方法

首先manjaro安装主题，有两种方法：

- 方法一：通过“系统设置“-”全局主题“-”获取新的全局主题“，同样可以在”外观“中的Plasma样式、应用程序风格、颜色等当中”获取新的全局主题“。
- 方法二：通过manjaro kde store下载主题，然后使用osc-url在线将主题导入系统。

<!-- more -->

manjaro kde store中可以搜索到很多的主题，但是能否适用于自己的桌面这就需要注意了，如果你的桌面是KDE的，那么就不能使用GTK主题，GTK主题适配于Gnome桌面。默认KDE中一个是 Global Themes这个是全局主题，也就对应与于设置中的全局主题 ;另外 Plasma Themes这是Plasma 样式，对应设置中的plasma样式。

### 方法一

但是由于一些原因，方法1在我的电脑上是行不通的，加载速度极慢，下载速极慢，据说可以通过proxychain设置终端代理，据说可以行得通，但是我也没有尝试，所以也就不清楚了，所以方法1是行不通的。

### 方法二

- 第一步，下载 `ocs-url`, 通过` yay -S ocs-url`下载;

- 第二步，点击主题边上的 install按钮，之后会跳出是否打开` xdg-open`，点击打开`xdg-open`,然后就会调用 `ocs-url` 下载安装主题，ocs-url可以自动下载主题，安装主题，同样适用于插件、plasma等;

另外：如果不使用以上方法，你也可以点击主题旁边的”download“按钮，下载对应的压缩包，解压之后移动到对应的目录：

`/home/hzt/.local/share/plasma/desktoptheme `这是存放plasma主题
`/home/hzt/.local/share/plasma/look-and-feel/ `存放全局主题
`/home/hzt/.local/share/plasma/plasmoids/ `存放插件
以上目录如果没有就自行创建。



##  安装Sweet主题

相关链接如下：

https://store.kde.org/browse/cat/121/order/latest/

- Sweet KDE

- [Sweet Kvantum theme](https://store.kde.org/p/1294013/)

- [Sweet Plasma theme](https://store.kde.org/p/1294174/)

- [Sweet Aurorae theme](https://store.kde.org/p/1286856/)

- [Sweet colorscheme](https://store.kde.org/p/1294011/)

- [Sweet Konsole color scheme](https://store.kde.org/p/1297008/)

- [Candy icons](https://www.pling.com/p/1305251/)

- [Sweet sddm theme](https://store.kde.org/p/1334945/)

- [Sweet wallpaper](https://www.pling.com/p/1309907/)