function findModule(files,src){
    return files.keys().reduce((prev,current)=>{
        let item=current;
        let [,key]=item.match(/^\.\/(.+)\/index\.tsx$/)
        prev[key]=files(item).default
        return prev;
    },{})[src]
}

export default function getViews(src){
    const files=require.context('./home',true,/index\.tsx$/)
    return findModule(files,src)
}