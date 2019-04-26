import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Cards from './components/Cards';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cards">Cards Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/cards" component={Cards} />
      </div>
    </Router>
  );
}

export default App;
