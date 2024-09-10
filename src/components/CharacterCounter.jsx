import React, { useState } from "react";

function CharacterCounter() {
  const [inputChar, SetInputChar] = useState("");
  const [count, SetCount] = useState(0);

  const HandleChange = (event) => {
    const value = event.target.value;
    SetInputChar(value);
    SetCount(value.length);
  };
  return (
    <div>
      <h3>Exercise 3 :</h3>
      <h3>Character Counter</h3>
      <input
        type="text"
        value={inputChar}
        onChange={HandleChange}
        maxLength={50}
      />
      <p>{count}/50</p>
    </div>
  );
}

export default CharacterCounter;
