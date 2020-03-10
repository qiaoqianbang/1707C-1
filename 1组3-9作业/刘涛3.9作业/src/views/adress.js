import React, { Component } from 'react'
import { connect } from "react-redux"
class Adress extends Component {
  // 公用方法
  getStateList = (list) => {
    if (list) {
      this.setState({
        adressList: list
      })
      return
    }
    this.setState({
      adressList: this.props.adressList
    })
  }
  componentDidMount() {
    this.getStateList()
  }
  // 增加地址
  AddAddressList = () => {
    let list = { title: this.refs.adress.value, name: this.refs.name.value, phone: this.refs.phone.value, id: 4 }
    this.props.setState("adressList", this.props.adressList.push(list))
  }
  state = {
    adressList: [],
    falg: false
  }
  render() {
    let { adressList, flag } = this.state
    return (
      <div className="adress_wrap">
        <header className="adress_header">
          地址列表
        </header>
        <div className="adress_content">
          {
            adressList.map(item => {
              return (
                <div key={item.id}>
                  <div className="adress_title">
                    {item.title}
                  </div>
                  <div className="adress_message">
                    <p>{item.name}先生:{item.phone}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <footer>
          <button onClick={() => this.setState({ flag: !flag })}>新增地址</button>
        </footer>
        {
          flag ? <div className="pop_up">
            <p>请输入地址<input ref="adress" /></p>
            <p>请输入姓名<input ref="name" /></p>
            <p>请输入电话<input ref="phone" /></p>
            <p><button onClick={() => this.AddAddressList()}>确定</button> <button onClick={() => this.setState({ flag: false })}>取消</button></p>
          </div> : ""
        }
      </div >
    )
  }
}

let mapPropsState = (state) => {
  return {
    adressList: state.adressList
  }
}
let mapDispatchState = (dispatch) => {
  return {
    setState: (key, value) => {
      // action.type = action.value
      dispatch({ type: "setState", key, value })
    }
  }

}

export default connect(mapPropsState, mapDispatchState)(Adress)
