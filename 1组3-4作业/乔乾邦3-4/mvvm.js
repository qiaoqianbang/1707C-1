class Observer {
    constructor(data) {
        this.observer(data);
    }
    observer(data) {
        if (data && typeof data === 'object') {
            for (let key in data) {
                this.defineReactive(data, key, data[key]);
            }
        }
    }
    defineReactive(obj, key, value) {
        this.observer(value);
        Object.defineProperty(obj, key, {
            get() {
                return value;
            },
            set: newVal => {
                console.log(newVal, 'newVal');
                if (newVal !== value) {
                    this.observer(newVal);
                    value = newVal;
                }
            },
        });
    }
}
//基类调度
class Complie {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el); //1

        this.vm = vm;

        let fragment = this.node2fragment(this.el); //2

        this.compile(fragment); //4

        this.el.appendChild(fragment); //3
    }

    isElementNode(node) {
        return node.nodeType === 1;
    }

    node2fragment(node) {
        let fragment = document.createDocumentFragment();
        let firstChild;
        while ((firstChild = node.firstChild)) {
            fragment.appendChild(firstChild);
        }
        return fragment;
    }

    compile(node) {
        let childNodes = node.childNodes;
        [...childNodes].forEach(child => {
            if (this.isElementNode(child)) {
                this.compileElement(child);

                this.compile(child);
            } else {
                this.compileText(child);
            }
        });
    }

    isDirective(attrName) {
        return attrName.startsWith('v-');
    }

    compileElement(node) {
        let attributes = node.attributes;
        [...attributes].forEach(attr => {
            let { name, value: expr } = attr;

            if (this.isDirective(name)) {
                let [, directive] = name.split('-');

                let [directiveName] = directive.split(':');

                ComplieUtil[directiveName](node, expr, this.vm);
            }
        });
    }

    compileText(node) {
        let content = node.textContent;

        if (/\{\{(.+?)\}\}/.test(content)) {
            ComplieUtil['text'](node, content, this.vm);
        }
    }
}
ComplieUtil = {
    getVal(vm, expr) {
        return expr.split('.').reduce((data, current) => {
            return data[current]; //1707班
        }, vm.$data);
    },
    model(node, expr, vm) {
        let value = this.getVal(vm, expr);
        let fn = this.updater['modelUpdater'];
        fn(node, value);
    },
    text(node, expr, vm) {
        let value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getVal(vm, args[1]);
        });
        let fn = this.updater['textUpdater'];
        fn(node, value);
    },
    updater: {
        modelUpdater(node, value) {
            node.value = value;
        },
        textUpdater(node, value) {
            node.textContent = value;
        },
    },
};
//基类 调度
class Vue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        //这个跟元素存在
        if (this.$el) {
            //数据劫持  把数据属性转换成访问器属性
            // new Observer(this.$data)
            new Complie(this.$el, this);
        }
    }
}