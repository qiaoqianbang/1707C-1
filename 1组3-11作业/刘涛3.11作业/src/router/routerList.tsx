import getViews from '../views/getall';

export default [
    {
        path: '/home',
        component: getViews('Home'),
        children: [
            {
                path: '/home/index',
                component: getViews('Home/Index'),
            },
            {
                path: '/home/my',
                component: getViews('Home/My'),
            },
        ],
    },
];
