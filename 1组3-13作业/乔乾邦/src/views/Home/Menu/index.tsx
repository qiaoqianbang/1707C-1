import React, { Component } from 'react'
import { connect } from 'react-redux'
interface Iprops{
    rightList:any,
    prices:number,
    history:any
}
 class Menu extends Component<Iprops> {
    onFN=()=>{
        this.props.history.push('/addrList')
    }
    render() {
        let {rightList,prices}=this.props;
        return (
            <div className="menu">
                <p onClick={this.onFN}>选择收货地址</p>
                <div className="list">
                  {
                        rightList.map((item:any)=>{
                            if(item.count>0){
                                return <dl className='itemM' key={item.id}>
                                    <dt>
                                        <img src={item.img} alt=""/>
                                    </dt>
                                   <dd>
                                    <p>{item.nm}</p>
                                    <p>{item.price}</p>
                                    <p>X{item.count}</p>
                                    </dd>
                                </dl>
                            }
                        })
                  }
                </div>
                <div className="foo">
                    <span> 合计：￥{prices}</span>
                    <button onClick={this.on}>提交订单</button>
                </div>
            </div>
        )
    }
    on=()=>{
        this.props.history.push('/Zf')
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
      
    }
}

export default connect(mapStateToprops,mapDispatchToprops)(Menu)