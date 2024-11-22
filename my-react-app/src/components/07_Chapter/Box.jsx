import React, {useEffect, useState} from 'react';

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const id = setInterval(() => {
            setColor(prev => {
                return prev === "green" ? "red" : "green";
            });
        }, 2500);

        return () => clearInterval(id);
    }, [])

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: color
        }} />
    );
};

export default Box;
