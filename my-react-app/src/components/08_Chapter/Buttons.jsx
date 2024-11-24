import React from 'react';

const Buttons = () => {

    const handleClick = () => {
        const numA = parseInt(prompt("Podaj pierwszą liczbę?"));
        const numB = parseInt(prompt("Podaj drugą liczbę?"));
        console.log(numA**numB, Math.pow(numA, numB));
    }

    const handleClick2 = (e) => {
        console.log(e);
        console.log(`Szerokość ekranu ${window.innerWidth}px a wysokość ${window.innerHeight}px`);
    }

    return (
        <div>
            <button onClick={() => console.log("Pierwszy przycisk kliknięty.")}>Klik 1</button>
            <button onClick={handleClick}>Klik 2</button>
            <button onClick={(e) => handleClick2(e)}>Klik 3</button>
        </div>
    );
};

export default Buttons;
