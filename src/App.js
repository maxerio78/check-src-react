import "/Users/maxerio/Downloads/web-development-master/frontend/client/src/App.css"
import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "/Users/maxerio/Downloads/web-development-master/frontend/client/src/containers/Home.js";
import About from "./containers/About";
import Order from "/Users/maxerio/Downloads/web-development-master/frontend/client/src/containers/order/Order.js";

class App extends Component {
   
    renderRouter(){
      return(
        <Switch>
          <Route exact path="/" Component={Home}/>
         
        </Switch>
      )
    }




render(){
   return (
       <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}
 
export default App;
