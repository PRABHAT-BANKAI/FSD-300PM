import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [productInput, setProductInput] = useState({ title: "", price: "" });

  async function getData() {
    try {
      let res = await axios.get("http://localhost:3000/products");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (productInput.title == "" && productInput.price == "") {
      alert("first field you text ");
      return;
    }
    await axios.post("http://localhost:3000/products", productInput);
    alert("user added successfully");
    getData();
    setProductInput({ title: "", price: "" });
  }

  async function handleDelete(id) {
    await axios.delete("http://localhost:3000/products/" + id);
    alert("delete successfully");
    getData()
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Product page</h1>

      <form onSubmit={handleSubmit}>
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

      <div>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                height: "200px",
                width: "200px",
                border: "1px solid black",
              }}
            >
              <p>Title:{item.title}</p>
              <p>Price:{item.price}</p>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
