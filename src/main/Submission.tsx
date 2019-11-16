import React from "react";

const Submission: React.FC = () => {
  return (
    <div className="Submission" style={{ height: "100vh" }}>
      <form target="iframe1"
                action="https://esther.rice.edu/selfserve/swkscmt.main"
                method="POST">
                <input type="hidden" name="p_commentid" value="" />
                <input type="hidden" name="p_confirm" value="1" />
                <input type="hidden" name="p_term" value="201910" />
                <input type="hidden" name="p_type" value="Course" />
                <input type="hidden" name="p_crn" value="10396" />
                <input type="submit" value="Submit" />
            </form>
            <iframe height="100%" width="100%" name="iframe1" src=""></iframe>
    </div>
  );
};

export default Submission;
