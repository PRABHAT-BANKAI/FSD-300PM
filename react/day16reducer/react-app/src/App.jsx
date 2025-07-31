import React, { useReducer } from "react";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function reducer(state, action) {
    console.log(state);
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
        };

      case "decrement":
        console.log(state);
        return {
          count: state.count - 1,
        };
        break;
    }
  }
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default App;
