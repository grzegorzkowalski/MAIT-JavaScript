import React from "react";

const Chapter01Task01 = () => {
    const numberA = parseInt(prompt("Podaj liczbę pierwszą?"));
    const numberB = parseInt(prompt("Podaj liczbę drugą?"));
    return (
        <>
            <p>{ numberA + numberB }</p>
        </>
    );
};

export default Chapter01Task01;
