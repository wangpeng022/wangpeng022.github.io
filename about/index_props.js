import projectConfig from '/dist/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "关于",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>关于</h1>\n<h2 id="%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D">自我介绍<a class="anchor" href="#%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D">§</a></h2>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/dist/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5173\u4E8E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D">自我介绍<a class="anchor" href="#%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D">§</a></h2>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D" }, "\u81EA\u6211\u4ECB\u7ECD")))),
    'author': "wangpeng022@sina.cn",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021-03-24T05:54:09.000Z",
    'updated': null,
    'excerpt': "自我介绍",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/2021/写在开头.md",
                "title": "前言",
                "link": "posts/2021/写在开头.html",
                "date": "2021-03-24T05:54:09.000Z",
                "updated": null,
                "author": "wangpeng022@sina.cn",
                "contributors": [
                    "wangpeng022@sina.cn"
                ],
                "excerpt": "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------..."
            }
        ],
        "categories": [],
        "tags": []
    }
};
