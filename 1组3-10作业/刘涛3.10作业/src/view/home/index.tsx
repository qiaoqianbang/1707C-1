import React, { Component } from 'react';
import RouterView from '../../router/index';

interface Props {
    routes: any;
}
class Index extends Component<Props> {
    render() {
        return (
            <div>
                一级首页
                <RouterView routes={this.props.routes} />
            </div>
        );
    }
}

export default Index;
