import React, { ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
  children?: ReactNode
  
}

export const ProtectedRoute = ({ children, ...rest }:Props) => {
    
  const { isAuth } = useSelector((state:any) => state.userData);

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
