// - 什么叫轮询？
// 也就是我们所说的计算机常用的轮询调度算法
// 轮询调度算法的原理是每一次把来自用户的请求轮流分配给内部中的服务器，从1开始，直到N(内部服务器个数)，然后重新开始循环。
// 也可以想象成：轮（循环）着询问（访问）数据！

// ### **Promise**状态
//pending  进行中
//resolved 已成功
//rejected 已失败




// | 宏队列 |
// script（全局任务）, setTimeout, setInterval, setImmediate, I/O, UI rendering.

// | 微队列 |
// process.nextTick, Promise.then, Object.observer, MutationObserver.


//执行顺序  主线程->微队列->宏队列
// > 例题

// - EXP1: 在主线程上添加宏任务与微任务
// console.log('------start------')
// setTimeout(()=>{
//     console.log('setTimeOut')
// },0)
// new Promise(resolve=>{
//     for(let i=0;i<4;i++){
//         console.log(i)
//     }
//     resolve()
// }).then(()=>{
//     console.log('Promise执行then方法')
// }).catch(()=>{

// }).finally(()=>{
//     console.log('finally')
// })
// console.log('------end------')


// - EXP2: 宏任务中创建微任务
// console.log('----start----')
// setTimeout(()=>{
//     setTimeout(()=>{
//         console.log('set1')
//     },0)
//     new Promise(resolve=>{
//         resolve()
//         console.log('promise主')
//     }).then(()=>{
//         console.log('promise.then')
//     })
// },0)
// setTimeout(()=>{
//     console.log('set2')
// },0)
// console.log('----end----')


// ### **Iterator**

// ```javascript
// let obj = {name:'xx',age:18}
// for(let key of obj){
//    console.log(key)
// }
// js对象obj is not iterable问题，无法使用扩展运算符展开对象解决方法，为对象定义迭代器

// Symbol.iterator
// 为每一个对象定义了默认的迭代器。该迭代器可以被 for…of 循环使用。

// //实现Iterator，并且注释讲解原理

// next 方法是迭代器iterator的一个方法
// 它的返回至少有一个对象，且对象中有两个属性：value＆done
// value 用于定义迭代出来的值
// done 布尔类型：
// 设置true，则直接返回；不设置或者设置false，则继续走方法，类似for循环。


// Reflect.ownKeys
// 静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组


// let obj = {name:'xx',age:18}
// for(let key of obj){
//    console.log(key)
// }

// let obj = {
//     name:'xx',
//     age:18,
//     [Symbol.iterator]:function(){
//         let index=0
//         return {
//             next:function(){
//                 let objArr=Reflect.ownKeys(obj)
//                 if(index<objArr.length-1){
//                     let key=objArr[index]
//                     index++;
//                     return {
//                         value:obj[key],
//                         done:false
//                     }
//                 }else{
//                     return {
//                         // value:self[index++],
//                         done:true
//                     }
//                 }
//             }
//         }
//     }
// }
// for(let key of obj){
//    console.log(key)
// }



// ### **Generator**

// generator由function*定义（注意多出的*号），还可以用yield返回多次,generator就是能够返回多次的

// ```javascript
// //实现大象放进冰箱的步骤，并且注释讲解原理

// ```
// 调用generator对象有两个方法，一是不断地调用generator对象的next()方法：
// next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。
// 当执行到done为true时，这个generator对象就已经全部执行完毕，不要再继续调用next()了

const start=(success)=>{
    setTimeout(()=>{
        console.log('准备')
        success()
    },500)
}

const first=(success)=>{
    setTimeout(()=>{
        console.log('第一步，打开冰箱')
        success()
    },500)
}

const second=(success)=>{
    setTimeout(()=>{
        console.log('第二步，把大象放进去')
        success()
    },500)
}

const third=(success)=>{
    setTimeout(()=>{
        console.log('第三步 关闭冰箱门')
        success()
    },500)
}

const end=(success)=>{
    setTimeout(()=>{
        console.log('准备')
        success()
    },500)
}

const run=(fn)=>{
    let gen=fn()
    const success=()=>{
        const result=gen.next();
        // {value: x, done: true/false}
        console.log(result)
        if(result.done){
            return
        }
        result.value(success)
    }
    success()
}

function* task(){
    yield start;
    yield first;
    yield second;
    yield third;
    yield end;
}
run(task)
// ### **Async await**

// ```javascript
// //实现大象放进冰箱的步骤，并且注释讲解原理

// ```

// async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。

// async /await 需要在function外部书写async，在内部需要等待执行的函数前书写await即可
// const start=()=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('准备')
//             resolve()
//         },500)
//     })
// }

// const first=()=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('第一步 打开冰箱门')
//             resolve()
//         },500)
//     })
// }

// const second=()=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('第二步 把大象放进去')
//             resolve()
//         },500)
//     })
// }

// const third=()=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('第三步 关闭冰箱门')
//             resolve()
//         },500)
//     })
// }

// const end=()=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('结束')
//             resolve()
//         },500)
//     })
// }

// async function task(){
//   await start();
//   await first();
//   await second();
//   await third();
//   await end();
// }
// task()