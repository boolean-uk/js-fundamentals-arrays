// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array

// forthTeacher will store the the teacher Phil
const fourthTeacher = teachers[3]
console.log(fourthTeacher)
// Phil

// 2. Replace the fifth teacher in the teachers array with Patrick
// fifth teacher is Carlo, but index is 4
teachers.splice(4, 1, 'Patrick')
console.log(teachers)
// //[
//   'Nathan',  'Ed',
//   'Steve',   'Phil',
//   'Patrick', 'Lewis',
//   'Shahzad'
// ]

// 3. Remove the last teacher from the array and save them in lastTeacher below
// pop - delete the end and store in lastTeacher variable
const lastTeacher = teachers.pop()
console.log(lastTeacher)
// Shahzad
console.log(teachers)
// [ 'Nathan', 'Ed', 'Steve', 'Phil', 'Patrick', 'Lewis' ]

// 4. Remove the first teacher from the array and save them in firstTeacher below
// Remove Nathan using shift
const firstTeacher = teachers.shift()
console.log(teachers)
// [ 'Ed', 'Steve', 'Phil', 'Patrick', 'Lewis' ]

// 5. Add a teacher named Vanessa to the end of the teachers array
// Add Vanessa
teachers.push('Vanessa')
console.log(teachers)
// [ 'Ed', 'Steve', 'Phil', 'Patrick', 'Lewis', 'Vanessa' ]

// 6. Remove Ed from the teachers array
// Ed at the beginning
teachers.shift()
console.log(teachers)
// [ 'Steve', 'Phil', 'Patrick', 'Lewis', 'Vanessa' ]

// 7. Add a teacher named Sarah to the beginning of the teachers array
// Add Sarah to beginning
teachers.unshift('Sarah')
console.log(teachers)
// [ 'Sarah', 'Steve', 'Phil', 'Patrick', 'Lewis', 'Vanessa' ]

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
