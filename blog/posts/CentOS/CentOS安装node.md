---
title: CentOS安装node
author: Peng
date: 2021/10/19
categories:
- CentOS
tags:
- node
---

### 安装步骤：

1. 去node官网复制下载链接（下载相应的LTS版本）；
2. 开始下载安装包；
```
wget https://npm.taobao.org/mirrors/node/v14.18.1/node-v14.18.1-linux-x64.tar.xz

```

3. 解压
```
tar -xvf node-v10.15.3-linux-x64.tar.xz
```

4. cd 到 node-v10.15.3-linux-x64 目录 检查是否成功。
```
node -v
```

5. 更改文件夹名称

```
mv node-v14.18.1-linux-x64 node

```

6. 配置软连接，使全局都可以使用node命令

```
ln -s /usr/local/node/bin/node /usr/bin/node  --将node源文件映射到usr/bin下的node文件

ln -s /usr/local/node/bin/npm /usr/bin/npm
```
