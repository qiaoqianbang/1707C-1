// insert(key):向树中插⼊⼀个新的键。
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
    inster(element){
        let newNode=new Node(element);
         if(this.root===null){
             this.root=newNode;
         }else{
            this.insterNode(this.root,newNode)
         }
    }
    insterNode(node,newNode){
        if(newNode.element<node.element){
            if(node.left===null){
                node.left=newNode;
            }else{
                this.insterNode(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                this.insterNode(node.right,newNode)
            }
        }
    }
    preOrderTraverse(callBack){
        this.preOrderTraverseNode(this.root,callBack);

    }
    preOrderTraverseNode(node){// preOrderTraverse():通过先序遍历⽅式遍历所有节点。
        if(node!=null){
            console.log(node.element)
            this.preOrderTraverseNode(node.left);
            this.preOrderTraverseNode(node.right)
        }
    }
    midOrderTraverse(callBack){
        this.midOrderTraverseNode(this.root,callBack);

    }
    midOrderTraverseNode(node){// inOrderTraverse():通过中序遍历⽅式遍历所有节点。
        if(node!=null){
            this.midOrderTraverseNode(node.left);
            console.log(node.element)
            this.midOrderTraverseNode(node.right)
        }
    }
    postOrderTraverse(callBack){
        this.postOrderTraverseNode(this.root,callBack);

    }
    postOrderTraverseNode(node){// postOrderTraverse():通过后序遍历⽅式遍历所有节点。
        if(node!=null){
            this.postOrderTraverseNode(node.left);
            this.postOrderTraverseNode(node.right)
            console.log(node.element)
        }
    }
    max(){// max():返回树中最⼤的值/键。
        let current=this.root;
        while(current!=null&&current.left){
            current=current.right;
        }
        return current;
    }
    min(){// min():返回树中最⼩的值/键。
        let current=this.root;
        while(current!=null&&current.left){
            current=current.left;
        }
        return current;
    }
    search(element){
        this.searchNode(this.root,element)
    }
    searchNode(node,element){// search(key):在树中查找⼀个键。如果节点存在，则返回 true;如果不存在，则返回// false。
        if(node==null){
            return false;
        }
        if(node.element>element){
            return this.searchNode(node.left,element)
        }else if(node.element<element){
            return this.searchNode(node.right,element)
        }else{
            return true;
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
            node.left = this.removeNode(node.left,key)
         }else if(node.element<key){
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
     minNode(node){
        let current=node;
        while(current.element>current.right.element){
            current=current.right
        }
        return current
     }
}













// remove(key):从树中移除某个键。