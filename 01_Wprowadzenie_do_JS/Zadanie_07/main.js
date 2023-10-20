const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

function compareNumbers(a, b) {
    return b.length - a.length;
}

biggestCities.sort(compareNumbers);
console.log(biggestCities);

console.log(biggestCities[0]);