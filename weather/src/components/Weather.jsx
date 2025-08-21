import React from "react";

const Weather = () => {
  let temp = 25; // Example temperature

  if (temp < 15) {
    return <h1>It's cold outside</h1>;
  } else if (temp >= 15 && temp < 25) {
    return <h1>It's a pleasant day</h1>;
  } else {
    return <h1>It's hot outside</h1>;
  }
};

export default Weather;
