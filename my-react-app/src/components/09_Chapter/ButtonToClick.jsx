import React from 'react';

const ButtonToClick = ({setCounter}) => {
    const clickHandler = () => {
        if (typeof setCounter === "function") {
            setCounter(prev => prev + 1);
        }
    }

    return <button onClick={clickHandler}>Click me</button>;
};

export default ButtonToClick;
