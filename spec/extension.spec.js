const answers = require('../src/extension.js')

describe('Arrays adding and removing:', () => {
  it("names contains a single element 'Fred'", () => {
    expect(answers.a).toEqual(['Fred'])
  })

  it('numbers is 1,2,3,4', () => {
    expect(answers.b).toEqual([1, 2, 3, 4])
  })

  it('Rio is added to the start of cities', () => {
    expect(answers.c).toEqual([
      'Rio',
      'London',
      'Shanghai',
      'New York',
      'Delhi',
      'Kuala Lumpur'
    ])
  })

  it('Red is removed from the start of colours', () => {
    expect(answers.d).toEqual(['Blue', 'Yellow'])
  })

  it('Y is removed from the keys array', () => {
    expect(answers.e).toEqual(['q', 'w', 'e', 'r', 't'])
  })

  it('Jordan is removed from the countries array', () => {
    expect(answers.f).toEqual(['Bolivia', 'Greenland'])
  })

  it('Pear is removed from fruits', () => {
    expect(answers.g).toEqual(['Apple', 'Orange'])
  })

  it('The removed item from fruits is stored in the pear variable', () => {
    expect(answers.h).toEqual('Pear')
  })
})
