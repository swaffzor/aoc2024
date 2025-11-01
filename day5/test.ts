import { readInput } from "../utils";
import { day4part1 } from "./part1";
import { day4part2 } from "./part2";

describe("day5", () => {
  it("part 1 solution", () => {
    expect(day4part1(readInput(5, true))).toEqual(143);
    console.log("day4part1:", day4part1(readInput(5)));
  });
  it.only("part2 solution", () => {
    expect(day4part2(readInput(5, true))).toEqual(123);
    console.log("day4part2:", day4part2(readInput(5)));
  });
});
