import React from 'react';
import {BrowserRouter,Switch} from 'react-router-dom'
import './App.css';
import All from './views/all'
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <All />
        </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
