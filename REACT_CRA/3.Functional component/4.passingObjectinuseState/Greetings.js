import React, { Fragment, useState } from "react";

export default function Greetings() {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
  const handleFirstName = (e) => {
    setFullName({ ...fullName, firstName: e.target.value }); //why have we use object destructure?
  };
  const handleLastName = (e) => {
    setFullName({ ...fullName, lastName: e.target.value });//ans->this is because unlike this.setState(),the useState() function does not merge the state object, rather it simplu overwrites it with the current value.
  }
  return (
    <React.Fragment>
      FirstName:
      <br />
      <input
        type="text"
        value={fullName.firstName}
        onChange={handleFirstName}
      />
      <br />
      LastName:
      <br />
      <input type="text" value={fullName.lastName} onChange={handleLastName} />
      <br />
      {(fullName.firstName.length > 0 || fullName.lastName.length > 0) && (
        <span>
          Hello {fullName.firstName} {fullName.lastName}
        </span>
      )}
    </React.Fragment>
  );
}
