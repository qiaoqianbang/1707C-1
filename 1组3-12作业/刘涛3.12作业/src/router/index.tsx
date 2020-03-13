import React, { Component } from 'react';
import * as Router from 'react-router-dom';
import MapList from '../router/map';
interface Props {
    history: any;
    routes: any;
}
class RouterView extends Component<Props> {
    render() {
        return (
            <Router.Router history={this.props.history}>
                <MapList routes={this.props.routes}></MapList>
            </Router.Router>
        );
    }
}

export default RouterView;
