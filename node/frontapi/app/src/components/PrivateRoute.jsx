import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  if (true) {
    alert("with out login cannot access todolist page")
    return <Navigate to={"/"} replace />;
  }

  return children;
};

export default PrivateRoute;
