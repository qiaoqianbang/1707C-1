import * as React from 'react';
export interface Props{
    routerConfig:any[]
}

export interface RouterProps{
    routerConfig:any[],
    history:any
}

export interface RouterItem{
    path:string,
    title:string,
    component:any,
    children:any[],
    redirect:string
}

// export interface RouterRedirect{
//     path:string,
//     redirect:string
// }