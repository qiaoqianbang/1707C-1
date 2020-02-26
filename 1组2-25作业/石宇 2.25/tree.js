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
    insert(element){
        let newNode=new Node(element);
        if(this.root===null){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(newNode.element<node.element){
            if(node.left===null){
                node.left=newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right=newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    preOrderTraverse(){//对调函数为了拼接遍历出来的值
        this.preOrderTraverseNode(this.root);
    }
    preOrderTraverseNode(node){
        if(node!=null){
            console.log(node.element);
            this.preOrderTraverseNode(node.left);
            this.preOrderTraverseNode(node.right);
        }
    }
    midOrderTraverse(){//对调函数为了拼接遍历出来的值
        this.midOrderTraverseNode(this.root);
    }
    midOrderTraverseNode(node){
        if(node!=null){
            this.midOrderTraverseNode(node.left);
            console.log(node.element);
            this.midOrderTraverseNode(node.right);
        }
    }
    postOrderTraverse(){//对调函数为了拼接遍历出来的值
        this.postOrderTraverseNode(this.root);
    }
    postOrderTraverseNode(node){
        if(node!=null){
            this.postOrderTraverseNode(node.left);
            this.postOrderTraverseNode(node.right);
            console.log(node.element);
        }
    }
    min(){
        let current=this.root;
        while(current!=null&&current.left){
            current=current.left
        }
        return current
    }
    max(){
        let current=this.root;
        while(current!=null&&current.right){
            current=current.right
        }
        return current
    }
    search(element){
        this.searchNode(this.root,element)
    }
    searchNode(node,element){
        if(node==null){
            return false
        }
        if(node.element>element){
            return this.searchNode(node.left,element)
        }else if(node.element>element){
            return this.searchNode(node.right,element)
        }else{
            return true;
        }
    }
    remove(key){
        let num = this.removeNode(this.root,key)
        return num
    }
    removeNode(node,key){
        // if(node==null){
        //     return null
        // }
        // if(node.element>key){
        //     node.left=this.removeNode(node.ledt,key)
        // }else if(node.element<key){
        //     node.right = this.removeNode(node.right,key)
        // }else{
        //     if(node.left == null && node.right==null){
        //         node = null;
        //         return node
        //     }
        //     if(node.left==null){
        //         node = node.right
        //         return node
        //     }else if(node.right==null){
        //         node = node.left
        //         return node
        //     }
        //     const minNode = this.minNode(node.right);
        //     node.element = minNode.element;
        //     node.right = this.removeNode(node.right,minNode.element)
        //     return node
        // }
    }
}

let t=new Tree()
// t.insert(7)
// t.insert(8)
// console.log(t.remove(7))
// console.log(t)