import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/2021/使用Pagic.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/使用Pagic.html",
    'title': "使用Pagic",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>安装Pagic</h1>\n<h3 id="1%E5%AE%89%E8%A3%85pagic%E4%B9%8B%E5%89%8D%E9%9C%80%E8%A6%81%E6%9C%89deno%E7%8E%AF%E5%A2%83">1.安装Pagic之前,需要有deno环境<a class="anchor" href="#1%E5%AE%89%E8%A3%85pagic%E4%B9%8B%E5%89%8D%E9%9C%80%E8%A6%81%E6%9C%89deno%E7%8E%AF%E5%A2%83">§</a></h3>\n<p>查看自己是否安装了deno</p>\n<pre class="language-javascript"><code class="language-javascript">deno <span class="token operator">-</span><span class="token constant">V</span>\n</code></pre>\n<p><a href="https://ftp.bmp.ovh/imgs/2021/03/63349568fa5374a7.png">https://ftp.bmp.ovh/imgs/2021/03/63349568fa5374a7.png</a></p>\n<pre class="language-javascript"><code class="language-javascript"># 安装 pagic\ndeno install <span class="token operator">--</span>unstable <span class="token operator">--</span>allow<span class="token operator">-</span>read <span class="token operator">--</span>allow<span class="token operator">-</span>write <span class="token operator">--</span>allow<span class="token operator">-</span>net <span class="token operator">--</span>allow<span class="token operator">-</span>run <span class="token operator">--</span>name<span class="token operator">=</span>pagic https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span><span class="token property-access">land</span><span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span><span class="token property-access">ts</span>\n\n# 创建 pagic<span class="token punctuation">.</span><span class="token property-access">config</span><span class="token punctuation">.</span><span class="token property-access">ts</span> 和 <span class="token constant">README</span><span class="token punctuation">.</span><span class="token property-access">md</span>\nmkdir site <span class="token operator">&amp;&amp;</span> cd site <span class="token operator">&amp;&amp;</span> echo <span class="token string">"export default {};"</span> <span class="token operator">></span> pagic<span class="token punctuation">.</span><span class="token property-access">config</span><span class="token punctuation">.</span><span class="token property-access">ts</span> <span class="token operator">&amp;&amp;</span> echo <span class="token string">"# Hello world"</span> <span class="token operator">></span> <span class="token constant">README</span><span class="token punctuation">.</span><span class="token property-access">md</span>\n\n# 运行 pagic\npagic build <span class="token operator">--</span>watch <span class="token operator">--</span>serve\n\n</code></pre>\n<p>官网地址： <a href="https://pagic.cn/">https://pagic.cn/</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5B89\u88C5Pagic"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="1%E5%AE%89%E8%A3%85pagic%E4%B9%8B%E5%89%8D%E9%9C%80%E8%A6%81%E6%9C%89deno%E7%8E%AF%E5%A2%83">1.安装Pagic之前,需要有deno环境<a class="anchor" href="#1%E5%AE%89%E8%A3%85pagic%E4%B9%8B%E5%89%8D%E9%9C%80%E8%A6%81%E6%9C%89deno%E7%8E%AF%E5%A2%83">§</a></h3>\n<p>查看自己是否安装了deno</p>\n<pre class="language-javascript"><code class="language-javascript">deno <span class="token operator">-</span><span class="token constant">V</span>\n</code></pre>\n<p><a href="https://ftp.bmp.ovh/imgs/2021/03/63349568fa5374a7.png">https://ftp.bmp.ovh/imgs/2021/03/63349568fa5374a7.png</a></p>\n<pre class="language-javascript"><code class="language-javascript"># 安装 pagic\ndeno install <span class="token operator">--</span>unstable <span class="token operator">--</span>allow<span class="token operator">-</span>read <span class="token operator">--</span>allow<span class="token operator">-</span>write <span class="token operator">--</span>allow<span class="token operator">-</span>net <span class="token operator">--</span>allow<span class="token operator">-</span>run <span class="token operator">--</span>name<span class="token operator">=</span>pagic https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span><span class="token property-access">land</span><span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span><span class="token property-access">ts</span>\n\n# 创建 pagic<span class="token punctuation">.</span><span class="token property-access">config</span><span class="token punctuation">.</span><span class="token property-access">ts</span> 和 <span class="token constant">README</span><span class="token punctuation">.</span><span class="token property-access">md</span>\nmkdir site <span class="token operator">&amp;&amp;</span> cd site <span class="token operator">&amp;&amp;</span> echo <span class="token string">"export default {};"</span> <span class="token operator">></span> pagic<span class="token punctuation">.</span><span class="token property-access">config</span><span class="token punctuation">.</span><span class="token property-access">ts</span> <span class="token operator">&amp;&amp;</span> echo <span class="token string">"# Hello world"</span> <span class="token operator">></span> <span class="token constant">README</span><span class="token punctuation">.</span><span class="token property-access">md</span>\n\n# 运行 pagic\npagic build <span class="token operator">--</span>watch <span class="token operator">--</span>serve\n\n</code></pre>\n<p>官网地址： <a href="https://pagic.cn/">https://pagic.cn/</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#1%E5%AE%89%E8%A3%85pagic%E4%B9%8B%E5%89%8D%E9%9C%80%E8%A6%81%E6%9C%89deno%E7%8E%AF%E5%A2%83" }, "1.\u5B89\u88C5Pagic\u4E4B\u524D,\u9700\u8981\u6709deno\u73AF\u5883")))),
    'author': "Peng",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021/03/25",
    'updated': null,
    'excerpt': "1.安装Pagic之前,需要有deno环境 查看自己是否安装了deno deno -V https://ftp.bmp.ovh/imgs/2021/03/63349568fa5374a7.png # 安装 pagic deno install --unstable --allow-read --allow-write --allow-net --allow-run --name...",
    'cover': undefined,
    'categories': [
        "其他"
    ],
    'tags': [
        "其他"
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
