const EventsTest = () => {
    return (
        <>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "red"
                }}
                onClick={() => console.log("Kliknięty")}
                onMouseEnter={() => console.log("Najechano na przycisk")}
                onMouseLeave={() => console.log("Zjechano z przycisku")}
            />
        </>
    );
};

export default EventsTest;
