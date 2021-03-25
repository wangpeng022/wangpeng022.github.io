import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/2021/使用Pagic.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/使用Pagic.html",
    'title': "使用Pagic",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前言1</h1>\n<p>测试数据</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u524D\u8A001"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>测试数据</p>'
        } }),
    'toc': null,
    'author': "Peng",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021/03/25",
    'updated': null,
    'excerpt': "测试数据",
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
                "excerpt": "测试数据"
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
