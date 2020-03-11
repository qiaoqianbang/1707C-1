// proptypes的类型验证

// //举例 普通类型
// PropTypes.number
// PropTypes.string
// PropTypes.symbol
// PropTypes.bool

// //举例 引用类型
// PropTypes.array
// PropTypes.object
// PropTypes.func

// //举例 自定义类型
// PropTypes.node

//typescript数据类型：
//数据类型
// boolean number string array enum tuple void any never null undefined


//typescript函数、方法
//举例 重载
// function getInfo(name:string):string;
// function getInfo(age:number):string;
// function getInfo(str:any):any{
//     if(typeof str==="string"){
//         return "我叫："+str
//     }else if(typeof str==="number"){
//         return "年龄："+str
//     }
// }
// console.log(getInfo(123))

//举例 可选参数的使用
// function person(name:Array<string>,age?:string):string{
//     return ""
// }
// console.log(person(["1","2"]))

// typescript类
//继承
// class Person{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
// }
// class One extends Person{
//     constructor(name:string){
//         super(name)
//     }
// }
// new Person("wjy")

//实例方法 实例属性
// class Person{
//     name:string
//     constructor(){
//         this.name=""
//     }
//     static get(){
//         alert("get")
//     }
//     set(name:string){
//         return this.name=name
//     }
// }

// let p = new Person();

// console.log(p.set("aaa"))

//私有方法 私有属性
// class Animal {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     private sayName(): string {
//         return this.name;
//     }
// }

//类方法 类属性
// class Animal {
//     name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     sayName(): string {
//         return this.name;
//     }
// }
// let a=new Animal("aaa")
// console.log(a.sayName())

//举例 多态
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){
//         alert('animal')
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         alert(this.name+"吃")
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         alert(this.name+"吃")
//     }
// }
// let dog = new Dog("狗")
// let cat = new Cat("猫")

//修饰符 private protected public
// private 只能在本类中调用
// protented 只能在父子类或本类使用
// public 在哪调用都可以

//接口
//参数接口
// interface FullName{
//     fName:string;
//     sName?:string;
// }
// function pName(name:FullName):void{
//     alert(name.fName+name.sName)
// }
// let obj={
//     fName:"1",
//     // sName:"2"
// }
// pName(obj)

//方法接口
// interface fun1{
//     show1(key:string,value:string):string
// }
// interface fun2 extends fun1{ //接口可以继承接口 类只能实现接口
//     show2(name:string):string;
// }
// class Demo implements fun2{
//     show1(key:string,value:string):string{
//         return ""
//     }
//     show2(name:string):string{
//         return ""
//     }
// }
//类接口
// interface Animal{
//     name:string
//     eat(str:string):string
// }
// class Dog implements Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){
//         return ""
//     }
// }
// let a=new Dog("后")
// a.eat()

//泛型
//函数泛型
// function getInfo<T>(name:T):T{
//     return name
// }
// console.log(getInfo<string>("12"))


//类泛型
// class MinClass<T>{
//     list:Array<T>=[];
//     add(num:T){
//         this.list.push(num)
//     }
//     min():T{
//         let minNum=this.list[0];
//         for(let i=1;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                 minNum = this.list[i]
//             }
//         }
//         return minNum
//     }
// }
// let m=new MinClass<number>()
// m.add(2)
// m.add(1)
// m.add(5)
// m.add(6)
// alert(m.min())