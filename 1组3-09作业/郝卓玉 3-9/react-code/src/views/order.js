import React, { Component } from 'react'

class Order extends Component {
    render() {
        return (
            <div>
                <button>-</button>
                <span>10</span>
                <button>+</button>
            </div>
        )
    }
}

let mapStateToProps=(state)=>{
    console.log(state)
    return {
        list:state.Option.list
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        setList1(id){
            dispatch({
                type:'CHANGE_REDUCE',
                id
            })
        },
        setList2(id){
            dispatch({
                type:'CHANGE_ADD',
                id
            })
        },
        cancelComplete(typ){
            dispatch({
                type:"ADD_SUB",
                typ
            })
        }
    }
}
Order=connect(mapDispatchToProps,mapDispatchToProps)(Order)
export default Order
