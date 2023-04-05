import { useState } from "react";

const CountThings = () => {
    const [balance, setBalance] = useState(10000);
    const [age, setAge] = useState(36);

    const moneyHandler = () => {
        setBalance(prev => prev + 1000);
    }

    // const ageHandler = () => {
    //     setAge(prev => prev + 1);
    // }

    return (
        <div>
            <p>💰 so much money: {balance}</p>
            <p>Age: {age}</p>
            <button onClick={moneyHandler}>Get rich!</button>
            <button onClick={() => setAge(prev => prev + 1)}>Get older :(</button>
        </div>
    );
};

export default CountThings;
