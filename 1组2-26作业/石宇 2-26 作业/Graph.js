class Graph{
    constructor(isDirected=false){
        this.isDirected=isDirected//判断是否为有向图 默认为无向图
        this.adjList=new Map();//邻接表
        this.vertices=[];//定义定点的列表
    }
    addEdge(v,w){
        if(!this.adjList.get(v)){
            this.addVertex(v)
        }
        if(!this.adjList.get(w)){
            this.addVertex(w)
        }
        this.adjList.get(v).push(w)
        if(!this.isDirected){
            //如果是无向图
            this.adjList.get(w).push(v)
        }
    }
    // 增加顶点
    addVertex(v){
        if(!this.vertices.includes(v)){
            this.vertices.push(v)
            this.adjList.set(v,[])
        }
    }
    getVertices(){
        return this.vertices;//返回顶点列表
    }
    getAdjList(){
        return this.adjList;//返回邻接表
    }
    toString(){
        let str=''
        this.vertices.forEach(v=>{
            str+=`${v},[${this.adjList.get(v)}]`
        })
        return str
    }
}
let g=new Graph()
g.addEdge('a','b')
g.addEdge('b','c')
g.addEdge('c','a')
console.log(g.toString())

function binarySearch(arr,value){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        const mid=Math.floor((low+high)/2)
        const element=arr[mid];
        if(element===value){
            return mid;
        }else if(element>value){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return -1;
}
let list=[1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(list,8))
