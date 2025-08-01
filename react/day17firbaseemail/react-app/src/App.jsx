import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<SignUp />} />
       
      </Routes>
    </>
  );
};

export default App;
