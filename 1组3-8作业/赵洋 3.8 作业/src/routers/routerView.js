import React, { Component } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
export default class routerView extends Component {
  render() {
      const {routerlist} = this.props
    console.log(routerlist)
    return (
      <Switch>
          {
              routerlist.map((item,key)=>{
                if(!item.path) return <Redirect key={key} from={item.from} to={item.to} />
                return <Route key={key} path={item.path} render={(prop)=>{
                    return <item.component {...prop} routerlist = {item.children} />
                }} />
              })
          }
      </Switch>
    );
  }
}
