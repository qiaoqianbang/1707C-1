import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

export default function RouterView(props){
    return <div>
        {
            props.routers.map((item,key)=>{
                if(!item.path) return <Redirect key={key} from={item.from} to={item.to}></Redirect>
                return <Route  key={key}  path={item.path} render={ mes=><item.component {...mes} routers={item.children}/>}></Route>
            })
        }
    </div>
}