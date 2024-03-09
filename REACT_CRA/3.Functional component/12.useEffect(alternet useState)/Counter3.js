import React from "react";
import { useReducer } from "react";

export default function Counter3() {
  const [state, setUpdate] = useReducer((state, value) => {
    if (value === "increment") {
      return state + 1;
    } else if (value === "decrement") {
      return state - 1;
    } else if (value === "reset") {
      return 0;
    }
  }, 0);
  return (
    <div>
      <p>Counter: {state}</p>
      <button
        onClick={() => {
          setUpdate("increment");
        }}
      >
        Increment by 1
      </button>
      <button
        onClick={() => {
          setUpdate("decrement");
        }}
      >
        decrement by 1
      </button>
      <button
        onClick={() => {
          setUpdate("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}
