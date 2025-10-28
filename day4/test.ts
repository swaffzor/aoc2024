import { getPuzzleInput } from "../utils";
import { part1 } from "./part1";

describe('day 4', () => {
  it('part 1', () => {
    expect(part1(getPuzzleInput('day4/sampleInput'))).toEqual(18)
  })
})