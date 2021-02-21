module.exports={
    base:'/q-ui',
    title:'轻UI',
    description:'一个简单好用的 UI 组件库',
    themeConfig:{
        displayAllHeaders: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            { text: 'GitHub', link: 'https://github.com/wh2887/init-ui/' },
        ],
        sidebar:[
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-start/',
                ]

            },
            {
              title: '组件',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/popover',
                    '/components/toast',
                    '/components/collapse',
                ],
            },
        ],
    },
}
