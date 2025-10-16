import React, { createContext, useEffect, useState } from "react";

const authContext = createContext(); // create authContext
const AuthProvider = ({ children }) => {
  //update
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("todoToken")) || ""
  );

  function login(tokenCode) {
    setAuth(tokenCode);
  }

  useEffect(() => {
    localStorage.setItem("todoToken", JSON.stringify(auth));
  });
  return (
    <authContext.Provider value={(auth, login)}>
      {children}
    </authContext.Provider>
  ); // provider
};

export default AuthProvider;
