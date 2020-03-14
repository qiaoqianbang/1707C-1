export interface Iprops{
    routes:[]
}
export interface Iitem{
    path:string,
    component:any,
    redirect?:string,
    title?:string,
    children?:any[]
}

export interface Iitemred{
    path:string,
    redirect:string
}