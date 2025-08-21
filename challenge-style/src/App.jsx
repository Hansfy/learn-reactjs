import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StyleCard from "./components/StyleCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </div>
  );
}

export default App;
