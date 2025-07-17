import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/todolist/todoslice";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const todolist = useSelector((state) => state.todolistStore.todo);
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(updateTodo({ editIndex, inputText }));
    setBoolean(false);
    setInputText("");
  }
  function handleEdit(index) {
    setBoolean(true);
    setInputText(todolist[index]);
    setEditIndex(index);
  }
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
      {boolean ? (
        <button onClick={handleUpdate}>update</button>
      ) : (
        <button onClick={handleAdd}>add</button>
      )}

      <div>
        {todolist &&
          todolist.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteTodo(index));
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todolist;
