import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
//引入全局样式
import './css/App.css'
//引入路由表
import Routers from './routers'
import store from './store/index'
function App() {
  return (
    <Provider store={store} className='app'>
      <BrowserRouter>
      {/*路由表 */}
        <Routers/> 
      </BrowserRouter>
    </Provider>
  );
}

export default App;
