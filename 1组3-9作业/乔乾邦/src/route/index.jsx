import React from 'react';
import defaultList from './list.js';
import Map from './map';
export default function index(props) {
    let routes = props.routes ? props.routes : defaultList;
    return (
        <div className="Index">
            <Map routes={routes} {...props} />
        </div>
    );
}
