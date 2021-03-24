/*
 * @Descripttion:
 * @version:
 * @Author: 王鹏
 * @Date: 2021-03-23 17:37:15
 * @LastEditors: 王鹏
 * @LastEditTime: 2021-03-24 09:18:31
 */
export default {
    theme: 'blog',
    root: '/dist/',
    title: '我的博客',
    description: '个人博客',
    srcDir: 'blog',
    plugins: ['blog'],
    blog: {
        root: '/posts/',
        author: 'wangpeng',
        social: {
            github: 'https://github.com/wangpeng022',
            email: 'wangpeng022@sina.cn',
        },
    },
    nav: [
        {
            text: '首页',
            link: '/',
            icon: 'czs-home-l',
        },
        {
            text: '分类',
            link: '/categories/',
            icon: 'czs-category-l',
        },
        {
            text: '标签',
            link: '/tags/',
            icon: 'czs-tag-l',
        },
        {
            text: '关于',
            link: '/about/',
            icon: 'czs-about-l',
        },
        {
            text: '归档',
            link: '/archives/',
            icon: 'czs-box-l',
        },
        {
            text: '友情链接',
            link: '/links/index.html',
            icon: 'czs-link-l',
        },
    ],
};
