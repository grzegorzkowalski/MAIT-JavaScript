const Chapter01Task04 = () => {
    const numberA = parseInt(prompt("Podaj liczbę pierwszą?"));
    const numberB = parseInt(prompt("Podaj liczbę drugą?"));
    const operat = prompt("Wybierz rodzaj operacji (+,-,*,/)?");
    function calc(num1, num2, op) {
        switch (op) {
            case "+":
                return <h1>{num1 + num2}</h1>
            case "-":
                return <h2>{num1 - num2}</h2>
            case "*":
                return <h3>{num1 * num2}</h3>
            case "/":
                return <h4>{num1 / num2}</h4>
            default:
                return <h5>Błędny wybór</h5>

        }
    }
    return (
        <>
            {calc(numberA, numberB, operat)}
        </>
    );
};

export default Chapter01Task04;
