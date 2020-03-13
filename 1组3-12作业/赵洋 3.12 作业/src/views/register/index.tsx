import React, { Component } from 'react'
import history from 'history'
interface Iprops{
    history:any,
    props:any
}
export default class Register extends Component <Iprops> {
    render() {
        return (
            <div className='register'>
                <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583948172544&di=b901940983cc822cbf07b965ce1730e4&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F77%2F89%2F01300000532602129089890723071.jpg'/>
                <input type='text' placeholder='  手机号'/>
                <input type='text' placeholder='  用户名'/>
                <input type='text' placeholder='  密码'/>
                <button>注 册</button>
            </div>
        )
    }
}
