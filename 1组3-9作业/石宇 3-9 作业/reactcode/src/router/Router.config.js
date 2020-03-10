import Home from '../views/home/home'
import First from '../views/home/first'
import Order from '../views/home/order'
import Mine from '../views/home/mine'
import Detail from '../views/detail'
import Address from '../views/address'

const routes=[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/first',
                component:First
            },
            {
                path:'/home/order',
                component:Order
            },
            {
                path:'/home/mine',
                component:Mine
            },
            {
                from:'/home',
                to:'/home/first'
            }
        ]
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/address',
        component:Address
    },
    {
        from:'/',
        to:'/home'
    }
]

export default routes