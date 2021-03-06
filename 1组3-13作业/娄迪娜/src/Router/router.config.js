import getViews from '../page/index'

let routers=[
    {
        path:"/login",
        component:getViews("Login"),
        title:"登录"
    },
    
    {
        path:"/home",
        title:"首页",
        component:getViews("Home"),
        children:[
            {
                path:'/home/index',
                title:'首页',
                component:getViews('Home/Index')
            },
            {
                path:'/home/my',
                title:'我的',
                component:getViews('Home/My')
            }
        ]
    },
    {
        path:'/registry',
        component:getViews('Registry'),
        title:'注册'
    },
    {
        path:'/changePassword',
        component:getViews('ChangePassword'),
        title:'忘记密码'
    },
    {
        path:'/createVote',
        component:getViews('CreateVote'),
        title:'创建投票'
    },
    {
        path:'/voteList',
        component:getViews('VoteList'),
        title:'投票列表'
    },{
        path:"/",
        redirect:'/home/index',
        title:"首页"
    }
]
export default routers