class Complie{
    constructor(el,vm){
        this.el=this.isElementNode(el)?el:document.querySelector(el)
        this.vm=vm
        //把数据放到内存中
        let fragment=this.node2fragment(this.el)
        //用数据编译模板
        this.Complie(fragment)
    }
    //判断是不是元素节点
    isElementNode(node){
        return node.nodeType===1;
    }
    //把数据放到内存中
    node2fragment(node){
        let fragment=document.createDocumentFragment()
        let firstChild;
        while(firstChild=node.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment
    }
    //核心编译方法
    Complie(node){
        let childNodes=node.childNodes;
        [...childNodes].forEach(child=>{
            if(this.isElementNode(child)){
                //属性节点
                this.ComplieElement(child)
                //元素节点
                this.Complie(child)
            }else{
                //文本节点
                this.ComplieText(child)
            }
        })
    }
    //元素节点
    ComplieElement(node){
        let attributes=node.attributes;
        [...attributes].forEach(attr=>{
            let {name,value:expr}=attr;
            if(this.isDirective(name)){
                let [,directive]=name.split('-');
                let [directiveName,] = directive.split(':')
                ComplieUtil[directiveName](node,expr,this.vm)
            }
        })
    }
    //文本节点
    ComplieText(node){
        let content=node.textContent;
        if(/\{\{(.+?)\}\}/.test(content)){
            ComplieUtil['text'](node,content,this.vm)
        }
    }
}
ComplieUtil={
    getVal(vm,expr){
        return expr.split('.').reduce((data,current)=>{
            return data[current]
        },vm.$data)
    },
    model(node,expr,vm){
        let value =this.getVal(vm,expr)
        let fn=this.updater['modelUpdater']
        fn(node,value)
    },
    text(){
        let value =expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            return this.getVal(vm,args[1])
        })
        let fn=this.updater['textUpdater']
        fn(node,value)
    },
    updater:{
        modelUpdater(node,value){
            node.value=value
        }
    },
    textUpdater(node,value){
        node.textContent=value
    }
}