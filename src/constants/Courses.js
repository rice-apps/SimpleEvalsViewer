import data from "../data/CourseData";
// console.log(data);
console.log("Look HERE");
const classes = Object.keys(data).map(key => {
    // console.log(key);
    return {label: key, value:"1"}
});

const getDeptClasses = dept => {
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