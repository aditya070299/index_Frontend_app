import React, { useState } from "react";

function FontSize() {
  const [fontSize, setfontSize] = useState(12);

  console.log(fontSize);

  const HandleAddition = () => {
    if (fontSize > 24) {
      return;
    }
    setfontSize(fontSize + 1);
  };
  const HandleSubstracrion = () => {
    if (fontSize < 13) {
      return;
    }
    setfontSize(fontSize - 1);
  };

  return (
    <div>
      <h3>Exercise 6 :</h3>
      <h3>FontSize</h3>
      <div>
        <div>
          <button onClick={HandleSubstracrion}>-</button>
          <input type="text" value={fontSize} />
          <button onClick={HandleAddition}>+</button>
          <div>
            <p style={{ fontSize: `${fontSize}px` }}>
              Hii, My name is Aditya I am from Ujjain{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FontSize;
