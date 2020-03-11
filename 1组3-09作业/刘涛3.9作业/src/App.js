import React from 'react';
import RouterView from './router/index'
import RouterList from './router/routerList'
function App() {
  return (
    <div className="App">
      <RouterView routes={RouterList} />
    </div>
  );
}

export default App;
