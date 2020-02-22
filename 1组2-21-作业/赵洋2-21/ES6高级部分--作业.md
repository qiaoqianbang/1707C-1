- 什么叫轮询？
    一个事件接着一个事件的进行

### **Promise**

- 状态
  -     pending 进行中
        resolved 已成功
        rejected  已失败


| 宏队列 |
| :----: |
|        |
|        |

| 微队列 |
| :----: |
|        |

> 例题

- EXP1: 在主线程上添加宏任务与微任务

```javascript
console.log("-----------start----------")
setTimeout(() => {
    console.log("setTimeOut")
},0);
new Promise(resolve => {
    for(let i=0;i<5;i++){
        console.log(i)
    }
    resolve()
}).then(()=>{
    console.log("Promise执行then方法")
}).catch(()=>{

}).finally(()=>{
    console.log("finally")
})
console.log("-----------end----------")
```

- EXP2: 宏任务中创建微任务

```javascript
主线程 start end Promise主
宏队列 ==>入口  set3 set2 出口 set1 
微队列 ==>入口 then  出口
console.log("-----------start----------")
setTimeout(() => {//set1
    console.log("setTimeOut1")
    setTimeout(() => {
        console.log("setTimeOut2")
    }, 0);
    new Promise(resolve => {
        resolve()
        console.log("Promise主")
    }).then(()=>{
        console.log("Promise.then")
    })
}, 0);
setTimeout(() => {//set2
    console.log("setTimeOut3")
}, 0);
console.log("-----------end----------")
```

### **Iterator**

```javascript
//使let obj = {name:'xx',age:18}
//for(let key of obj){
//    console.log(key)
//}
//实现Iterator，并且注释讲解原理

let obj = {
    0:"zero",
    1:"one",
    [Symbol.iterator]:function(){
        const self = this;
        let index = 0;
        return {
            next:function(){
                if(index<Object.keys(obj).length){//2
                    return {//遍历中
                        value:self[index++],
                        done:false
                    }
                }else{
                    return {//遍历结束
                        value:self[index++],
                        done:true
                    }
                }
            }
        }
    }
}
```

### **Generator**

```javascript
//实现大象放进冰箱的步骤，并且注释讲解原理
const start = (success) =>{  //内存里面创建空间 start ->  function
    setTimeout(()=>{
        console.log("准备")
        success()//
    },500)
}
const first = (success) =>{//内存里面创建空间 start ->  function
    setTimeout(()=>{
        console.log("第一步 打开冰箱门")
        success()
    },500)
}
const second = (success) =>{//内存里面创建空间 start ->  function
    setTimeout(()=>{
        console.log("第二步 把大象放进去")
        success()
    },500)
}
const third = (success) =>{//内存里面创建空间 start ->  function
    setTimeout(()=>{
        console.log("第三步 关闭冰箱门")
        success()
    },500)
}
const end = (success) =>{//内存里面创建空间 start ->  function
    setTimeout(()=>{
        console.log("结束")
        success()
    },500)
}
```

### **Async await**

```javascript
//实现大象放进冰箱的步骤，并且注释讲解原理

const start = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("准备")
            resolve()//
        },500)
    })
}
const first = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("第一步 打开冰箱门")
            resolve()//
        },500)
    })
}
const second = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("第二步 把大象放进去")
            resolve()//
        },500)
    })
}
const third = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("第三步 关闭冰箱门")
            resolve()//
        },500)
    })
}
const end = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("结束")
            resolve()//
        },500)
    })
}
async function task(){
    await start();
    await first();
    await second();
    await third();
    await end();
}
task()
```

