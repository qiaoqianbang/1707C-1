import React, { Component } from 'react'
import data from '../../../data/Head.json'
import {connect} from "react-redux"
import {Iprops,Iitem,Iitem2} from './index.d'

class Index extends Component<Iprops> {
    render() {
        let {list}=this.props;
        return (
            <div className='home-wrap'>
                <div className="header">
                    {
                        data.map((item:Iitem)=>(
                            <ul key={item.id}>
                               <li className="ll">
                                   <img src={item.img} alt=""/>
                                </li>  
                        <li>{item.title}</li>  
                            </ul>
                        ))
                    }
                </div>
                 <h4>附近商家</h4>
                 <div className="pm">
                     <span>综合排序</span>
                     <span>销量最高</span>
                     <span>距离最近</span>
                     <span>筛选</span>
                 </div>
                <div className="main">
                    {
                        list.map((item:Iitem2)=>(
                            <dl className='item' key={item.id} onClick={()=>this.click(item.id)}>
                              <dt>
                                  <img src={item.img} alt=""/>
                              </dt> 
                              <dd>
                        <p>{item.title}</p>
                        <p>{item.qing}</p>
                              </dd>
                            </dl>
                        ))
                    }
                </div>
            </div>
        )
    }
    click=(id:number):void=>{
         this.props.history.push({pathname:'/detail',query:{id}})
    }
}
const mapStateToprops=(state:any)=>{
     return {
         ...state.eatList,
        
     }
}
export default  connect(mapStateToprops)(Index)