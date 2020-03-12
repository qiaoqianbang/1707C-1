function findModule(files,src){
    return files.keys().reduce((prev,item)=> {
        let [,key] = item.match(/^\.\/(.+)\/index\.tsx$/)
        prev[key] = files(item).default
        return prev
    },{})[src];
}
//getViews('Home')  class Home
export default function getViews(src){
    const files = require.context('./',true,/index\.tsx$/)
    return findModule(files,src)
}