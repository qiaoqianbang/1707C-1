import React, { Component } from 'react'
import history from 'history'
interface Iprops{
    history:any,
    props:any
}
export default class Home extends Component <Iprops> {
    goCreateVote =()=>{
        this.props.history.push('/createVote')
    }
    goVoteList =()=>{
        this.props.history.push('/voteList')
    }
    render() {
        return (
            <div className='findexName'>
                <h4 onClick={()=>{this.goCreateVote()}}>+</h4>
                <p onClick={()=>{this.goVoteList()}}>投票列表</p>
            </div>
        )
    }
}
