import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Error from './Error';
import Menu from "./Menu";
import Services from './Services';
const App = () => {
  const Name=()=>{
    return <h1>sakfkasdkf</h1>
  };
  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={()=><About name="About"/>}/>
      <Route exact path="/contact" render={()=><Contact name="Contact"/>}/>
      <Route exact path="/services" component={()=><Services name="Services"/>}/>
      <Route path="/contact/name" component={Name}/>
      <Route component={Error}/>
    </Switch>
    
    </>
  );
};

export default App;
