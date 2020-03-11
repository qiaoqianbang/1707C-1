import React from 'react'
import {withRouter,RouteComponentProps} from 'react-router'

// export default class index extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
const Login=({history}:RouteComponentProps)=>{
    return <div onClick={()=>{
        history.push('/login')
    }}>
        <button>登录/注册-></button>
    </div>
}

export default withRouter(Login)
