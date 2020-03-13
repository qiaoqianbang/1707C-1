import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Dispatch} from "redux"

interface StoreProps{
    getList:any,
    listData:any,
    changeItem:any,
    TabFun:any
}
interface StateInter{
    titleData:any,
    valIndex:number
}

class Index extends Component<StoreProps,StateInter> {
    state={
        titleData:[
            {
                title:"All",
                id:1
            },{
                title:"Active",
                id:2
            },{
                title:"Completed",
                id:3
            }
        ],
        valIndex:1
    }
   
    tabFun=(type:string,id:number)=>{
        this.setState({valIndex:id})
        this.props.TabFun(type)
    }
    render() {
        const {listData}=this.props
        const {titleData,valIndex}=this.state
        return (
            <div>
                <div><input type="text" ref="inputVal" placeholder="请输入"/><button  onClick={()=>{this.props.getList(this.refs.inputVal)}}>Add Todo</button></div>
                <div>
                    {
                        listData.map((item:any)=>{
                            return <li key={item.id} onClick={()=>{this.props.changeItem(item.id)}} style={{
                                textDecoration: item.isShow ? 'line-through' : 'none'
                            }}> {item.title} </li>
                        })
                    }
                </div>
                <div className="title">
                    Show: 
                    {
                        titleData.map(item=>{
                            return <button className={item.id===valIndex?'active':''} key={item.id} onClick={()=>{this.tabFun(item.title,item.id)}}> {item.title} </button>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}

const MapStateToProps=(state:any)=>{
    console.log(state)
    return{
       listData:state.StoreReducer.data
    }
}
const MapDispatchToProps=(dispatch:Dispatch)=>{
    return {
        getList(val:any){
            console.log(val.value)
            dispatch({
                type:"Add",
                value:val.value
            })
        },
        changeItem(id:number){
            dispatch({
                type:"CHANGEITEM",
                id
            })
        },
        TabFun(type:string){
            dispatch({
                type:"TABFUN",
                val:type
            })
        }
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Index)