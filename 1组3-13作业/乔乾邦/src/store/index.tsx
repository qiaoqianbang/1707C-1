import {createStore,combineReducers} from 'redux'
import eatList from './reducers/eatList'
import addrList from './reducers/addrList'
const reducers=combineReducers({
    eatList,
    addrList
})
const store=createStore(reducers)

export default store