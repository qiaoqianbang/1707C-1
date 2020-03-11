import Home from '../pages/Home/index'
import Homes from '../pages/Home/Index/index'
import My from '../pages/Home/My/index'
import VoteList from '../pages/VoteList/index'
import ChangePassword from '../pages/ChangePassword/index'
import Login from '../pages/Login/index'
import Registry from '../pages/Registry/index'
import CreateVote from '../pages/CreateVote/index'

const routes=[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/index',
                component:Homes
            },
            {
                path:'/home/my',
                component:My
            }
        ]
    },
    {
        path:'/votelist',
        component:VoteList
    },
    {
        path:'/createvote',
        component:CreateVote
    },
    {
        path:'/change',
        component:ChangePassword
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/registry',
        component:Registry
    },
    {
        from:"/",
        to:'/home'
    }
]

export default routes