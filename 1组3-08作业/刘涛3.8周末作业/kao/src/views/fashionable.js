import React, { Component } from 'react'
import { Table } from 'antd';
let { fz } = require("../data/data.json")
let count = 0
fz.forEach(item => {
  count += item.pf
})
class Fashionable extends Component {
  ckfn = (obj) => {
    // obj.flag = false

    fz.forEach(item => {
      if (item.key === obj.key) {
        item.flag = !item.flag
      }
    })
    this.setState({
      leftList: obj,
      data: fz
    })
    // obj.flag = true
  }
  state = {
    countprice: parseInt(count),
    leftList: {},
    columns: [
      {
        title: '影片优先点击',
        dataIndex: 'ck',
        key: 'ck',
        render: (a, b) => {
          // console.log(this)
          return (
            <div onClick={() => this.ckfn(b)}>
              {a}
            </div>
          )
        }
      },
      {
        title: '综合票房',
        dataIndex: 'pf',
        key: 'pf',
      },
      {
        title: '票房占比',
        key: 'zb',
        dataIndex: 'zb',
      },

    ],
    data: fz
  }
  render() {
    let { leftList, countprice } = this.state
    return (
      <div className="wrap">
        <div className="left">

          <div className="left_top">
            {
              !leftList.flag && leftList.key ? <div>
                <h3>{leftList.ck}</h3>
                <b>票房:{leftList.pf}</b>
                <p>占比:{leftList.zb}</p>
              </div> : "点击优先展示"
            }

          </div>
          <div className="left_bottom">
            今日实时票房{countprice}万
          </div>
        </div>
        <div className="right">

          <Table columns={this.state.columns} dataSource={this.state.data} />
        </div>
      </div>
    )
  }
}

export default Fashionable
