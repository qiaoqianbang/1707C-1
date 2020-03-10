import Mock from 'mockjs';
let data = Mock.mock('/list', [{
        'name': '热销',
        'type': 'hot',
        'flag': true,
    },

    {
        'name': '火锅',
        'type': 'pot',
        'flag': true,
    },

    {
        'name': '玉林串串香',
        'num': 0,
        'price': 56,
        'type': 'pot',
    },
    {
        'name': '豆捞坊',
        'num': 0,
        'price': 92,
        'type': 'pot',
    },
    {
        'name': '老官嘴老灶火锅',
        'num': 0,
        'price': 97,
        'type': 'pot',
    },
    {
        'name': '天地行精品菜馆',
        'num': 0,
        'price': 61,
        'type': 'hot',
    },
    {
        'name': '四月河豚',
        'num': 0,
        'price': 169,
        'type': 'hot',
    },
    {
        'name': '鲁粤湘天',
        'num': 0,
        'price': 75,
        'type': 'hot',
    },
]);
export default data;