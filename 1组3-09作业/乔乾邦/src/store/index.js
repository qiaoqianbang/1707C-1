import { createStore } from 'redux';
const initdata = {
    List: [],
    index: 0,
};
let reducer = (state = initdata, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'SET_STATE':
            newState[action.key] = action.value;

            return newState;
        default:
            return state;
    }
};
const store = createStore(reducer);
export default store;