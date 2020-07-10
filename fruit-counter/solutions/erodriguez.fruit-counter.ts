export const countFruitsIn = (fruits: string[]) =>
  fruits.reduce(
    (acc: any, value: string) =>
      typeof acc[value] !== 'undefined'
        ? { ...acc, [value]: acc[value] + 1 }
        : { ...acc, [value]: 1 },
    {}
  )
