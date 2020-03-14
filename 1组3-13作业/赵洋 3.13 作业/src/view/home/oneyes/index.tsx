import * as React from 'react'
import {connect} from 'react-redux'
import Items from '../../../component/items'
interface Ips{
    state:any
}
interface Io{
    everylist:any
}
 class index extends React.Component<any,any>{
    render() {
        let {everylist} =this.props
        console.log(everylist);
        
        return (
            <div>
               {
                  everylist && everylist.map((items:any,index:number)=>{
                       return <Items key={index} items={items} {...this.props}></Items>
                   })
               }
            </div>
        )
    }
}
let state =(state:Ips)=>({...state})
export default connect(state)(index)