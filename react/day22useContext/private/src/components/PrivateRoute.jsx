import React from "react";
import Home from "./Home";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const login = false;

  return login ? children : <Navigate to="/" />;
};

export default PrivateRoute;
