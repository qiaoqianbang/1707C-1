import React, { Component } from 'react';

export class detail extends Component {
    state = {
        data: this.props.item,
    };
    render() {
        const { item, type } = this.props;
        return (
            <div>
                {item === null ? (
                    <div className="detail">点击查看电影</div>
                ) : (
                    <div className="detail">
                        <p>电影：{this.props.item.name}</p>
                        <p>
                            {type}： {this.props.item.ticket}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default detail;
