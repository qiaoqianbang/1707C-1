import React from 'react'
import { Route,Redirect,Switch } from "react-router-dom";
export default (props:{routers:any[]})=>{
    return <Switch>
            {
                props.routers.map((item:any,index:number)=>{
                    if(item.redirect){
                        return <Redirect from={item.path} exact to={item.redirect} key={index}/>
                    }else{
                        return <Route path={item.path} render={props=>{
                            if(item.children){
                                return <item.component routers={item.children} {...props} ></item.component>
                            }else{
                                return <item.component {...props}></item.component>
                            }
                        }} key={index}>

                        </Route>
                    }
                })
            }
        </Switch>
}