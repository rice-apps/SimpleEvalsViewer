import React, { useState, useEffect } from "react";
import Selection from "./Selection";
import Submission from "./Submission";
import data from "../constants/CourseData";

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

function ControlPanel({courseToNumbers}) {

    const subjects = Object.keys(courseToNumbers).map( key => {
        return {value: key, label: key}
    });
    
    const [getCrnForSelectedTerm, setCrnForSelectedTerm] = useState([]);
    const [getTermsForSelectedCourse, setTermsForSelectedCourse] = useState([]);
    const [getCodesForSelectedSubject, setCodesForSelectedSubject] = useState([]);
    const [getSubject, setSubject] = useState(subjects[0]);

    const [getCode, setCode] = useState({value: 0, label: "Not Selected"});
    const [getTerm, setTerm] = useState({value: 0, label: "Not Selected"});
    const [getCrn, setCrn] = useState({value: 0, label: "Not Selected"});


    const handleSubjectChange = selectedOption => {
        setCodesForSelectedSubject(Object.keys(courseToNumbers[selectedOption["label"]]).map( key => {
            return {value: key, label: key}
        }))

        // Set subject to selected
        setSubject(selectedOption);

        // Reset code to display, reset term but do not display
        setCode({value: 1, label: "Not Selected"});
        setTerm({value: 0, label: "Not Selected"});
        setCrn({value: 0, label: "Not Selected"});
    };

    const handleCodeChange = selectedOption => {
        setTermsForSelectedCourse(Object.keys(courseToNumbers[getSubject["label"]][selectedOption["label"]]).map( key => {
            return {value: key, label: key}
        }))

        // Set code to selected
        setCode(selectedOption);

        // Reset term to display
        setTerm({value: 1, label: "Not Selected"});
        setCrn({value: 0, label: "Not Selected"});
    };
    
    const handleTermChange = selectedOption => {
        // CRNs came in as array
        let crnArr = courseToNumbers[getSubject["label"]][getCode["label"]][selectedOption["label"]];

        // Map through each CRN
        setCrnForSelectedTerm(crnArr.map( (crn, idx) => {
            let value = crn;
            return {value: value, label: idx}
        }));

        // Set term to selected
        setTerm(selectedOption);
        
        // Reset CRN to display
        setCrn({value: 1, label: "Not Selected"});
    };

    const handleCrnChange = selectedOption => {
        console.log(selectedOption);
        setCrn(selectedOption);
    }

  return (
    <div className="App">
      <Selection
        options={subjects}
        selected={getSubject}
        show={true}
        handleChange={handleSubjectChange}
      />
      <Selection
        options={getCodesForSelectedSubject}
        selected={getCode}
        show={getCode.value != 0 }
        handleChange={handleCodeChange}
      />
      <Selection
        options={getTermsForSelectedCourse}
        selected={getTerm}
        show={getTerm.value != 0 }
        handleChange={handleTermChange}
      />
      <Selection
          options={getCrnForSelectedTerm}
          selected={getCrn}
          show={getCrn.value != 0 }
          handleChange={handleCrnChange}
      />

      <Submission
       CRN = {getCrn.value}
       term = {getTerm.value}
       show = {true}
      />

    </div>
  );
}

export default ControlPanel;
