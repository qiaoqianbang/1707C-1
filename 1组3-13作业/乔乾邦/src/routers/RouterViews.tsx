import *as React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {Iprops,Iitem,Iitemred} from './index.d'

export default class RouterViews extends React.Component<Iprops> {
    render() {
        let {routes}=this.props;
        let newRoutes=routes.filter((item:Iitem)=>!item.redirect)
        let redirect=routes.filter((item:Iitem)=>item.redirect)
        return (
           <Switch>
               {
                    newRoutes.map((item:Iitem)=><Route key={item.path} path={item.path} 
                    render={(props)=>{
                        if(item.children){
                            return <item.component {...props} routes={item.children}></item.component>
                        }else{
                            return <item.component {...props} ></item.component>
                        }
                    }}></Route>
                    )
               }
               {
                   redirect.map((item:Iitemred)=><Redirect key={item.path} from={item.path} to={item.redirect}></Redirect>)
               }
           </Switch>
        )
    }
}
