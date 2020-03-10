import React from 'react';
import RouterView from './router/RouterView'
import routes from './router/Router.config'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import './mock/mock'
import './App.css'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <RouterView routes={routes}></RouterView>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
