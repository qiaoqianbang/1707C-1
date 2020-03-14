import * as React from 'react'
import { Input, Button } from 'antd'
import {connect} from 'react-redux'

class index extends React.Component<any> {
    state = {
        newuser: '',
        newpwd: ''
    }
    handelzhu(){
        let {user} =this.props
        let {newuser,newpwd} =this.state
        this.props.getadd({newuser,newpwd})
        alert("注册成功")
        this.props.history.push("/home")
    }
    render() {
        let { newuser, newpwd } = this.state
        return (
            <div className="sigert">
                <div className='sigert-top'>
                    <h3>注册</h3>
                </div>
                <div className='ipts-ze'>
                    <Input placeholder="输入账号" value={newuser} onChange={e => this.setState({ newuser: e.target.value })}></Input>
                </div>
                <div className='ipts-ze'>
                    <Input placeholder="输入账号" value={newpwd} onChange={e => this.setState({ newpwd: e.target.value })}></Input>
                </div>
                <div className='ipts-bts'>
                    <Button onClick={this.handelzhu.bind(this)}>注册</Button>
                </div>
            </div>
        )
    }
}
let state = (state:any)=>({...state})
let dispatch=(dispatch:any)=>{
    return{
        getadd:(arr:any)=>{
            dispatch({
                type:'ASD-WE',
                data:arr
            })
        }
    }
}
export default connect(state,dispatch)(index)