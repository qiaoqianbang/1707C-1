import React, { Component } from 'react';
import { connect } from 'react-redux';
interface IProps {
	list: any;
	addTodo: any;
	delTodo: any;
};
interface IState {
	text: string;
	btns: Array<string>;
	curIndex: number;
};

function mapStateToProps(state:any) {
    return {
        list:state.demo
    };
}
function mapDispatchToProps(dispatch:any){
    return {
        addTodo(text:string){
            dispatch({
                type:'ADD_CON',
                text
            })
        },
        delTodo(text:string){
            dispatch({
                type:'DEL_CON',
                text
            })
        }
    }
}

class Home extends Component<IProps,IState>{
    constructor(props:any){
        super(props)
        this.state={
            text:"",
            btns:["all","active","completed"],
            curIndex:0
        }
    }
    render() {
        return (
            <div className="home">
                <div className="top">
                    <input type="text" value={this.state.text} onChange={e=>this.setState({text:e.target.value})}/><button onClick={()=>{this.props.addTodo(this.state.text);this.setState({text:""})}}>add</button>
                </div>
                <div className="content">
                    {
                        this.props.list[this.state.btns[this.state.curIndex]].map((item:any,i:number)=>{
                            return <p key={i} style={{textDecoration:item.flag?'line-through':''}} onClick={()=>this.props.delTodo(item.text)}>{item.text}</p>
                        })
                    }
                </div>
                <div className="fo">
                    {
                        this.state.btns.map((item:any,i:number)=><span key={i} onClick={()=>this.setState({curIndex:i})}>{item}</span>)
                    }
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Home);