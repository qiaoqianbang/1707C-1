// - 什么叫轮询？

//当第一个异步函数执行完成之后，再到异步队列进行监视，一直循环不断的一个过程

// ### **Promise**

// - 状态
// peding:进行中
// resolved:已成功
// reject:已失败
//   - 

// | 宏队列 |
// | :----: |
// | setTimeout       |
// | setInterval       |

// | 微队列 |
// | :----: |
// |  Promise      |
// 主线程-微线程-宏线程
// > 例题

// - EXP1: 在主线程上添加宏任务与微任务

// ```javascript

// ```console.log('---start---')
// setTimeout(()=>{
//     console.log('setTimeout')
// },0)
// new Promise(resolve=>{
//     for(let i=0;i<5;i++){
//         console.log(i)
//     }
//     resolve()
// }).then(()=>{
//     console.log('Promise')
// })
// console.log('---end---')

// - EXP2: 宏任务中创建微任务

// ```javascript
//  console.log('---start---')
// setTimeout(()=>{
//     console.log('set1')
//     setTimeout(()=>{
//         console.log('set2')
//     },0)
//     new Promise(resolve=>{
//         resolve()
//         console.log('Promise主')
//     }).then(()=>{
//         console.log('Promise.then')
//     })
// },0)
//  console.log('---end---')
// ```

// ### **Iterator**

// ```javascript
// //使let obj = {name:'xx',age:18}
// //for(let key of obj){
// //    console.log(key)
// //}
// //实现Iterator，并且注释讲解原理
// let obj={
//     0:'xx',1:18,
//     [Symbol.iterator]:function(){//使用Symbol.iterator方法
//         const self=this;//存储this
//         let index=0;//初始化下标
//         return {
//             next:function(){
//                 if(index<Object.keys(obj).length){//如果index小与对象keys长度
//                     return {
//                         value:self[Object.keys(obj)[index++]],//返回当前keys对应的value
//                         done:false
//                     }
//                 }else{//如果index大与对象keys长度
//                     return {
//                         value:self[Object.keys(obj)[index++]],
//                         done:true
//                     }
//                 }
//             }
//         }
//     }
// }
// for(let key of obj){
//     console.log(key)
// }
// ```

// ### **Generator**

// ```javascript
// //实现大象放进冰箱的步骤，并且注释讲解原理

// // ```
// const start=(success)=>{//内存里面创建一个start方法
//     setTimeout(()=>{
//         console.log('开始')
//         success()//next()
//     },500)
// }
// const frist=(success)=>{//内存里面创建一个frist方法
//     setTimeout(()=>{
//         console.log('第一步，打开冰箱门')
//         success()
//     },500)
// }
// const second=(success)=>{//内存里面创建一个second方法
//     setTimeout(()=>{
//         console.log('第二部，把大象放进冰箱')
//         success()
//     },500)
// }
// const third=(success)=>{//内存里面创建一个third方法
//     setTimeout(()=>{
//         console.log('第三部，关闭冰箱门')
//         success()
//     },500)
// }
// const end=(success)=>{
//     setTimeout(()=>{
//         console.log('结束')
//         success()
//     },500)
// }
// const run=fun=>{//内存里面创建一个run方法
//     const gen=fun()//task()
//     const next=()=>{
//         const result=gen.next();//{ value: [Function: frist], done: false }
//         console.log(result)
//         if(result.done){//如果 done: true
//             return
//         }
//         result.value(next)//调用value并且传参数（next）递归调用next()
//     }
//     next()
// }
// function* task(){
//     yield start;//停 等下一个next
//     yield frist;
//     yield second;
//     yield third;
//     yield end;
// }
// run(task)//调用run并将task传入

// ### **Async await**

// ```javascript
// //实现大象放进冰箱的步骤，并且注释讲解原理


const start=()=>{//内存里面创建一个start方法
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log('开始')
            resolve()//相当于next()
        },500)
    })
    
}
const frist=()=>{//内存里面创建一个frist方法
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log('第一步，打开冰箱门')
            resolve()//相当于next()
        },500)
    })
}
const second=()=>{//内存里面创建一个second方法
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log('第二部，把大象放进冰箱')
            resolve()//相当于next()
        },500)
    })
}
const third=()=>{//内存里面创建一个third方法
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log('第三部，关闭冰箱门')
            resolve()//相当于next()
        },500)
    })
}
const end=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log('结束')
            resolve()//相当于next()
        },500)
    })
}

async function task(){
    await start();//相当于next()
    await frist();
    await second();
    await third();
    await end();
}
task()

