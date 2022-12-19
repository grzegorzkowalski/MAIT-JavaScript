const numbers = [1, 1000, 101, 11];

function compareNumbers(a, b) {
   return a - b;
}

console.log([5,3,8,7,2].sort());
console.log(numbers.sort(compareNumbers));
