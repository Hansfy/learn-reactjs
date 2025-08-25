import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";

function App() {
  const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };
  // const [friends, setFriends] = useState(["John", "Jane", "Doe"]);
  // const addFriend = () => {
  //   setFriends([...friends, `Ini Teman Baru ${friends.length + 1}`]);
  // };
  // const removeFriend = () => {
  //   setFriends(friends.slice(0, -1));
  // };
  // const updateFriend = () => {
  //   setFriends(
  //     friends.map((friend) => (friend === "John" ? "Jhon Smith" : friend))
  //   );
  // };

  return (
    <section>
      {/* Update count from parrent */}
      {/* <h1>{count}</h1>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button> */}
      {/* <h2>Daftar Teman</h2>
      <div>
        {friends.map((friend, index) => (
          <p key={index}>
            {index + 1}. {friend}
          </p>
        ))}
        <button onClick={addFriend}>Tambah Teman</button>
        <button onClick={removeFriend}>Hapus Teman</button>
        <button onClick={updateFriend}>Update John</button>
      </div> */}
      {/* Update count from child component */}
      {/* <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} /> */}

      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
    </section>
  );
}

export default App;
