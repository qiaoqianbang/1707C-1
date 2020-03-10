import React, { Component } from 'react'
import {connect} from 'react-redux'

export default class Adder extends Component {
    render() {
        return (
            <div>
                <div onClick={()=>{this.props.history.push("/adderlist")}}>选择收货地址</div>
                <div> 
                <p> {this.props.adderValue.adderVal} </p>
                            <p>
                                <span>{this.props.adderValue.name}</span> <span> {this.props.adderValue.phone} </span>
                            </p>
                 </div>
            </div>
        )
    }
}

let MapStateToProps=(state)=>{
    console.log(state)
    return {
        adderValue:state.AdderRedrcer.adderValue,
    }
} 
let MapDispatchToProps=(dispatch)=>{
    return {
    }
} 

Adder=connect(MapStateToProps,MapDispatchToProps)(Adder)