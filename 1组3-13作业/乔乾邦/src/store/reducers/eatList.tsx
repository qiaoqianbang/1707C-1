import data from '../../data/Shop.json'
const initState={
    list:data,
    shopList:[],
    type:0,
    rightList:[],
    tt:0,
    counts:0,
    prices:0
}

const eatLsit=(state=initState,action:any)=>{
     //深复制
     let newState=JSON.parse(JSON.stringify(state))
     switch (action.type){
        //点击商家进入详情菜单
         case "SHOP_LIST":{
            newState.shopList=newState.list.find((item:any)=>item.id===action.id)
            newState.tt=action.id;
            // console.log(newState.shopList,'1111111111')
            newState.type=newState.shopList.children[0].id;
            newState.rightList=newState.shopList.children[0].list
            return newState
         }
         //分类的切换
         case "CHANGE_TYPE":{
            newState.type=action.id;
            let val=newState.shopList.children.find((item:any)=>item.id==action.id).list
            // console.log(val)
            newState.rightList=val
            return newState
         }
         //添加商品
         case "ADD_SHOP":{
             let a=newState.list.find((item:any)=>item.id===newState.tt)
             .children.find((item:any)=>item.id==newState.type)
             .list.find((item:any)=>item.id==action.id);
            //  console.log(a)
             a.count+=1;
             newState.counts+=1;
             newState.prices+=a.price;
             newState.shopList=newState.list.find((item:any)=>item.id===newState.tt)
             newState.rightList=newState.shopList.children.find((item:any)=>item.id==newState.type).list
            //  console.log(a)
             return newState
         }
         //删除商品
         case "DEL_SHOP":{
            let a=newState.list.find((item:any)=>item.id===newState.tt)
            .children.find((item:any)=>item.id==newState.type)
            .list.find((item:any)=>item.id==action.id);
            if(a.count>0){
                a.count-=1;
                newState.counts-=1;
                 newState.prices-=a.price;
                 newState.shopList=newState.list.find((item:any)=>item.id===newState.tt)
             newState.rightList=newState.shopList.children.find((item:any)=>item.id==newState.type).list
            }
        
            return newState
        }
        
         default:return newState
     }
}

export default eatLsit
