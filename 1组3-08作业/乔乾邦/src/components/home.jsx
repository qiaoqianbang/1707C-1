import React, { Component } from 'react';
import Detail from './detail';
import Count from './count';
import List from './list';

export default class Home extends Component {
    state = {
        item: null,
        type: '',
        num: 0,
    };
    saveitem(param, type) {
        this.setState({
            item: param,
            type,
        });
    }
    savenum(num) {
        let count = 0;
        num.forEach(i => {
            count += i.ticket * 1;
        });
        this.state.num = count;
    }
    render() {
        return (
            <div className="home">
                <div className="left">
                    <Detail item={this.state.item} type={this.state.type} />
                    <Count num={this.state.num} type={this.state.type} />
                </div>
                <List Save={this.saveitem.bind(this)} Num={this.savenum.bind(this)} />
            </div>
        );
    }
}
