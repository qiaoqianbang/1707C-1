import React, { Component } from 'react'
import history from 'history'
interface Iprops{
    history:any,
    props:any
}
export default class CreateVote extends Component <Iprops> {
    goBack =()=>{
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className='createVoteName'>
                        <div className='createVoteName_header'>
                            <span onClick={()=>{this.goBack()}}>&lt;</span>
                            <h3>创建单选投票</h3>
                            <span>'</span>
                        </div>
                        <div className='createVoteName_main'>
                            <input type='text' placeholder='  投票标题'/>
                            <input type='text' placeholder='  补充描述（选项）'/>
                            {/* <input type='text' placeholder='  请输入用户名'/> */}
                            <button>完 成</button>
                        </div>
            </div>
        )
    }
}
