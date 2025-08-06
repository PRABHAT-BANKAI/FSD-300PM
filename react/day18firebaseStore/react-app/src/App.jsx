import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./config/firebase";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [editId, setEditId] = useState("");
  const [boolean, setBoolean] = useState(false);

  const database = collection(db, "BatmanData");

  async function handleAdd() {
    if (!inputText.trim()) {
      alert("enter your task first");
      return;
    }

    try {
      await addDoc(database, { todo: inputText });
      alert("task added successfully ");
    } catch (error) {
      alert("message", error);
    }
    getData()
    setInputText("");
  }

  console.log(todoData);

  async function getData() {
    const data = await getDocs(database);
    console.log(data, "data");

    setTodoData(
      data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        placeholder="enter your task"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={handleAdd}>add</button>

      <div>
        {todoData.length == 0 ? (
          <h2>task right now empty</h2>
        ) : (
          todoData.map((item) => {
            return (
              <div key={item.id}>
                <p>Todo:{item.todo}</p>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
