import React, { Component } from 'react'
import { connect } from 'react-redux'
interface Iprosp{
    prices:number
}
 class Zf extends Component<Iprosp> {
    render() {
        let {prices}=this.props;
        return (
            <div>
              <p>
              共￥{prices}
              </p>
              <button>
                  确认支付
              </button>
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
export default  connect(mapStateToprops)(Zf)