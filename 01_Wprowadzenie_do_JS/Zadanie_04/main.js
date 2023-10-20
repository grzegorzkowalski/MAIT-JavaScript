const numbers = [1, 1000, 101, 11];

function compareNumbers(a, b) {
   return a - b;
}

const unMutedTable = [...numbers].sort(compareNumbers);
console.log(unMutedTable);
console.log(numbers);