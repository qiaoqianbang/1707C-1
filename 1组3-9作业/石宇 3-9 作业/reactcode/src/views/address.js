import React, { Component } from 'react'
import { connect } from 'react-redux';
//地址列表
class Address extends Component {
    render() {
        return (
            <div>
                {
                    this.props.address.map(v=><div className="items" key={v.id}>
                        <p>{v.desc}</p>
                        <p><span>{v.name}</span><span>{v.phone}</span></p>
                    </div>)
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        address:state.beauty.address,
    }
}

function mapDispatchToProps(dispatch){
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Address)
