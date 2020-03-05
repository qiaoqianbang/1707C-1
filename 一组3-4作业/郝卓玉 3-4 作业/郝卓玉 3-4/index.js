class Observer{
    constructor(data){
        this.observer(data);
    }
    observer(data){
        //如果是对象才观察，data有并且为对象
        if(data && typeof data==='object'){
            for(let key in data){
                this.defineReactive(data,key,data[key])
            }
        }
    }
    defineReactive(obj,key,value){
        this.observer(value)
        Object.defineProperties(obj,key,{
            get(){
                return value
            },
            set(newVal){
                if(newVal!==value){
                    this.observer(newVal);
                    value=newVal
                }
            }
        })
    }
}



class Vue{
    constructor(options){
        this.$el=options.el;
        this.$data=options.data;
        if(this.$el){
            //数据劫持 数据属性转换成访问器属性
            new Observer(this.$data);
            new Complie(this.$el,this)
        }
    }
}