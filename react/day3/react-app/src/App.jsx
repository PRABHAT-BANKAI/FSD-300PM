import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  let object = {
    name: "batman",
    age: 12,
    power: "billionare",
  };

  return (
    // react fragment
    <React.Fragment>
      <Navbar />
      <h1 className="heading" style={{color:"red",backgroundColor:"yellow"}}>Hello react</h1>
      <h2>2nd sentence</h2>

      <h3>Name:{object.name}</h3>
      <p>Age:{object.age}</p>
      <p>Power:{object.power}</p>
      <div></div>
      <Footer/>
    </React.Fragment>
  );
};

export default App;
