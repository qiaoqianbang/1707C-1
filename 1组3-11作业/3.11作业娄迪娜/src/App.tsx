import * as React from 'react';
import Router from './Router/index'
// import RouterView from './Router/RouterView'
import routerConfig from './Router/router.config'
import * as history from 'history'
export const historyProps=history.createBrowserHistory()

function getTitle(path:string):string{
  let res:string=''
  routerConfig.forEach(item=>{
    if(item.path===path){
      res=item.title;
      return 
    }
    if(item.children){
      item.children.forEach(itm=>{
        if(itm.path===path){
          res=itm.title
          return
        }
      })
    }
  })
  return res
}

historyProps.listen(({pathname})=>{
  (document as HTMLDocument).title=getTitle(pathname)
})


class App extends React.Component{
  static replace: any;
  public render(){
    return (
        <div className="App">
          <Router routerConfig={routerConfig} history={historyProps}/>
        </div>
      )
  }
  
}

export default App;
