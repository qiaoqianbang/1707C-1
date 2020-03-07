// 作业整理今天讲课内容：

// 大纲：

// 1、proptypes的类型验证

// ```javascript
// //举例 普通类型
// Proptypes.string
//Proptypes.number
// Proptypes.boolean
// Proptypes.symbol
// Proptypes.element
// Proptypes.node

// //举例 引用类型
// Proptypes.function
// Proptypes.array 
// Proptypes.object

// //举例 自定义类型
// static propTypes={
//     x:PropType.number,
//     y:PropType.string
// }
// ```

// 2、typescript数据类型：

// ```javascript
// //数据类型
// ```
// let flag:boolean=true;
// let str:string='lou'
// let any:any=''
// let num:any=1
// let arr:Array<number>=[1,2,3]
// let a:boolean|number=1
// //元祖
// let tuple:[number,string]=[1,"00"]
// //enum 枚举 字典
// enum Flag {success=1,error}
// let f:Flag=Flag.error
// console.log(f)
// //null,undefined
// let nums:number|null|undefined;
// //void 没有返回值
// function run():void{
// }
// //never 从来不出现的值 子类null undefined
// let b:never;
// b=(()=>{
//     throw new Error('错误')
// })()


// 3、typescript函数、方法：
// function fun():string{
//     return ""
// }
// let f=function():number{
//     return 1
// }
// ```javascript
// //举例 重载 getfun方法名 {}方法体 访问修饰符(private)  eg class A{ private fun1() }
// function getFun(name:string):string;
// function getFun(age:number):string;
// function getFun(str:any):any{
//     if(typeof str==="string"){
//         return str
//     }else if(typeof str==="number"){
//         return "年龄"+str
//     }
// }
// console.log(getFun(18))

// //举例 可选参数的使用 不能用在第一个参数  有默认值的情况下不可用
// function person(name:string,age?:string):string{
//     return name+age
// }
// console.log(person("la"))

// ```

// 4、typescript类

// ```javascript
// //继承
// class Person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age
//     }
// }
// class Wed extends Person{
//     job:string;
//     constructor(name:string,age:number,job:string){
//         super(name,age)
//         this.job=job
//     }
// }
// let p=new Person("lou",18)

// //实例方法 实例属性
// class Person{
//     name:string;
//     constructor(){
//         this.name=''
//     }
//     set(name:string){
//         this.name=name
//     }
//     get(){
//         alert('get方法'+this.name)
//     }
// }
// let p=new Person()
// p.set('lalala')
// p.get()

// //私有方法 私有属性

// class Person{
//     static get(){
//         alert('get方法')
//     }
// }
// let p=new Person()
// Person.get
// //类方法 类属性
// class Person{
//     static a:string;
//     name:string;
//     constructor(){
//         this.name=''
//     }
//     set(name:string){
//         this.name=name
//     }
//     static get(){
//         alert('get方法'+Person.a)
//     }
// }
// let p=new Person()
// p.set('lalala')
// Person.a="haha"
// Person.get()

// //举例 多态

// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){
//         alert('Animal')
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         alert(this.name+'Dog')
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         alert(this.name+'Cat')
//     }
// }
// let d=new Dog("狗")
// let b=new Cat('猫')

// abstract 抽象 含有抽象方法的一定是抽象类 抽象类中可以包含普通方法
// abstract class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     abstract eat():any
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         alert(this.name+'Dog')
//     }
// }

// //修饰符 private protected public
// ```
// public
// class Person{
//     public static nameD:string="lou"
// }
// class B extends Person{
//     say(){
//         alert(Person.nameD)
//     }
// }
// let b=new B()
// b.say()
// private
// class Person{
//     private static nameD:string="lou"
//     say(){
//         alert(Person.nameD)
//     }
// }
// let y=new Person()
// y.say()
// protected
// class Person{
//     protected static nameD:string="lou"
// }
// class B extends Person{
//     say(){
//         alert(Person.nameD)
//     }
// }
// let b=new B()
// b.say()

// 5、接口

// ```javascript
// //参数接口

// interface FullName{
//     fName:string;
//     sName:string
// }
// function pNmae(name:FullName):void{
//     alert(name.fName+name.sName)
// }
// let obj={
//     fName:"1",
//     sName:'2'
// }
// pNmae(obj)


// //方法接口

// interface fun1{
//     show1(key:string,value:number):string
// }
// let demo:fun1=function(key:string,value:number):string{//定义demo方法实现fun1接口
//     return key+value
// }
// class Demo implements fun1{//implements 实现extends
//     show(key:string,value:number):string{
//         return ''
//     }
// }


// interface fun2 extends fun1{//接口可以继承接口 类智能实现接口
//     show2(name:string):string
// }
// class Demo implements fun2{//implements 实现extends
//     show1(key:string,value:number):string{
//         return ''
//     }
//     show2(name:string):string{
//         return ''
//     }
// }

// //类接口
// ```


// interface Animal{
//     name:string;
//     eat(str:string):string
// }
// class Dog implements Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){
//         return ''
//     }
// }
// let a=new Dog('狗')
// a.eat()
// class Cat implements Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){
//         return ''
//     }
// }
// let d=new Dog("狗")
// let b=new Cat('猫')




// 6、泛型

// ```javascript
// //函数泛型

function Diss<T>(num:T):T{
    let arr:Array<T>=[]
    arr.push(num)
   
    console.log(arr)
    return num
}
let A=Diss<number>(1)

Diss(2)


// //类泛型
// ```
// class MinClass<T>{
//     list:Array<T>=[];
//     add(num:T){
//         this.list.push(num)
//     }
//     min():T{
//         let minNum=this.list[0];
//         for(let i=1;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                 minNum=this.list[i]
//             }
//         }
//         return minNum
//     }
// }
// let m=new MinClass<number>()
// m.add(1)
// m.add(2)
// m.add(3)
// alert(m.min())
