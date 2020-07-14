export default [
    {
        path: '/',
        component: '../layouts/BlankLayout',
        routes: [
            { path: '/', redirect: '/index' },
            { path: '/index', component: '../pages/index' },
            {
                path: '/demoTest',
                name: 'DemoTest',
                component: '../pages/DemoTest',
                title: 'Demo',
            },
        ],
    },
];
