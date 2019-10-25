import React, {Component} from 'react';
import { Provider } from "react-redux";
import routes from "./routes";
import store from "./Ducks/store";
import Nav from './Components/Nav/Nav';
import {withRouter} from 'react-router-dom';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
       <div className="App">{routes}
         {this.props.location.pathname === '/' ? null : <Nav />}
        
       </div>
      </Provider>
    
    );
  } 
}

export default withRouter(App);

