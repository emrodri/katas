export const primeFactorialsOf = (result: number): number[] => {
  const primes: number[] = []

  for (let primeNumber = 2; result > 1; primeNumber++) {
    while (result % primeNumber == 0) {
      primes.push(primeNumber)
      result /= primeNumber
    }
  }

  return primes
}
