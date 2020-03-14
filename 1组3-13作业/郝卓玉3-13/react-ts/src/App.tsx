import React, { Component } from "react";
import LeftCom from './component/Left';
import RightCom from './component/Right';
import {Provider} from 'react-redux';
import {store} from './store/index';
import './App.css'
class App extends Component {
	render() {
		return (
			<div className="app">
				<Provider store={store}>
					<div className="app-left">
						<LeftCom />
					</div>
					<div className="app-right">
						<RightCom />
					</div>
				</Provider>
			</div>
		);
	}
}

export default App;