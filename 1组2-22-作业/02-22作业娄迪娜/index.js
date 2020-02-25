// #####实现单向链表的以下功能：

// - push(element):向链表尾部添加⼀个新元素。
// - getElementAt(index):返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined。
// - removeAt(position):从链表的特定位置移除⼀个元素。
// - indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
// - remove(element):从链表中移除⼀个元素。
// - insert(element, position):向链表的特定位置插⼊⼀个新元素。
// - isEmpty():如果链表中不包含任何元素，返回 true，如果链表⻓度⼤于 0 则返回 false。
// - size():返回链表包含的元素个数，与数组的 length 属性类似。
// - toString():返回表示整个链表的字符串。

class Node{
    constructor(element){
        this.element=element;
        this.next=undefined;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.count=0
    }
    push(element){
        let node=new Node(element)
        let current;
        if(this.head===null){//判断是否是空链表
            this.head=node
        }else{
            current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=node;
        }
        this.count++;
    }
    getElementAt(index){
        if(index>=0&&index<this.count){
            let current=this.head;
            for(let i=0;i<index;i++){
                current=current.next
            }
            return current;
        }
        return undefined
    }
    removeAt(index){
        if(index>=0&&index<this.count){
            let current=this.head;
            if(index===0){
                this.head=current.next;
            }else{
                let previous=this.getElementAt(index-1)
                current=previous.next;
                previous.next=current.next
            }
            this.count--;
            return current.element
        }
        return undefined
    }
    indexOf(element){
        let current=this.head;
        for(let i=0;i<this.count&&current!=null;i++){
            if(element===current.element){
                return i
            }
            current=current.next
        }
        return -1
    }
    remove(element){
        let index=this.indexOf(element)
        return this.removeAt(index)
    }
    insert(element,index){
        if(index>=0&&index<this.count){
            let node=new Node(element);
            if(index===0){
                let current=this.head;
                node.next=current;
                this.head=node;
            }else{
                const previous=this.getElementAt(index-1);
                const current=previous.next;
                node.next=current;
                previous.next=node;
            }
            this.count++;
            return true
        }
        return false
    }
    isEmpty(){//如果链表中不包含任何元素，返回 true，如果链表⻓度⼤于 0 则返回 false。
        if(this.head===null&&this.count===0){
            return true
        }else{
            return false
        }
    }
    size(){//:返回链表包含的元素个数，与数组的 length 属性类似。
        if(this.head===null&&this.count===0){
            return 0
        }else{
            return this.count
        }
    }
    toString(){
        if(this.head===null){
            return ''
        }
        let objString=`${this.head.element}`;
        let current=this.head.next;
        for(let i=0;i<this.count&&current!=null;i++){
            console.log(objString,current.element)
            objString=`${objString},${current.element}`;
            current=current.next
        }
        return objString
    }
    // 1、求单链表的中间节点，如果链表的长度为偶数，返回中间两个节点的任意一个，若为奇数，则返回中间节点。
    Center(){
        if(this.cound!==0&&this.head!==null){
            let num=this.count%2
            console.log(num)
            if(num===0){
                return this.getElementAt(this.count/2-1)
            }else{
                console.log(this.count-(Math.floor(this.count/2)))
                return this.getElementAt(this.count-(Math.floor(this.count/2))-1)
            }
        }
    }
    // 2、请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

    // 现有一个链表 -- linkedlist = [4,5,1,9]，它可以表示为:

    // ![237_example](/Users/yihang/Desktop/237_example.png)

    // ```javascript
    // //事例
    // 输入: head = [4,5,1,9], node = 5
    // 输出: [4,1,9]
    // 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
    // ```

    ReturnArr(arr,element){
        for(let val of arr){
            this.push(val)
        }
        this.remove(element)
    }

}
let l=new LinkedList()
// l.push("1")
// l.push("2")
// l.push("3")
// l.push("4")
// l.push("5")
// l.getElementAt(3)
// console.log(l.getElementAt(1))
// l.removeAt(1)
l.ReturnArr(["4","5","7","9"],"5")
console.log(l)




// ##### 练习：






