
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Redirect, Route } from "react-router";
import './App.css';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Service} from './Service';
import {Navbar} from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Footer } from "./Footer";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/about" component = {About}/>
      <Route exact path = "/service" component = {Service}/>
      <Route exact path = "/contact" component = {Contact}/>
      <Redirect to = "/"></Redirect>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
