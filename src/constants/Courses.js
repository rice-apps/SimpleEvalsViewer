import data from "../data/CourseData";

import config from "../config";

// console.log(data);
console.log("Look HERE");
const classes = Object.keys(data).map(key => {
    // console.log(key);
    return {label: key, value:"1"}
});

const getDeptClasses = async (dept) => {
    // Get subjects

    let response = await fetch(config.backendURL + "/courses/getCoursesBySubject?subject=" + dept);
    console.log(response);
    let result = await response.json();
    console.log(result);

    let classes = result.map(courseObject => {
        let subject = courseObject["subject"];
        let number = courseObject["courseNum"];
        let longTitle = courseObject["longTitle"];
        let combined = subject + " " + number + " // " + longTitle;
        console.log(combined);
        return { label: combined, value: combined, detail: courseObject }
    });

    let detail = result;
    return {
        classes,
        detail
    };

    // Fetch courses by subject

    // Transform each course into {label: dept + number + long title, value is same}
    
    let keys = Object.keys(data).filter(key => key.slice(0,4) === dept).sort()
    console.log(keys);
    console.log(dept);
    return keys.map(key => {
        return {label: key, value: key}
    });
}

export {
    classes,
    getDeptClasses,
};