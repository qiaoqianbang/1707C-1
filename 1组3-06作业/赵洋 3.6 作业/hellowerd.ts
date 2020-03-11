

// 2.ts的数据类型  string string boolean tuple enum null undefined void never any
// let str:string ='lei'   //string

// let any:any=""   //any

// 数组
// let a = [1,3,4,[],{},'0']
// let arr:Array<string> = [""]

//元组 tuple arr = ()
// let tuple:[number,string] = [1,"2"]

//enum 
// enum Flag {success,error=5,demo}
// let f:Flag = Flag.demo
// console.log(f)

// enum Color {blue="blue",red="red",orange="orange"}
// let c:Color = Color.orange;
// let d:Color = Color.red;
// console.log(c,"----",d)

//null,undefined
// let num:string|null|undefined;

//void
//any never
// function run1():string{
//     return "--"
// }

//never 从来不出现的值，子类null undeined
// let a:never;
// a=(()=>{
//     throw new Error("错误")
// })()


// 3、typescript函数、方法

// function f(){}
// let f = function(){}

// function fun():void{//
//     return ""
// }
// function fun1():Array<string>{
//     return [1]
// }
// let f1 = function():string{
//     return 111
// }
//可选参数
// function person(name:Array<string>,age?:string):string{
//     return ""
// }
// console.log(person([1,2]))

//剩余参数 rest参数 ...
// function sum(...args:string[]):string{
//     let sumNum=0;
//     args.forEach(item => {
//         sumNum += item
//     })
//     return sumNum
// }
// alert(sum(1,2,3,4))

//重载 
//方法
function fun1(){}   //fun1方法名 {}方法体 访问修饰符
function getInfo(name:string):string;
function getInfo(age:number):number;
function getInfo(str:any):any{
    if(typeof str==="string"){
        alert("我叫:"+str)
    }else if(typeof str==="number"){
        alert("年龄:"+str)
    }
}
console.log(getInfo(123))//范型


// 4、typescript类

//使用ES5 语法创建构造函数 属性name和age sayHi的方法 原型链的方式添加sex getInfo的方法

// ts 可选参数 重载
// 可选参数 ? 

//ts中的类
class Person{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }
}
class Web extends Person{
    job:string
    constructor(name:string,age:number,job:string){
        super(name,age)
        this.job = job
    }
}
let p =new Person("yilei",28)

// 5.接口

//参数接口
interface FullName{
    fName:string;
    sName?:string
}
function pName(name:FullName):void{
    alert(name.fName+name.sName)
}
let obj = {
    fName:"一"
}
pName(obj)

// 方法接口  //两种方法
interface fun1{
    (key:string,value:number):string //
}
let demo:fun1 = function(key:string,value:number):string{//定义demo方法 实现fun1接口
    return key + value
}
// class Demo implements fun1{//implements 关键字 实现 extends的作用
//     show(key:string,value:string):string{
//         return ""
//     }
// }
// interface fun2 extends fun1{ //接口可以继承接口 类只能实现接口 
//     show2(name:string):string;
// }
// class Demo implements fun2{
//     show1(key:string,value:string):string{  //实现show1
//         return ""
//     }
//     show2(name:string):string{  //实现show2
//         return ""
//     }
// }
// interface Arr {
//     [index:string]:string
// }
// let arr1:Arr = ["a","b"]
// alert(arr1)
// interface obj {
//     [index:string]:any,
// }
// let arr1:obj = {name:'yi',age:18}
// alert(arr1.name)
// alert(arr1.age)

// 类接口
interface Animal{//动物
    name:string;
    eat(str:string):string
}
class Dog implements Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    eat(){
        return ""
    }
}
let a = new Dog("后")
a.eat()
class Cat implements Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    eat(){
        return ""
    }
}
let dog = new Dog("狗")
let cat = new Cat("猫")

//范型

class MinClass<T>{
    // list:string[]=[];
    list:Array<T>=[];
    add(num:T){
        this.list.push(num)
    }
    min():T{
        let minNum=this.list[0];
        for(let i=1;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i]
            }
        }
        return minNum
    }
}
let m = new MinClass<number>()
m.add(1)
m.add(2)
m.add(3)
m.add(4)
alert(m.min())//1