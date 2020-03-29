// import CourseData from "../data/CourseData";

const term_key = {
    "Fall" : "10",
    "Spring": "20",
    "Summer": "30"
}

function generateTerms(course) {
    let course_informations = [];
    for (let term of course["terms"]) {
        let sessions = term["sessions"];
        sessions.forEach(function (section) {
            let course_information = {"value": {"crn": "", "term_code": ""}, "label": ""};
            let instructors = section["instructors"].map(instr => instr.lastName + " " + instr.firstName)
            instructors = instructors.join(" & ")
            let term_str = term["term"];
            let crn_str = section["crn"]

            course_information["value"]["crn"] = crn_str;
            course_information["value"]["term_code"] = getTermCode(term["term"]);
            course_information["label"] = term_str + " (" + crn_str + ") // " + ((instructors === '') ? "No instructors listed" : instructors);
            course_informations.push(course_information);
        });
    }

    return course_informations;
}

function getTermCode(term_string) {
    let season = term_string.slice(0, -5);
    let year = parseInt(term_string.slice(-4)) + ((season === "Fall") ? 1 : 0);
    return "" + year + term_key[season];
}

export {
    generateTerms
};
