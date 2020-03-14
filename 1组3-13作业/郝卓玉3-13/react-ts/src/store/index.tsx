import {createStore,applyMiddleware} from 'redux'
import list from '../data/Shop.json'
let initSate={
    list:list,
    showList:list[0].children,
    ind:0
}
const reducer=(state:any=initSate,action:any)=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'CHOOSE_LIST':
                newState.ind=action.ind
                newState.list[newState.ind].children.forEach((item:any,index:number)=>{
                if(item.id===action.id){
                    newState.showList=item.list
                }
            })
            break;
        case 'ADD_COUNT':
            //    newState.list[newState.ind].children.forEach((item:any)=>{
            //     newState.showList=item.list.map((jtem:any)=>{
            //         console.log(jtem,9999)
            //            if(jtem.id===action.id){
            //                jtem.count++
            //            }
            //            return jtem
            //        })
            //    })
            newState.showList
            break;    
        default:
            break;    
    }
    return newState
}

const store=createStore(reducer,applyMiddleware())
export {store}