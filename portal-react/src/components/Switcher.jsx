import React from "react";

const Switcher = () => {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <div>
      {isOn ? <span>Dark</span> : <span>Light</span>}

      <br />
      <input type="text" key={isOn ? "dark" : "light"} />
      <button onClick={() => setIsOn((s) => !s)}>Switch</button>
    </div>
  );
};

export default Switcher;
