import React, { Component } from 'react'
import history from 'history'
interface Iprops{
    history:any,
    props:any
}
export default class ForgetPassword extends Component <Iprops> {
    render() {
        return (
            <div className='forgetPassword'>
            <p>输入已绑定的手机号</p>
            <input type='text' placeholder='  手机号'/>
            <input type='text' placeholder='  短信验证码'/>
            <input type='text' placeholder='  新密码'/>
            <button>确 定</button>
        </div>
        )
    }
}
