import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
class MapList extends Component {

  render() {
    let { routes } = this.props
    let defaultArr = <Redirect from="/" to="/home" exact key={"default"}></Redirect>
    return (
      <Switch>
        {
          routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} component={() => {
                let routes = item.children ? item.children : []
                return <item.component routes={routes} />
              }}></Route>
            )
          })
        }
        {defaultArr}
      </Switch>
    )
  }
}

export default MapList
