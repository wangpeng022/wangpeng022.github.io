import projectConfig from '/dist/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "categories/README.md",
    'layoutPath': "categories/_layout.tsx",
    'outputPath': "categories/index.html",
    'title': "分类",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>分类</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/dist/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5206\u7C7B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "wangpeng022@sina.cn",
    'contributors': [
        "wangpeng022@sina.cn"
    ],
    'date': "2021-03-24T05:54:09.000Z",
    'updated': null,
    'excerpt': "",
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
