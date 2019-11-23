import React, { useState, useEffect } from "react";
import Selection from "./Selection";

const classes = [
  { value: "COMP140", label: "COMP140" },
  { value: "COMP182", label: "COMP182" },
  { value: "COMP215", label: "COMP215" }
];

function ControlPanel() {
  const [getClass, setClass] = useState(classes[0]);

  const handleChange1 = selectedOption => {
    console.log(selectedOption);
    setClass(selectedOption);
  };

  return (
    <div className="App">
      <Selection
        options={classes}
        selected={getClass}
        show={true}
        handleChange={handleChange1}
      />
      <Selection
        options={classes}
        selected={getClass}
        show={true}
        handleChange={handleChange1}
      />
      <Selection
        options={classes}
        selected={getClass}
        show={true}
        handleChange={handleChange1}
      />
    </div>
  );
}

export default ControlPanel;
