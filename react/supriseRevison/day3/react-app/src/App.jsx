import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  function handleInc() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <h1>count application</h1>
      <p>count:{count}</p>
      <button onClick={handleInc}>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default App;
