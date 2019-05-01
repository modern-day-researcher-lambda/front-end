import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...therest }) => {
  return (
    <Route
      {...therest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component {...therest} />;
        } else {
          return <Redirect to="/welcome" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
