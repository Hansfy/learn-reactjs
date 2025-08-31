import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

export const Data = React.createContext();
export const Data1 = React.createContext();

function App() {
  const name = "John";
  const age = 23;
  return (
    <div>
      <Data.Provider value={{ name }}>
        <Data1.Provider value={{ age }}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
}

export default App;
