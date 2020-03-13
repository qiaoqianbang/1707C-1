function findModule(files,src){
    return files.keys().reduce((prev,current)=>{
        let item=current;
        // console.log(item,"item")
        let [,key]=item.match(/^\.\/(.+)\/index\.tsx$/)
        // console.log(key,"key")
        prev[key]=files(item).default
        // console.log(prev[key],"key")
        return prev
    },{})[src]
}

export default function getViews(src){
    const files=require.context("./",true,/index\.tsx$/)
    // console.log(files.keys())
    // files.keys().forEach(element=>{
    //     console.log(element,"eee")
    // })
    return findModule(files,src)
}
