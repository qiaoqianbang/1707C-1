import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Router from './routers/Router'
import 'antd/dist/antd.css'
import {Provider} from 'react-redux'
import store from './store/index'
// console.log(store.getState())
const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
           <Router></Router>
         </BrowserRouter>
    </Provider>
    
  );
}

export default App;
