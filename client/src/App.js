import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'boxicons'
import 'bootstrap/dist/css/bootstrap.css';

import './assets/styles/tedx.scss';
import './assets/styles/auth.scss';
import './assets/styles/sidebar.scss';
import './assets/styles/assetbar.scss';
import './assets/styles/settings.scss';
import './assets/styles/profile.scss';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { Register, Login, Home,  Settings } from "./components";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>  
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
   
        
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    );
  }
}
/*
       &
      .-"`"-.
     /       \
     |   __  _|
     |  /  \/ \
    WW  \_o/_o/
    (        _)
     |   .----\
     ;  | '----'
      \__'--;`
jgs   |___/\|
*/