import React, { Component } from 'react'
import RouterView from '../../router/RouterView'
import {NavLink} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="header"></div>
                <div className="main">
                    <RouterView routes={this.props.routes}></RouterView>
                </div>
                <div className="footer">
                    <NavLink to="/home/first">首页</NavLink>
                    <NavLink to="/home/order">订单</NavLink>
                    <NavLink to="/home/mine">我的</NavLink>
                </div>
            </div>
        )
    }
}
