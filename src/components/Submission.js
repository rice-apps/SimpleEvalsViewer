import React, { useState, useEffect } from "react";
import Select from "react-select";

function Submission({CRN, term, show }) {
  console.log(term);
  let term_value;
  let split_term = term.toString().split(" ") // ["Spring", "2020"]

  // Adjust the year
  if (split_term[0] == "Fall") {
    term_value = parseInt(Number(split_term[1]) + 1) + "10";
  } else {
    term_value = split_term[1] + "20";
  }
  if (show) {
    return (
        <div className="Submission" style={{ height: "100vh" }}>
        <form target="iframe1"
                  action="https://esther.rice.edu/selfserve/swkscmt.main"
                  method="POST">
                  <input type="hidden" name="p_commentid" value="" />
                  <input type="hidden" name="p_confirm" value="1" />
                  <input type="hidden" name="p_term" value={term_value} />
                  <input type="hidden" name="p_type" value="Course" />
                  <input type="hidden" name="p_crn" value={CRN} />
                  <input type="submit" value="Submit" />
              </form>
              <iframe height="100%" width="100%" name="iframe1" src=""></iframe>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Submission;
