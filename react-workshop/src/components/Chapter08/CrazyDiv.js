import { useState } from "react";

const CrazyDiv = () => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleHover = (min, max) => {
        setLeft(getRandomInt(min, max));
        setTop(getRandomInt(min, max));
    }

    return (
        <div
            onMouseEnter={() => handleHover(0, 600)}
            style={{
            width: "200px",
            height: "200px",
            backgroundColor: "red",
            position: "absolute",
            left,
            top
        }} />
    );
};

export default CrazyDiv;
