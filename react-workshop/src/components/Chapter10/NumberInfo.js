const NumberInfo = ({number}) => {
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    function powerOfTwo(x) {
        return (Math.log(x)/Math.log(2)) % 1 === 0;
    }

    return (
        <ul>
            <li>{number}</li>
            <li>
                {
                    (typeof number === "number" && number)
                    ? "Liczba"
                    : "Inna wartość"
                }
            </li>
            <li>{number % 2 === 0 ? "Parzysta" : "Nieparzysta"}</li>
            {isPrime(number) && <li>Liczba pierwsza</li>}
            {powerOfTwo(number) && <li>Potęga liczby 2</li>}
        </ul>
    );
};

export default NumberInfo;
