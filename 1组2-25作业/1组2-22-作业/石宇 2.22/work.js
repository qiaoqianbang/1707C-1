/**
 * 单项链表
 * push(element) 向链表尾部添加元素
 * getElementAt(index)返回链表中下标指向的值
 * removeAt(index)删除只定下标的值
 * indexOf(element)返回元素在链表中的下标
 * remove(elemen)删除只定元素
 * insert(elment,index)往指定下标中插入元素
 * size()链表的长度
 * toString()返回链表中的所有元素的字符串
 */
// class Node{
//     constructor(element){
//         this.element = element;
//         this.next = undefined;
//     }   
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.count = 0
//     }
//     push(element){
//         let node = new Node(element)
//         let current;
//         if(this.head===null){
//             this.head = node
//         }else{
//             current = this.head;
//             while(current.next != null){
//                 current = current.next
//             }
//             current.next = node
//         }
//         this.count++
//     }
//     getElementAt(index){
//         if(index>=0&&index<this.count){
//             let current = this.head;
//             for(let i=0;i<index;i++){
//                 current = current.next
//             }
//             return current
//         }
//         return undefined
//     }
//     removeAt(index){
//         if(index>=0&&index<this.count){
//             let current = this.head;
//             if(index===0){
//                 this.head = current.next
//             }else{
//                 let previous = this.getElementAt(index-1)
//                 current = previous.next;
//                 previous.next = current.next
//             }
//             this.count--;
//             return current.element
//         }
//         return undefined
//     }
//     insert(element,index){
//         if(index>=0&&index<this.count){
//             let node = new Node(element);
//             if(index=0){
//                 let current = this.head;
//                 node.next = current;
//                 this.head = node
//             }else{
//                 const previous = this.getElementAt(index-1);
//                 const current = previous.next;
//                 node.next = current;
//                 previous.next = node
//             }
//             this.count++;
//             return true
//         }
//         return false
//     }
//     indexOf(element){
//         let current = this.head;
//         for(let i=0;i<this.count&&current!=null;i++){
//             if(element === current.element){
//                 return i
//             }
//             current = current.next
//         }
//         return -1
//     }
//     remove(element){
//         let index = this.indexOf(element);
//         return this.removeAt(index)
//     }
//     toString(){
//         if(this.head===null){
//             return ''
//         }
//         let objString = `${this.head.element}`;
//         let current = this.head.next 
//         for(let i=0;i<this.count && current!=null;i++){
//             objString = `${objString},${current.element}`;
//             current = current.next
//         }
//         return objString;
//     }
//     isEmpty(){
//         if(this.head===null){
//             return true
//         }
//         return false
//     }
//     // 求单链表的中间节点，如果链表的长度为偶数，返回中间两个节点的任意一个，若为奇数，则返回中间节点
//     one(){
//         if(this.count%2===0){
//             return this.getElementAt(this.count/2-1)
//         }else{
//             return this.getElementAt(Math.ceil(this.count/2)-1)
//         }
//     }
// }

// let l = new LinkedList()
// l.push("a")
// l.push("b")
// l.push("c")
// l.push("d")
// l.push("e")
// // console.log(l.getElementAt(0))//b
// // console.log(l.isEmpty())
// // console.log(l.one())
// console.log(l.remove("b"))
// console.log(l)

// 使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点
// class Node{
//     constructor(element){
//         this.element=element;
//         this.next=undefined;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.count=0
//     }
//     push(element){
//         let node = new Node(element)
//         let current;
//         if(this.head===null){
//             this.head = node
//         }else{
//             current = this.head;
//             while(current.next != null){
//                 current = current.next
//             }
//             current.next = node
//         }
//         this.count++
//     }
//     getElementAt(index){
//         if(index>=0&&index<this.count){
//             let current = this.head;
//             for(let i=0;i<index;i++){
//                 current = current.next
//             }
//             return current
//         }
//         return undefined
//     }
//     removeAt(index){
//         if(index>0&&index<this.count){
//             let current=this.head;
//             if(index===0){
//                 this.head=current.next
//             }else{
//                 let previous=this.getElementAt(index-1)
//                 current=previous.next;
//                 previous.next=current.next;
//             }
//             this.count--;
//             return current.element
//         }
//         return undefined
//     }
//     indexOf(element){
//         let current=this.head;
//         for(let i=0;i<this.count&&current!=null;i++){
//             if(element===current.element){
//                 return i
//             }
//             current=current.next
//         }
//         return -1
//     }
//     removet(element){
//         let index=this.indexOf(element);
//         if(index<this.count-1){
//             return this.removeAt(index)
//         }
//     }
// }
// let l = new LinkedList()
// l.push("a")
// l.push("b")
// l.push("c")
// console.log(l)
// console.log(l.removet("c"))

// //事例
// 输入: head = [4,5,1,9], node = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9

class Node{
    constructor(element){
        this.element=element
        this.next=undefined
    }
}
class LinkedList{//链表
    constructor(){
        this.head = null;
        this.count = 0
    }
    push(element){
        let node = new Node(element)
        let current;
        if(this.head===null){
            this.head = node
        }else{
            current = this.head;
            while(current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    getElementAt(index){
        if(index>=0&&index<this.count){
            let current = this.head;
            for(let i=0;i<index;i++){
                current = current.next
            }
            return current
        }
        return undefined
    }
    removeAt(index){//删除指定下标的元素
        if(index>=0&&index<this.count){
            let current = this.head;
            if(index===0){//删除第一个节点
                this.head = current.next
            }else{
                let previous = this.getElementAt(index-1)//获取前一个节点
                current = previous.next;
                previous.next = current.next
            }
            this.count--;
            return current.element
        }
        return undefined
    }
    indexOf(element){//返回元素在链表中的下标
        let current = this.head;
        for(let i=0;i<this.count&&current!=null;i++){
            if(element === current.element){
                return i
            }
            current = current.next
        }
        return -1
    }
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index)
   }
}
let l = new LinkedList()
l.push("4")
l.push("5")
l.push("1")
l.push("9")
l.remove("5")