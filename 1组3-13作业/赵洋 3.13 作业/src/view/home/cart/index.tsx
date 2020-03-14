import * as React from 'react'
import {connect} from 'react-redux'
import Items from '../../../component/items'
interface Ipo{
    everylist:any,
    allprice:any
}
 class index extends React.Component<Ipo>{
    render() {
        let {everylist,allprice} =this.props
        return (
            <div>
               {
                   everylist.map((items:any,index:number)=>{
                    if(items.count>0){
                        return <Items key={index} items={items} {...this.props}></Items>

                    }
                   })
               }
               {
                   <p>总价：{allprice}</p>
               }
            </div>
        )
    }
}
let state=(state:any)=>({...state})
export default connect(state)(index)