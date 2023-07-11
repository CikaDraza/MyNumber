// function generateNumbers() {
//   const target = Math.floor(Math.random() * 999) + 1;
//   const numbers = [
//     Math.floor(Math.random() * 9) + 1,
//     Math.floor(Math.random() * 9) + 1,
//     Math.floor(Math.random() * 9) + 1,
//     Math.floor(Math.random() * 9) + 1,
//     getRandomElement([10, 15, 20]),
//     getRandomElement([25, 50, 75, 100])
//   ];
//   return { target, numbers };
// }

// function getRandomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

// const { target, numbers } = generateNumbers();
// console.log(target, numbers);

// console.log(`Target: ${target}`);
// console.log("Numbers:", numbers.join(", "));

    // for (let solution of solutions) {
    //   console.log(solution);
    // }

const target = [];
const numbers = [];

stop.addEventListener('click', ()=> {
  stop.removeEventListener('click', stopHandler);
  // Add new event listener
  stop.addEventListener('click', stopHandler);

  numbers.push(Number(numOne.innerHTML), Number(numTwo.innerHTML), Number(numThree.innerHTML), Number(numFour.innerHTML), Number(numFive.innerHTML), Number(numSix.innerHTML))
  target.push(targetResult && Number(targetResult.innerHTML));

  function findSolution(target, numbers) {
    let solutions = [];
    for (let perm of permute(numbers)) {
      for (let ops of permuteOperations()) {
        try {
          const result = evaluateExpression(perm, ops);
          if (Math.abs(result - target) < 1e-10) {
            solutions.push(formatSolution(perm, ops, target));
          }
        } catch (error) {
          if (error instanceof ZeroDivisionError) {
            // Ignore division by zero errors
            continue;
          } else {
            throw error;
          }
        }
      }
    }
    return solutions;
  }

  function permute(arr, m = []) {
    if (arr.length === 0) {
      return [m];
    } else {
      let permutations = [];
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permutations = permutations.concat(permute(curr.slice(), m.concat(next)));
      }
      return permutations;
    }
  }

  function permuteOperations() {
    const operations = [
      ['+', (a, b) => a + b],
      ['-', (a, b) => a - b],
      ['*', (a, b) => a * b],
      ['/', (a, b) => a / b]
    ];

    const opsPermutations = [];
    for (let i = 0; i < operations.length; i++) {
      for (let j = 0; j < operations.length; j++) {
        for (let k = 0; k < operations.length; k++) {
          for (let l = 0; l < operations.length; l++) {
            opsPermutations.push([operations[i], operations[j], operations[k], operations[l]]);
          }
        }
      }
    }
    return opsPermutations;
  }

  // Custom error class for division by zero
  class ZeroDivisionError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ZeroDivisionError';
    }
  }

  function evaluateExpression(numbers, operations) {
    let result = numbers[0];
    for (let i = 0; i < operations.length; i++) {
      const operation = operations[i];
      const number = numbers[i + 1];
      if (operation[0] === '/' && number === 0) {
        throw new ZeroDivisionError('Division by zero');
      }
      result = operation[1](result, number);
    }
    return result;
  }

  function formatSolution(numbers, operations, target) {
    let solution = "";
    let currentExpression = String(numbers[0]);

    for (let i = 0; i < numbers.length - 1; i++) {
      if (i < operations.length) {
        const operation = operations[i];
        const number = numbers[i + 1];
        const nextOperation = operations[i + 1];

        if (!nextOperation || nextOperation[1] === operations[i][1]) {
          currentExpression += ` ${operation[0]} ${number}`;
        } else {
          if (currentExpression.length > 1) {
            currentExpression = `(${currentExpression}) ${operation[0]} ${number}`;
          } else {
            currentExpression += ` ${operation[0]} ${number}`;
          }
        }
      } else {
        currentExpression += ` ${numbers[i + 1]}`;
      }
    }

    // if (!currentExpression.endsWith(' ')) {
    //   currentExpression = currentExpression.replace(/\d$/, "");
    // }

    if (!currentExpression.endsWith(' ')) {
      const lastNumberIndex = currentExpression.lastIndexOf(' ');
      if (lastNumberIndex !== -1) {
        currentExpression = currentExpression.substring(0, lastNumberIndex);
      }
    }
    

    solution += `${currentExpression} = ${target}`;

    return solution;
  }

    const solutions = findSolution(Number(target), numbers);
    console.log(solutions);
    if (solutions.length > 0) {
      console.log("Solutions found:");
      console.log(solutions[0]);
      let displaySolution = solutions[0];
      // Replace sign * with x
      displaySolution = displaySolution.replace(/\*/g, " x ");

      // Replace sign / with ÷
      displaySolution = displaySolution.replace(/\//g, " ÷ ");

      console.log(displaySolution);
      displayCpu.innerHTML = displaySolution;
      
    } else {
      console.log("No solutions found.");
    }
});

