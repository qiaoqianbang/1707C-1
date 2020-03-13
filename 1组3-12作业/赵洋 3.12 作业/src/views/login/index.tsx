import React, { Component } from 'react'
import history from 'history'
interface Iprops{
    history:any,
    props:any
}
export default class Login extends Component <Iprops> {
    goForget =()=>{
        this.props.history.push('/forgetPassword')
    }
    goRegister =()=>{
        this.props.history.push('/register')
    }
    render() {
        return (
            <div className='login'>
                <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583948172544&di=b901940983cc822cbf07b965ce1730e4&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F77%2F89%2F01300000532602129089890723071.jpg'/>
                <input type='text' placeholder='  请输入用户名'/>
                <input type='text' placeholder='  请输入密码'/>
                <button>登 录</button>
                <p><span onClick={()=>{this.goForget()}}>忘记密码</span><span onClick={()=>{this.goRegister()}}>快速注册</span></p>
            </div>
        )
    }
}
