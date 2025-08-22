import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
    </section>
  );
}

export default App;
