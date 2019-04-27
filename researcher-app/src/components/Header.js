import React from "react";
import { Route, Link } from "react-router-dom";

import Login from "./Login";


function Header() {
  return (
      <div className="Header">
        <Link to="/login">Login</Link>
      </div>
  );
}


export default Header;
