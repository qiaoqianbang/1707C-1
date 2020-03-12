import React from 'react';
import Index from './route/index';
import routerConfig from './route/router.config';
import './style.css';
import * as history from 'history';
export const historyProps = history.createBrowserHistory();
//console.log(historyProps);
function App() {
    return (
        <div className="App">
            <Index routerConfig={routerConfig} history={historyProps} />
        </div>
    );
}

export default App;
