import React, {useState} from 'react';
import {getRandomNumber} from "../../utils/math.js";

const CrazyDiv = () => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    const handleMouseEnter = () => {
        setLeft(getRandomNumber());
        setTop(getRandomNumber());
    }

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                position: "absolute",
                left: `${left}px`,
                top: `${top}px`
            }}
            onMouseEnter={handleMouseEnter}
        />
    );
};

export default CrazyDiv;
