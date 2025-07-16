import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todolist/todoslice";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const todolist = useSelector((state) => state.todolistStore.todo);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addTodo(inputText));
    alert("task added sucessfully");
    setInputText("");
  }
  return (
    <div>
      <h1>TodoList</h1>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>

      <div>
        {todolist &&
          todolist.map((item) => {
            return <p>{item}</p>;
          })}
      </div>
    </div>
  );
};

export default Todolist;
