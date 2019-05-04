import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppWrapper from "../styled-components/AppWrapper";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import CardForm from './CardForm';
import UpdateCardForm from "./UpdateCardForm";
import Landing from './Landing';


function App(props) {
  return (
    <Router>
      <AppWrapper>
        <Route path="/" component={ Header } />
        <Route exact path="/" component={ Landing } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route exact path="/cardform" component={ CardForm } />
        <Route exact path="/cards/:id" component={ UpdateCardForm }/>
      </AppWrapper>
    </Router>
  );
}

export default App;
 