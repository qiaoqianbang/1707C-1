import Vue from 'vue'
import Vuex from 'vuex'
import List from '../data/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:List,
    count:0,
    allsum:0,
    cartList:[]
  },
  mutations: {
    add(state,item){
      item.count++
      state.count++
      state.cartList.push(item)
      console.log(state.cartList)
      state.allsum=state.list.reduce((a,b)=>{
          return a+=b.count*b.price
      },0)
    },
    rem(state,item){
      if(item.count>0){
        item.count--
        state.count--
        state.allsum=state.list.reduce((prev,next)=>{
          return prev+=next.count*next.price
        },0)
      }
    }
  },
  actions: {

  },
  modules: {
  }
})
