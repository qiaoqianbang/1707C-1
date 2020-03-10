import React, { Component } from 'react'
import {connect} from 'react-redux'
//购物车
class Order extends Component {
    render() {
        return (
            <div className="order">
                <div className="header" onClick={()=>this.props.history.push('/address')}>
                    收货地址
                </div>
                {
                        this.props.cart.map(v=><div className="items" key={v.id}>
                            <div className="left">
                                <img src={v.imgs} alt=""/>
                            </div>
                            <div className="right">
                                <p>{v.title}</p>
                                <p>{v.price}</p>
                                <p><span onClick={()=>this.props.cart('+',v.id)}>+</span><span>{v.count}</span><span onClick={()=>this.props.cart('-',v.id)}>-</span></p>
                            </div>
                        </div>)
                    }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cart:state.beauty.cart
    }
}

function mapDispatchToProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Order)
