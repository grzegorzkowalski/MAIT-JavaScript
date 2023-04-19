import { useState } from "react";
import ButtonToClick from "./ButtonToClick";

const ButtonCounter = () => {
    const [counter, setCounter] = useState(0);
    const updateCounter = () => {
        setCounter(prev => prev + 1);
    }
    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick updateCounter={updateCounter} />
        </div>
    );
};

export default ButtonCounter;
