import { readInput } from "../utils";
import { day6part1 } from "./part1";
// import { day6part2 } from "./part2";

describe("day6", () => {
  it("part 1 solution", () => {
    expect(day6part1(readInput(6, true))).toEqual(41);
    console.log("day6part1:", day6part1(readInput(6)));
  });
  // it.only("part2 solution", () => {
  //   expect(day6part2(readInput(6, true))).toEqual(123);
  //   console.log("day6part2:", day6part2(readInput(6)));
  // });
});
