// - **表达式**：声明  解构赋值
// - **内置对象**：map set weekMap weekSet Proxy Reflect
// - **语句与运算**：class module iterator
// - **异步编程**：Promise Generator Async 

// ### **声明**: let const  

// - **const命令**：声明常量
// - **let命令**：声明变量

// > 作用 (作用域？)

// 全局作用域 window $ axios
// 函数作用域 function(){}
// 块级作用域 {}
// - 


// > 重点难点

// ```javascript
// //变量提升
// eg: 
 // console.log(a)
 // var a=1;
 // undefind 因为var 有变量提升功能
 // console.log(a)
 // let a=1;
 // 会报错 因为let没有变量提升

// //暂时性死区
// eg:
// var a=123;
// if(true){
//     a='abc';
//     let a
// }
// console.log(a)

// ```

// ### **变量解构赋值**

// ```javascript
// //变量包括
// // 数组 对象 字符串 数值 布尔 
// ```

// - **对象解构**
// const {x,y,...z}={1,2,3,4,5}
// x:1,y:2,z:{3,4,5}

//   ```javascript
//   //提取Math对象中的log, sin, cos属性
//    let {log,sin,cos} = Math;
  
//   ```

// - **数组解构**

//   - 例子：
//   const [x,y,...z]=[1,2,3,4,5]
//   x=1,y=2,z=[3,4,5]

// - **函数参数解构**

// function Fun([a=1,b=2]){
//     console.log(a,b)
// }
// Fun([])

// - - 数组解构：
//   const [x,y,...z]=[1,2,3,4,5]
//   x=1,y=2,z=[3,4,5]
//   - 对象解构：
//   const {x,y,...z}={1,2,3,4,5}
//   x:1,y:2,z:{3,4,5}

// > 应用场景

// - 列举两个
// 1. 两个变量互换值  [a,b]=[b,a]
// 2. const [x,y,z]=Fun(){} 

// ### **字符串扩展**

// - **startsWith()**：什么作用： 匹配字符串首字母
// - **endsWith()**：什么作用：匹配字符串最后一个字母

// ### **对象扩展**

// ```javascript
// //用Object.assign()扩展数组
// let arr1={x:1,y:2}
// let arr2=Object.assign({},arr,{z:3})
// console.log(arr2) {x:1,y:2,z:3}

// ```

// ### **数组扩展**

// ```javascript
//扩展运算符(...)与rest参数的区别

// function Fun(...val){ //...val rest中的参数
//     let a=0;
//     for(let val of val){
//         a+=val
//     }
//     return a
// }
// Fun(1,2,3)
// let {x,y,...z}={1,2,3,4,5} // ...z扩展运算符

//举例克隆数组：
// let arr=[1,2,3]
// let str=arr.concat()

// //举例合并数组：
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[...arr1,...arr2]//[1,2,3,4,5,6]
//举例拼接数组：
// let arr1=[1,2,3]
// let arr2=[0,...arr1,4,5]//[0,1,2,3,4,5]
// ```

// ### Symbol

// ```javascript
// //消除魔法字符串
// const shapeType={
//   triangle:'think'
// }
// function getArea(shape,options){
//   let a=0;
//   switch(shape){
//     case 'think':
//       a=1+options.b+options.c
//       break;
//   }
//   return a
// }
// const a=getArea(shapeType.triangle,{b:1,c:1})
// console.log(a)

// ### **Set**

// ```javascript
//[2, 3, 5, 4, 5, 2, 2]去重
// let set=new Set([2, 3, 5, 4, 5, 2, 2])
// console.log([...set])//[ 2, 3, 5, 4 ]
// ```

// ### **WeakSet**

// > 应用场景
// 存储Dom节点时候，DOM节点移动或者删除，不用担心节点从文档中删除引发内存泄露 DC垃圾回收机制
// - 

// ### **Class**

// ```javascript
// //ES5 实现 Person构造函数 参数name age 方法toString
// function Person(name,age){
//   this.name=name;
//   this.age=age;
// }
// Person.prototype.toString=function(){
//   return '('+this.name+','+this.age+')'
// }
// let a=new Person("张三","18");
// console.log(a)

// //ES6 实现 Person构造函数 参数name age 方法toString
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age
  }
  toString(){
    return '('+this.name+','+this.age+')'
  }
}
let a=new Person("张三","18");
console.log(a)
// ```

// ### **Module**

// - 命令

// - - **export**：规定模块对外接口 以'react'为例

//   - - **默认导出**：export default
//     - **单独导出**：export
//     - **按需导出**：export {name,age}
//     - **改名导出**：export {name as username}

// - - **import**：导入模块内部功能 以'react'为例

//   - - **默认导入**：import Person from './'
//     - **整体导入**：import * as React from 'react'
//     - **按需导入**：import {name,age} from './'
//     - **改名导入**：import {name as username} from './'
//     - **复合导入**：import React,{component} from 'react'
