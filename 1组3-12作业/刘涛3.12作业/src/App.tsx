import React, { Component } from 'react';

import * as history from 'history';
import RouterView from './router/index';
import routerlist from './router/routerlist';
export const historyprops = history.createBrowserHistory();

class App extends Component {
    render() {
        return <RouterView history={historyprops} routes={routerlist}></RouterView>;
    }
}

export default App;
