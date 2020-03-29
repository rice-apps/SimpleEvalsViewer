import React from "react";

function Submission({CRN, term, show }) {
  if (show) {
    const url = `https://esther.rice.edu/selfserve/swkscmt.main?p_term=${term}&p_crn=${CRN}&p_commentid=&p_confirm=1&p_type=Course`;
    return (
        <div className="Submission" style={{ height: "75vh" }}>
            <iframe height="100%" width="100%" title="iframe1" src={url}/>
        </div>
    );
  } else {
    return <div></div>;
  }
}

export default Submission;
