---
title: hexo permalink中文乱码解决方案
mathjax: false
toc: false
date: 2021-02-16 21:37:34
tags: 
  - hexo
  - 解决方案
categories:
  - hexo
type: hexo
filename: hexo permalink中文乱码解决方案
---

安装完hexo的pure主题后，发现copyright的本文链接时乱码的。这是因为当标题是中文时，`post.permalink`会被自动url编码，查看copyright.ejs(在`themes\pure\layout\_partial\post\`目录下),发现如下内容：

<!-- more -->

```html
    <li class="post-copyright-link hidden-xs">
      <strong>本文链接：</strong>
      <a href="<%- post.permalink %>" title="<%= post.title %>" target="_blank" rel="external"><%- post.permalink %></a>
    </li>
```



尝试了网上普遍的添加urlname方案，很麻烦，而且我还没有弄成功...

最后查阅[官方文档](https://hexo.io/news/2019/10/14/hexo-4-released/)发现，hexo其实内置了`decodeURI()`函数，可以将编码后的内容解码，因此修改后的内容如下:

```html
    <li class="post-copyright-link hidden-xs">
      <strong>本文链接：</strong>
      <a href="<%- post.permalink %>" title="<%= post.title %>" target="_blank" rel="external"><%- decodeURI(post.permalink) %></a>
    </li>
```

这时即可如下正常显示。