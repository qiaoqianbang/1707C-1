import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import AdderRedrcer from './addReducer'

let reducers=combineReducers({
    AdderRedrcer
})

let store=createStore(reducers,applyMiddleware(thunk))

export default store