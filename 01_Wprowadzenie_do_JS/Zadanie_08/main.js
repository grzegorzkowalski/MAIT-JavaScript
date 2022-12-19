function oddOrEven() {
    const random = Math.ceil(Math.random() * 10);
    return random % 2 === 0 ? `Liczba parzysta: ${random}` : `Liczba nieparzysta: ${random}`;
}

console.log(oddOrEven());
console.log(oddOrEven());
console.log(oddOrEven());
console.log(oddOrEven());
console.log(oddOrEven());
