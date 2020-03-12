import * as React from 'react';
// view
import RouterView from './router/index';
// 路由表
import routerList from './router/routerList';
// history
import * as history from 'history';
export const historyprops = history.createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <div>
                <RouterView history={historyprops} routes={routerList}></RouterView>
            </div>
        );
    }
}

export default App;
