import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
interface Props {
    routes: any;
}
class MapList extends Component<Props> {
    render() {
        return (
            <Switch>
                {this.props.routes.map((item: any) => {
                    const routes = item.children ? item.children : [];
                    return (
                        <Route
                            key={item}
                            path={item.path}
                            render={(props: any) => {
                                return <item.component routes={routes} {...props} />;
                            }}
                        />
                    );
                })}
            </Switch>
        );
    }
}

export default MapList;
