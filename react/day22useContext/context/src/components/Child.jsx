import React, { useContext } from "react";
import { userContext } from "../context/context";

const Child = () => {
  const { email, name, password } = useContext(userContext);

  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>Email:{email}</h2>
      <h3>password:{password}</h3>
    </div>
  );
};

export default Child;
