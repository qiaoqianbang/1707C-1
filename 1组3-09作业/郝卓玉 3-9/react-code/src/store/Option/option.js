let initState={
    count:3
}
let actions={

}

let reducers=function(state=initState,action){
    let newState=JSON.parse(JSON.stringify(state))
    actions[action.type]&&actions[action.type](newState,action)
    return newState
}