//1、proptypes的类型验证
//举例 普通类型
// propTypes.string
// propTypes.array
// propTypes.bool
// propTypes.number
// propTypes.symbol
//举例 引用类型
// propTypes.func
// propTypes.object
// propTypes.element
// propTypes.node
//举例 自定义类型
//  componentName.PropTypes={
//      x:PropTypes.number,
//      y:function(props,propName,c){
//          if(!/\d/.test(props[propName])){
//              return new Error("错误",c)
//          }
//      }
//  }
//props {x:1,y:"2"}
//2、typescript数据类型：
//string boolean tuple enum null undefined void never any number array
let str: string = 'aaaa';
let arr1: Array<number> = [1, 2, 3, 4, 5];
let arr2: Array<String> = ['a', 's'];
let arr3: number[] = [1, 2, 3];
let num: number = 23;
let tuple: [string, string] = ['ad', 'cd'];
let bool: boolean = true;
let boo2: boolean | number = 2;
enum Flag {
    a,
    b = 1,
    c,
}
let f: Flag = Flag.b;
let know: string | null | undefined;
function fn(): void {}
function fn2(): any {
    return '';
}
let a: never;
a = () => {
    alert('cuowu');
};
//ts 函数，方法
function get(name: string): string;
function get(age: number): number;
function get(str: any): any {
    if (typeof str === 'string') {
        console.log('姓名' + str);
    } else if (typeof str === 'number') {
        console.log('年龄' + str);
    }
}
get(24);
get('qq');
//可选参数

function p(name: string, age?: number): string {
    return name + age;
}
p('qq', 24);
//typescript 类
class Person {
    name: string;
    age: string;
    constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }
}
//继承
class Sub extends Person {
    job: string;
    constructor(name: string, age: string, job: string) {
        super(name, age);
        this.job = job;
    }
}
//实例方法 实例属性
//私有方法 私有属性
//类方法 类属性
class Person2 {
    static str: string;
    name: string;
    constructor() {
        this.name = '';
    }
    static get() {
        alert('get方法' + Person2.str);
    }
    set(name: string) {
        this.name = name;
    }
}
let p2 = new Person2();
p2.set('qq');
Person2.str = 'abc';
Person2.get();
//多态
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        alert('Animal类');
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        alert(this.name + 'Dog');
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        alert(this.name + 'Cat');
    }
}
let dog = new Dog('狗子');
let cat = new Cat('喵咪');
//修饰符
//private protected public
//private 只能在本类调用
//protented 只能在父类和子类或本类调用
//public 公共
class yanshi {
    private static nameD: string = 'lei';
    private set(num: number) {}
    say() {
        let s = new yanshi();
        s.set(nameD);
    }
}
let y = new yanshi();
y.say();
class B extends yanshi {
    say() {
        alert(yanshi.nameD);
    }
}
let b = new B();
b.say();
//接口 interface
interface FullName {
    fname: string;
    sname: string;
}
function pname(name: FullName): void {
    alert(name.fname + name.sname);
}
let obj = {
    fname: 'qqq',
    sname: 'ccc',
};

pname(obj);
//类接口
interface test {
    name: string;
    eats(str: string): string;
}
class sub implements test {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eats() {
        return 'aaa';
    }
}
let pp = new sub('ccc');
pp.eats();
//泛型
//函数泛型
function getIn2(name: string): string;
function getIn2(age: number): number;
function getIn2(str: any): any {
    if (typeof str === 'string') {
        console.log('姓名' + str);
    } else if (typeof str === 'number') {
        console.log('年龄：' + str);
    }
}
getIn2(123);
//类泛型
class Min<T> {
    list: Array<T> = [];
    add(num: T) {
        this.list.push(num);
    }
    min(): T {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
let m = new Min<number>();
