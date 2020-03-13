import React from 'react';
import Index from './route/index';
import routerConfig from './route/router.config';
import './style.css';
import * as history from 'history';
import store from './store/index';
import { Provider } from 'react-redux';
export const historyProps = history.createBrowserHistory();
//console.log(historyProps);
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Index routerConfig={routerConfig} history={historyProps} />
            </div>
        </Provider>
    );
}

export default App;
