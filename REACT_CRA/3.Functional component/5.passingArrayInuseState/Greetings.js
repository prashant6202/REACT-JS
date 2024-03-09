import React, { useState } from "react";

export default function Greetings() {
  const [arr, setArr] = useState([]);
  const genRandomNo = (e) => {
    let no = Math.floor(Math.random() * 10 + 1);
    setArr([...arr, no]);
  };

  return (
    <div>
      <button onClick={genRandomNo}>Generate Random No</button>
      <ul>
        {arr.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
