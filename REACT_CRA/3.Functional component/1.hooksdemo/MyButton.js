import React from "react";
import { useState } from "react";
export default function MyButton() {
  let [msg, setMsg] = useState("Click Me");
  function handleClick() {
    let today = new Date();
    setMsg(today.toLocaleString());
  }
  return (
    <div>
      <button onClick={handleClick}>{msg}</button>
    </div>
  );
}
