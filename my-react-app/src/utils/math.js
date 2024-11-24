export function getRandomNumber(min = 0, max = 1000) {
    return Math.round(Math.random() * (max - min) + min);
}

export function generateRandomID() {
    return new Date().toISOString() + "_" + getRandomNumber(0,1000000).toString();
}

export function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

export function powerOfTwo(x) {
    return (Math.log(x)/Math.log(2)) % 1 === 0;
}