class Observer { //数据劫持
    constructor(data) {
        //不处理逻辑
        this.observer(data);
    }
    // let person = {
    //     className:{name:"yi"},
    //     age:28
    // }
    // for(let key in person){
    //     let value = person[key];
    //     Observer.defineProperty(person,key,{
    //         get(){
    //         }
    //     })
    // }
    observer(data) {
        //如果是对象才观察,data保证有并且是对象
        if (data && typeof data === 'object') {
            for (let key in data) {
                //data key data[key]
                this.defineReactive(data, key, data[key]);
            }
        }
    }
    defineReactive(obj, key, value) {
        this.observer(value);
        Object.defineProperty(obj, key, {
            get() {
                return value
            },
            set: (newVal) => {
                console.log(newVal,"newVal")
                if (newVal !== value) {
                    this.observer(newVal)//补充
                    value = newVal;
                }
            }
        })
    }
}
//基类调度
class Complie {
    constructor(el, vm) {
        //判断el属性是不是⼀个元素 如果不是元素 那就获取它
        this.el = this.isElementNode(el) ? el : document.querySelector(el); //1
        //保证所有⼈拿到实例vm
        this.vm = vm;
        //把当前节点中的元素放到内存中
        let fragment = this.node2fragment(this.el); //2
        //⽤数据编译模板
        this.compile(fragment); //4
        //把内容塞到⻚⾯中
        this.el.appendChild(fragment) //3
    }
    //判断是不是元素节点
    isElementNode(node) {
        return node.nodeType === 1;
    }
    //把每个节点都放⼊到内存中
    node2fragment(node) {
        //创建⼀个⽂档碎⽚
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = node.firstChild) {
            //appendChild具有移动性
            fragment.appendChild(firstChild)
        }
        return fragment
    }
    //核⼼的编译⽅法
    compile(node) { //⽤来编译内存的dom节点
        let childNodes = node.childNodes;
        [...childNodes].forEach(child => {
            //判断是否为节点
            if (this.isElementNode(child)) {
                // 属性节点方法
                //type="text" v-model="className.name"
                this.compileElement(child);
                //如果是元素的话 需要传⼊⾃⼰然后遍历⼦节点
                this.compile(child)
            } else {
                //处理文本节点
                //{{className.name}}
                this.compileText(child);
            }
        });
    }
    //编译元素节点下的属性节点
    //type="text" v-model="className.name"
    isDirective(attrName){
        return attrName.startsWith('v-')
    }
    //元素节点 <input type v-model/> <h1> <h3> <ul>
    compileElement(node){
        let attributes = node.attributes;
        [...attributes].forEach(attr => {
            //[type:'text',v-model:'className.name']
            let {name,value:expr} = attr;//重命名
            // console.log(expr)
            if(this.isDirective(name)){//v-model: v-html
                let [,directive] = name.split('-');
                // [,directive] = [v,model]
                // [a,b]=[b,a]
                // console.log(directive)
                let [directiveName,] = directive.split(":")
                //这个方法为了复用 代码优化 model
                //对应 129行 <input />
                ComplieUtil[directiveName](node,expr,this.vm)
            }
        })
    }
    //文本节点
    //{{className.name}}
    compileText(node){
        let content = node.textContent;
        // console.log(content)正则表达式 {{className.name}}
        if(/\{\{(.+?)\}\}/.test(content)){
            //"{{className.name}}"
            ComplieUtil['text'](node,content,this.vm)
        }
    }
}
ComplieUtil = {
    getVal(vm,expr){//className.name
        return expr.split('.').reduce((data,current)=>{
            return data[current]//1707班
        },vm.$data)
    },
    model(node,expr,vm){
        //value == "1707班"
        let value = this.getVal(vm,expr)
        let fn = this.updater['modelUpdater']
        fn(node,value)
    },
    text(node,expr,vm){
        // console.log(node,"node")
        // console.log(expr,"expr")
        // console.log(vm,"vm")
        let value = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args)
            return this.getVal(vm,args[1])
        })
        console.log(value,"value")
        let fn = this.updater["textUpdater"]
        fn(node,value)
    },
    updater:{
        //更新input框值
        modelUpdater(node,value){
           //<input value="1707班"/>
           node.value = value
        },
        textUpdater(node,value){
            //把{{className.name}} == 1707班
            node.textContent = value
        },
        // htmlUpdater(){

        // },
        // bindUpdater(){

        // }
    }
}
//基类 调度
class Vue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        //这个跟元素存在
        if (this.$el) {
            //数据劫持  把数据属性转换成访问器属性
            // new Observer(this.$data)
            new Complie(this.$el, this)
        }
    }
}