import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "categories/npm/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "categories/npm/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "npm",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
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
