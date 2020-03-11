import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
export default class map extends Component {
    render() {
        const { routes } = this.props;
        const defaultRoute = <Redirect from="/" to="/home/index" key={'default'} exact></Redirect>;
        return (
            <Switch>
                {routes
                    .map(i => {
                        const subRoutes = i.children === undefined ? [] : i.children;
                        const Sub = i.component;
                        return (
                            <Route
                                key={i.name}
                                path={i.path}
                                component={props => {
                                    return <Sub routes={subRoutes} {...props} />;
                                }}
                            />
                        );
                    })
                    .concat([defaultRoute])}
            </Switch>
        );
    }
}
