import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Section/>
      <p className="text-blue-600 bg-amber-400 text-center">Hello world </p>
      <Footer/>
    </>
  );
};

export default App;
