import React from "react";
import { useState, useEffect } from "react";
export default function Counter() {
  let [counter, setCounter] = useState(0);
  let handleClick = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };
  useEffect(() => {
    let today = new Date();
    document.title = `${today.toLocaleString()}`;
  });
  return (
    <div>
      <h2>Count is : {counter}</h2>
      <button onClick={handleClick}>Increment Conter</button>
    </div>
  );
}
