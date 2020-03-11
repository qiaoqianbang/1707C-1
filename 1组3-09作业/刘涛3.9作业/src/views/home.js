import React, { Component } from 'react'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
class Home extends Component {
  // getState 获取修改数据
  getState = (list) => {
    if (list) {
      this.setState({
        list
      })
      return
    }
    this.setState({
      navlist: this.props.navlist,
      list: this.props.list
    })
  }
  componentDidMount() {
    this.getState()
  }
  state = {
    navlist: [],
    list: []
  }
  // 点击楼层效果
  ckfn = (id) => {
    let height = document.querySelector(".list_span").offsetHeight;
    let heights = id * height
    document.querySelector(".content").scrollTop = heights
  }
  // 删除商品
  delete = (id) => {
    let { list } = this.props
    let lists = []
    list.forEach(item => {
      if (!item.id == id) {
        lists.push(item)
      }
    })
    this.props.setState("list", lists)
    this.getState(lists)
  }

  // 添加
  add = () => {
    let { list } = this.props
    list.push({ name: "好吃点", id: 3, price: "30元" })
    this.props.setState("list", list)
    this.getState(list)
  }
  render() {
    let { navlist, list } = this.state
    return (
      <div className="wrap">

        <div className="nav">
          {
            navlist.map((item, index) => {
              return (
                <span onClick={() => this.ckfn(item.id)} key={index} className="nav_span">{item.name}</span>
              )
            })
          }
          <button onClick={() => this.add()}>添加</button>
          <button onClick={() => this.props.history.push("/adress")}>地址管理</button>
        </div>
        <div className="content">
          <div className="list" ref="ss">
            {
              list.map(item => {
                return (
                  <div key={item.id} className="list_span">
                    <h4>{item.name}</h4>
                    <div>{item.price}</div>
                    <button onClick={() => this.delete(item.id)}>删除</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div >
    )
  }
}

let mapProps = (state) => {
  return {
    navlist: state.navlist,
    list: state.list
  }
}

let mapDispatch = (dispatch) => {
  return {
    setState(key, value) {
      dispatch({ type: "setState", key, value })
    }
  }
}




export default connect(mapProps, mapDispatch)(withRouter(Home))
