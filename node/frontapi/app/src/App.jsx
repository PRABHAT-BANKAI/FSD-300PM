import React from "react";
import Registration from "./Pages/Registeration";
import { Link, Route, Routes } from "react-router";
import Login from "./Pages/Login";
import Todolists from "./Pages/Todolists";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";
import { useAuth } from "./ContextAPI/AuthContext";

const App = () => {
  const { auth, logout } = useAuth();

  function handleLogOut() {
    alert("logout successfully")
    logout();
  }
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            {auth ? (
              <button onClick={handleLogOut}>Logout</button>
            ) : (
              <Link to="/">Login</Link>
            )}
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
          <Route
            path="/"
            element={
              <PrivateRoute2>
                <Login />
              </PrivateRoute2>
            }
          />
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
