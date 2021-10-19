import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/README.md",
    'layoutPath': "tags/_layout.tsx",
    'outputPath': "tags/index.html",
    'title': "标签",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>标签</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6807\u7B7E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "wangpeng022",
    'contributors': [
        "wangpeng022"
    ],
    'date': "2021-10-19T07:54:55.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/CentOS/CentOS安装node.md",
                "title": "CentOS安装node",
                "link": "posts/CentOS/CentOS安装node.html",
                "date": "2021/10/19",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
                ],
                "categories": [
                    "CentOS"
                ],
                "tags": [
                    "node"
                ],
                "excerpt": "安装步骤： 1. 去node官网复制下载链接（下载相应的LTS版本）； 2. 开始下载安装包； wget https://npm.taobao.org/mirrors/node/v14.18.1/node-v14.18.1-linux-x64.tar.xz 3. 解压 tar -xvf node-v10.15.3-linux-x64.tar.xz 4..."
            },
            {
                "pagePath": "posts/git/本地环境配置两个git账号.md",
                "title": "本地环境配置两个git账号（github和gitlab相互不干扰）",
                "link": "posts/git/本地环境配置两个git账号.html",
                "date": "2021/10/19",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
                ],
                "categories": [
                    "git"
                ],
                "tags": [
                    "github gitlab"
                ],
                "excerpt": "步骤： 1. 生成两对 公/私钥，一个账户一对。正常情况下直接执行 ssh-keygen 默认生成一对，但是咱们现在要生成两对(名字随意，但是要和后边的config文件对应上)： ssh-keygen -t rsa -C \"注册github邮箱\" -f ~/.ssh/id_rsa_1 ..."
            },
            {
                "pagePath": "posts/npm/私仓.md",
                "title": "私仓",
                "link": "posts/npm/私仓.html",
                "date": "2021/05/24",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
                ],
                "categories": [
                    "npm"
                ],
                "tags": [
                    "verdaccio npm"
                ],
                "excerpt": "Q&A 1.问：为什么要搭建npm私仓？ 答：因为即想使用npm的便利，又不想让大家看到自己发布的npm包。 2.问：为什么不用npm的付费服务？ 答：穷。 3.问：为什么不使用“sinopia”？ 答：近两年未更新（见下图），不值得使用，verd...",
                "cover": "https://ftp.bmp.ovh/imgs/2021/05/7b1b950b5a8d7d1c.png"
            },
            {
                "pagePath": "posts/react/重学react（从15到17）.md",
                "title": "重学react（从15到17）",
                "link": "posts/react/重学react（从15到17）.html",
                "date": "2021/05/11",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
                ],
                "categories": [
                    "react"
                ],
                "tags": [
                    "react"
                ],
                "excerpt": ""
            },
            {
                "pagePath": "posts/js/数字失真.md",
                "title": "js数字类型失真问题",
                "link": "posts/js/数字失真.html",
                "date": "2021/05/07",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
                ],
                "categories": [
                    "js"
                ],
                "tags": [
                    "数字"
                ],
                "excerpt": "js的number类型有个最大值（安全值）：即2的53次方，为9007199254740992。 如果超过这个值，那么js会出现不精确的问题。 所以，js中的数字应该小于16位（不包含）。 对于小数运算同样有失真问题，一般解决办法是在末尾添加相应..."
            },
            {
                "pagePath": "posts/smart/sound.md",
                "title": "很有意思的一段代码",
                "link": "posts/smart/sound.html",
                "date": "2021/04/20",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
                ],
                "categories": [
                    "smart"
                ],
                "tags": [
                    "smart"
                ],
                "excerpt": "直接上代码 const audioCtx = new (window.AudioContext || window.webkitAudioContext)() const observer = new MutationObserver(function(mutationsList) { const oscillator = audioCtx.createOscillator() oscillator.con..."
            },
            {
                "pagePath": "posts/CentOS/jenkins安装.md",
                "title": "Centos下jenkins安装",
                "link": "posts/CentOS/jenkins安装.html",
                "date": "2021/04/02",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
                ],
                "categories": [
                    "jenkins"
                ],
                "tags": [
                    "jenkins"
                ],
                "excerpt": "安装步骤： 1. 安装java,jenkins依赖java环境； yum install java 2. 安装wget（没有安装的话） yum install wget -y 3. 下载 jenkins 依赖 sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable..."
            },
            {
                "pagePath": "posts/CentOS/配置CentOS网络.md",
                "title": "配置CentOS网络",
                "link": "posts/CentOS/配置CentOS网络.html",
                "date": "2021/03/30",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
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
                "pagePath": "posts/TypeScript/初识TS.md",
                "title": "初识TS",
                "link": "posts/TypeScript/初识TS.html",
                "date": "2021/03/30",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
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
                "pagePath": "posts/2021/使用Pagic.md",
                "title": "使用Pagic",
                "link": "posts/2021/使用Pagic.html",
                "date": "2021/03/25",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022"
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
                    "wangpeng022"
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
                "name": "CentOS",
                "count": 2
            },
            {
                "name": "其他",
                "count": 2
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "jenkins",
                "count": 1
            },
            {
                "name": "js",
                "count": 1
            },
            {
                "name": "npm",
                "count": 1
            },
            {
                "name": "react",
                "count": 1
            },
            {
                "name": "smart",
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
                "name": "github gitlab",
                "count": 1
            },
            {
                "name": "jenkins",
                "count": 1
            },
            {
                "name": "node",
                "count": 1
            },
            {
                "name": "react",
                "count": 1
            },
            {
                "name": "smart",
                "count": 1
            },
            {
                "name": "TS",
                "count": 1
            },
            {
                "name": "verdaccio npm",
                "count": 1
            },
            {
                "name": "数字",
                "count": 1
            }
        ]
    }
};
