import React, { useContext } from "react";
import { EmpContext } from "./Parent.js";

export default function SubChild() {
  let emp = useContext(EmpContext);
  return (
    <div>
      <h2>This is SubChild Component</h2>
      <hr></hr>

      <p>Emp Id: {emp.id}</p>
      <p>Emp name: {emp.name}</p>
      <p>Emp salary: {emp.sal}</p>
    </div>
  );
}
