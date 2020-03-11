import React from 'react';
import getView from './pages/index'
import {BrowserRouter as Router} from 'react-router-dom'
import routes from './router/Router.config'
import RouterView from './router/RouterView'
import "./css/App.css"
console.log(getView())

function App() {
  return (
    <div className="App">
      <Router>
        <RouterView routes={routes}></RouterView>
      </Router>
    </div>
  );
}

export default App;
