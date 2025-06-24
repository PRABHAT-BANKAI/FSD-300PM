import { useEffect, useRef, useState } from "react";

const App = () => {
  const nameInputRef = useRef(null);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert(`Name: ${nameInputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" defaultValue="Initial Name" ref={nameInputRef} />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>

      {text && <p>{text}</p>}
    </form>
  );
};
export default App;
