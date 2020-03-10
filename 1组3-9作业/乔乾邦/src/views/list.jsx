import React, { Component } from 'react';
import Map from '../route/map.jsx';

export default class list extends Component {
    render() {
        return (
            <div>
                list page
                <Map routes={this.props.routes} />
            </div>
        );
    }
}
