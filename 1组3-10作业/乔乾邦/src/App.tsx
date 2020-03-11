import React from 'react';
import Index from './route/index';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Index />
            </div>
        </BrowserRouter>
    );
}

export default App;
