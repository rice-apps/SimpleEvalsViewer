import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Selection from "./components/Selection";
import ControlPanel from "./components/ControlPanel";
import Submission from "./components/Submission";

function App() {
  return (
    <div className="App">
      <Title />
      <ControlPanel/>
      
      <Submission
        CRN = {"10396"}
        term = {"201910"}
        show = {true}
      />
    </div>
  );
}

export default App;
