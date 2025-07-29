import React from "react";

const Display = ({ data }) => {
  return (
    <div>
      <h1>List of datas</h1>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Display;
