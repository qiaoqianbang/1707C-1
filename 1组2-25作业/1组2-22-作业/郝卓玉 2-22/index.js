


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


//创建节点
class Node{
    constructor(element){
        this.element=element;
        this.next=null
    }
}

//创建空链表
class LinkedList{
    constructor(){
        this.head=null;
        this.count=0
    }
    push(element){ //向链表尾部添加⼀个新元素。
        let node=new Node(element)
        let current;//指针
        if(this.head===null){//判断链表是否是空链表
            this.head=node
        }else{
            //找到链表中next指针为空的节点
            current=this.head;
            while(current.next!=null){
                current=current.next //让指针移动
            }
            current.next=node
        }
        this.count++
    }
    getElementAt(index){//返回列表中的特定位置的元素。如果链表中不存在这样的元素，则返回undefined
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
        if(index>=0 && index<this.count){
            let current=this.head;
            if(index===0){
                this.head=current.next
            }else{
                let previous =this.getElementAt(index-1)//获取前一个节点
                current=previous.next;
                previous.next=current.next
            }
            this.count--;
            return current.element
        }
        return undefined
    }
    insert(element,index){ //向链表的特定位置插⼊⼀个新元素。
        if(index>=0&&index<this.count){
            let node =new Node(element);
            if(index=0){
                let current=this.head;
                node.next=current;
                this.head=node;
            }else{
                const previous=this.getElementAt(index-1)
                const current=previous.next
                node.next=current
                previous.next=node
            }
            this.count++
            return true
        }
        return false
    }
    indexOf(element){  //返回元素在链表中的索引。如果链表中没有该元素则返回-1。
        let current=this.head
        for(let i=0;i<this.count&&current!=null;i++){
            if(element===current.element){
                return i
            }
            current=current.next
        }
        return -1
    }
    remove(element){
        let index =this.indexOf(element)
        return this.removeAt(index)
    }
    toString(){//返回表示整个链表的字符串。
        if(this.head===null){
            return ''
        }
        let objString=`${this.head.element}`//第一个元素
        let current=this.head.next//让current指向第二个元素
        for(let i=0;i<this.count &&current!=null;i++){
            objString=`${objString},${current.element}`
            current = current.next
        }
        return objString;
    }
// 1、求单链表的中间节点，如果链表的长度为偶数，返回中间两个节点的任意一个，若为奇数，则返回中间节点。
    middle(){
        if(this.head===null){
            return ''
        }else{
            let num=this.count%2
            if(num===0){//为偶数
                console.log(this.getElementAt(this.count/2-1),1111)
                return this.getElementAt(this.count/2)
            }else{//为奇数
                console.log(this.getElementAt(Math.ceil(this.count/2)-1),8888)
                return this.getElementAt(Math.ceil(this.count/2))
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

  newArr(arr,ele){
      for(let key of arr){
          this.push(key)
      }
      this.remove(ele)
 }
}

let list=new LinkedList()
// list.push('1')//向链表尾部添加⼀个新元素。
// list.push('2')//向链表尾部添加⼀个新元素。
// list.push('3')//向链表尾部添加⼀个新元素。
// list.push('4')//向链表尾部添加⼀个新元素。
// list.push('5')//向链表尾部添加⼀个新元素。

// list.middle()//向链表尾部添加⼀个新元素。

list.newArr([4,5,1,9],5)//向链表尾部添加⼀个新元素。
// console.log(list.newArr([4,5,1,9],5))
// console.log(list.toString())












