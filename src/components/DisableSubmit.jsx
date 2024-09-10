import React, { useState } from "react";

function DisableSubmit() {
  const [password, setpassword] = useState("");
  const [buttonstatus, setbuttonstatus] = useState(true);
  const [showPass, setshowPass] = useState(false);
  const handlePassword = (event) => {
    setpassword(event.target.value);
  };
  const handleConfirm = (event) => {
    const value = event.target.value;
    if (value === password) {
      setbuttonstatus(false);
    } else {
      setbuttonstatus(true);
    }
  };
  return (
    <div>
      <h3>Exercise 5 :</h3>
      <h3>Disable Submit</h3>
      <input
        type={showPass ? "text" : "password"}
        value={password}
        placeholder="enter password"
        onChange={handlePassword}
      />
      <button onClick={() => setshowPass(!showPass)}>
        {showPass ? "Hide" : "Show"}
      </button>
      <br />
      <br />
      <input placeholder="re-Enter password" onChange={handleConfirm} />
      <br />
      <br />
      <button disabled={buttonstatus}>Submit button</button>
    </div>
  );
}

export default DisableSubmit;
