import React from "react";
import { EmpContext } from "./Parent.js";

export default function SubChild() {
  return (
    <div>
      <h2>This is SubChild Component</h2>
      <hr></hr>
      <EmpContext.Consumer>
        {(emp) => {
          return (
            <>
              <p>Emp id : {emp.id}</p>
              <p>Emp name: {emp.name}</p>
              <p>Emp salary: {emp.sal}</p>
            </>
          );
        }}
      </EmpContext.Consumer>
    </div>
  );
}
