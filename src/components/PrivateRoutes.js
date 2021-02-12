import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "./AuthContext/AuthProvider";

export const PrivateRoutes = ({ privatecomp: Component, ...rest }) => {
  const { currentUser } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    />
  );
};
