//二级路由
import React, { Component } from 'react';
import RouterViews from '../../route/router.views';
import { NavLink } from 'react-router-dom';
//抽离接口
interface HomeProps {
    //定义接口的时候，接口首字母必须大写
    title: string;
    routerConfig: any[];
}
export default class Home extends Component<HomeProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div className="content">
                    <RouterViews routerConfig={this.props.routerConfig} />
                </div>
                <div className="foot">
                    <NavLink to="/home/index">首页</NavLink>
                    <NavLink to="/home/my">我的</NavLink>
                </div>
            </div>
        );
    }
}
