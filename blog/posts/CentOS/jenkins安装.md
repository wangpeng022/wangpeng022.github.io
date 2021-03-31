---
title: Centos下jenkins安装
author: Peng
categories:
- jenkins
tags:
- jenkins
---

### 安装步骤：

1. 安装java,jenkins依赖java环境；
```
yum install java

```
2. 安装wget（没有安装的话）
```
yum install wget -y

```
3. 下载 jenkins 依赖

```
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo

```
4. 导入秘钥

```
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key

```
5. 安装 Jenkins 

```
yum install jenkins

```
6. 修改root权限, 把JENKINS_USER 改为 "root"

```
vim /etc/sysconfig/jenkins

```

7. 更改 jenkins 主要目录所有权
```
chown -R root:root /var/lib/jenkins
chown -R root:root /var/cache/jenkins
chown -R root:root /var/log/jenkins

```

8. 启动|停止|重启指令

```
service jenkins start 开始
service jenkins restart 重启
service jenkins stop 停止
service jenkins status 查看状态

```
初次启动会log出来一个管理员密码，复制到8080端口下的页面中。

9. 更改默认端口(默认：8080)

```
vim /etc/sysconfig/jenkins

```

10. 相关目录

```
/usr/lib/jenkins/：jenkins安装目录，war包会放在这里
/etc/sysconfig/jenkins：jenkins配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。
/var/lib/jenkins/：默认的JENKINS_HOME。
/var/log/jenkins/jenkins.log：jenkins日志文件。

```

