import React from "react";

const Card = ({ id, title, body, dark, setDark }) => {
  return (

  

      <div
        key={id}
        style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px",
          color: dark ? "white" : "black",
          backgroundColor: dark ? "black" : "white",
        }}
      >
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

  );
};

export default Card;
