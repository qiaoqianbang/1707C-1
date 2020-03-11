import React, { Component } from 'react'
import { connect } from 'react-redux';

class Detail extends Component {
    render() {
        return (
            <div className="detail">
                <div className="header">
                    <span>点菜</span>
                    <span>评价</span>
                    <span>商家</span>
                </div>
                <div className="main">
                    {
                        this.props.datas.map(v=><div className="items" key={v.id}>
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
                <div className="footer" onClick={()=>this.props.history.push('/home/order')}>
                    {this.props.allmoney}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        datas:state.beauty.datas,
        allmoney:state.beauty.allmoney
    }
}

function mapDispatchToProps(dispatch){
    return {
        cart(fun,id){
            dispatch({
                type:'CHANGE_COUNT',
                fun,
                id
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)
