import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

export default function routerView(props){
    return <Switch>
        {
            props.routers.map((item,index)=>{
                if(!item.path)return <Redirect key={index} from={item.from} to={item.to}></Redirect>
                return <Route key={index} path={item.path} render={mes=><item.component {...mes} routers={item.children}/>}></Route>
            })
        }
    </Switch>
}