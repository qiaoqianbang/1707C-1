import Home from '../views/Home/index.tsx';
import Index from '../views/Home/Index/index.tsx';
import My from '../views/Home/My/index.tsx';
import Login from '../views/Login/index.tsx';
import Register from '../views/Register/index.tsx';
import CreateVote from '../views/CreateVote/index.tsx';
import VoteList from '../views/VoteList/index.tsx';
import ChangePassword from '../views/ChangePassword/index.tsx';
export default [{
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
                path: '/home/index',
                name: 'Index',
                component: Index,
            },
            {
                path: '/home/my',
                name: 'my',
                component: My,
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/createvote',
        name: 'createvote',
        component: CreateVote,
    },
    {
        path: '/votelist',
        name: 'votelist',
        component: VoteList,
    },
    {
        path: '/changepaw',
        name: 'changepaw',
        component: ChangePassword,
    },
];