
// 轮询:就是线性执行 列子：列入老师让学生回答问题 有多名学生举手 但只能一个一个回答

// Promise :三种状态 成功 失败 等待

// 主线程 宏队列 微队列
// 在主线程上添加宏任务与微任务

// console.log("start")
// setTimeout(() => {
//   console.log("宏任务")
// }, 200);
// new Promise(res => {
//   console.log("主线任务")
//   res()
// }).then(data => {
//   console.log("微队列")
// })
// console.log("end")

// 宏任务中创建微任务

// setTimeout(() => {
//   console.log("strt")
//   new Promise(res => {
//     console.log("宏主任务")
//     res()
//   }).then(() => {
//     console.log("宏微任务")
//   })
// }, 200);


// 实现Iterator，并且注释讲解原理
// 目的使对象可以使用for of  利用iterator 将对象改变为迭代器

// let obj = {
//   0: "lt",
//   1: 22,
//   [Symbol.iterator]: function () {
//     let that = this;
//     let index = 0;
//     return {
//       next: function () {
//         if (index < Object.keys(obj).length) {
//           return {
//             value: that[index++],
//             done: false
//           }
//         } else {
//           return {
//             value: that[index++],
//             done: true
//           }
//         }

//       }
//     }

//   }
// }


// for (let key of obj) {
//   console.log(key)
// }





// Generator
// 实现大象放进冰箱的步骤，并且注释讲解原理
// 第一步首先创建一个Generator 列好执行顺序 写好程序  第二步为了实现多个步骤 封装一个函数 函数里面执行next() 做一个回调函数 通过判断返回done值来做终止 第三步:将传的方法在执行的步骤方法体内执行调用
// const start = function (success) {

//   setTimeout(() => {
//     console.log("开始")
//     success()
//   }, 200);

// }

// const first = function (success) {
//   setTimeout(() => {
//     console.log("第一步")
//     success()
//   }, 200);

// }

// const two = function (success) {
//   setTimeout(() => {
//     console.log("第二步")
//     success()
//   }, 200);

// }

// const three = function (success) {
//   setTimeout(() => {
//     console.log("第三步")
//     success()
//   }, 200);

// }

// const end = function (success) {
//   setTimeout(() => {
//     console.log("结束")
//     success()
//   }, 200);

// }

// function* util() {
//   yield start;
//   yield first;
//   yield two;
//   yield three;
//   yield end;
// }

// // 控制顺序
// const res = function (fn) {
//   let on = fn()
//   let next = function () {
//     let ona = on.next()
//     if (ona.done) {
//       return
//     }
//     // console.log(next)
//     ona.value(next)
//   }
//   next()
// }

// res(util)



// Async await
// 实现大象放进冰箱的步骤，并且注释讲解原理
// promise 配合async awiit 解决异步的问题 同时不用再写方法回调 使用起来简单方便
// const start = function () {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("开始")
//       res()
//     }, 200)
//   })
// }

// const first = function () {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("第一步")
//       res()
//     }, 200)
//   })
// }

// const two = function () {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("第二步")
//       res()
//     }, 200)
//   })
// }

// const three = function () {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("第三步")
//       res()
//     }, 200)
//   })
// }

// const end = function () {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("结束")
//       res()
//     }, 200)
//   })
// }



// async function* util() {
//   await start()
//   await first()
//   await two()
//   await three()
//   await end()
// }

// // 控制顺序
// const res = function (fn) {
//   let on = fn()
//   on.next()
// }
// res(util)
