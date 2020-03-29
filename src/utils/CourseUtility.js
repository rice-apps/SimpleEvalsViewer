import config from "../config";

const getDeptClasses = async (dept) => {
    // Fetch courses by subject
    let response = await fetch(config.backendURL + "/courses/getCoursesBySubject?subject=" + dept);
    let result = await response.json();
    // Transform each course into {label: dept + number + long title, value is same}
    return result.map(courseObject => {
        let subject = courseObject["subject"];
        let number = courseObject["courseNum"];
        let longTitle = courseObject["longTitle"];
        let combined = subject + " " + number + " // " + longTitle;
        console.log(combined);
        return { label: combined, value: combined, detail: courseObject }
    });
}

export {
    getDeptClasses,
};