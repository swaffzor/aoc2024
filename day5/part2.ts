/*
--- Part Two ---

While the Elves get to work printing the correctly-ordered updates, you have a little time to fix the rest of them.

For each of the incorrectly-ordered updates, use the page ordering rules to put the page numbers in the right order. For the above example, here are the three incorrectly-ordered updates and their correct orderings:

75,97,47,61,53 becomes 97,75,47,61,53.
61,13,29 becomes 61,29,13.
97,13,75,29,47 becomes 97,75,47,29,13.
After taking only the incorrectly-ordered updates and ordering them correctly, their middle page numbers are 47, 29, and 47. Adding these together produces 123.

Find the updates which are not in the correct order. What do you get if you add up the middle page numbers after correctly ordering just those updates?
*/

import { arePagesInOrder, processPart1 } from "./part1";

export const day4part2 = (input: string) => {
  const [rulesRaw, pageNumbers] = input.split("\n\n");
  return doTheWork(rulesRaw, pageNumbers);
};

const doTheWork = (rulesRaw: string, pageNumbers: string) => {
  const result = pageNumbers.split("\n").reduce((sum, update) => {
    const pages = update.split(",");

    for (let outer = 0; outer < pages.length; outer++) {
      const leftPage = pages[outer];
      const leftMatchingRules = rulesRaw
        .split("\n")
        .filter((rule) => rule.includes(leftPage));
      for (let inner = outer + 1; inner < pages.length; inner++) {
        const rightPage = pages[inner];
        const matchingRules = leftMatchingRules.filter((rule) =>
          rule.includes(rightPage)
        );
        const [leftSide, rightSide] = matchingRules[0].split("|"); // assuming only 1 matching rule

        const isMatch = leftPage === leftSide && rightPage === rightSide;
        if (isMatch) {
          return sum;
        } else {
          const fixed = fixThatShit(rulesRaw, outer, inner, pages);
          const worked = processPart1(rulesRaw, [fixed.join(",")]);
          return sum + worked;
        }
      }
    }

    return sum;
  }, 0);

  return result;
};

const fixThatShit = (
  rules: string,
  leftIndex: number,
  rightIndex: number,
  pages: string[]
) => {
  let update = [...pages];
  for (let outer = leftIndex; outer < pages.length; outer++) {
    for (let inner = outer + rightIndex; inner < pages.length; inner++) {
      makeAdjustment(update, outer, inner, rules);
    }
  }

  return [];
};

const makeAdjustment = (
  pages: string[],
  outer: number,
  inner: number,
  rulesRaw: string
) => {
  const swapped = swapPages(pages, outer, inner);
  const isValid = arePagesInOrder(rulesRaw, swapped[inner], swapped[outer]); // this checks all page positions, just want to verify a single
  if (isValid) {
    console.log("swap worked");
    return swapped;
  }
};

const isPageInOrder = (page: string, pages: string[], rulesRaw: string) => {};

const swapPages = (pages: string[], leftIndex: number, rightIndex: number) => {
  let swapped = pages.map((p, index) =>
    leftIndex === index
      ? pages[rightIndex]
      : index === rightIndex
      ? pages[leftIndex]
      : p
  );
  return swapped;
};
