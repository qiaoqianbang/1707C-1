import React from 'react';

import MapList from './map'

function RouterView(props) {
  let routes = props.routes ? props.routes : []
  return (
    <div className="App">
      <MapList routes={routes} />
    </div>
  );
}

export default RouterView;
