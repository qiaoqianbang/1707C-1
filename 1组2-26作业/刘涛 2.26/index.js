//数据结构 图


class Graph {
  constructor(flag = false) {
    // 默认有向
    this.flag = flag
    // 存储数据
    this.list = []
    // 数据字典
    this.hh = new Map()
  }
  // 创建新的顶点
  addVertex(v) {
    if (!this.list.includes(v)) {
      // 查重
      this.list.push(v)
      this.hh.set(v, [])

    }
  }
  // 创建边
  addEdge(v, m) {
    if (!this.hh.get(v)) {
      // 不包含顶点
      this.addVertex(v)
      // this.list.push(this.hh.set(v, [m]))
    }
    if (!this.hh.get(m)) {
      // 不包含顶点
      this.addVertex(m)
    }
    // 都创建好l
    this.hh.get(v).push(m)
    if (!this.flag) {
      this.hh.get(m).push(v)
    }
    // console.log(this.hh)
  }
  // 获取顶点列表
  getVertices() {
    return this.list
  }
  // 获取临接表
  getAdjList() {
    return this.hh
  }
  //打印方法
  toString() {
    let arr = [...this.hh]
    let str = ""
    arr.forEach((item, index) => {
      str += item[0] + "=>" + item[1][0] + ","
    })
    return str
  }
}

let map = new Graph()
map.addVertex("a")
map.addEdge("a", "b")
// console.log(map.getVertices())
// console.log(map.getAdjList())
// console.log(map.toString())





// 不是用递归的二分查找法 
function Arr(list, str, end, tag) {
  let item = Math.floor(end + str) / 2
  let node = list
  if (tag) {
    if (tag < list[item]) {
      // 左
      let ok = -1
      node = node.slice(0, item)
      end = node.length - 1
      item = Math.floor(end + str) / 2
      for (let i = 0; i < node.length; i++) {
        // console.log(tag)
        if (tag == node[i]) {
          ok = node[i]
        }
      }
      return ok
    } else if (tag > list[item]) {
      // 右
      let ok = -1
      node = node.slice(item + 1, node.length)
      // console.log(node)
      end = node.length - 1
      item = Math.floor(end + str) / 2
      for (let i = 0; i < node.length; i++) {
        // console.log(node[i])
        if (tag == node[i]) {
          ok = node[i]
        }
      }
      return ok
    } else if (tag == list[item]) {

      return list[item]
    }
    // console.log("没找到")
    return -1

  }
  return -1

}
let list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let str = 0;
let end = list.length - 1
console.log(Arr(list, str, end, 9))




// 次品
// function Arr(list, str, end, tag) {
//   let item = Math.floor(end + str) / 2
//   // console.log(list[item])
//   let node = list[item]
//   if (list[item] === tag) {
//     console.log("1")
//     return node
//   } else {
//     if (tag < node) {
//       // 左
//       while (node != tag && node) {
//         node = list[--item]
//         // console.log(node, "node")
//       }
//       console.log("2")
//       return node
//     }
//     if (tag > node) {
//       // 右
//       while (node != tag && node) {
//         node = list[++item]
//         // console.log(node, "node")
//       }
//       console.log("3")
//       return node
//     }
//     if (tag === node) {
//       console.log("4")
//       return node
//     }
//     return -1
//   }

// }
// let list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// let str = 0;
// let end = list.length - 1
// console.log(Arr(list, str, end, 54))