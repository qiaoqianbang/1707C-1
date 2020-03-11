import React from 'react';

import RouterView from './router/index'
import routes from './router/routerList'
function App() {
  return (
    <div className="App">

      <RouterView routes={routes} />
    </div>
  );
}

export default App;
