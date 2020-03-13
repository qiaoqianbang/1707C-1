import React, { Component } from 'react'
import {connect} from 'react-redux'
interface Iprops{
    addEvent:any,
    list:any,
    delEvent:any
}

interface Istate{
  val:string,
  btn:string[],
  stateIndex:number
}

class Home extends Component<Iprops,Istate>{
    state={
        val:'',
        btn:['all','active','complete'],
        stateIndex:0
    }
    render() {
        return (
            <div>
               <div>
                  <input type="text" onChange={(e)=>{this.setState({val:e.target.value})}}/>
                  <button onClick={()=>{this.props.addEvent(this.state.val)}}>添加</button>
               </div>
               <div>
                 {
                   this.props.list[this.state.btn[this.state.stateIndex]].map((item:any,index:number)=>{
                     return <p key={index} style={{textDecoration:item.flag?'line-through':''}} onClick={()=>this.props.delEvent(item.name)}>{item.name}</p>
                   })
                 }
               </div>
               <div>
                 {

                 }
               </div>
            </div>
        )
    }
}
let mapDispatchToProps=(dispatch: (arg0: { type: string; value: any; }) => void) =>{
  return {
    addEvent(value:any){
      dispatch({
        type:'ADD_LIST',
        value
      })
    },
    delEvent(value:string){
      dispatch({
        type:'DELETE_LIST',
        value
      })
    }
  }
}

let mapStateToProps=(store: any)=>{
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps,)(Home);
