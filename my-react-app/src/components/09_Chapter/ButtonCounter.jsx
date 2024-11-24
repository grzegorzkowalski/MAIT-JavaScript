import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick.jsx";

const ButtonCounter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick setCounter={setCounter} />
        </div>
    );
};

export default ButtonCounter;
