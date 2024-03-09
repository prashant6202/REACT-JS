import React from "react";
import { useState } from "react";
export default function Increment() {
  let [counter, setCounter] = useState(0);
  let handleClick = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };
  return (
    <div>
      <h2>Count is : {counter}</h2>
      <button onClick={handleClick}>Increment Conter</button>
    </div>
  );
}
