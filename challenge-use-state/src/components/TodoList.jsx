import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // list todo
  const [inputValue, setInputValue] = useState(""); // nilai input

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]); // tambahkan ke list
      setInputValue(""); // reset input
    }
  };

  return (
    <div>
      <div>
        <h2>Add Todo List</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Todo:
            <input
              type="text"
              name="todo"
              value={inputValue}
              onChange={handleChange}
              required
            />
          </label>
          <button
            type="submit"
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              background: "#2a4db7",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </form>
      </div>

      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
