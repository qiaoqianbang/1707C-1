// import {StateItem} from './type'
// let actions:any={
let actions={
    Add(state:any,action:any){
        state.listData.push({
            title:action.value,
            id:new Date().getTime(),
            isShow:false
        })
        state.data=state.listData
    },
    CHANGEITEM(state:any,action:any){
        state.listData.forEach((item:any)=>{
            if(item.id===action.id){
                item.isShow=!item.isShow
            }
        })
        state.data=state.listData
    },
    TABFUN(state:any,action:any){
        if(action.val==="All"){
            state.data=state.listData
        }else if(action.val==="Active"){
            state.data=state.listData.filter((item:any)=>!item.isShow)
        }else{
            
            state.data=state.listData.filter((item:any)=>item.isShow)
        }
    }
}


function reducer(state:Object={listData:[],data:[]},action:any){
   
    let newState=JSON.parse(JSON.stringify(state));
    actions[action.type]&&actions[action.type](newState,action)
    return newState
}


export default reducer