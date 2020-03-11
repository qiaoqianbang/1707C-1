import React, { Component } from 'react';
import {connect} from 'react-redux'
//直接引入数据
// import Axios from 'axios';
import Request from '../until/index'
class SubAccount extends Component {
  render() {
    const {newlist} = this.props
    console.log(this)
    console.log(newlist)
    return (
      <div className='SubAccount'>
      {
      newlist
      }
      </div>
    );
  }
  componentDidMount(){
    const {getlist} = this.props
    getlist()
  }
}
let mapStateToProps = (state)=>{
  // const {newlist} = state
  console.log(state,'s')
  return {
    // newlist
  }
}
let mapDispathToProps = (dispatch)=>{
  return {
    getlist(){
      Request('/list').then(res=>{
        dispatch({type:"LIST_JSON",list:res})
      })
    }
  }
}

SubAccount = connect(mapStateToProps,mapDispathToProps)(SubAccount)
export default SubAccount
