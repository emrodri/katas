import { countFruitsIn } from './erodriguez.fruit-counter'

describe('Given an array of repeated fruits (🍋, 🍉, 🍒)', () => {
  it('it should return an object whose keys are the unique elements, and the value is the count of each repeated element', () => {
    const given = ['🍋', '🍒', '🍉', '🍋', '🍋']
    const result = countFruitsIn(given)
    expect(result).toEqual({ '🍋': 3, '🍉': 1, '🍒': 1 })
  })
})
