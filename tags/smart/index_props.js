import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/smart/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/smart/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "smart",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/smart/sound.md",
                "title": "很有意思的一段代码",
                "link": "posts/smart/sound.html",
                "date": "2021/04/20",
                "updated": null,
                "author": "Peng",
                "contributors": [
                    "wangpeng022@sina.cn"
                ],
                "categories": [
                    "smart"
                ],
                "tags": [
                    "smart"
                ],
                "excerpt": "直接上代码 const audioCtx = new (window.AudioContext || window.webkitAudioContext)() const observer = new MutationObserver(function(mutationsList) { const oscillator = audioCtx.createOscillator() oscillator.con..."
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
                "name": "jenkins",
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
                "name": "jenkins",
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
        ]
    }
};
