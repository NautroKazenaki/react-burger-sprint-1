import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, ...rest }) => {
    
  const { isAuth } = useSelector((state) => state.userData);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
