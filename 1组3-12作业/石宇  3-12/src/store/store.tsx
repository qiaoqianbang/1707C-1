import {createStore,combineReducers} from 'redux'
import demo from './reducer/reducer'
let demo1 = combineReducers({
    demo
})

export default createStore(demo1)