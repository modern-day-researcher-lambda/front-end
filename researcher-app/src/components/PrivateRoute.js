import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...therest }) => {
  return (
    <Route
      {...therest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/welcome" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
