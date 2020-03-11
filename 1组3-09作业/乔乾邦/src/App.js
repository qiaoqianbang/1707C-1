import React from 'react';
import Index from './route/index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Index />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
