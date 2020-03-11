import React from 'react';
import RouterView from './router/index';
import Routes from './router/routerList';
function App() {
    return (
        <div className="App">
            <RouterView routes={Routes} />
        </div>
    );
}

export default App;
