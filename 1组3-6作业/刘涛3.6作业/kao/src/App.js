import React from 'react';
import Prop from './components/props'
import './App.css';

function App() {
  return (
    <div className="App">
      <Prop name="" age={22} boo={false} obj={{ name: "das" }} customProp={false} />
    </div>
  );
}

export default App;
