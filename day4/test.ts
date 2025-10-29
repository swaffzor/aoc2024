import { getPuzzleInput } from "../utils";
import { findXMAS, isIndexValid, part1 } from "./part1";
import { getCorner, part2 } from "./part2";

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

  describe('part 2', () => {
    describe('getCorner', () => {
      it('NW', () => {
        const input = getPuzzleInput('day4/sampleInput')
        const result = getCorner(input, 13, 'NW')
        expect(result).toEqual(1)
      })
      it('NE', () => {
        const input = getPuzzleInput('day4/sampleInput')
        const result = getCorner(input, 13, 'NE')
        expect(result).toEqual(3)
      })
      it('SE', () => {
        const input = getPuzzleInput('day4/sampleInput')
        const result = getCorner(input, 13, 'SE')
        expect(result).toEqual(25)
      })
      it('SE index 4', () => {
        const input = getPuzzleInput('day4/sampleInput')
        const result = getCorner(input, 7, 'SE')
        expect(result).toEqual(19)
      })
      it('SW', () => {
        const input = getPuzzleInput('day4/sampleInput')
        const result = getCorner(input, 13, 'SW')
        expect(result).toEqual(23)
      })
    })

    it('solution', () => {
      expect(part2(getPuzzleInput('day4/sampleInput'))).toEqual(9)

      console.log('attempt with real input:', part2(getPuzzleInput('day4/input')))
    })
  })

})