import getViews from '../pages/index'

const routes=[
    {
        path:'/home',
        component:getViews('Home'),
        title:'首页',
        children:[
            {
                path:'/home/index',
                component:getViews('Home/Index'),
                title:'首页'
            },
            {
                path:'/home/my',
                component:getViews('Home/My'),
                title:'我的'
            }
        ]
    },
    {
        path:'/votelist',
        component:getViews('VoteList'),
        title:'投票列表'
    },
    {
        path:'/createvote',
        component:getViews('CreateVote'),
        title:'创建投票'
    },
    {
        path:'/changepassword',
        component:getViews('ChangePassword'),
        title:'忘记密码'
    },
    {
        path:'/login',
        component:getViews('Login'),
        title:'登录'
    },
    {
        path:'/registry',
        component:getViews('Registry'),
        title:'注册'
    },
    {
        path:"/",
        redirect:'/home/index',
        title:'首页'
    }
]

export default routes