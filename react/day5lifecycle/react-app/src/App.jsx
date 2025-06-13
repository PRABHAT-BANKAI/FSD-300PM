import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(); // hooks are intialized first  top of the functionnal components

  let [count, setCount] = useState(0);

  // useEffect
  async function getData() {
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const response = await result.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [count]);

  return (
    <div>
      <h1>api call</h1>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          setCount(count+1);
        }}
      >
        inc
      </button>
      <div>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt="" height={"100px"} />
                <h2>{item.title}</h2>
                <p>{item.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
