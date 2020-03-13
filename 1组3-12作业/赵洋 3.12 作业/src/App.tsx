import React from 'react';
import './App.css';
import RouterConfig from './router/router.config'
import RouterViews from './router/router.views'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <RouterViews routers={RouterConfig.list}></RouterViews>
    </BrowserRouter>
  );
}

export default App;
