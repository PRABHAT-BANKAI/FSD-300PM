import React from "react";
import Registration from "./Pages/Registeration";
import { Link, Route, Routes } from "react-router";
import Login from "./Pages/Login";
import Todolists from "./Pages/Todolists";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/todolist">Todolist</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route
            path="/todolist"
            element={
              <PrivateRoute>
                <Todolists />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
