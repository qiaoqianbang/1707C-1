import React from 'react';
import MapList from './mapList'
function RouterView(props) {
  let routes = props.routes ? props.routes : []
  return <MapList routes={routes} />
}

export default RouterView;