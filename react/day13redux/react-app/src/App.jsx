import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  multiplyByAmount,
} from "./redux/features/counter/counterSlice";
import Child from "./components/Child";
import Child2 from "./components/Child2";

const App = () => {
  const distpatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => distpatch(increment())}>Inc</button>
      <button onClick={() => distpatch(decrement())}>Dec</button>
      <button onClick={() => distpatch(incrementByAmount(15))}>
        Inc by amount 15
      </button>
      <button onClick={() => distpatch(multiplyByAmount(5))}>
        multiply by any amount
      </button>

      <Child count={count} />
      <Child2 />
    </div>
  );
};

export default App;
