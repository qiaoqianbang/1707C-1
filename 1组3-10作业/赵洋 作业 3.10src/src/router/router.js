import Home from '../views/home/home'
import Login from '../views/login/login'
import Registry from '../views/registry/registry'
import First from '../views/home/first/first'
import My from '../views/home/my/my'
export default [
    {
        path:'/home',
        name:'home',
        component:Home,
        children:[
            {
                path:'/first',
                name:'first',
                component:First
            },
            {
                path:'/my',
                name:'my',
                component:My
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login 
    },
    {
        path:'/registry',
        name:'registry',
        component:Registry
    },
]
