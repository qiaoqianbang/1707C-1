import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import StoreReducer from "./storeReducer"


let reducers=combineReducers({
    StoreReducer
})
let store=createStore(reducers,applyMiddleware(thunk))

export default store