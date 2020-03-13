import React, { Component } from 'react'
import Router from './router/index'
import {Provider} from 'react-redux'
import {store}  from './redux/index'
import {BrowserRouter,Switch} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
         <Provider store={store}>
          <BrowserRouter>
            <Switch>
            <Router />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}
