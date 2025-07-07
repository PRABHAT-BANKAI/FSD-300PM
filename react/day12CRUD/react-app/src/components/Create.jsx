import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Create = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [productInput, setProductInput] = useState({ title: "", price: "" });
  const [count, setCount] = useState(1);
  const [pageCount, setPageCount] = useState(null);

  function handleSearch(e) {
    // setSearch(e.target.value);

    let searchFilterData = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterData(searchFilterData);
  }

  async function getData() {
    try {
      let res = await axios.get(
        `http://localhost:3000/products/?_page=${count}&_per_page=3`
      );
      console.log(res);
      setData(res.data.data);
      setFilterData(res.data.data);

      setPageCount(res.data.pages);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(pageCount)
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
    getData();
  }
  function handleAsc() {
    let sortData = data.sort((a, b) => a.price - b.price);
    setData([...sortData]);
  }
  function handleDes() {
    let sortData = data.sort((a, b) => b.price - a.price);
    setData([...sortData]);
  }
  function handleSelect(e) {
    let allData = data;
    if (e.target.value === "all") {
      setFilterData(allData);
      return;
    }
    let filterData = allData.filter((item) => item.category === e.target.value);
    setFilterData(filterData);
  }
  useEffect(() => {
    getData();
  }, [count]);
  return (
    <div>
      <h1>Product page</h1>
      <div>
        <button onClick={handleAsc}>ascending</button>
        <button onClick={handleDes}>Descending</button>
        <select onChange={handleSelect} name="" id="">
          <option value="all">All</option>
          <option value="shirt">Shirt</option>
          <option value="shoes">Shoes</option>
          <option value="jeans">jeans</option>
        </select>
        <input type="text" placeholder="Searching.." onChange={handleSearch} />
      </div>
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
      <div style={{ display: "flex", gap: "5px" }}>
        {filterData.map((item) => {
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
              <p>Category:{item.category}</p>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </button>
              <Link to={`/update/${item.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          );
        })}
      </div>
      <button disabled={count == 1} onClick={() => setCount(count - 1)}>
        Back
      </button>
      <span>{count}</span>
      <button disabled={count == pageCount} onClick={() => setCount(count + 1)}>
        Next
      </button>
    </div>
  );
};

export default Create;
