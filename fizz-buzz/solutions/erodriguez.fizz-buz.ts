const fizzStrategy: FizzBuzzStrategy = {
  check: (number: number) => number % 3 === 0 && number % 5 !== 0,
  execute: () => 'fizz'
}
const buzzStrategy: FizzBuzzStrategy = {
  check: (number: number) => number % 5 === 0 && number % 3 !== 0,
  execute: () => 'buzz'
}
const fizzbuzzStrategy: FizzBuzzStrategy = {
  check: (number: number) => number % 5 === 0 && number % 3 === 0,
  execute: () => 'fizzbuzz'
}

interface FizzBuzzStrategy {
  check(number: number): boolean
  execute(): string
}
const fizzbuzzStrategies = [fizzStrategy, buzzStrategy, fizzbuzzStrategy]

export const fizzbuzz = (number: number) =>
  Array(number)
    .fill(0)
    .map((_, index) => {
      const strategy = fizzbuzzStrategies.find(s => s.check(index + 1))
      return strategy ? strategy.execute() : index + 1
    })
