const sumStrategy: OperationStrategy = {
  check: (operator: string) => operator === '+',
  execute: (term1: number, term2: number) => term1 + term2
}

const substractStrategy: OperationStrategy = {
  check: (operator: string) => operator === '-',
  execute: (term1: number, term2: number) => term1 - term2
}

const defaultStrategy: OperationStrategy = {
  check: () => false,
  execute: acc => acc
}

const operationStrategies: OperationStrategy[] = [sumStrategy, substractStrategy]

interface OperationStrategy {
  check(operator: string): boolean
  execute(term1: number, term2: number): number
}
const findOperator = (value: string) =>
  operationStrategies.find(s => s.check(value)) || defaultStrategy

export const calculate = (operation: string): number => {
  const inputs = operation.split(' ')
  const firstValue = Number(inputs[0])
  return inputs.reduce((acc, value, index) => {
    return findOperator(value).execute(acc, Number(inputs[index + 1]))
  }, firstValue)
}
