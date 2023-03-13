const Chapter01Task02 = () => {
    const yearOfBirth = parseFloat(prompt("Podaj rok urodzenia?"));
    return (
        <>
            <h1>Twój wiek to: { new Date().getFullYear() - yearOfBirth }</h1>
        </>
    );
};

export default Chapter01Task02;
