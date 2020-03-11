import getViews from '../page/index'

let routers=[
    {
        path:"/home",
        component:getViews("Home")
    },
    {
        path:"/votelist",
        component:getViews("VoteList")
    },
    {
        from:'/',
        to:'/home'
    }
]
export default routers