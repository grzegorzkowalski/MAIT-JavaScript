const Chapter02Task04 = () => {
    const answer = prompt("Wybierz kolor ramki(czerwony, zielony, niebieski)?");
    let color = "";
    let isOk = true;
    switch (answer) {
        case "czerwony":
            color = "red";
            break;
        case "zielony":
            color = "green";
            break;
        case "niebieski":
            color = "blue";
            break;
        default:
            isOk = false;
    }
    const good = <div style={{
            width: `200px`,
            height: `200px`,
            borderWidth: `10px`,
            borderStyle: `solid`,
            borderColor: color
        }}
    />
    const bad = <div>"Nieprawidłowy kolor"</div>;
    return (
        <>
            {isOk ? good : bad}
        </>
    );
};

export default Chapter02Task04;
