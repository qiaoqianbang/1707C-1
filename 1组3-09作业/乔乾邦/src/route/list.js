import Home from '../views/home';
import List from '../views/list';
import Sub from '../views/sub';
export default [{
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/list',
        name: 'list',
        component: List,
        children: [{
            path: '/list/sub',
            name: 'sub',
            component: Sub,
        }, ],
    },
];