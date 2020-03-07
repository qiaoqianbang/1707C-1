// 作业整理今天讲课内容：

// 大纲：

// 1、proptypes的类型验证

// ```javascript
// //举例 普通类型
// //举例 引用类型
// PropTypes.array
// PropTypes.bool
// PropTypes.func
// PropTypes.number
// PropTypes.object
// PropTypes.string
// PropTypes.symbol

// //举例 自定义类型
// 自定义的 `arrayOf` 或 `objectOf`
// PropTypes.arrayOf
// PropTypes.objectOf


// ```

// 2、typescript数据类型：
//array
// let arr:Array<string>=['']
//string
// let str:string='zz'
//any
// let any:any=''
//元祖 tuple
// let tuple:[string,number]=['1',3]
//boolean
// let flag:boolean=true
//枚举 enum 字典
// enum Flag{success,error=5,demo}
// let f:Flag=Flag.success;
// console.log(f)

// enum Color{blue='zz',red='dd',orange='hh'}
// let a:Color=Color.blue;
// let b:Color=Color.orange;
// console.log(a,b)

//null undefined
// let num:string|undefined|null
// console.log(num)

//void
// function run1():void{
//     return
// }

//never 从来不出现的值， 子类null undefined

// let cc:never;
// cc=(()=>{
//     throw new Error('错误')
// })()
// ```javascript
// //数据类型
// ```
//ts中的数据类型
//string boolean tuple enum null undefined void never any


// 3、typescript函数、方法：
//javascript
//举例 重载
//举例 可选参数的使用
// function frg(){}
// let frg=function(){}
// function fun():void{
//     return 
// }
// function fun1():Array<string>{
//     return ['1']
// }
// function fun2():string{
//     return ''
// }

// function  person(name:Array<string>,age?:string):string{
//     return ""
// }
// person(['1','2'],"99")

// function sum(...args:number[]):number{
//     let sumNum=0;
//     args.forEach(item=>{
//         sumNum+=item
//     })
//     return sumNum
// }
// console.log(sum(1,2,3,4))


// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any{
//     if(typeof str==='string'){
//         alert('我叫'+str)
//     }else if(typeof str==='number'){
//         alert('年龄'+str)
//     }
// }
// console.log(getInfo('123'))
// console.log(getInfo(123))


// 4、typescript类

// ```javascript
// //继承
// class Person{
//     name:string;
//     age:string;
//     constructor(name:string,age:string){
//         this.name =name;
//         this.age=age;
//     }
// }
// class Web extends Person{
//     job:string;
//     constructor(name:string,age:string,job:string){
//         super(name,age);
//         this.job=job;
//     }
// }
// let p=new Person('yilei','10')
// console.log(p)

// class Person{
//     static a:string; //加载一次不会变的属性和方法
//     name:string;
//     constructor(){
//         this.name=''
//     }
//     set(name:string){
//         this.name=name
//         console.log(this.name)
//     }
//     static get(){
//         alert('GET方法'+Person.a)
//     }
// }
// let p=new Person()
// p.set('zz')
// Person.a='hh'
// Person.get()

// //实例方法 实例属性

// class Base{
//     element:string
//     css:any
//     constructor(){
//         this.element='获取dom节点'
//         this.css=function(arr,value){
//             this.element.style.arr=value
//         }
//     }
//     static $(element:any):any{
//         return new Base()
//     }
// }
// Base.$('box').css('color','red')

// //私有方法 私有属性

// //类方法 类属性

// //举例 多态
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){
//         alert(this.name+'Animal')
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
// }
// let dog = new Dog("狗")
// dog.eat()
// let cat = new Cat("猫")
// cat.eat()


// abstract class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     say(){}
//     // abstract age:string;
//     abstract eat():any;
//     abstract run():any
// }

// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){}
//     run(){}
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){}
//     run(){}
// }
// let dog =new Dog('狗');
// let cat =new Cat('猫');

// //修饰符 private protected public 访问
// private 只能在本类中调用
//protented 只能在父子类或本类使用
// public在哪里调用都可以
// class yanshi{
//     private static nameD:string='lei';
//     private set(num:number){

//     }
//     say(){
//         let s=new yanshi()
//         s.set(nameD)
//     }
// }
// let y = new yanshi()
// y.say()

// class B extends yanshi{
//     say(){
//         alert(yanshi.nameD)
//     }
// }
// let b = new B()
// b.say()

// 5、接口

// ```javascript
// //参数接口

// //方法接口

// //类接口
// ```

// interface FullName{
//     fName:string;
//     sName?:string
// }
// function pName(name:FullName):void{
//     alert(name.fName+name.sName)
// }
// let obj={
//     fName:'----',
//     sName:'哈哈哈'
// }
// pName(obj)

// interface fun1{
//     show1(key:string,value:string):string
// }
// let fun1=function(key:string,value:string):string{
//     return key+value
// }

// class Demo implements fun1{
//     show1(key:string,value:string):string{
//         return ''
//     }
// }
// interface fun2 extends fun1{
//     show2(name:string):string
// }

// class Demo implements fun2{
//     show1(key:string,value:string):string{
//         return ''
//     }
//     show2(name:string):string{
//         return ""
//     }
// }

// interface arr{
//     [index:string]:any
// }
// let arr1:arr=['a','b']

// interface obj{
//     [index:string]:any
// }
// let arr2:obj={name:'zz',age:'19'}

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
//         return ""
//     }
// }

// class Cat implements Animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     eat(){
//         return ""
//     }
// }
// let dog = new Dog("狗")
// let cat = new Cat("猫")

// 6、泛型

// ```javascript
// //函数泛型
// 泛型函数就是，你定义函数时候，是万能类型。在调用的时候，只要你把具体的类型传进去就好。好处呢，就是代码的复用，减少代码量
// 工作需求是这样的 ，使用TCP/IP协议，从客户端发送 “结构体”到服务端。一般都是会将数据转化成byte[],再进行数据的传送。查资料和用泛型改造后：
// //类泛型
// （1）、定义泛型：Point<T>
// 首先，大家可以看到Point<T>，即在类名后面加一个尖括号，括号里是一个大写字母。这里写的是T，其实这个字母可以是任何大写字母，大家这里先记着，可以是任何大写字母，意义是相同的。
// （2）类中使用泛型
// 这个T表示派生自Object类的任何类，比如String,Integer,Double等等。这里要注意的是，T一定是派生于Object类的。为方便起见，大家可以在这里把T当成String,即String在类中怎么用，那T在类中就可以怎么用！所以下面的：定义变量，作为返回值，作为参数传入的定义就很容易理解了。


// class MinClass{
//     // list:number[]=[];
//     list:Array<number>=[]
//     add(num:number){
//         this.list.push(num)
//     }
//     min():number{
//         let minNumber=this.list[0];
//         for(let i=1;i<this.list.length;i++){
//             if(minNumber>this.list[i]){
//                 minNumber=this.list[i]
//             }
//         }
//         return minNumber
//     }
// }

// let m=new MinClass();
// m.add(1);
// m.add(2);
// m.add(3);
// m.add(4);
// m.add(5);
// alert(m.min())

class MinClass<T>{
    // list:number[]=[];
    list:Array<T>=[]
    add(num:T){
        this.list.push(num)
    }
    min():T{
        let minNumber=this.list[0];
        for(let i=1;i<this.list.length;i++){
            if(minNumber>this.list[i]){
                minNumber=this.list[i]
            }
        }
        return minNumber
    }
}

let m=new MinClass<number>();
m.add(1);
m.add(2);
m.add(3);
m.add(4);
m.add(5);
alert(m.min())