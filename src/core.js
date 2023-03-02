// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = teachers[3]
console.log("Teacher number four", fourthTeacher);

// 2. Replace the fifth teacher in the teachers array with Patrick
teachers.splice(4, 1, "Patrick")
console.log("Updated teachers 2", teachers);

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = teachers.pop()
console.log("Updated teachers 3", teachers);
console.log("Last teacher", lastTeacher)

// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = teachers.shift()
console.log("Updated teachers 4", teachers);

// 5. Add a teacher named Vanessa to the end of the teachers array
teachers.push("Vanessa")
console.log("Updated teachers 5", teachers);

// 6. Remove Ed from the teachers array
const edIndex = teachers.indexOf("Ed")
teachers.splice(edIndex,1)
console.log("Updated teachers 6", teachers)


// 7. Add a teacher named Sarah to the beginning of the teachers array
teachers.unshift("Sarah")
console.log("Updated teachers 7", teachers)

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
