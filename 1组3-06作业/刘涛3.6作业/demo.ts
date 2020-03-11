// ts数据类型
// 布尔 字符串 任意类型 数组 元组 枚举 Void null undefined 对象 Never
// let flag: Boolean | Number = false;
// let str: String = 'false';
// let any: any = true; //任意类型
// let arr: Array<string> = ['2'];
// let yz: [string, number] = ['', 23];
// enum Co {
//     red = 1,
//     green,
//     blue,
// }
// let c: Co = Co.green;
// // console.log(c);
// function a(): void {
//     alert('123');
// }
// // a();
// let u: undefined = undefined;
// let n: null = null;
// declare function create(prop: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK
// create(42); // Error
// create('string'); // Error
// create(false); // Error
// create(undefined); // Error
// let a:never;
// a=(()=>{
//     throw new Error("错误")
// })()

// ts方法 1.可选参数 2.重载
// function person(name: Array<string>, age?: string) {
//     return 'ads';
// }
// console.log(person(['123']));
// 剩余参数
// function sum(...args: string[]): string {
//     let sumNum = '0';
//     args.forEach(item => {
//         sumNum += item;
//     });
//     return sumNum;
// }
// alert(sum('1', '2', '3', '4'));
// 重载
// function get(name:string):string;
// function get(age:string):string;
// function get(str:any):any{
//     if(typeof str==="string"){
//         alert("dsa:"+str)
//     }else if(typeof str==="string"){
//         alert("dsa:"+str)
//     }
// }

// 类 继承
// class per {
//     name: string;
//     age: boolean;
//     constructor(name: string, age: boolean) {
//         this.name = name;
//         this.age = age;
//     }
//     add() {
//         console.log(this.name);
//         console.log(this.age);
//         // console.log(this.j);
//     }
// }
// class zi extends per {
//     j: string;
//     constructor(name: string, age: boolean, j: string) {
//         super(name, age);
//         this.j = j;
//     }
// }
// let a = new per('lt', false);
// let b = new zi('s', true, 'hehe');
// console.log(b.j);

// 类方法 属性

// class fn {
//     name: Array<string>;
//     constructor(name: Array<string>) {
//         this.name = name;
//     }
//     set() {
//         console.log(this.name);
//     }
// }
// let a = new fn(['131']);
// a.set();
// /私有方法 私有属性
// class Animal {
//     public name: string;
//     public constructor(theName: string) {
//         this.name = theName;
//     }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// let a = new Animal('ad');
// a.name = 'asdasd';
// class Animal {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     private move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// let a = new Animal('f');
// class Person {
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }

//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }

// let howard = new Employee('Howard', 'Sales');
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

// let a = new Animal('f');
// a.name;
// a.name = 'asdasd';
// console.log(a.name);
// console.log(a.name);
// 多态
// class DWY {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     eat() {
//         console.log(this.name);
//     }
// }
// // 狗
// class Dog extends DWY {
//     a: string;
//     constructor(name: string, a: string) {
//         super(name);
//         this.a = a;
//     }
// }
// // 猫
// class M extends DWY {
//     a: string;
//     constructor(name: string, a: string) {
//         super(name);
//         this.a = a;
//     }
// }
// let a = new Dog('动物园', '狗');
// let b = new M('动物园', '猫');
// console.log(a, b);
// 、接口
//参数接口
// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: 'Size 10 Object' };
// printLabel(myObj);
// 接口必选属性
// interface LabelledValue {
//     label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: false };
// printLabel(myObj);
// 接口可选属性
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: 'white', area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({ color: 'black' });
// console.log(mySquare);
// 只读属性
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// let pi: Point = { x: 10, y: 10 };
// pi.x = 6;
// console.log(pi);
//方法接口
// interface fun {
//     (): boolean;
// }
// let a: fun = () => {
//     return false;
// };
// console.log(a());
//类接口
// interface F {
//     name: string;
// }
// class Clock implements F {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// let a = new Clock('f');
// console.log(a);
// 继承接口;
// interface A {
//     name: string;
// }
// interface B {
//     age: number;
// }
// interface Clock extends A, B {}
// let a = <Clock>{};
// a.name = '323';
// a.age = 123;
// function fn(name: F): void {
//     alert(name);
// }
// let a = {
//     name: 's',
// };
// // 接口继承类
// }
// interface A {
//     name: string;
// }
// interface B {
//     age: number;
// }
// class util {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class utils extends util implements A, B {
//     name = 'Lt';
//     age = 23;
// }
// 函数范型
// function identity<T>(arg: T): T {
//     return arg;
// }\
// 类范型
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) {
//     return x + y;
// };
