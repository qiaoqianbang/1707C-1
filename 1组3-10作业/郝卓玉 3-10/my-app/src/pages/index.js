function findModule(files,src){
    return files.keys().reduce((prev,current)=>{
        let item=current;
        console.log(item)
        let [,key]=item.match(/^\.\/(.+)\/index\.tsx$/)
        console.log(item.match(/^\.\/(.+)\/index\.tsx$/))
        console.log(key)
        console.log(prev)
        prev[key]=files(item).default;
        console.log(files(item).default)
        return prev
    },{})[src]
}

export default function getViews(src){
    const files=require.context('./Home',true,/index\.tsx$/)
    console.log(files)
    console.log(files.id)
    console.log(files.keys())
    files.keys().forEach(element=>{
        console.log(element)
    });
    return findModule(files,src)
}