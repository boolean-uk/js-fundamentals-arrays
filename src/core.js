// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = teachers[3]
console.log(fourthTeacher)
// 2. Replace the fifth teacher in the teachers array with Patrick
teachers[4] = 'Patrick'
console.log(teachers[4])
console.log(teachers)

// 3. Remove the last teacher from the array and save them in lastTeacher below
// teachers[6]= 'Shazad'

console.log(teachers[6])
const lastTeacher = teachers[6]
teachers.splice(6, 1)
console.log(lastTeacher)
// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = teachers.splice(0, 1)
console.log('firstTeacher', firstTeacher)
console.log('teachers', teachers)

// 5. Add a teacher named Vanessa to the end of the teachers array
teachers.push('Vanessa')
console.log(teachers)
// 6. Remove Ed from the teachers array

// 7. Add a teacher named Sarah to the beginning of the teachers array

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
