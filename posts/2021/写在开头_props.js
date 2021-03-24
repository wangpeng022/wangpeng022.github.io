import projectConfig from '/dist/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/2021/写在开头.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/写在开头.html",
    'title': "前言",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Descripttion: \n * @version: \n * @Author: 王鹏\n * @Date: 2021-03-23 17:37:15\n * @LastEditors: 王鹏\n * @LastEditTime: 2021-03-24 13:53:54\n-->\n<hr>\n<p>title: 写在开头\nauthor: Peng\ndate: 2021/03/23\ncategories:</p>\n<ul>\n<li>其他\ntags:</li>\n<li>其他</li>\n</ul>\n<hr>\n<h1>前言</h1>\n<p>1\n2\n3</p>\n<p>44</p>\n<p>55</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/dist/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Descripttion: \n * @version: \n * @Author: 王鹏\n * @Date: 2021-03-23 17:37:15\n * @LastEditors: 王鹏\n * @LastEditTime: 2021-03-24 13:53:54\n-->\n<hr>\n<p>title: 写在开头\nauthor: Peng\ndate: 2021/03/23\ncategories:</p>\n<ul>\n<li>其他\ntags:</li>\n<li>其他</li>\n</ul>\n<hr>\n<h1>前言</h1>\n<p>1\n2\n3</p>\n<p>44</p>\n<p>55</p>'
        } }),
    'toc': null,
    'author': "wangpeng022@sina.cn",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021-03-24T05:54:09.000Z",
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
