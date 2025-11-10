import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../ContextAPI/AuthContext";

const Todolists = () => {
  const [todoData, setTodoData] = useState([]);
  const [task, setTask] = useState("");
  const { auth } = useAuth();

  async function handleAdd() {
    let response = await axios.post(
      "https://todo-server-n1yb.onrender.com/todolist",
      { todoName: task },
      {
        headers: { Authorization: `Bearer ${auth}` },
      }
    );

    console.log(response);
    alert(response.data.message);
  }

  useEffect(() => {
    console.log(auth);
    axios
      .get("https://todo-server-n1yb.onrender.com/todolist", {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((res) => {
        console.log(res);
        setTodoData(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, auth);

  console.log(todoData);
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}> Add task</button>

      <ul>
        {todoData.map((element) => {
          return <li key={element._id}>{element.todoName}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todolists;
