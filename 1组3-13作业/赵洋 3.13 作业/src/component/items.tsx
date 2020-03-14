import * as React from 'react'
import { Button } from 'antd'

interface Ipoes {
    items: any,
    everylist: any,
    dispatch: any,
    allconst: any,
    allprice: any,

}
interface Ipod {
    its: any
}
export default class items extends React.Component<any>{
    handelchange(type: any) {
        let { everylist, items, dispatch, allconst, allprice } = this.props
        console.log(allconst,'00000');
        everylist.map((its: any, index: number) => {
            if (its.id == items.id) {
                if (type === '+') {
                    its.count++
                    this.forceUpdate();
                } else {
                    its.count--;
                    this.forceUpdate();
                }
            }
            return its
        })
        dispatch({
            type:'TYPE-LIST',
            data:everylist
        })
        dispatch({
            type:'WER-Y',
            count:type==='+'?++allconst:--allconst
        })
        if(type === '+'){
            allprice+=items.price;
        }else{
            allprice-=items.price
        }
        dispatch({
            type:'WDFT-U',
            count:allprice
        })
    }
    render() {
        let { items } = this.props
        console.log(items);

        return (
            <div className="home-one">
                <div className="home-lok">
                    <div className='lefts'>
                        <img src={items.imgurl} alt="" />
                    </div>
                    <div className='rights'>
                        <ul>
                            <li>{items.title}</li>
                            <li>￥{items.price}</li>
                            <p>
                                {
                                    items.count > 0 ? [<Button key={1} onClick={this.handelchange.bind(this, '-')}>-</Button>, <b key={5}>{items.count}</b>, <Button key={6} onClick={this.handelchange.bind(this, '+')}>+</Button>] : <Button onClick={this.handelchange.bind(this, '+')}>加入购物车</Button>
                                }
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
