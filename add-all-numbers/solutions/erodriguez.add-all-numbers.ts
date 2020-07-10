export const totalSumOf = (numbers: number[]): number =>
  numbers.reduce((acc: number, value: number) => (acc += value), 0)
