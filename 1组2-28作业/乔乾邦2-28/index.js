//单例模式
// class ClassName {
//     constructor() {
//         this.name = '1707c';
//         this.num = 40;
//     }
//     getname() {
//         return this.name;
//     }
//     getnum() {
//         return this.num;
//     }
//     set(name) {
//         this.name = name;
//     }
// }
// let b = new ClassName();
// b.set('1706b');
// console.log(b.getname());

let fs = require('fs');

function Events() {
    this.callbacks = [];
    this.results = [];
}
Events.prototype.on = function(callback) {
    this.callbacks.push(callback);
};
Events.prototype.emit = function(data) {
    this.result.push(data);
    this.callbacks.forEach(i => i(this.results));
};
let e = new Events();
e.on(result => {
    console.log(result);
});
fs.readFile('./a.js', 'utf8', (err, data) => {
    e.emit(data);
});

let myImage = (function() {
    let imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: src => {
            imgNode.src = src;
        },
    };
})();
let proxyImage = (function() {
    let img = new Image();
    img.onload = () => {
        myImage.setSrc(img.src);
    };
    return {
        setSrc: src => {
            myImage.setSrc('./pic.png');
            img.src = src;
        },
    };
})();
proxyImage.setSrc('');

let list = ['16638803239'];
let Iphone = function(phone) {
    console.log('接听');
};
let proxyphone = function(phone) {
    console.log('电话响');
    if (list.includes(phone)) {
        console.log('黑名单中的电话');
    } else {
        Iphone.call(this, phone);
    }
};
proxyphone('16638803239');