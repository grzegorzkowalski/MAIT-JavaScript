import { useState, useEffect } from "react";

const NumberRandomInfo = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            let randomNumber = Math.ceil(Math.random() * 5);
            setNumber(randomNumber);
            console.log(randomNumber);
        }, 2000);
        return () => clearInterval(intervalID);
    }, []);

    if (number > 3 ) {
        return (
            <h1>
                Większa od 3 - {number}
            </h1>
        );
    }
    else if (number === 3) {
        return (
            <h1>
                Równe 3 - {number}
            </h1>
        );
    }
    else {
        return (
            <h1>
                Mniejsza od 3 - {number}
            </h1>
        );
    }
};

export default NumberRandomInfo;
