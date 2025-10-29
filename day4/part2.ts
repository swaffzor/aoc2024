/*
--- Part Two ---

The Elf looks quizzically at you. Did you misunderstand the assignment?

Looking for the instructions, you flip over the word search to find that this isn't actually an XMAS puzzle; it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:

M.S
.A.
M.S
Irrelevant characters have again been replaced with . in the above diagram. Within the X, each MAS can be written forwards or backwards.

Here's the same example from before, but this time all of the X-MASes have been kept instead:

.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........
In this example, an X-MAS appears 9 times.

Flip the word search from the instructions back over to the word search side and try again. How many times does an X-MAS appear?
*/

type CornerDirection = "NE" | "NW" | "SE" | "SW";

const directionCorners: CornerDirection[] = ["NE", "NW", "SE", "SW"];
const directionOpposites: Record<string, CornerDirection> = {
  NE: "SW",
  NW: "SE",
  SE: "NW",
  SW: "NE",
};

export const part2 = (input: string) => {
  // find all A locations
  const aLocations = input
    .split("")
    .map((v, i) => (v === "A" ? i : null))
    .filter((n) => n !== null);

  // determine if an x-mas
  const result = aLocations.reduce((count, location) => {
    //   check corner locations (NE, NW, SW, SE)
    const numCrosses = directionCorners.reduce((innerCount, direction) => {
      //     find a corner
      const corner = getCorner(input, location, direction);
      if (!["M", "S"].includes(input[corner])) return innerCount;
      const opposite = getCorner(
        input,
        location,
        directionOpposites[direction]
      );
      //     if corner is an 'M' then opposite corner must be an 'S' and vice versa
      const temp =
        input[corner] === "S"
          ? input[opposite] === "M"
          : input[opposite] === "S";
      return innerCount + (temp ? 1 : 0);
    }, 0);
    return count + (numCrosses === 4 ? 1 : 0);
  }, 0);

  return result;
};

export const getCorner = (
  input: string,
  index: number,
  direction: CornerDirection
) => {
  const rowWidth = input.indexOf("\n") + 1;
  let horizontalOffset = direction.includes("E") ? 1 : -1;
  return (
    index + horizontalOffset + (direction.includes("S") ? rowWidth : -rowWidth)
  );
};
