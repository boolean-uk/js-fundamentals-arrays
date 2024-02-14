const { a, b, c, d, e, f, i, j, k } = require('../src/advanced')

describe('Advanced Arrays', () => {
  // 1. Set this variable to the sum of the first and last numbers in the nums array
  it('firstPlusLast is 23', () => {
    expect(a).toEqual(23)
  })
  // 2. set this variable to the index where the number 14 is located in the array
  it('indexOfFourteen is 6', () => {
    expect(b).toEqual(6)
  })

  // 3. remove the last 3 elements of the array in one single instruction
  it('withoutLastThree is [2, 7, 3, 8, 9, 11]', () => {
    expect(c).toEqual([2, 7, 3, 8, 9, 11])
  })

  // 4. Add the number 15 before the number 8 in the array
  it('withFifteen is [2, 7, 3, 15, 8, 9, 11, 14, 1, 21]', () => {
    expect(d).toEqual([2, 7, 3, 15, 8, 9, 11, 14, 1, 21])
  })

  // 5. check if the array includes the number 100
  it('includesHundred is false', () => {
    expect(e).toEqual(false)
  })

  // 6. extract the numbers 7, 3, 8 into a new array
  it('withSevenThreeEight is [7, 3, 8]', () => {
    expect(f).toEqual([7, 3, 8])
  })

  // 7. add the numbers from otherNums to the end of nums
  it('combinedNums is [2, 7, 3, 8, 9, 11, 14, 1, 21, 4, 6, 12, 13]', () => {
    expect(i).toEqual([2, 7, 3, 8, 9, 11, 14, 1, 21, 4, 6, 12, 13])
  })

  // 8. create a new array with the cities 'Rome', 'Paris' and 'Barcelona'
  it('newCities is ["Rome", "Paris", "Barcelona"]', () => {
    expect(j).toEqual(['Rome', 'Paris', 'Barcelona'])
  })

  // 9. use the spread operator ... to clone the cities array and add 'Berlin' to the end and 'Sydney' to the start
  it('moreCities is ["Sydney", "Rome", "Paris", "Barcelona", "Berlin"]', () => {
    expect(k).toEqual(['Sydney', 'Rome', 'Paris', 'Barcelona', 'Berlin'])
  })
})
