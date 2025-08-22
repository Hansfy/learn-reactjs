import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Button = () => {
  const handleClick = () => {
    console.log(console.log(Math.round(Math.round(Math.random() * 100))));
  };
  return <button onClick={handleClick}>Click</button>;
};

const Copy = () => {
  const copyHandler = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.innerText);
    console.log("Stop stealing my content!");
    alert("Stop stealing my content!");
  };
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
      perferendis et cum. Debitis et laudantium ea, asperiores sed possimus
      eveniet similique. Harum temporibus repellendus eos alias distinctio
      laudantium nulla vero!
    </p>
  );
};

const Move = () => {
  const moveHandler = (params) => {
    alert("You moved the mouse away!");
    console.log("You moved the mouse away!");
  };
  return (
    <p onMouseLeave={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      asperiores, veniam voluptas facere enim cumque iure modi aliquid obcaecati
      non laborum, iusto amet reiciendis totam rerum mollitia quaerat
      perferendis quis?
    </p>
  );
};

function App() {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  );
}

export default App;
