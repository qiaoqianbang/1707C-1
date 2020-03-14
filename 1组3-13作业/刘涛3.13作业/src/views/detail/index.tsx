import React, { Component } from 'react';

interface Props {
    location: any;
}
export class index extends Component<Props> {
    componentDidMount() {
        console.log(this.props.location.state, 'detail');
    }
    render() {
        return <div>detail</div>;
    }
}

export default index;
