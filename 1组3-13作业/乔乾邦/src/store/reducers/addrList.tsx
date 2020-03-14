import data from '../../data/AddrList.json'
const initState={
    list:data,
    moAddr:'八维教育'
}

const eatLsit=(state=initState,action:any)=>{
     //深复制
     let newState=JSON.parse(JSON.stringify(state))
     switch (action.type){
        //点击更换地址
         case "CHANG_ADDR":{
            let val=newState.list.find((item:any)=>item.id==action.id)
            newState.moAddr=val.title
            return newState
         }
         default:return newState
     }
}

export default eatLsit
