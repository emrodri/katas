import { totalSumOf } from './erodriguez.add-all-numbers'

describe('Given a list of numbers it should get the total by adding them together.', () => {
  it('should give a total from a list of numbers', () => {
    const given = [1, 2, 3, 4]
    const result = totalSumOf(given)
    expect(result).toBe(10)
  })
})
