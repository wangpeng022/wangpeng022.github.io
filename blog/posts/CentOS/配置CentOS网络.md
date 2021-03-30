---
title: 配置CentOS网络
author: Peng
date: 2021/03/30
categories:
- CentOS
tags:
- CentOS
---

1.打开配置文件 

```vim
vi /etc/sysconfig/network-scripts/ifcfg-eth0

```

2.编辑配置文件

```
# 从dhcp改成static
BOOTPROTO=static
# 从no改成yes。系统将在启动时自动开启该接口。
ONBOOT=yes
# 设置IP地址
IPADDR=192.168.0.200
# 设置子网掩码
NETMASK=255.255.255.0
# 设置网关
GATEWAY=192.168.0.1
# 设置DNS
DNS1=211.167.230.100
DNS2=211.167.230.200
# 表示该接口将通过该配置文件进行设置，而不是通过网络管理器进行管理
NM_CONTROLLED=no

```

3.重启网络服务

```
service network restart

```

tips: 1.在Parallels Desktop虚拟机下，一定要将网络设置改为wifi。
      2.centos 7 的查询ip指令已经变成：ip addr



扩展： 

Linux centos重启命令：
　　1、reboot   普通重启
　　2、shutdown -r now 立刻重启(root用户使用)
　　3、shutdown -r 10 过10分钟自动重启(root用户使用)
　　4、shutdown -r 20:35 在时间为20:35时候重启(root用户使用)
　　如果是通过shutdown命令设置重启的话，可以用shutdown -c命令取消重启

　Linux centos关机命令：
　　1、halt 立刻关机
　　2、poweroff 立刻关机
　　3、shutdown -h now 立刻关机(root用户使用)
　　4、shutdown -h 10 10分钟后自动关机
　　如果是通过shutdown命令设置关机的话，可以用shutdown -c命令取消重启