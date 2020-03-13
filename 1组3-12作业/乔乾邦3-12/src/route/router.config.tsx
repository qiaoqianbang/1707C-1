import getviews from '../views/index.js';
export default [
    {
        path: '/',
        redirect: '/home/index',
        title: '首页',
    },
    {
        path: '/home',
        title: 'home',
        component: getviews('Home'),
        children: [
            {
                path: '/home/index',
                title: 'Index',
                component: getviews('Home/Index'),
            },
            {
                path: '/home/my',
                title: 'my',
                component: getviews('Home/My'),
            },
        ],
    },
    {
        path: '/login',
        title: 'login',
        component: getviews('Login'),
    },
    {
        path: '/register',
        title: 'register',
        component: getviews('Register'),
    },
    {
        path: '/createvote',
        title: 'createvote',
        component: getviews('CreateVote'),
    },
    {
        path: '/votelist',
        title: 'votelist',
        component: getviews('VoteList'),
    },
    {
        path: '/changepaw',
        title: 'changepaw',
        component: getviews('ChangePassword'),
    },
];
