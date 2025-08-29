import { useState, useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [value, setValue] = useState(0);
  // const [something, setSomething] = useState(0);

  // useEffect(() => {
  //   if (value > 0) {
  //     console.log("call use effect");
  //     document.title = `Increment ${value}`;
  //   }
  // }, [value, something]);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) setData(data);
      console.log(data);
    }

    getData();
  }, []);

  return (
    <div>
      {/* <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <button onClick={() => setSomething(value + 1)}>
        Increment by something
      </button> */}

      {/* Using useEffect to fetch data */}
      <ul>
        {data.map((todo) => (
          <section key={todo.id}>
            <li>{todo.title}</li>
            <li> Body: {todo.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
}

export default App;
