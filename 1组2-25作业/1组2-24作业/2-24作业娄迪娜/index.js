// 1、实现双向链表的removeAt方法和insert()方法
class Node{
    constructor(element){
        this.element=element;
        this.prev=null;
        this.next=null;
    }
}
class DoubleList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.count=0;
    }
    getElementAt(index){
        if(index>=0&&index<this.count){
            let current=this.head;
            for(let i=0;i<index;i++){
                current=current.next;
            }
            return current;
        }
        return undefined;
    }
    insert(element,index){
        if(index>=0&&index<this.count){
            let node=new Node(element)
            let current=this.head;
            if(index===0){
                if(this.head===null){
                    this.head=node;
                    this.tail=node;

                }else{
                    node.next=this.head;
                    current.prev=node
                    this.head=node;
                    
                }
            }else if(index===this.count){
                current=this.tail;
                current.next=node;
                node.prev=current;
                this.tail=node;
            }else{
                const previous=this.getElementAt(index-1);
                current=previous.next;
                node.next=current;
                previous.next=node;
                current.prev=node;
                node.prev=previous;
            }
            this.count++;
            return true
        }
        return false;
    }
    removeAt(index){
        if(index>=0&&index<this.count){
            let current=this.head;
            if(index===0){
                this.head=current.next;
                if(this.count===1){
                    this.tail=null;
                }else{
                    this.head.prev=null;
                }
            }else if(index===this.count-1){
                current=this.tail;
                this.tail=current.prev;
                this.tail.next=null;
            }else{
                current=this.getElementAt(index);
                const previous=current.prev;
                previous.next=current.next;
                current.next.prev=previous;
            }
            this.count--;
            return current
        }
        return undefined;
    }
}
// 2、栈
class Stack{
    constructor(){
        this.items={};
        this.count=0;
    }
    push(element){// push(element(s)):添加⼀个(或⼏个)新元素到栈顶。
        console.log(element,"111")
        this.items[this.count]=element;
        this.count++;
    }
    isEmpty(){// isEmpty():如果栈⾥没有任何元素就返回 true，否则返回 false。
        return this.count===0
    }
    pop(){// pop():移除栈顶的元素，同时返回被移除的元素。
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result=this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek(){// peek():返回栈顶的元素，不对栈做任何修改(该⽅法不会移除栈顶的元素，仅仅返回它)。
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count--]
    }
    clear(){// clear():移除栈⾥的所有元素。
        this.items={};
        this.count=0;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString=`${this.item[0]}`
        for(let i=1;i<this.count;i++){
            objString=`${objString},${this.items[i]}`
        }
        return objString;
    }
    size(){// size():返回栈⾥的元素个数。该⽅法和数组的 length 属性很类似。
        if(this.isEmpty()){
            return 0;
        }
        return this.count
    }
}

// 3、队列
class Queue{
    constructor(){
        this.count=0;
        this.lowstCount=0;
        this.items={}
    }
    enqueue(element){// enqueue(element(s)):向队列尾部添加⼀个(或多个)新的项。
        this.items[this.count]=element;
        this.count++;
    }
    isEmpty(){// isEmpty():如果队列中不包含任何元素，返回 true，否则返回 false。
        return this.count-this.lowstCount===0
    }
    dequeue(){// dequeue():移除队列的第⼀项(即排在队列最前⾯的项)并返回被移除的元素。
        if(this.isEmpty()){
            return undefined;
        }
        const result=this.items[this.lowstCount];
        delete this.items[this.lowstCount]
        this.lowstCount++;
    }
    peek(){// peek():返回队列中第⼀个元素——最先被添加，也将是最先被移除的元素。
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowstCount]
    }
    size(){// size():返回队列包含的元素个数，与数组的 length 属性类似。
        return this.count-this.lowstCount;
    }
    toSring(){
        if(this.isEmpty()){
            return '';
        }
        let objString=`${this.items[this.lowstCount]}`
        for(let i=this.lowstCount+1;i<this.count;i++){
            objString=`${objString},${this.items[i]}`
        }
        return objString;
    }
    
}


// 4、使用栈实现进制转化的功能

// 比如：十进制 3 ------ 二进制 11;十进制 5 ----- 二进制 101

function changeNum(n){
    let StackFun=new Stack()
    function diss(val){
        let rem=val%2;
        let numVal=Math.floor(val/2)
        return {numVal,rem}
    }
    while(diss(n).numVal!==0){
        console.log(diss(n).numVal)
        StackFun.push(diss(n).rem)
        n=diss(n).numVal
        diss(n)
    }
        StackFun.push(diss(n).rem)
    
    return StackFun
    
}
console.log(changeNum(10))


// ![截屏2020-02-24下午5.45.31](/Users/yihang/Desktop/截屏2020-02-24下午5.45.31.png)