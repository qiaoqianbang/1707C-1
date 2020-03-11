import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listData:[],
  },
  mutations: {
    getData(state,val){
      state.listData=[...val]
    },
    changeIs(state,id){
      console.log(id)
      state.listData.forEach(item=>{
        if(item.id===id){
          item.isShow=!item.isShow
        }
      })
      console.log(state.listData,"222")
    }
  },
  actions: {
    getList({state,commit}){
      axios.get("/list").then(res=>{
        commit('getData',res.data)
      })
    }
  },
  modules: {
  }
})
