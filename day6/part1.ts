/*
--- Day 6: Guard Gallivant ---

The Historians use their fancy device again, this time to whisk you all away to the North Pole prototype suit manufacturing lab... in the year 1518! It turns out that having direct access to history is very convenient for a group of historians.

You still have to be careful of time paradoxes, and so it will be important to avoid anyone from 1518 while The Historians search for the Chief. Unfortunately, a single guard is patrolling this part of the lab.

Maybe you can work out where the guard will go ahead of time so that The Historians can search safely?

You start by making a map (your puzzle input) of the situation. For example:

....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
The map shows the current position of the guard with ^ (to indicate the guard is currently facing up from the perspective of the map). Any obstructions - crates, desks, alchemical reactors, etc. - are shown as #.

Lab guards in 1518 follow a very strict patrol protocol which involves repeatedly following these steps:

If there is something directly in front of you, turn right 90 degrees.
Otherwise, take a step forward.
Following the above protocol, the guard moves up several times until she reaches an obstacle (in this case, a pile of failed suit prototypes):

....#.....
....^....#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
Because there is now an obstacle in front of the guard, she turns right before continuing straight in her new facing direction:

....#.....
........>#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
Reaching another obstacle (a spool of several very long polymers), she turns right again and continues downward:

....#.....
.........#
..........
..#.......
.......#..
..........
.#......v.
........#.
#.........
......#...
This process continues for a while, but the guard eventually leaves the mapped area (after walking past a tank of universal solvent):

....#.....
.........#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#v..
By predicting the guard's route, you can determine which specific positions in the lab will be in the patrol path. Including the guard's starting position, the positions visited by the guard before leaving the area are marked with an X:

....#.....
....XXXXX#
....X...X.
..#.X...X.
..XXXXX#X.
..X.X.X.X.
.#XXXXXXX.
.XXXXXXX#.
#XXXXXXX..
......#X..
In this example, the guard will visit 41 distinct positions on your map.

Predict the path of the guard. How many distinct positions will the guard visit before leaving the mapped area?
*/

import { Point, Row } from "../types";
import { extractDataToPointGrid } from "../utils";

type Grid = Row<string>;
// Grid.z for visit status (0/1)
// Grid.value: "." | "#" | "^" | "v" | "<" | ">";

export const day6part1 = (input: string) => {
  const initGrid = extractDataToPointGrid<string>(input).flat() as Grid;
  // find start '^'
  // keep track of the grid and allow each point to be visited
  // make move
  //   check for collision with next position
  //   if collision, turn right
  // repeat until moved out of bounds
  let grid: Grid = initGrid.map((p) => (p.value === "^" ? { ...p, z: 1 } : p));
  let loop = true;
  while (loop) {
    grid = makeMove(grid);
    const temp = getPosition(grid);
    loop = !!temp;
  }
  return grid.reduce((sum, p) => {
    return sum + (p.z ? 1 : 0);
  }, 0);
};

const makeMove = (grid: Grid): Grid => {
  const position = getPosition(grid) ?? ({} as Point<string>);
  const nextPosition = getNextPosition(grid, position) ?? position;

  if (nextPosition?.value === "#") {
    switch (position.value) {
      case "^":
        return executeMove(position, position, grid, ">");
      case ">":
        return executeMove(position, position, grid, "v");
      case "v":
        return executeMove(position, position, grid, "<");
      case "<":
        return executeMove(position, position, grid, "^");
      default:
        return executeMove(position, position, grid, ".");
    }
  }
  return executeMove(position, nextPosition, grid, position?.value ?? "");
};

const executeMove = (
  position: Point<string>,
  nextPosition: Point<string>,
  grid: Grid,
  value: string
): Grid => {
  return grid.map((p) =>
    p.col === nextPosition?.col && p.row === nextPosition.row
      ? { ...nextPosition, value, z: 1 }
      : p.col === position.col && p.row === position.row
      ? { ...p, value: "." }
      : p
  );
};

const getPosition = (grid: Grid) => {
  return grid
    .flat()
    .find(
      (p) =>
        p.value === "^" || p.value === "v" || p.value === "<" || p.value === ">"
    );
};

const getNextPosition = (
  grid: Grid,
  position: Point<string>
): Point<string> | null => {
  let temp = { ...position };
  switch (position.value) {
    case "<":
      temp = {
        ...position,
        col: position.col - 1,
      };
      break;
    case "^":
      temp = {
        ...position,
        row: position.row - 1,
      };
      break;
    case "v":
      temp = {
        ...position,
        row: position.row + 1,
      };
      break;
    case ">":
      temp = {
        ...position,
        col: position.col + 1,
      };
      break;
    default:
      return null;
  }

  return {
    ...temp,
    value: grid.find((p) => p.row === temp.row && p.col === temp.col)?.value,
  };
};
