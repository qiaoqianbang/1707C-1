class Node {
	constructor(element) {
		this.element = element;
		this.next = undefined;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.count = 0;
	}
	push(element) {
		let node = new Node(element)
		let current;
		if (this.head === null) {
			this.head = node
		} else {
		
			current = this.head;
			while (current.next != null) {
				current = current.next
			}
			current.next = node
		}
		this.count++
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
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				this.head = current.next
			} else {
				let previous = this.getElementAt(index - 1)
				current = previous.next;
				previous.next = current.next
			}
			this.count--;
			return current.element
		}
		return undefined
	}
	insert(element, index) {
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
	indexOf(element) {
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
		return this.removeAt(index)
	}
	toString() {
		if (this.head === null) {
			return ''
		}
		let objString = `${this.head.element}`;
		let current = this.head.next 
		for (let i = 0; i < this.count && current != null; i++) {
			objString = `${objString},${current.element}`;
			current = current.next
		}
		return objString;
	}
	middle() {
		if (this.head === null) {
			return null
		} else {
			let fast = this.head;
			let slow = this.head;
			while (fast != null && fast.next != null) {
				slow = slow.next;
				fast = fast.next.next;
			}
			return slow
		}
	}
	isEmpty() {
		return this.count === 0
	}
	size() {
		return this.count
	}
}

let l = new LinkedList()
l.push("a")
l.push("b")
l.push("c")

console.log("toString--", l.toString())
console.log("middle---", l.middle())
console.log("size---", l.size())
console.log("empty---", l.isEmpty())
console.log("l---", l)