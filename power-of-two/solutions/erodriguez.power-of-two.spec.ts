import { powerOfTwoOf } from './erodriguez.power-of-two'

describe('Given a list of numbers it should return a new list of numbers that are to the power of 2.', () => {
  it('should give a list with the power of 2 for a given number of elements', () => {
    const given = [1, 2, 3]
    const result = powerOfTwoOf(given)
    expect(result).toStrictEqual([1, 4, 9])
  })
})
