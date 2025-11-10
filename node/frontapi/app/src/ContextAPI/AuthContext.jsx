import React, { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext(); // create authContext
const AuthProvider = ({ children }) => {
  //update
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("todoToken")) || ""
  );

  function login(tokenCode) {
    setAuth(tokenCode);
  }

  function logout() {
    setAuth("");
  }

  useEffect(() => {
    localStorage.setItem("todoToken", JSON.stringify(auth));
  });
  return (
    <authContext.Provider value={{ auth, login, logout }}>
      {children}
    </authContext.Provider>
  ); // provider
};
export const useAuth = () => useContext(authContext);

export default AuthProvider;
