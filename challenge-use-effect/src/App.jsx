import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";

function App() {
  return (
    <div>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </div>
  );
}

export default App;
