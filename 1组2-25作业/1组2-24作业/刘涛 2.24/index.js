// // 1、实现双向链表的removeAt方法和insert()方法
// class Nodes {
//   constructor(element) {
//     this.element = element;
//     this.next = undefined;
//     this.prev = undefined;
//   }

// }
// class Util {
//   constructor() {
//     this.head = null;
//     this.count = 0;
//     this.tail = null;
//   }
//   // 往数据链表中末尾追加数据
//   push(element) {
//     let current;
//     let pre;
//     let node = new Nodes(element)
//     if (this.head == null) {
//       this.head = node
//     } else {
//       current = this.head
//       // pre = this.head
//       while (current.next != undefined) {
//         current = current.next
//       }
//       node.prev = current
//       current.next = node
//       this.tail = node
//     }
//     this.count++;
//     return current
//   }
//   // 根据下标往数据链表中插入数据
//   insert(element, index) {
//     if (index >= 0 && index <= this.count) {
//       let node = new Nodes(element)
//       let current;
//       if (index == 0) {
//         current = this.head
//         this.head = node
//         node = current.next

//       } else {
//         current = this.head
//         for (let i = 0; i <= this.count; i++) {
//           if (i == index) {
//             node.prev = current
//             current.next = node
//             this.tail = node
//           } else if (!current.next) {

//           } else {
//             current = current.next
//           }

//         }
//       }
//       this.count++
//       return true
//     }
//     return false
//   }
//   // 根据下标删除对应元素
//   removeAt(index) {
//     if (index >= 0 && index < this.count) {
//       let current = this.head;
//       let per = this.head;
//       if (index == 0) {
//         this.head = current.next
//         this.head.prev = null
//         this.tail = null
//       } else {
//         for (let i = 0; i < this.count; i++) {
//           if (index - 1 == i) {
//             current.next = current.next.next
//             current.next.prev = current.next
//           } else if (!current.next) {

//           } else {
//             current = current.next
//           }
//         }
//       }
//       this.count--
//       return current
//     }
//     return undefined
//   }
// }

// let util = new Util();
// util.push("元素一")
// util.push("元素二")
// util.push("元素三")
// util.push("元素二")
// util.insert("元素三", 0)
// util.insert("元素四", 1)
// util.insert("元素五", 0)
// util.removeAt(1)
// console.log(util)



// 栈的方法实现 +进制转换

// class Inn {
//   constructor() {
//     this.arr = {}
//     this.leth = ""
//     this.count = 0
//   }
  // push(element(s)): 添加⼀个(或⼏个)新元素到栈顶
//   push(element) {
//     let str = Object.prototype.toString.call(element)
//     if (str == "[object Object]") {
//       for (let key in element) {
//         this.arr[key] = element[key]
//         this.count++
//         this.leth = key
//       }
//       return true
//     }
//     this.arr[element] = element
//     this.count++
//     this.leth = element
//     return true
//   }
//   // 移除栈顶的元素，同时返回被移除的元素。
//   pop() {
//     delete this.arr[this.leth]
//     this.count--
//     return this.leth
//   }
//   // peek返回栈顶的元素，不对栈做任何修改(该⽅法不会移除栈顶的元素，仅仅返回它)。
//   peek() {
//     for (let key in this.arr) {
//       this.leth = this.arr[key]
//     }
//     return this.leth
//   }
//   // isEmpty 如果栈⾥没有任何元素就返回 true，否则返回 false。
//   isEmpty() {
//     if (this.count) {
//       return false
//     }
//     return true
//   }
//   // clear 移除栈⾥的所有元素。
//   clear() {
//     this.arr = {}
//     return
//   }
//   // 返回栈⾥的元素个数。该⽅法和数组的 length 属性很类似。
//   size() {
//     return this.count
//   }

//   // 转换二进制转换十进制
//   two(number) {
//     return parseInt(number, 2)
//   }
//   // 十进制转换二进制
//   ten(number) {
//     return number.toString(2)
//   }
// }
// let Innn = new Inn()
// console.log(Innn.two(1100100))
// console.log(Innn.ten(5))
// console.log(Innn.ten(3))
// Innn.push("s")
// Innn.push("2")
// Innn.push("3")
// Innn.push("4")
// Innn.pop()
// console.log(Innn.peek())
// console.log(Innn.isEmpty())
// console.log(Innn.size())
// console.log(Innn)



// 3、队列

// class Queue {
//   constructor() {
//     this.arr = {}
//     this.leth = ""
//     this.count = 0
//   }
//   // enqueue(element(s)): 添加⼀个(或⼏个)新元素到栈顶
//   enqueue(element) {
//     let str = Object.prototype.toString.call(element)
//     if (str == "[object Object]") {
//       for (let key in element) {
//         this.arr[key] = element[key]
//         this.count++
//         this.leth = key
//       }
//       return true
//     }
//     this.arr[element] = element
//     this.count++
//     this.leth = element
//     return true
//   }
//   // dequeue 移除队列的第⼀项(即排在队列最前⾯的项)并返回被移除的元素。
//   dequeue() {
//     let item;
//     let flag;
//     for (let key in this.arr) {
//       // flag = true
//       // if (flag) {
//       item = this.arr[key]
//       //   delete this.arr[key]
//       //   return
//       // }
//       delete this.arr[key]
//       return

//     }
//     // delete this.arr[key]
//     this.count--
//     return item
//   }
//   // 返回队列中第⼀个元素——最先被添加，也将是最先被移除的元素。
//   peek() {
//     let item;
//     for (let key in this.arr) {
//       item = this.arr[key]
//       return
//     }
//     return item
//   }
//   isEmpty() {
//     if (this.count) {
//       return false
//     }
//     return true
//   }

//   // 返回栈⾥的元素个数。该⽅法和数组的 length 属性很类似。
//   size() {
//     return this.count
//   }

// }

// let queue = new Queue();
// queue.enqueue("1")
// queue.enqueue("2")
// queue.dequeue()
// console.log(queue)






