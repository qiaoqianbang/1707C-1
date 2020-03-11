import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入手机号"/>
                <input type="text" placeholder="请输入密码"/>
                <button type="button">登录</button>
            </div>
        )
    }
}
