import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { HiBell } from "react-icons/hi";

function App() {
  const styles = {
    color: "white",
    backgroundColor: "black",
    padding: "2rem",
  };

  return (
    <section>
      {/* for inline style */}
      {/* <h1 style={{ color: "black", backgroundColor: "red", padding: "2rem" }}>
        Inline Style
      </h1> */}
      {/* for object style */}
      {/* <h1 style={styles}>Object Style</h1> */}

      {/* separate file */}
      <h1>Separate file for Styling</h1>
      <HiBell />
    </section>
  );
}

export default App;
