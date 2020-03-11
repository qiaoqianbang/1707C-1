import React, { Component } from 'react'
import * as Router from 'react-router-dom'
// import RouterView from './Router/RouterView'

interface HomeProps{
    routers:any[]
}
interface IState{
    title:string
}

// class Home extends Component<HomeProps> {
   class Home extends Component<HomeProps,IState> {
       constructor(props:any){
            super(props)
            this.state={
                title:"title"
            }
       }
    render() {
        return (
            <div>
                <main>
                    {/* <RouterView routerConfig={this.props.routers}/> */}
                </main>
                <footer>
                    {
                        this.state.title
                    }
                    <Router.NavLink to={'/votelist'}>首页</Router.NavLink>
                    <Router.NavLink to={'./my'}>我的</Router.NavLink>
                </footer>
            </div>
        )
    }
}
export default Home