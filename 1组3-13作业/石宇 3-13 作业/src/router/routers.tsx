import * as React from 'react'
import {BrowserRouter,Switch,Redirect,Route} from 'react-router-dom'
import Home from '../view/home/index'
import Login from '../view/login/index'
import Detail from '../view/detail/index'
import Singer from '../view/singer/index'
export default class routers extends React.Component {
    render() {
        return <BrowserRouter>
             <Switch>
                 <Route path='/home' component={Home}></Route>
                 <Route path='/login' component={Login}></Route>
                 <Route path='/detail' component={Detail}></Route>
                 <Route path='/singer' component={Singer}></Route>
                 <Redirect from='/' to='/login'></Redirect>
             </Switch>
        </BrowserRouter>
    }
}

