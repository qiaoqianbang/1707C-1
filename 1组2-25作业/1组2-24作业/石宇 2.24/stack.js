// 栈
class Stack{
    constructor(){
        this.items={};
        this.count=0;
    }
    push(element){
        this.items[this.count]=element;
        this.count++
    }
    isEmpty(){
        return this.count===0
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        this.count--;
        const result=this.items[this.count];
        delete this.items[this.count];
        return result
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[--this.count]
    }
    clear(){
        this.items={};
        this.count=0
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString=`${this.items[0]}`
        for(let i=1;i<this.count;i++){
            objString=`${objString},${this.items[i]}`
        }
        return objString
    }
    size(){
        return this.count
    }
}
let s=new Stack()
// s.push(10%2)
// s.push(5%2)
// s.push(2%2)
// s.push(1%2)
// // s.peek()
// console.log(s.peek())

// 十进制转化成任何进制
function baseConver(num,base){
    let rem //余数
    let baseString=''
    let digits='0123456789ABCDEF'
    while(num>0){
        rem=Math.floor(num%base)
        s.push(rem)
        num=Math.floor(num/base)
    }
    while(!s.isEmpty()){
        baseString+=digits[s.pop()].toString()
    }
    return baseString
}
console.log(baseConver(10,2))