const Buttons = () => {

    const clickHandler1 = () => {
        console.log("Pierwszy przycisk kliknięty");
    }

    const clickHandler2 = () => {
        const numberA = parseInt(prompt("Podaj pierwszą liczbę?"));
        const numberB = parseInt(prompt("Podaj drugą liczbę?"));
        console.log(numberA+numberB);
    }

    const clickHandler3 = () => {
        console.log({wysokość: window.innerHeight, szerokość: window.innerWidth});
    }

    return (
        <>
            <button onClick={clickHandler1}>Klik</button>
            <button onClick={clickHandler2}>Klik</button>
            <button onMouseEnter={clickHandler3}>Klik</button>
        </>
    );
};

export default Buttons;
