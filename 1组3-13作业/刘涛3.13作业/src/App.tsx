import React from 'react';
import Home from './views/home/index';
import './App.css';
import RouterView from './router/index';
import routerlist from './router/routerlist';
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <RouterView routes={routerlist} />
            </div>
        );
    }
}

export default App;
