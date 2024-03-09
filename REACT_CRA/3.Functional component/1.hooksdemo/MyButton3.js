import React from "react";
import { useState } from "react";
export default function MyButton3() {
  let [msg, setMsg] = useState("Show Date");

  return (
    <div>
      <button
        onClick={() => {
          let today = new Date();
          setMsg(today.toLocaleString());
        }}
      >
        {msg}
      </button>
    </div>
  );
}
