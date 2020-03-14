import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages';
import {Provider} from 'react-redux'
import store from './store/stores'
ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));
