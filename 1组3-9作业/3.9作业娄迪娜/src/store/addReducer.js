let initState={
    list:[],
    title:[],
    dataList:[],
    indexVal:0,
    sumNum:0,
    adderList:[],
    adderValue:{}
}
let actions={
    GETDATA(state,action){
        state.list=[...action.data[0].data]
        state.title=[...action.data[0].title]
        state.dataList=[...action.data[0].data].filter(item=>item.type===state.indexVal)
        state.adderList=[...action.data[0].adder]
    },
    CHANGEDATA(state,action){
        state.indexVal=action.typeVal
        state.dataList= state.list.filter(item=>item.type===state.indexVal)
    },
    ADDLIST(state,action){
        state.sumNum=0
        state.dataList.forEach(item=>{
            if(item.id===action.id){
                item.count++
            }
        })
        state.list.forEach(item=>{
            if(item.id===action.id){
                item.count++
            }
        })
        state.list.forEach(item=>{
            state.sumNum+=item.count*item.price
        })
    },
    DISSLIST(state,action){
        state.sumNum=0
        state.dataList.forEach(item=>{
            if(item.id===action.id){
                if(item.count===0){
                    item.count=0
                    return
                }
                item.count--
            }
        })
        state.list.forEach(item=>{
            if(item.id===action.id){
                if(item.count===0){
                    item.count=0
                    return
                }
                item.count--
            }
        })
        state.list.forEach(item=>{
            state.sumNum+=item.count*item.price
        })
    },
    CHANGEVAL(state,action){
        console.log(action)
        const {id,val}=action.data;
        state.adderList.forEach(item=>{
            if(item.id===id){
                item.isShow=!item.isShow;
                state.adderValue=item
            }
        })
    }

    
}

function reducer(state=initState,action){
    let newState=JSON.parse(JSON.stringify(state))
    actions[action.type]&&actions[action.type](newState,action)
    return newState
}
export default reducer