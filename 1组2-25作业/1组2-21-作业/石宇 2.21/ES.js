// 轮询:是一种运行机制 轮询比较慢（不利于高并发）一个一个问，循环
// 当第一个异步函数执行完成之后，再到异步队列进行监视，一直循环不断的一个过程

// Promise
// 状态：pending 进行中  resolved 已成功  rejected 已失败

// js是单线程 主线程
// 宏队列：用来保存待执行的宏任务(回调) eg:setTimeout setInterval
// 微队列： 用来保存待执行的微任务(回调) eg:promise
// 主 微 宏 （执行顺序）

// 在主线程上添加宏任务与微任务
// setTimeout(() => {
//     console.log("setTimeOut")
// },0);
// new Promise(resolve => {
//     for(let i=0;i<5;i++){
//         console.log(i)
//     }
//     resolve()
// }).then(()=>{
//     console.log("Promise执行then方法")
// }).catch(()=>{

// }).finally(()=>{
//     console.log("finally")
// })

// 队列 先进先出
// 宏任务中创建微任务
// console.log("-----------start----------")
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
// console.log("-----------end----------")

//使let obj = {name:'xx',age:18}
//for(let key of obj){
//    console.log(key)
//}
// let obj = {
//     name:"xx",
//     age:18,
//     [Symbol.iterator]:function(){
//         const self = this;
//         let index = 0;
//         return {
//             next:function(){
//                 if(index<Object.keys(obj).length){//2
//                     return {//遍历中
//                         value:self[Object.keys(obj)[index++]],
//                         done:false
//                     }
//                 }else{
//                     return {//遍历结束
//                         value:self[Object.keys(obj)[index++]],
//                         done:true
//                     }
//                 }
//             }
//         }
//     }
// }
// for(let key of obj){
//     console.log(key);
// }

// Generator

//实现大象放进冰箱的步骤，并且注释讲解原理
// const start = (success) =>{  //内存里面创建空间 
//     setTimeout(()=>{
//         console.log("准备")
//         success()//
//     },500)
// }
// const first = (success) =>{//内存里面创建空间 
//     setTimeout(()=>{
//         console.log("第一步 打开冰箱门")
//         success()
//     },500)
// }
// const second = (success) =>{//内存里面创建空间 
//     setTimeout(()=>{
//         console.log("第二步 把大象放进去")
//         success()
//     },500)
// }
// const third = (success) =>{//内存里面创建空间 
//     setTimeout(()=>{
//         console.log("第三步 关闭冰箱门")
//         success()
//     },500)
// }
// const end = (success) =>{//内存里面创建空间 
//     setTimeout(()=>{
//         console.log("结束")
//         success()
//     },500)
// }
// const run = (fn) =>{ //内存里面创建空间 
//     const gen = fn() 
//     const success = () =>{
//         const result = gen.next();
//         console.log(result)
//         if(result.done){//递归停止条件  基线条件
//             return
//         }
//         result.value(success)//start(success) first(success) second
//     }
//     success() //
// }
// function* task(){//内存里面创建空间 task ->  function
//     yield start;
//     yield first;
//     yield second;
//     yield third;
//     yield end;
// }
// run(task)

// Async await

//实现大象放进冰箱的步骤，并且注释讲解原理
// const start = () =>{  
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             console.log("准备")
//             resolve()//
//         },500)
//     })
// }
// const first = () =>{  
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             console.log("第一步 打开冰箱门")
//             resolve()//
//         },500)
//     })
// }
// const second = () =>{  
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             console.log("第二步 把大象放进去")
//             resolve()//
//         },500)
//     })
// }
// const third = () =>{  
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             console.log("第三步 关闭冰箱门")
//             resolve()//
//         },500)
//     })
// }
// const end = () =>{  
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             console.log("结束")
//             resolve()//
//         },500)
//     })
// }
// async function task(){
//     await start();
//     await first();
//     await second();
//     await third();
//     await end();
// }
// task()
