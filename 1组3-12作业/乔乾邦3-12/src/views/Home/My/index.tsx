import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import IndexPage from '../Index/index';

interface IProps {
    list: any;
    changeValue: any;
    idnum: any;
}

class My extends Component<IProps> {
    state = {
        InputValue: '',
        callback1: () => true,
        tablist: [
            {
                title: '全部',
                callback: () => true,
            },
            {
                title: '未完成',
                callback: (i: any) => i.flag,
            },
            {
                title: '已完成',
                callback: (i: any) => !i.flag,
            },
        ],
    };

    changeInput(e: any) {
        this.setState({
            InputValue: e.target.value,
        });
    }
    add() {
        if (this.state.InputValue.trim() !== '') {
            const { list, changeValue, idnum } = this.props;
            list.push({
                id: idnum + 1,
                title: this.state.InputValue,
                flag: true,
                count: 0,
            });
            changeValue('list', JSON.parse(JSON.stringify(list)));
            changeValue('idnum', JSON.parse(JSON.stringify(idnum + 1)));
            this.setState({
                InputValue: '',
            });
        }
    }
    Enter(e: any) {
        if (e.which === 13) {
            this.add();
        }
    }
    handle(i: any) {
        const { list, changeValue } = this.props;
        let index = list.findIndex((item: any) => item.id === i.id);
        list[index].flag = !list[index].flag;
        changeValue('list', JSON.parse(JSON.stringify(list)));
    }
    tabShow(callback: any) {
        this.setState({ callback1: callback });
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <p>
                    <Input
                        style={{ width: '70%' }}
                        value={this.state.InputValue}
                        onKeyPress={e => this.Enter(e)}
                        onChange={e => {
                            this.changeInput(e);
                        }}
                    />
                    <Button type="primary" onClick={() => this.add()}>
                        添加
                    </Button>
                </p>
                {list.filter(this.state.callback1).map((i: any, k: any) => {
                    return (
                        <li
                            key={k}
                            className={!i.flag ? 'active' : ''}
                            onClick={() => this.handle(i)}
                        >
                            {k + 1}、 {i.title}
                        </li>
                    );
                })}
                {this.state.tablist.map((i, k) => {
                    return (
                        <Button type="dashed" key={k} onClick={() => this.tabShow(i.callback)}>
                            {i.title}
                        </Button>
                    );
                })}
                <div>登陆|注册</div>
                <div>------------</div>
                <div>创建投票</div>
                <div>---------------</div>
                <div>投票列表</div>
            </div>
        );
    }
}
let a = (state: any) => {
    return {
        list: state.list,
        idnum: state.idnum,
    };
};
let b = (dispatch: any) => {
    return {
        changeValue(key: string, value: any) {
            dispatch({ type: 'CHANGE_VALUE', key, value });
        },
    };
};
export default connect(a, b)(My);
