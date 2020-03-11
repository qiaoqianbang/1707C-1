import React, { Component } from 'react'
import { Table } from 'antd';
// json数据
let { zh } = require("../data/data.json")
let count = 0
// 计算票房
zh.forEach(item => {
  count += item.pf
})
// 快速排序
function sort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let left = []
  let right = []
  let pro = arr[0].pf

  for (let i = 1; i < arr.length; i++) {
    if (pro >= arr[i].pf) {
      // console.log(arr[i], "arr[i")
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  let l = sort(left)
  let r = sort(right)
  return r.concat(pro).concat(l)
}
let hhe = sort(zh)
let arr = hhe.slice(-1)
let newarr = hhe.slice(1, hhe.length - 1).concat(arr[0].pf)
let haonan = []
// 排序完成后调整数据
for (let i = 0; i < newarr.length; i++) {
  for (let j = 0; j < zh.length; j++) {
    if (newarr[i] == zh[j].pf) {
      haonan.push(zh[j])
    }
  }
}
class Comprehensive extends Component {
  ckfn = async (obj) => {
    // obj.flag = false

    haonan.forEach(item => {
      if (item.key === obj.key) {
        item.flag = !item.flag
      }
    })
    await this.setState({
      leftList: obj,
      data: haonan
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
    data: haonan
  }
  render() {
    let { leftList, countprice } = this.state
    return (
      <div className="wrap">
        <div className="left">

          <div className="left_top">
            {
              leftList.flag ? <div>
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

export default Comprehensive
