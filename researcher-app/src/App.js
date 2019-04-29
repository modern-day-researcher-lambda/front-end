import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import Cards from './components/Cards';
import CardForm from './components/CardForm';
//import history from './components/history'

import './App.css';


function App() {
  return (
    <Router>
      {/* <Router history = { history }> */}
      <div className="App">
        <Route path="/" component={ Header } />
        <Route exact path="/" component={ Welcome } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <PrivateRoute exact path="/cards" component={ Cards } />
        <PrivateRoute exact path="/cardform" component={ CardForm } />
      </div>
    </Router>
  );
}

export default App;
