import React from 'react';
import Router from './router/index'
import routerConfig from './router/router.config'
import history from 'history'
import './App.css';
export const historyProps=history.createBrowserHistory()


// function getTitle(path:string):string{
//   let res:string = ""
//   routerConfig.forEach(item=>{
//     if(item.path===path){
//        res = item.title;
//        return 
//     }
//     if(item.children){
//       item.children.forEach(itemChi=>{
//         if(itemChi.path===path){
//           res=itemChi.title;
//           return
//         }
//       })
//     }
//   })
//   return res
// }

// historyProps.listen(({pathname})=>{
//   (document as HTMLDocument).title =getTitle(pathname)
// })

class App extends React.Component{
  static replace(arg0:string){
    throw new Error('method not implemented.')
  }
  public render(){
    return (
      <div>
        <Router routerConfig={routerConfig} history={historyProps}></Router>
      </div>
    )
  }
}

export default App