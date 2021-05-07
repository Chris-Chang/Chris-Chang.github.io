---
title: Hexo博客提交百度和Google收录
mathjax: false
toc: true
date: 2021-04-16 18:00:04
tags: hexo
categories: hexo
type: hexo
filename: Hexo博客提交百度和Google收录

---

## 1 查看网站是否被收录

google或百度输入site:域名，查看域名是否被收录。如下图百度未收录，Google收录了。

<!-- more -->

![image-20210416180311376](Hexo%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E7%99%BE%E5%BA%A6%E5%92%8CGoogle%E6%94%B6%E5%BD%95/image-20210416180311376.png)

![image-20210416180341954](Hexo%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E7%99%BE%E5%BA%A6%E5%92%8CGoogle%E6%94%B6%E5%BD%95/image-20210416180341954.png)

## 2 配置站点地图

> 站点地图是一个页面，上面放置了网站上需要搜索引擎抓取的所有页面的链接

进入我的博客目录F:\Blog，使用cmd,输入如下命令

```
npm install hexo-generator-baidu-sitemap --save
npm install hexo-generator-sitemap --save
```

此时再输入`hexo g`后,public文件夹下会多出来两个文件分别为sitemap.xml和baidusitemap.xml。

部署`hexo d`后，可以在https://你的域名/sitemap.xml和https://你的域名/baidusitemap.xml查看

## 3 baidu

[百度站点提交入口](https://ziyuan.baidu.com/linksubmit/url)

### 3.1 验证站点。

输入域名，此域名要和_config.yml配置文件中的url中的一致。在添加站点时选择你的协议（我的是https）,然后验证站点。一共有三种验证方式，推荐CNAME验证。主机记录填入给的code即可。

![image-20210416181353434](Hexo%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E7%99%BE%E5%BA%A6%E5%92%8CGoogle%E6%94%B6%E5%BD%95/image-20210416181353434.png)

### 3.2 资源收录

点击左侧资源提交中的普通收录选项，一共有三种资源提交方式

![image-20210416181905782](Hexo%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E7%99%BE%E5%BA%A6%E5%92%8CGoogle%E6%94%B6%E5%BD%95/image-20210416181905782.png)

**个人推荐同时使用API提交(主动推送)和sitemap**

- 主动推送

  - 在我的博客根目录F:\Blog安装插件`npm install hexo-baidu-url-submit --save`, 然后再hexo配置文件_config.yml中添加如下内容：

  ```
  baidu_url_submit:
    count: 1               # 提交最新的多少个链接
    host: changzhi.space   # 在百度站长平台中添加的域名
    token: your_token      # 秘钥，即为上图中的接口调用地址中的token
    path: baidu_urls.txt   # 文本文档的地址， 新链接会保存在此文本文档里
  ```
  - 在depoly中添加type,修改如下

    ![image-20210416182537075](Hexo%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E7%99%BE%E5%BA%A6%E5%92%8CGoogle%E6%94%B6%E5%BD%95/image-20210416182537075.png)

  - 最后执行`hexo d`时，会进行主动推送。产生如下效果说明成功推送1条url，今日还可推送2998条

![image-20210416183151492](Hexo%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E7%99%BE%E5%BA%A6%E5%92%8CGoogle%E6%94%B6%E5%BD%95/image-20210416183151492.png)

- sitemap方式
  - 选择sitemap方式，将第二步中的两个地址https://你的域名/sitemap.xml和https://你的域名/baidusitemap.xml，分别填入解析即可。由于github禁止百度爬取，因此此方式效果有限。

## 4 google

[google站点提交入口](https://www.google.com/webmasters/tools/home?hl=zh-CN)

### 4.1 验证站点

有两种方式，我使用网域方式好像不行。所以改用了网址前缀方式。

输入你的域名，然后会让你下载HTML验证文件,下载后将该html文件放入`themes/next/source`文件夹下。生成文件并部署到github上`hexo g -d`。然后等2分钟，点击立即验证即可。

### 4.2 资源收录

只需要sitemap方式。点击左侧站点地图，输入sitemap.xml点击提交即可。

![image-20210416185626286](Hexo%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E7%99%BE%E5%BA%A6%E5%92%8CGoogle%E6%94%B6%E5%BD%95/image-20210416185626286.png)

## 5 至此大功告成

推荐阅读：[使用hexo在github搭建博客并绑定域名](https://changzhi.space/2021/04/16/%E4%BD%BF%E7%94%A8%E5%9F%9F%E5%90%8D%E5%92%8Chexo%E5%9C%A8github%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/)

参考：

- [Hexo系列：（四）Hexo博客提交百度和Google收录](https://www.jianshu.com/p/7d3d87b52ad7?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)

- [Hexo 博客提交百度、谷歌搜索引擎收录](https://zhuanlan.zhihu.com/p/100922816)