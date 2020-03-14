import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Ipros,Iitem} from './index.d'

 class AddrList extends Component<Ipros>{
    render() {
        let {list}=this.props
        console.log(list)
        return (
            <div className="Addr">
                {
                    list.map((item:Iitem)=>(
                        <div className="itemAA" key={item.id} onClick={()=>this.props.c(item.id)}>
                            <p>{item.title}</p>
                            <p>{item.nm}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToprops=(state:any)=>{
    // console.log(state)
    return {
        ...state.addrList
    }
}

const mapDispatchToprops=(dispatch:any)=>{
    return {
      c(id:number){
          dispatch({type:"CHANG_ADDR",id})
      }
    }
}


export default connect(mapStateToprops,mapDispatchToprops)(AddrList)
