// const命令: 声明常量 // let命令 ：声明变量
// const arr = [1, 12]; let str = '123';

//作用: var特点:声明提升,可以先使用后声明
//      const特点: 声明的值不可改变
//      let特点: 声明的值可以改变 但没有变量提升这个功能呢 执行顺序只能是先声明
//      暂时性死区:在块级作用域中 const let 的这种特性
// 列子 
// console.log(arr)
// var arr = "123"
// console.log(arr)
// var arr = "123"
// 暂时性死区
// var arr = 123;
// if (arr) {
//   arr = "444";
//   let arr
//   console.log(arr)
// }


// 变量包括 arr string Boolean Number...


// 对象解构
// let Mathr = { log: "lt", sin: "20", cos: "20" }

// let { x = "log", ...y } = Mathr
// console.log(x, y)

// 数组解构
// let [a, ...o] = [1, 2, 3, 4, 5, 6]
// console.log(a, o)

// let [s] = "123455"
// console.log(s)


// let [x, ...y] = "asdasd"
// console.log(x, y)

// 函数参数解构

// 数组解构
// function MapArr([arr, str]) {
//   console.log(arr, str)
//   return 123
// }

// MapArr(["123", { a: 444 }])

// 对象解构
// function MapObj({ x = "name", ...age }) {
//   console.log(x, age)
//   return 123
// }
// let obj = { name: 'lt', age: "1234", max: "1234" }
// MapObj(obj)


// 字符串解构
// startsWith 看是否已指定字符串开头 endsWith看是否已指定字符串结尾
// let str = "WMTlt120125"
// console.log(str.startsWith("WMT"))
// console.log(str.endsWith("W1"))
// 

// 用Object.assign()扩展数组
// 对象
// let obj = { a: 1, b: 2 }, obj2 = { c: 3 }
// let obj3 = Object.assign(obj, obj2)
// 数组
// let arr = [1, 2, 3], arr1 = [4, 5]
// console.log(Object.assign(arr, arr1))

// 扩展运算符(...)与rest参数的区别
// rest参数之后不能再有其他参数（即只能是最后一个参数）
// 扩展运算符(...)

// rest参数
// let [a, ...b] = [1, 2, 3, 4, 5, 6]
// console.log(a, b)
// 扩展运算符(...)
// let arr = [454, 6, 5]
// console.log(...[1, [11, 21, 31], ...arr, 44])

// 举例克隆数组：
// let arr = [1, 2, 3]
// let [...a] = arr
// console.log(a)
// console.log(arr)

// 举例合并数组：
// let arr = [1, 2, 3]
// let arr1 = [4, 5, 6]
// let arr2 = [...arr, ...arr1]
// console.log(arr2)

// 举例拼接数组：
// let arr = [1, 2, 3]
// let arr1 = [4, 5, 6]
// let arr2 = [...arr, ...arr1]
// console.log(arr2)




// symbole 消除魔法字符串
// let
// const obj = {
//   as: Symbol("symbolev2")
// }
// const arr = function (name, types) {
//   let abc;
//   switch (name) {
//     case "symbolev2":
//       abc = types.a + types.b
//       break;
//   }
//   return abc
// }

// console.log(obj.as, { a: "刘涛1", b: "郑卓瑞" })


// Set 去重
// let arr = [1, 2, 2, 2, 3, 4]
// let set = new Set()
// let aarr1 = []
// arr.forEach((item, index) => {
//   // console.log(set.add(item))
//   set.add(item)
// })
// // console.log(set)
// for (let ao of set) {
//   console.log(ao)
// }
// console.log([...set])

// WeakSet  用来创建dedom节点 。特点:移动或删除节点是不会担心内存泄露

// Es5 class

// function a() {
//   this.name = "lt"
//   return
// }


// a.prototype.toString = function () {
//   return console.log(this.name)
// }

// let aaa = new a()
// console.log(aaa)


// Es6 class


// class Fync {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b
//   }
//   toString() {
//     return this.a + this.b
//   }
// }

// let abc = new Fync(1, 2)
// console.log(abc.a)


// Module
// - - export ：规定模块对外接口 以'react'为例

// - -  默认导出 ：export default
// -  单独导出 ：export 
// -  按需导出 ：export {arr,data}
// -  改名导出 ：export arr as arrData

// - - import ：导入模块内部功能 以'react'为例

// - -  默认导入 ：import aa from "react"
// -  整体导入 ：import * as from "react"
// -  按需导入 ：import {arr} from "react"
// -  改名导入 ：import {arr as data} from "react"
//    复合导入 : import react,{component} from "react"