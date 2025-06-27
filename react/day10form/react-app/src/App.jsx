import React, { useState } from "react";

const App = () => {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [submitData, setSubmitData] = useState(null);
  const [error, setError] = useState({});
  function handleSubmit(e) {
    e.preventDefault(); // cannot page refresh
    if (validation()) {
      setSubmitData(data);
      setData({ name: "", email: "", password: "" });
    }
  }

  function validation() {
    let obj = {};
    let val = true;

    if (!data.name.trim()) {
      val = false;
      obj.name = "name is not valid ";
    }

    if (!data.email.trim()) {
      val = false;
      obj.email = "email is not valid ";
    }
    if (!data.password.trim()) {
      val = false;
      obj.password = "password is not valid ";
    } else if (data.password > 8) {
      obj.password = "password is length should be greater than 8 characters";
      val = false;
    }

    setError(obj);
    return val;
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ width: "300px", border: "1px solid black" }}
      >
        <div>
          <label htmlFor="">
            Name:
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Enter your Name"
            />
          </label>
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>
        <div>
          <label htmlFor="">
            email:
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="enter your email"
            />
          </label>
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div>
          <label htmlFor="">
            password:
            <input
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="enter your password"
            />
          </label>
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Submit
        </button>
      </form>

      {submitData && (
        <div>
          <p>{submitData.name}</p>
          <p>{submitData.email}</p>
          <p>{submitData.password}</p>
        </div>
      )}
    </>
  );
};

export default App;
