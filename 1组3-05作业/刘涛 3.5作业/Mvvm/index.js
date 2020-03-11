
class Vue {
  constructor(data) {
    this.el = data.el
    this.data = data.data
    if (this.el) {
      // 数据劫持将数据属性转换成访问器属性
      new Observer(this.data)
      //指令解析 将节点归并到虚拟内存里统一化管理为了减少内存占用
      new Complie(this.el, this)
    }
  }
}
// deo 观察者模式 发布订阅者模式
class deo {
  constructor() {
    // 储存订阅者
    this.list = []
  }
  // 订阅
  on(watcher) {
    this.list.push(watcher)
  }
  // 发布
  emit() {
    this.list.forEach(watcher => {
      watcher.updater()
    })
  }
}
// watch
class watch {
  // vm ：this expr：元素 cb：回调函数
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    // 默认的旧数据
    this.jiu = this.get()
  }
  get() {
    deo.target = this;
    let value = Copmputil.getval(this.vm, this.expr);
    deo.target = this;
    return value
  }
  updater() { //更新数据变化调用
    // console.log(Copmputil)
    let newval = Copmputil.getval(this.vm, this.expr)
    if (newval !== this.jiu) {
      this.cb(newval)
    }

  }
}
// copmputil
Copmputil = {
  getval(vm, expr) {
    return expr.split(".").reduce((pre, curr) => {

      return pre[curr]
    }, vm["data"])
  },
  setval(vm, expr, value) {
    // console.log(expr)
    // 因为className.name 所以name length-1最后一项 
    expr.split(".").reduce((pre, cur, index, arr) => {
      if (index === arr.length - 1) {
        return pre[cur] = value
      }
      return pre[cur]
    }, vm["data"])
  },
  model(element, expr, _this) {
    // 将属性节点值与文本节点值相互联系
    //  匹配data数据的属性key 拿到数据里的值
    // 
    let fn = this.updater["elementupdater"]
    new watch(_this, expr, (newval) => {
      fn(element, newval)
    })
    let value = this.getval(_this, expr)
    fn(element, value)
    element.addEventListener("input", (e) => {
      let value = e.target.value;
      this.setval(_this, expr, value)
    })
  },
  text(element, elements, vm) {
    // 对应的文本节点
    let fn = this.updater["textupdater"]
    let value = elements.replace(/\{\{(.+?)\}\}/g, (...aggms) => {
      new watch(vm, aggms[1], (newval) => {
        fn(element, newval)
      })
      return this.getval(vm, aggms[1])
    })


    fn(element, value)

  },
  updater: {
    elementupdater(element, value) {
      element.value = value
    },
    textupdater(element, value) {
      element.textContent = value
    }
  }

}
// 指令解析
class Complie {
  constructor(el, _this) {
    // 根节点
    // console.log(_this)
    this.el = this.isElement(el) ? el : document.querySelector(el);
    // 将节点归并到虚拟内存里统一化管理为了减少内存占用
    this.vm = _this
    let resdata = this.guibing(this.el);
    // 遍历节点 哪个节点变更新哪个 
    this.ForElement(resdata, _this);
    // console.log(resdata, "deee");
    // window.f = resdata;
    // console.log(resdata)
    this.el.appendChild(resdata)

  }

  guibing(el) {
    // 归并的内存容器
    let res = document.createDocumentFragment()
    let ress;
    while (ress = el.firstChild) {
      res.appendChild(ress)
    }

    return res
  }
  // 遍历节点 哪个节点变更新哪个
  ForElement(el, _this) {
    let node = el.childNodes;
    [...node].forEach(item => {
      // 递归遍历节点 最深处 判断是不是元素节点 
      if (this.isElement(item)) {
        // 元素节点
        //拿属性
        this.attFync(item, _this)
        // 递归遍历节点
        this.ForElement(item)

      } else {
        // 文本节点
        // console.log(item, "asdasd")
        this.compliText(item)
      }


    })
  }
  // 文本节点
  compliText(element) {
    let elements = element.textContent;
    // console.log(element, "66")
    if (/\{\{(.+?)\}\}/.test(elements)) {
      // console.log(elements)
      Copmputil["text"](element, elements, this.vm)
    }
    // 文本节点匹配到与他相同的属性节点指令

  }
  // 判断是不是元素节点 
  isElement(element) {
    return element.nodeType === 1
  }
  //  递归遍历节点
  dgElement(node) {
    this.ForElement(node)
  }
  //元素节点 拿属性
  attFync(element, _this) {
    let attrs = element.attributes;
    [...attrs].forEach(item => {
      // 取它的属性值 v-model="这个值"
      let { name, value: expr } = item

      // console.log(expr, "Asdasd")
      // 截取它的指令
      if (this.isdirtive(name)) {
        let [, asd] = name.split("-")
        //列如其他的指令用：作为分隔符
        let [directiveName,] = asd.split(":");
        // console.log(directiveName)
        // console.log(directiveName)
        Copmputil[directiveName](element, expr, _this)
        // console.log(expr)
      }

    })

  }
  // 截取到v-的指令
  isdirtive(name) {
    return name.startsWith("v-")
  }
}


// 数据劫持
class Observer {
  constructor(data) {
    // 第一步数据属性转换成服务器属性
    // console.log(data)
    this.setState(data)
    this.count = 0
  }
  // 遍历数据
  setState(data) {
    // console.log(data)
    if (data && data instanceof Object) {
      for (let key in data) {
        // 递归遍历
        // console.log(data, "Data")
        this.dg(data, key, data[key])
      }

    }

  }
  // 递归遍历数据 并转换成服务器属性
  dg(data, key, value) {
    // console.log(data)
    this.setState(value)
    // 发布功能发布者劫持数据
    let dep = new deo();
    Object.defineProperty(data, key, {
      get() {
        // 订阅

        deo.target && dep.on(deo.target)
        return value
      },
      set: (newvalue) => {
        console.log(newvalue, "new")
        if (newvalue !== value) {
          // 递归判断他是不是对象是的话继续遍历1
          this.setState(newvalue)
          value = newvalue
          dep.emit();//发布功能
        }
      }
    })
  }

}