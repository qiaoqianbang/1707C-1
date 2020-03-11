import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
interface Props {
    routes: any;
}

class MapList extends Component<Props> {
    render() {
        return (
            <Switch>
                {this.props.routes.map((item: any, index: number) => {
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            component={() => {
                                let routes = item.children ? item.children : [];
                                return <item.component routes={routes} />;
                            }}
                        ></Route>
                    );
                })}
                <Redirect from="/" to="/index" key={'defaultkey'} exact></Redirect>
            </Switch>
        );
    }
}

export default MapList;
