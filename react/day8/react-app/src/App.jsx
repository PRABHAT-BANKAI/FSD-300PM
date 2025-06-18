import { useState } from "react";
import Home from "./components/Home";

const App = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      {/* <Home /> */}

      <h1>Count:{count} </h1>
      <button onClick={handleInc}>Increment</button>
    </>
  );
};

export default App;
