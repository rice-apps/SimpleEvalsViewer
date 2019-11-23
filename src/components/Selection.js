import React, { useState, useEffect } from "react";
import Select from "react-select";

function Selection({ options, selected, show, handleChange }) {
  if (show) {
    return (
      <div style={{ width: "200px" }}>
        <Select value={selected} onChange={handleChange} options={options} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Selection;
