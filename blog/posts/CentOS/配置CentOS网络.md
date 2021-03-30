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

tips: 在Parallels Desktop虚拟机下，一定要将网络设置改为wifi。