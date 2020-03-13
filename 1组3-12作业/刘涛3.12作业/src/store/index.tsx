import { createStore } from 'redux';
let defaulsate = {
    list: [],
    count: 0,
};
let reducer = (state = defaulsate, action: any) => {
    let newstate = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'setstate':
            newstate[action.key] = action.value;
            return newstate;
        default:
            return newstate;
    }
};

const store = createStore(reducer);

export default store;
