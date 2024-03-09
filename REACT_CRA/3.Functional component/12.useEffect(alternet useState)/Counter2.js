import React from "react";
import { useReducer } from "react";

export default function Counter2() {
  const [state, setUpdate] = useReducer((state, value) => {
    return state + value;
  }, 0);
  return (
    <div>
      <p>Counter: {state}</p>
      <button
        onClick={() => {
          setUpdate(1);
        }}
      >
        Increment by 1
      </button>
      <button
        onClick={() => {
          setUpdate(2);
        }}
      >
        Increment by 2
      </button>
      <button
        onClick={() => {
          setUpdate(3);
        }}
      >
        Increment by 3
      </button>
    </div>
  );
}
