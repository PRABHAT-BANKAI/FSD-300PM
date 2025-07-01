import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav
      style={{
        height: "70px",
        backgroundColor: "aqua",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <Link to={"/about"}>
        <p>About</p>
      </Link>
      <Link to={"/contact"}>
        <p>Contact</p>
      </Link>
    </nav>
  );
};

export default Navbar;
