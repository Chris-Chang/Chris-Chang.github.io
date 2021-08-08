---
title: 使用hexo在github搭建博客并绑定域名
mathjax: false
tags: hexo
categories: hexo
abbrlink: c223b195
date: 2021-04-16 11:51:11
---

本文环境基于以下版本：
- nvm: 1.1.7
- nodejs: 12.18.1
- hexo: 5.4.0
- hexo-cli: 4.2.0
- git: [Git-2.30.1-64-bit](https://cdn.npm.taobao.org/dist/git-for-windows/v2.30.1.windows.1/Git-2.30.1-64-bit.exe)
- windows10 21H1

## 1 安装git

- 由于git官网下载的太慢了,可以到镜像网站下载最新版本

  https://npm.taobao.org/mirrors/git-for-windows/

- 安装后配置
```
  $ git config --global user.name "Your Name"
  $ git config --global user.email "email@example.com"
```

<!-- more -->

- 配置远程仓库github
  - 本地生成SSH KEY。无需设置密码，一路回车。成功后会在用户主目录找到.ssh目录，其中包含`id_rsa`和`id_rsa.pub`。
    - `ssh-keygen -t rsa -C "youremail@example.com"`
  - 登录github->打开“Account settings” -> “SSH Keys” -> 点“Add SSH Key” ->填写任意title,在Key文本框里粘贴`id_rsa.pub`文件的内容 -> 点击"Add Key"。
- git系列教程参看https://www.liaoxuefeng.com/wiki/896043488029600

## 2 新建一个github仓库

- 登录github -> 右上角“Create a new repo” 。仓库名为 `github用户名.github.io`

## 3  安装node.js

- 下载安装nvm https://github.com/coreybutler/nvm-windows/releases
- 选择 nvm-setup.zip
- 下载并安装nvm,期间会让输入nvm路径（我的是`D:\Tools\nvm`）和nodejs路径（我的是`D:\Tools\nodejs`）,默认路径是`C:\Users\chang\AppData\Roaming\nvm`。其中nojdejs真实安装路径在nvm目录下。
- 安装完毕后打开cmd,输入`nvm version`,看是否出现版本号。否则检查环境变量中是否有如下（系统 -> 高级系统设置 -> 环境变量）。若没有则添加上（**重装系统后如果原来nvm文件夹还存在，可以不必再重装nvm,直添加环境变量即可，这样原来的配置和hexo等安装包仍然可用，可以直接使用无需重新配置**）。

![image-20210430101525773](%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D%E5%92%8Chexo%E5%9C%A8github%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/image-20210430101525773.png)

- 配置淘宝镜像。打开nvm安装目录下的settings.txt文件，修改后如下：

```
root: D:\Tools\nvm
path: D:\Tools\nodejs
arch: 64 
proxy: none
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

- 安装nodejs。`nvm install 12.18.1`（推荐12.18.1，较高版本后期安装gitbook模块会出现错误）
- 查看已安装的所有版本的nodejs。`nvm list`
- 使用nodejs 12.18.1版本 `nvm use 12.18.1`
- `node -v`,`npm -v`,`npx -v`查看是否安装成功。

## 4 安装hexo

- 全局安装：`npm install -g hexo-cli` （添加`-g`后，安装模块的文件路径会在`D:\Tools\nodejs\node_modules`）或者局部安装`npm install hexo`(文件路径在执行该命令所在的`node_modules`目录下)。我使用局部安装会出问题所以使用了全局安装。推荐全局安装。
- 创建博客文件夹`F:\Blog`，在此文件夹中打开cmd,然后输入`hexo init`,即可初始化。
- hexo常用文件夹
  - `public`文件夹存放生成的站点html文件,其内容是根据source中的源文件生成的
  - `source`文件夹存放源文件,其中自己写的文档放在`_posts`文件夹中
  - `themes`文件夹存放主题文件
  - `_config.landscape.yml` 主题配置文件
  - `_config.yml` hexo全局配置文件
- hexo常用命令，日常使用流程就是在3-7中依次循环，或直接使用第8条命令
  1. `hexo init <folder>` ,如果指定folder则会在当前文件夹下建立并初始化名为folder的新文件夹。否则初始化当前文件夹。
  2. hexo new page 页面名 生成一个页面，会在source目录下生成对应的目录
  3. `hexo new 文档名` 在_posts文件夹中生成一个.md文档
  4. `hexo clean` 清除站点文件夹public中的文件
  5. `hexo g`或`hexo generate` 生成站点文件
  6. `hexo s` 或`hexo server`启动本地服务，可以访问http://localhost:4000/ 预览，ctrl+c关闭。默认端口4000，可在_config.yml设定。_
  7. _`hexo d` 或 `hexo deploy` 部署到github,需要在_config.yml中关联github仓库
  8. `hexo clean && hexo d`一键部署命令

## 5 hexo关联github仓库

安装`hexo-deployer-git`,在博客目录下（我的是`F:\Blog`）执行：

`npm install hexo-deployer-git`

修改`_config.yml`。找到depoly,修改为如下：

```
deploy:
  type: git
  repository: 你的仓库地址（我的是：https://github.com/Chris-Chang/Chris-Chang.github.io.git）
  branch: master
```

## 6 绑定域名

- 我使用的是万网域名，点击阿里云控制台-》域名-》解析。按如下填写两个@和www主机记录，记录类型均为CNAME,记录值均为`github用户名.github.io`

![image-20210416132744788](%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D%E5%92%8Chexo%E5%9C%A8github%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/image-20210416132744788.png)

- 打开仓库页面，选择setting

![image-20210416134208029](%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D%E5%92%8Chexo%E5%9C%A8github%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/image-20210416134208029.png)

- 点击pages,将你的域名输入Custom domain中并保存，48小时后才能点击`Enforce HTTPS`。然后就可以启用https协议进行访问了。

  ![image-20210416134620169](%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D%E5%92%8Chexo%E5%9C%A8github%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/image-20210416134620169.png)

- 然后进入source目录下，用记事本新建一个txt文件，输入你的域名。保存后重命名为CNAME，注意没有后缀名。
- 至此基本工作已经完成，按照hexo常用命令中的2-6步骤就已经可以使用了。接下来就是配置hexo主题了。

## 配置hexo主题和其他注意点

此教程为简明教程，主题配置和我安装过程中遇到踩过的坑参看以下文章。

主题：

- 使用pure主题,可[参考教程](https://blog.cofess.com/2017/11/01/hexo-blog-theme-pure-usage-description.html)进行配置
- 使用next主题（本主题），可参考[官方文档](https://theme-next.js.org/docs/getting-started/)

解决方案：

- [hexo和typora图片无法正常显示解决方案](https://changzhi.space/hexo/hexo%E5%92%8Ctypora%E5%9B%BE%E7%89%87%E6%97%A0%E6%B3%95%E6%AD%A3%E5%B8%B8%E6%98%BE%E7%A4%BA%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/)
- [hexo permalink 本文链接中文乱码解决方案](https://changzhi.space/hexo/hexo%20permalink%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/)
- [安装Gitalk](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)
- [Gitalk 评论登录 403 问题解决](https://cuiqingcai.com/30010.html)

集成Travis CI：

- 

gitbook的安装使用：

- [安装并使用gitbook](https://changzhi.space/hexo/%E5%AE%89%E8%A3%85%E5%B9%B6%E4%BD%BF%E7%94%A8gitbook/)

## nvm常用命令

linux/unix/macos

```
nvm install --lts # 下载最新的稳定版
nvm use <版本号> # 临时切换版本
nvm alias default <版本号> #永久切换版本（版本别名，default就是默认使用的版本）
nvm uninstall <版本号> # 删除指定版本
nvm ls # 查看本地所有版本
nvm ls-remote --lts # 查看线上所有稳定版 
```

windows

```
nvm install <版本号> # 下载指定版本
nvm use <版本号> # 切换版本
nvm uninstall <版本号> # 删除指定版本
nvm list available # 查看线上所有版本
```

## node常用命令

```
npm init # 初始化node环境，-y可以快速初始化
npm i <package> # 下载指定库，看情况添加 -S或者-D，全局安装-g
npm uninstall <package> # 删除node包，删除全局-g
npm list --depth 0 # 查看当前目录下载的node包
npm list -g --depth 0 # 查看全局安装的node包
```

