class Tree{
    constructor(){
        this.root = null;
    }
    //向树中插⼊⼀个新的键。
    insert(element){
        //添加第一个节点 
        let newNode = new Node(element);//创建新节点
        if(this.root === null){//树中没有任何元素
            this.root = newNode
        }else{
            //递归
            this.insertNode(this.root,newNode)
        }
    }

    preOrderTraverse(){//对调函数为了拼接遍历出来的值
        this.preOrderTraverseNode(this.root);
    }
    preOrderTraverseNode(node){
        if(node!=null){
            // callback(node.element);
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
    min(){//返回树中最⼩的值
        let current = this.root;
        while(current!=null&& current.left){
            current = current.left//current = current.next
        }
        return current
    }
    max(){//返回树中最⼤的值
        let current = this.root;
        while(current!=null&& current.right){
            current = current.right//current = current.next
        }
        return current
    }
    search(element){//在树中查找⼀个键。如果节点存在，则返回 true;如果不存在，则返回false

        this.searchNode(this.root,element)
    }
    searchNode(node,element){
        if(node==null){
            return false//未查找到要寻找的值
        }
        if(node.element>element){
            return this.searchNode(node.left,element)
        }else if(node.element<element){
            return this.searchNode(node.right,element)
        }else{
            return true//查找到要寻找的值
        }
    }
}