function stopHandler() {
  numbers.push(Number(numOne.innerHTML), Number(numTwo.innerHTML), Number(numThree.innerHTML), Number(numFour.innerHTML), Number(numFive.innerHTML), Number(numSix.innerHTML))
  target.push(targetResult && Number(targetResult.innerHTML));

  function findSolution(target, numbers) {
    let solutions = [];
    for (let perm of permute(numbers)) {
      for (let ops of permuteOperations()) {
        try {
          const result = evaluateExpression(perm, ops);
          if (Math.abs(result - target) < 1e-10) {
            solutions.push(formatSolution(perm, ops, target));
          }
        } catch (error) {
          if (error instanceof ZeroDivisionError) {
            // Ignore division by zero errors
            continue;
          } else {
            throw error;
          }
        }
      }
    }
    return solutions;
  }

  function permute(arr, m = []) {
    if (arr.length === 0) {
      return [m];
    } else {
      let permutations = [];
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permutations = permutations.concat(permute(curr.slice(), m.concat(next)));
      }
      return permutations;
    }
  }

  function permuteOperations() {
    const operations = [
      ['+', (a, b) => a + b],
      ['-', (a, b) => a - b],
      ['*', (a, b) => a * b],
      ['/', (a, b) => a / b]
    ];

    const opsPermutations = [];
    for (let i = 0; i < operations.length; i++) {
      for (let j = 0; j < operations.length; j++) {
        for (let k = 0; k < operations.length; k++) {
          for (let l = 0; l < operations.length; l++) {
            opsPermutations.push([operations[i], operations[j], operations[k], operations[l]]);
          }
        }
      }
    }
    return opsPermutations;
  }

  // Custom error class for division by zero
  class ZeroDivisionError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ZeroDivisionError';
    }
  }

  function evaluateExpression(numbers, operations) {
    let result = numbers[0];
    for (let i = 0; i < operations.length; i++) {
      const operation = operations[i];
      const number = numbers[i + 1];
      if (operation[0] === '/' && number === 0) {
        throw new ZeroDivisionError('Division by zero');
      }
      result = operation[1](result, number);
    }
    return result;
  }

  function formatSolution(numbers, operations, target) {
    let solution = "";
    let currentExpression = String(numbers[0]);

    for (let i = 0; i < numbers.length - 1; i++) {
      if (i < operations.length) {
        const operation = operations[i];
        const number = numbers[i + 1];
        const nextOperation = operations[i + 1];

        if (!nextOperation || nextOperation[1] === operations[i][1]) {
          currentExpression += ` ${operation[0]} ${number}`;
        } else {
          if (currentExpression.length > 1) {
            currentExpression = `(${currentExpression}) ${operation[0]} ${number}`;
          } else {
            currentExpression += ` ${operation[0]} ${number}`;
          }
        }
      } else {
        currentExpression += ` ${numbers[i + 1]}`;
      }
    }

    // if (!currentExpression.endsWith(' ')) {
    //   currentExpression = currentExpression.replace(/\d$/, "");
    // }

    if (!currentExpression.endsWith(' ')) {
      const lastNumberIndex = currentExpression.lastIndexOf(' ');
      if (lastNumberIndex !== -1) {
        currentExpression = currentExpression.substring(0, lastNumberIndex);
      }
    }
    

    solution += `${currentExpression} = ${target}`;

    return solution;
  }

    const solutions = findSolution(Number(target), numbers);
    console.log(solutions);
    if (solutions.length > 0) {
      console.log("Solutions found:");
      console.log(solutions[0]);
      let displaySolution = solutions[0];
      // Replace sign * with x
      displaySolution = displaySolution.replace(/\*/g, " x ");

      // Replace sign / with ÷
      displaySolution = displaySolution.replace(/\//g, " ÷ ");

      console.log(displaySolution);
      displayCpu.innerHTML = displaySolution;
      
    } else {
      console.log("No solutions found.");
    }
}