import { createStore } from 'redux';
let initestate = {
    list: [],
    idnum: 0,
};
const reducer = (state: any = initestate, action: any) => {
    let newstate = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'CHANGE_VALUE':
            newstate[action.key] = action.value;

            return newstate;
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
