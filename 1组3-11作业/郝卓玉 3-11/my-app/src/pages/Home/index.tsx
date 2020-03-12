import React, { Component } from 'react'
import * as Router from 'react-router-dom'
import RouterView from '../../router/router.view'
interface HomeProps{
    title:string,
    routerConfig:any[]
}
export default class index extends Component<HomeProps>{
    render() {
        return (
            <div>
                <main>
                    <RouterView routerConfig={this.props.routerConfig}/>
                </main> 
                <footer>
                    <Router.NavLink to={'/home/index'}>首页</Router.NavLink>
                    <Router.NavLink to={'/home/my'}>我的</Router.NavLink>
                </footer>
            </div>
        )
    }
}
