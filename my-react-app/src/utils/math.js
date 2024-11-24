export function getRandomNumber(min = 0, max = 1000) {
    return Math.round(Math.random() * (max - min) + min);
}

export function generateRandomID() {
    return new Date().toISOString() + "_" + getRandomNumber(0,1000000).toString();
}