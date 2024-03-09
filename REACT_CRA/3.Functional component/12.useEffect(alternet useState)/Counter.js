import React from "react";
import { useReducer } from "react";

export default function Counter() {
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
    </div>
  );
}
