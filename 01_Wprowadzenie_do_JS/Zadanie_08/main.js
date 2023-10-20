function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const num = randomIntFromInterval(1,10);
console.log(num);
if (num % 2 === 0) {
    console.log("Liczba parzysta");
}
else {
    console.log("Liczba nieparzysta");
}