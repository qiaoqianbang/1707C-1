import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Icon,Badge} from 'antd'

import {Iprops} from './index.d'
 class Detail extends Component<Iprops> {
    componentDidMount(){
        let id=this.props.location.query.id;
        if(id || id==0){
            this.props.show(id)
        }
    }
    on=()=>{
        this.props.history.go(-1)
    }
    render() {
        let {shopList,rightList,type,counts,prices}=this.props;
        return (
            <div className="detail">
                <div className="h">
                    <Icon type="left" onClick={this.on}/> 
                </div>
                <div className="box">
                <div className="left">
                    {
                        shopList.children&&shopList.children.map((item:any)=>(
                            <p className={item.id==type?'pac' :""} key={item.id} onClick={()=>this.props.changetype(item.id)}>{item.type}</p>
                        ))
                    }
                </div>
                <div className="rigth">
                    {
                        rightList&&rightList.map((item:any)=>(
                            <dl className="itemr" key={item.id}> 
                               <dt>
                                   <img src={item.img} alt=""/>
                               </dt>
                               <dd>
                                   <p>{item.nm}</p>
                                   <p>{item.price}</p>
                                   <p className="btn">
                                       {
                                           item.count>0 ? <button onClick={()=>this.props.del(item.id)}>-</button> : ''
                                       }
                                       <span>{item.count}</span>
                                       <button onClick={()=>this.props.add(item.id)}>+</button>
                                   </p>
                               </dd>
                            </dl>
                        ))
                    }
                </div>
                </div>
                <div className="zhe-wrap">
                <span>{counts}</span>
                     <div className="gouW"> 
                        <p className="gou">
                            <Icon type="shopping-cart"  className="head-example icon"/>  
                        </p>
                      </div>
                      <p>
                          合计:￥{prices}
                      </p>
                      <p>
                          {
                              prices<20?`差￥${Math.floor(30-prices)}起送`:'起送'
                          }
                      </p>
                 </div>
            </div>
        )
    }
}
const mapStateToprops=(state:any)=>{
    // console.log(state)
    return {
        ...state.eatList
    }
}

const mapDispatchToprops=(dispatch:any)=>{
    return {
        show(id:number){
            // console.log(id,'2222222222222')
            dispatch({type:"SHOP_LIST",id})
        },
        changetype(id:number){
            dispatch({type:"CHANGE_TYPE",id})
        },
        add(id:number){
            dispatch({type:"ADD_SHOP",id})
        },
        del(id:number){
            dispatch({type:"DEL_SHOP",id})
        },

    }
}
export default connect(mapStateToprops,mapDispatchToprops)(Detail)
