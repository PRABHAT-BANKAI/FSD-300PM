import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  function inc() {
    setCount(count++);
    console.log(count);
  }


  // const countInc = useCallback(() => {
//   console.log("count2 call");
//   setCount2(prev => prev + 1);
// }, []);
// Clicking "Increment Count 1" will not re-render Child.

// Clicking "Increment Count 2" will increment count2 and cause only App to re-render (due to state change),
//  but countInc remains the same, so Child doesn't re-render unless truly needed.

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={inc}>Inc</button>
    </div>
  );
};

export default App;
