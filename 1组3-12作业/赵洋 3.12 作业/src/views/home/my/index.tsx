import React, { Component } from 'react'
import history from 'history'
interface Iprops{
    props:any,
    history:any
}
export default class My extends Component <Iprops> {
    hendleClick =()=>{
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                wode
                <button onClick={()=>{this.hendleClick()}}>登录</button>
            </div>
        )
    }
}
