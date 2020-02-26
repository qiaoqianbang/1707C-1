// insert(key):向树中插⼊⼀个新的键。

// search(key):在树中查找⼀个键。如果节点存在，则返回 true;如果不存在，则返回

// false。

// inOrderTraverse():通过中序遍历⽅式遍历所有节点。

// preOrderTraverse():通过先序遍历⽅式遍历所有节点。

// postOrderTraverse():通过后序遍历⽅式遍历所有节点。

// min():返回树中最⼩的值/键。

// max():返回树中最⼤的值/键。

// remove(key):从树中移除某个键。

class Node{
    constructor(element){
        this.element=element;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor(){
        this.root=null;
    }
    insert(element){//添加一个节点
        let newNode=new Node(element);//创建要插入的节点
        if(this.root===null){//树中没有任何元素
            this.root=newNode
        }else{
            //递归
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.element<root.element){//根节点大于创建的节点,往左边添加节点
            if(root.left===null){//说明左下面没有值
                root.left=newNode
            }else{//说明左下面有值
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){//说明右下面没有值
                root.right=newNode
            }else{//说明右下面有值
                this.insertNode(root.right,newNode)
            }
        }
    }
    preOrderTraverse(){//对掉函数为了拼接遍历出来的值
        this.preOrderTraverseNode(this.root)
    }
    preOrderTraverseNode(node){//先序
        if(node!=null){
            this.preOrderTraverseNode(node.left)
            this.preOrderTraverseNode(node.right)
        }
    }
    midOrderTraverse(){//对掉函数为了拼接遍历出来的值
        this.midOrderTraverseNode(this.root)
    }
    midOrderTraverseNode(node){//中序
        if(node!=null){
            this.midOrderTraverseNode(node.left)
            this.midOrderTraverseNode(node.right)
        }
    }
    postOrderTraverse(){//对掉函数为了拼接便理出来的值
        this.postOrderTraverseNode(this.root)
    }
    postOrderTraverseNode(node){
        if(node!=null){
            this.postOrderTraverseNode(node.left);
            this.postOrderTraverseNode(node.right)
        }
    }
    min(){//最小值
        let current=this.root;
        while(current!=null && current.left){
            current=current.left
        }
        return current
    }
    max(){//最大值
        let current=this.root;
        while(current!=null && current.right){
            current=current.right
        }
        return current
    }
    search(element){
        this.searchNode(this.root,element)
    }
    searchNode(node,element){
        if(node===null){
            return false //未查找要寻找的值
        }
        if(node.element>element){
            return this.searchNode(node.left,element)
        }else if(node.element<element){
            return this.searchNode(node.right,element)
        }else{
            return true //查找到要找的值
        }
    }    
remove(key){
    num = this.removeNode(this.root,key)
    return num
 }
 removeNode(node,key){//递归
     if(node==null){
         return null
     }
     if(node.element>key){
 
     }else if(node.element<ke){
         node.right = this.removeNode(node.right,key)
     }else{//相等情况下 8
         //相等情况  key === node === 9
         //第一种情况
         if(node.left == null && node.right==null){//一
             node = null;
             return node
         }
         //第二种情况
         if(node.left==null){
             node = node.right
             return node
         }else if(node.right==null){
             node = node.left
             return node
         }
         //第三种情况 11
         const minNode = this.minNode(node.right);//15
         node.element = minNode.element;//12
         node.right = this.removeNode(node.right,minNode.element)
         return node
     }
 }
}

