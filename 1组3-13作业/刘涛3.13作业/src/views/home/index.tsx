import React, { Component } from 'react';
import { NavBar, Icon, Grid, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { connect } from 'react-redux';
import Detail from '../detail/index';
import { Switch, Route, NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
interface Props {
    navList: any;
    shopList: any;
    history: any;
}
interface State {
    data: any;
}
const tabs = [
    { title: <Badge text={'3'}>综合排序</Badge> },
    { title: <Badge text={'今日(20)'}>销量最高</Badge> },
    { title: <Badge dot>距离最近</Badge> },
];
// @withRouter

class Index extends Component<Props, State> {
    componentDidMount() {
        console.log(this.props, 'home');
    }
    state = {
        data: this.props.navList,
    };
    GridExample = () => (
        <div>
            <div className="sub-title"></div>
            <Grid data={this.state.data} activeStyle={false} />
        </div>
    );
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >
                        八维教育
                    </NavBar>
                </div>
                <div>
                    <this.GridExample />
                </div>
                <div>
                    <Tabs
                        tabs={tabs}
                        initialPage={2}
                        onChange={(tab, index) => {
                            console.log('onChange', index, tab);
                        }}
                        onTabClick={(tab, index) => {
                            console.log('onTabClick', index, tab);
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '650px',
                                backgroundColor: '#fff',
                            }}
                        >
                            {this.props.shopList.map((item: any) => {
                                return (
                                    <div
                                        key={item.name}
                                        style={{
                                            height: '150px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderBottom: 'solid 1px black',
                                        }}
                                    >
                                        <div
                                            onClick={
                                                () =>
                                                    this.props.history.push('/detail', {
                                                        sss: 'add',
                                                    })
                                                // console.log(12)
                                            }
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '150px',
                                backgroundColor: '#fff',
                            }}
                        >
                            Content of second tab
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '150px',
                                backgroundColor: '#fff',
                            }}
                        >
                            Content of second tab
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        );
    }
}

let mapPropsState = (state: any) => {
    return {
        navList: state.navList,
        shopList: state.shopList,
    };
};

export default connect(mapPropsState)(Index);
