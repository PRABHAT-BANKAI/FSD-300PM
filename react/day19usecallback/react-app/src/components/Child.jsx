import React, { memo } from "react";

const Child = ({ countInc }) => {
  console.log("child rendering");
  return (
    <div>
      <h1>Child</h1>
      <button onClick={countInc}>Inc 2</button>
    </div>
  );
};

export default memo(Child);
