// 队列
class Queue{
    constructor(){
        this.items={};
        this.count=0;
        this.lowstCount=0;
    }
    enqueue(element){
        this.items[this.count]=element;
        this.count++;
    }
    isEmpty(){
        return this.count-this.lowstCount===0
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result=this.items[this.lowstCount];
        delete this.items[this.lowstCount];
        this.lowstCount++;
        return result
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowstCount]
    }
    size(){
        return this.count-this.lowstCount
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString=`${this.items[this.lowstCount]}`
        for(let i=this.lowstCount+1;i<this.count;i++){
            objString=`${objString},${this.items[i]}`
        }
        return objString
    }
}
let q=new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.toString())