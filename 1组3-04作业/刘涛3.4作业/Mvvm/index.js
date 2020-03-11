
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
      this.Copmputil["text"](element, elements, this.vm)
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
      if (!expr) {
        expr = "mr"
      }
      // console.log(expr, "Asdasd")
      // 截取它的指令
      if (this.isdirtive(name)) {
        let [, asd] = name.split("-")
        //列如其他的指令用：作为分隔符
        let [directiveName,] = asd.split(":");
        // console.log(directiveName)
        // console.log(directiveName)
        this.Copmputil[directiveName](element, expr, _this)
        // console.log(expr)
      }

    })

  }
  // copmputil
  Copmputil = {
    model(element, expr, _this) {
      // 将属性节点值与文本节点值相互联系
      //  匹配data数据的属性key 拿到数据里的值
      let data = expr.split(".").reduce((pre, curr) => {
        // console.log(_this.data.className.name)
        // console.log(pre[curr], "pre")
        return pre[curr]
      }, _this["data"])
      element.value = data
    },
    text(element, elements, vm) {
      // 对应的文本节点
      let str = elements.replace(/\{\{(.+?)\}\}/g, (...aggms) => {
        return aggms[1]
      })
      // console.log(str.split("."))
      let data = str.split(".").reduce((pre, curr) => {
        // console.log(pre)
        return pre[curr]
      }, vm["data"])
      element.textContent = data
    }

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
    Object.defineProperty(data, key, {
      get() {
        return value
      },
      set: (newvalue) => {
        // console.log(newvalue, "new")
        if (newvalue !== value) {
          // 递归判断他是不是对象是的话继续遍历1
          this.setState(newvalue)
          value = newvalue
        }
      }
    })
  }

}