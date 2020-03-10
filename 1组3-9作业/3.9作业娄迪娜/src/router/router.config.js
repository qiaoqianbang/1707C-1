import Home from '../view/Home'
import Adder from '../view/Adder'
import AdderList from '../view/AdderList'

const routers=[
    {
        path:"/home",
        component:Home
    },
    {
        path:"/adder",
        component:Adder
    },{
        path:"/adderlist",
        component:AdderList
    },
    {
        from:'/',
        to:'/home'
    }
]
export default routers