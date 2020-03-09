import React, { Component } from 'react';
import RouterList from './routerList'
import RouterView from './routerView'
export default class index extends Component {
  render() {
    return (
      <>
        <RouterView routerlist={RouterList} />
      </>
    );
  }
}
