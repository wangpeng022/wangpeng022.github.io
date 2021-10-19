import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/node/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/node/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "node",
    'content': null,
    'blog': {
        "isPost": false,
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
