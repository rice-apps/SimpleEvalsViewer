// import data from "../data/CourseData"

// let keys = Object.keys(data)
// const temp = new Set(keys.map(x => x.slice(0,4)))
// const depts = temp.map(key => {
//     return {label: key, value:"1"}
// });
// console.log(depts)

import data from "../data/departments"

const depts = data.map(dept => ({label: dept, value: dept}))

export {
    depts
};