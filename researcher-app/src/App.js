import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppWrapper from "./AppWrapper";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Cards from './components/Cards';
import CardForm from './components/CardForm';
import UpdateCardForm from "./components/UpdateCardForm";
import Tabs from "./components/Tabs";


function App(props) {
  return (
    <Router>
      <AppWrapper>
        <Route path="/" component={ Header } />
        <Route path="/welcome" component={ Welcome } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route exact path="/cards" component={ Tabs }/>
        <Route exact path="/cards" component={ Cards } />
        <Route exact path="/cardform"  component={ CardForm } />
        <Route exact path="/cards/:id" component={ UpdateCardForm }/>  
      </AppWrapper>
    </Router>
  );
}

export default App;
 