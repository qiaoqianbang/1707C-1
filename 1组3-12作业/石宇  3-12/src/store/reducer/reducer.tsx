let initData={
    all:[],
    active:[],
    completed:[]
}

export default function(state:any=initData,action:any){
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'ADD_CON':
            newState.all.push({
                text:action.text,
                flag:false
            })
            newState.active=newState.all.filter((v:any)=>!v.flag)
            break
        case 'DEL_CON':
            newState.all.map((v:any)=>{
                if(v.text===action.text){
                    v.flag=!v.flag
                }
            })
            newState.active=newState.all.filter((v:any)=>!v.flag)
            newState.completed=newState.all.filter((v:any)=>v.flag)
            break
        default :
            break
    }
    return newState
}