//什么是轮询？
//也就是我们所说的计算机常用的轮询调度算法(Round-Robin Scheduling)
//轮询调度算法的原理是每一次把来自用户的请求轮流分配给内部中的服务器，从1开始，直到N(内部服务器个数)，然后重新开始循环。
//也可以想象成：轮（循环）着询问（访问）数据！
//------------------------------------------------------
//Promise状态
// pending 进行中 resolve成功 reject 失败
// let promiseDemo = new Promise((resolve, reject) => {
//     resolve('成功');
//     reject('失败');
// }).then(res => {
//     console.log(res);
// });

//宏队列 全局任务 setTimeout,setInterval,I/o
//微队列  Promise,Object.observer

//在主线程上添加宏任务与微任务;
// console.log('start');
// setTimeout(() => {
//     console.log('setTime1');
// }, 0);
// new Promise(resolve => {
//         for (let i = 0; i < 5; i++) {
//             console.log(i);
//         }
//     })
//     .then(() => {
//         console.log('then');
//     })
//     .catch(() => {})
//     .finally(() => {
//         console.log('finally');
//     });
// setTimeout(() => {
//     console.log('setTime2');
// }, 0);
// console.log('end');
//宏任务中创建微任务;
//console.log("start")
// setTimeout(() => {//set1
//     console.log("setTimeOut1")
//     setTimeout(() => {
//         console.log("setTimeOut2")
//     }, 0);
//     new Promise(resolve => {
//         resolve()
//         console.log("Promise主")
//     }).then(()=>{
//         console.log("Promise.then")
//     })
// }, 0);
// setTimeout(() => {//set2
//     console.log("setTimeOut3")
// }, 0);
// console.log("end")

//Iterator (迭代器，是一个接口，遍历容器的所有元素)
// let obj = {
//     name: 'xx',
//     age: 18,
//     [Symbol.iterator]: function() {
//         const self = this;创建一个指针指向迭代器迭代集合的其实位置
//         let index = 0;
//         return {
//把迭代器的指向移到下一个位置，同时，该方法返回下一个元素的引用
//             next: function() {
//                 if (index < Object.keys(obj).length) {
//                     //2
//                     return {
//                         //遍历中
//                         value: self[index++],
//                         done: false,
//                     };
//                 } else {
//                     return {
//                         //遍历结束
//                         value: self[index++],
//                         done: true,
//                     };
//                 }
//             },
//         };
//     },
// };

//Generator
// const start = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('准备');
//             resolve(); //
//         }, 500);
//     });
// };
// const first = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('第一步 打开冰箱门');
//             resolve(); //
//         }, 500);
//     });
// };
// const second = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('第二步 把大象放进去');
//             resolve(); //
//         }, 500);
//     });
// };
// const third = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('第三步 关闭冰箱门');
//             resolve(); //
//         }, 500);
//     });
// };
// const end = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('结束');
//             resolve(); //
//         }, 500);
//     });
// };

// function* task() {
//     yield start();//，yield暂缓执行的标示，每执行一次next()，相当于指针移动到下一个yield位置
//     yield first();
//     yield second();
//     yield third();
//     yield end();
//     return;
// }
// const h = task(); //创建了h对象，指向helloGenerator
// h.next(); //第一次调用next()，执行到 start()，暂缓执行,并返回了"准备"
// h.next(); //第二次调用next()，继续上一次的执行，执行到 first(),暂缓执行，并返回了"第一步 打开冰箱门"。
// h.next(); //
// h.next();
// h.next();

const start1 = () => {
    setTimeout(() => {
        console.log('准备');
    }, 100);
};
const first1 = () => {
    setTimeout(() => {
        console.log('第一步 打开冰箱门');
    }, 100);
};
const second1 = () => {
    setTimeout(() => {
        console.log('第二步 把大象放进去');
    }, 100);
};
const third1 = () => {
    setTimeout(() => {
        console.log('第三步 关闭冰箱门');
    }, 100);
};
async function task() {
    await start1();
    await first1();
    await second1();
    await third1();
}
task();