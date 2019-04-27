import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Cards from './components/Cards';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Header} />
        <PrivateRoute exact path="/cards" component={Cards} />
      </div>
    </Router>
  );
}

export default App;
