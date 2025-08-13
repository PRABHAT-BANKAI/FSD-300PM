import React, { useMemo, useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [count, setCount] = useState(0);

  console.log("rendering");

  const sum = useMemo(() => {
    console.log("sum");
    return Number(num1) + Number(num2);
  }, [num1, num2]);
  return (
    <div>
      <h1>use memo</h1>
      <input
        type="text"
        placeholder="enter num1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter num2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <p>SUM:{sum}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
};

export default App;
