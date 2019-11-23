import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Selection from "./components/Selection";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <div className="App">
      <Title />
      <ControlPanel/>
    </div>
  );
}

export default App;
