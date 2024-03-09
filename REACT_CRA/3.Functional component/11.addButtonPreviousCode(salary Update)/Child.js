import React, { useContext } from "react";
import SubChild from "./SubChild.js";
import { EmpContext } from "./Parent.js";
export default function Child() {
  let x = useContext(EmpContext);
  return (
    <div>
      <h2>This is child Component</h2>
      <p>
        Emp id:<b>{x.data.id}</b>
      </p>
      <p>
        Emp Name:<b>{x.data.name}</b>
      </p>
      <p>
        Emp salary:<b>{x.data.sal}</b>
      </p>
      <SubChild />
    </div>
  );
}
