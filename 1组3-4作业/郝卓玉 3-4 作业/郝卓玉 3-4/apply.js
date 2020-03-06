Function.prototype.apply=function(context,rest){
    if(!content){
        context = typeof window==='undefined'?global:window
    }
    context.fn=this
    let result
    if(rest===undefined || rest === null){
        result = context.fn(rest)
    }else if(typeof rest === 'object'){
        result = context.fn(...rest)
    }
    delete context.fn //删除该函数
    return result
}