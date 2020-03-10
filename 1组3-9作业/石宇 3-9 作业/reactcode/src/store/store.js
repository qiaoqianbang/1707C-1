import {createStore,combineReducers,applyMiddleware} from 'redux'
import beauty from './reducer/reducer'
import thunk from 'redux-thunk'


let reducer=combineReducers({
    beauty
})
export default createStore(reducer,applyMiddleware(thunk))