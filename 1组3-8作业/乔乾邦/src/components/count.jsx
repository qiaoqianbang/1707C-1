import React, { Component } from 'react';

export class count extends Component {
    render() {
        return (
            <div className="count">
                {this.props.type}
                {this.props.num}
            </div>
        );
    }
}

export default count;
