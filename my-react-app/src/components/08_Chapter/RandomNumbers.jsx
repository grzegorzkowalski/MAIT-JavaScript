import React, {useState} from 'react';
import {getRandomNumber, generateRandomID} from "../../utils/math.js";

const RandomNumbers = () => {
    const [numbers, setNumbers] = useState([]);

    const clickHandler = () => {
        const randomNumber = getRandomNumber(100,999);
        setNumbers(prev => [...prev, randomNumber]);
    }

    return (
        <div>
            <button onClick={clickHandler}>Dodaj liczbę</button>
            <ul>
                {
                    numbers.map((el) => <li key={generateRandomID()}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default RandomNumbers;
