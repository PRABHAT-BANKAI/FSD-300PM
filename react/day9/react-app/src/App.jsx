import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { BsEmojiGrimace } from "react-icons/bs";
const App = () => {
  const [inputText, setText] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  function handleAdd() {
    if (!inputText.trim()) {
      alert("first you have fill input text");
      return;
    }
    setTodolist([...todolist, inputText]);
    setText("");
  }
  function handleDelete(index) {
    let filterData = todolist.filter((item, i) => i != index);
    setTodolist(filterData);
  }
  function handleEdit(index) {
    setText(todolist[index]);
    setEditIndex(index);
    setBoolean(true);
  }
  function handleUpdate() {
    let updateData = todolist.map((item, i) =>
      i == editIndex ? inputText : item
    );
    setTodolist(updateData);
    setText("");
    setBoolean(false);
  }
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div>
      <FaRegStar className="star" />
      <BsEmojiGrimace />
      <h1>Todolist</h1>
      <input
        value={inputText}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter your task "
      />
      {boolean ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>add</button>
      )}

      <div>
        {todolist.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleEdit(index);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
