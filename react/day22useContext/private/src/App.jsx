import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
