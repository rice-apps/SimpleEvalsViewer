import React, { useState, useEffect } from "react";
import Selection from "./Selection";
import Submission from "./Submission";
import {getDeptClasses} from "../constants/Courses";
import {depts} from "../constants/Departments";
import {generateTerms} from "../utils/TermUtility";

const dummy = {label:"", value:""};

function ControlPanel() {
  const [getDept, setDept] = useState(depts[0]);
  const [getClasses, setClasses] = useState(getDeptClasses(depts[0].label));
  const [getClass, setClass] = useState(dummy);
  const [getTerm, setTerm] = useState(dummy);
  const [getTerms, setTerms] = useState(dummy);

  const handleChangeDept = selectedOption => {
    console.log(selectedOption);
    setDept(selectedOption);
    let classes = getDeptClasses(selectedOption.label)
    setClasses(classes)
    if (classes.length){
      handleChangeClass(classes[0])
    } else {
      setClass(dummy)
      setTerms([])
      setTerm(null)

    }
  };
  const handleChangeClass = selectedOption => {

    //api call here
   
    let termsList = generateTerms(selectedOption.label);
    console.log("**************")
    console.log(termsList);
    setTerms(termsList);
    setTerm(termsList[0] ? termsList[0] : dummy)

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
        options={getTerms}
        selected={getTerm}
        show={true}
        handleChange={handleChangeTerm}
      />
      <Submission
        CRN = { getTerm ? getTerm.value.crn : ""}
        term = {getTerm ? getTerm.value.term_code : ""}
        show = {true}
      />
    </div>
  );
}

export default ControlPanel;
