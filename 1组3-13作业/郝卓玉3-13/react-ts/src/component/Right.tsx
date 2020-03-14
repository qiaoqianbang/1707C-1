import React, { Component } from 'react'
import {connect} from 'react-redux'

interface IProps{
    list:any[],
    addCount:any
}

class Right extends Component<IProps>{
    render() {
        console.log(this.props.list[0])
        return (
            <div className='right'>
                {
                    this.props.list.map((item:any,index:number)=>{
                        return <div className='item' key={item.id}>
                                    <div className="item-left">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className="item-right">
                                        <b>{item.nm}</b>
                                        <p>{item.count}</p>
                                        <p><span>{item.price}</span><b onClick={()=>{this.props.addCount(item.id)}}>+</b></p>
                                    </div>
                               </div>
                    })
                }
            </div>
        )
    }
}

let mapStateToProps=(store:any)=>{
    console.log(store)
    return {
        list:store.showList
    }
}

let mapDispatchToProps=(dispatch:any)=>{
    return {
        addCount(id:number){
            dispatch({
                type:'ADD_COUNT',
                id
            })
        },
        removeCount(id:number){
            dispatch({
                type:'REMOVE_COUNT',
                id
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Right)
