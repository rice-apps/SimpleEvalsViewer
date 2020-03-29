import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Title";
import ControlPanel from "./components/ControlPanel";
import config from "./config";

function App() {

    const [depts, setDepts] = useState([]);

    const fetchDepts = async () => {
        let response = await fetch(config.backendURL + "/courses/getAllSubjects");
        let result = await response.json();
        return result["subjects"];
    }

    useEffect(
        () => {
            fetchDepts()
            .then(subjects => {
                setDepts(subjects.map(dept => ({label: dept, value: dept})));
            })
        }, []
    );

    return (
        <div className="App">
        <Title />
        <ControlPanel depts={depts} />
        </div>
    );
}

export default App;
