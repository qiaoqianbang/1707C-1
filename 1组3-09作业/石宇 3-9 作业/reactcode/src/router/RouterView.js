import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
//路由组件
export default function(props){
    let {routes}=props
    return <Switch>
        {
            routes.map((v,i)=>{
                if(v.from!==undefined) return <Redirect key={i} from={v.from} to={v.to}></Redirect>
                return <Route key={i} path={v.path} render={message=> <v.component {...message} routes={v.children}></v.component>}></Route>
            })
        }
    </Switch>
}