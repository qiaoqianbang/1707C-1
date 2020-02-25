// 声明
// let const
//let 变量 const 常量

// var let const


//全局作用域:window
//函数作用域:function(){}
//块级作用域:{}

//声明:var const let function class import 

//变量提升
let foo=2;
console.log(foo);

//暂时性死区
//只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响
var tmp=123
if(true){
    // tmp='abd'
    let  tmp=999
    console.log(tmp)
}
console.log(tmp)

//变量结构赋值
//数组 对象 字符串 数值 布尔 参数

//数组结构
const [x,...y]=[1,2,3,4]
console.log(x,y)
var arr=[1,2,3,4,5,6]
console.log([...arr])

//字符串解构一一对应
const [a,b,c,d,e]='hello'
console.log(a,b,c,d,e)

//对象解构
const obj={ss:11,yy:22}
const {ss,yy}=obj
console.log(ss,yy)

//函数参数解构
function fun([x=3,y=1]){
    console.log(x,y)
}
fun([])

//应用场景
//for for
// let t;
//     t = a;
//     b = t;
//     a = b;
// >>> 按位
//[a,b] = [b,a]

//字符串扩展

// str.startsWith('a')
//字符串str是否以a为开头

// str.endsWith('a')
//字符串str是否以a为结尾
const str='kuaile'
if(str.startsWith('u')){
    console.log('11')
}else if(str.endsWith('l')){
    console.log('99')
}

//对象扩展

//对象作为函数参数解构
const stu={
    a:"zz",
    b:'hh',
    c:'ss'
}

function ecc({a,b,c}){
    console.log(a,b,c)
}
ecc(stu)

//合并多个对象
var target={a:1,b:1};
var source1={b:2,c:2};
var source2={c:3}
Object.assign(target,source1,source2)
console.log(target)

//克隆对象
var allArr=[]
Object.assign(allArr,target,source1,source2)
console.log(allArr)

//数组扩展

var array=[1,2,3,4,5,6,10,7,8,9]
var sar=array.reduce((prev,next)=>{
    return prev + next
})
console.log(sar)


//扩展运算符(...)与rest参数的区别
// 扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列
const arr1=[1,...[2,4,6,7],99]
console.log(arr1)

// rest参数之后不能再有其他参数(即只能是最后一个参数)，否则报错
// ES6引入了rest参数用于获取函数的多余参数，实际就是替换arguments对象
bar = function(one, ...unknow) {
    console.log(one);
    console.log(unknow);
}
 
bar(1, 2, 3, 4,5);

function add (...values){
    console.log(values)
    　　let sum = 0;
    　　for (var val of values) {
        console.log(val,values)
    　　　sum += val;
    　　}
    　　return sum;
}
add(2, 5, 3)  //输出 10


//举例克隆数组：
//数组的深拷贝
// var arr2=[1,2,3,4,5]
// var arr3=arr2.concat()
// arr2[2]=5
// //证明地址不同
// console.log(arr2)
// console.log(arr3)
//数组的浅拷贝=
// var arr2=[1,2,3,4,5]
// var arr3=arr2
// arr3[2]=5
// //证明地址一样
// console.log(arr2)
// console.log(arr3)

//举例合并数组：
//举例拼接数组：
var arr2=[1,2,3,4,5]
var arr3=[3,4,5]
// var arr4=arr2.concat(arr3)
// console.log(arr4)
aa=[...arr2,...arr3]
console.log(aa)

//消除魔法字符串
const as=Symbol('as')
console.log(typeof as)
const shapeType={
    trying:Symbol('trying'),
    name:Symbol('name')
}
function get(shape,options){
    let area=0;
    switch(shape){
        case shapeType.trying:
            area=5*options.width+options.height
            break
    }
    return area
}

const area=get(shapeType.trying,{width:100,height:100})
console.log(area)
// [2, 3, 5, 4, 5, 2, 2]去重
const s=new Set()
const arr6=[1,2,3,4,4,8,7,8]
// arr6.forEach(x=>s.add(x))
// for(let key of s){

// }
console.log(new Set(arr6))


// WeakSet 应用场景
//存储DOM节点移动或者删除，不用担心节点从文档中删除引发内存泄露 DC 垃圾回收机制

// Class
//ES5 实现 Person构造函数 参数name age 方法toString
// function Point(x,y){
//     this.x=x;
//     this.y=y;
// }
// Point.prototype.toString=function(){
//     return '(' + this.x + "," + this.y + ")"
// }
// var p=new Point(1,3)
// console.log(p)

// Class
//ES6 实现 Person构造函数 参数name age 方法toString
class Point{
    constructor(x,y){
        this.x=x,
        this.y=y
    }
    toString(){
        return '(' + this.x + "," + this.y + ")"
    }
}
var p=new Point(1,3)
console.log(p)




// 规定模块对外接口 以'react'为例
//export
//默认导出：export default
//单独导出：export
//按需导出：export {name,age}
//改名导出：export {name as username}

//import
//默认导入：import Person from './'
//整体导入：import * as React from 'react'
//按需导入：import {name,age} from './'
//改名导入：import {name as age} from './'
//复合导入：import React,{component} from 'react'