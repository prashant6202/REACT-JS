import React from "react";
import { useState } from "react";
export default function MyButton2() {
  let [msg, setMsg] = useState("Show Date and Time.");
  let handleClick = () => {
    let today = new Date();
    setMsg(today.toLocaleString());
  };
  return (
    <div>
      <button onClick={handleClick}>{msg}</button>
    </div>
  );
}
