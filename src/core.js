// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = teachers[3];

// 2. Replace the fifth teacher in the teachers array with Patrick
teachers.splice(4, 1, "Patrick")
// console.log("Teachers with Patrick:\n", teachers)

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = teachers.pop();

// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = teachers.shift();

// 5. Add a teacher named Vanessa to the end of the teachers array
teachers.push("Vanessa")

// 6. Remove Ed from the teachers array
console.log(teachers.splice(teachers.indexOf("Ed"), 1)) 
// console.log(teachers)

// 7. Add a teacher named Sarah to the beginning of the teachers array
teachers.unshift("Sarah")

// 8. Use slice() to set the following to the first two entries in the teachers array
const firstTwoTeachersNow = teachers.slice(0, 2);
// console.log("first two", firstTwoTeachersNow)

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
