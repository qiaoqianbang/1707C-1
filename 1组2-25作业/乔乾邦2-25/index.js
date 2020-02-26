class Node {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}
//insert(key):向树中插⼊⼀个新的键。
//search(key):在树中查找⼀个键。如果节点存在，则返回 true;如果不存在，则返回false。
//min():返回树中最⼩的值/键。max():返回树中最⼤的值/键。remove(key):从树中移除某个键。
//inOrderTraverse():通过中序遍历⽅式遍历所有节点。
//preOrderTraverse():通过先序遍历⽅式遍历所有节点。
//postOrderTraverse():通过后序遍历⽅式遍历所有节点。

class Tree {
    constructor() {
        this.root = null;
    }
    insert(element) {
        let newNode = new Node(element);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.element < node.element) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    search(element) {
        this.searchNode(this.root, element);
    }
    searchNode(node, element) {
        if (node == null) {
            return false;
        }
        if (node.element > element) {
            return this.searchNode(node.left, element);
        } else if (node.element < element) {
            return this.searchNode(node.right, element);
        } else {
            return true;
        }
    }
    min() {
        let current = this.root;
        while (current != null && current.left) {
            current = current.left;
        }
        return current;
    }
    max() {
        let current = this.root;
        while (current != null && current.right) {
            current = current.right;
        }
        return current;
    }
    preOrderTraverse() {
        this.preOrderTraverse(this.root);
    }
    preOrderTraverse(node) {
        if (node != null) {
            console.log(node.element);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    }
    midOrderTraverse() {
        this.inOrderTraverse(this.root);
    }
    inOrderTraverse(node) {
        if (node != null) {
            this.inOrderTraverse(node.left);
            console.log(node.element);
            this.inOrderTraverse(node.right);
        }
    }
    postOrderTraverse() {
        this.postOrderTraverse(this.root);
    }
    postOrderTraverse(node) {
        if (node != null) {
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            console.log(node.element);
        }
    }
    remove(key) {
        let root = this.removeNode(root, key);
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
}