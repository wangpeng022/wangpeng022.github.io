---
title: 使用Pagic
author: Peng
date: 2021/03/25
categories:
- 其他
tags:
- 其他
---

# 安装Pagic

### 1.安装Pagic之前,需要有deno环境

查看自己是否安装了deno
```javascript
deno -V
```
https://ftp.bmp.ovh/imgs/2021/03/63349568fa5374a7.png

```javascript
# 安装 pagic
deno install --unstable --allow-read --allow-write --allow-net --allow-run --name=pagic https://deno.land/x/pagic/mod.ts

# 创建 pagic.config.ts 和 README.md
mkdir site && cd site && echo "export default {};" > pagic.config.ts && echo "# Hello world" > README.md

# 运行 pagic
pagic build --watch --serve

```

官网地址： https://pagic.cn/
 


