import {createStore} from 'redux'

let obj={
    user:[
        {
            user:"lhk",
            pwd:'123'
        }
    ],
    everylist:[],
    allprice:0,
    allconst:0
}
function stores(state=obj,action:any){
    switch(action.type){
        case 'ASD-WE':
            return{
                ...state,
                user:[...state.user,action.data]
            }
        case 'TYPE-LIST':
            return{
                ...state,
                everylist:action.data
            }
        case 'WER-Y':
            return{
                ...state,
                allconst:action.count
            } 
        case 'WDFT-U':
            return{
                ...state,
                allprice:action.count
            }           
        default:
            return state
    }
}
export default createStore(stores)