import React from 'react';
import MapList from './map';
function RouterView(props?: any) {
    let routes = props.routes ? props.routes : [];
    return <MapList routes={routes} />;
}

export default RouterView;
