// 优化代码封装公用方法
// 单项链表 存储数据 （技术点指针）
// - push(element): 向链表尾部添加⼀个新元素。
// - getElementAt(index): 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined。
// - removeAt(position): 从链表的特定位置移除⼀个元素。
// - indexOf(element): 返回元素在链表中的索引。如果链表中没有该元素则返回 - 1。
// - remove(element): 从链表中移除⼀个元素。
// - insert(element, position): 向链表的特定位置插⼊⼀个新元素。
// - isEmpty(): 如果链表中不包含任何元素，返回 true，如果链表⻓度⼤于 0 则返回 false。
// - size(): 返回链表包含的元素个数，与数组的 length 属性类似。
// - toString(): 返回表示整个链表的字符串。
// 实现这个数据结构
class Nodes {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class Util {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }
  // 删除
  removeAt(index) {//删除指定下标的元素
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {//删除第一个节点
        this.head = current.next
      } else {
        let previous = this.getElementAt(index - 1)//获取前一个节点
        current = previous.next;
        previous.next = current.next
      }
      this.count--;
      return current.element
    }
    return undefined
  }
  insert(element, index) {//往指定下标中插入元素
    if (index >= 0 && index < this.count) {
      let node = new Node(element);
      if (index = 0) {
        let current = this.head;
        node.next = current;
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node
      }
      this.count++;
      return true
    }
    return false
  }
  indexOf(element) {//返回元素在链表中的下标
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (element === current.element) {
        return i
      }
      current = current.next
    }
    return -1
  }
  remove(element) {
    let index = this.indexOf(element);
    return removeAt(index)
  }
  toString() {
    if (this.head === null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 0; i < this.count && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next
    }
    return objString;
  }
  // push
  push(element) {
    let node = new Nodes(element)
    let current;
    if (this.head === null) {
      this.head = node
    } else {
      // console.log(this.head, "head")
      current = this.head
      while (current.next !== undefined) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
}


let util = new Util()
util.push("元素一")
util.push("元素二")
util.push("元素三")
util.push("元素四")
// console.log(l.getElementAt(0))//b
// console.log(l.toString())
// getElementAt(index): 
// 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined
// 删除链表中间元素
function(head) {
  let node = head
  let count = 0, middle = 0
  while (node) {
    count++
    node = node.next
  }
  node = head
  while (node) {
    middle++
    if (Math.round(middle / count) && middle / count > 0.5) {
      return node
    }
    node = node.next
  }
}

// 删除指定值
remove(element) {
  let index = this.indexOf(element);
  return removeAt(index)
}
