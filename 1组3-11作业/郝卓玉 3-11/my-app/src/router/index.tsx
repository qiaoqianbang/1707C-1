import * as React from 'react'
import * as Router from 'react-router-dom'
import {RouterProps} from './index.d'
import RouterView from './router.view'
class RouterIndex extends React.Component<RouterProps>{
    public render(){
        return(
        <Router.Router history={this.props.history}>
            <RouterView routerConfig={this.props.routerConfig}/>
        </Router.Router>
    )}
}
export default RouterIndex