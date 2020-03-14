import * as React from 'react'
import {Input,Button} from 'antd'
import 'antd/dist/antd.css'
import {connect} from 'react-redux'
interface Ipros{
    user:any,
    history:any
}
class index extends React.Component<Ipros> {
    state={
        users:'',
        pwd:'',
    
    }
    handellogin(){
        let {user} =this.props
        let {users} =this.state
        console.log(user);
        this.forceUpdate()
        user.map((item:any,index:number)=>{
            if(item.user == users){
                this.props.history.push('/home')
            }else{
                alert("没有此用户请去注册")
                this.props.history.push('/singer')
            }
        })
    }
    render() {
        let {users,pwd} =this.state
        return (
            <div className='logins'>
                <div className='log-top'>
                    <h3>登录</h3>
                </div>
                <div className='login-ipt'>
                    <Input placeholder="请输入您的账号" value={users} onChange={e=>this.setState({users:e.target.value})}></Input>
                </div>
                <div className='login-ipt'>
                    <Input placeholder="请输入您的密码" value={pwd} onChange={e=>this.setState({pwd:e.target.value})}></Input>
                </div>
                <div className="login-btn">
                    <Button onClick={this.handellogin.bind(this)}>登录</Button>
                </div>
            </div>
        )
    }
}
let state =(state:any)=>({...state})
export default connect(state)(index)