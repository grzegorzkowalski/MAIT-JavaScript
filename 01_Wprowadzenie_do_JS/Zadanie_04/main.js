const num1 = [9, 3, 2, 7, 1, 8, 9];
const numbers = [100, 11, 12, 1, 100000, 45];


function compareNumbers(a,b) {
    return a - b;
}

num1.sort();
console.log(num1);

numbers.sort(compareNumbers);
console.log(numbers);