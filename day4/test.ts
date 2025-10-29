import { getPuzzleInput } from "../utils";
import { findXMAS, isIndexValid, part1 } from "./part1";

describe('day 4', () => {
  describe('part 1', () => {
    it('isIndexValid', () => {
      expect(isIndexValid("ABC", 1, "B")).toBeTruthy()
      expect(isIndexValid("ABC", 10, "B")).toBeFalsy()
      expect(isIndexValid("ABC\nDEF", 4, "D")).toBeTruthy()
    })

    it('findXMAS SE', () => {
      expect(findXMAS(getPuzzleInput('day4/sampleInput'), 'SE', 4)).toBe(true)
    })

    it('solution', () => {
      const result = part1(getPuzzleInput('day4/sampleInput'))
      expect(result).toEqual(18)

      console.log('attempt with real input:', part1(getPuzzleInput('day4/input')))
    })

  })
})