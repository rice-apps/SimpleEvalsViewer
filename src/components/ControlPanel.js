import React, { useState, useEffect } from "react";
import Selection from "./Selection";
import Submission from "./Submission";
import {getDeptClasses} from "../constants/Courses";
import {depts} from "../constants/Departments";


// const classes = [
//   { value: "10396", label: "COMP140" },
//   { value: "21510", label: "COMP182" },
//   { value: "12226", label: "COMP215" }
// ];
// const depts = [
//   { value: "COMP140", label: "Rixner" },
//   { value: "COMP182", label: "Luay" },
//   { value: "COMP215", label: "Wallach" }
// ];
const terms = [
  { value: "201910", label: "2018 Fall" },
  { value: "201920", label: "2019 Spring" }
];

/*
{label: "Term, CRN, instructor (information about this instance of the course",
value: {CRN: sodflksadfj, term_code: ;alsdkjf;ads } }
*/

const dummy = {label:"", value:""};

function ControlPanel() {
  const [getDept, setDept] = useState(depts[0]);
  const [getClasses, setClasses] = useState(getDeptClasses(depts[0].label))
  const [getClass, setClass] = useState(dummy);
  const [getTerm, setTerm] = useState(dummy);

  const handleChangeDept = selectedOption => {
    console.log(selectedOption);
    setDept(selectedOption);
    let classes = getDeptClasses(selectedOption.label)
    setClasses(classes)
    setClass(classes[0] ? classes[0] : dummy)
  };
  const handleChangeClass = selectedOption => {

    //api call here
    
   
    console.log(selectedOption);
    setClass(selectedOption);
  };
  const handleChangeTerm = selectedOption => {
    console.log(selectedOption);
    setTerm(selectedOption);
  };

  return (
    <div className="App">
      <Selection
        options={depts}
        selected={getDept}
        show={true}
        handleChange={handleChangeDept}
      />

      <Selection
        options={getClasses}
        selected={getClass}
        show={true}
        handleChange={handleChangeClass}
      />
      
      <Selection
        options={terms}
        selected={getTerm}
        show={true}
        handleChange={handleChangeTerm}
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
