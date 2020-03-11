import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import Option from './Option/option'
let reducer=combineReducers({
    Option
})
export default createStore(reducer,applyMiddleware(thunk,logger))