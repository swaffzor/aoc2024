/*
--- Day 4: Ceres Search-- -

"Looks like the Chief's not here. Next!" One of The Historians pulls out a device and pushes the only button on it.After a brief flash, you recognize the interior of the Ceres monitoring station!

As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt; she'd like to know if you could help her with her word search (your puzzle input). She only has to find one word: XMAS.

This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words.It's a little unusual, though, as you don't merely need to find one instance of XMAS - you need to find all of them.Here are a few ways XMAS might appear, where irrelevant characters have been replaced with .:

..X...
.SAMX.
.A..A.
XMAS.S
.X....
The actual word search will be full of letters instead.For example:

MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:

....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX
Take a look at the little Elf's word search. How many times does XMAS appear?
*/

import { getPuzzleInput } from "../utils"

// check horizontal
// check horizontal backwards
// check vertical
// check vertical backwards
// check diagonal SE
// check diagonal SE backwards
// check diagonal NE
// check diagonal NE backwards
// check diagonal NW
// check diagonal NW backwards
// check diagonal NE
// check diagonal NE backwards

/*
  _ _ _ 
  _ X _ 
  _ _ _

  need XMAS state machine
  
  step 0: start
  step 1: on 'X' ? go to step 2, else move to next position
  step 2: on 'M' ? go to step 3, else move to next position
  step 3: on 'A' ? go to step 4, else move to next position
  step 4: on 'S' ? go to step 5, else move to next position
  step 5: increment counter
  */
export const part1 = (input: string) => {
  console.log(input)
  return 0;
}

const evaluatePosition = () => { }