import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Selection from "./components/Selection";
import ControlPanel from "./components/ControlPanel";
import Submission from "./components/Submission";

import data from "./data/CourseData.json";

function App() {
  // COMP -> 140 -> Fall 2019 -> Rixner
  var courseToNumbers = {};

  for (let key in data) {
    let [subject, number] = key.split(" ");
    if (!(subject in courseToNumbers)) {
      courseToNumbers[subject] = {};
    }
    if (!(number in courseToNumbers[subject])) {
      courseToNumbers[subject][number] = {};
    }

    for (let term in data[key]) {
      if (!(term in courseToNumbers[subject][number])) {
        courseToNumbers[subject][number][term] = [];
      }
      for (let crnObject of data[key][term]) {
        courseToNumbers[subject][number][term].push(crnObject);
      }
    }
  }

  console.log(courseToNumbers);

  return (
    <div className="App">
      <Title />
      <ControlPanel courseToNumbers={courseToNumbers} />
    </div>
  );
}

export default App;
