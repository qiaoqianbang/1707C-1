import * as React from 'react'
import * as Router from 'react-router-dom' 
import {Props,RouterItem,RouterRedirect} from './index.d'
class RouterView extends React.Component<Props>{
    public render(){
        const {routerConfig}=this.props
        const routerView=routerConfig.filter(item=>!item.redirect)
        const routerRedirect =routerConfig.filter(item=>item.redirect)
        return (
            <Router.Switch>
                {
                    routerView.map((item:RouterItem)=>{
                        return <Router.Route key={item.path} path={item.path} render={(props)=><item.component title={item.title} {...props} routerConfig={item.children}/>}/>
                    }).concat(
                        routerRedirect.map((item:RouterRedirect)=>{
                            return <Router.Redirect key={item.path} path={item.path} to={item.redirect}/>
                        })

                        )
                }
            </Router.Switch>
        )
    }
}

export default RouterView