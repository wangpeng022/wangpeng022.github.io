import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/CentOS/jenkins安装.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/CentOS/jenkins安装.html",
    'title': "Centos下jenkins安装",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4">安装步骤：<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4">§</a></h3>\n<ol>\n<li>安装java,jenkins依赖java环境；</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">yum install java\n\n</code></pre>\n<ol start="2">\n<li>安装wget（没有安装的话）</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">yum install wget <span class="token operator">-</span>y\n\n</code></pre>\n<ol start="3">\n<li>下载 jenkins 依赖</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">sudo wget <span class="token operator">-</span>O <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>repo https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>pkg<span class="token punctuation">.</span>jenkins<span class="token punctuation">.</span>io<span class="token operator">/</span>redhat<span class="token operator">-</span>stable<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>repo\n\n</code></pre>\n<ol start="4">\n<li>导入秘钥</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">sudo rpm <span class="token operator">-</span><span class="token operator">-</span>import https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>pkg<span class="token punctuation">.</span>jenkins<span class="token punctuation">.</span>io<span class="token operator">/</span>redhat<span class="token operator">-</span>stable<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>io<span class="token punctuation">.</span>key\n\n</code></pre>\n<ol start="5">\n<li>安装 Jenkins</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">yum install jenkins\n\n</code></pre>\n<ol start="6">\n<li>修改root权限, 把JENKINS_USER 改为 &quot;root&quot;</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">vim <span class="token operator">/</span>etc<span class="token operator">/</span>sysconfig<span class="token operator">/</span>jenkins\n\n</code></pre>\n<ol start="7">\n<li>更改 jenkins 主要目录所有权</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">chown <span class="token operator">-</span>R root<span class="token punctuation">:</span>root <span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>jenkins\nchown <span class="token operator">-</span>R root<span class="token punctuation">:</span>root <span class="token operator">/</span>var<span class="token operator">/</span>cache<span class="token operator">/</span>jenkins\nchown <span class="token operator">-</span>R root<span class="token punctuation">:</span>root <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>jenkins\n\n</code></pre>\n<ol start="8">\n<li>启动|停止|重启指令</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">service jenkins start 开始\nservice jenkins restart 重启\nservice jenkins stop 停止\nservice jenkins status 查看状态\n\n</code></pre>\n<p>初次启动会log出来一个管理员密码，复制到8080端口下的页面中。</p>\n<ol start="9">\n<li>更改默认端口(默认：8080)</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">vim <span class="token operator">/</span>etc<span class="token operator">/</span>sysconfig<span class="token operator">/</span>jenkins\n\n</code></pre>\n<ol start="10">\n<li>相关目录</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span>usr<span class="token operator">/</span>lib<span class="token operator">/</span>jenkins<span class="token operator">/</span>：jenkins安装目录，war包会放在这里\n<span class="token operator">/</span>etc<span class="token operator">/</span>sysconfig<span class="token operator">/</span>jenkins：jenkins配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。\n<span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>jenkins<span class="token operator">/</span>：默认的JENKINS_HOME。\n<span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>jenkins<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>log：jenkins日志文件。\n\n</code></pre>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4">安装步骤：<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4">§</a></h3>\n<ol>\n<li>安装java,jenkins依赖java环境；</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">yum install java\n\n</code></pre>\n<ol start="2">\n<li>安装wget（没有安装的话）</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">yum install wget <span class="token operator">-</span>y\n\n</code></pre>\n<ol start="3">\n<li>下载 jenkins 依赖</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">sudo wget <span class="token operator">-</span>O <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>repo https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>pkg<span class="token punctuation">.</span>jenkins<span class="token punctuation">.</span>io<span class="token operator">/</span>redhat<span class="token operator">-</span>stable<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>repo\n\n</code></pre>\n<ol start="4">\n<li>导入秘钥</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">sudo rpm <span class="token operator">-</span><span class="token operator">-</span>import https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>pkg<span class="token punctuation">.</span>jenkins<span class="token punctuation">.</span>io<span class="token operator">/</span>redhat<span class="token operator">-</span>stable<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>io<span class="token punctuation">.</span>key\n\n</code></pre>\n<ol start="5">\n<li>安装 Jenkins</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">yum install jenkins\n\n</code></pre>\n<ol start="6">\n<li>修改root权限, 把JENKINS_USER 改为 &quot;root&quot;</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">vim <span class="token operator">/</span>etc<span class="token operator">/</span>sysconfig<span class="token operator">/</span>jenkins\n\n</code></pre>\n<ol start="7">\n<li>更改 jenkins 主要目录所有权</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">chown <span class="token operator">-</span>R root<span class="token punctuation">:</span>root <span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>jenkins\nchown <span class="token operator">-</span>R root<span class="token punctuation">:</span>root <span class="token operator">/</span>var<span class="token operator">/</span>cache<span class="token operator">/</span>jenkins\nchown <span class="token operator">-</span>R root<span class="token punctuation">:</span>root <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>jenkins\n\n</code></pre>\n<ol start="8">\n<li>启动|停止|重启指令</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">service jenkins start 开始\nservice jenkins restart 重启\nservice jenkins stop 停止\nservice jenkins status 查看状态\n\n</code></pre>\n<p>初次启动会log出来一个管理员密码，复制到8080端口下的页面中。</p>\n<ol start="9">\n<li>更改默认端口(默认：8080)</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit">vim <span class="token operator">/</span>etc<span class="token operator">/</span>sysconfig<span class="token operator">/</span>jenkins\n\n</code></pre>\n<ol start="10">\n<li>相关目录</li>\n</ol>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span>usr<span class="token operator">/</span>lib<span class="token operator">/</span>jenkins<span class="token operator">/</span>：jenkins安装目录，war包会放在这里\n<span class="token operator">/</span>etc<span class="token operator">/</span>sysconfig<span class="token operator">/</span>jenkins：jenkins配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。\n<span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>jenkins<span class="token operator">/</span>：默认的JENKINS_HOME。\n<span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>jenkins<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>log：jenkins日志文件。\n\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4" }, "\u5B89\u88C5\u6B65\u9AA4\uFF1A")))),
    'author': "Peng",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021/03/31",
    'updated': null,
    'excerpt': "安装步骤： 1. 安装java,jenkins依赖java环境； yum install java 2. 安装wget（没有安装的话） yum install wget -y 3. 下载 jenkins 依赖 sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable...",
    'cover': undefined,
    'categories': [
        "jenkins"
    ],
    'tags': [
        "jenkins"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/CentOS/jenkins安装.md",
                "title": "Centos下jenkins安装",
                "link": "posts/CentOS/jenkins安装.html",
                "date": "2021/03/31",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022@sina.cn"
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
                "name": "jenkins",
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
                "name": "jenkins",
                "count": 1
            },
            {
                "name": "TS",
                "count": 1
            }
        ]
    }
};
