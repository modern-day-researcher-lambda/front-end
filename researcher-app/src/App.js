import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Cards from './components/Cards';
import CardForm from './components/CardForm';
import history from './components/history'

import './App.css';


function App() {
  return (
    <Router history = { history }>
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/cards" component={Cards} />
        <Route exact path="/cardform" component={ CardForm } />
      </div>
    </Router>
  );
}

export default App;
