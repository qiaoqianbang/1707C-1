import React, { Component } from 'react';
interface IProps {
    history: any;
}
interface Istate {
    title: string;
}
export default class My extends Component<IProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
        };
    }
    Topage(param: string) {
        let url;
        switch (param) {
            case 'login':
                url = '/login';
                break;
            case 'create':
                url = '/createvote';
                break;
            case 'list':
                url = '/votelist';
                break;
            default:
                return;
        }
        this.props.history.push(url);
    }
    render() {
        return (
            <div>
                <div onClick={() => this.Topage('login')}>登陆|注册</div>
                <div>------------</div>
                <div onClick={() => this.Topage('create')}>创建投票</div>
                <div>---------------</div>
                <div onClick={() => this.Topage('list')}>投票列表</div>
            </div>
        );
    }
}
