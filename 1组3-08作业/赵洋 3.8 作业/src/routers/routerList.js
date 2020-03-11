import Dashboard from '../view/dashboard'
import SubAccount from '../view/subAccount' //分账票房
import Synthesize from '../view/synthesize' //综合票房
const RouterConfig =[
    {
        path:'/dashboard',
        component:Dashboard,
        children:[
            {
                path:'/dashboard/subAccount',
                component:SubAccount,
                
            },
            {
                path:'/dashboard/synthesize',
                component:Synthesize,
            },
            {
                from:'/dashboard',
                to:'/dashboard/subAccount'
            }
        ]
    },
    {
        from:'/',
        to:'/dashboard'
    }
]
export default RouterConfig