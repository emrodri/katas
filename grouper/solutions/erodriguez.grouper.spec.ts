import { groupByAge } from './erodriguez.grouper'

describe('Given an array of people (a person has age and name)', () => {
  it('should return an object where the keys are the age of the people and the value is an array of all the people with that age.', () => {
    const given = [
      { name: 'Bob', age: 20 },
      { name: 'Kate', age: 30 },
      { name: 'Jhon', age: 30 }
    ]
    const result = groupByAge(given)
    expect(result).toEqual({
      20: [{ name: 'Bob', age: 20 }],
      30: [
        { name: 'Kate', age: 30 },
        { name: 'Jhon', age: 30 }
      ]
    })
  })
})
