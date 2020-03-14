import { createStore } from 'redux';
const defaultstate = {
    navList: [
        { text: '美食' },
        { text: '美团' },
        { text: '生鲜' },
        { text: '专送' },
        { text: '下午茶' },
        { text: '披萨汉堡' },
        { text: '小吃馆' },
        { text: '家常菜' },
    ],
    shopList: [
        {
            name: '叫了个炸鸡',
            id: 0,
        },
        {
            name: '老鲁味黄焖鸡',
            id: 1,
        },
    ],
};
const reducer = (state = defaultstate, action: any) => {
    let newstate = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'setstate':
            return (newstate[action.key] = action.value);
        default:
            return newstate;
    }
};

const store = createStore(reducer);

export default store;
