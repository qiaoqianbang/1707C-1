

export default function getViews(src) {
  let list = require.context('./', true, /index\.tsx$/)
  return list.keys().reduce((pre, current) => {
    let [, key] = current.match(/^\.\/(.+)\/index\.tsx$/)
    // console.log(current.match(/^\.\/(.+)\/index\.tsx$/), "key")
    pre[key] = list(current).default
    return pre
  }, {})[src]
}

// function findModule(files, src) {
//   return files.keys().reduce((prev, item) => {
//     let [, key] = item.match(/^\.\/(.+)\/index\.tsx$/)
//     prev[key] = files(item).default
//     //getViews()('./VoteList/index.tsx').default
//     return prev
//   }, {})[src];
// }
// //getViews('Home')  class Home
// export default function getViews(src) {
//   const files = require.context('./', true, /index\.tsx$/)
//   // return files ==== getViews()
//   // return files
//   return findModule(files, src)
// }


