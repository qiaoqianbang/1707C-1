import React, { Component } from 'react'
import {NavLink,Switch} from 'react-router-dom'
import RouterView from '../routers/routerView'
export default class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                <div className="top">
                    <div className="ctop">
                    <NavLink to="/dashboard/subAccount">综合票房</NavLink>
                    <NavLink to="/dashboard/synthesize">分账票房</NavLink>
                    </div>
                </div>
                <div className="center">
                    <div className="left">
                        <div className="start">
                            点击星星优先展示
                        </div>
                        <div className="times">
                            时间
                        </div>
                    </div>
                    <div className="right">
                        <div className="c">
                        <Switch>
                            <RouterView routerlist={this.props.routerlist} />
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
