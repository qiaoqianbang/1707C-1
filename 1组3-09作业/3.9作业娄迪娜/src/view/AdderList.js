import React, { Component } from 'react';
import {connect} from 'react-redux'

export default class AdderList extends Component {
    render() {
        return (
            <div className="adderlist">
                {
                    this.props.adderList.map(item=>{
                        return <li key={item.id}>
                            <input type="checkbox" checked={item.isShow} onChange={(e)=>{this.props.searchFun(item.id,e.target.value)}}/>
                            <p> {item.adderVal} </p>
                            <p>
                                <span>{item.name}</span> <span> {item.phone} </span>
                            </p>
                             
                            </li>
                    })
                }
            </div>
        );
    }
}



let MapStateToProps=(state)=>{
    console.log(state)
    return {
        adderList:state.AdderRedrcer.adderList,
    }
} 
let MapDispatchToProps=(dispatch)=>{
    return {
        searchFun(id,val){
            dispatch({
                type:'CHANGEVAL',
                data:{
                    id,val
                }
            })
        }
    }
} 

AdderList=connect(MapStateToProps,MapDispatchToProps)(AdderList)
