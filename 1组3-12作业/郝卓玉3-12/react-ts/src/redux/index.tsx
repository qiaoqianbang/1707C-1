import {createStore,applyMiddleware} from 'redux'

let initState={
    list:[]
}

const reducer=(state:any=initState,action:any)=>{
     state=JSON.parse(JSON.stringify(state));
     switch (action.type){
         case 'ADD_LIST':
             state.list.push({
                 name:action.value,
                 flag:false
             });
             state.active=state.list.filter((item:any)=>!item.flag)
             return state
     }

}

const store=createStore(reducer,applyMiddleware())
export {store}
