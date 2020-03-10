import React, { Component } from 'react';
import axios from 'axios';
import '../mock/index';
import { connect } from 'react-redux';
class home extends Component {
    state = {
        type: 'hot',
        index: 0,
    };
    change(type, k) {
        this.setState({ type, index: k });
    }
    add(item) {
        const { setState, List } = this.props;
        let index = List.findIndex(i => i.name === item.name);
        List[index].num++;
        setState('List', JSON.parse(JSON.stringify(List)));
    }
    jain(item) {
        const { setState, List } = this.props;
        let index = List.findIndex(i => i.name === item.name);
        if (List[index].num > 0) {
            List[index].num--;
        } else {
            List[index].num = 0;
        }
        setState('List', JSON.parse(JSON.stringify(List)));
    }
    render() {
        const { List } = this.props;
        let count = 0;
        let left = List.filter(i => i.flag);
        let right = List.filter(i => !i.flag);
        right.forEach(i => {
            count += i.price * i.num;
        });
        return (
            <div className="home">
                <div className="head">
                    <span>点菜</span>
                    <span>评价</span>
                    <span>商家</span>
                </div>
                <div className="content">
                    <div className="left">
                        {left.map((i, k) => {
                            return (
                                <span
                                    key={k}
                                    onClick={() => this.change(i.type, k)}
                                    className={this.state.index === k ? 'active' : ''}
                                >
                                    {i.name}
                                </span>
                            );
                        })}
                    </div>
                    <div className="right">
                        {right
                            .filter(i => i.type === this.state.type)
                            .map((i, k) => {
                                return (
                                    <div key={k} className="item">
                                        <p>
                                            <span>{i.name}</span>
                                        </p>
                                        <p>
                                            价格： <span>{i.price}</span>
                                        </p>
                                        <p>
                                            <button onClick={() => this.jain(i)}>-</button>
                                            <span>{i.num}</span>
                                            <button onClick={() => this.add(i)}>+</button>
                                        </p>
                                    </div>
                                );
                            })}
                        <span>总价：{count}元</span>
                    </div>
                </div>
                <div className="foot">
                    <span>首页</span>
                    <span>订单</span>
                    <span>我的</span>
                </div>
            </div>
        );
    }
    componentDidMount() {
        const { setState } = this.props;
        axios.get('/list').then(res => {
            setState('List', res.data);
        });
    }
}

let mapStateToProps = state => {
    return {
        List: state.List,
        index: state.index,
    };
};
let mapDispatchTOProps = dispatch => {
    return {
        setState(key, value) {
            dispatch({ type: 'SET_STATE', key, value });
        },
    };
};
export default connect(mapStateToProps, mapDispatchTOProps)(home);
