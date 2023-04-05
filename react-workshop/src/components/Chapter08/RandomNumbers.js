import {useState} from "react";

const RandomNumbers = () => {
    const [list, setList] = useState([]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const listHandler = () => {
        setList(prev => [...prev, getRandomInt(100, 999)]);
    }

    return (
        <>
            <button onClick={listHandler}>Dodaj liczbę</button>
            <ul>
                {
                    list.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </>
    );
};

export default RandomNumbers;
