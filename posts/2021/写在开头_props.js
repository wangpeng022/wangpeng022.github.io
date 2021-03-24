import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/2021/写在开头.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/写在开头.html",
    'title': "前言",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Descripttion: \n * @version: \n * @Author: 王鹏\n * @Date: 2021-03-23 17:37:15\n * @LastEditors: 王鹏\n * @LastEditTime: 2021-03-24 14:17:23\n-->\n<hr>\n<p>title: 写在开头\nauthor: Peng\ndate: 2021/03/23\ncategories:</p>\n<ul>\n<li>其他\ntags:</li>\n<li>其他</li>\n</ul>\n<hr>\n<h1>前言</h1>\n<p>测试数据</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Descripttion: \n * @version: \n * @Author: 王鹏\n * @Date: 2021-03-23 17:37:15\n * @LastEditors: 王鹏\n * @LastEditTime: 2021-03-24 14:17:23\n-->\n<hr>\n<p>title: 写在开头\nauthor: Peng\ndate: 2021/03/23\ncategories:</p>\n<ul>\n<li>其他\ntags:</li>\n<li>其他</li>\n</ul>\n<hr>\n<h1>前言</h1>\n<p>测试数据</p>'
        } }),
    'toc': null,
    'author': "wangpeng022@sina.cn",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021-03-24T06:17:37.000Z",
    'updated': null,
    'excerpt': "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------...",
    'cover': undefined,
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2021/写在开头.md",
                "title": "前言",
                "link": "posts/2021/写在开头.html",
                "date": "2021-03-24T06:17:37.000Z",
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
