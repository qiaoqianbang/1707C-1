import React, { Component } from 'react'
import {Redirect,Route} from 'react-router-dom'
import Home from '../views/Home/index'

export default class index extends Component {
    render() {
        return (
            <div>
                <Route path='/home' component={Home}/>
                <Redirect from='/' to='/home'/>
            </div>
        )
    }
}
