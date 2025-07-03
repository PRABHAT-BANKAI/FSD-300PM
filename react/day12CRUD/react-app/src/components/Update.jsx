import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Update = () => {
  const [productInput, setProductInput] = useState({ title: "", price: "" });

  const { id } = useParams(); // id get from params

  async function getData() {
    try {
      let res = await axios.get(`http://localhost:3000/products/${id}`);
      console.log(res.data);
      setProductInput(res.data);
    } catch (error) {
      console.log(error);
    }
  }
 async function handleUpdate(e) {
    e.preventDefault();
    await axios.put(`http://localhost:3000/products/${id}`,productInput)
    alert("update successfully")
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Update Page</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter your Product name"
          value={productInput.title}
          onChange={(e) =>
            setProductInput({ ...productInput, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder=" Enter your price "
          value={productInput.price}
          onChange={(e) =>
            setProductInput({ ...productInput, price: e.target.value })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
