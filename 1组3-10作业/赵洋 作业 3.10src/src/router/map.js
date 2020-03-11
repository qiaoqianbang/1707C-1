import React, { Component } from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';

class RouterMap extends Component {
    render() {
        const { routes, history } = this.props;
        const defaultRoute = <Redirect from="/" to="/login" key={'default'} exact ></Redirect>;
        return <div style={{height:"100%"}}>
            <Switch>
                {
                    routes.map((item, index) => {
                        const children = item.children === undefined ? [] : item.children;
                        const Comp = item.component;
                        return <Route exact key={item.name} path={item.path} component={() => {
                            return <Comp routes={children} history={history}></Comp>
                        }} />
                    }).concat([defaultRoute])
                }

            </Switch>
        </div>
    }
}
export default RouterMap;