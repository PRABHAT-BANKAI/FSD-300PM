import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("local")) || 0
  );

  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(count));

    return()=>{
      //clean up function 
    }
  }, [count]);
  return (
    <div>
      <h1>Counter app</h1>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button disabled={count == 0} onClick={() => setCount(count - 1)}>
        Dec
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
