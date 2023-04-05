import { useState } from "react";

const TextTyper = ({text}) => {
    const [index, setIndex] = useState(1);

    const addToIndex = () => {
        setIndex(prev => {
            if (prev + 1 <= text.length) {
                return prev + 1
            }
            else {
                return prev;
            }
        });
    }

    const removeFromIndex = () => {
        setIndex(prev => {
            if (prev - 1 > 0) {
                return prev - 1;
            }
            else {
                return prev;
            }
        });
    }

    return (
        <div>
            {text.slice(0,index)}
            <div>
                <button onClick={removeFromIndex}>-</button>
                <button onClick={addToIndex}>+</button>
            </div>
        </div>
    );
};

export default TextTyper;
