import React, { Component } from 'react'
import * as Router from 'react-router-dom'
import RouterView from '../../Router/RouterView'

interface HomeProps{
    routerConfig:any[]
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
       btn=()=>{
        console.log("111")
       }
    render() {
        return (
            <div>
                <main>
                    <button onClick={()=>{this.btn()}}>点击</button>
                    <RouterView routerConfig={this.props.routerConfig}/>
                </main>
                <footer>
                    <Router.NavLink to={'/home/index'}>首页</Router.NavLink>
                    <Router.NavLink to={'/home/my'}>我的</Router.NavLink>
                </footer>
            </div>
        )
    }
}
export default Home