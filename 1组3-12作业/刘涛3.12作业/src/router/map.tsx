import React, { Component } from 'react';
import * as Router from 'react-router-dom';
interface Props {
    routes: any;
}
class MapList extends Component<Props> {
    render() {
        return (
            <Router.Switch>
                {this.props.routes.map((item: any) => {
                    let routes = item.children ? item.children : [];
                    return (
                        <Router.Route
                            path={item.path}
                            key={item.path}
                            component={() => {
                                return <item.component routes={routes} />;
                            }}
                        ></Router.Route>
                    );
                })}
                <Router.Redirect from="/" to="/home" exact></Router.Redirect>
            </Router.Switch>
        );
    }
}

export default MapList;
