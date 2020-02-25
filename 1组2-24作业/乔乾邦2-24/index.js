//实现双向链表的removeAt方法和insert()方法
class Node {
    constructor(element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}
class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    insert(element, index) {
        if (index >= 0 && index < this.count) {
            //插入成功
            let node = new Node(element); //新生节点
            let current = this.head; //创建指针
            if (index === 0) {
                //往头部插入
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node; //node = {element:a,prev:null,next:null}
                    this.head = node;
                }
            } else if (index === this.count) {
                //往尾部添加
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = this.tail;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(position) {
        let current = this.head;
        let previous;
        let index = 0;
        if (position > -1 && position < this.length) {
            if (position === 0) {
                this.head = current.next;
                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (position === this.length - 1) {
                current = this.tail;
                previous = current.prev;
                this.tail = previous;
                this.tail.next = null;
            } else if (position <= this.length / 2) {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            } else {
                index = this.length - 1;
                current = this.tail;
                while (index-- > position) {
                    previous = current;
                    current = current.prev;
                }
                previous.prev = current.prev;
                current.prev.next = previous;
            }
            this.length--;
            return current.element;
        } else {
            if (typeof position === 'number' && this.length > 0) {
                let current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
                this.length--;
                return current.element;
            } else {
                return null;
            }
        }
    }
}
// 2、栈
// push(element(s)):添加⼀个(或⼏个)新元素到栈顶。
// pop():移除栈顶的元素，同时返回被移除的元素。
// peek():返回栈顶的元素，不对栈做任何修改(该⽅法不会移除栈顶的元素，仅仅返回它)。
// isEmpty():如果栈⾥没有任何元素就返回 true，否则返回 false。
// clear():移除栈⾥的所有元素。
// size():返回栈⾥的元素个数。该⽅法和数组的 length 属性很类似。
class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    push(...element) {
        console.log(element);
        for (let i = 0; i < element.length; i++) {
            this.dataStore.push(element[i]);
            this.top++;
        }
    }
    pop() {
        this.top--;
        return this.dataStore.pop();
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    size() {
        return this.top;
    }
    clear() {
        this.dataStore = [];
    }
    isEmpty() {
        if (this.top === 0) {
            return true;
        }
        return false;
    }
}
const p = new Stack();
//进制转换
function Converter(decNumber, base) {
    let digits = '0123456789ABCDEF';
    let remStack = new stack(),
        rem,
        basestring = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (remStack.size() != 0) {
        basestring += digits[remStack.pop()];
    }
    return basestring;
}

// 3、队列
// enqueue(element(s)):向队列尾部添加⼀个(或多个)新的项。
// dequeue():移除队列的第⼀项(即排在队列最前⾯的项)并返回被移除的元素。
// peek():返回队列中第⼀个元素——最先被添加，也将是最先被移除的元素。
// isEmpty():如果队列中不包含任何元素，返回 true，否则返回 false。
// size():返回队列包含的元素个数，与数组的 length 属性类似。
let Queue = (function() {
    const items = new WeakMap();
    class Queue {
        constructor() {
            items.set(this, []);
        }
        dequeue() {
            let q = items.get(this);
            return (r = q.shift());
        }
        enqueue(...element) {
            for (let i = 0; i < element.length; i++) {
                let q = items.get(this);
                q.push(i);
            }
        }
        isEmpty() {
            if (this.size === 0) {
                return true;
            }
            return false;
        }
        size() {
            let q = items.get(this);
            return q.length;
        }
        peek() {
            let q = items.get(this);
            return q[0];
        }
    }
    return Queue;
})();