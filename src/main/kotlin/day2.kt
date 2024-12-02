package org.example

import java.io.File
import kotlin.math.abs

fun main() {
    val fileName = "src/main/kotlin/day2.s-input.txt"
    println("2024 Day 2:")
    println("part 1: ${day2part1(fileName)}")
//    532 is too low
//    println("part 2: ${day1part2(fileName)}")
}

fun day2part1(input: String): String {
    var count = 0
    input.let { that ->
        count = File(that).readLines().count { line ->
            val levels = line.split(" ").map { it.toInt() }
            if (levels.zipWithNext().any { (a, b) -> abs(a - b) !in 1..3 }) return@count false
            val allIncreasing = levels.zipWithNext().all { (a, b) -> b > a }
            val allDecreasing = levels.zipWithNext().all { (a, b) -> b < a }
            allIncreasing || allDecreasing
        }
    }
    return count.toString()
}

fun day2part2(input: String): String {

    return ""
}

/*
--- Part Two ---

The engineers are surprised by the low number of safe reports until they realize they forgot to tell you about the
Problem Dampener.

The Problem Dampener is a reactor-mounted module that lets the reactor safety systems tolerate a single bad level in
what would otherwise be a safe report. It's like the bad level never happened!

Now, the same rules apply as before, except if removing a single level from an unsafe report would make it safe, the
report instead counts as safe.

More of the above example's reports are now safe:

7 6 4 2 1: Safe without removing any level.
1 2 7 8 9: Unsafe regardless of which level is removed.
9 7 6 2 1: Unsafe regardless of which level is removed.
1 3 2 4 5: Safe by removing the second level, 3.
8 6 4 4 1: Safe by removing the third level, 4.
1 3 6 7 9: Safe without removing any level.
Thanks to the Problem Dampener, 4 reports are actually safe!

Update your analysis by handling situations where the Problem Dampener can remove a single level from unsafe reports.
How many reports are now safe?
 */


/*
The unusual data (your puzzle input) consists of many reports, one report per line. Each report is a list of numbers
called levels that are separated by spaces. For example:

7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
This example data contains six reports each containing five levels.

The engineers are trying to figure out which reports are safe. The Red-Nosed reactor safety systems can only tolerate
levels that are either gradually increasing or gradually decreasing. So, a report only counts as safe if both of the
following are true:

The levels are either all increasing or all decreasing.
Any two adjacent levels differ by at least one and at most three.
In the example above, the reports can be found safe or unsafe by checking those rules:

7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
So, in this example, 2 reports are safe.

Analyze the unusual data from the engineers. How many reports are safe?
 */