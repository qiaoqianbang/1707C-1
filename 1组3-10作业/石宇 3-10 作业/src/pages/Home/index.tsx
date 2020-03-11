import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import RouterView from '../../router/RouterView'

export default class Index extends Component {
    render() {
        const { routes }:any=this.props
        return (
            <div>
                <RouterView routes={routes}></RouterView>
                <div className="footer">
                    <NavLink to="/home/index">首页</NavLink>
                    <NavLink to="/home/my">我的</NavLink>
                </div>
            </div>
        )
    }
}
