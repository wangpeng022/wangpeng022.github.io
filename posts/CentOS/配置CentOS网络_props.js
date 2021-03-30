import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/CentOS/配置CentOS网络.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/CentOS/配置CentOS网络.html",
    'title': "配置CentOS网络",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>1.打开配置文件</p>\n<pre class="language-vim"><code class="language-vim"><span class="token keyword">vi</span> <span class="token operator">/</span>etc<span class="token operator">/</span>sysconfig<span class="token operator">/</span>network<span class="token operator">-</span>scripts<span class="token operator">/</span>ifcfg<span class="token operator">-</span>eth0\n\n</code></pre>\n<p>2.编辑配置文件</p>\n<pre class="language-autoit"><code class="language-autoit"># 从dhcp改成<span class="token keyword">static</span>\nBOOTPROTO<span class="token operator">=</span><span class="token keyword">static</span>\n# 从no改成yes。系统将在启动时自动开启该接口。\nONBOOT<span class="token operator">=</span>yes\n# 设置IP地址\nIPADDR<span class="token operator">=</span><span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">0.200</span>\n# 设置子网掩码\nNETMASK<span class="token operator">=</span><span class="token number">255.255</span><span class="token punctuation">.</span><span class="token number">255.0</span>\n# 设置网关\nGATEWAY<span class="token operator">=</span><span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">0.1</span>\n# 设置DNS\nDNS1<span class="token operator">=</span><span class="token number">211.167</span><span class="token punctuation">.</span><span class="token number">230.100</span>\nDNS2<span class="token operator">=</span><span class="token number">211.167</span><span class="token punctuation">.</span><span class="token number">230.200</span>\n# 表示该接口将通过该配置文件进行设置，而不是通过网络管理器进行管理\nNM_CONTROLLED<span class="token operator">=</span>no\n\n</code></pre>\n<p>3.重启网络服务</p>\n<pre class="language-autoit"><code class="language-autoit">service network restart\n\n</code></pre>\n<p>tips: 1.在Parallels Desktop虚拟机下，一定要将网络设置改为wifi。\n2.centos 7 的查询ip指令已经变成：ip addr</p>\n<p>扩展：</p>\n<p>Linux centos重启命令：\n　　1、reboot   普通重启\n　　2、shutdown -r now 立刻重启(root用户使用)\n　　3、shutdown -r 10 过10分钟自动重启(root用户使用)\n　　4、shutdown -r 20:35 在时间为20:35时候重启(root用户使用)\n　　如果是通过shutdown命令设置重启的话，可以用shutdown -c命令取消重启</p>\n<p>Linux centos关机命令：\n　　1、halt 立刻关机\n　　2、poweroff 立刻关机\n　　3、shutdown -h now 立刻关机(root用户使用)\n　　4、shutdown -h 10 10分钟后自动关机\n　　如果是通过shutdown命令设置关机的话，可以用shutdown -c命令取消重启</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>1.打开配置文件</p>\n<pre class="language-vim"><code class="language-vim"><span class="token keyword">vi</span> <span class="token operator">/</span>etc<span class="token operator">/</span>sysconfig<span class="token operator">/</span>network<span class="token operator">-</span>scripts<span class="token operator">/</span>ifcfg<span class="token operator">-</span>eth0\n\n</code></pre>\n<p>2.编辑配置文件</p>\n<pre class="language-autoit"><code class="language-autoit"># 从dhcp改成<span class="token keyword">static</span>\nBOOTPROTO<span class="token operator">=</span><span class="token keyword">static</span>\n# 从no改成yes。系统将在启动时自动开启该接口。\nONBOOT<span class="token operator">=</span>yes\n# 设置IP地址\nIPADDR<span class="token operator">=</span><span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">0.200</span>\n# 设置子网掩码\nNETMASK<span class="token operator">=</span><span class="token number">255.255</span><span class="token punctuation">.</span><span class="token number">255.0</span>\n# 设置网关\nGATEWAY<span class="token operator">=</span><span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">0.1</span>\n# 设置DNS\nDNS1<span class="token operator">=</span><span class="token number">211.167</span><span class="token punctuation">.</span><span class="token number">230.100</span>\nDNS2<span class="token operator">=</span><span class="token number">211.167</span><span class="token punctuation">.</span><span class="token number">230.200</span>\n# 表示该接口将通过该配置文件进行设置，而不是通过网络管理器进行管理\nNM_CONTROLLED<span class="token operator">=</span>no\n\n</code></pre>\n<p>3.重启网络服务</p>\n<pre class="language-autoit"><code class="language-autoit">service network restart\n\n</code></pre>\n<p>tips: 1.在Parallels Desktop虚拟机下，一定要将网络设置改为wifi。\n2.centos 7 的查询ip指令已经变成：ip addr</p>\n<p>扩展：</p>\n<p>Linux centos重启命令：\n　　1、reboot   普通重启\n　　2、shutdown -r now 立刻重启(root用户使用)\n　　3、shutdown -r 10 过10分钟自动重启(root用户使用)\n　　4、shutdown -r 20:35 在时间为20:35时候重启(root用户使用)\n　　如果是通过shutdown命令设置重启的话，可以用shutdown -c命令取消重启</p>\n<p>Linux centos关机命令：\n　　1、halt 立刻关机\n　　2、poweroff 立刻关机\n　　3、shutdown -h now 立刻关机(root用户使用)\n　　4、shutdown -h 10 10分钟后自动关机\n　　如果是通过shutdown命令设置关机的话，可以用shutdown -c命令取消重启</p>'
        } }),
    'toc': null,
    'author': "Peng",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021/03/30",
    'updated': null,
    'excerpt': "1.打开配置文件 vi /etc/sysconfig/network-scripts/ifcfg-eth0 2.编辑配置文件 # 从dhcp改成static BOOTPROTO=static # 从no改成yes。系统将在启动时自动开启该接口。 ONBOOT=yes # 设置IP地址 IPADDR=192.168.0.200 # 设置子...",
    'cover': undefined,
    'categories': [
        "CentOS"
    ],
    'tags': [
        "CentOS"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/TypeScript/初识TS.md",
                "title": "初识TS",
                "link": "posts/TypeScript/初识TS.html",
                "date": "2021/03/30",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022@sina.cn"
                ],
                "categories": [
                    "TS"
                ],
                "tags": [
                    "TS"
                ],
                "excerpt": "概述 TS -> typescript javascript 的超集，微软出品，扩充javascript对类型判断和报错提示的不足。 开撸代码 1.interface - > 接口 interface A { num: number, str: string } let obj:A = {a:123,b:'456'}; 2.联合类型 let n..."
            },
            {
                "pagePath": "posts/CentOS/配置CentOS网络.md",
                "title": "配置CentOS网络",
                "link": "posts/CentOS/配置CentOS网络.html",
                "date": "2021/03/30",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022@sina.cn"
                ],
                "categories": [
                    "CentOS"
                ],
                "tags": [
                    "CentOS"
                ],
                "excerpt": "1.打开配置文件 vi /etc/sysconfig/network-scripts/ifcfg-eth0 2.编辑配置文件 # 从dhcp改成static BOOTPROTO=static # 从no改成yes。系统将在启动时自动开启该接口。 ONBOOT=yes # 设置IP地址 IPADDR=192.168.0.200 # 设置子..."
            },
            {
                "pagePath": "posts/2021/使用Pagic.md",
                "title": "使用Pagic",
                "link": "posts/2021/使用Pagic.html",
                "date": "2021/03/25",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022@sina.cn"
                ],
                "categories": [
                    "其他"
                ],
                "tags": [
                    "其他"
                ],
                "excerpt": "1.安装Pagic之前,需要有deno环境 查看自己是否安装了deno deno -V https://ftp.bmp.ovh/imgs/2021/03/63349568fa5374a7.png # 安装 pagic deno install --unstable --allow-read --allow-write --allow-net --allow-run --name..."
            },
            {
                "pagePath": "posts/2021/写在开头.md",
                "title": "写在开头",
                "link": "posts/2021/写在开头.html",
                "date": "2021/03/23",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022@sina.cn"
                ],
                "categories": [
                    "其他"
                ],
                "tags": [
                    "其他"
                ],
                "excerpt": "新的blog,新的开始"
            }
        ],
        "categories": [
            {
                "name": "其他",
                "count": 2
            },
            {
                "name": "CentOS",
                "count": 1
            },
            {
                "name": "TS",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "其他",
                "count": 2
            },
            {
                "name": "CentOS",
                "count": 1
            },
            {
                "name": "TS",
                "count": 1
            }
        ]
    }
};
