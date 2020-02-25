//声明 let const var function (函数声明) class（类声明）
//let 声明变量 可以改变值
//const  声明常亮 不可改变（改变报错）

//变量提升
// var 的情况
//console.log(str); // 输出undefined
//var str = 2;

// let 的情况
//console.log(num); // 报错ReferenceError
//let num = 2;

//暂时性死区
// var cont = 123;

// if (true) {
//     cont = 'abc';
//     let cont;
// }
//报错  ReferenceError
//let声明变量cont之前都属于cont的‘死区’
//块级作用域 内 let命令声明的变量不受外部变量影响

//变量解构赋值
// 数组 对象 字符串 数值 布尔值 函数参数

//对象解构
// let { a, b } = { a: 1, b: 2 };
// console.log(a, b); //1 2

// let { foo: z } = { foo: 2, y: 4 };
// console.log(z); //2
// let { a = 0 } = {};
// console.log(a); //0
// let { b = 1 } = { b: 4 };
// console.log(b); //4
// let { x: y = 9 } = { x: 10 };
// console.log(y); //10

//提取Math对象中的log, sin, cos属性
// let { log, sin, cos } = Math;
// console.log(log,sin,cos);

//数组解构
// let arr = ['1', '2', '3'];
// let [a, b, c] = arr;
// console.log(a, b, c); //1 2 3

//函数参数解构
// let obj = { a: 1, b: 2 };

// function Func({ a, b }) {
//     console.log(a + b);
// }
// Func(obj); //3

// let arr = [1, 4];

// function Func([x, y]) {
//     console.log(x, y);
// }
// Func(arr);

//应用场景
//1.变量交换
//2.返回多个值，选择接受几个变量
//3.返回值是数组，作为参数
//----------------------------
//字符串扩展 startsWith() endsWith()
//const str = 'Job';
//判断字符串开头字符
// if (str.startsWith('J')) {
//     console.log('true');
// } else {
//     console.log('false');
// } //true
//判断字符串结尾字符
// if (str.endsWith('B')) {
//     console.log('true');
// } else {
//     console.log('false');
// } //false
//----------------------------
//对象扩展
// let obj = { a: 1, b: 2 };
// Object.assign(obj, { c: 13 });
// console.log(obj);//{ a: 1, b: 2, c: 13 }
//----------------------------
//数组扩展
//...
// let arr = [1, 2, 3];
// console.log(...arr); //1 2 3
//----------------------------
//rest参数
// function Fun(...param) {
//     let count = 0;
//     for (let i of param) {
//         count += i;
//     }
//     console.log(count);
// }
// Fun(1, 2, 3);
//区别  ...展开数组，rest获取函数的多余参数，数组形式
//----------------------------
//举例克隆数组：
// let arr1 = [1, 2, 3];
// let newarr = arr1.concat();
// console.log(newarr);
//----------------------------
//举例合并数组：
// let arr = [1, 2, 3];
// let arr3 = ['a', 'b', 'c'];
// arr.map(i => arr3.push(i));
// console.log(arr3);
//----------------------------
//举例拼接数组：
// let arr = ['t', 'j'];
// let arr2 = [1, 2];

// arr.push(...arr2);
// console.log(arr);
// ["t", "j", 1, 2]

//Symbol
// const Type = { key1: Symbol('a'), key2: Symbol('b') };

// function Myfunc(key, num) {
//     let count = 0;
//     switch (key) {
//         case Type.key1:
//             count += num + 1;
//             break;
//         case Type.key2:
//             count += num + 2;
//             break;
//     }
//     return count;
// }
// let res = Myfunc(Type.key1, 2); //3
// let res = Myfunc(Type.key2, 2); //4
// console.log(res);

//set 去重
// let arr = [1, 1, 2, 3, 2, 4, 3];
// const s = new Set();
// arr.map(i => s.add(i));
// for (let j of s) {
//     console.log(j); //1 2 3 4
// }

//WeakSet应用场景
//存储DOM节点是时，DOM节点移动或者删除，避免引发内存泄漏

//class
//es5
// function Point(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Point.prototype.toString = function() {
//     return '('+this.name +','+this.age')';
// };
// var func = new Point('qiao', 23);
// console.log(func);
// //es6
// class Point {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     toString() {
//         return '('+this.name +','+this.age')';
//     }
// }
// let func2 = new Point('qiao', 23);
// console.log(func2);

//export
//默认导出; export default
//单独导出; export
//按需导出;export {a,b}
//改名导出;export {a as name}
//import
//默认导入; import  from  '/'
//整体导入;import * as React from './'
//按需导入; import {a} from '/'
//改名导入; import {a as name} from '/'
//复合导入;import React,{Component} from '/'