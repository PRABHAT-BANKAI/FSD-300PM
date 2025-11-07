import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../ContextAPI/AuthContext";

const PrivateRoute = ({ children }) => {
    const { auth } = useAuth();
  if (!auth) {
    alert("with out login cannot access todolist page")
    return <Navigate to={"/"} replace />;
  }

  return children;
};

export default PrivateRoute;
