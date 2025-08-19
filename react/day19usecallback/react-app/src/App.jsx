import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  function inc() {
    setCount(count++);
    console.log(count);
  }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={inc}>Inc</button>
    </div>
  );
};

export default App;
