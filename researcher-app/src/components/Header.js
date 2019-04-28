import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
      <div className="Header">
        <Link to="/login">Login</Link>
        <Link to="/cards">Cards</Link>
      </div>
  );
}


export default Header;
