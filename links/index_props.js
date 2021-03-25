import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "links/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "links/index.html",
    'title': "友情链接",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Descripttion: \n * @version: \n * @Author: 王鹏\n * @Date: 2021-03-23 17:37:15\n * @LastEditors: 王鹏\n * @LastEditTime: 2021-03-25 08:28:30\n-->\n<h1>友情链接</h1>\n<p>1\n2\n3</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<!--\n * @Descripttion: \n * @version: \n * @Author: 王鹏\n * @Date: 2021-03-23 17:37:15\n * @LastEditors: 王鹏\n * @LastEditTime: 2021-03-25 08:28:30\n-->\n<h1>友情链接</h1>\n<p>1\n2\n3</p>'
        } }),
    'toc': null,
    'author': "wangpeng022@sina.cn",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021-03-25T05:48:29.000Z",
    'updated': null,
    'excerpt': "友情链接 1 2 3",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
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
            }
        ],
        "tags": [
            {
                "name": "其他",
                "count": 2
            }
        ]
    }
};
