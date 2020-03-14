import React, { Component } from 'react'
import {connect} from 'react-redux'

interface IProps{
    list:any[],
    chooseList:any
}

class Left extends Component <IProps>{
    state={
        id:1001
    }
    render() {
        return (
            <div className='left'>
                {
                    this.props.list.map((item:any,ind:number)=>{
                        return item.children.map((jtem:any,index:number)=>{
                            return <span className={this.state.id===jtem.id?'active':''} key={jtem.id} onClick={()=>{this.props.chooseList(ind,jtem.id);this.setState({id:jtem.id})}}>{jtem.type}</span>
                        })
                    })
                }
            </div>
        )
    }
}


let mapStateToProps=(store:any)=>{
    console.log(store.list)
    return {
        list:store.list
    }
}

let mapDispatchToProps=(dispatch:any)=>{
    return {
        chooseList(ind:number,id:number){
            dispatch({
                type:'CHOOSE_LIST',
                ind,
                id
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Left)
