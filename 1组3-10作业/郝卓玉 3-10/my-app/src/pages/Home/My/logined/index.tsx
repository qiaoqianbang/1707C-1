import React from 'react'

// export default class index extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

const list=[{
    title:'我参与的投票',
    icon:''
},{
    title:'我创建的投票',
    icon:''
}]

const Logined=()=>{
    return <div>
        <ul>
            {
                list.map((item,key)=>{
                    return <li key={key}>{item.title}</li>
                })
            }
        </ul>
    </div>
}

export default Logined
