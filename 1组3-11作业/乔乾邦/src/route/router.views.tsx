import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Props, RouterRedirect, RouterItem } from './index.d';
export default class routerViews extends Component<Props> {
    public render() {
        const { routerConfig } = this.props;
        const routerView = routerConfig.filter(i => !i.redirect);
        const RedirectList = routerConfig.filter(i => i.redirect);
        return (
            <Switch>
                {routerView
                    .map((i: RouterItem) => {
                        return (
                            <Route
                                key={i.title}
                                path={i.path}
                                render={props => {
                                    return (
                                        <i.component
                                            title={i.title}
                                            routerConfig={i.children}
                                            {...props}
                                        />
                                    );
                                }}
                            />
                        );
                    })
                    .concat(
                        RedirectList.map((item: RouterRedirect) => {
                            return <Redirect key={item.path} from={item.path} to={item.redirect} />;
                        })
                    )}
            </Switch>
        );
    }
}
