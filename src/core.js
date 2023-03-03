// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = teachers[3]
console.log('Changing fourthTeacher', teachers)
// 2. Replace the fifth teacher in the teachers array with Patrick
teachers.splice(4, 1, 'Patrick')
console.log('Replacing with Patrck', teachers)

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = teachers.pop()
console.log('Removing last teacher', teachers)
// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = teachers.shift()
console.log('Removing first teacher', teachers)

// 5. Add a teacher named Vanessa to the end of the teachers array
const addTeacher = teachers.push('Vanessa')
console.log('Add Vanessa', teachers)

// 6. Remove Ed from the teachers array
teachers.splice(0, 1)
console.log(teachers)
//const edIndex = teachers.

// 7. Add a teacher named Sarah to the beginning of the teachers array
teachers.unshift('Sarah')
console.log('Adding Sarah', teachers)
// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
