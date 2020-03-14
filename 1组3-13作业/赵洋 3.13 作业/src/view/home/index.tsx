import * as React from 'react'
import {Switch,Route,NavLink} from 'react-router-dom'
import Oney from './oneyes/index'
import My from './my/index'
import Cart from './cart/index'
import {connect} from 'react-redux'
import axios from 'axios'
class index extends React.Component<any,any>{
    componentDidMount(){
        this.props.getlist()
    }
    render() {
        let {allconst} =this.props
        return (
            <div className='wrap'>
                <header>
                    <h2>购物车</h2>
                </header>
                <main>
                    <Switch>
                        <Route path="/home/oneyes" component={Oney}></Route>
                        <Route path="/home/cart" component={Cart}></Route>
                        <Route path="/home/my" component={My}></Route>
                    </Switch>
                </main>
                <footer>
                    <div><NavLink to='/home/oneyes'>首页</NavLink><NavLink to='/home/cart'>购物车{allconst}</NavLink><NavLink to='/home/my'>我的</NavLink></div>
                </footer>
            </div>
        )
    }
}
let state =(state:any)=>({...state})
let dispatch =(dispatch:any)=>{
    return{
        getlist:()=>{
            axios.get("/everylist").then(res=>{
                dispatch({
                    type:'TYPE-LIST',
                    data:res.data.data
                })
            })
        }
    }
}
export default connect(state,dispatch)(index)
