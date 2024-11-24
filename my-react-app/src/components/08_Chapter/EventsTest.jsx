import React from 'react';

const EventsTest = () => {
    return (
        <div
            style={{width: "100px", height: "100px", backgroundColor: "red"}}
            onClick={() => console.log("Jestem kliknięty")}
            onMouseEnter={() => console.log("mouseEnter")}
            onMouseLeave={() => console.log("mouseLeave")}
        />

    );
};

export default EventsTest;
