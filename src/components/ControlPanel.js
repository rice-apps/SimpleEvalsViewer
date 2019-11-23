import React, { useState, useEffect } from "react";
import Selection from "./Selection";

const classes = [
  { value: "COMP140", label: "COMP140" },
  { value: "COMP182", label: "COMP182" },
  { value: "COMP215", label: "COMP215" }
];
const profs = [
  { value: "COMP140", label: "Rixner" },
  { value: "COMP182", label: "Luay" },
  { value: "COMP215", label: "Wallach" }
];
const terms = [
  { value: "201910", label: "2018 Fall" },
  { value: "201810", label: "2017 Fall" }
];

function ControlPanel() {
  const [getClass, setClass] = useState(classes[0]);
  const [getProf, setProf] = useState(profs[0]);
  const [getTerm, setTerm] = useState(terms[0]);

  const handleChange1 = selectedOption => {
    console.log(selectedOption);
    setClass(selectedOption);
  };
  const handleChange2 = selectedOption => {
    console.log(selectedOption);
    setProf(selectedOption);
  };
  const handleChange3 = selectedOption => {
    console.log(selectedOption);
    setTerm(selectedOption);
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
        options={profs}
        selected={getProf}
        show={true}
        handleChange={handleChange2}
      />
      <Selection
        options={terms}
        selected={getTerm}
        show={true}
        handleChange={handleChange3}
      />
    </div>
  );
}

export default ControlPanel;
