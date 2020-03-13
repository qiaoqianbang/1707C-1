import React from 'react';
import Home from './components/home'
import {Provider} from 'react-redux'
import store from './store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Home></Home>
      </Provider>
    </div>
  );
}

export default App;
