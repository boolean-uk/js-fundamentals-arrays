// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = teachers[3]
console.log('Fourth Teacher: ' + fourthTeacher)

// 2. Replace the fifth teacher in the teachers array with Patrick
teachers[4] = 'Patrick'
console.log('5th should be Patrick: ' + teachers)

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = teachers.pop()
console.log('Should log Shahzad: ' + lastTeacher)
console.log('Shahzad should be removed: ' + teachers)

// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = teachers.shift()
console.log('Should log Nathan: ' + firstTeacher)

// 5. Add a teacher named Vanessa to the end of the teachers array
teachers.push('Vanessa')
console.log('Vanesssa should be at last index: ' + teachers)

// 6. Remove Ed from the teachers array
teachers.shift()
console.log('Ed should be removed: ' + teachers)

// 7. Add a teacher named Sarah to the beginning of the teachers array
teachers.unshift('Sarah')
console.log('Sarah should be at first index: ' + teachers)

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
