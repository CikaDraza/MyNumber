# MyNumber game
This is the first game I made myself

There are no examples on the Internet or as a tutorial on YouTube, so I had to figure out for myself how to solve the functionality of this game.

The idea for this game is from the popular TV quiz Slagalica https://i.ytimg.com/vi/_HsEBxSEn2M/hqdefault.jpg.

https://cikadraza.github.io/MyNumber/

# Explanation
My number is a game of numbers and computation.
The computer randomly selects one target number from 1 to 999, as well as six smaller numbers. These six numbers should be combined with mathematical operations (addition, subtraction, multiplication, and division) to get the target number.

# How CPU finds possible solutions
The approach used in the code I provided is known as "brute-force search" or "exhaustive search". In this approach, the computer systematically generates and evaluates all possible combinations of numbers and operations to find solutions that meet certain criteria.

In the code, the function generates all permutations of the given numbers and all permutations of the available operations. It then evaluates each combination of numbers and operations and checks if the result matches the target value. If a match is found, it is considered a solution.
