import { evenNumbersOf } from './erodriguez.filter-event-numbers'

describe('Given an array of numbers it should filter the even numbers.', () => {
  it('should return a list with even number given a list of numbers', () => {
    const given = [23, 42, 12, 31, 99, 82]
    const result = evenNumbersOf(given)
    expect(result).toEqual([42, 12, 82])
  })
})
