import React, { Component } from 'react';
import * as Router from 'react-router-dom';
import { Routemap, Props } from './index.d';
class Maplist extends Component<Props> {
    render() {
        return (
            <Router.Switch>
                {this.props.routes.map((item: Routemap) => {
                    let routes = item.children ? item.children : [];
                    return (
                        <Router.Route
                            key={item.path}
                            path={item.path}
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

export default Maplist;
