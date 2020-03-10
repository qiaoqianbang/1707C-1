import { createStore } from "redux"

let defaultarr = {
  adressList: [
    {
      title: "北京八维研修学院网站工程学院",
      name: "刘涛",
      phone: 15735578964,
      id: 0
    }
  ],
  navlist: [
    {
      name: "热销",
      id: 0
    },
    {
      name: "折扣",
      id: 1
    },
    {
      name: "叫了个童子鸡",
      id: 2
    }

  ],
  list: [
    {
      name: "商品一",
      id: 0,
      price: "20元"
    },
    {
      name: "商品二",
      id: 1,
      price: "100元"
    },
    {
      name: "商品三",
      id: 2,
      price: "7元"
    }
  ]
}

let reducer = (state = defaultarr, action) => {
  let newdata = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'setState':
      newdata[action.type] = action.value
      return newdata
    default:
      return newdata
  }
}



let store = createStore(reducer)


export default store