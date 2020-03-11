import React from 'react';
import  {BrowserRouter} from 'react-router-dom'
import RouterView from './Router/RouterView'
import routers from './Router/router.config'
import getCom from './page/index'
let VoteList=getCom("Home")


interface HomeProps{
  Home:any[]
}

class App extends React.Component{
  public render(){
    return (
        <div className="App">
          <BrowserRouter>
          <VoteList />
            <RouterView routers={routers}/>
          </BrowserRouter>
           
        </div>
      )
  }
  
}

export default App;
