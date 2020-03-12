import React, { Component } from 'react';

export default class My extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
        };
    }

    render() {
        return (
            <div>
                <div>登陆|注册</div>
                <div>------------</div>
                <div>创建投票</div>
                <div>---------------</div>
                <div>投票列表</div>
            </div>
        );
    }
}
