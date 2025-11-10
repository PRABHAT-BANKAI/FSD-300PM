import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../ContextAPI/AuthContext";

const PrivateRoute2 = ({children}) => {
  const { auth } = useAuth();
  if (auth) {

    return <Navigate to={"/todolist"} replace />;
  }

  return children;
};

export default PrivateRoute2;
