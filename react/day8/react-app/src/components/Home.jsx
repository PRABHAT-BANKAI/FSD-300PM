import { useEffect, useState } from "react";
import Card from "../components/Card";
const Home = () => {
const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1
        style={{
          color: dark ? "white" : "black",
          backgroundColor: dark ? "black" : "white",
        }}
      >
        Data
      </h1>

      {loading && (
        <p
          style={{
            color: dark ? "white" : "black",
            backgroundColor: dark ? "black" : "white",
          }}
        >
          Loading...
        </p>
      )}

      <button onClick={() => setDark(!dark)}>dark mode</button>

      {data &&
        data.map((item) => {
          return (
            <Card
              dark={dark}
              setDark={setDark}
              key={item.id}
              title={item.title}
              id={item.id}
              body={item.body}
            />
          );
        })}
    </>
  );
}

export default Home