import { useState } from "react";
import Child from "./components/Child";
//state and props
const App = () => {
  let [name, setName] = useState("batman");
  let [city, setCity] = useState("bopal");
  let [country, setCountry] = useState("india");

  function handleChange() {
    // name = "superman";
    // city = "ahemdabad";

    setCountry("new zealand");
    // console.log(name, city, country);
    setName("superman");
    setCity("ahemdabad");
  }

  return (
    <div>
      <h1>react</h1>

      <p>Name:{name}</p>
      <p>city:{city}</p>
      <p>COuntry:{country}</p>
      <button onClick={handleChange}>change data</button>
      <Child  name={name} city={city} country={country} />
    </div>
  );
};

export default App;
