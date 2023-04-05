import { useState } from "react";

const ColorfulBoxes = () => {
    const [boxList, setBoxList] = useState([]);

    const clickHandler = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setBoxList(prev => {
            return [...prev, <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: randomColor
            }} />]
        })
    }

    return (
        <>
            <button onClick={clickHandler}>Dodaj boksa</button>
            <div>
                {
                    boxList
                }
            </div>
        </>
    );
};

export default ColorfulBoxes;
