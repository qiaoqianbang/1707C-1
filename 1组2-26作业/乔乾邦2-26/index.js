// 1、创建 Graph 类 2、addVertex()⽅法：⽤来向图中添加⼀个新的顶点
// 3、addEdge()⽅法：⽤来创建图的边
// 4、getVertices()⽅法：获取顶点列表
// 5、getAdjList()⽅法：获取临接表
// 6、实现toString的打印⽅法()

class Graph {
    constructor() {
        this.vertices = []; // 用来存放图中的顶点
        this.adjList = new Dictionary(); // 用来存放图中的边
    }
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }
    addEdge(a, b) {
        if (!this.adjList.has(a)) {
            this.addVertex(a);
        }
        if (!this.adjList.has(b)) {
            this.addVertex(b);
        }
        this.adjList.get(a).push(b);
        this.adjList.get(b).push(a);
    }
    toString() {
        let str = '\n';
        for (var i = 0; i < vertices.length; i++) {
            var dingdian = vertices[i];
            str += dingdian + '=>';
            var bian = adjList[dingdian];
            for (var j = 0; j < bian.length; j++) {
                str += bian[j];
            }
            str += '\n';
        }
        console.log(str);
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }
}
// 7、不使⽤递归的⽅式实现⼆分查找法
function search(arr, key) {
    let low = 0;
    let height = arr.length - 1;
    let mid;
    while (low <= height) {
        mid = Math.floor((low + height) / 2);
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            height = mid - 1;
        }
    }
    return -1;
}