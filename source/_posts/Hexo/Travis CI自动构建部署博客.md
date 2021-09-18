---
title: Travis CI自动构建部署博客
mathjax: false
tags:
  - hexo
  - 解决方案
categories:
  - hexo
toc: true
abbrlink: d42a3850
date: 2021-08-08 11:20:05
---
现假设你的项目已有两个分支。

- 一个为 source 分支，用于更新站点，如添加、修改、删除文章等；
- 一个为 gh-pages 分支，用于部署站点。

Travis CI 是一个深度结合 github 的持续集成服务。使用它我们不需要手动部署站点，即不需要手动 push 生成的 public 文件夹的内容到 gh-pages 分支。**配置了 Travis CI 后，每当我们提交 source分支下的修改后，Travis CI 就会根据配置文件生成虚拟机，配置环境后再进行静态文件的生成和部署。**

## 配置 Travis CI

<!-- more -->

Travis CI 不需要单独注册，进入 [Travis CI 官网](https://www.travis-ci.com) 后，直接使用 GitHub 账号登录即可。

- 点击右上角头像，选择Settings。

  ![image-20210808111056802](Travis%20CI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2/image-20210808111056802.png)

- 选择左边的Sync account，同步后右边会出现仓库列表，勾选要关联的仓库，然后点击旁边的Settings，进入该仓库设置页面

  ![image-20210808111357938](Travis%20CI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2/image-20210808111357938.png)

- 进行如下设置

  ![](Travis%20CI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2/image-20210808112035845.png)

## 设置环境变量

有三个环境变量是需要设置的，用于赋予 Travis CI 操作我们的仓库的权限：

- `GITHUB_REPO_TOKEN`: 操作 Github 仓库的 personal access token
- `USER_EMAIL`: 你的 Github 账号的邮箱
- `USER_NAME`： 你的 Github 账号的用户名

### 生成github仓库token:

登录 Github，点击 `头像->Settings->Developer settings->Personal access tokens->Generate new token`，新生成一个 token， token 名称随意填写，给这个 token 赋予下图中的权限，可以根据需要自行调整：

![personal-access-token](Travis%20CI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2/personal-access-token.png)

然后点击 Generate token，生成的 token 只显示一次，页面刷新后将无法看到，需要先复制下来（如果忘记了，可以重新生成）,这个值就是 `GITHUB_REPO_TOKEN` 变量的值。

### 设置环境变量

有了 `GITHUB_REPO_TOKEN` 变量的值后就可开始设置环境变量了，设置环境变量有多种方法，可以参考官方文档 [Environment Variables](https://docs.travis-ci.com/user/environment-variables/)，这里使用的是其中的 [Defining Variables in Repository Settings](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings) 方法

![image-20210808112650940](Travis%20CI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2/image-20210808112650940.png)

## 添加 .travis.yml 文件

在站点根目录下新建 `.travis.yml` 文件，当包含该文件的项目上传到 Github 时，Travis CI 自动根据该配置文件中的内容进行构建和部署。

该配置文件指导 Travis CI 操作的内容类似于，我们在一台全新的机器上 clone 这个项目后，配置环境依赖，然后生成并部署站点的操作，它包含了这一系列操作所执行的命令，所以不同项目 `.travis.yml` 文件的内容是不同的，下面是 [我的配置](https://github.com/Chris-Chang/Chris-Chang.github.io/blob/source/.travis.yml) ，仅供参考：

```yaml
language: node_js # 构建环境
node_js:
  - "12.18.1"

# 设置只检测 source 分支的 push 操作
branches:
  only:
  - source # 只有 source 分支提交时才运行 Travis CI

# cache these folders
cache:
  directories:
    - node_modules # 把 源码中的node_modules 放入缓存可以节约构建的时间
    - pandoc-2.7.2-1-amd64.deb

# Start: Build Lifecycle
before_install: # 配置环境 安装hexo和pandoc
  - npm install -g hexo-cli
  - sudo dpkg -i pandoc-2.7.2-1-amd64.deb

install: # 安装依赖
  # install the plugins in package.json
  - npm install

before_script:
  - git config user.name $USER_NAME
  - git config user.email $USER_EMAIL
  - sed -i'' "s~https://github.com/Chris-Chang/Chris-Chang.github.io.git~https://${GITHUB_ACCESS_TOKEN}@github.com/Chris-Chang/Chris-Chang.github.io.git~" _config.yml

script:
  - hexo clean


after_success:
  - hexo deploy
# End: Build Lifecycle
```

- 如果你的源码分支名不是 `source`，那么 `only:` 下的分支名就要改成你相应的分支名。
- 最后的 `after_success：` 中，使用到了我们设置的环境变量的值 `USER_NAME`、`USER_EMAIL` 和 `GITHUB_REPO_TOKEN`。sed 命令将 hexo 中的`_config.yml`部署仓库的链接替换成了 `access_token` 形式，其中前面的 `git@github.com:yourname/yourname.github.io.git` 是你在 `_config.yml`中的链接，后面的 `https://${GITHUB_REPO_TOKEN}@github.com/yourname/yourname.github.io.git` 是 token 形式的链接。
- ls 后会发现，当前travis运行的根目录就是博客根目录。
- 由于我需要使用pandoc依赖包,所以需要单独安装pandoc，要提前将下载好的pandoc直接放入博客根目录

**需要注意 `hexo deploy` 是否真正成功，有时没执行成功，例如最后的 push 失败了，但是构建任务的状态还是绿色的 `passed`**,是否真正成功要看构建日志。

[参考文章](https://wylu.github.io/posts/aa960b18/#%E9%85%8D%E7%BD%AE-travis-ci-%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90)

