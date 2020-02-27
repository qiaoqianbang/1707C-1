// 1.创建Graph类
// 2.addVertex()方法:用来向图中添加一个新的顶点
// 3.addEdge()方法:用来创建图的边
// 4.getVertices()方法:获取顶点列表
// 5.getAdjList()方法:获取临接表
// 6.实现toString的打印方法()
// 7.不实用递归的方式实现二分查找法
class Graph{
    constructor(isDirected=false){
        this.isDirected=isDirected;//判断是否是有向的
        this.adjList=new Map();
        this.vertices=[];//定义顶点的列表
    }
    addVertex(v){//增加方法 增加顶点
        if(!this.vertices.includes(v)){
            this.vertices.push(v)
            this.adjList.set(v,[])
        }
    }
    addEdge(v,w){//增加边   两点确定一边
        if(!this.adjList.get(v)){
            this.addVertex(v);
        }
        if(!this.adjList.get(w)){
            this.addVertex(w);
        }
        this.adjList.get(v).push(w);
        if(!this.isDirected){
            this.adjList.get(w).push(v)
        }
    }
    getVertices(){
        return this.vertices;
    }
    getAdjList(){
        return this.adjList;
    }
    toString(){
        let str=''
        this.vertices.forEach(item=>{
            str+`${item},[${this.adjList.get(item)}]`
        })
        return str
    }
}

let de=new Graph()
console.log(de.addVertex('a'))
console.log(de.addVertex('c'))
console.log(de.addEdge('a','b'))
console.log(de.addEdge('c','d'))
console.log(de.getVertices())
console.log(de.getAdjList())


//二分查找
// function binarySearch(arr,low,high,value){
//     if(low<=high){
//         const mid=Math.floor((low+high)/2);
//         const element=arr[mid]
//         if(element===value){
//             return mid
//         }else if(element>value){
//             high=mid-1;
//             return binarySearch(arr,low,high,value)
//         }else{
//             low=mid+1;
//             return binarySearch(arr,low,high,value)
//         }
//     }
//     return -1
// }

let list1=[1,2,3,4,5,8,10]
let low=0;
let high=list1.length-1
// console.log(binarySearch(list1,low,high,8))

//非递归查找
function binarySearch(arr,low,high,value) {
    while (high >= low) {
        const mid = (low + high) / 2;
        const element=arr[mid]
        if (element == value) {
            return mid;
            // 向左边查找
        } else if (element> value) {
            high = mid - 1;
            //向右边查找
        } else if (element < value) {
            low = mid + 1;
        }
    }
    return -1;
}


console.log(binarySearch(list1,low,high,8))