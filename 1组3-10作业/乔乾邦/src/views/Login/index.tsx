import React, { Component } from 'react';
interface IProps {
    history: any;
}
interface Istate {
    title: string;
}
export default class Login extends Component<IProps, Istate> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
        };
    }
    ToChangePwd() {
        this.props.history.push('/changepaw');
    }
    render() {
        return (
            <div>
                login page
                <span onClick={() => this.ToChangePwd()}>忘记密码</span>
            </div>
        );
    }
}
