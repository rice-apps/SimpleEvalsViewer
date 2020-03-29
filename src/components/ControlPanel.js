import React, { useState } from "react";
import Selection from "./Selection";
import Submission from "./Submission";
import {getDeptClasses} from "../utils/CourseUtility";
import {generateTerms} from "../utils/TermUtility";

const dummy = {label:"", value:""};

function ControlPanel({ depts }) {
    const [getDept, setDept] = useState(dummy);
    const [getClasses, setClasses] = useState([]);
    const [getClass, setClass] = useState(dummy);
    const [getSes, setSes] = useState(dummy);
    const [getSessions, setSessions] = useState(dummy);

    console.log(depts);

    const handleChangeDept = selectedOption => {
        setDept(selectedOption);
        getDeptClasses(selectedOption.label)
        .then(classes => {
            setClasses(classes)
            if (classes.length){
                handleChangeClass(classes[0])
            } else {
                setClass(dummy)
                setSessions([])
                setSes(null)
            }
        })
    };

    const handleChangeClass = selectedOption => {
        //api call here
        let termsList = generateTerms(selectedOption.detail);
        console.log("**************")
        console.log(termsList);
        setSessions(termsList);
        setSes(termsList[0] ? termsList[0] : dummy)

        console.log(selectedOption);
        setClass(selectedOption);
    };

    const handleChangeTerm = selectedOption => {
        console.log(selectedOption);
        setSes(selectedOption);
    };

    if (getDept === dummy  && depts.length > 0) {
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
            options={getSessions}
            selected={getSes}
            show={true}
            handleChange={handleChangeTerm}
        />
        <Submission
            CRN = { getSes ? getSes.value.crn : ""}
            term = {getSes ? getSes.value.term_code : ""}
            show = {true}
        />
    </div>
    );
}

export default ControlPanel;
