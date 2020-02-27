// 1、创建 Graph 类
//  2、addVertex()⽅法：⽤来向图中添加⼀个新的顶点



// 3、addEdge()⽅法：⽤来创建图的边
// 4、getVertices()⽅法：获取顶点列表
// 5、getAdjList()⽅法：获取临接表
// 6、实现toString的打印⽅法()
// 7、不使⽤递归的⽅式实现⼆分查找法

class Graph{
    constructor(isDirectedd=false){//判断是否是有向图或者无向图
        this.isDirectedd=isDirectedd;
        this.adjList=new Map()//字典类型  {key:value}
        this.vertices=[];
    }
    //a,b
    addVertex(v){//增加顶点
        if(!this.vertices.includes(v)){//判断
            this.vertices.push(v);
            this.adjList.set(v,[])//eg a : []
        }
    }
    addEdge(v,w){//增加边
        if(!this.adjList.get(v)){//判断是否含有v
           
            this.addVertex(v)
        }
        if(!this.adjList.get(w)){//判断是否含有w
            
            this.addVertex(w)
        }
        this.adjList.get(v).push(w);//a=>b
        if(!this.isDirectedd){//判断是否是有向图或者无向图
            this.adjList.get(w).push(v)//b=>a
        }
    }
    getVertices(){
        return this.vertices;//返回顶点列表 eg:abcd
    }
    getAdjList(){
        return this.adjList;//返回邻接表 eg:a=>[b,c]
    }
    toString(){
        if(this.vertices.length===0){
            return '';
        }
        let objString=`${this.vertices[0]}=>[${this.adjList.get(this.vertices[0])}]`
        for(let i=1;i<this.vertices.length;i++){
            objString=`${objString},${this.vertices[i]}=>[${this.adjList.get(this.vertices[i])}]`
        }
        return objString
    }
}

let GraphFun=new Graph()

GraphFun.addEdge(1,2)

// console.log(GraphFun.getAdjList())
console.log(GraphFun.toString())

//折半查找法

function binarySearch(arr,low,hight,value){
    if(low<=hight){
        const mid=Math.floor((low+hight)/2)//找中间值的下标
        const element=arr[mid]//中间值
        if(value===element){//如果中间值=value就是找到了
            return true
        }
        else if(value>element){
            low=mid+1;
            return binarySearch(arr,low,hight,value)
        }else{
            hight=hight-1;
            return binarySearch(arr,low,hight,value)
        }
    }
    return -1
}
// let arr=[1,2,3,4,5,6,7,8,9];
// let low=0;
// let hight=arr.length-1;

// console.log(binarySearch(arr,low,hight,13))


// 7、不使⽤递归的⽅式实现⼆分查找法

function LookNum(arr,low,hight,value){
    while(low<=hight){
        const mid=Math.floor((low+hight)/2)//找中间值的下标
        const element=arr[mid]//中间值
        if(element===value){
            return true;
            break;
        }else if(value>element){
            low=mid+1
        }else{
            hight=mid-1
        }
    }
    return -1
}
let arr=[1,2,3,4,5,6,7,8,9];
let low=0;
let hight=arr.length-1;

console.log(LookNum(arr,low,hight,3))

