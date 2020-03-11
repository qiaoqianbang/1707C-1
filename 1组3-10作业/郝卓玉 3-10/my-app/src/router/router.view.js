// import React, { Component } from 'react'
import React from 'react'
import { Redirect } from 'react-router'
// export default class RouterView extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

function routers(props){
    // const {router:object}=props
    return <div>
        {
            props.routers.map((item,index)=>{
                if(!item.path) return <Redirect key={key} from={item.from} to={item.to}/>
                return <Route key={key} path={item.path} render={mes=><item.component {...mes} routers={item.children}/>}/>
            })
        }
    </div>
}

export default routers
