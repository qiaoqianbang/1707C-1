import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getList} from '../../store/action'

class First extends Component {
    render() {
        const {allList}=this.props
        return (
            <div className="first">
                <div className="header-top"></div>
                <div className="mains">
                    {
                        allList.map(v=><div className="items" key={v.id}>
                            <div className="left">
                                <img src={v.imgs} alt=""/>
                            </div>
                            <div className="right">
                                <p onClick={()=>this.links(v.id)}>{v.title}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
    links(id){
        this.props.link(id)
        this.props.history.push('/detail')
    }
    componentDidMount(){
        this.props.getList()
    }
}

function mapStateToProps(state){
    return {
        allList:state.beauty.allList
    }
}

function mapDispatchToProps(dispatch){
    return {
        getList(){
            dispatch(getList())
        },
        link(id){
            dispatch({
                type:'GET_DETAIL',
                id
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(First)
