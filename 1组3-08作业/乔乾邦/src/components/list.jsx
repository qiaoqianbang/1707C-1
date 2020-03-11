import React, { Component } from 'react';
import axios from 'axios';
import '../mock/index';
export class list extends Component {
    state = {
        defaultIndex: 0,
        tabList: ['综合票房', '分账票房'],
        List: [],
    };
    //tab切换高亮
    changeIndex(k) {
        this.setState({ defaultIndex: k });
        axios.get('/list').then(res => {
            this.setState({
                List: res.data[k],
            });
        });
    }
    save(data) {
        const { defaultIndex, tabList } = this.state;
        this.props.Save(data, tabList[defaultIndex]);
    }

    render() {
        const { defaultIndex, List, tabList } = this.state;
        this.props.Num(List);
        return (
            <div className="list">
                <div className="tab">
                    {this.state.tabList.map((i, k) => {
                        return (
                            <span
                                className={defaultIndex === k ? 'active' : ''}
                                key={k}
                                onClick={() => this.changeIndex(k)}
                            >
                                {i}
                            </span>
                        );
                    })}
                </div>
                <div className="title">
                    <span>电影名</span>
                    <span className="left_span">票房</span>
                </div>
                {List.sort((a, b) => a.ticket - b.ticket).map((i, k) => {
                    return (
                        <div key={k} className="content" onClick={() => this.save(i)}>
                            <span> {i.name}</span>---
                            <span> {i.ticket}</span>
                        </div>
                    );
                })}
            </div>
        );
    }

    //模拟数据
    componentDidMount() {
        axios.get('/list').then(res => {
            //console.log(res.data[this.state.defaultIndex]);
            this.setState({
                List: res.data[window.localStorage.getItem('index') || 0],
            });
        });
    }
}

export default list;
