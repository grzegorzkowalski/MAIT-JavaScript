import React from 'react';
import {isPrime, powerOfTwo} from "../../utils/math.js";

const NumberInfo = ({number}) => {

    return (
        <ul>
            <li>{number}</li>
            <li>{number % 2 === 0 ? "Parzysta" : "Nieparzysta"}</li>
            {isPrime(number) && <li>Liczba pierwsza</li>}
            {powerOfTwo(number) && <li>Potęga liczby 2</li>}
        </ul>
    );
};

export default NumberInfo;
