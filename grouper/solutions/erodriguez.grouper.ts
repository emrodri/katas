export type Person = { name: string; age: number }
export const groupByAge = (people: Person[]) =>
  people.reduce(
    (acc: any, value: Person) =>
      typeof acc[value.age] !== 'undefined'
        ? { ...acc, [value.age]: [...acc[value.age], value] }
        : { ...acc, [value.age]: [value] },
    {}
  )
