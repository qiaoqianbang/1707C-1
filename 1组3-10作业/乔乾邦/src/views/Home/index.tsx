//二级路由
import React, { Component } from 'react';
import Map from '../../route/map.jsx';
interface IProps {
    routes: any[];
    history: any;
}
interface Istate {
    title: any;
}
export default class Home extends Component<IProps, Istate> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
        };
    }
    ToMy(param: string) {
        let url = '/home/index';
        if (param === 'my') {
            url = '/home/my';
        }
        this.props.history.push(url);
    }
    render() {
        return (
            <div className="home">
                <div className="content">
                    <Map routes={this.props.routes} />
                </div>
                <div className="foot">
                    <span onClick={() => this.ToMy('index')}>首页</span>
                    <span onClick={() => this.ToMy('my')}>我的</span>
                </div>
            </div>
        );
    }
}
