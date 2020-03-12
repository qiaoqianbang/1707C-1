import * as React from 'react'

export interface Props{
    routerConfig:any[]
}

export interface RouterProps{
    history:any,
    routerConfig:any[]
    
}

export interface RouterItem{
    path:string,
    title:string,
    component:any,
    children:any[]
}

export interface RouterRedirect{
    path:string,
    redirect:string
}