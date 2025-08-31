import React from "react";
import { Data, Data1 } from "../App";

const ComponentC = ({ name }) => {
  //using useContext Hook
  const userName = React.useContext(Data);
  const userAge = React.useContext(Data1);
  console.log(userName, userAge);
  return (
    // Using Context Consumer
    // <Data.Consumer>
    //   {(name) => {
    //     return (
    //       <Data1.Consumer>
    //         {(age) => {
    //           return (
    //             <div>
    //               <h1>Component C</h1>
    //               <h2>Name: {name.name}</h2>
    //               <h2>Age: {age.age}</h2>
    //             </div>
    //           );
    //         }}
    //       </Data1.Consumer>
    //     );
    //   }}
    // </Data.Consumer>
    <div>
      <h1>Component C</h1>
      <h2>Name: {userName.name}</h2>
      <h2>Age: {userAge.age}</h2>
    </div>
  );
};

export default ComponentC;
