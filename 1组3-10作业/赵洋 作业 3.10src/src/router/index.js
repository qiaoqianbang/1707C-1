import React from 'react';
import RouterMap from '../router/map';
import Routes from '../router/router';
function RouterView(props) {
    console.log(111)
    const routes = props.routes ? props.routes : Routes
    return <RouterMap routes={routes}></RouterMap>
}
export default RouterView;