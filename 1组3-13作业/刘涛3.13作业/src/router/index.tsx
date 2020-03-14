import React, { Component } from 'react';
import MapList from './map';
interface Props {
    routes: any;
}
class RouterView extends Component<Props> {
    componentDidMount() {
        console.log(this.props, 'view');
    }
    render() {
        const routes = this.props.routes ? this.props.routes : [];
        return (
            <div>
                <MapList routes={routes}></MapList>
            </div>
        );
    }
}

export default RouterView;
