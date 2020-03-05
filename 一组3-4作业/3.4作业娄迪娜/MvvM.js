class Observer{//数据属性变成访问器属性
    constructor(data){
        this.observer(data)
    }
    observer(data){
        // console.log(data)
        //如果是对象才观察，data保证有并且是对象
        if(data&&typeof data==='object'){
            for(let key in data){
                // console.log(key,'_',data)
                this.defineReactive(data,key,data[key])
            }
        }
    }
    defineReactive(obj,key,value){
        this.observer(value)
        Object.defineProperty(obj,key,{
            get(){
                // console.log('get方法')
                return value
            },
            set(newValue){
                // console.log('set方法')
                if(newValue!==value){
                    this.observer(newValue)
                    value=newValue
                }
            }
        })
    }
}

class Complie{
    constructor(el,vm){
        //判断el是否是个元素如果不是就获取它
        this.el=this.isElementNode(el)?el:document.querySelector(el)
        //保证所有人拿到实例vm
        this.vm=vm;
        //把节点加载到内存中防止页面多次刷新
        let fragment=this.node2fragment(this.el)
        // window.f=fragment
        //把文档碎片中的内容读出
        this.complie(fragment)
        //把内容塞到页面中
        this.el.appendChild(fragment)
    }
    //判断是不是元素节点
    isElementNode(node){
        return node.nodeType===1
    }
    complie(node){
        let childNodes=node.childNodes;
        // console.log(childNodes)
        //递归获取子节点
        [...childNodes].forEach(item=>{
            
            if(this.isElementNode(item)){//判断是否是元素节点
                // console.log(item)
                this.complieElement(item)
                this.complie(item)
            }else{
                //判断是否是文本节点
                // console.log(item,"text")
                this.complieText(item)
            }
        })
    }
    node2fragment(node){//把节点加载到内存中防止页面多次刷新
        let fragment=document.createDocumentFragment();//创建文档碎片
        let firstChild;
        // console.log(node)
        while(firstChild=node.firstChild){
            // console.log(node.firstChild,"111")
            fragment.appendChild(firstChild)
        }
        return fragment

    }
    //编译元素节点下的属性节点
    isDirective(attrName){
        return attrName.startsWith('v-')
    }
    complieElement(node){
        // console.log(node)
        let attributes=node.attributes;//取出节点中的属性节点
        // console.log(attributes);
        [...attributes].forEach(item=>{
            // console.log(item)
            let {name,value:expr}=item//将value重名名为expr  name是v-model value是className.name
            // console.log(this.isDirective(name))
            if(this.isDirective(name)){//判断带有v-的属性
                let [,directive]=name.split('-')//截取v-后的值
                let [directiveName]= directive.split(":")//model
                // console.log(directive)
                ComplieUtil[directiveName](node,expr,this.vm)//调用
            }
        })
    }
    complieText(node){
        let content=node.textContent;//获取文本节点内容
        // console.log(content)
        if(/\{\{(.+?)\}\}/.test(content)){//筛选不为空的文本节点内容
            // console.log(node)
            ComplieUtil['text'](node,content,this.vm)//调用
        }
    }
}
ComplieUtil={
    getVal(vm,expr){
        return expr.split('.').reduce((data,current)=>{
            return data[current]
        },vm.data)
    },
    model(node,expr,vm){
        //node ：input元素节点 expr:{{className}} vm:this.vm
        console.log(node.value)
        let value=this.getVal(vm,expr)//找出要赋给节点的值value
        // console.log(value)
        let fn=this.updater['modelUpdater']//调用给元素节点赋值
        fn(node,value)
    },
    text(node,expr,vm){
        // console.log(node,expr,vm,"222")
        let value=expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args[1],"111")
            return this.getVal(vm,args[1])
        })
        let fn=this.updater['textUpdater']//调用给元素节点赋值
        fn(node,value) 
    },
    updater:{
       
       modelUpdater(node,value){
        node.value=value//赋值
        },
        textUpdater(node,value){
            node.textContent=value//赋值
        } 
    }
    
}

class Vue{
    constructor(options){
        this.el=options.el;
        this.data=options.data;
        if(this.el){
            new Observer(this.data)
            new Complie(this.el,this)
        }
    }
}