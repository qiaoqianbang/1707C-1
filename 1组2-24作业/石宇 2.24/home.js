// 实现双向链表的removeAt方法和insert()方法
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
        this.count=0
    }
    getElementAt(index){
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
        if(index>=0&&index<=this.count){
            let node=new Node(element);
            let current=this.head;
            if(index===0){
                if(this.head===null){
                    this.head=node;
                    this.tail=node;
                }else{
                    node.next = this.head;
                    current.prev = node;
                    this.head = node
                }
            }else if(index===this.count){//尾部
                current=this.tail
                current.next=node
                node.prev=current
                this.tail=node
            }else{
                const previous=this.getElementAt(index-1)
                current=previous.next
                node.next=current
                previous.next=node;
                current.prev=node;
                node.prev=previous
            }
            this.count++
            return true
        }
        return false
    }
    removeAt(index){
        if(index>=0&&index<=this.count){
            let current=this.head;
            if(index===0){
                this.head=current.next;
                if(this.count===0){
                    this.tail=null;
                }else{
                    this.head.prev=null;
                }
            }else if(index===this.count-1){
                current=this.tail;
                this.tail=current.prev;
                this.tail.next=null;
            }else{
                let previous=this.getElementAt(index-1)
                current=previous.next
                previous=current.next
                current.next.prev=previous
            }
            this.count--;
            return current
        }
        return undefined
    }
}
let d=new DoubleList()
d.insert("c",0)
d.insert("a",0)
d.insert("d",0)
console.log(d.removeAt(1))
// d.insert("e",1)
// console.log()
console.log(d)