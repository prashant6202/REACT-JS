import React, { useContext } from "react";
import { EmpContext } from "./Parent.js";
export default function SubChild() {
  let x = useContext(EmpContext);
  return (
    <div>
      <hr></hr>
      <h2>This is SubChild Component</h2>
      <p>
        Emp id:<b>{x.data.id}</b>
      </p>
      <p>
        Emp Name:<b>{x.data.name}</b>
      </p>
      <p>
        Emp salary:<b>{x.data.sal}</b>
      </p>
      <button
        onClick={() => {
          x.updateData({ ...x.data, sal: x.data.sal + x.data.sal * 0.1 });
        }}
      >
        Increment salary
      </button>
    </div>
  );
}
