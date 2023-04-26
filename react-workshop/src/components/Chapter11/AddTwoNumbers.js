import { useState, useEffect } from "react";

const AddTwoNumbers = () => {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [result, setResult] = useState(0);

    const formHandler = () => {
        if (!isNaN(parseInt(numberOne)) && !isNaN(parseInt(numberTwo))) {
            setResult(parseInt(numberOne) + parseInt(numberTwo));
        }
        else {
            setResult("Podaj dwie liczby.");
        }
    }

    useEffect(() => {
        formHandler();
    }, [numberOne, numberTwo]);


    return (
        <form>
            <input
                type="text"
                value={numberOne}
                onChange={(e) => setNumberOne(e.target.value)}
            />
            <input
                type="text"
                value={numberTwo}
                onChange={(e) => setNumberTwo(e.target.value)}
            />
            <h1>{result}</h1>
        </form>
    );
};

export default AddTwoNumbers;
