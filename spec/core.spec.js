const {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
} = require('../src/core.js')

describe('Fundamental Arrays', () => {
  it('fourth teacher should be Phil', () => {
    expect(fourthTeacher).toEqual('Phil')
  })

  it('last teacher should be Shahzad', () => {
    expect(lastTeacher).toEqual('Shahzad')
  })

  it('first teacher should be Nathan', () => {
    expect(firstTeacher).toEqual('Nathan')
  })

  it('final teachers array', () => {
    expect(teachers).toEqual([
      'Sarah',
      'Steve',
      'Phil',
      'Patrick',
      'Lewis',
      'Vanessa'
    ])
  })
})
