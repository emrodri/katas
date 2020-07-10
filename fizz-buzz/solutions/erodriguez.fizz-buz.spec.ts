import { fizzbuzz } from './erodriguez.fizz-buz'

describe('fizzBuzz', () => {
  it('given a number, returns a list thats starts in 1 and finish with that number', () => {
    const given = 2
    const result = fizzbuzz(given)
    expect(result).toEqual([1, 2])
  })
  it('given a number, returns a list and change multiples of 3 to fizz', () => {
    const given = 3
    const result = fizzbuzz(given)
    expect(result).toEqual([1, 2, 'fizz'])
  })
  it('given a number, returns a list and change multiples of 5 to buzz', () => {
    const given = 5
    const result = fizzbuzz(given)
    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('given a number, returns a list and change multiples of 15 to fizzbuzz', () => {
    const given = 15
    const result = fizzbuzz(given)
    expect(result).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
