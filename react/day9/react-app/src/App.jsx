import React, { useState } from "react";

const App = () => {
  const [inputText, setText] = useState("");
  const [todolist, setTodolist] = useState([]);

  function handleAdd() {
    setTodolist([...todolist, inputText]);
    setText("");
  }


  return (
    <div>
      <h1>Todolist</h1>
      <input
        value={inputText}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter your task "
      />
      <button onClick={handleAdd}>add</button>

      <div>
        {todolist.map((item,index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
