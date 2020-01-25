import CourseData from "../data/CourseData";

const term_key = {
    "Fall" : "10",
    "Spring": "20",
    "Summer": "30"
}

function generateTerms(course_name) {
    let course_informations = [];
    let terms = CourseData[course_name];

    for (let term in terms) {
        let sections = terms[term];

        sections.forEach(function (section) {
            let course_information = {"value": {"crn": "", "term_code": ""}, "label": ""};
            let instructors = section["instructors"].join(" & ");

            course_information["value"]["crn"] = section["crn"];
            course_information["value"]["term_code"] = getTermCode(term);
            course_information["label"] = term + " // " + ((instructors === '') ? "No instructors listed" : instructors);

            course_informations.push(course_information);
        });
    }
    return course_informations;
}

function getTermCode(term_string) {
    let season = term_string.slice(0, -5);
    let year = parseInt(term_string.slice(-4)) + ((season == "Fall") ? 1 : 0);
    return "" + year + term_key[season];
}

export {
    generateTerms
};
