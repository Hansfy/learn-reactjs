import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const MyCounter = ({ count }) => {
    let displayCount = count;
    if (count > 10 || count < 0) {
      displayCount = "done";
    }
    return <span>{displayCount}</span>;
  };

  const isDone = count > 10 || count < 0;

  return (
    <div>
      <button onClick={increment}>+</button>
      <MyCounter count={count} />
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={reset} style={{ margin: "2rem" }} disabled={!isDone}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
