import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RouterViews from '../../router/router.views'
interface Iprops{
    routers:any
}
export default class Index extends Component <Iprops> {
    render() {
        return (
            <div className='home'>
                <div className='home_main'>
                    <RouterViews routers={this.props.routers}></RouterViews>
                </div>
                <div className='home_footer'>
                    <NavLink to='/home/findex'>首页</NavLink>
                    <NavLink to='/home/my'>我的</NavLink>
                </div>
            </div>
        )
    }
}
