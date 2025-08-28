import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CopyInput from "./components/CopyInput";
import PopupContent from "./components/PopupContent";
import ReactDOM from "react-dom";
import Switcher from "./components/Switcher";

function App() {
  return (
    <div>
      <CopyInput />
      <Switcher />
    </div>
  );
}

export default App;
