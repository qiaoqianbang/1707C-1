import React, { Component } from 'react'

export default class Home extends Component {
    state={
        list:[],
        tab:["综合票房","分账票房"],
        tabIndex:0,
        allcount:0,
        listtab:[]
    }

    //排序
    sort(arr){
        if(arr.length<=1){
            return arr
        }
        let provit=arr[0];
        let left=[];
        let right=[];
        for(let i=1;i<arr.length;i++){
            if(arr[i].tickets<=provit.tickets){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        let l=this.sort(left);
        let r=this.sort(right);
        return l.concat(provit).concat(r)
    }

    //展示数量
    changeCount(){
        const {listtab}=this.state
        let allcount=0
        listtab.reduce((prev,next)=>{
            allcount+=next.tickets
            return prev
        },listtab)
        this.setState({allcount:allcount})
    }

    //tab切换
    tabs(){
        const {list,tabIndex}=this.state
        this.setState({listtab:this.sort(list.filter(item=>item.tab===tabIndex))},()=>this.changeCount())
    }
    render() {
        const {tab,tabIndex,allcount,listtab}=this.state
        return (
            <div className="home">
                <div className="header">
                    <ul className="header-main">
                        {
                            tab.map((v,i)=>{
                            return <li key={i} className={tabIndex===i?"active":''} onClick={()=>this.setState({tabIndex:i},()=>this.tabs())}>{v}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="bot">
                    <div className="bot-left">
                        <div className="top">
                            {
                                listtab.filter(item=>item.flag).length!=0?listtab.filter(item=>item.flag).map(v=><div key={v.id}><p>{v.title}</p><p>{v.tickets}</p></div>):<div >点击★优先展示</div>
                            }
                        </div>
                        <div className="bott">
                            <p>今日实时{allcount}万</p>
                        </div>
                    </div>
                    <div className="bot-right">
                        {
                            listtab.map((v,i)=>{
                                return <div className="items" key={i}>
                                    <span>0{i+1}</span>
                                    <span>{v.title}</span>
                                    <span>{v.tickets}</span>
                                    <span className={v.flag?'act':''} onClick={()=>this.starts(v.id)}>★</span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    //点星星
    starts(id){
        const {listtab}=this.state
        if(!listtab.every(item=>item.flag===false)){
            listtab.map(item=>item.flag=false)
        }
        listtab.forEach(item=>{
            if(item.id===id&&item.count==0){
                item.flag=true
                item.count++
            }else if(item.count!==0){
                item.flag=false
                item.count--
            }
        })
        this.setState({listtab:listtab})
    }

    componentDidMount=()=>this.initData()

    //初始化数据
    initData(){
        this.$http.get('/list').then(res=>{
            this.setState({list:res.data.list},()=>{this.tabs()})
        })
    }
}
