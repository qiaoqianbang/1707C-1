import React, { Component } from 'react'
import * as Router from 'react-router-dom'
import RouterView from '../../router/RouterView'

interface HomeProps{
    title:string,
    routerConfig:any[]
}

export default class Index extends Component<HomeProps> {
    render() {
        return (
            <div>
                <RouterView routerConfig={this.props.routerConfig}></RouterView>
                <div className="footer">
                    <Router.NavLink to="/home/index">首页</Router.NavLink>
                    <Router.NavLink to="/home/my">我的</Router.NavLink>
                </div>
            </div>
        )
    }
}
