import Home from '../views/Home/index'
import Index from '../views/Home/Index/index'
import My from '../views/Home/My/index'
import Menu from '../views/Home/Menu/index'
import Detail from '../views/Detail/index'
import Zf from '../views/Zf/index'
import AddrList from '../views/AddrList/index'


const routes:any=[
    {
        path:"/home",
        component:Home,
        title:'首页',
        children:[
            {
                path:"/home",
                redirect:"/home/index"
            },{
                path:"/home/index",
                component:Index,
                title:'首页'
            },{
                path:"/home/menu",
                component:Menu,
                title:'菜单'
            },{
                path:"/home/my",
                component:My,
                title:'我的'
            }
        ]
    },
    {
        path:"/detail",
        component:Detail,
        title:'详情'
    },
    {
        path:"/Zf",
        component:Zf,
        title:'支付'
    },
    {
        path:"/addrList",
        component:AddrList,
        title:'地址列表'
    }, {
        path:"/",
        redirect:"/home"
    }
]


export default routes;