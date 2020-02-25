// - **表达式**： 
//声明 解构赋值
// - **内置对象**：
  //字符串扩展,数值扩展,对象扩展,函数扩展,正则扩展,symbol
   //Map Set WeekMap WeekSet Proxy Reflect反射/设计模式 观察者模式
// - **语句与运算**：
   //Class Module Iterator
// - **异步编程**：
  // Promise Async Generator


// ### **声明**
// - **const命令**：声明常量
// - **let命令**：声明变量

// 作用
 // 全局作用域 
 // 函数作用域 
  //块级作用域 

//变量提升
// let const var
//   console.log(f)
//   let f=a;
//暂时性死区
//  var tmp=123;
//  if(true){
//      tmp=111;
//      let tmp
//  }
// console.log(tmp)

// ### **变量解构赋值**


//变量包括
//数组 对象 字符串 数值 布尔 参数...

//  **对象解构**

 
//提取Math对象中的log, sin, cos属性
  
const {log,sin,cos}=Math


//  **数组解构**

//   - 例子：
const [x,...y] = [1,2,3,4]
// - **函数参数解构**

//  - 数组解构： 
function Func([x=3,y=1]){
    console.log(x+y)
}
Func([])

//   - 对象解构：
function Func({x=3,y=1}){
    console.log(x,y)
}
Func({})


//  应用场景
避免使用第三个变量
// 列举两个
let a=1,b=2;
[a,b]=[b,a];
console.log(a,b);
function f(){
    return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
// ### **字符串扩展**

// - **startsWith()**：
判断首字母是否大写
// - **endsWith()**：
判断最后一个字母是否大写
   // const str = "Wrd"
   // if(str.startsWith("W")){
   //     console.log("hh")
   // }else{
   //     console.log("hd")
   // }
   //startsWith/endsWith


// ### **对象扩展**


//用Object.assign()扩展数组
const arr={x:1,y:1}
const boj1=Object.assign({},obj,{z:1})
console.log(obj1)
// {x:1,y:1,z:1}
// ### **数组扩展**


//扩展运算符(...)与rest参数的区别
 function add(...values){//...values rest参数
       let sum = 0;
       for(let val of values){
           console.log(val,"val")
           sum += val
       }
       return sum
   }
   console.log(add(1,2,3))
   let {x,y,...z} = {x:1,y:2,a:3,b:4} //...z 扩展运算符
   console.log(x,y,z)
  

//举例克隆数组：
const a = [1, 2];
const a1= [...a];
//a1=[1,2]
//举例合并数组：
const arr1 = ['a', 'b'];
const arr2 = ['c','a'];
const arr3 = ['d', 'e'];
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c','a', 'd', 'e' ]
//举例拼接数组：
const arr1 = ['a', 'b'];
const arr2 = ['c','a'];
const arr3 = [...arr1,...arr2];
// [ 'a', 'b', 'c','a']

// ### Symbol


//消除魔法字符串
const shapeType={
   trans:Symbol("aaa")
}
function getArea(shape,opt){
   let area=0;
   switch(shape){
       case shapeType.trans:
           area=0.5*opt.width*opt.height
           break;
   }
   return area
}
const area=getArea(shapeType.trans,{width:100,height:100})
console.log(area)


// ### **Set**

// /[2, 3, 5, 4, 5, 2, 2]去重
const obj = new Set();
const arr = [2, 3, 5, 4, 5, 2, 2];
arr.forEach(item => {
  obj.add(item)
})
for(let key of obj){
  console.log(key)//[2, 3, 5, 4]
}
//[2, 3, 5, 4, 5, 2, 2]去重



// ### **WeakSet**

// >应用场景

//存储DOM节点时候，DOM节点移动或者删除，不用担心节点从文档中删除引发内存泄漏 DC垃圾回收机制;

// ### **Class**


//ES5 实现 Person构造函数 参数name age 方法toString
function Fun(x, y){
   this.x = x;
   this.y = y;
 }
 Fun.prototype.toString = function(){
   return '(' + this.x + ',' + this.y + ')'
 }
 var obj = new Fun(1, 2);
 console.log(obj)//Fun { x: 1, y: 2 }
//ES6 实现 Person构造函数 参数name age 方法toString
class Fun{
   constructor(x, y){
       this.x = x;
       this.y = y
   }
   toString(){
       return '(' + this.x + "," + this.y + ")"
   }
}
let obj = new Fun(1,3);
console.log(obj);//Fun { x: 1, y: 3 }


// ### **Module**

// - 命令

// - - **export**：规定模块对外接口 以'react'为例

// - - **默认导出**：
//export default
// - **单独导出**：
//export
// - **按需导出**：
//export {name,gender}
// - **改名导出**：
//export {name as names}
// - - **import**：导入模块内部功能 以'react'为例

// - - **默认导入**：
//import Person from './'
// - **整体导入**：
//import * as 
// - **按需导入**：
//import {name,gender} from './'
// - **改名导入**：
//import {name as names} from './'
// - **复合导入**：
//import React,{component} from 'react'