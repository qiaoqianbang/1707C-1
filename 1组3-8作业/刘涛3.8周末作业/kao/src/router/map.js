import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
class MapList extends Component {
  render() {
    let defaultarr = <Redirect from="/" to="/home" key={"default"} exact></Redirect>
    return (
      <Switch>
        {
          this.props.routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} component={() => {
                let child = item.children ? item.children : []
                return <item.component routes={child} />
              }}>
              </Route>
            )
          })

        }
        {defaultarr}



      </Switch>
    )
  }
}

export default MapList
