function findModule(files, src) {
    return files.keys().reduce((prev, item) => {
        // console.log(item);
        let [, key] = item.match(/^\.\/(.+)\/index\.tsx$/);
        //console.log(item.match(/^\.\/(.+)\/index\.tsx$/));
        //console.log(files(item));
        prev[key] = files(item).default;
        //console.log(prev);
        return prev;
    }, {})[src];
}

export default function getViews(src) {
    const files = require.context('./', true, /index\.tsx$/);
    return findModule(files, src);
}