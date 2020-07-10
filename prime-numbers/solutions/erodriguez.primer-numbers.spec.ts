import { primeFactorialsOf } from './erodriguez.primer-numbers'

describe('Primer factorials', () => {
  it('given a number, it should decompose on prime numbers', () => {
    const given = 6
    const result = primeFactorialsOf(given)
    expect(result).toEqual([2, 3])
  })

  it('given a number, it should decompose on prime numbers with no sequential values', () => {
    const given = 55
    const result = primeFactorialsOf(given)
    expect(result).toEqual([5, 11])
  })

  it('given a number, it should decompose on multiple primes', () => {
    const given = 60
    const result = primeFactorialsOf(given)
    expect(result).toEqual([2, 2, 3, 5])
  })
})
