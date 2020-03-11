import {createStore} from 'redux'
let reducer = (state = initState,action)=>{
    let newArr = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "LIST_JSON": //数据
            newArr.newlist = action.list
            console.log(action.list,newArr.newlist)
            return newArr
    }
}
let initState = {
    newlist:[],
    count:0
}
let store = createStore(reducer)
export default store