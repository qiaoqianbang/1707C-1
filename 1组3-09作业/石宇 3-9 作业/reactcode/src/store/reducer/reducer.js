let initState={
    //总数据
    allList:[],
    datas:[],
    fid:0,
    //总价格
    allmoney:0,
    cart:[],
    address:[{name:'zzz',phone:1505898393,desc:"北京市海淀区"}]
}

let actions={
    GET_DATA(store,action){
        store.allList=action.value
    },
    GET_DETAIL(store,action){
        store.fid=action.id
        store.datas=store.allList[action.id-1].children
    },
    //商品加减
    CHANGE_COUNT(store,action){
        let res=store.allList[store.fid-1].children[action.id-1]
        if(action.fun==="+"){
            res.count++
            store.allmoney+=res.price
        }else{
            res.count--
            store.allmoney-=res.price
        }
        store.datas=store.allList[store.fid-1].children
        store.cart=store.allList[store.fid-1].children.filter(v=>v.count!=0)
    }
}

export default function(state=initState,action){
    let newState=JSON.parse(JSON.stringify(state))
    actions[action.type]&&actions[action.type](newState,action)
    return newState
}