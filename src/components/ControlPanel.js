import React, { useState, useEffect } from "react";
import Selection from "./Selection";
import Submission from "./Submission";

const classes = [
  { value: "10396", label: "COMP140" },
  { value: "21510", label: "COMP182" },
  { value: "12226", label: "COMP215" }
];
const profs = [
  { value: "COMP140", label: "Rixner" },
  { value: "COMP182", label: "Luay" },
  { value: "COMP215", label: "Wallach" }
];
const terms = [
  { value: "201910", label: "2018 Fall" },
  { value: "201920", label: "2019 Spring" }
];

function ControlPanel() {
  const [getClass, setClass] = useState(classes[0]);
  const [getProf, setProf] = useState(profs[0]);
  const [getTerm, setTerm] = useState(terms[0]);

  const handleChange1 = selectedOption => {
    //api call here
    
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
      <Submission
        CRN = {getClass.value}
        term = {getTerm.value}
        show = {true}
      />
    </div>
  );
}

export default ControlPanel;
