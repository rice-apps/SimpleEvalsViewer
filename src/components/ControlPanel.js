import React, { useState, useEffect } from "react";
import Selection from "./Selection";
import Submission from "./Submission";
import {getDeptClasses} from "../constants/Courses";
// import {depts} from "../constants/Departments";
import {generateTerms} from "../utils/TermUtility";

const dummy = {label:"", value:""};

function ControlPanel({ depts }) {
  const [getDept, setDept] = useState(dummy);
  const [getClasses, setClasses] = useState([]);
  const [getClassesDetail, setClassesDetail] = useState([]);
  const [getClass, setClass] = useState(dummy);
  const [getTerm, setTerm] = useState(dummy);
  const [getTerms, setTerms] = useState(dummy);

  console.log(depts);

  const handleChangeDept = selectedOption => {
    console.log(selectedOption);
    setDept(selectedOption);
    let classes = getDeptClasses(selectedOption.label)
    getDeptClasses(selectedOption.label)
    .then(result => {
        let classes = result.classes;
        let detail = result.detail;
        setClasses(classes);
        setClassesDetail(detail);
        if (classes.length){
          handleChangeClass(classes[0])
        } else {
          setClass(dummy)
          setTerms([])
          setTerm(null)

        }
    })
  };
  const handleChangeClass = selectedOption => {

    //api call here
    console.log(getClassesDetail);
    
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

  if (getDept == dummy  && depts.length > 0) {
    handleChangeDept(depts[0]);
  }

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
