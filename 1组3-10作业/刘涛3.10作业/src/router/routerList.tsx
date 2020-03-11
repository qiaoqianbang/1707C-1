import importAll from '../view/index';
// import Home from '../view/home/index';
// console.log(importAll('home'));
// console.log(importAll('login'));
export default [
    {
        path: '/index',
        component: importAll('home'),
        children: [
            {
                path: '/index/home',
                component: importAll('index'),
            },
            {
                path: '/index/mylogin',
                component: importAll('login'),
            },
            {
                path: '/index/mylogined',
                component: importAll('logined'),
            },
        ],
    },
    {
        path: '/login',
        component: importAll('login'),
    },
    {
        path: '/register',
        component: importAll('register'),
    },
    {
        path: '/ChangePassword',
        component: importAll('ChangePassword'),
    },
    {
        path: '/createdvoid',
        component: importAll('createdvoid'),
    },
    {
        path: '/votdList',
        component: importAll('votdList'),
    },
];
