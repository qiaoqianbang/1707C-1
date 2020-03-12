import React, { Component } from 'react';
import RouterView from '../../router/map';
interface Props {
    routes: any;
}
export default class Home extends Component<Props> {
    render() {
        return (
            <div>
                home
                <RouterView routes={this.props.routes} />
            </div>
        );
    }
}
