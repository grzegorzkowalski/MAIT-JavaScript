const Chapter02Task02 = () => {
    const randomNumber = () => {
        return Math.round(Math.random() * 9 + 1);
    }
    const numberA = randomNumber();
    const numberB = randomNumber();
    const answer
        = parseFloat(prompt(`Jaki jest wynik działania ${numberA} + ${numberB}?`));
    if (answer === numberA+numberB) {
        return (
            <div style={{
                backgroundColor: "green",
                width: "200px",
                height: "200px"
            }}>
                Odpowiedź poprawna
            </div>
        );
    }
    else {
        return (
            <div style={{
                backgroundColor: "red",
                width: "200px",
                height: "200px"
            }}>
                Odpowiedź niepoprawna
            </div>
        );
    }
};

export default Chapter02Task02;
