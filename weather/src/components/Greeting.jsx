import React from "react";

const Greeting = ({ timeOfDay = "morning" }) => {
  if (timeOfDay === "morning") {
    return <h1>Good Morning!</h1>;
  } else if (timeOfDay === "afternoon") {
    return <h1>Good Afternoon!</h1>;
  } else if (timeOfDay === "evening") {
    return <h1>Good Evening!</h1>;
  } else {
    return <h1>Hello!</h1>;
  }
};

export default Greeting;
