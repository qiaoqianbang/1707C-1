import React           from 'react';
import Order from '../views/order'
import Evaluate from '../views/evaluate'
import Merchant from '../views/merchant'
import All from '../views/all'

const router=[
    {
        path:'/order',
        component:Order
    },
    {
        path:'/evaluate',
        component:Evaluate
    },{
        path:'/merchant',
        component:Merchant
    },
    // {
    //     path:'/all',
    //     component:All
    // },
    // {
    //     from:'/',
    //     to:'/all'
    // }
]
export default router