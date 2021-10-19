import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/TypeScript/初识TS.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/TypeScript/初识TS.html",
    'title': "初识TS",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="%E6%A6%82%E8%BF%B0">概述<a class="anchor" href="#%E6%A6%82%E8%BF%B0">§</a></h3>\n<p>TS -&gt; typescript  javascript 的超集，微软出品，扩充javascript对类型判断和报错提示的不足。</p>\n<h3 id="%E5%BC%80%E6%92%B8%E4%BB%A3%E7%A0%81">开撸代码<a class="anchor" href="#%E5%BC%80%E6%92%B8%E4%BB%A3%E7%A0%81">§</a></h3>\n<p>1.interface - &gt; 接口</p>\n<pre class="language-javascript"><code class="language-javascript"> <span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>\n   num<span class="token operator">:</span> number<span class="token punctuation">,</span>\n   str<span class="token operator">:</span> string\n <span class="token punctuation">}</span>\n <span class="token keyword">let</span> obj<span class="token operator">:</span><span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token string">\'456\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>2.联合类型</p>\n<pre class="language-javascript"><code class="language-javascript"> <span class="token keyword">let</span> numOrStr<span class="token operator">:</span> number<span class="token operator">|</span>string <span class="token operator">=</span> <span class="token number">123</span>\n</code></pre>\n<p>tip: 实在预测不到类型的可以直接使用 any</p>\n<p>3.定义数组</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 纯数字类型</span>\n<span class="token keyword">let</span> arr<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> \n<span class="token comment">// 纯字符串类型</span>\n<span class="token keyword">let</span> arr2<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'str\'</span><span class="token punctuation">,</span> <span class="token string">\'str\'</span><span class="token punctuation">,</span> <span class="token string">\'str\'</span><span class="token punctuation">]</span>\n<span class="token comment">// 混合类型</span>\n<span class="token keyword">let</span> arr3<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'str\'</span><span class="token punctuation">,</span> <span class="token string">\'str\'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n\n<span class="token comment">// 使用接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">arr</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>index<span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> number\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> list<span class="token operator">:</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\n\n<span class="token comment">// 使用范型</span>\n<span class="token keyword">let</span> arrF<span class="token operator">:</span> <span class="token known-class-name class-name">Array</span><span class="token operator">&lt;</span>number<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>\n\n</code></pre>\n<p>4.配置</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n    <span class="token string">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 不报告执行不到的代码错误。</span>\n        <span class="token string">"allowUnreachableCode"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 必须标注为null类型,才可以赋值为null</span>\n        <span class="token string">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 严格模式, 强烈建议开启</span>\n        <span class="token string">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 支持别名导入:</span>\n        <span class="token comment">// import * as React from "react"</span>\n        <span class="token string">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 目标js的版本</span>\n        <span class="token string">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 目标代码的模块结构版本</span>\n        <span class="token string">"module"</span><span class="token operator">:</span> <span class="token string">"es6"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 在表达式和声明上有隐含的 any类型时报错。</span>\n        <span class="token string">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 删除注释</span>\n        <span class="token string">"removeComments"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 保留 const和 enum声明</span>\n        <span class="token string">"preserveConstEnums"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token comment">// 生成sourceMap    </span>\n        <span class="token string">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 目标文件所在路径</span>\n        <span class="token string">"outDir"</span><span class="token operator">:</span> <span class="token string">"./lib"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 编译过程中需要引入的库文件的列表</span>\n        <span class="token string">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">"dom"</span><span class="token punctuation">,</span>\n            <span class="token string">"es7"</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token comment">// 额外支持解构/forof等功能</span>\n        <span class="token string">"downlevelIteration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 是否生成声明文件</span>\n        <span class="token string">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 声明文件路径</span>\n        <span class="token string">"declarationDir"</span><span class="token operator">:</span> <span class="token string">"./lib"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 此处设置为node,才能解析import xx from \'xx\'</span>\n        <span class="token string">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// 入口文件</span>\n    <span class="token string">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"src/main.ts"</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="%E6%A6%82%E8%BF%B0">概述<a class="anchor" href="#%E6%A6%82%E8%BF%B0">§</a></h3>\n<p>TS -&gt; typescript  javascript 的超集，微软出品，扩充javascript对类型判断和报错提示的不足。</p>\n<h3 id="%E5%BC%80%E6%92%B8%E4%BB%A3%E7%A0%81">开撸代码<a class="anchor" href="#%E5%BC%80%E6%92%B8%E4%BB%A3%E7%A0%81">§</a></h3>\n<p>1.interface - &gt; 接口</p>\n<pre class="language-javascript"><code class="language-javascript"> <span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>\n   num<span class="token operator">:</span> number<span class="token punctuation">,</span>\n   str<span class="token operator">:</span> string\n <span class="token punctuation">}</span>\n <span class="token keyword">let</span> obj<span class="token operator">:</span><span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token string">\'456\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>2.联合类型</p>\n<pre class="language-javascript"><code class="language-javascript"> <span class="token keyword">let</span> numOrStr<span class="token operator">:</span> number<span class="token operator">|</span>string <span class="token operator">=</span> <span class="token number">123</span>\n</code></pre>\n<p>tip: 实在预测不到类型的可以直接使用 any</p>\n<p>3.定义数组</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// 纯数字类型</span>\n<span class="token keyword">let</span> arr<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> \n<span class="token comment">// 纯字符串类型</span>\n<span class="token keyword">let</span> arr2<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'str\'</span><span class="token punctuation">,</span> <span class="token string">\'str\'</span><span class="token punctuation">,</span> <span class="token string">\'str\'</span><span class="token punctuation">]</span>\n<span class="token comment">// 混合类型</span>\n<span class="token keyword">let</span> arr3<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'str\'</span><span class="token punctuation">,</span> <span class="token string">\'str\'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n\n<span class="token comment">// 使用接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">arr</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>index<span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> number\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> list<span class="token operator">:</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>\n\n<span class="token comment">// 使用范型</span>\n<span class="token keyword">let</span> arrF<span class="token operator">:</span> <span class="token known-class-name class-name">Array</span><span class="token operator">&lt;</span>number<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>\n\n</code></pre>\n<p>4.配置</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n    <span class="token string">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 不报告执行不到的代码错误。</span>\n        <span class="token string">"allowUnreachableCode"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 必须标注为null类型,才可以赋值为null</span>\n        <span class="token string">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 严格模式, 强烈建议开启</span>\n        <span class="token string">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 支持别名导入:</span>\n        <span class="token comment">// import * as React from "react"</span>\n        <span class="token string">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 目标js的版本</span>\n        <span class="token string">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 目标代码的模块结构版本</span>\n        <span class="token string">"module"</span><span class="token operator">:</span> <span class="token string">"es6"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 在表达式和声明上有隐含的 any类型时报错。</span>\n        <span class="token string">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 删除注释</span>\n        <span class="token string">"removeComments"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 保留 const和 enum声明</span>\n        <span class="token string">"preserveConstEnums"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token comment">// 生成sourceMap    </span>\n        <span class="token string">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 目标文件所在路径</span>\n        <span class="token string">"outDir"</span><span class="token operator">:</span> <span class="token string">"./lib"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 编译过程中需要引入的库文件的列表</span>\n        <span class="token string">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">"dom"</span><span class="token punctuation">,</span>\n            <span class="token string">"es7"</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token comment">// 额外支持解构/forof等功能</span>\n        <span class="token string">"downlevelIteration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 是否生成声明文件</span>\n        <span class="token string">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// 声明文件路径</span>\n        <span class="token string">"declarationDir"</span><span class="token operator">:</span> <span class="token string">"./lib"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 此处设置为node,才能解析import xx from \'xx\'</span>\n        <span class="token string">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// 入口文件</span>\n    <span class="token string">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"src/main.ts"</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%A6%82%E8%BF%B0" }, "\u6982\u8FF0")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%BC%80%E6%92%B8%E4%BB%A3%E7%A0%81" }, "\u5F00\u64B8\u4EE3\u7801")))),
    'author': "Peng",
    'contributors': [
        "wangpeng022"
    ],
    'date': "2021/03/30",
    'updated': null,
    'excerpt': "概述 TS -> typescript javascript 的超集，微软出品，扩充javascript对类型判断和报错提示的不足。 开撸代码 1.interface - > 接口 interface A { num: number, str: string } let obj:A = {a:123,b:'456'}; 2.联合类型 let n...",
    'cover': undefined,
    'categories': [
        "TS"
    ],
    'tags': [
        "TS"
    ],
    'blog': {
        "isPost": true,
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
