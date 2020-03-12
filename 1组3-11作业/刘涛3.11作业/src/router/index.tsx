import React, { Component } from 'react';
import * as Router from 'react-router-dom';
import { History } from './index.d';
import Maplist from './map';

class RouterView extends Component<History> {
    render() {
        return (
            <Router.Router history={this.props.history}>
                <Maplist routes={this.props.routes} />
            </Router.Router>
        );
    }
}

export default RouterView;
