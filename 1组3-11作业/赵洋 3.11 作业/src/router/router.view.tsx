import * as React from 'react'
import * as Router from 'react-router-dom';
import {Props,RouterRedirect,RouterItem} from './index.d'

class RouterView extends React.Component<Props>{
    public render() {
        const {routerConfig} = this.props
        // console.log(routerConfig,"routerConfig")
        const routerView = routerConfig.filter(item => !item.redirect)
        const routerRedirect = routerConfig.filter(item => item.redirect)
        return (
            <Router.Switch>
                {
                    routerView.map((item:RouterItem)=>{
                        return <Router.Route 
                            key={item.path}
                            path={item.path}
                            render={(props)=>{
                                return <item.component 
                                    title={item.title}
                                    routerConfig={item.children}
                                    {...props}
                                />
                            }}
                        />
                    }).concat(
                        routerRedirect.map((item:RouterRedirect)=>{
                            return <Router.Redirect 
                                key={item.path}
                                from={item.path}
                                to={item.redirect}
                            />
                        })
                    )
                }
            </Router.Switch>
        )
    }
}
export default RouterView