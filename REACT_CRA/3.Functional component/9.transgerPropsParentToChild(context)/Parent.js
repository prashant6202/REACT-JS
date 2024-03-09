import React, { useState } from "react";
import Child from "./Child";
export let EmpContext = React.createContext();
export default function Parent() {
  let [emp, setEmp] = useState({ id: 101, name: "Prashant", sal: 100000 });

  return (
    <div>
      <h2>This is Parent Component</h2>
      <hr></hr>
      <EmpContext.Provider value={emp}>
        <Child />
      </EmpContext.Provider>
    </div>
  );
}
