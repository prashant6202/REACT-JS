import React, { Fragment, useState } from "react";

export default function Greetings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <React.Fragment>
      FirstName:
      <br />
      <input type="text" value={firstName} onChange={handleFirstName} />
      <br />
      LastName:
      <br />
      <input type="text" value={lastName} onChange={handleLastName} />
      <br />
      {(firstName.length > 0 || lastName.length > 0) && (
        <span>
          Hello {firstName} {lastName}
        </span>
      )}
    </React.Fragment>
  );
}
