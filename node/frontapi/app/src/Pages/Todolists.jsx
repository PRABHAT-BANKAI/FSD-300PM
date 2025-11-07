import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../ContextAPI/AuthContext";

const Todolists = () => {
  const [todoData, setTodoData] = useState([]);
  const { auth } = useAuth();

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
  }, [auth]);

  console.log(todoData);
  return (
    <div>
      <h1>Todolist</h1>

      <ul>
        {todoData.map((element) => {
          return <li key={element._id}>{element.todoName}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todolists;
