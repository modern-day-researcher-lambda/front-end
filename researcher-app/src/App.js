import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppWrapper from "./AppWrapper";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import Cards from './components/Cards';
import CardForm from './components/CardForm';
import UpdateCardForm from "./components/UpdateCardForm";


function App(props) {
  return (
    <Router>
      <AppWrapper>
        <Route path="/" component={ Header } />
        <Route path="/welcome" component={ Welcome } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <PrivateRoute exact path="/cards" component={ Cards } />
        <PrivateRoute exact path="/cardform"  history={props.history} component={ CardForm } />
        <PrivateRoute exact path="/cards/:id" component={ UpdateCardForm }/>
      </AppWrapper>
    </Router>
  );
}

export default App;
 