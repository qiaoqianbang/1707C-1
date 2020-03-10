import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import routers from './router/router.config'
import RouterView from './router/routerView'
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <RouterView routers={routers}/>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
