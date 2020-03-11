import Login from '../pages/Home/My/login/index';
import ChangePassword from '../pages/ChangePassword'
import CreateVote from '../pages/CreateVote/index'
// import ChangePassword from '../pages/Home/Index/index'
import Logins from '../pages/Home/My/logined/index'
import Registry from '../pages/Registry/index'
import VoteList from '../pages/VoteList/index'

const routers=[{
    path:'/login',
    component:Login
},{
    path:'/ChangePassword',
    component:ChangePassword
},{
    path:'/CreateVote',
    component:CreateVote
},{
    path:'/logins',
    component:Logins
},{
    path:'/registry',
    component:Registry
},{
    path:'/voteList',
    component:VoteList
},{
    from:'/',
    to:'/home'
}]
export default routers