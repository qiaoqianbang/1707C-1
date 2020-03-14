export interface Iprops{
    location:any,
    show:(id:number)=>void,
    shopList:any,
    rightList:any,
    type:number,
    changetype:(id:number)=>void,
    history:any,
    add:(id:number)=>void,
    del:(id:number)=>void,
    counts:number,
    prices:number
}