// 表达式：声明 解构赋值
// 内置对象：字符串扩展，数值扩展，对象扩展，函数扩展，正则扩展，symbol
// Map,Set,WeekMap,WeekSet,Proxy,Reflect反射/设计模式 观察者模式
// 语句运算：Class Module Iterator
// 异步编程：Promise,Generator,Async

// 声明 let const let 变量 const 常量 var const  let  function class import

// 作用域：
// 全局作用域： window $ axios
// 函数作用域： function(){}
// 块级作用域：{}

// 变量提升
// let const 属于块级作用域，不适合变量提升，有死区问题
// console.log(foo)
// let foo=2;
// console.log(foo)
// var foo=2;(var 有变量提升)
// 暂时性死区
// var tmp=123;
// if(true){
//     tmp='abc';
//     let tmp
// }
// console.log(tmp)

// 数组 对象 字符串 数值 布尔 ..
// Math.log(x) x(任意数值或表达式) 的自然对数
// let x=9
// console.log(Math.log(x))
// Math 类的 sin(x)、cos(x)x 参数是弧度 正弦 余弦
// 弧度 = 角度 × π / 180
// var angle = 60;    //假设角度为60度
 
// var radian = angle * Math.PI / 180;    //计算出弧度
 
// // console.log( Math.cos(radian) );    //输出cos 60度的值
// console.log( Math.sin(radian) );  
// 数组解构
// const [x,...y] = [1,2,3,4]
// console.log(x,y);
// 对象解构
// let {a=10,b=5}={a:3};
// console.log(a,b);
// 应用场景：
// 冒泡排序的互换值
// let t;
// let a=1,b=2;
// // t=a;
// // a=b;
// // b=t;
// [a,b]=[b,a]
// console.log(a,b)
// function f(){
//     return [1,2,3,4,5]
// }
// let a,b,c;
// [a,b,,c]=f();
// console.log(a,b,c);
// function Func([x=3,y=1]){
//     console.log(x+y)
// }
// Func([])
// let Data={
//     title:'abc',
//     test:[{
//         title:'test',
//         desc:'description'
//     }]
// }
// let {title:titleA,test:[{title}]}=Data;
// console.log(titleA,title);

// startsWith()：返回布尔值，表示参数字符串是否在查找字符串的头部
// endsWith()：返回布尔值，表示参数字符串是否在查找字符串的尾部
// const str = "Yilei"
// if(str.startsWith("i")){
//     console.log("11")
// }else{
//     console.log("22")
// }
// console.log(str.endsWith("i"))

// Object.assign()可以用来处理数组，但是会把数组视为对象
// Object.assign([1, 2, 3], [4, 5])
// console.log(Object.assign([1, 2, 3], [4, 5]))
// [4, 5, 3]
// Object.assign()把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。
// rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
// 扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列
// 函数调用
// function add(...values){//...values rest参数
//     let sum = 0;
//     for(let val of values){
//         // console.log(val,"val")
//         sum += val
//     }
//     return sum
// }
// console.log(add(1,2,3))
// let {x,y,...z} = {x:1,y:2,a:3,b:4} //...z 扩展运算符
// console.log(x,y,z)

// var arr1 = ['a', 'b'];
// var arr2 = ['c'];
// var arr3 = ['d', 'e'];
// ES5的合并数组
// arr1.concat(arr2, arr3)
// console.log(arr1.concat(arr2, arr3));
// ES6的合并数组
// [...arr1, ...arr2, ...arr3]
// let arr = [1,2,3,4]
// let arr1 = []
// Object.assign(arr1,arr)
// console.log(arr1)
//Symbol
//它从根本上防止属性冲突
// const a = Symbol("a")
// console.log(typeof a)

// 消除魔法字符串
// const shapeType = {
//     triangle: Symbol("triangle"),
//     name: Symbol("name")
// }
// function getArea(shape,options){ //reducers redux
//     let area = 0;
//     switch(shape){
//         case shapeType.triangle:
//             area = .5 * options.width * options.height
//             break;
//     }
//     return area
// }
// const area = getArea(shapeType.triangle,{width:100,height:100})
// console.log(area);
// 数组去重
// console.log(new Set([2, 3, 5, 4, 5, 2, 2]))
//WeekSet
//应用场景：
//存储DOM节点时候，DOM节点移动或者删除，不用担心节点从文档中删除引发内存泄漏 DC垃圾回收机制

//class ES5 构造函数
// function Point(name,age){
//     this.name = name;
//     this.age = age;
// }
// Point.prototype.toString = function(){
//     return '(' + this.name + "," + this.age + ")"
// }
// var p = new Point(1,3);
// console.log(p);

//ES6
// class Point{
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
//     toString(){
//         return '(' + this.name + "," + this.age + ")"
//     }
// }
// let p = new Point(1,3);
// console.log(p);

//export
//默认导出：export default
//单独导出：export
//按需导出：export {name,age}
//改名导出：export {name as user}

//import
//默认导入：import Person from './'
//整体导入：import * as React from 'react'
//按需导入：import {Button,Icon} from './'
//改名导入：import {router as Router} from './'
//复合导入：import React,{component} from 'react'
