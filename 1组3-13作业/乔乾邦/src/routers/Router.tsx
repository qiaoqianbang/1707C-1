import *as React from 'react'
import RouterView from './RouterViews'
import routes from './routes'
import {BrowserRouter} from 'react-router-dom'
export default class Router extends React.Component {
    render() {
        return (
           
            <RouterView routes={routes}> </RouterView>
            
        )
    }
}
