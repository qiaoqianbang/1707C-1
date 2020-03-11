import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="left">
                    {
                        this.props.titleList.map(item=>{
                           return <li key={item.id} onClick={()=>{this.props.changeData(item.type)}}> {item.tit} </li>
                        })
                    }
                </div>
                <div className="right">
                    {
                        this.props.listData.map(item=>{
                           return <li key={item.id}> <p>{item.tit} {item.price} </p>
                           <p> <button onClick={()=>{this.props.addFun(item.id)}}>+</button><span> {item.count} </span> <button  onClick={()=>{this.props.dissFun(item.id)}}>-</button></p> </li>
                        })
                    }
                </div>
                <div className="sum">
                    <span>总价： {this.props.sumNum} </span>
                    <span onClick={()=>{this.props.history.push("/adder")}}>结算</span>
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get("/list").then(res=>{
            this.props.getList(res.data)
        })
    }
}



let MapStateToProps=(state)=>{
    return {
        listData:state.AdderRedrcer.dataList,
        titleList:state.AdderRedrcer.title,
        sumNum:state.AdderRedrcer.sumNum
    }
} 
let MapDispatchToProps=(dispatch)=>{
    return {
        getList(data){
            dispatch({
                type:'GETDATA',
                data
            })
        },
        changeData(typeVal){
            dispatch({
                type:'CHANGEDATA',
                typeVal
            })
        },
        addFun(id){
            dispatch({
                type:'ADDLIST',
                id
            })
        },
        dissFun(id){
            dispatch({
                type:'DISSLIST',
                id
            })
        }
    }
} 

Home=connect(MapStateToProps,MapDispatchToProps)(Home)
