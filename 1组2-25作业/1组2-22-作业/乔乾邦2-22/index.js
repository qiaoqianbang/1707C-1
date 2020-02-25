class Node {
    //节点
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
class List {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    push(element) {
        let node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    insert(element, index) {
        if (index >= 0 && index < this.count) {
            let node = new Node(element);
            if ((index = 0)) {
                let current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return current;
        }
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (element === current.element) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    toString() {
        if (this.head === null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 0; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
    isEmpty() {
        let current = this.head;
        if (current === null) {
            return true;
        } else {
            return false;
        }
    }
    size() {
            let current = this.head;
            let num = 0;
            while (current != null) {
                num++;
                current = current.next;
            }
            return num;
        }
        //求单链表的中间节点，如果链表的长度为偶数，返回中间两个节点的任意一个，若为奇数，则返回中间节点。
    returnElement() {
        let Length = this.size();
        if (Length % 2 == 0) {
            let index = length / 2;
            return this.getElementAt(idnex);
        } else {
            let index = Math.ceil(Length / 2);
            return this.getElementAt(index);
        }
    }
}

let L = new List();
L.push('a');
L.push('b');
L.getElementAt(1);
L.toString();
L.isEmpty();
L.size();
//console.log(L.getElementAt(1));
//console.log(L.size());

//输入: head = [4,5,1,9], node = 5
//输出: [4, 1, 9];

class Node2 {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class Linklist {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (element === current.element) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
}