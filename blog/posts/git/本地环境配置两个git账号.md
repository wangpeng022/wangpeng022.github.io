---
title: 本地环境配置两个git账号（github和gitlab相互不干扰）
author: Peng
date: 2021/10/19
categories:
- git
tags:
- github gitlab
---

### 步骤：

1. 生成两对 公/私钥，一个账户一对。正常情况下直接执行 ssh-keygen 默认生成一对，但是咱们现在要生成两对(名字随意，但是要和后边的config文件对应上)：
```
ssh-keygen -t rsa -C "注册github邮箱" -f ~/.ssh/id_rsa_1
ssh-keygen -t rsa -C "注册gitlab邮箱" -f ~/.ssh/id_rsa_2

```
2. 通过指令添加到 SSH (这一步一定要执行)
```
ssh-add id_rsa_1
ssh-add id_rsa_2
```
3. 设置不同的Host
  1）在路径 ~/.ssh 下创建 config文件
  2）编辑config文件
  ```
# github user
  ```
  Host git@github.com
  Hostname https://github.com/
  User github的用户名
  IdentityFile ~/.ssh/id_rsa_1

  #gitlab user
  Host git@gitlab.com
  Hostname http://gitlab.com/
  User gitlab的用户名
  IdentityFile ~/.ssh/id_rsa_2
  ```
4. 取消全局的username、usermail，改为本地配置，到项目的根目录配置不同的username、usermail
```
git config –global -l   //查看配置
git config –global –unset user.name
git config –global –unset user.email

git config user.email “邮箱”
git config user.name “用户名”
```

5. 到不同的目录下测试是否成功：
```
ssh -T git@github.com
ssh -T git@gitlab.com

```

tips: 自仓库的话，也要到其对应的根目录配置username、usermail