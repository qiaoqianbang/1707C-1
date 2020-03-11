class Vue{
    constructor(options){
        this.$el=options.el;
        this.$data=options.data;
        if(this.$el){
            //数据劫持  将数据属性转换成访问器属性
            new Observer(this.$data);
            //基类调度  对el进行操作
            new Compile(this.$el);
        }
    }
}

//数据劫持
class Observer{
    constructor(data){
        this.observer(data)
    }
    observer(data){
        //判断数据是否为对象
        if(data && typeof data === 'object'){
            for(let key of data){
                this.defineReactive(data,key,data[key]);
            }
        }
    }
    //数据属性转换成访问器属性
    defineReactive(obj,key,value){
        this.observer(value)//防止数据继续为对象
        let dep=new Dep();
        Object.defineProperty(obj,key,{
            get(){
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set:(newVal)=>{
                if(newVal !==value){
                    this.observer(newVal)//防止数据继续为对象
                    value=newVal;
                    dep.notify()//发布功能
                }
            }
        })
    }
}

//基类调度
class Compile{
    constructor(el){
        //判断属性el属性是不是一元素  如果不是元素 那就获取它
        this.el=this.isElementNode(el) ? el :document.querySelector(el)
        //把当前节点中的元素放到内存中
        let fragment = this.node2fragment(this.el);
        //用数据编译模板
        this.compile(fragment);
        //把内容塞到页面
        this.el.appendChild(fragment)
    }
    isElementNode(node){
        return node.nodeType === 1
    }
    node2fragment(node){
        //创建一个文档碎片
        let fragment=document.createDocumentFragment()
        let firstChild;
        while(firstChild = node.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment
    }
    //核心编译方法
    compile(node){ //用来编译内存中的dom节点
        let childNodes=node.childNodes;
        [...childNodes].forEach(child=>{
            //判断是否节点
            if(this.isElementNode(child)){
                //属性节点
                this.compileElement(child);
                //元素的话 传入自己遍历子节点
                this.compile(child);
            }else{
                //处理文本节点
                this.compileText(child);
            }
        })
    }
    //编译元素节点下的属性节点
    isDirective(attrName){
        return attrName.startsWith('v-')
    }
    //元素节点
    compileElement(node){
        let attributes=node.attributes;
        [...attributes].forEach(attr=>{
            // [type:'text',v-model:'className.name']
            let {name,value:expr} =attr;//name为type value为'text'
            if(this.isDirective(name)){
                let [,directive]=name.split('-')//结构出 -之前的 ['v','model:className.name']
                let [directiveName,]=directive.split(':') //结构出 :之前的值['model','className.name']
                CompileUtil[directiveName](node,expr,vm)
            }
        })
    }
    compileText(){

    }
}
CompileUtil={
    getVal(vm,expr){
        return expr.split('.').reduce((data,current)=>{
            return data[current]
        },vm.$data)
    },
    setVal(vm,expr,value){
        expr.split('.').reduce((data,current,index,arr)=>{
            if(index === arr.length-1){
                return data[current] = value
            }
        },vm.$data)
    },
    model(node,expr,vm){
        let fn=this.updater['modelUpdater']
        new Watcher(vm,expr,(newVal)=>{
            //给输入框添加观察者 如果数据更新就会触发这个方法 会拿到新的值
            fn(node,newVal)
        })
        let value =this.getVal(vm,expr)
        fn(node,value)
        node.addEventListener('input',(e)=>{
            let value =e.target.value;
            this.setVal(vm,expr,value)
        })
    },
    text(node,expr,vm){
        let fn =this.updater['textUpdater'];
        let value =expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            new Watcher(vm,args[1,(newVal)=>{
                fn(node,newVal)
            }])
        })
        fn(node,value)
    },
    updater:{
        modelUpdater(node,value){
            node.value = value
        },
        textUpdater(node,value){
            node.value = value
        }
    }
}

//观察者模式代码
class Dep{
    constructor(){
        this.subs=[] //存储订阅者，存储传进来的观察者
    }
    addSub(watcher){ //let watcher=new Watcher()//订阅者
        this.subs.push(watcher) //存储观察者
    }
    notify(){//发布者
        this.subs.forEach(watcher=>{watcher.update()})
    }
}

class Watcher{
    constructor(vm,expr,cb){
        this.vm=vm;
        this.expr=expr;
        this.cb=cb;
        this.oldData = this.get()
    }
    get(){
        Dep.target=this;
        let value =CompileUtil.getVal(this.vm,this.expr);
        Dep.target=null;
        return value;
    }
    update(){
        let newVal =CompileUtil.getVal(this.vm,this.expr);
        if(newVal!==this.oldData){
            this.cb(newVal)
        }
    }
}