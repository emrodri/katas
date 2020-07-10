import { calculate } from './erodriguez.calculator'

describe('Calculator', () => {
  it('should sum two numbers', () => {
    const given = '2 + 2'
    const result = calculate(given)
    expect(result).toBe(4)
  })

  it('should sum multiple numbers', () => {
    const given = '2 + 2 + 1 + 5 + 10'
    const result = calculate(given)
    expect(result).toBe(20)
  })

  it('should substract multiple numbers', () => {
    const given = '2 - 2 - 1'
    const result = calculate(given)
    expect(result).toBe(-1)
  })

  it('should add and substract in multiple numbers', () => {
    const given = '2 + 5 - 5 - 1 + 3 - 1'
    const result = calculate(given)
    expect(result).toBe(3)
  })
})
