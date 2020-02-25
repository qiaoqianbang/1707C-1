// 1、实现双向链表的removeAt方法和insert()方法
class Node{
    constructor(element){
        this.element=element;
        this.prev=null;
        this.next=null
    }
}

class DoubleList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.count=0;
    }
    getElementAt(index){//返回下标对应的元素
        if(index>=0&&index<this.count){
            let current=this.head;
            for(let i=0;i<index;i++){
                current=current.next
            }
            return current
        }
        return undefined
    }
    insert(element,index){
        if(index>=0&&index<this.count){
            let node= new Node(element)//即将要插入的元素
            let current=this.head;
            if(index===0){
                if(this.head===null){
                    this.head=node;
                    this.tail=node
                }else{
                    node.next=this.head;
                    current.prev=this.head;
                    this.head=node
                }
            }else if(index===this.count){
                current=this.tail;
                current.next=node;
                node.prev=current;
                this.tail=node;
            }else{
                const previous=this.getElementAt(index-1);
                current=previous.next;
                node.next=current
                previous.next=node
                node.prev=previous
                current.prev=node
            }
            this.count++
            return true
        }
        return false
    }
    removeAt(index){//下标删除节点
        if(index>0&&index<this.count){
            let current=this.head;
            if(index===0){
                this.head=current.next
                if(this.count===1){
                    this.tail=null
                }else{
                    this.head.prev=null
                }
            }else if(index===this.count-1){
                current=this.tail
                this.tail=current.prev;
                this.tail.next=null
            }else{
                current=this.getElementAt(index);
                current.prev.next=current.next
                current.next.prev=current.prev
            }
            this.count--;
            return current
        }
        return undefined
    }
}







// 2、栈

// push(element(s)):添加⼀个(或⼏个)新元素到栈顶。

// pop():移除栈顶的元素，同时返回被移除的元素。

// peek():返回栈顶的元素，不对栈做任何修改(该⽅法不会移除栈顶的元素，仅仅返回它)。

// isEmpty():如果栈⾥没有任何元素就返回 true，否则返回 false。

// clear():移除栈⾥的所有元素。

// size():返回栈⾥的元素个数。该⽅法和数组的 length 属性很类似。
class Stack{
    constructor(){
        this.items={}
        this.count=0
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
        delete this.items[this.count]
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
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }

}

// 3、队列

// enqueue(element(s)):向队列尾部添加⼀个(或多个)新的项。

// dequeue():移除队列的第⼀项(即排在队列最前⾯的项)并返回被移除的元素。

// peek():返回队列中第⼀个元素——最先被添加，也将是最先被移除的元素。

// isEmpty():如果队列中不包含任何元素，返回 true，否则返回 false。

// size():返回队列包含的元素个数，与数组的 length 属性类似。


class Queue{
    constructor(){
        this.count=0;
        this.lowCount=0;
        this.items={}
    }
    enqueue(element){
        this.items[this.count]=element;
        this.count++
    }
    isEmpty(){
        return this.count - this.lowstCount === 0
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result=this.items[this.lowCount];
        delete this.items[this.lowCount];
        this.lowCount--;
        return result
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowCount];
    }
    size(){
        return this.count-this.lowCount
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString=`${this.items[this.lowCount]}`
        for(let i=this.lowCount+1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}



// 4、使用栈实现进制转化的功能

// 比如：十进制 3 ------ 二进制 11;十进制 5 ----- 二进制 101

// ![截屏2020-02-24下午5.45.31](/Users/yihang/Desktop/截屏2020-02-24下午5.45.31.png)

let stack=new Stack()
function transform(number){
    let rem
    while (number>0) {
        rem=Math.floor(number%2)
        stack.push(rem)
        number=Math.floor(number/2)
    }
    return stack.toString()
}
console.log(transform(10))
