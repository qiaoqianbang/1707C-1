// insert(key): 向树中插⼊⼀个新的键。
// 二叉搜索树

class Nodes {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }

  removelist(node, element) {
    if (node != null) {
      // console.log(node)
      if (node.element === element) {
        console.log(node, "node")
      }
      this.removelist(node.left, element)
      this.removelist(node.right, element)
    }
  }
  // 返回树中最⼩的值/键。
  min() {
    let node = this.root;
    while (node.left != null) {
      node = node.left
    }
    return node

  }
  // 返回树中最大的值/键。
  max() {
    let node = this.root;
    while (node.right != null) {
      node = node.right
    }
    return node

  }
  // 先序
  preOrderTraverse() {//对调函数为了拼接遍历出来的值
    this.preOrderTraverseNode(this.root);
  }
  preOrderTraverseNode(node) {
    if (node != null) {
      // callback(node.element);
      console.log(node.element);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }
  // 中序
  midOrderTraverse() {//对调函数为了拼接遍历出来的值
    this.midOrderTraverseNode(this.root);
  }
  midOrderTraverseNode(node) {
    if (node != null) {
      this.midOrderTraverseNode(node.left);
      console.log(node.element);
      this.midOrderTraverseNode(node.right);
    }
  }
  // 后序
  h() {//对调函数为了拼接遍历出来的值
    this.hh(this.root);
  }
  hh(node) {
    if (node != null) {
      this.hh(node.left);

      this.hh(node.right);
      console.log(node.element);
    }
  }
  // 在树中查找⼀个键。如果节点存在，则返回 true; 如果不存在，则返回 false。
  search(element) {
    return this.searchfn(this.root, element)
  }
  searchfn(node, element) {
    if (node == null) {
      return false
    }
    if (node.element > element) {
      return this.searchfn(node.left, element)
    } else if (node.element < element) {
      return this.searchfn(node.right, element)
    } else {

      return true
    }

  }
  insert(key) {
    let node = new Nodes(key)
    if (this.root == null) {

      this.root = node

    } else {
      // 递归
      this.insertdn(this.root, node)
    }
  }
  insertdn(roots, node) {
    if (node.element < roots.element) {
      // left
      if (roots.left == null) {
        roots.left = node
      } else {
        roots = roots.left
        this.insertdn(roots, node)
        // console.log(roots, "roots")
      }
    } else {
      // right
      if (roots.right == null) {
        roots.right = node
      } else {
        roots = roots.right
        this.insertdn(roots, node)


      }
    }
  }
  // remove 从树中移除某个键。16
  remove(element) {
    let left = this.root;
    let right = this.root;
    if (element < left.element) {
      if (element == left.element.left) {
        // 返回第一个根节点
        return left
      } else {
        while (left.left != null && right.right != null) {
          left = left.left
          right = right.right
        }
        // /删除节点
        left.left = null
        return left
      }
      // 左树杈
    } else if (element > left.element) {

      // 右树杈
    } else {
      return undefined
    }
  }
}

let tree = new Tree()
tree.insert(7)
tree.insert(4)
tree.insert(20)
tree.insert(3)
tree.insert(6)

console.log(tree.remove(3))
// console.log(tree.searchfn(7))
// console.log(tree)