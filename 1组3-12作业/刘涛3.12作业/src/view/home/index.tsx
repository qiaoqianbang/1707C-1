import React, { Component } from 'react';
import { connect } from 'react-redux';
interface Props {
    setdate: (key: string, value: any) => void;
    delete: (id: number) => void;
    list: any;
    count: number;
}
interface States {
    user: any;
    data: any;
}
class Home extends Component<Props, States> {
    state = {
        user: '',
        data: [],
    };
    ChangeState = (list: any) => {
        this.setState({
            data: list,
        });
    };
    Filter = (flag: any) => {
        let arr = [];
        if (!flag) {
            arr = this.props.list.filter((item: any) => !item.flag);
            this.ChangeState(arr);
            return;
        }
        arr = this.props.list.filter((item: any) => item.flag);
        this.ChangeState(arr);
    };
    componentDidMount() {
        this.ChangeState(this.props.list);
    }
    all = () => {
        let arr = this.props.list;
        this.props.setdate('list', arr);
    };
    coding = () => {
        this.Filter(false);
    };
    errors = () => {
        this.Filter(true);
    };
    delete = (id: any) => {
        this.props.list.forEach((item: any) => {
            if (item.id == id) {
                item.flag = true;
            }
        });
        this.props.setdate('list', [...this.props.list]);
        this.ChangeState([...this.props.list]);
    };
    add = () => {
        let { user } = this.state;
        let counts = this.props.count;
        this.props.list.push({ user, id: counts, flag: false });
        this.props.setdate('list', [...this.props.list]);
        this.props.setdate('count', ++counts);
        this.ChangeState([...this.props.list]);
    };
    render() {
        let { user, data } = this.state;
        return (
            <div>
                <p>
                    <input value={user} onChange={e => this.setState({ user: e.target.value })} />
                    <button onClick={() => this.add()}>添加</button>
                </p>
                <div>
                    {data.map((item: any) => {
                        return (
                            <ul key={item.id}>
                                {item.flag ? (
                                    <li
                                        style={{ textDecoration: 'line-through' }}
                                        onClick={() => this.delete(item.id)}
                                    >
                                        {item.user}
                                    </li>
                                ) : (
                                    <li onClick={() => this.delete(item.id)}>{item.user}</li>
                                )}
                            </ul>
                        );
                    })}
                </div>
                <div>
                    展示<button onClick={() => this.all()}>所有</button>
                    <button onClick={() => this.coding()}>进行中</button>
                    <button onClick={() => this.errors()}>已删除</button>
                </div>
            </div>
        );
    }
}
let mapProps = (state: any) => {
    return {
        list: state.list,
        count: state.count,
    };
};
let mapDispatch = (dispatch: any) => {
    return {
        setdate(key: string, value: any) {
            dispatch({ type: 'setstate', key, value });
        },
    };
};
export default connect(mapProps, mapDispatch)(Home);
