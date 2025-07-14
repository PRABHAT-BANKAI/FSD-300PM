import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/features/counter/counterSlice";

const App = () => {
  const distpatch = useDispatch()
  const count = useSelector((state) =>state.counter.value);

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={()=>distpatch(increment())}>Inc</button>
      <button>Dec</button>
    </div>
  );
};

export default App;
