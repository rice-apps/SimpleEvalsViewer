import React, { useState, useEffect } from "react";
import Select from "react-select";

function Submission({CRN, term, show }) {
  if (show) {
    return (
        <div className="Submission" style={{ height: "100vh" }}>
        <form target="iframe1"
                  action="https://esther.rice.edu/selfserve/swkscmt.main"
                  method="POST">
                  <input type="hidden" name="p_commentid" value="" />
                  <input type="hidden" name="p_confirm" value="1" />
                  <input type="hidden" name="p_term" value={term} />
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