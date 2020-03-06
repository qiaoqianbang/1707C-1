Function.prototype.call=function(context){
    if(!content){
        context= typeof window ==='undefined'?global:window
    }
    context.fn=this;
    let rest=[...arguments].slice(1);
    let result=context.fn(...rest);
    delete context.fn
    return result
}