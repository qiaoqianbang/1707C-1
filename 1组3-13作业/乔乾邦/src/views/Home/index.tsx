import React, { Component } from 'react'
import {Icon} from 'antd'
import RouterView from '../../routers/RouterViews'
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux"
interface Iprops{
    routes:any,
    moAddr:string
}
class HOme extends Component<Iprops>{
    render() {
        let {routes,moAddr}=this.props;
        return (
            <div className="home">
                <header>
                    <p className="p1">
                        <Icon type="environment" />
                        <span>{moAddr}</span>
                    </p>
                    <p className='p2'>
                        <input type="text" placeholder="请输入商家.."/>
                    </p>
                </header>
                <main>
                    <RouterView routes={routes}></RouterView>
                </main>
                <footer>
                  <NavLink to="/home/index">
                      <ul>
                          <li><Icon type="bank"/></li>
                          <li>首页</li>
                      </ul>
                  </NavLink>
                  <NavLink to="/home/menu">
                       <ul>
                          <li><Icon type="unordered-list" /></li>
                          <li>订单</li>
                      </ul>
                  </NavLink>
                  <NavLink to="/home/my"> 
                     <ul>
                         <li><Icon type="heart" /></li>
                          <li>我的</li>
                      </ul></NavLink>
                </footer>
            </div>
        )
    }
}


const mapStateToprops=(state:any)=>{
    return {
        moAddr:state.addrList.moAddr
       
    }
}
export default  connect(mapStateToprops)(HOme)
