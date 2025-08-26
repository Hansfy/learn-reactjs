import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;
