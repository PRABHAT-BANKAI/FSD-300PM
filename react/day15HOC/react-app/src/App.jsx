import React, { useEffect, useState } from "react";
import { HOC } from "./components/HOC";
import Display from "./components/Display";

const App = () => {
  const [isloading, setisLoading] = useState(false);
  const [data, setData] = useState([]);

  const EnhanceComponent = HOC(Display);

  useEffect(() => {
    setisLoading(true)
    setTimeout(() => {
      setData(["item1", "item2", "item3", "item4"]);
      setisLoading(false)
    }, 3000);
  }, []);

  return (
    <div>
      <h1>A Higher-Order Component (HOC) in ReactJS is an advanced technique for reusing component logic. It is a function that takes a component as an argument and returns a new, enhanced component.</h1>
      <EnhanceComponent isloading={isloading} data={data} />
    </div>
  );
};

export default App;
