import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import router from '../router/router.config'
import RouterView from '../router/router.view'
import {connect} from 'react-redux'

class All extends Component {
    render() {
        return (
            <div className='all'>
                <div className="all-top">
                    <Link to='/order' className='all-item'>点菜</Link>
                    <Link to='/evaluate'  className='all-item'>评价</Link>
                    <Link to='/merchant'  className='all-item'>商家</Link>
                </div>
                <div className="all-center">
                    <RouterView routers={router}></RouterView>
                </div>
                <div className="all-bottom"></div>
            </div>
        )
    }
}
export default All