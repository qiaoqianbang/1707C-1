


export default function importAll(src) {
  let list = require.context("./", true, /index\.tsx$/)
  return list.keys().reduce((prev, current) => {
    let [, key] = current.match(/^\.\/(.+)\/index\.tsx$/)
    // console.log(key)
    prev[key] = list(current).default
    return prev
  }, {})[src]
}

