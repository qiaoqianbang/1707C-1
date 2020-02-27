//创建 Graph 类
class Graph{
   //2、addVertex()⽅法：⽤来向图中添加⼀个新的顶点
    addVertex(v){ //增加方法 增加顶点
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList.set(v,[])
        }
    }

    //3.addEdge()⽅法：⽤来创建图的边
    addEdge(v,w){
        if(!this.adjList.get(v)){
            this.addVertex(v)
        }
        if(!this.adjList.get(w)){
            this.addVertex(w)
        }
        this.adjList.get(v).push(w);
        if(!this.isDirected){
            this.addList.get(w).push(v) 
        }
    }

    //4、getVertices()⽅法：获取顶点列表
    getVertices(){
        return this.vertices;
    }

    //5、getAdjList()⽅法：获取临接表

    getAdjList(){
        return this.adjList;
    }
  
}
