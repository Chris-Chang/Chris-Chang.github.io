---
title: hexo和typora图片无法正常显示解决方案
mathjax: true
tags:
  - hexo
  - 解决方案
categories:
  - hexo
toc: true
abbrlink: 74693f4b
date: 2021-02-16 12:20:05
---

安装完hexo后遇到了一个坑，使用typora编辑后hexo图片无法正常显示。

尝试网上普遍给出的以下方案均无法解决问题。

<!-- more -->

- `hexo-asset-image`插件方案：
  - 无法解决正常显示图片问题
- 格式-》图像-》设置图片根目录为新文件对应的目录：
  - 粘贴图片时路径为绝对路径如：`/test.jpg`需手动修改为`test.jpg`，并且每次新建文件都需指定图片根目录。
- [官网方案](https://hexo.io/zh-cn/docs/asset-folders)

最终找到了解决方案：`hexo-image-link`插件方案。

下面给出该解决方案。

## 设置typora

依次点击:文件-》偏好设置-》图像，进行如下设置：

![image-20210216122611302](hexo%E5%92%8Ctypora%E5%9B%BE%E7%89%87%E6%97%A0%E6%B3%95%E6%AD%A3%E5%B8%B8%E6%98%BE%E7%A4%BA%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image-20210216122611302.png)

## 修改hexo配置文件并安装插件

- 修改_config.yml文件：`post_asset_folder: true`
- `npm install hexo-image-link --save`安装插件

## 新建一篇博客进行测试

- `hexo new "test"` 新建test.md文件,此时会再同级目录下新建test文件夹。
- 用typora编辑test.md文件，随便拷贝一张图片`head.jpg`粘贴到typora中。此时图片会自动拷贝到test文件夹。
- 检查粘贴后的文件路径是否为`test/head.jpg`，如果不是请回第一步设置好typora。
- `hexo s ` 进行测试，查看hexo是否正常显示图片。
- 大功告成



参考：https://www.cnblogs.com/cocowool/p/hexo-image-link.html

